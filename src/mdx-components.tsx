import defaultMdxComponents from "fumadocs-ui/mdx";
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';

import { Image } from "./mdx/Image";
import { Check, Cross } from "./mdx/Check";
import type { MDXComponents } from "mdx/types";

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
