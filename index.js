/**
 * Keyboard Mapper
 * @class
 * @param {Object} keymap 
 */

const KeyboardMapper = function(keymap){
    this.defaultFunction = 'test';
    this.keymap_init();
    console.log(this.keymap)
}

KeyboardMapper.prototype = {}

KeyboardMapper.prototype.constructor = KeyboardMapper;

KeyboardMapper.prototype.default = function(e,item){
    console.log('hello tgere',item,this.defaultFunction)
}

KeyboardMapper.prototype.keymap_init = function(){
    // 
    Object.keys(this.keymap).forEach(key=>{this.keymap[key] = this.default},this)
}

/**
 * Common keystrokes to map
 */
KeyboardMapper.prototype.keymap = {
    // Sequences / prefixes
    Key:            {},
    Arrow:          {},
    Digit:          {},
    F:              {},

    Meta:           {},
    Alt:            {},
    Shift:          {},
    Control:        {},
    // end sequences / prefixes

    Backspace:      {},
    Delete:         {},
    Tab:            {},
    Space:          {},
    
    Minus:          {},
    Equal:          {},
    Semicolon:      {},
    Quote:          {},
    Comma:          {},
    Period:         {},
    
    Slash:          {},
    Backslash:      {},
    Backquote:      {},
    
    BracketLeft:    {},
    BracketRight:   {},
}

KeyboardMapper.prototype.sequences = {
    Key:    ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
    Arrow:  ['Left','Right','Up','Down'],
    Digit:  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    F:      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    Meta:   ['Left','Right'],
    Alt:    ['Left','Right'],
    Shift:  ['Left','Right'],
    Control:['Left','Right']
}

/**
 * Process the input
 * @param {Object} e Keystroke object from event listener
 */

KeyboardMapper.prototype.process = function(e){

    // code = '', repeat = false, metaKey = false, shiftKey = false

    // console.log(e)
    let category = Object.keys(this.keymap).find((item)=>e.code.includes(item))
    let item = e.code.replace(category,'')
    // console.log(category, item);
    this.keymap[category](e,item);
    // detect prefix
    // slice string based on length of prefix
    // run function
    
}

module.exports = KeyboardMapper;