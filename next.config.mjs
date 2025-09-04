/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'oaidalleapiprodscus.blob.core.windows.net'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

export default nextConfig
