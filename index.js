import activeKeys from './src/activeKeys.js'
import defaultFunction from './src/defaultFunction.js'
import exclusive from './src/exclusive.js'
import handleEvent from './src/handleEvent.js'
import keymap from './src/keymap.js'
import keymap_assign from './src/keymap_assign.js'
import keymap_init from './src/keymap_init.js'
import keyranges from './src/keyranges.js'
import keyranges_assign from './src/keyranges_assign.js'
import listen from './src/listen.js'
import numberOfActiveKeys from './src/numberOfActiveKeys.js'
import process from './src/process.js'
import ranges from './src/ranges.js'
import unlisten from './src/unlisten.js'

/**
 * Keyboard Mapper
 * @class
 * @param {Object} keymap       - Dictionary of key types and associated functions to assign
 * @param {Object} keymap       - Dictionary of specific keys and associated functions to assign
 * @param {boolean} exclusive   - Does overriding within a range also trigger the default?
 */

const KeyboardMapper = function(keymap, keyranges, exclusive = true){
    this.defaultFunction = ()=>{};
    
    this.activeKeysTime = Date.now();
    this.exclusiveMapping = exclusive;
    
    this.keymap_init();
    this.keymap_assign(keymap);
    this.keymap_assign(keyranges);
    
    this.listeners = ['keydown','keyup']
    this.listen();
}

KeyboardMapper.prototype = {};

KeyboardMapper.prototype.constructor = KeyboardMapper;

KeyboardMapper.prototype.activeKeys = activeKeys;
KeyboardMapper.prototype.defaultFunction = defaultFunction;
KeyboardMapper.prototype.exclusive = exclusive;
KeyboardMapper.prototype.handleEvent = handleEvent;
KeyboardMapper.prototype.keymap = keymap;
KeyboardMapper.prototype.keymap_assign = keymap_assign;
KeyboardMapper.prototype.keymap_init = keymap_init;
KeyboardMapper.prototype.keyranges = keyranges;
KeyboardMapper.prototype.keyranges_assign = keyranges_assign;
KeyboardMapper.prototype.listen = listen;
KeyboardMapper.prototype.numberOfActiveKeys = numberOfActiveKeys;
KeyboardMapper.prototype.process = process;
KeyboardMapper.prototype.ranges = ranges;
KeyboardMapper.prototype.unlisten = unlisten;

export default KeyboardMapper;