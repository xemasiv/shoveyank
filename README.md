# shoveyank
Functional state getter &amp; setter.

```
var state = {
  a: {
    b: {
      c: 1
    }
  }
};
const setState = (newState) => {
  state = newState;
};
console.log(yank(state, 'a.b.c', 1)); // 1
shove(setState, 'a.b.c')(2);
console.log(yank(state, 'a.b.c', 1)); // 2
console.log(yank(state, 'a.b.d')); // undefined
```

#### function **shove**
* Parameters:
  * `setterFunction` *Function*, ie. `const setState = this.setState.bind(this);`
  * `path` *String*, ie. 'user.details.name'
* Returns *Function*, parameters:
  * `value` *Any*

#### function **yank**
* Parameters:
  * `state` *Object*
  * `path` *String*, ie. 'user.details.name'
  * `default` *Any*
* Returns *Any*

## Inspirations

* `dlv` (modified) - https://github.com/developit/dlv
* `dset` (modified) - https://github.com/lukeed/dset

## License

Attribution 4.0 International (CC BY 4.0)

* https://creativecommons.org/licenses/by/4.0/
* https://creativecommons.org/licenses/by/4.0/legalcode.txt

![cc](https://creativecommons.org/images/deed/cc_blue_x2.png) ![by](https://creativecommons.org/images/deed/attribution_icon_blue_x2.png)
