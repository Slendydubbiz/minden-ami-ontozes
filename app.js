import 'dotenv/config';
import express from 'express';
import { engine } from 'express-handlebars';

import indexRoutes from './src/routes/index.routes.js';
import bookingRoutes from './src/routes/booking.routes.js';
import { CONTACT } from './src/const/contact.js';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.locals.contact = CONTACT;

app.use('/', indexRoutes);
app.use('/', bookingRoutes);

export default app;
