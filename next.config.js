// next.config.js
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
    transpilePackages: ['next-mdx-remote'],
    sassOptions: {
        compiler: 'modern',
        silenceDeprecations: ['legacy-js-api'],
    },
};

module.exports = withMDX(nextConfig);
