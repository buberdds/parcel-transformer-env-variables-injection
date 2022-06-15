const { Transformer } = require('@parcel/plugin');

module.exports = new Transformer({
  async transform({ asset, options: { env } }) {
    const code = await asset.getCode();
    const result = code.replace(/{{{ ([^}]+) }}}/g, (match, envKey) => {
      asset.invalidateOnEnvChange(envKey);
      return env[envKey] === undefined ? match : env[envKey];
    });
    asset.setCode(result);
    return [asset];
  },
});
