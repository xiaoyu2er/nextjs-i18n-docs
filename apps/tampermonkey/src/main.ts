// Import locale configuration
import { LOCALES } from '@next-i18n/const';

// Debug logging utility
const DEBUG_KEY = 'next-i18n-debug';
function debugLog(...args: unknown[]) {
  if (localStorage.getItem(DEBUG_KEY) === 'true') {
    console.log('[DEBUG]', ...args);
  }
}

// Log script initialization
console.log('🌐 Next.js Translation Helper loaded (React-compatible version)');
debugLog(
  'Debug mode enabled. Use localStorage.removeItem("next-i18n-debug") to disable.',
);

// Utility function to wait for element with retries
function waitForLearnButton(callback: () => void, maxAttempts = 30) {
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
        console.log('⚠️ Learn button not found after maximum attempts');
      }
    } catch (error) {
      console.warn('Error checking for Learn button:', error);
    }
  };
  check();
}

// Create translation dropdown
function createTranslationDropdown() {
  const enabledLocales = LOCALES.filter((l) => l.enabled && l.locale !== 'en');

  // Create the main container
  const container = document.createElement('div');
  container.className = 'next-i18n-translate-container';
  container.style.cssText = `
    position: relative;
    display: inline-block;
    margin-left: 4px;
  `;

  // Create the trigger button (icon-only)
  const button = document.createElement('button');
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
  button.title = 'View this page in other languages';
  button.textContent = '🌐';

  // Add hover effects
  button.addEventListener('mouseenter', () => {
    button.style.backgroundColor = '#f1f3f4';
    button.style.transform = 'scale(1.1)';
    button.style.color = '#333';
  });

  button.addEventListener('mouseleave', () => {
    button.style.backgroundColor = 'transparent';
    button.style.transform = 'scale(1)';
    button.style.color = '#666';
  });

  // Create the dropdown menu
  const dropdown = document.createElement('div');
  dropdown.className = 'next-i18n-translate-dropdown';
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

  // Smart positioning function to prevent cutoff
  const positionDropdown = () => {
    const buttonRect = button.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // Reset positioning
    dropdown.style.left = 'auto';
    dropdown.style.right = '0';
    dropdown.style.top = '100%';
    dropdown.style.bottom = 'auto';
    dropdown.style.marginTop = '4px';
    dropdown.style.marginBottom = '0';

    // Check if dropdown would be cut off on the right
    if (buttonRect.right < 200) {
      // Not enough space on the right, position to the left
      dropdown.style.right = 'auto';
      dropdown.style.left = '0';
    }

    // Check if dropdown would be cut off at the bottom
    if (buttonRect.bottom + 300 > viewportHeight) {
      // Not enough space below, position above
      dropdown.style.top = 'auto';
      dropdown.style.bottom = '100%';
      dropdown.style.marginTop = '0';
      dropdown.style.marginBottom = '4px';
    }
  };

  // Add locale options
  for (let index = 0; index < enabledLocales.length; index++) {
    const locale = enabledLocales[index];
    const option = document.createElement('div');
    option.className = 'next-i18n-locale-option';
    option.style.cssText = `
      padding: 12px 16px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      border-bottom: ${index === enabledLocales.length - 1 ? 'none' : '1px solid #f0f0f0'};
      transition: background-color 0.15s ease;
      user-select: none;
    `;

    const flag = document.createElement('span');
    flag.style.cssText = 'font-size: 16px; min-width: 20px;';
    flag.textContent = locale.flag;

    const name = document.createElement('span');
    name.style.cssText = 'font-weight: 500; color: #333; flex: 1;';
    name.textContent = locale.nativeName;

    option.appendChild(flag);
    option.appendChild(name);

    option.addEventListener('mouseenter', () => {
      option.style.backgroundColor = '#f8f9fa';
    });

    option.addEventListener('mouseleave', () => {
      option.style.backgroundColor = 'transparent';
    });

    option.addEventListener('click', () => {
      try {
        const currentPath = window.location.pathname;
        const targetUrl = new URL(currentPath, locale.url).href;
        console.log(`🌐 Navigating to ${locale.nativeName}: ${targetUrl}`);
        window.location.href = targetUrl;
      } catch (error) {
        console.error('Error navigating to locale:', error);
        // Fallback to just the domain
        window.location.href = locale.url;
      }
    });

    dropdown.appendChild(option);
  }

  let isDropdownOpen = false;

  // Show dropdown with animation
  function showDropdown() {
    dropdown.style.display = 'block';
    // Position dropdown to prevent cutoff
    positionDropdown();
    requestAnimationFrame(() => {
      dropdown.style.opacity = '1';
      dropdown.style.transform = 'translateY(0)';
    });
    isDropdownOpen = true;
  }

  // Hide dropdown with animation
  function hideDropdown() {
    dropdown.style.opacity = '0';
    dropdown.style.transform = 'translateY(-8px)';
    setTimeout(() => {
      if (!isDropdownOpen) {
        dropdown.style.display = 'none';
      }
    }, 200);
    isDropdownOpen = false;
  }

  // Toggle dropdown
  button.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (isDropdownOpen) {
      hideDropdown();
    } else {
      showDropdown();
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!container.contains(e.target as Node) && isDropdownOpen) {
      hideDropdown();
    }
  });

  // Close dropdown on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isDropdownOpen) {
      hideDropdown();
    }
  });

  container.appendChild(button);
  container.appendChild(dropdown);

  return container;
}

