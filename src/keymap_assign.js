/**
 * Assign the keymap -- must be in the correct format
 * @param {Object} keymap 
 */

const keymap_assign = function(keymap){
    Object.assign(this.keymap, keymap);
}

export default keymap_assign;