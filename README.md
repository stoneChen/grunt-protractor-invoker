# grunt-protractor-invoker

> just to invoke global protractor using directConnect

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-protractor-invoker --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-protractor-invoker');
```

## The "protractor_invoker" task

### Overview
In your project's Gruntfile, add a section named `protractor_invoker` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  protractor_invoker: {
    e2e: {
      configFile: 'test/protractor.conf.js'
    }
  },
});
```

### Options

#### options.configFile
Type: `String`

A string value that resolved to your protractor.conf.js.  
If this value is undefined or '',the result command will be `protractor`,which will find `protractor.conf.js` in current directory.

### Usage Examples


```js
grunt.initConfig({
  protractor_invoker: {
    e2e: {
      configFile: 'test/protractor.conf.js'
    }
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
0.1.0
