/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { esmExternals: true },
}

module.exports = {
  images: 
      {
        domains: ['firebasestorage.googleapis.com'],

      },
      
    
  
}
