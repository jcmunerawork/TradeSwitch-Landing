import { CommonModule } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { navigateToSignUp } from '../utils/navigate.utils';
import { BLOG_CARDS, BLOGS } from '../blog/mocks/blog.mock';
import { BlogArticle } from '../blog/models/blog';
import { Category } from '../faq/faq.component';

@Component({
  selector: 'app-single-blog',
  imports: [CommonModule],
  templateUrl: './single-blog.component.html',
  styleUrl: './single-blog.component.scss',
  standalone: true,
})
export class SingleBlogComponent implements OnInit, OnChanges {
  categories = Object.values(Category);
  blogCards = BLOG_CARDS;
  blogs = BLOGS;
  selectedBlog: BlogArticle | undefined;

  currentUrl = '';
  shareTitle = 'Check out this article!';
  shareText = 'Check out this article:';

  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['route']) {
      const blogId = this.route.snapshot.paramMap.get('id');
      this.selectBlog(blogId);
    }
  }

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.currentUrl = window.location.href;
    }
    const blogId = this.route.snapshot.paramMap.get('id');
    this.blogCards = this.getRandomElements(this.blogCards, 3);
    this.selectBlog(blogId);
  }
  selectBlog(id: string | null) {
    if (!id) return;
    this.selectedBlog = this.blogs.find((blog) => blog.id === id);
  }

  goToSignUp() {
    navigateToSignUp();
  }

  goToBlogPage() {
    this.router.navigate(['/blog']);
  }

  goToBlog(blogId: string) {
    this.router.navigate(['/blog', blogId]);
    this.selectBlog(blogId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  getRandomElements<T>(array: T[], count: number): T[] {
    return this.shuffleArray(array).slice(0, count);
  }

  private shuffleArray<T>(array: T[]): T[] {
    const a = [...array];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  get twitterShareUrl() {
    return (
      'https://twitter.com/intent/tweet?url=' +
      encodeURIComponent(this.currentUrl) +
      '&text=' +
      encodeURIComponent(this.shareText)
    );
  }

  get linkedInShareUrl() {
    return (
      'https://www.linkedin.com/sharing/share-offsite/?url=' +
      encodeURIComponent(this.currentUrl)
    );
  }
  get emailShareUrl() {
    return (
      'mailto:?subject=' +
      encodeURIComponent(this.shareTitle) +
      '&body=' +
      encodeURIComponent(this.shareText + ' ' + this.currentUrl)
    );
  }
}
