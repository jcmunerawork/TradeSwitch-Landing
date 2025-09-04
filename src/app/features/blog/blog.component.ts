import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from 'express';
import { navigateToSignUp } from '../utils/navigate.utils';

export enum Category {
  All = 'All categories',
  Latest = 'Latest',
  Updates = 'Updates',
  Trending = 'Trending',
  HowTo = 'How to',
}

export const BLOG_CARDS = [
  {
    title: 'How to set up your account',
    description:
      "Here's a little description about the topic or the first 3 lines of the article.",
    imageUrl: 'assets/img/blog/preview.webp',
    type: Category.HowTo,
  },
  {
    title: 'How to set up your strategy',
    description:
      "Here's a little description about the topic or the first 3 lines of the article.",
    imageUrl: 'assets/img/blog/preview.webp',
    type: Category.HowTo,
  },
  {
    title: 'The art of Trading Psychology',
    description:
      "Here's a little description about the topic or the first 3 lines of the article.",
    imageUrl: 'assets/img/blog/preview.webp',
    type: Category.Trending,
  },
  {
    title: 'The all new Trade Switch',
    description:
      "Here's a little description about the topic or the first 3 lines of the article.",
    imageUrl: 'assets/img/blog/preview.webp',
    type: Category.Trending,
  },
  {
    title: 'Trade Switch vs No Trade Switch',
    description:
      "Here's a little description about the topic or the first 3 lines of the article.",
    imageUrl: 'assets/img/blog/preview.webp',
    type: Category.Latest,
  },
  {
    title: 'How to download the Chrome Extension',
    description:
      "Here's a little description about the topic or the first 3 lines of the article.",
    imageUrl: 'assets/img/blog/preview.webp',
    type: Category.Updates,
  },
];

@Component({
  selector: 'app-blog',
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
  standalone: true,
})
export class BlogComponent {
  categories = Object.values(Category);
  blogCards = BLOG_CARDS;
  selectedIndex = 0;

  constructor() {}
  selectCategory(index: number) {
    this.selectedIndex = index;
    const selectedCategory = this.categories[index];
    this.blogCards = BLOG_CARDS.filter((card) => {
      if (selectedCategory === Category.All) return true;
      return card.type === selectedCategory;
    });
  }

  goToSignUp() {
    navigateToSignUp();
  }
}
