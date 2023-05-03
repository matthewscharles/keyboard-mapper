/**
 * Add the event listener
 * @param {Object} target 
 */

KeyboardMapper.prototype.listen = function(target = document){
    for (let item of this.listeners){
        target.addEventListener(item,this,false)
    }
    console.log('keyboard map on, listening...')

    // old way:
    // target.addEventListener('keydown',this._keyboardMethod = (e)=>this.process(e), false);
}