import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
  input: 'index.js', // Вхідний файл
  output: {
    file: 'bundle.js', // Вихідний файл
    format: 'es',
  },
  //plugins: [nodeResolve(), babel({ babelHelpers: "bundled" })], // Плагін для розпізнавання зовнішніх модулів
};
