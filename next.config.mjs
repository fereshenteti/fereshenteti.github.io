/** @type {import('next').NextConfig} */
const nextConfig = {
    images: { unoptimized: true },
    sassOptions: {
        silenceDeprecations: ['import'],
    },

    // Turbopack — SVG as React components via @svgr/webpack compatibility layer
    turbopack: {
        rules: {
            '*.svg': {
                loaders: ['@svgr/webpack'],
                as: '*.js',
            },
        },
    },

    // Webpack fallback (used when not running with --turbopack)
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        });
        return config;
    },
};

export default nextConfig;
