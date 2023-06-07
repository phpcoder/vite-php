import { defineConfig } from 'vite'
import { resolve } from 'path'
import liveReload from 'vite-plugin-live-reload'

export default defineConfig({

	plugins: [
		liveReload([
			// update of php source will trigger browser reload
			__dirname + '/**/*.php',
		]),
	],


	server: {
		proxy: {
			'/index.php': {
				// change the URL according to your local web server environment
				target: 'http://localhost/vite-php/src/assets/',
				changeOrigin: true,
				secure: false,
			},
			// include other *.php sources called from your web app
		}
	},


	base: "./",

	publicDir: './src/assets',

	build: {

		manifest: true,

		rollupOptions: {

			input: resolve(__dirname, 'src/main.js'),

			output: {
				dir: 'dist',
				entryFileNames: 'build/bundle-[hash].js',
				assetFileNames: 'build/bundle-[hash].css',
			}
		}
	}

})
