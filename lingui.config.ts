const config = {
  locales: ["ar", "es", "de", "fr", "ru", "en"],
  sourceLocale: "en",
  catalogs: [
    {
      path: "./locales/{locale}/messages",
      include: ["./pages", "./components"],
    },
  ],
};

export default config;


