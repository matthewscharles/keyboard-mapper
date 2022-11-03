/**
 * @class
 * @param {Object} keymap 
 */

const KeyboardMapper = function(keymap){
    
}

KeyboardMapper.prototype = {}

KeyboardMapper.prototype.constructor = CaptionsSBV;

/**
 * Common keystrokes to map
 */
KeyboardMapper.prototype.keymap = {
    // Sequences / prefixes
    Key:            {},
    Arrow:          {},
    Digit:          {},
    F:              {},
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
    F:      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
}

/**
 * Process the input
 * @param {Object} e Keystroke object from event listener
 */

KeyboardMapper.prototype.process = function(e){

    // keycode = '', repeat = false, metaKey = false, shiftKey = false

    // detect prefix
    // slice string based on length of prefix
    // run function
}

module.exports = KeyboardMapper;