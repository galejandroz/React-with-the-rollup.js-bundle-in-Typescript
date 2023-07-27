import { input, output, plugins } from './rollup.config.js';
import replace from '@rollup/plugin-replace';

const prodPlugins = [...plugins];

prodPlugins.unshift(
    replace({
        preventAssignment: true,
        'process.env.NODE_ENV': JSON.stringify('production'),
    })
);

const prodRollup = {
    input,
    output,
    plugins: prodPlugins,
};

export default prodRollup;
