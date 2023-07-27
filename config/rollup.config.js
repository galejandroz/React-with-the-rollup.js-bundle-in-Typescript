import path from 'path';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';

import { BUILD_DIR, SRC_DIR, tsconfig } from './globalConfig.js';

export const input = path.join(SRC_DIR, 'index.tsx');
export const output = {
    file: path.join(BUILD_DIR, 'bundle.js'),
    format: 'umd',
};

export const plugins = [
    nodeResolve({
        browser: true,
    }),
    commonjs(),
    babel({
        babelHelpers: 'bundled',
        exclude: /node_modules/,
        extensions: ['.ts', '.tsx'],
        presets: [
            '@babel/preset-env',
            [
                '@babel/preset-react',
                {
                    runtime: 'automatic',
                },
            ],
            '@babel/preset-typescript',
        ],
    }),
    typescript({
        tsconfig,
    }),
];
