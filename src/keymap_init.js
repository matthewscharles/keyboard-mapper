const keymap_init = function(){
    this.keymap ={}
    this.keyUp = {};
    this.keyDown = {}
    Object.values(this.ranges).forEach(range=>{
        Object.entries(range).forEach(([key,value])=>{
            
            this.keyUp[value] = ()=>{}
            this.keyDown[value] = ()=>{}
        })
    })
    
    Object.keys(this.keymap).forEach(key=>{this.keymap[key] = this.default},this)
    
    Object.keys(this.ranges).forEach(key=>{
        this.keyranges[key]={};
        
        this.keyUp[key] = ()=>{};
        this.keyDown[key] = ()=>{};    
        this.ranges[key].forEach(x=>{
            // was this.default, but like this, if typeof item != undefined then override?
            this.keyranges[key][x.toString()] = undefined
        },this)
    },this)
}

export default keymap_init

