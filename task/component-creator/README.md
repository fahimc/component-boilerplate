# vue-component-creator
This is a script designed for vuejs cli to create **SOC** (separation of concern) based components.
This is a simple tool to automatically create files and folders for 'separation of concern' components.


# Installation

1. Follow the [Vue CLI](https://vuejs.org/v2/guide/installation.html) guide and setup your vue boilerplate project.

2. Next thing you want to do is pull in the repo into your current project by using git's submodule command.

```cmd
git submodule add -b master https://github.com/fahimc/vue-component-creator.git
```

**NOTE:** If you see nothing inside the folder then run the following command:

```cmd
git submodule update --init --recursive
```

3. Next you need to run the init script.

```cmd
node vue-component-creator/init.js
```


# Creating Components

When you wish to create a component, vue-component-creator has included a new npm run script therefore you can use this to create component which will create all the necessary folders and files.

```cmd
npm run create-component
```

Once you have done this you will be prompted for the name of your component. After you enter the name of the component, press 'ENTER' to continue.

```cmd
What is the name of your component?
my-component-name

```

**NOTE:** use kebab case only.

Your component has now been created!

You will need to hook it up yourself but you should be ready to build a component.

# Advanced    

You can provide the src folder path in the package.json file like so:  

```js
"vue-component-creator": {
    "src-path": "src/app"
  }
```


# Help

Read [vue-template webpack documentation](http://vuejs-templates.github.io/webpack/) for more information on how the repo works.



