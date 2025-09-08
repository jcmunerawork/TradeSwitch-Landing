import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'how-it-works',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'blog',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'blog/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return [
        { id: 'account-setup' },
        { id: 'strategy-setup' },
        { id: 'trading-psychology' },
        { id: 'new-trade-switch' },
        { id: 'trade-switch-vs-none' },
        { id: 'chrome-extension' },
      ];
    },
  },
  {
    path: 'faq',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'plans',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'about-us',
    renderMode: RenderMode.Prerender,
  },
];
