/**
 * Keyboard Mapper
 * @class
 * @param {Object} keymap       - Dictionary of key types and associated functions to assign
 * @param {Object} keymap       - Dictionary of specific keys and associated functions to assign
 * @param {boolean} exclusive   - Does overriding within a range also trigger the default?
 */

const KeyboardMapper = function(keymap, keyranges, exclusive = true){
    this.defaultFunction = 'test';
    this.activeKeysTime = Date.now();
    this.exclusiveMapping = exclusive;
    this.keymap_init();
    this.keymap_assign(keymap);
    this.keymap_assign(keyranges);

    this.listeners = ['keydown','keyup']
    // on by default; use this.unlisten to stop.
    this.listen();
}

KeyboardMapper.prototype = {}

KeyboardMapper.prototype.constructor = KeyboardMapper;




/**
 * what was this attached to?
 * @param {Object} e 
 * @param {String} item 
 * @param {boolean} direction true: down, false: up
 */













module.exports = KeyboardMapper;

