/**
 * This method allows us to map 'this' to the event listener(?)
 * @param {Object} e 
 */

const handleEvent= function(e){
    this.process(e);
}

export default handleEvent;