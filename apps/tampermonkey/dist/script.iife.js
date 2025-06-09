// ==UserScript==
// @name         Next.js i18n Tampermonkey Script
// @namespace    https://github.com/xiaoyu2er/nextjs-i18n-docs
// @website      https://github.com/xiaoyu2er/nextjs-i18n-docs
// @version      0.0.1
// @updateURL    https://raw.githubusercontent.com/xiaoyu2er/nextjs-i18n-docs/refs/heads/dev/apps/tampermonkey/dist/script.iife.js
// @downloadURL    https://raw.githubusercontent.com/xiaoyu2er/nextjs-i18n-docs/refs/heads/dev/apps/tampermonkey/dist/script.iife.js
// @description  Adds a translation button to nextjs.org with links to community-maintained translated documentation
// @author       https://github.com/xiaoyu2er
// @match        https://nextjs.org/*
// @grant        GM_xmlhttpRequest
// @run-at       document-end
// ==/UserScript==

(function() {
  "use strict";
  var LOCALES = [
    {
      color: "from-blue-500 to-blue-600",
      description: "Official Next.js documentation in English",
      enabled: true,
      flag: "🇺🇸",
      locale: "en",
      name: "English",
      nativeName: "English",
      url: "https://en.nextjs.im"
    },
    {
      color: "from-red-500 to-red-600",
      description: "Next.js 简体中文文档",
      enabled: true,
      flag: "🇨🇳",
      locale: "zh-hans",
      name: "Simplified Chinese",
      nativeName: "简体中文",
      url: "https://zh-hans.nextjs.im"
    },
    {
      color: "from-purple-500 to-purple-600",
      description: "Next.js 繁體中文文檔",
      enabled: true,
      flag: "🇭🇰",
      locale: "zh-hant",
      name: "Traditional Chinese",
      nativeName: "繁體中文",
      url: "https://zh-hant.nextjs.im"
    },
    {
      color: "from-pink-500 to-pink-600",
      description: "Next.js 日本語ドキュメント",
      enabled: true,
      flag: "🇯🇵",
      locale: "ja",
      name: "Japanese",
      nativeName: "日本語",
      url: "https://ja.nextjs.im"
    },
    {
      color: "from-amber-500 to-amber-600",
      description: "Documentación de Next.js en español",
      enabled: true,
      flag: "🇪🇸",
      locale: "es",
      name: "Spanish",
      nativeName: "Español",
      url: "https://es.nextjs.im"
    },
    {
      color: "from-gray-500 to-gray-600",
      description: "Next.js Dokumentation auf Deutsch",
      enabled: true,
      flag: "🇩🇪",
      locale: "de",
      name: "German",
      nativeName: "Deutsch",
      url: "https://de.nextjs.im"
    },
    {
      color: "from-indigo-500 to-indigo-600",
      description: "Documentation Next.js en français",
      enabled: true,
      flag: "🇫🇷",
      locale: "fr",
      name: "French",
      nativeName: "Français",
      url: "https://fr.nextjs.im"
    },
    {
      color: "from-emerald-500 to-emerald-600",
      description: "Документация Next.js на русском языке",
      enabled: true,
      flag: "🇷🇺",
      locale: "ru",
      name: "French",
      nativeName: "Русский",
      url: "https://ru.nextjs.im"
    },
    {
      color: "from-green-500 to-green-600",
      description: "وثائق Next.js باللغة العربية",
      enabled: true,
      flag: "🇸🇦",
      locale: "ar",
      name: "Arabic",
      nativeName: "العربية",
      url: "https://ar.nextjs.im"
    }
  ];
  LOCALES.reduce(
    (acc, locale) => {
      acc[locale.locale] = locale.url;
      return acc;
    },
    {}
  );
  const DEBUG_KEY = "next-i18n-debug";
  function debugLog(...args) {
    if (localStorage.getItem(DEBUG_KEY) === "true") {
      console.log("[DEBUG]", ...args);
    }
  }
  console.log("🌐 Next.js Translation Helper loaded (React-compatible version)");
  debugLog(
    'Debug mode enabled. Use localStorage.removeItem("next-i18n-debug") to disable.'
  );
  function waitForLearnButton(callback, maxAttempts = 30) {
    let attempts = 0;
    const check = () => {
      try {
        const learnButton = document.querySelector('a[href="/learn"]');
        if (learnButton) {
          callback();
        } else if (attempts < maxAttempts) {
          attempts++;
          setTimeout(check, 200);
        } else {
          console.log("⚠️ Learn button not found after maximum attempts");
        }
      } catch (error) {
        console.warn("Error checking for Learn button:", error);
      }
    };
    check();
  }
  function createTranslationDropdown() {
    const enabledLocales = LOCALES.filter((l) => l.enabled && l.locale !== "en");
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
    button.textContent = "🌐";
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
        try {
          const currentPath = window.location.pathname;
          const targetUrl = new URL(currentPath, locale.url).href;
          console.log(`🌐 Navigating to ${locale.nativeName}: ${targetUrl}`);
          window.location.href = targetUrl;
        } catch (error) {
          console.error("Error navigating to locale:", error);
          window.location.href = locale.url;
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
        console.log(`🎯 Found Learn button with selector: ${selector}`);
        debugLog("Learn button element:", learnButton);
        break;
      }
    }
    if (!learnButton) {
      debugLog("Learn button not found with any selector:", learnButtonSelectors);
      console.log("⚠️ Learn button not found, will retry...");
      return;
    }
    try {
      const existingButton = document.querySelector(
        ".next-i18n-translate-container"
      );
      if (existingButton) {
        debugLog("Translation button already exists, skipping");
        console.log("✅ Translation button already exists");
        return;
      }
      const translationDropdown = createTranslationDropdown();
      const parentNode = learnButton.parentNode;
      if (!parentNode) {
        console.error("❌ Learn button has no parent node");
        return;
      }
      if (learnButton.nextSibling) {
        parentNode.insertBefore(translationDropdown, learnButton.nextSibling);
      } else {
        parentNode.appendChild(translationDropdown);
      }
      console.log("✅ Translation button added successfully");
      setTimeout(() => {
        const verifyButton = document.querySelector(
          ".next-i18n-translate-container"
        );
        if (!verifyButton) {
          console.warn(
            "⚠️ Translation button was removed shortly after adding, React might be re-rendering"
          );
          setTimeout(() => {
            console.log(
              "🔄 Attempting to re-add translation button after React stabilization"
            );
            addTranslationButton();
          }, 1e3);
        } else {
          console.log("🎉 Translation button is stable and working!");
        }
      }, 500);
    } catch (error) {
      console.error("❌ Error adding translation button:", error);
    }
  }
  console.log("🚀 Initializing Next.js Translation Helper...");
  function initializeScript() {
    console.log("📍 Current URL:", window.location.href);
    console.log("📍 Document ready state:", document.readyState);
    console.log("⏳ Waiting for React to stabilize...");
    setTimeout(() => {
      console.log("🎬 React should be stable now, adding translation button");
      addTranslationButton();
      setTimeout(() => {
        if (!document.querySelector(".next-i18n-translate-container")) {
          console.log("🔄 First attempt failed, trying again...");
          waitForLearnButton(() => {
            console.log(
              "🎯 Learn button found, attempting to add translation button"
            );
            addTranslationButton();
          });
        }
      }, 500);
    }, 2e3);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeScript);
  } else {
    initializeScript();
  }
  let lastUrl = location.href;
  let checkInterval;
  function startPeriodicCheck() {
    if (checkInterval) {
      clearInterval(checkInterval);
    }
    let checkCount = 0;
    let missCount = 0;
    checkInterval = window.setInterval(() => {
      checkCount++;
      if (!window.location.href.includes("nextjs.org")) {
        debugLog("Not on nextjs.org anymore, stopping periodic check");
        clearInterval(checkInterval);
        return;
      }
      const learnButton = document.querySelector('a[href="/learn"]');
      const ourButton = document.querySelector(".next-i18n-translate-container");
      debugLog("Periodic check:", {
        count: checkCount,
        learnButton: !!learnButton,
        ourButton: !!ourButton,
        missCount
      });
      if (learnButton && !ourButton) {
        missCount++;
        console.log("🔄 React re-render detected, re-adding translation button");
        addTranslationButton();
      } else if (ourButton) {
        missCount = 0;
      }
      if (checkCount > 20 && missCount === 0) {
        clearInterval(checkInterval);
        checkInterval = window.setInterval(() => {
          const learnBtn = document.querySelector('a[href="/learn"]');
          const ourBtn = document.querySelector(".next-i18n-translate-container");
          if (learnBtn && !ourBtn) {
            console.log(
              "🔄 Late React re-render detected, re-adding translation button"
            );
            addTranslationButton();
          }
        }, 2e3);
        console.log("🎯 Switching to low-frequency monitoring");
      }
    }, 500);
  }
  const observer = new MutationObserver((mutations) => {
    var _a, _b;
    const url = location.href;
    let shouldRecheck = false;
    if (url !== lastUrl) {
      lastUrl = url;
      shouldRecheck = true;
      console.log("🔄 URL changed, rechecking translation button");
      debugLog("URL change:", { from: lastUrl, to: url });
    }
    for (const mutation of mutations) {
      if (mutation.type === "childList") {
        for (const node of mutation.removedNodes) {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node;
            if (((_a = element.classList) == null ? void 0 : _a.contains("next-i18n-translate-container")) || ((_b = element.querySelector) == null ? void 0 : _b.call(element, ".next-i18n-translate-container"))) {
              shouldRecheck = true;
              console.log("🔄 Translation button removed by React, will re-add");
            }
          }
        }
      }
    }
    if (shouldRecheck) {
      setTimeout(addTranslationButton, 300);
    }
  });
  observer.observe(document, {
    subtree: true,
    childList: true,
    attributes: false
    // Don't watch attributes to reduce noise
  });
  startPeriodicCheck();
  window.addEventListener("beforeunload", () => {
    if (checkInterval) {
      clearInterval(checkInterval);
    }
    observer.disconnect();
  });
})();
