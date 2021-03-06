# grunt-caketpl

> HTML templates builder. Creates javascript compatiable strings from filesystem based templates.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-caketpl --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-caketpl');
```

## The "caketpl" task

### Overview
In your project's Gruntfile, add a section named `cakeTpl` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  caketpl: {
    options: {
      // Task-specific options go here.
      
      scope : '$c.tpl' // the scope for templates
    },
    files: {
      template.js : ['view/templates/*']
    },
  },
});
```

### Options

#### options.scope
Type: `String`
Default value: `$c.tpl`

