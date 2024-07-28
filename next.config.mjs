/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                hostname: 'www.flaticons.com',

            },
        ],
    },
    output:"export"
};

export default nextConfig;
