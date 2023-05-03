/**
 * Remove the event listener
 * @param {Object} target 
 */

KeyboardMapper.prototype.unlisten = function(target = document){
    for (let item of this.listeners){
        target.removeEventListener(item,this,false)
    }
    console.log('keyboard map off')

    // old way:
    // target.removeEventListener('keydown', this._keyboardMethod);
}