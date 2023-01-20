import App from './app';
import HomeRoute from './routes/home.routes';

const app = new App([new HomeRoute()]);

app.listen();