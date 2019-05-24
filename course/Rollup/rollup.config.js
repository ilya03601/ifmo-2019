import lessModules from 'rollup-plugin-less-modules';
import copy from 'rollup-plugin-copy'

export default [{
    input: 'src/app.js',
    output: {
        file: 'static/main.js',
        format: 'esm'
    },
    plugins: [
        // подключение less стилей
        lessModules({
            output: 'static/main.css'
        }),
        copy({
            targets: [
                'src/svg'
            ],
            outputFolder: 'static'
        })
    ]
}];