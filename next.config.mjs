/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images:{
        remotePatterns:[
            // {
            //     protocol: 'https',
            //     hostname: "images.pexels.com"
            // },
            // {
            //     protocol: 'https',
            //     hostname: "avatars.githubusercontent.com"
            // },
            
            {
                protocol: 'https',
                hostname: "*",
            }
        ]
    }
};

export default nextConfig;
