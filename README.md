# parcel-transformer-env-variables-injection

Parcel plugin that injects env varaibles into a file

```
npm i -DE parcel-transformer-env-variables-injection
```

## Web extension example configuration

#### manifest.json
```
  "some_manifest_property": "{{{ MY_ENV_VARIABLE }}}",
```

#### Update .parcelrc and add plugin to `transformers`
```json
{
  "extends": "@parcel/config-webextension",
  "transformers": {
    "manifest.json": ["parcel-transformer-env-variables-injection", "..."]
  }
}
```

## HTML file example

#### src/index.html

```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <title>My First Parcel App</title>
    <link rel="stylesheet" href="styles.css" />
    <script type="module" src="app.js"></script>
  </head>
  <body>
    <h1>{{{ MY_ENV_VARIABLE }}}</h1>
  </body>
</html>
```

#### Update .parcelrc and add plugin to `transformers`

```json
{
  "transformers": {
    "index.html": [
      "parcel-transformer-env-variables-injection",
      "..."
    ]
  }
}
```

## How can I define env variables in Parcel?
 
1. By creating [.env](https://parceljs.org/features/node-emulation/#.env-files) file in repo root directory
2. By adding env variable to [package.json](https://parceljs.org/getting-started/webapp/#package-scripts) start and/or build script 

```
{
  "name": "my-project",
  "source": "src/index.html",
  "scripts": {
    "start": "MY_ENV_VARIABLE=foo parcel",
    "build": "MY_ENV_VARIABLE=bar parcel build"
  },
  "devDependencies": {
    "parcel": "latest"
  }
}
```

3. For more advance, dynamic variables you can write JS scripts.

### package.json

```
"build": "node ./my-customs-script.js",
```

### my-customs-script.js

```
process.env.MY_ENV_VARIABLE = Date.now().toString()

execSync('yarn parcel build', { stdio: 'inherit' })
```

## Troubleshooting
1. Run clear task if it's defined in package.json or run `rm -rf build/ .parcel-cache` command to clean up Parcel cache.


