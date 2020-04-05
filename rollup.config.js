import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import css from 'rollup-plugin-css-only';
import copy from 'rollup-plugin-copy';

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
		{
			name: 'Piggie',
			file: 'dist/js/bundle.iife.js',
			format: 'iife',
		},
	],
	plugins: [
		resolve(),
		babel({
			exclude: 'node_modules/**',
		}),
		css({
			output: 'dist/css/bundle.css',
		}),
		copy({
			targets: [
				{
					src: 'src/index.html',
					dest: 'dist/',
					rename: 'app.html',
					transform: (contents) =>
						contents
							.toString()
							.replace(
								'<script src="app.js"></script>',
								'<script src="js/bundle.iife.js"></script>'
							),
				},
			],
		}),
	],
};
