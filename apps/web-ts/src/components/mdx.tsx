import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import type { ReactNode } from 'react';

// Content filter components
function AppOnly({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

function PagesOnly({ children }: { children: ReactNode }) {
  return <div style={{ display: 'none' }}>{children}</div>;
}

// Status icons
function Check() {
  return <span style={{ color: 'green' }}>✓</span>;
}

function Cross() {
  return <span style={{ color: 'red' }}>✗</span>;
}

// Image component - handles light/dark theme images
function Image({
  src,
  srcLight,
  srcDark,
  alt,
  width,
  height,
  ...rest
}: {
  src?: string;
  srcLight?: string;
  srcDark?: string;
  alt?: string;
  width?: number;
  height?: number;
  [key: string]: any;
}) {
  const imgSrc = src || srcLight || srcDark || '';
  const resolvedSrc = imgSrc.startsWith('/')
    ? `https://h8DxKfmAPhn8O0p3.public.blob.vercel-storage.com${imgSrc}`
    : imgSrc;

  return (
    <img
      src={resolvedSrc}
      alt={alt || ''}
      width={width}
      height={height}
      loading="lazy"
    />
  );
}

function OGImage() {
  return null;
}

function VideoComponent() {
  return null;
}

function VideoSkeleton() {
  return null;
}

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    AppOnly,
    PagesOnly,
    Check,
    Cross,
    Image,
    img: Image as any,
    OGImage,
    VideoComponent,
    VideoSkeleton,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
