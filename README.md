# parcel-transformer-env-variables-injection

Parcel plugin that injects env varaibles into a file

## Web extension example configuration

```
npm i -DE parcel-transformer-env-variables-injection
```

```
  "some_manifest_property": "{{{ MY_ENV_VARIABLE }}}",
```

```json
{
  "extends": "@parcel/config-webextension",
  "transformers": {
    "manifest.json": ["parcel-transformer-env-variables-injection", "..."]
  }
}
```
