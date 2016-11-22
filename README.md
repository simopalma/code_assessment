# Widget parking test

### Getting started

Requirements
  - [Node]
  - [Grunt]
  - [Bower]

  Dependencies
  - [Mustache]
  - [Jquery]

Preparations:
  - In the command line go into the folder `Grunt` and install project dependencies with `npm install`
  - In the command line go into the root folder and install bower components with `bower install`
  - In the command line go into the root folder and start [server] with `node webserver.js`, server start up in http://127.0.0.1:8000/

  ### How to use a widget

Include all files into dist folder and its dependencies.<br>
Insert a template folder into your public folder.<br>
Create a container in your file with class `widget-container`, the template will render here.<br>
Optionally you can insert a global data with name `json-url`, that contains a url of your json, if not entered anything will take a mock json.<br>
Ex.<br>

```html
<div class="widget-container" data-json-url="path/url.json"></div>
```

In this repository all is ready to test a widget, I created a index file with all dependencies included.




   [Bower]: <https://bower.io/>
   [Grunt]: <http://gruntjs.com/getting-started/>
   [Node]: <https://nodejs.org/en//>
   [Mustache]: <https://github.com/janl/mustache.js/>
   [Jquery]: <https://jquery.com//>
   [server]: <https://gist.github.com/marcomontalbano/2851d00d96e592f03a8a34f8de073bd4/>