// Find and add the translation button
function addTranslationButton() {
  // Multiple selectors to find the Learn button (in case HTML structure changes)
  const learnButtonSelectors = [
    'a[href="/learn"]',
    'a[href*="/learn"]',
    'nav a:contains("Learn")',
    '[data-testid="learn-link"]',
  ];

  let learnButton: Element | null = null;

  // Try each selector
  for (const selector of learnButtonSelectors) {
    learnButton = document.querySelector(selector);
    if (learnButton) {
      console.log(`🎯 Found Learn button with selector: ${selector}`);
      debugLog('Learn button element:', learnButton);
      break;
    }
  }

  if (!learnButton) {
    debugLog('Learn button not found with any selector:', learnButtonSelectors);
    console.log('⚠️ Learn button not found, will retry...');
    return;
  }

  try {
    // Check if translation button already exists
    const existingButton = document.querySelector(
      '.next-i18n-translate-container',
    );
    if (existingButton) {
      debugLog('Translation button already exists, skipping');
      console.log('✅ Translation button already exists');
      return;
    }

    const translationDropdown = createTranslationDropdown();

    // Try multiple insertion strategies
    const parentNode = learnButton.parentNode;
    if (!parentNode) {
      console.error('❌ Learn button has no parent node');
      return;
    }

    // Strategy 1: Insert after the Learn button
    if (learnButton.nextSibling) {
      parentNode.insertBefore(translationDropdown, learnButton.nextSibling);
    } else {
      // Strategy 2: Append to parent if it's the last child
      parentNode.appendChild(translationDropdown);
    }

    console.log('✅ Translation button added successfully');

    // Verify it was actually added and stays there
    setTimeout(() => {
      const verifyButton = document.querySelector(
        '.next-i18n-translate-container',
      );
      if (!verifyButton) {
        console.warn(
          '⚠️ Translation button was removed shortly after adding, React might be re-rendering',
        );
        // Try one more time after a longer delay
        setTimeout(() => {
          console.log(
            '🔄 Attempting to re-add translation button after React stabilization',
          );
          addTranslationButton();
        }, 1000);
      } else {
        console.log('🎉 Translation button is stable and working!');
      }
    }, 500); // Wait 500ms to verify stability
  } catch (error) {
    console.error('❌ Error adding translation button:', error);
  }
}

// Initialize the script
console.log('🚀 Initializing Next.js Translation Helper...');

