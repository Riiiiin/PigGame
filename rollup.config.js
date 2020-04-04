import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import htmlGenerate from 'rollup-plugin-generate-html-template';
import css from 'rollup-plugin-css-only';

export default {
	input: 'src/js/app.js',
	output: [
		{
			file: 'dist/js/bundle.cjs.js',
			format: 'cjs',
		},
		{
			name: 'Piggie',
			file: 'dist/js/bundle.umd.js',
			format: 'umd',
		},
		{
			file: 'dist/js/bundle.esm.js',
			format: 'esm',
		},
	],
	plugins: [
		resolve(),
		babel({
			exclude: 'node_modules/**',
		}),
		htmlGenerate({
			template: 'src/index.html',
			target: 'dist/app.html',
		}),
		css({
			output: 'dist/css/bundle.css',
		}),
	],
};
