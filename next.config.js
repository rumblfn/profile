/** @type {{images: {remotePatterns: [{protocol: string, hostname: string, port: string}]}, reactStrictMode: boolean}} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.discordapp.com"]
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
