import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import typescript from 'rollup-plugin-typescript2';
import replace from '@rollup/plugin-replace';
import html from '@rollup/plugin-html';
import { terser } from 'rollup-plugin-terser';


export default {
  input: 'src/index.tsx',
  context: 'window',
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process': 'undefined',
      preventAssignment: true
    }),
    nodeResolve(),
    commonjs(),
    typescript({
      cacheRoot: '/tmp/.rollup_plugin_typescript_cache_audio'
    }),
    html({
      fileName: 'index.html',
      title: process.env.NODE_ENV === 'production' ? 'Web Audio Editor' : 'Web Audio Editor (Dev)',
      template({ title }) {
        return `` +
          `<!DOCTYPE html>\n` +
          `<html>\n` +
          `  <head>\n` +
          `    <meta charset="utf-8">\n` +
          `    <title>${title}</title>\n` +
          `    <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,600" rel="stylesheet" type="text/css">\n` +
          `    <link rel="stylesheet" href="/main.css">\n` +
          `  </head>\n` +
          `  <body>\n` +
          `    <div id="app"></div>\n` +
          (
            process.env.NODE_ENV === 'production' ? (
              `    <script type="text/javascript" src="/vendor/react.17.0.2.production.min.js"></script>\n` +
              `    <script type="text/javascript" src="/vendor/react-dom.17.0.2.production.min.js"></script>\n`
            ) : (
              `    <script type="text/javascript" src="/vendor/react.17.0.2.development.js"></script>\n` +
              `    <script type="text/javascript" src="/vendor/react-dom.17.0.2.development.js"></script>\n`
            )
          ) +
          `    <script type="text/javascript" src="/vendor/wad.min.js"></script>\n` +
          `    <script type="text/javascript" src="/bundle.js"></script>\n` +
          `  </body>\n` +
          `</html>\n`;
      }
    }),
    process.env.NODE_ENV === 'production' ? terser() : null,
    filesize({
      showGzippedSize: false,
      showMinifiedSize: false
    })
  ],
  output: {
    file: 'www/bundle.js',
    format: 'iife'
  }
}
