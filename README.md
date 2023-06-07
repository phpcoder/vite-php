# Vite-PHP Boilerplate
A Minimalistic Vite 4 Boilerplate to be used in your next PHP project. Create your PHP pages with power of Vite accelerated development with JS/CSS/SCSS.

Adding frontend building tools such as Webpack or Rollup to your workflow may significantly boost the productivity of a web app development project. It will rebuild the whole project on any source update and reload your browser. For the projects involving PHP server side scripting such additions have also been useful albeit requiring some more tweaking with toolset config.


## Vitejs
Vitejs is similar to the mentioned tools (in fact it is build on top of Rollup) but can achieve the desired results with minimum effort and leaves all other tools behind with its amazing speed.

While traditional web app development with entry points such as ```index.html``` require almost zero config to support JS/TS, CSS preprocessors (SCSS) and browser reload, when your project involves ```index.php``` as an entry point, the life is not that bright. More options are available for [Laravel](https://laravel.com/docs/10.x/vite) designers.

This project describes a simple Vitejs set-up when you use ```index.php``` instead of  ```index.html``` and still want to add the benefits of Vitejs-powered workflow.


## Installation and Usage
To be able to use PHP scripting in your HTML code it is not enough to use Nodejs dev server as a part of your Vite workflow as it is not able to interpret PHP. Thus, your local development server (Nginx, Apache) should be involved too. Fortunately, for such case Vitejs offers the option to set up server proxy for selected files.


Install the project packages in a usual way.


| Description | Command |
| --- | --- |
| Clone repository  | ```git clone https://github.com/phpcoder/vite-php.git```  |
| Install packages  | ```npm install``` |
| Run development server  | ```npm run dev``` |
| URL to open your project page  | ```http://localhost:5173/index.php```  |
| Buld for production  | ```npm run build``` |


If your project is vanilla javascript (not typescript) the config ```vite.config.js``` will require some changes in dev server proxy settings (your Apache or Nginx server path) for the PHP sources used in your project. This config should not list other ```*.php``` sources not called directly by your web app. 


```
server: {
	proxy: {
		'/index.php': {
			// change the URL according to your local web server environment
			target: 'http://localhost/vite/vite-php/src/assets/',
			...
		},
		// include other *.php sources called from your web app
	}
},
```


This minimum workflow config involves a single plugin for browser reload. In fact, browser reload is a built-in Vitejs feature and does not require any config in a traditional set up. However, I did not find any way to use it with PHP sources. In case someone is aware of it, let me know and I will remove ```vite-plugin-live-reload``` from the config to keep less dependencies on randomly supported plugins.

## CSS/SCSS
Regarding other features, such as the use of CSS Preprocessors, namely SCSS, it is natively supported by Vitejs. In case Sass/SCSS is used in your project, the corresponding package should be mentioned in ```package.json```:

```
  "devDependencies": {
  	...
    "sass": "^1.0.0",
 	...
  }
```

If pure CCS is your favourite, the reference to the ```sass``` package can be removed from ```package.json```.

## Example
To illustrate the use of this minimalistic Vite Boilerplate, I include a simple carousel as an example. That Simple Vanilla Javascript/SCSS carousel I will publish in another public repository.


## Credits
* [@andrefelipe](https://github.com/andrefelipe/vite-php-setup) Vite-PHP Setup.

## Links
* [Vite](https://vitejs.dev/) - Vite Next Generation Frontend Tooling.

## License
Released under the [MIT License](http://www.opensource.org/licenses/mit-license.php) - see the [LICENSE](LICENSE) file for details.