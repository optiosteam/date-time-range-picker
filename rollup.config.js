import sass from 'rollup-plugin-sass'
import typescript from 'rollup-plugin-typescript2'
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
        sourcemap: true,
        strict: false
        },
        {
        file: pkg.module,
        format: 'es',
        exports: 'named',
        sourcemap: true
    }
    ],
    plugins: [
        sass({ insert: true }),
        typescript({ objectHashIgnoreUnknownHack: true }),
        external(),
        resolve({
            browser: true
        }),
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
    ],
    external: ['react', 'react-dom']
}
