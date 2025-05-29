export type BlogContext = {
  author?: { name: string; image: string }[];
  headline: string;
  description: string;
  dateCreated: string;
  url: string;
  image?: string;
};

export type Writeable = {
  filename: string;
  content: string;
};

export type Blog = BlogContext & Writeable;

export type LearnContext = {
  headline: string;
  description?: string;
  image?: string;
};

export type Learn = LearnContext & Writeable & { title: string };
