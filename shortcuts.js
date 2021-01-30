

window.$ = (elem, selec) => selec ? $(elem).querySelector(selec) : document.querySelector(elem);

window.$$ = (elem, selec) => selec ? $(elem).querySelectorAll(selec) : document.querySelectorAll(elem);

window._ = params => alert(params);

window.__ = params => console.log(params);

window.make = (elem, opt) => {
  let el = document.createElement(elem)
  if (opt) {
    for(let [k, v] of Object.entries(opt)) {
      el[k] = v;
    }
  }
  return el;
}

window.ael = (elem, ev, cb) => {
  cb ? elem.addEventListener(ev, (e) => cb(e)) : elem.addEventListener("click", (e) => ev(e))
  return elem;
}

window.add = (elem, chil) => (elem.appendChild(chil) && chil);

window.rand = range => ~~(Math.random() * range + 1);

window.css = code => add($("head"), make("style", { className: "shortcutStyles", innerText: code }));
