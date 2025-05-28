import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import defaultMdxComponents from 'fumadocs-ui/mdx';

import type { MDXComponents } from 'mdx/types';
import { Image as BlogImage } from './mdx/BlogImage';
import { Check, Cross } from './mdx/Check';
import { Image } from './mdx/Image';

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    Image,
    Cross,
    Check,
    Tab,
    Tabs,
    ...components,
  };
}

export function getBlogMDXComponents(
  components?: MDXComponents,
): MDXComponents {
  return {
    ...defaultMdxComponents,
    Image: BlogImage,
    // biome-ignore lint/a11y/useAltText: <explanation>
    img: (props) => <img {...props} />,
    ...components,
  };
}