// Initialize immediately and set up monitoring
function initializeScript() {
  console.log('📍 Current URL:', window.location.href);
  console.log('📍 Document ready state:', document.readyState);

  // Wait for React to finish initial rendering before adding our button
  console.log('⏳ Waiting for React to stabilize...');
  setTimeout(() => {
    console.log('🎬 React should be stable now, adding translation button');
    addTranslationButton();

    // If it still didn't work, wait for the Learn button to appear
    setTimeout(() => {
      if (!document.querySelector('.next-i18n-translate-container')) {
        console.log('🔄 First attempt failed, trying again...');
        waitForLearnButton(() => {
          console.log(
            '🎯 Learn button found, attempting to add translation button',
          );
          addTranslationButton();
        });
      }
    }, 500);
  }, 2000); // Wait 2 seconds for React to stabilize
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeScript);
} else {
  initializeScript();
}

// Handle React re-renders and SPA navigation
let lastUrl = location.href;
let checkInterval: number;

// More intelligent checking for React re-renders
function startPeriodicCheck() {
  if (checkInterval) {
    clearInterval(checkInterval);
  }

  let checkCount = 0;
  let missCount = 0;

  checkInterval = window.setInterval(() => {
    checkCount++;

    // Check if we're still on nextjs.org
    if (!window.location.href.includes('nextjs.org')) {
      debugLog('Not on nextjs.org anymore, stopping periodic check');
      clearInterval(checkInterval);
      return;
    }

    // Check if the Learn button exists but our button doesn't
    const learnButton = document.querySelector('a[href="/learn"]');
    const ourButton = document.querySelector('.next-i18n-translate-container');

    debugLog('Periodic check:', {
      count: checkCount,
      learnButton: !!learnButton,
      ourButton: !!ourButton,
      missCount,
    });

    if (learnButton && !ourButton) {
      missCount++;
      console.log('🔄 React re-render detected, re-adding translation button');
      addTranslationButton();
    } else if (ourButton) {
      // Reset miss count if button is present
      missCount = 0;
    }

    // If we haven't had issues for a while, reduce check frequency
    if (checkCount > 20 && missCount === 0) {
      clearInterval(checkInterval);
      // Check less frequently after initial stability
      checkInterval = window.setInterval(() => {
        const learnBtn = document.querySelector('a[href="/learn"]');
        const ourBtn = document.querySelector('.next-i18n-translate-container');
        if (learnBtn && !ourBtn) {
          console.log(
            '🔄 Late React re-render detected, re-adding translation button',
          );
          addTranslationButton();
        }
      }, 2000); // Check every 2 seconds after stabilization
      console.log('🎯 Switching to low-frequency monitoring');
    }
  }, 500); // Check every 500ms initially
}

// Enhanced mutation observer for React apps
const observer = new MutationObserver((mutations) => {
  const url = location.href;
  let shouldRecheck = false;

  // Check for URL changes (SPA navigation)
  if (url !== lastUrl) {
    lastUrl = url;
    shouldRecheck = true;
    console.log('🔄 URL changed, rechecking translation button');
    debugLog('URL change:', { from: lastUrl, to: url });
  }

  // Check for DOM changes that might remove our button
  for (const mutation of mutations) {
    if (mutation.type === 'childList') {
      for (const node of mutation.removedNodes) {
        if (node.nodeType === Node.ELEMENT_NODE) {
          const element = node as Element;
          // If our button or its container was removed, re-add it
          if (
            element.classList?.contains('next-i18n-translate-container') ||
            element.querySelector?.('.next-i18n-translate-container')
          ) {
            shouldRecheck = true;
            console.log('🔄 Translation button removed by React, will re-add');
          }
        }
      }
    }
  }

  if (shouldRecheck) {
    // Longer debounce to avoid interfering with React's rendering cycle
    setTimeout(addTranslationButton, 300);
  }
});

observer.observe(document, {
  subtree: true,
  childList: true,
  attributes: false, // Don't watch attributes to reduce noise
});

// Start the periodic check
startPeriodicCheck();

// Clean up on page unload
window.addEventListener('beforeunload', () => {
  if (checkInterval) {
    clearInterval(checkInterval);
  }
  observer.disconnect();
});
