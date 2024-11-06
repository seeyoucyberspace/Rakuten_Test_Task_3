module.exports = {
  e2e: {
    baseUrl: "https://sweetshop.netlify.app/",
    specPattern: 'ui_tests/specs/**/*.spec.js',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    chromeWebSecurity: false,
    // Другие настройки, если необходимо
  }
};
