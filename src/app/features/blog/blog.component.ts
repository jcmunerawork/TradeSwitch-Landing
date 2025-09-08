import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { navigateToSignUp } from '../utils/navigate.utils';
import { Category } from './models/blog';
import { BLOG_CARDS } from './mocks/blog.mock';

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

  constructor(private router: Router) {}
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

  goToBlog(id: string) {
    this.router.navigate(['/blog', id]);
  }
}
