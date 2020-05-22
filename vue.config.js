module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'network': '@/network',
                'components': '@/components',
                'views': '@/views',
                'content': 'components/content',
                'common': 'components/common',
            }
        }
    }
};
