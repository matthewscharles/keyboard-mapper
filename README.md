# keyboard-mapper
 Map keyboard events. Work in progress and not really ready for others to use!

# usage
```
const keyboardMapper = new KeyboardMapper();

```

Pass keyboard event as e from eventlistener:
```
keyboardMapper.default = function(e, item, direction){

}
```

Right now this is probably more complicated to implement than it should be, but I hope it'll be easier to manage overall than setting up event listeners ad hoc..

Initialise all keys with default method (not very useful):
```
keyboardMapper.keymap_init();
```
Set a general keyboard event (e.g. respond to Keys, Digit)
```
keyboardMapper.keymap['Key'] = function(e, item, direction){
    if(!e.repeat) console.log(item, direction)
}
```
Override a specific key
```
keyboardMapper.keyranges.Key.A = function(e, item, direction){console.log(e.keyCode, direction)}
```

Remove the override by setting to something not of type 'function':
```
keyboardMapper.keyranges.Key.A = undefined;
```

Preferred usage: set a default for the keys in general, and override individual keys with Object.assign...
```
Object.assign(keyboardMapper.keyranges,{
    Key:{
        A: (e, item, direction)=>{console.log('A', direction)},
        S: (e, item, direction)=>{console.log('S', direction ? 'up' : 'down')}
    }
})

```

Set individual key where category/range does not apply:
```
keyboardMapper.keymap['Tab']=function(e, down){
    console.log(down?'tab down':'tab up')
}
```