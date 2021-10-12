import 'dotenv/config';
import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';

const app = new App([
  new IndexRoute(),
  new AuthRoute()
]);

app.listen();
