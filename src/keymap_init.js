KeyboardMapper.prototype.keymap_init = function(){
    Object.keys(this.keymap).forEach(key=>{this.keymap[key] = this.default},this)
    Object.keys(this.ranges).forEach(key=>{
        this.keyranges[key]={}
        this.ranges[key].forEach(x=>{
            // was this.default, but like this, if typeof item != undefined then override?
            this.keyranges[key][x.toString()] = undefined
        },this)
    },this)
}