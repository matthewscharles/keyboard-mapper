import {KeyboardMapper} from './dist/keyboard-mapper.es.js';
window.keyboardMapper = new KeyboardMapper(false);

let noteNames = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B']
        keyboardMapper.keymap.Key = (e, item, direction)=>{
            document.querySelector('#test').innerHTML=`${item} ${direction ? 'pressed' : 'released'}`
            document.querySelector('#active_number').innerHTML = keyboardMapper.numberOfActiveKeys();
        }

        keyboardMapper.keyUp.P = ()=>{console.log('P ***')}
        keyboardMapper.keyDown.P = ()=>{console.log('P ---')}
        
        keyboardMapper.keymap.Digit = (e, item, direction)=>{
            document.querySelector('#test').innerHTML=`note ${noteNames[item]} ${direction ? 'pressed' : 'released'}`
            document.querySelector('#active_number').innerHTML = keyboardMapper.numberOfActiveKeys();
        }
        Object.assign(keyboardMapper.keyranges,{
            Key:{
                A: (e, item, direction)=>{document.querySelector('#test').style.backgroundColor=direction ? 'red' : 'white'},
                S: (e, item, direction)=>{document.querySelector('#test').style.backgroundColor=direction ? 'green' : 'white'}
            }
        })