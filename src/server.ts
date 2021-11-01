import 'dotenv/config';
import App from '@/app';
import WebsiteRoute from '@routes/website.route';
import TopWebsiteRoute from '@routes/top.website.route';
import AdminRoute from '@routes/admin.route';

const app = new App([
  new WebsiteRoute(),
  new TopWebsiteRoute(),
  new AdminRoute(),
]);

app.listen();
