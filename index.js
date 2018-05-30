let l = 'length';
export const shove = (s, k, o, n, i) => (v) => {
  o = {}, n=o, i=0;
  k = k.split('.');
  while (i + 1 < k[l]) {
    n[k[i]] = {};
    n = n[k[i]];
    i++;
  }
  n[k[k[l]-1]] = v;
  s(o);
};
export const yank = (o, k, d, i) => {
  i = 0;
  try {
    k = k.split('.');
    while (o && i < k[l]) o = o[k[i++]];
    return (o === undefined || i < k[l]) ? d : o;
  } catch (e) {
    return e;
  }
};
