/**
 * Returns the number of active keys
 * @param {Object} activeKeys
 * @returns {number} - Number of active keys
 */

const numberOfActiveKeys = function(){
    return Object.keys(this.activeKeys).length;
}

export default numberOfActiveKeys;