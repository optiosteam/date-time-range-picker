import typescript from 'rollup-plugin-typescript2'
import sass from 'rollup-plugin-sass'
import commonjs from '@rollup/plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'

import pkg from './package.json'

export default {
    input: 'src/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            exports: 'named',
            sourcemap: true
        },
        {
            file: pkg.module,
            format: 'es',
            exports: 'named',
            sourcemap: true
        }
    ],
    plugins: [
        external(),
        resolve({
            browser: true
        }),
        typescript(),
        commonjs({
            // include: ["node_modules/**"],
            namedExports: {
                // 'node_modules/react': Object.keys(react),
                // 'node_modules/react-dom': Object.keys(reactDom)
                "node_modules/react/react.js": [
                    "Children",
                    "Component",
                    "PropTypes",
                    "createElement",
                    "useState"
                ],
                "node_modules/react-dom/index.js": ["render"],
                "react": [
                    "Children",
                    "Component",
                    "PropTypes",
                    "createElement",
                    "useState"
                ],
                "reactDom": ["render"],
            }
        }),
        sass({
            insert: true
        })
    ]
}
