/**
 * Server-side routes. Only the listed routes support html5pushstate.
 * Has to match client side routes.
 *
 * Index (/) route does not have to be listed here.
 *
 * @example
 * export const routes: string[] = [
 * 'home', 'about'
 * ];
 **/
export const routes: string[] = [
  'category/:category',

  'account',
  'account/:page',

  'services',
  'services/:id',

  'orders',
  'orders/:page',
  'order/:step',

  'profile',
  'profile/:page',

  'facebook',

  'requests',
  'requests/:page',

  // 'share',
  // 'share/:page',

  // 'blog',
  // 'blog/:page',

  'contact',
  'contact/:page',

  'info/help',
  'info/legal',
  'info/about',

  '404',
  '**'
];
