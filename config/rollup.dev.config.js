import { input, output, plugins } from './rollup.config.js';
import replace from '@rollup/plugin-replace';
import dev from 'rollup-plugin-dev';
import livereload from 'rollup-plugin-livereload';
import html from '@rollup/plugin-html';
import { htmlTemplate } from './htmlTemplate.js';

const devPlugins = [...plugins];

devPlugins.unshift(
    replace({
        preventAssignment: true,
        'process.env.NODE_ENV': JSON.stringify('development'),
    })
);

devPlugins.push(
    dev({
        dirs: ['build'],
        port: 8000,
        spa: true,
    })
);

devPlugins.push(
    livereload({
        watch: 'build',
    })
);

devPlugins.push(
    html({
        template: ({ files }) => htmlTemplate(files.js),
    })
);

const devRollup = {
    input,
    output,
    plugins: devPlugins,
};

export default devRollup;
