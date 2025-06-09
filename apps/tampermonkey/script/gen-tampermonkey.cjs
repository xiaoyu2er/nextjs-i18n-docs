const fs = require('node:fs');
const path = require('node:path');

async function generateDevScript() {
  try {
    // Import the config using dynamic import since it's now an ES module
    const viteConfigPath = path.resolve(__dirname, '../vite.config.ts');

    // For CommonJS compatibility, we'll read the config manually
    const viteConfigContent = fs.readFileSync(viteConfigPath, 'utf-8');
    const hostMatch = viteConfigContent.match(/host:\s*['"`]([^'"`]+)['"`]/);
    const portMatch = viteConfigContent.match(/port:\s*(\d+)/);

    const host = hostMatch ? hostMatch[1] : 'localhost';
    const port = portMatch ? portMatch[1] : '6419';
    const hostPort = `${host}:${port}`;

    const codeFilePath = '../tampermonkey.js';
    const tampermonkeyConfig = fs.readFileSync(
      path.resolve(__dirname, '../tampermonkey.config'),
      'utf-8',
    );

    const codeContent = `
      // ==UserScript==
      ${tampermonkeyConfig}
      // ==/UserScript==

      (function () {
        'use strict';
        
        GM_xmlhttpRequest({
          method: 'GET',
          url: 'http://${hostPort}/dist/script.iife.js',
          onload: function(res) {
            if (res && (res.status === 200)) {
              const text = res.responseText;
              
              if (typeof text === 'string') {
                eval(text);
              }
            }
          }
        });
      })()
    `;

    const outputPath = path.resolve(__dirname, codeFilePath);
    if (fs.existsSync(outputPath)) {
      fs.rmSync(outputPath);
    }

    fs.writeFileSync(outputPath, codeContent);
    console.log('✅ Development Tampermonkey script generated successfully');
  } catch (error) {
    console.error('Error generating development script:', error);
    process.exit(1);
  }
}

generateDevScript();
