export default {
    plugins: [
        ['umi-plugin-react', {
            title: true, // 开启title组件
            dva: true, // 开启dva插件
            routes: {
                exclude: [/models\//],
            }
        }]
    ]
}