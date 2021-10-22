import 'dotenv/config';
import App from '@/app';
import WebsiteRoute from '@routes/website.route';
import TopWebsiteRoute from '@routes/top.website.route';

const app = new App([new WebsiteRoute(), new TopWebsiteRoute()]);

app.listen();
