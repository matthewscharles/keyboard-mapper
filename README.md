# keyboard-mapper
 Map keyboard events. Work in progress and not really ready for others to use just yet!
 
 I am using this for screen-based musical instruments (i.e. to trigger notes and change presets on synthesisers) and in particular hope to update with better considerations for screen reader systems in the near future.

 CM 2022

# structure

The "map" is a dictionary with two main categories: *keymap* and *keyranges*

**keymap***: individual keys e.g. Space, Tab, and what I call keyranges (Key, Digit, Shift, Arrow, etc.)

**keyranges**: (should be renamed) -- the individual keys within the ranges/categories e.g. Digit(0-1), Key(a-z), Shift(Left,Right), Arrow(Left,Right,Up,Down), etc.

# usage

## build
At present the library sits in a single file: index.js.

The build task in package.json updates the docs and runs webpack to compile the test version.

At the time of writing, this is one of my first experimental modules and I'm still working out the conventions for building a module intended for the web.  At the moment my method of compiling via webpack is a quick fix and a bit idiosyncratic. If you think the code might be useful and can help out with this, please get in touch!


## code examples

*More information in the docs folder...*

---

Create an instance (will listen to the document by default)
```
const keyboardMapper = new KeyboardMapper();

```

Remove the listener (does not remove the instance altogether, for now):
```
keyboardMapper.unlisten();
```
---

Pass a default keyboard event as e from eventlistener...  

**Item** is the value if the key sits in a keyrange (e.g. for the event with code 'KeyE', item will be 'E'). 

**Direction** is a boolean (true = keydown, false = keyup).

n.b. for keys that don't fall into a range, the arguments should be e, direction *(todo: swap order of item and direction)*
```
keyboardMapper.default = function(e, item, direction){

}
```

---

Right now this is probably more complicated to implement than it should be.
I hope it'll be easier to manage overall than setting up event listeners ad hoc..



Initialise all keys with default method (not very useful):
```
keyboardMapper.keymap_init();
```

---

Set a general keyboard event (e.g. respond to Keys, Digit)
```
keyboardMapper.keymap['Key'] = function(e, item, direction){
    if(!e.repeat) console.log(item, direction)
}
```

---

Override a specific key
```
keyboardMapper.keyranges.Key.A = function(e, item, direction){console.log(e.keyCode, direction)}
```

---

Remove the override by setting to something not of type 'function':
```
keyboardMapper.keyranges.Key.A = undefined;
```

---

Preferred usage: set a default for the keys in general, and override individual keys with Object.assign...
```
Object.assign(keyboardMapper.keyranges,{
    Key:{
        A: (e, item, direction)=>{console.log('A', direction)},
        S: (e, item, direction)=>{console.log('S', direction ? 'up' : 'down')}
    }
})

```

---

Set individual key where category/range does not apply:
```
keyboardMapper.keymap['Tab']=function(e, down){
    console.log(down?'tab down':'tab up')
}
```

---
