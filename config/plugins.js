module.exports = ({ env }) => ({
  // ...
  upload: {
    provider: "cloudinary",
    providerOptions: {
      cloud_name: env("noroff-as"),
      api_key: env("134344697661213"),
      api_secret: env("zzG_kQ0rjfAzatV_I2lMhDHBDak"),
    },
    actionOptions: {
      upload: {},
      delete: {},
    },
  },
  // ...
});
