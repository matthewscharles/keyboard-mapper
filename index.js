/**
 * Keyboard Mapper
 * @class
 * @param {Object} keymap 
 */

const KeyboardMapper = function(keymap){
    this.defaultFunction = 'test';
    this.activeKeysTime = Date.now();
    this.keymap_init();
    console.log(this.keymap)
    this.listen();
}

KeyboardMapper.prototype = {}

KeyboardMapper.prototype.constructor = KeyboardMapper;

/**
 * 
 * @param {Object} e 
 * @param {String} item 
 * @param {boolean} direction true: down, false: up
 */

/**
 * key: keyCode, value: milliseconds from first key pressed
 */

KeyboardMapper.prototype.activeKeys = {};

KeyboardMapper.prototype.default = function(e,item, direction){
    // if(!e.repeat) console.log(item, direction ? 'down' : 'up')
}

KeyboardMapper.prototype.keymap_init = function(){
    // 
    Object.keys(this.keymap).forEach(key=>{this.keymap[key] = this.default},this)
    Object.keys(this.ranges).forEach(key=>{
        this.keyranges[key]={}
        this.ranges[key].forEach(x=>{
            // was this.default, but like this, if typeof item != undefined then override?
            this.keyranges[key][x.toString()] = undefined
        },this)
    },this)
}

KeyboardMapper.prototype.listen = function(target = document){
    target.addEventListener('keydown',this,false);
    target.addEventListener('keyup',this,false);
    // old way:
    // target.addEventListener('keydown',this._keyboardMethod = (e)=>this.process(e), false);
}

KeyboardMapper.prototype.handleEvent= function(e){
    this.process(e);
}

KeyboardMapper.prototype.unlisten = function(target = document){
    target.removeEventListener('keydown',this)
    target.removeEventListener('keyup',this)
    // old way:
    // target.removeEventListener('keydown', this._keyboardMethod);
}

/**
 * Common keystrokes to map
 */
KeyboardMapper.prototype.keymap = {
    // ranges / prefixes
    Key:            {},
    Arrow:          {},
    Digit:          {},
    F:              {},

    Meta:           {},
    Alt:            {},
    Shift:          {},
    Control:        {},
    // end ranges / prefixes

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

/**
 * functions for the individual keys within each range...but how to map these?
 */

KeyboardMapper.prototype.keyranges = {}

KeyboardMapper.prototype.ranges = {
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
    let category = Object.keys(this.keymap).find((item)=>e.code.includes(item))
    let item = e.code.replace(category,'')
    let down = e.type == 'keydown';
    if(down && !e.repeat){
        if(Object.keys(this.activeKeys).length==0){this.activeKeysTime = Date.now()}
        this.activeKeys[e.code] = Date.now() - this.activeKeysTime;
        // console.log(this.activeKeys);
    } else if (!down) {
        delete this.activeKeys[e.code];
    }
    if(typeof this.keyranges[category][item] == 'function') {
        this.keyranges[category][item](e,item,down)
    } else {
        this.keymap[category](e,item, down);
    }
    
    
    
}

module.exports = KeyboardMapper;