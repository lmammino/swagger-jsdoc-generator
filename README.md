# swagger-jsdoc-generator


[![npm version](https://badge.fury.io/js/swagger-jsdoc-generator.svg)](http://badge.fury.io/js/swagger-jsdoc-generator)
[![Build Status](https://travis-ci.org/lmammino/swagger-jsdoc-generator.svg?branch=master)](https://travis-ci.org/lmammino/swagger-jsdoc-generator)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

Command line script that generates a swagger file based on jsdoc comments.


## Usage

You can use the command as follows
```bash
swagger-jsdoc-generator config.js
```

Where `config.js` is the path to the configuration file.

If you don't specify a configuration file the command will look by default
for `swaggerJsdoc.config.js` in the current working directory.

This will print in the standard output a swagger definition in JSON format, so you can easily pipe the output to another command or to a file.

E.g.:

```bash
swagger-jsdoc-generator config.js | mySwaggerDoc.json
```

or, assuming you have some utility to convert the definition to HTML, you could do

```bash
swaggerToHtml < swagger-jsdoc-generator config.js
```

More detailed example on how to configure and use the command [later here](https://github.com/lmammino/swagger-jsdoc-generator/blob/master/README.md#example).


## Requirements

This package requires Node.js (version >= 4.0.0) and NPM (version >= 2.14.2).


## Install

Global install:

```bash
npm install --global swagger-jsdoc-generator
```

As dev dependency (e.g. if needed as part of a build process):

```bash
npm install --save-dev swagger-jsdoc-generator
```

## Configuration

The configuration file is used to specify which files needs to be scanned
to look for jsdoc swagger documentation and other options.

A configuration file can be a plain JSON file or a javascript module
exporting an object.

An example of configuration is the following:

```json
{
  "swaggerDefinition": {
    "info": {
      "title": "My api",
      "version": "1.0.0",
    },
  },
  "apis": ["src/myApi.js"]
}
```

All the options supported by [swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc) (which is the module used internally by the command)
are supported.

You can also [check out an example](https://github.com/lmammino/swagger-jsdoc-generator/blob/master/fixtures/sampleConfig.js) of dynamic configuration through node modules.


## Example

Here's a brief example about how to document an API:

```javascript
// src/mySampleApi.js

/**
 * @swagger
 * /login:
 *   post:
 *     description: Login to the application
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: username
 *         description: Username to use for login.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         description: User's password.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: login
 */
app.post('/login', function(req, res) {
  res.json(req.body);
});
```

Then you need to have `mySampleApi.js` in your `conf.json` configuration file:

```json
{
  "swaggerDefinition": {
    "info": {
      "title": "My sample api",
      "version": "1.0.0"
    }
  },
  "apis": ["src/mySampleApi.js"]
}

```

Finally you can run the command to produce the swagger definition:

```bash
swagger-jsdoc-generator conf.json
```

which will produce the following output:

```json
{
  "info": {
    "title": "My sample api",
    "version": "1.0.0"
  },
  "swagger": "2.0",
  "paths": {
    "/login": {
      "post": {
        "description": "Login to the application",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "username",
            "description": "Username to use for login.",
            "in": "formData",
            "required": true,
            "type": "string"
          },
          {
            "name": "password",
            "description": "User's password.",
            "in": "formData",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "login"
          }
        }
      }
    }
  },
  "definitions": {},
  "responses": {},
  "parameters": {},
  "securityDefinitions": {},
  "tags": []
}
```


## Contributing

Everyone is very welcome to contribute to this project.
You can contribute just by submitting bugs or suggesting improvements by
[opening an issue on GitHub](https://github.com/lmammino/swagger-jsdoc-generator/issues).


## License

Licensed under [MIT License](LICENSE). © Luciano Mammino.
