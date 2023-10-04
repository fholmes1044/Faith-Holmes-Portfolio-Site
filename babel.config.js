module.exports = function (api) {
    api.cache(true);
  
    const presets = [
      [
        "@babel/preset-env",
        {
          "modules": false // Set to "false" for ESM support
        }
      ]
    ];
  
    return {
      presets
    };
  };
  