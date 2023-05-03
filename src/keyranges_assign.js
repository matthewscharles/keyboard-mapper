/**
 * Assign specific keyranges -- must be in the correct format
 * @param {Object} keyranges 
 * todo: merge the ranges with the keymap, or at least link?
 */

const keyranges_assign = function(keyranges){
    Object.assign(this.keyranges, keyranges);
}

export default keyranges_assign