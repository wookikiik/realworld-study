/** @type {import('next').NextConfig} */

const nextConfig = {    
    images: {        
        remotePatterns: [
            {
                protocol: "http",
                hostname: "i.imgur.com",
                pathname: "/*",
            },
            {
                protocol: "https",
                hostname: "i.stack.imgur.com",
                pathname: "/*",
            },
            {
                protocol: "https",
                hostname: "api.realworld.io",                
                pathname: "/*",
            },            
        ],
    },
};

module.exports = nextConfig;
// 외부 이미지에 대해 등록해주는 것
// commonJs 명시 -> cjs
// modulejs -> mjs
