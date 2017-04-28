import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import globals from 'rollup-plugin-node-globals';
import json from 'rollup-plugin-json';
import builtins from 'rollup-plugin-node-builtins';

export default {
  entry: 'src/index.js',
  plugins: [
    nodeResolve({
      browser: true,
      preferBuiltins: false,
    }),
    commonjs({
      ignoreGlobal: false,
    }),
    globals(),
    builtins(),
    json(),
  ],

  format: 'iife',
  moduleName: 'XformParser',
  dest: 'dist/index.web.js',
  sourceMap: true,
};
