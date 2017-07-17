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
  'company',
  // 'category/:category',

  'account',
  'account/:page',
  'auth/:page',

  'services',
  'services/:id',

  'insert/:step',

  'orders',
  'orders/:page',
  'checkout/:step',

  // 'profile',
  // 'profile/:page',

  'facebook',

  // 'requests',
  // 'requests/:page',

  // 'contact',
  // 'contact/:page',

  'blog',
  'blog/:article',

  'info/help',
  'info/legal',
  'info/about',

  // TESTS
  'customer',
  'customer/:page',


  '404',
  '**'
];
