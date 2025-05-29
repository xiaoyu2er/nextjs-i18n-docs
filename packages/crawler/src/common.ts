import TurndownService from 'turndown';

export const CODE_LANGUAGE_SEP = '===CODE_LANGUAGE_SEP===';

const turndownService = new TurndownService({
  codeBlockStyle: 'fenced',
});

turndownService.addRule(`data-state="closed"`, {
  filter: (node) => {
    return (
      node.nodeName === 'DIV' && node.getAttribute('data-state') === 'closed'
    );
  },
  replacement: (content, node, options) => {
    return '';
  },
});

turndownService.addRule('in-this-chapter', {
  filter: (node) => {
    return (
      node.nodeName === 'DIV' &&
      node.className.includes('in-this-chapter_wrapper')
    );
  },
  replacement: (content, node, options) => {
    // const p1 = node.children[0] as HTMLElement;
    // const p2 = node.children[1] as HTMLElement;
    // const div = node.children[2] as HTMLElement;
    return '';
  },
});

turndownService.keep(['img']);

turndownService.addRule('img', {
  filter: ['img'],
  replacement: (content, node, options) => {
    const srcLight = (node as HTMLImageElement).getAttribute('srclight');
    const srcDark = (node as HTMLImageElement).getAttribute('srcdark');
    const src = (node as HTMLImageElement).getAttribute('src');
    const width = (node as HTMLImageElement).getAttribute('width') || '1600';
    const height = (node as HTMLImageElement).getAttribute('height') || '525';
    const alt = (node as HTMLImageElement).getAttribute('alt') || '';
    if (!srcLight || !srcDark) {
      if (!src) {
        console.warn('Image src is missing');
        return '';
      }
      return `![${alt}](${src})`;
    }
    return `<Image
  alt="${alt}"
  srcLight="${srcLight}"
  srcDark="${srcDark}"
  width="${width}"
  height="${height}"
/>`;
  },
});

export function modifyCodeBlocks(main: Element) {
  const codeBlocks = main.querySelectorAll('[data-geist-code-block]');

  for (const codeBlock of codeBlocks) {
    const fileNameNode = codeBlock.querySelector(
      '[class^="code-block_filename"',
    );
    const fileName = fileNameNode?.textContent || '';

    const codeNode = codeBlock.querySelector('code');

    if (fileNameNode && codeNode) {
      fileNameNode.parentNode?.parentNode?.parentNode?.removeChild(
        fileNameNode.parentNode?.parentNode,
      );

      const hightlightedLines: number[] = [];
      [...codeNode.children].forEach((span, index) => {
        if (
          span.nodeName === 'SPAN' &&
          span.className.includes('highlighted-line')
        ) {
          hightlightedLines.push(index + 1); // +1 because line numbers are 1-based
        }
      });
      let language =
        fileName.indexOf('.') > -1 ? fileName?.split('.').pop() : 'bash';
      if (language === 'html') {
        language = 'jsx'; // Convert HTML to JSX for better compatibility
      }

      const classList = [`language-${language}`];
      if (hightlightedLines.length > 0) {
        classList.push(`{${hightlightedLines.join(',')}}`);
      }
      const hightlightedLinesString = hightlightedLines.length
        ? `_{${hightlightedLines.join(',')}}_`
        : '';

      classList.push(`filename="${fileName}"`);
      codeNode.classList += classList.join(CODE_LANGUAGE_SEP);
    }
  }
}

function extractImageUrl(url: string): string {
  return decodeURIComponent(url.replace('/_next/image?url=', '').split('&')[0]);
}

export function modifyImages(main: Element) {
  const figureNodes = main.querySelectorAll('figure');
  for (const figureNode of figureNodes) {
    const lightImg = figureNode.querySelector('img[class*="dark:hidden"]');
    const darkImg = figureNode.querySelector('img[class*="dark:block"]');
    if (!lightImg || !darkImg) {
      const img = figureNode.querySelector('img');
      if (img) {
        const src = img.getAttribute('src');
        if (!src) continue;
        const url = extractImageUrl(src);
        img.src = url;
      }
      continue;
    }

    const lightSrc = lightImg.getAttribute('src');
    const darkSrc = darkImg.getAttribute('src');
    const width = lightImg.getAttribute('width');
    const height = lightImg.getAttribute('height');
    const alt = lightImg.getAttribute('alt') || '';

    if (lightSrc && darkSrc) {
      const lightUrl = extractImageUrl(lightSrc);
      const darkUrl = extractImageUrl(darkSrc);

      const newImage = main.ownerDocument.createElement('img');
      newImage.setAttribute('srcLight', lightUrl);
      newImage.setAttribute('srcDark', darkUrl);
      newImage.setAttribute('width', width || '100%');
      newImage.setAttribute('height', height || '100%');
      newImage.setAttribute('alt', alt);

      figureNode.parentNode?.replaceChild(newImage, figureNode);
    }
  }
}

export function convertHtmlToMarkdown(html: string): string {
  return turndownService.turndown(html).replaceAll(CODE_LANGUAGE_SEP, ' ');
}
