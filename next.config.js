module.exports = {
    async rewrites() {
        return [
            {
                source: '/sitemap.xml',
                destination: '/api/sitemap'
            },{
                source: '/wp-content/:path*',
                destination: `${process.env.WP_URL}/wp-content/:path*`
            }
        ];
    }
};