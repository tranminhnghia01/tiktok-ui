import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';

//public router ko can login
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/profile', component: Profile },
];

//public router can login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
