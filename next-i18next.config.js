module.exports = {
    i18n: {
      defaultLocale: 'en-EN',
      locales: ['en-EN', 'tr-TR'],
      localeDetection: true
    },
    otherLanguages: ["en-EN", "tr-TR"],
    defaultLanguage: "en-EN",
    fallbackLng: ["en-EN"],
    domains: [
      {
        domain: 'localhost:3000/tr-TR',
        defaultLocale: 'tr-TR',
        locales: ['tr-TR']
      },
      {
        domain: 'localhost:3000/en-EN',
        defaultLocale: 'en-EN',
        locales: ['en-EN']
      }
    ]
};