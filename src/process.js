/**
 * Process the input
 * @param {Object} e Keystroke object from event listener
 */

const process = function(e){
    // code = '', repeat = false, metaKey = false, shiftKey = false
    
    let category = Object.keys(this.keymap).find((item)=>e.code.includes(item));
    
    if(!category){
        if(window.verbose) console.log('no category')
        return;
    }
    
    if(e.shiftKey){
        // allow shift, for now
        if(window.verbose) console.log('shift key pressed')
        // return;
    }
    
    if(e.metaKey || e.ctrlKey || e.altKey){
        if(window.verbose) console.log('modifier key pressed')
        return;
    }
    
    let item = e.code.replace(category,'')
    let down = e.type == 'keydown';
    
    if(!e.repeat) {
        
        if(typeof this[down ? 'keyDown' : 'keyUp'][item] === 'function'){
            
            this[down ? 'keyDown' : 'keyUp'][item](e,item, down);
        }
        
    }
    
    if(down && !e.repeat){
        if(Object.keys(this.activeKeys).length==0){
            this.activeKeysTime = Date.now()
        }
        
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
            // insert keyup/down here?
        }
    }
    
}

export default process;