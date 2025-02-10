import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'company',
    renderMode: RenderMode.Client
  },
  {
    path: 'landing',
    renderMode: RenderMode.Client
  },
];
