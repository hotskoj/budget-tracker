import {default as server} from './server.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

server.get('/', (req, res) => {
    res.sendFile(HTML_FILE);
});

server.listen(port, () => {
    console.log(`Server listing on ${port}`);
});