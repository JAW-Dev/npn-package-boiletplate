import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const input = 'src/index.js';
const output = 'dist/index';
const excludes = 'node_modules/**';

export default [
	{
		input: input,
		output: {
			name: pkg.name,
			file: `${output}.js`,
			format: 'iife'
		},
		plugins: [
			resolve(),
			commonjs(),
			babel({
				exclude: excludes
			})
		]
	},
	{
		input: input,
		output: {
			name: pkg.name,
			file: `${output}.min.js`,
			format: 'iife'
		},
		plugins: [
			resolve(),
			commonjs(),
			babel({
				exclude: excludes
			}),
			terser()
		]
	},
	{
		input: input,
		output: {
			name: pkg.name,
			file: pkg.browser,
			format: 'umd'
		},
		plugins: [
			resolve(),
			commonjs(),
			babel({
				exclude: excludes
			})
		]
	},
	{
		input: input,
		output: {
			name: pkg.name,
			file: `${output}.umd.min.js`,
			format: 'umd'
		},
		plugins: [
			resolve(),
			commonjs(),
			babel({
				exclude: excludes
			}),
			terser()
		]
	},
	{
		input: input,
		external: [],
		output: [{ file: `${output}.cjs.min.js`, format: 'cjs' }],
		plugins: [
			resolve(),
			commonjs(),
			babel({
				exclude: excludes
			}),
			terser()
		]
	},
	{
		input: input,
		external: [],
		output: [{ file: pkg.main, format: 'cjs' }],
		plugins: [
			resolve(),
			commonjs(),
			babel({
				exclude: excludes
			})
		]
	},
	{
		input: input,
		external: [],
		output: [{ file: pkg.module, format: 'es' }],
		plugins: [
			resolve(),
			commonjs(),
			babel({
				exclude: excludes
			})
		]
	}
];
