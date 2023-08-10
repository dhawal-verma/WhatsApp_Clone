/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env :{
    NEXT_PUBLIC_ZEGO_APP_ID : 2052308207,
    NEXT_PUBLIC_ZEGO_SERVER_ID : "592c1ebbf24f918f13efcad23691710c"
  },
  images :{
    domains:["localhost"],
  }
};

module.exports = nextConfig;
