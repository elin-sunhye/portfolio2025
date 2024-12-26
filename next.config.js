/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack(config) {
        config.cache = {
            type: 'filesystem',  // 파일 시스템 캐시 활성화
        };
        return config;
    },
    // 다른 설정들
};

module.exports = nextConfig;
