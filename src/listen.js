/**
 * Add the event listener
 * @param {Object} target 
 */

// old way:
// target.addEventListener('keydown',this._keyboardMethod = (e)=>this.process(e), false);

const listen = function(target = document){
    for (let item of this.listeners){
        target.addEventListener(item,this,false)
    }
    console.log('keyboard map on, listening...')

    return this;
}
export default listen;