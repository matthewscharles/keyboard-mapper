/**
 * Process the input
 * @param {Object} e Keystroke object from event listener
 */

const process = function(e){
    // code = '', repeat = false, metaKey = false, shiftKey = false
    let category = Object.keys(this.keymap).find((item)=>e.code.includes(item))
    let item = e.code.replace(category,'')
    let down = e.type == 'keydown';
    if(down && !e.repeat){
        if(Object.keys(this.activeKeys).length==0){this.activeKeysTime = Date.now()}
        this.activeKeys[e.code] = Date.now() - this.activeKeysTime;
        
    } else if (!down) {
        delete this.activeKeys[e.code];
    }
    
    if(item==''){
        this.keymap[category](e, down);
    } else {
        if(typeof this.keyranges[category][item] == 'function') {
            this.keyranges[category][item](e,item,down);
            if(!this.exclusiveMapping){
                this.keymap[category](e,item, down);
            }
        } else {
            this.keymap[category](e,item, down);
        }
    }
  
}

export default process;