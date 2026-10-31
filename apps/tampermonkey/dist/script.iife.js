// ==UserScript==
// @name         Next.js i18n Tampermonkey Script
// @namespace    https://github.com/xiaoyu2er/nextjs-i18n-docs
// @website      https://github.com/xiaoyu2er/nextjs-i18n-docs
// @version      0.0.3
// @updateURL    https://raw.githubusercontent.com/xiaoyu2er/nextjs-i18n-docs/refs/heads/dev/apps/tampermonkey/dist/script.iife.js
// @downloadURL    https://raw.githubusercontent.com/xiaoyu2er/nextjs-i18n-docs/refs/heads/dev/apps/tampermonkey/dist/script.iife.js
// @description  Adds a translation button to nextjs.org with links to the translated documentation on fanyi.dev
// @author       https://github.com/xiaoyu2er
// @match        https://nextjs.org/*
// @grant        GM_xmlhttpRequest
// @run-at       document-end
// ==/UserScript==

(function() {
  "use strict";
  function devLog(...args) {
  }
  const FANYI_BASE = "https://fanyi.dev/nextjs";
  const FANYI_VERSIONS = ["13", "14", "15"];
  const LOCALES = [
    { locale: "zh-hans", flag: "🇨🇳", nativeName: "简体中文" },
    { locale: "ja", flag: "🇯🇵", nativeName: "日本語" }
  ];
  function fanyiUrl(locale, pathname) {
    const versioned = pathname.match(/^\/docs\/(\d+)(\/.*)?$/);
    if (versioned) {
      return FANYI_VERSIONS.includes(versioned[1]) ? `${FANYI_BASE}/${locale}/v${versioned[1]}/docs${versioned[2] ?? ""}` : `${FANYI_BASE}/${locale}/docs`;
    }
    if (pathname === "/docs" || pathname.startsWith("/docs/")) {
      return `${FANYI_BASE}/${locale}${pathname}`;
    }
    return `${FANYI_BASE}/${locale}/docs`;
  }
  function waitForTargetButton(callback, maxAttempts = 30) {
    let attempts = 0;
    const check = () => {
      try {
        const learnButton = document.querySelector('a[href="/learn"]');
        const searchButton = document.querySelector(
          'button[aria-label="Search documentation"]'
        );
        if (learnButton || searchButton) {
          callback();
          return;
        }
        if (attempts < maxAttempts) {
          attempts++;
          setTimeout(check, 200);
        } else {
          devLog(
            "⚠️ Neither Learn button nor Search button found after maximum attempts"
          );
        }
      } catch (error) {
      }
    };
    check();
  }
  function createTranslationDropdown() {
    const enabledLocales = LOCALES;
    const container = document.createElement("div");
    container.className = "next-i18n-translate-container";
    container.style.cssText = `
    position: relative;
    display: inline-block;
    margin-left: 4px;
  `;
    const button = document.createElement("button");
    button.style.cssText = `
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    border-radius: 6px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    transition: all 0.2s ease;
    color: #666;
    position: relative;
  `;
    button.title = "View this page in other languages";
    button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--geist-foreground)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-5"><path d="m5 8 6 6"></path><path d="m4 14 6-6 2-3"></path><path d="M2 5h12"></path><path d="M7 2h1"></path><path d="m22 22-5-10-5 10"></path><path d="M14 18h6"></path></svg>`;
    button.addEventListener("mouseenter", () => {
      button.style.backgroundColor = "#f1f3f4";
      button.style.transform = "scale(1.1)";
      button.style.color = "#333";
    });
    button.addEventListener("mouseleave", () => {
      button.style.backgroundColor = "transparent";
      button.style.transform = "scale(1)";
      button.style.color = "#666";
    });
    const dropdown = document.createElement("div");
    dropdown.className = "next-i18n-translate-dropdown";
    dropdown.style.cssText = `
    position: absolute;
    top: 100%;
    right: 0;
    background: white;
    border: 1px solid #e5e5e5;
    border-radius: 8px;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    z-index: 10000;
    margin-top: 4px;
    min-width: 200px;
    max-height: 300px;
    overflow-y: auto;
    display: none;
    opacity: 0;
    transform: translateY(-8px);
    transition: opacity 0.2s ease, transform 0.2s ease;
  `;
    const positionDropdown = () => {
      const buttonRect = button.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      dropdown.style.left = "auto";
      dropdown.style.right = "0";
      dropdown.style.top = "100%";
      dropdown.style.bottom = "auto";
      dropdown.style.marginTop = "4px";
      dropdown.style.marginBottom = "0";
      if (buttonRect.right < 200) {
        dropdown.style.right = "auto";
        dropdown.style.left = "0";
      }
      if (buttonRect.bottom + 300 > viewportHeight) {
        dropdown.style.top = "auto";
        dropdown.style.bottom = "100%";
        dropdown.style.marginTop = "0";
        dropdown.style.marginBottom = "4px";
      }
    };
    for (let index = 0; index < enabledLocales.length; index++) {
      const locale = enabledLocales[index];
      const option = document.createElement("div");
      option.className = "next-i18n-locale-option";
      option.style.cssText = `
      padding: 12px 16px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      border-bottom: ${index === enabledLocales.length - 1 ? "none" : "1px solid #f0f0f0"};
      transition: background-color 0.15s ease;
      user-select: none;
    `;
      const flag = document.createElement("span");
      flag.style.cssText = "font-size: 16px; min-width: 20px;";
      flag.textContent = locale.flag;
      const name = document.createElement("span");
      name.style.cssText = "font-weight: 500; color: #333; flex: 1;";
      name.textContent = locale.nativeName;
      option.appendChild(flag);
      option.appendChild(name);
      option.addEventListener("mouseenter", () => {
        option.style.backgroundColor = "#f8f9fa";
      });
      option.addEventListener("mouseleave", () => {
        option.style.backgroundColor = "transparent";
      });
      option.addEventListener("click", () => {
        hideDropdown();
        try {
          const targetUrl = fanyiUrl(locale.locale, window.location.pathname);
          devLog(`🌐 Navigating to ${locale.nativeName}: ${targetUrl}`);
          window.location.href = targetUrl;
        } catch (error) {
          window.location.href = `${FANYI_BASE}/${locale.locale}/docs`;
        }
      });
      dropdown.appendChild(option);
    }
    let isDropdownOpen = false;
    function showDropdown() {
      dropdown.style.display = "block";
      positionDropdown();
      requestAnimationFrame(() => {
        dropdown.style.opacity = "1";
        dropdown.style.transform = "translateY(0)";
      });
      isDropdownOpen = true;
    }
    function hideDropdown() {
      dropdown.style.opacity = "0";
      dropdown.style.transform = "translateY(-8px)";
      setTimeout(() => {
        if (!isDropdownOpen) {
          dropdown.style.display = "none";
        }
      }, 200);
      isDropdownOpen = false;
    }
    button.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (isDropdownOpen) {
        hideDropdown();
      } else {
        showDropdown();
      }
    });
    document.addEventListener("click", (e) => {
      if (!container.contains(e.target) && isDropdownOpen) {
        hideDropdown();
      }
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && isDropdownOpen) {
        hideDropdown();
      }
    });
    container.appendChild(button);
    container.appendChild(dropdown);
    return container;
  }
  function addTranslationButton() {
    var _a, _b;
    let addedCount = 0;
    const learnButtonSelectors = [
      'a[href="/learn"]',
      'a[href*="/learn"]',
      'nav a:contains("Learn")',
      '[data-testid="learn-link"]'
    ];
    let learnButton = null;
    for (const selector of learnButtonSelectors) {
      learnButton = document.querySelector(selector);
      if (learnButton) {
        break;
      }
    }
    if (learnButton) {
      const existingLearnButton = (_a = learnButton.parentNode) == null ? void 0 : _a.querySelector(
        ".next-i18n-translate-container"
      );
      if (!existingLearnButton) {
        try {
          const translationDropdown = createTranslationDropdown();
          translationDropdown.setAttribute("data-placement", "learn-button");
          const parentNode = learnButton.parentNode;
          if (parentNode) {
            if (learnButton.nextSibling) {
              parentNode.insertBefore(
                translationDropdown,
                learnButton.nextSibling
              );
            } else {
              parentNode.appendChild(translationDropdown);
            }
            devLog("✅ Translation button added next to Learn button");
            addedCount++;
          }
        } catch (error) {
        }
      }
    }
    const searchButtonSelectors = [
      'button[aria-label="Search documentation"]',
      "button.navbar_search__dZT2b",
      'button[data-variant="small"]'
    ];
    let searchButton = null;
    for (const selector of searchButtonSelectors) {
      try {
        searchButton = document.querySelector(selector);
        if (searchButton) {
          devLog(`🔍 Found Search button with selector: ${selector}`);
          break;
        }
      } catch (_error) {
      }
    }
    if (searchButton) {
      const existingSearchButton = (_b = searchButton.parentNode) == null ? void 0 : _b.querySelector(
        ".next-i18n-translate-container"
      );
      if (!existingSearchButton) {
        try {
          const translationDropdown = createTranslationDropdown();
          translationDropdown.setAttribute("data-placement", "search-button");
          const parentNode = searchButton.parentNode;
          if (parentNode) {
            if (searchButton.nextSibling) {
              parentNode.insertBefore(
                translationDropdown,
                searchButton.nextSibling
              );
            } else {
              parentNode.appendChild(translationDropdown);
            }
            devLog("✅ Translation button added next to Search button");
            addedCount++;
          }
        } catch (error) {
        }
      }
    }
    if (addedCount === 0 && !learnButton && !searchButton) {
      return false;
    }
    if (addedCount > 0) {
      setTimeout(() => {
        const verifyButtons = document.querySelectorAll(
          ".next-i18n-translate-container"
        );
        if (verifyButtons.length === 0) {
          setTimeout(() => {
            addTranslationButton();
          }, 1e3);
        } else {
          devLog(
            `🎉 ${verifyButtons.length} translation button(s) are stable and working!`
          );
        }
      }, 500);
    }
    return addedCount > 0;
  }
  function initializeScript() {
    setTimeout(() => {
      addTranslationButton();
      setTimeout(() => {
        const existingButtons = document.querySelectorAll(
          ".next-i18n-translate-container"
        );
        if (existingButtons.length === 0) {
          waitForTargetButton(() => {
            devLog(
              "🎯 Target button found, attempting to add translation button"
            );
            addTranslationButton();
          });
        }
      }, 500);
    }, 1e3);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeScript);
  } else {
    initializeScript();
  }
})();
