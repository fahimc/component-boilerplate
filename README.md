# Componentjs Boilerplate
This is a boilerplate for the componentjs framework. It provides the following features:  
- local dev server 
- distrubtion build task
- page router
- templating to transform component tags to componentjs templates
- create component task which generates all the required files in the relavant folders for a component with the given component name.  
- file change watchers to update the local server using browserSync  

## Useful Links  
- [componentjs readme](https://github.com/fahimc/Component)  
- [router readme](https://github.com/fahimc/tiny-router)  
- [dev-cli readme](https://github.com/fahimc/dev-cli)

## Installation  
```cmd
npm install
```

## Run local server
```cmd
npm run dev
```

## Create Component  
Components need to have a consistent folder structure and specific **componentjs** tags etc. There is a simple npm script to help you create components. Use the following command:  
```cmd
npm run create
```

## Development
The folder strucuture of the components and in src are important and you should ensure you development in the same format so the gulp tasks understand where to look for files.

## Component templating
In componentjs you have to specify a template element so you don't have to write the entire html for the component everytime you want to use it. This boilerplate has a html replacement task which will replace all `<component-[componentName]></component-[componentName]>` tags with this component template. 

### Example
```html
<component-app></component-app>
```
will be replace with the template found in `src/component/app/template/template.html`
```html
<div data-component="app">
	<component-navigation></component-navigation>
	<div data-router id="main-router">
		<section data-route="/">
			<component-home class="active"></component-home>
			<component-footer></component-footer>
		</section>
		<section data-route="/about">
			<component-about></component-about>
			<component-footer></component-footer>
		</section>
	</div>
</div>
```
This task can handle nested tags to as shown above. You can also add attributes which will get added to the element replacing the component tag.



