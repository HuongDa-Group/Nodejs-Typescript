import 'dotenv/config';
import App from '@/app';
import WebsiteRoute from '@routes/website.route';

const app = new App([
  new WebsiteRoute()
]);

app.listen();
