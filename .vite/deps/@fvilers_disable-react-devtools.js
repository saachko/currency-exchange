import "./chunk-DFKQJ226.js";

// node_modules/@fvilers/disable-react-devtools/helpers.js
function isFunction(obj) {
  return typeof obj === "function";
}
function isObject(obj) {
  const type = typeof obj;
  return type === "function" || type === "object" && !!obj;
}
function hasWindowObject() {
  return typeof window !== "undefined" && window.document;
}

// node_modules/@fvilers/disable-react-devtools/index.js
function disableReactDevTools() {
  if (hasWindowObject()) {
    if (!isObject(window.__REACT_DEVTOOLS_GLOBAL_HOOK__)) {
      return;
    }
    for (const prop in window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
      if (prop === "renderers") {
        window.__REACT_DEVTOOLS_GLOBAL_HOOK__[prop] = /* @__PURE__ */ new Map();
        continue;
      }
      window.__REACT_DEVTOOLS_GLOBAL_HOOK__[prop] = isFunction(
        window.__REACT_DEVTOOLS_GLOBAL_HOOK__[prop]
      ) ? Function.prototype : null;
    }
  }
}
export {
  disableReactDevTools
};
//# sourceMappingURL=@fvilers_disable-react-devtools.js.map
