import {resolve} from 'path'

export default{
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.js'),
            name: 'keyboard-mapper',
            fileName: (format) => `keyboard-mapper.${format}.js`
        }
    }
}