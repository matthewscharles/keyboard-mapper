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

    // on by default; use this.unlisten to stop.
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

KeyboardMapper.prototype.numberOfActiveKeys = function(){
    return Object.keys(this.activeKeys).length;
}

/**
 * Default method
 * @param {Object} e keyboard event from listener
 * @param {string} item (if exists item within range)
 * @param {boolean} direction 
 */

KeyboardMapper.prototype.default = function(e,item, direction){
    // if(!e.repeat) console.log(item, direction ? 'down' : 'up')
}

KeyboardMapper.prototype.keymap_init = function(){
    Object.keys(this.keymap).forEach(key=>{this.keymap[key] = this.default},this)
    Object.keys(this.ranges).forEach(key=>{
        this.keyranges[key]={}
        this.ranges[key].forEach(x=>{
            // was this.default, but like this, if typeof item != undefined then override?
            this.keyranges[key][x.toString()] = undefined
        },this)
    },this)
}

/**
 * Assign the keymap -- must be in the correct format
 * @param {Object} keymap 
 */

KeyboardMapper.prototype.keymap_assign = function(keymap){
    Object.assign(this.keymap, keymap);
}

/**
 * Assign specific keyranges -- must be in the correct format
 * @param {Object} keyranges 
 * todo: merge the ranges with the keymap, or at least link?
 */

KeyboardMapper.prototype.keyranges_assign = function(keyranges){
    Object.assign(this.keyranges, keyranges);
}

/**
 * Add the event listener
 * @param {Object} target 
 */

KeyboardMapper.prototype.listen = function(target = document){
    target.addEventListener('keydown',this,false);
    target.addEventListener('keyup',this,false);
    console.log('keyboard map on, listening...')

    // old way:
    // target.addEventListener('keydown',this._keyboardMethod = (e)=>this.process(e), false);
}

/**
 * Remove the event listener
 * @param {Object} target 
 */

KeyboardMapper.prototype.unlisten = function(target = document){
    target.removeEventListener('keydown',this)
    target.removeEventListener('keyup',this)
    console.log('keyboard map off')

    // old way:
    // target.removeEventListener('keydown', this._keyboardMethod);
}
/**
 * This method allows us to map 'this' to the event listener
 * @param {Object} e 
 */

KeyboardMapper.prototype.handleEvent= function(e){
    this.process(e);
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

/**
 * Ranges of all categories for purposes of generating dictionaries
 */

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
        
    } else if (!down) {
        delete this.activeKeys[e.code];
    }
    
    if(item==''){
        this.keymap[category](e, down);
    } else {
        if(typeof this.keyranges[category][item] == 'function') {
            this.keyranges[category][item](e,item,down);
            if(!this.exclusiveMapping){
                this.keymap[category](e,item, down);
            }
        } else {
            this.keymap[category](e,item, down);
        }
    }
  
    
    
    
}

module.exports = KeyboardMapper;