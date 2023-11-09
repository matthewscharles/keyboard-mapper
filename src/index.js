import activeKeys from './activeKeys.js'
import defaultFunction from './defaultFunction.js'
import exclusive from './exclusive.js'
import handleEvent from './handleEvent.js'
import keymap from './keymap.js'
import keymap_assign from './keymap_assign.js'
import keymap_init from './keymap_init.js'
import keyranges from './keyranges.js'
import keyranges_assign from './keyranges_assign.js'
import listen from './listen.js'
import numberOfActiveKeys from './numberOfActiveKeys.js'
import process from './process.js'
import ranges from './ranges.js'
import unlisten from './unlisten.js'

/**
 * Keyboard Mapper
 * @class
 * @param {boolean} exclusive   - Does overriding within a range also trigger the default?
 * @param {Object} keymap       - Dictionary of key types and associated functions to assign
 * @param {Object} keyranges       - Dictionary of specific keys and associated functions to assign
 */

const KeyboardMapper = function(exclusive = true, keymap= {}, keyranges={}){
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

Object.assign(KeyboardMapper.prototype, {
    activeKeys,
    defaultFunction,
    exclusive,
    handleEvent,
    keymap,
    keymap_assign,
    keymap_init,
    keyranges,
    keyranges_assign,
    listen,
    numberOfActiveKeys,
    process,
    ranges,
    unlisten
})

export { KeyboardMapper };