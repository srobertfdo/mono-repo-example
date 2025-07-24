//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require("@nx/next")
const path = require("path")

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    externalDir: true,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add alias for the UI library
    config.resolve.alias = {
      ...config.resolve.alias,
      "@automotive/ui": path.resolve(__dirname, "../../libs/ui/src/index.ts"),
    }

    return config
  },
}

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
]

module.exports = composePlugins(...plugins)(nextConfig)
