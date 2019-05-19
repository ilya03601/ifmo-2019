import lessModules from 'rollup-plugin-less-modules';

export default [{
    input: 'src/app.js',
    output: {
        file: 'static/main.js',
        format: 'esm'
    },
    plugins: [
        lessModules({
            output: 'static/main.css'
        }) // подключение less стилей
    ]
}];