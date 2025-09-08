export enum Category {
  All = 'All categories',
  Latest = 'Latest',
  Updates = 'Updates',
  Trending = 'Trending',
  HowTo = 'How to',
}

export interface BlogArticle {
  id: string;
  title: string;
  heroImage: string;
  keywords: string[];
  summary: string;
  estimatedTime: string;
  sections: BlogSection[];
}

export interface BlogSection {
  title: string;
  content: string;
  bullets?: string[];
  image?: string;
  stepNumber?: number;
}
