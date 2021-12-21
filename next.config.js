const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");

module.exports = withPlugins([], {});

module.exports = withPWA({
    pwa: {
        dest: "public",
        register: true,
        skipWaiting: true,
    },
});
