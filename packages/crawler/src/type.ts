export type BlogContext = {
  author?: { name: string; image: string }[];
  headline: string;
  description: string;
  dateCreated: string;
  url: string;
  image?: string;
};

export type Blog = BlogContext & {
  slug: string;
  content: string;
};
