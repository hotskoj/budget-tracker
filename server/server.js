import express from 'express';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

const app = express();

app.use(morgan('dev'));
app.use(express.static(DIST_DIR));

export default app;