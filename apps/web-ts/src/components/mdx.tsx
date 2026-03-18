import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { Image as BlogImage } from '@/mdx/BlogImage';
import { Check, Cross } from '@/mdx/Check';
import { Image } from '@/mdx/Image';
import { Video } from '@/mdx/Video';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    Image,
    img: (props: any) => <img {...props} />,
    Cross,
    Check,
    Tab,
    Tabs,
    Video,
    ...components,
  };
}

export function getBlogMDXComponents(
  components?: MDXComponents,
): MDXComponents {
  return {
    ...defaultMdxComponents,
    Image: BlogImage,
    img: (props: any) => <img {...props} />,
    ...components,
  };
}

export function getLearnMDXComponents(
  components?: MDXComponents,
): MDXComponents {
  return {
    ...defaultMdxComponents,
    Image: BlogImage,
    img: (props: any) => <img {...props} />,
    ...components,
  };
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
