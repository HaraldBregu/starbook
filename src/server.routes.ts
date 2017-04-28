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
  'landing',
  'landing/:page',
  'services',
  'services/:id',
  'orders',
  'orders/:page',
  'profile',
  'profile/:page',
  'facebook',
  'order/:step',
  'about',
  'help',
  'legal',
  'account/:page',
  'recruiter',
  'recruiter/:page',
  'requests',
  'requests/:page',
  'share',
  'share/:page'
];
