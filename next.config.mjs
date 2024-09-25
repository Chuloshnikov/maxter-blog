/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '*.googleusercontent.com',
          },
          {
            protocol: 'https',
            hostname: "avatars.githubusercontent.com",
          },
          {
            protocol: 'https',
            hostname: 'maxter.s3.amazonaws.com'
          },
          {
            protocol: 'https',
            hostname: 'maxter.s3.eu-north-1.amazonaws.com'
          }
        ]
      }
};

export default nextConfig;
