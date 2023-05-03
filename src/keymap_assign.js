/**
 * Assign the keymap -- must be in the correct format
 * @param {Object} keymap 
 */

KeyboardMapper.prototype.keymap_assign = function(keymap){
    Object.assign(this.keymap, keymap);
}