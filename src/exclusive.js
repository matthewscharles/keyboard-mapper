/**
 * 
 * @param {*} flag 
 * @returns {KeyboardMapper} - Returns self for method chaining
 */

function exclusive(flag){
    this.exclusiveMapping = flag;
    return this;
}

export default exclusive;