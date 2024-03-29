/**
 * Assign the keymap -- must be in the correct format
 * @param {Object} keymap 
 */

const keymap_assign = function(keymap){
    Object.assign(this.keymap, keymap);
    return this;
}

export default keymap_assign;