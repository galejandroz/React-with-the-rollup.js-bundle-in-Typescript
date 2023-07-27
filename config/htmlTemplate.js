import path from 'path';
import fs from 'fs';
import { SRC_DIR } from './globalConfig.js';

export const htmlTemplate = (js = []) => {
    const htmlDir = path.join(SRC_DIR, 'index.dev.html');
    const html = fs.readFileSync(htmlDir, { encoding: 'utf-8' });
    let scripts = '';

    for (let script of js) {
        scripts += `<script src="${script.fileName}"></script>`;
    }

    return html.replace('${scripts}', scripts);
};
