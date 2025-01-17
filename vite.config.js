import { sveltekit } from '@sveltejs/kit/vite';
import fs from 'node:fs';

const pkg = JSON.parse(fs.readFileSync(new URL('package.json', import.meta.url), 'utf8'));

/** @type {import('vite').UserConfig} */
const config = {
	define: {
		PACKAGE_JSON: JSON.stringify(pkg)
	},
	plugins: [sveltekit()]
};

export default config;
