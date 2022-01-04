module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'source.unsplash.com',
      'images.prismic.io',
      'wendelin-tech.cdn.prismic.io',
    ],
  },
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en-us', 'de-ch'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'de-ch',
  },
};
