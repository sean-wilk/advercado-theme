/*! shepherd.js 8.3.1 */
'use strict';

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (G, ca) {
  "object" === (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" !== typeof module ? module.exports = ca() : "function" === typeof define && define.amd ? define(ca) : (G = "undefined" !== typeof globalThis ? globalThis : G || self, G.Shepherd = ca());
})(void 0, function () {
  function G(a, b) {
    return !1 !== b.clone && b.isMergeableObject(a) ? V(Array.isArray(a) ? [] : {}, a, b) : a;
  }

  function ca(a, b, c) {
    return a.concat(b).map(function (a) {
      return G(a, c);
    });
  }

  function tb(a) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(a).filter(function (b) {
      return a.propertyIsEnumerable(b);
    }) : [];
  }

  function Ia(a) {
    return Object.keys(a).concat(tb(a));
  }

  function Ja(a, b) {
    try {
      return b in a;
    } catch (c) {
      return !1;
    }
  }

  function ub(a, b, c) {
    var d = {};
    c.isMergeableObject(a) && Ia(a).forEach(function (b) {
      d[b] = G(a[b], c);
    });
    Ia(b).forEach(function (e) {
      if (!Ja(a, e) || Object.hasOwnProperty.call(a, e) && Object.propertyIsEnumerable.call(a, e)) if (Ja(a, e) && c.isMergeableObject(b[e])) {
        if (c.customMerge) {
          var f = c.customMerge(e);
          f = "function" === typeof f ? f : V;
        } else f = V;

        d[e] = f(a[e], b[e], c);
      } else d[e] = G(b[e], c);
    });
    return d;
  }

  function V(a, b, c) {
    c = c || {};
    c.arrayMerge = c.arrayMerge || ca;
    c.isMergeableObject = c.isMergeableObject || vb;
    c.cloneUnlessOtherwiseSpecified = G;
    var d = Array.isArray(b),
        e = Array.isArray(a);
    return d !== e ? G(b, c) : d ? c.arrayMerge(a, b, c) : ub(a, b, c);
  }

  function W(a) {
    return "function" === typeof a;
  }

  function da(a) {
    return "string" === typeof a;
  }

  function Ka(a) {
    var b = Object.getOwnPropertyNames(a.constructor.prototype);

    for (var c = 0; c < b.length; c++) {
      var d = b[c],
          e = a[d];
      "constructor" !== d && "function" === typeof e && (a[d] = e.bind(a));
    }

    return a;
  }

  function wb(a, b) {
    return function (c) {
      if (b.isOpen()) {
        var d = b.el && c.currentTarget === b.el;
        (void 0 !== a && c.currentTarget.matches(a) || d) && b.tour.next();
      }
    };
  }

  function xb(a) {
    var _ref = a.options.advanceOn || {},
        b = _ref.event,
        c = _ref.selector;

    if (b) {
      var d = wb(c, a),
          e;

      try {
        e = document.querySelector(c);
      } catch (f) {}

      if (void 0 === c || e) e ? (e.addEventListener(b, d), a.on("destroy", function () {
        return e.removeEventListener(b, d);
      })) : (document.body.addEventListener(b, d, !0), a.on("destroy", function () {
        return document.body.removeEventListener(b, d, !0);
      }));else return console.error("No element was found for the selector supplied to advanceOn: ".concat(c));
    } else return console.error("advanceOn was defined, but no event name was passed.");
  }

  function B(a) {
    return a ? (a.nodeName || "").toLowerCase() : null;
  }

  function z(a) {
    return null == a ? window : "[object Window]" !== a.toString() ? (a = a.ownerDocument) ? a.defaultView || window : window : a;
  }

  function ea(a) {
    var b = z(a).Element;
    return a instanceof b || a instanceof Element;
  }

  function y(a) {
    var b = z(a).HTMLElement;
    return a instanceof b || a instanceof HTMLElement;
  }

  function La(a) {
    if ("undefined" === typeof ShadowRoot) return !1;
    var b = z(a).ShadowRoot;
    return a instanceof b || a instanceof ShadowRoot;
  }

  function F(a) {
    return a.split("-")[0];
  }

  function X(a) {
    a = a.getBoundingClientRect();
    return {
      width: a.width,
      height: a.height,
      top: a.top,
      right: a.right,
      bottom: a.bottom,
      left: a.left,
      x: a.left,
      y: a.top
    };
  }

  function ta(a) {
    var b = X(a),
        c = a.offsetWidth,
        d = a.offsetHeight;
    1 >= Math.abs(b.width - c) && (c = b.width);
    1 >= Math.abs(b.height - d) && (d = b.height);
    return {
      x: a.offsetLeft,
      y: a.offsetTop,
      width: c,
      height: d
    };
  }

  function Ma(a, b) {
    var c = b.getRootNode && b.getRootNode();
    if (a.contains(b)) return !0;

    if (c && La(c)) {
      do {
        if (b && a.isSameNode(b)) return !0;
        b = b.parentNode || b.host;
      } while (b);
    }

    return !1;
  }

  function H(a) {
    return z(a).getComputedStyle(a);
  }

  function L(a) {
    return ((ea(a) ? a.ownerDocument : a.document) || window.document).documentElement;
  }

  function la(a) {
    return "html" === B(a) ? a : a.assignedSlot || a.parentNode || (La(a) ? a.host : null) || L(a);
  }

  function Na(a) {
    return y(a) && "fixed" !== H(a).position ? a.offsetParent : null;
  }

  function fa(a) {
    for (var b = z(a), c = Na(a); c && 0 <= ["table", "td", "th"].indexOf(B(c)) && "static" === H(c).position;) {
      c = Na(c);
    }

    if (c && ("html" === B(c) || "body" === B(c) && "static" === H(c).position)) return b;
    if (!c) a: {
      c = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
      if (-1 === navigator.userAgent.indexOf("Trident") || !y(a) || "fixed" !== H(a).position) for (a = la(a); y(a) && 0 > ["html", "body"].indexOf(B(a));) {
        var d = H(a);

        if ("none" !== d.transform || "none" !== d.perspective || "paint" === d.contain || -1 !== ["transform", "perspective"].indexOf(d.willChange) || c && "filter" === d.willChange || c && d.filter && "none" !== d.filter) {
          c = a;
          break a;
        } else a = a.parentNode;
      }
      c = null;
    }
    return c || b;
  }

  function ua(a) {
    return 0 <= ["top", "bottom"].indexOf(a) ? "x" : "y";
  }

  function Oa(a) {
    return Object.assign({}, {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }, a);
  }

  function Pa(a, b) {
    return b.reduce(function (b, d) {
      b[d] = a;
      return b;
    }, {});
  }

  function Qa(a) {
    var b,
        c = a.popper,
        d = a.popperRect,
        e = a.placement,
        f = a.offsets,
        h = a.position,
        k = a.gpuAcceleration,
        m = a.adaptive;
    a = a.roundOffsets;

    if (!0 === a) {
      a = f.y;
      var g = window.devicePixelRatio || 1;
      a = {
        x: ma(ma(f.x * g) / g) || 0,
        y: ma(ma(a * g) / g) || 0
      };
    } else a = "function" === typeof a ? a(f) : f;

    g = a;
    a = g.x;
    a = void 0 === a ? 0 : a;
    g = g.y;
    g = void 0 === g ? 0 : g;
    var l = f.hasOwnProperty("x");
    f = f.hasOwnProperty("y");
    var p = "left",
        t = "top",
        A = window;

    if (m) {
      var C = fa(c),
          u = "clientHeight",
          D = "clientWidth";
      C === z(c) && (C = L(c), "static" !== H(C).position && (u = "scrollHeight", D = "scrollWidth"));
      "top" === e && (t = "bottom", g -= C[u] - d.height, g *= k ? 1 : -1);
      "left" === e && (p = "right", a -= C[D] - d.width, a *= k ? 1 : -1);
    }

    c = Object.assign({
      position: h
    }, m && yb);

    if (k) {
      var v;
      return Object.assign({}, c, (v = {}, v[t] = f ? "0" : "", v[p] = l ? "0" : "", v.transform = 2 > (A.devicePixelRatio || 1) ? "translate(" + a + "px, " + g + "px)" : "translate3d(" + a + "px, " + g + "px, 0)", v));
    }

    return Object.assign({}, c, (b = {}, b[t] = f ? g + "px" : "", b[p] = l ? a + "px" : "", b.transform = "", b));
  }

  function na(a) {
    return a.replace(/left|right|bottom|top/g, function (a) {
      return zb[a];
    });
  }

  function Ra(a) {
    return a.replace(/start|end/g, function (a) {
      return Ab[a];
    });
  }

  function va(a) {
    a = z(a);
    return {
      scrollLeft: a.pageXOffset,
      scrollTop: a.pageYOffset
    };
  }

  function wa(a) {
    return X(L(a)).left + va(a).scrollLeft;
  }

  function xa(a) {
    a = H(a);
    return /auto|scroll|overlay|hidden/.test(a.overflow + a.overflowY + a.overflowX);
  }

  function Sa(a) {
    return 0 <= ["html", "body", "#document"].indexOf(B(a)) ? a.ownerDocument.body : y(a) && xa(a) ? a : Sa(la(a));
  }

  function ha(a, b) {
    var c;
    void 0 === b && (b = []);
    var d = Sa(a);
    a = d === (null == (c = a.ownerDocument) ? void 0 : c.body);
    c = z(d);
    d = a ? [c].concat(c.visualViewport || [], xa(d) ? d : []) : d;
    b = b.concat(d);
    return a ? b : b.concat(ha(la(d)));
  }

  function ya(a) {
    return Object.assign({}, a, {
      left: a.x,
      top: a.y,
      right: a.x + a.width,
      bottom: a.y + a.height
    });
  }

  function Ta(a, b) {
    if ("viewport" === b) {
      b = z(a);
      var c = L(a);
      b = b.visualViewport;
      var d = c.clientWidth;
      c = c.clientHeight;
      var e = 0,
          f = 0;
      b && (d = b.width, c = b.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (e = b.offsetLeft, f = b.offsetTop));
      a = {
        width: d,
        height: c,
        x: e + wa(a),
        y: f
      };
      a = ya(a);
    } else y(b) ? (a = X(b), a.top += b.clientTop, a.left += b.clientLeft, a.bottom = a.top + b.clientHeight, a.right = a.left + b.clientWidth, a.width = b.clientWidth, a.height = b.clientHeight, a.x = a.left, a.y = a.top) : (f = L(a), a = L(f), d = va(f), b = null == (c = f.ownerDocument) ? void 0 : c.body, c = E(a.scrollWidth, a.clientWidth, b ? b.scrollWidth : 0, b ? b.clientWidth : 0), e = E(a.scrollHeight, a.clientHeight, b ? b.scrollHeight : 0, b ? b.clientHeight : 0), f = -d.scrollLeft + wa(f), d = -d.scrollTop, "rtl" === H(b || a).direction && (f += E(a.clientWidth, b ? b.clientWidth : 0) - c), a = ya({
      width: c,
      height: e,
      x: f,
      y: d
    }));

    return a;
  }

  function Bb(a) {
    var b = ha(la(a)),
        c = 0 <= ["absolute", "fixed"].indexOf(H(a).position) && y(a) ? fa(a) : a;
    return ea(c) ? b.filter(function (a) {
      return ea(a) && Ma(a, c) && "body" !== B(a);
    }) : [];
  }

  function Cb(a, b, c) {
    b = "clippingParents" === b ? Bb(a) : [].concat(b);
    c = [].concat(b, [c]);
    c = c.reduce(function (b, c) {
      c = Ta(a, c);
      b.top = E(c.top, b.top);
      b.right = M(c.right, b.right);
      b.bottom = M(c.bottom, b.bottom);
      b.left = E(c.left, b.left);
      return b;
    }, Ta(a, c[0]));
    c.width = c.right - c.left;
    c.height = c.bottom - c.top;
    c.x = c.left;
    c.y = c.top;
    return c;
  }

  function Ua(a) {
    var b = a.reference,
        c = a.element,
        d = (a = a.placement) ? F(a) : null;
    a = a ? a.split("-")[1] : null;
    var e = b.x + b.width / 2 - c.width / 2,
        f = b.y + b.height / 2 - c.height / 2;

    switch (d) {
      case "top":
        e = {
          x: e,
          y: b.y - c.height
        };
        break;

      case "bottom":
        e = {
          x: e,
          y: b.y + b.height
        };
        break;

      case "right":
        e = {
          x: b.x + b.width,
          y: f
        };
        break;

      case "left":
        e = {
          x: b.x - c.width,
          y: f
        };
        break;

      default:
        e = {
          x: b.x,
          y: b.y
        };
    }

    d = d ? ua(d) : null;
    if (null != d) switch (f = "y" === d ? "height" : "width", a) {
      case "start":
        e[d] -= b[f] / 2 - c[f] / 2;
        break;

      case "end":
        e[d] += b[f] / 2 - c[f] / 2;
    }
    return e;
  }

  function ia(a, b) {
    void 0 === b && (b = {});
    var c = b;
    b = c.placement;
    b = void 0 === b ? a.placement : b;
    var d = c.boundary,
        e = void 0 === d ? "clippingParents" : d;
    d = c.rootBoundary;
    var f = void 0 === d ? "viewport" : d;
    d = c.elementContext;
    d = void 0 === d ? "popper" : d;
    var h = c.altBoundary,
        k = void 0 === h ? !1 : h;
    c = c.padding;
    c = void 0 === c ? 0 : c;
    c = Oa("number" !== typeof c ? c : Pa(c, ja));
    var m = a.elements.reference;
    h = a.rects.popper;
    k = a.elements[k ? "popper" === d ? "reference" : "popper" : d];
    e = Cb(ea(k) ? k : k.contextElement || L(a.elements.popper), e, f);
    f = X(m);
    k = Ua({
      reference: f,
      element: h,
      strategy: "absolute",
      placement: b
    });
    h = ya(Object.assign({}, h, k));
    f = "popper" === d ? h : f;
    var g = {
      top: e.top - f.top + c.top,
      bottom: f.bottom - e.bottom + c.bottom,
      left: e.left - f.left + c.left,
      right: f.right - e.right + c.right
    };
    a = a.modifiersData.offset;

    if ("popper" === d && a) {
      var l = a[b];
      Object.keys(g).forEach(function (a) {
        var b = 0 <= ["right", "bottom"].indexOf(a) ? 1 : -1,
            c = 0 <= ["top", "bottom"].indexOf(a) ? "y" : "x";
        g[a] += l[c] * b;
      });
    }

    return g;
  }

  function Db(a, b) {
    void 0 === b && (b = {});
    var c = b.boundary,
        d = b.rootBoundary,
        e = b.padding,
        f = b.flipVariations,
        h = b.allowedAutoPlacements,
        k = void 0 === h ? Va : h,
        m = b.placement.split("-")[1];
    b = m ? f ? Wa : Wa.filter(function (a) {
      return a.split("-")[1] === m;
    }) : ja;
    f = b.filter(function (a) {
      return 0 <= k.indexOf(a);
    });
    0 === f.length && (f = b);
    var g = f.reduce(function (b, f) {
      b[f] = ia(a, {
        placement: f,
        boundary: c,
        rootBoundary: d,
        padding: e
      })[F(f)];
      return b;
    }, {});
    return Object.keys(g).sort(function (a, b) {
      return g[a] - g[b];
    });
  }

  function Eb(a) {
    if ("auto" === F(a)) return [];
    var b = na(a);
    return [Ra(a), b, Ra(b)];
  }

  function Xa(a, b, c) {
    void 0 === c && (c = {
      x: 0,
      y: 0
    });
    return {
      top: a.top - b.height - c.y,
      right: a.right - b.width + c.x,
      bottom: a.bottom - b.height + c.y,
      left: a.left - b.width - c.x
    };
  }

  function Ya(a) {
    return ["top", "right", "bottom", "left"].some(function (b) {
      return 0 <= a[b];
    });
  }

  function Fb(a, b, c) {
    void 0 === c && (c = !1);
    var d = L(b);
    a = X(a);
    var e = y(b),
        f = {
      scrollLeft: 0,
      scrollTop: 0
    },
        h = {
      x: 0,
      y: 0
    };

    if (e || !e && !c) {
      if ("body" !== B(b) || xa(d)) f = b !== z(b) && y(b) ? {
        scrollLeft: b.scrollLeft,
        scrollTop: b.scrollTop
      } : va(b);
      y(b) ? (h = X(b), h.x += b.clientLeft, h.y += b.clientTop) : d && (h.x = wa(d));
    }

    return {
      x: a.left + f.scrollLeft - h.x,
      y: a.top + f.scrollTop - h.y,
      width: a.width,
      height: a.height
    };
  }

  function Gb(a) {
    function b(a) {
      d.add(a.name);
      [].concat(a.requires || [], a.requiresIfExists || []).forEach(function (a) {
        d.has(a) || (a = c.get(a)) && b(a);
      });
      e.push(a);
    }

    var c = new Map(),
        d = new Set(),
        e = [];
    a.forEach(function (a) {
      c.set(a.name, a);
    });
    a.forEach(function (a) {
      d.has(a.name) || b(a);
    });
    return e;
  }

  function Hb(a) {
    var b = Gb(a);
    return Ib.reduce(function (a, d) {
      return a.concat(b.filter(function (a) {
        return a.phase === d;
      }));
    }, []);
  }

  function Jb(a) {
    var b;
    return function () {
      b || (b = new Promise(function (c) {
        Promise.resolve().then(function () {
          b = void 0;
          c(a());
        });
      }));
      return b;
    };
  }

  function Kb(a) {
    var b = a.reduce(function (a, b) {
      var c = a[b.name];
      a[b.name] = c ? Object.assign({}, c, b, {
        options: Object.assign({}, c.options, b.options),
        data: Object.assign({}, c.data, b.data)
      }) : b;
      return a;
    }, {});
    return Object.keys(b).map(function (a) {
      return b[a];
    });
  }

  function Za() {
    for (var a = arguments.length, b = Array(a), c = 0; c < a; c++) {
      b[c] = arguments[c];
    }

    return !b.some(function (a) {
      return !(a && "function" === typeof a.getBoundingClientRect);
    });
  }

  function za() {
    za = Object.assign || function (a) {
      for (var b = 1; b < arguments.length; b++) {
        var c = arguments[b],
            d;

        for (d in c) {
          Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
        }
      }

      return a;
    };

    return za.apply(this, arguments);
  }

  function Lb() {
    return [{
      name: "applyStyles",
      fn: function fn(_ref2) {
        var a = _ref2.state;
        Object.keys(a.elements).forEach(function (b) {
          if ("popper" === b) {
            var c = a.attributes[b] || {},
                d = a.elements[b];
            Object.assign(d.style, {
              position: "fixed",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)"
            });
            Object.keys(c).forEach(function (a) {
              var b = c[a];
              !1 === b ? d.removeAttribute(a) : d.setAttribute(a, !0 === b ? "" : b);
            });
          }
        });
      }
    }, {
      name: "computeStyles",
      options: {
        adaptive: !1
      }
    }];
  }

  function Mb(a) {
    var b = Lb(),
        c = {
      placement: "top",
      strategy: "fixed",
      modifiers: [{
        name: "focusAfterRender",
        enabled: !0,
        phase: "afterWrite",
        fn: function fn() {
          setTimeout(function () {
            a.el && a.el.focus();
          }, 300);
        }
      }]
    };
    return c = za({}, c, {
      modifiers: Array.from(new Set([].concat(_toConsumableArray(c.modifiers), _toConsumableArray(b))))
    });
  }

  function $a(a) {
    return da(a) && "" !== a ? "-" !== a.charAt(a.length - 1) ? "".concat(a, "-") : a : "";
  }

  function Aa(a) {
    a = a.options.attachTo || {};
    var b = Object.assign({}, a);

    if (da(a.element)) {
      try {
        b.element = document.querySelector(a.element);
      } catch (c) {}

      b.element || console.error("The element for this Shepherd step was not found ".concat(a.element));
    }

    return b;
  }

  function Ba() {
    var a = Date.now();
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (b) {
      var c = (a + 16 * Math.random()) % 16 | 0;
      a = Math.floor(a / 16);
      return ("x" == b ? c : c & 3 | 8).toString(16);
    });
  }

  function Nb(a, b) {
    var c = {
      modifiers: [{
        name: "preventOverflow",
        options: {
          altAxis: !0,
          tether: !1
        }
      }, {
        name: "focusAfterRender",
        enabled: !0,
        phase: "afterWrite",
        fn: function fn() {
          setTimeout(function () {
            b.el && b.el.focus();
          }, 300);
        }
      }],
      strategy: "absolute"
    };
    b.isCentered() ? c = Mb(b) : c.placement = a.on;
    (a = b.tour && b.tour.options && b.tour.options.defaultStepOptions) && (c = ab(a, c));
    return c = ab(b.options, c);
  }

  function ab(a, b) {
    if (a.popperOptions) {
      var c = Object.assign({}, b, a.popperOptions);

      if (a.popperOptions.modifiers && 0 < a.popperOptions.modifiers.length) {
        var d = a.popperOptions.modifiers.map(function (a) {
          return a.name;
        });
        b = b.modifiers.filter(function (a) {
          return !d.includes(a.name);
        });
        c.modifiers = Array.from(new Set([].concat(_toConsumableArray(b), _toConsumableArray(a.popperOptions.modifiers))));
      }

      return c;
    }

    return b;
  }

  function x() {}

  function Ob(a, b) {
    for (var c in b) {
      a[c] = b[c];
    }

    return a;
  }

  function Y(a) {
    return a();
  }

  function bb(a) {
    return "function" === typeof a;
  }

  function I(a, b) {
    return a != a ? b == b : a !== b || a && "object" === _typeof(a) || "function" === typeof a;
  }

  function w(a) {
    a.parentNode.removeChild(a);
  }

  function cb(a) {
    return document.createElementNS("http://www.w3.org/2000/svg", a);
  }

  function oa(a, b, c, d) {
    a.addEventListener(b, c, d);
    return function () {
      return a.removeEventListener(b, c, d);
    };
  }

  function q(a, b, c) {
    null == c ? a.removeAttribute(b) : a.getAttribute(b) !== c && a.setAttribute(b, c);
  }

  function db(a, b) {
    var c = Object.getOwnPropertyDescriptors(a.__proto__);

    for (var d in b) {
      null == b[d] ? a.removeAttribute(d) : "style" === d ? a.style.cssText = b[d] : "__value" === d ? a.value = a[d] = b[d] : c[d] && c[d].set ? a[d] = b[d] : q(a, d, b[d]);
    }
  }

  function Z(a, b, c) {
    a.classList[c ? "add" : "remove"](b);
  }

  function pa() {
    if (!P) throw Error("Function called outside component initialization");
    return P;
  }

  function Ca(a) {
    qa.push(a);
  }

  function eb() {
    if (!Da) {
      Da = !0;

      do {
        for (var a = 0; a < ka.length; a += 1) {
          var b = ka[a];
          P = b;
          b = b.$$;

          if (null !== b.fragment) {
            b.update();
            b.before_update.forEach(Y);
            var _a = b.dirty;
            b.dirty = [-1];
            b.fragment && b.fragment.p(b.ctx, _a);
            b.after_update.forEach(Ca);
          }
        }

        P = null;

        for (ka.length = 0; aa.length;) {
          aa.pop()();
        }

        for (a = 0; a < qa.length; a += 1) {
          b = qa[a], Ea.has(b) || (Ea.add(b), b());
        }

        qa.length = 0;
      } while (ka.length);

      for (; fb.length;) {
        fb.pop()();
      }

      Da = Fa = !1;
      Ea.clear();
    }
  }

  function Q() {
    R = {
      r: 0,
      c: [],
      p: R
    };
  }

  function S() {
    R.r || R.c.forEach(Y);
    R = R.p;
  }

  function n(a, b) {
    a && a.i && (ra.delete(a), a.i(b));
  }

  function r(a, b, c, d) {
    a && a.o && !ra.has(a) && (ra.add(a), R.c.push(function () {
      ra.delete(a);
      d && (c && a.d(1), d());
    }), a.o(b));
  }

  function T(a) {
    a && a.c();
  }

  function N(a, b, c, d) {
    var _a$$$ = a.$$,
        e = _a$$$.fragment,
        f = _a$$$.on_mount,
        h = _a$$$.on_destroy,
        k = _a$$$.after_update;
    e && e.m(b, c);
    d || Ca(function () {
      var b = f.map(Y).filter(bb);
      h ? h.push.apply(h, _toConsumableArray(b)) : b.forEach(Y);
      a.$$.on_mount = [];
    });
    k.forEach(Ca);
  }

  function O(a, b) {
    a = a.$$;
    null !== a.fragment && (a.on_destroy.forEach(Y), a.fragment && a.fragment.d(b), a.on_destroy = a.fragment = null, a.ctx = []);
  }

  function J(a, b, c, d, e, f) {
    var h = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : [-1];
    var k = P;
    P = a;
    var m = a.$$ = {
      fragment: null,
      ctx: null,
      props: f,
      update: x,
      not_equal: e,
      bound: Object.create(null),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(k ? k.$$.context : b.context || []),
      callbacks: Object.create(null),
      dirty: h,
      skip_bound: !1
    },
        g = !1;
    m.ctx = c ? c(a, b.props || {}, function (b, c) {
      for (var _len = arguments.length, d = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        d[_key - 2] = arguments[_key];
      }

      d = d.length ? d[0] : c;

      if (m.ctx && e(m.ctx[b], m.ctx[b] = d)) {
        if (!m.skip_bound && m.bound[b]) m.bound[b](d);
        g && (-1 === a.$$.dirty[0] && (ka.push(a), Fa || (Fa = !0, Pb.then(eb)), a.$$.dirty.fill(0)), a.$$.dirty[b / 31 | 0] |= 1 << b % 31);
      }

      return c;
    }) : [];
    m.update();
    g = !0;
    m.before_update.forEach(Y);
    m.fragment = d ? d(m.ctx) : !1;
    b.target && (b.hydrate ? (c = Array.from(b.target.childNodes), m.fragment && m.fragment.l(c), c.forEach(w)) : m.fragment && m.fragment.c(), b.intro && n(a.$$.fragment), N(a, b.target, b.anchor, b.customElement), eb());
    P = k;
  }

  function Qb(a) {
    var b, _c, d, e, f;

    return {
      c: function c() {
        b = document.createElement("button");
        q(b, "aria-label", _c = a[3] ? a[3] : null);
        q(b, "class", d = "".concat(a[1] || "", " shepherd-button ").concat(a[4] ? "shepherd-button-secondary" : ""));
        b.disabled = a[2];
        q(b, "tabindex", "0");
      },
      m: function m(c, d) {
        c.insertBefore(b, d || null);
        b.innerHTML = a[5];
        e || (f = oa(b, "click", function () {
          bb(a[0]) && a[0].apply(this, arguments);
        }), e = !0);
      },
      p: function p(e, _ref3) {
        var _ref4 = _slicedToArray(_ref3, 1),
            f = _ref4[0];

        a = e;
        f & 32 && (b.innerHTML = a[5]);
        f & 8 && _c !== (_c = a[3] ? a[3] : null) && q(b, "aria-label", _c);
        f & 18 && d !== (d = "".concat(a[1] || "", " shepherd-button ").concat(a[4] ? "shepherd-button-secondary" : "")) && q(b, "class", d);
        f & 4 && (b.disabled = a[2]);
      },
      i: x,
      o: x,
      d: function d(a) {
        a && w(b);
        e = !1;
        f();
      }
    };
  }

  function Rb(a, b, c) {
    var d = b.config,
        e = b.step,
        f,
        h,
        k,
        m,
        g,
        l;

    a.$$set = function (a) {
      "config" in a && c(6, d = a.config);
      "step" in a && c(7, e = a.step);
    };

    a.$$.update = function () {
      if (a.$$.dirty & 192) {
        c(0, f = d.action ? d.action.bind(e.tour) : null);
        c(1, h = d.classes);

        if (d.disabled) {
          var b = d.disabled;
          b = W(b) ? b.call(e) : b;
        } else b = !1;

        c(2, k = b);
        c(3, m = d.label);
        c(4, g = d.secondary);
        c(5, l = d.text);
      }
    };

    return [f, h, k, m, g, l, d, e];
  }

  function gb(a, b, c) {
    a = a.slice();
    a[2] = b[c];
    return a;
  }

  function hb(a) {
    var b,
        c,
        d = a[1],
        e = [];

    for (var _b = 0; _b < d.length; _b += 1) {
      e[_b] = ib(gb(a, d, _b));
    }

    var f = function f(a) {
      return r(e[a], 1, 1, function () {
        e[a] = null;
      });
    };

    return {
      c: function c() {
        for (var _a2 = 0; _a2 < e.length; _a2 += 1) {
          e[_a2].c();
        }

        b = document.createTextNode("");
      },
      m: function m(a, d) {
        for (var _b2 = 0; _b2 < e.length; _b2 += 1) {
          e[_b2].m(a, d);
        }

        a.insertBefore(b, d || null);
        c = !0;
      },
      p: function p(a, c) {
        if (c & 3) {
          d = a[1];
          var h;

          for (h = 0; h < d.length; h += 1) {
            var _f = gb(a, d, h);

            e[h] ? (e[h].p(_f, c), n(e[h], 1)) : (e[h] = ib(_f), e[h].c(), n(e[h], 1), e[h].m(b.parentNode, b));
          }

          Q();

          for (h = d.length; h < e.length; h += 1) {
            f(h);
          }

          S();
        }
      },
      i: function i(a) {
        if (!c) {
          for (a = 0; a < d.length; a += 1) {
            n(e[a]);
          }

          c = !0;
        }
      },
      o: function o(a) {
        e = e.filter(Boolean);

        for (a = 0; a < e.length; a += 1) {
          r(e[a]);
        }

        c = !1;
      },
      d: function d(a) {
        var c = e;

        for (var _b3 = 0; _b3 < c.length; _b3 += 1) {
          c[_b3] && c[_b3].d(a);
        }

        a && w(b);
      }
    };
  }

  function ib(a) {
    var b, c;
    b = new Sb({
      props: {
        config: a[2],
        step: a[0]
      }
    });
    return {
      c: function c() {
        T(b.$$.fragment);
      },
      m: function m(a, e) {
        N(b, a, e);
        c = !0;
      },
      p: function p(a, c) {
        var d = {};
        c & 2 && (d.config = a[2]);
        c & 1 && (d.step = a[0]);
        b.$set(d);
      },
      i: function i(a) {
        c || (n(b.$$.fragment, a), c = !0);
      },
      o: function o(a) {
        r(b.$$.fragment, a);
        c = !1;
      },
      d: function d(a) {
        O(b, a);
      }
    };
  }

  function Tb(a) {
    var b,
        c,
        _d2 = a[1] && hb(a);

    return {
      c: function c() {
        b = document.createElement("footer");
        _d2 && _d2.c();
        q(b, "class", "shepherd-footer");
      },
      m: function m(a, f) {
        a.insertBefore(b, f || null);
        _d2 && _d2.m(b, null);
        c = !0;
      },
      p: function p(a, _ref5) {
        var _ref6 = _slicedToArray(_ref5, 1),
            c = _ref6[0];

        a[1] ? _d2 ? (_d2.p(a, c), c & 2 && n(_d2, 1)) : (_d2 = hb(a), _d2.c(), n(_d2, 1), _d2.m(b, null)) : _d2 && (Q(), r(_d2, 1, 1, function () {
          _d2 = null;
        }), S());
      },
      i: function i(a) {
        c || (n(_d2), c = !0);
      },
      o: function o(a) {
        r(_d2);
        c = !1;
      },
      d: function d(a) {
        a && w(b);
        _d2 && _d2.d();
      }
    };
  }

  function Ub(a, b, c) {
    var d,
        e = b.step;

    a.$$set = function (a) {
      "step" in a && c(0, e = a.step);
    };

    a.$$.update = function () {
      a.$$.dirty & 1 && c(1, d = e.options.buttons);
    };

    return [e, d];
  }

  function Vb(a) {
    var b, _c2, d, e, f;

    return {
      c: function c() {
        b = document.createElement("button");
        _c2 = document.createElement("span");
        _c2.textContent = "\xD7";
        q(_c2, "aria-hidden", "true");
        q(b, "aria-label", d = a[0].label ? a[0].label : "Close Tour");
        q(b, "class", "shepherd-cancel-icon");
        q(b, "type", "button");
      },
      m: function m(d, k) {
        d.insertBefore(b, k || null);
        b.appendChild(_c2);
        e || (f = oa(b, "click", a[1]), e = !0);
      },
      p: function p(a, _ref7) {
        var _ref8 = _slicedToArray(_ref7, 1),
            c = _ref8[0];

        c & 1 && d !== (d = a[0].label ? a[0].label : "Close Tour") && q(b, "aria-label", d);
      },
      i: x,
      o: x,
      d: function d(a) {
        a && w(b);
        e = !1;
        f();
      }
    };
  }

  function Wb(a, b, c) {
    var d = b.cancelIcon,
        e = b.step;

    a.$$set = function (a) {
      "cancelIcon" in a && c(0, d = a.cancelIcon);
      "step" in a && c(2, e = a.step);
    };

    return [d, function (a) {
      a.preventDefault();
      e.cancel();
    }, e];
  }

  function Xb(a) {
    var b;
    return {
      c: function c() {
        b = document.createElement("h3");
        q(b, "id", a[1]);
        q(b, "class", "shepherd-title");
      },
      m: function m(c, d) {
        c.insertBefore(b, d || null);
        a[3](b);
      },
      p: function p(a, _ref9) {
        var _ref10 = _slicedToArray(_ref9, 1),
            d = _ref10[0];

        d & 2 && q(b, "id", a[1]);
      },
      i: x,
      o: x,
      d: function d(c) {
        c && w(b);
        a[3](null);
      }
    };
  }

  function Yb(a, b, c) {
    var d = b.labelId,
        e = b.element,
        f = b.title;
    pa().$$.after_update.push(function () {
      W(f) && c(2, f = f());
      c(0, e.innerHTML = f, e);
    });

    a.$$set = function (a) {
      "labelId" in a && c(1, d = a.labelId);
      "element" in a && c(0, e = a.element);
      "title" in a && c(2, f = a.title);
    };

    return [e, d, f, function (a) {
      aa[a ? "unshift" : "push"](function () {
        e = a;
        c(0, e);
      });
    }];
  }

  function jb(a) {
    var b, c;
    b = new Zb({
      props: {
        labelId: a[0],
        title: a[2]
      }
    });
    return {
      c: function c() {
        T(b.$$.fragment);
      },
      m: function m(a, e) {
        N(b, a, e);
        c = !0;
      },
      p: function p(a, c) {
        var d = {};
        c & 1 && (d.labelId = a[0]);
        c & 4 && (d.title = a[2]);
        b.$set(d);
      },
      i: function i(a) {
        c || (n(b.$$.fragment, a), c = !0);
      },
      o: function o(a) {
        r(b.$$.fragment, a);
        c = !1;
      },
      d: function d(a) {
        O(b, a);
      }
    };
  }

  function kb(a) {
    var b, c;
    b = new $b({
      props: {
        cancelIcon: a[3],
        step: a[1]
      }
    });
    return {
      c: function c() {
        T(b.$$.fragment);
      },
      m: function m(a, e) {
        N(b, a, e);
        c = !0;
      },
      p: function p(a, c) {
        var d = {};
        c & 8 && (d.cancelIcon = a[3]);
        c & 2 && (d.step = a[1]);
        b.$set(d);
      },
      i: function i(a) {
        c || (n(b.$$.fragment, a), c = !0);
      },
      o: function o(a) {
        r(b.$$.fragment, a);
        c = !1;
      },
      d: function d(a) {
        O(b, a);
      }
    };
  }

  function ac(a) {
    var b,
        _c3,
        d,
        e = a[2] && jb(a),
        f = a[3] && a[3].enabled && kb(a);

    return {
      c: function c() {
        b = document.createElement("header");
        e && e.c();
        _c3 = document.createTextNode(" ");
        f && f.c();
        q(b, "class", "shepherd-header");
      },
      m: function m(a, k) {
        a.insertBefore(b, k || null);
        e && e.m(b, null);
        b.appendChild(_c3);
        f && f.m(b, null);
        d = !0;
      },
      p: function p(a, _ref11) {
        var _ref12 = _slicedToArray(_ref11, 1),
            d = _ref12[0];

        a[2] ? e ? (e.p(a, d), d & 4 && n(e, 1)) : (e = jb(a), e.c(), n(e, 1), e.m(b, _c3)) : e && (Q(), r(e, 1, 1, function () {
          e = null;
        }), S());
        a[3] && a[3].enabled ? f ? (f.p(a, d), d & 8 && n(f, 1)) : (f = kb(a), f.c(), n(f, 1), f.m(b, null)) : f && (Q(), r(f, 1, 1, function () {
          f = null;
        }), S());
      },
      i: function i(a) {
        d || (n(e), n(f), d = !0);
      },
      o: function o(a) {
        r(e);
        r(f);
        d = !1;
      },
      d: function d(a) {
        a && w(b);
        e && e.d();
        f && f.d();
      }
    };
  }

  function bc(a, b, c) {
    var d = b.labelId,
        e = b.step,
        f,
        h;

    a.$$set = function (a) {
      "labelId" in a && c(0, d = a.labelId);
      "step" in a && c(1, e = a.step);
    };

    a.$$.update = function () {
      a.$$.dirty & 2 && (c(2, f = e.options.title), c(3, h = e.options.cancelIcon));
    };

    return [d, e, f, h];
  }

  function cc(a) {
    var b;
    return {
      c: function c() {
        b = document.createElement("div");
        q(b, "class", "shepherd-text");
        q(b, "id", a[1]);
      },
      m: function m(c, d) {
        c.insertBefore(b, d || null);
        a[3](b);
      },
      p: function p(a, _ref13) {
        var _ref14 = _slicedToArray(_ref13, 1),
            d = _ref14[0];

        d & 2 && q(b, "id", a[1]);
      },
      i: x,
      o: x,
      d: function d(c) {
        c && w(b);
        a[3](null);
      }
    };
  }

  function dc(a, b, c) {
    var d = b.descriptionId,
        e = b.element,
        f = b.step;
    pa().$$.after_update.push(function () {
      var a = f.options.text;
      W(a) && (a = a.call(f));
      a instanceof HTMLElement ? e.appendChild(a) : c(0, e.innerHTML = a, e);
    });

    a.$$set = function (a) {
      "descriptionId" in a && c(1, d = a.descriptionId);
      "element" in a && c(0, e = a.element);
      "step" in a && c(2, f = a.step);
    };

    return [e, d, f, function (a) {
      aa[a ? "unshift" : "push"](function () {
        e = a;
        c(0, e);
      });
    }];
  }

  function lb(a) {
    var b, c;
    b = new ec({
      props: {
        labelId: a[1],
        step: a[2]
      }
    });
    return {
      c: function c() {
        T(b.$$.fragment);
      },
      m: function m(a, e) {
        N(b, a, e);
        c = !0;
      },
      p: function p(a, c) {
        var d = {};
        c & 2 && (d.labelId = a[1]);
        c & 4 && (d.step = a[2]);
        b.$set(d);
      },
      i: function i(a) {
        c || (n(b.$$.fragment, a), c = !0);
      },
      o: function o(a) {
        r(b.$$.fragment, a);
        c = !1;
      },
      d: function d(a) {
        O(b, a);
      }
    };
  }

  function mb(a) {
    var b, c;
    b = new fc({
      props: {
        descriptionId: a[0],
        step: a[2]
      }
    });
    return {
      c: function c() {
        T(b.$$.fragment);
      },
      m: function m(a, e) {
        N(b, a, e);
        c = !0;
      },
      p: function p(a, c) {
        var d = {};
        c & 1 && (d.descriptionId = a[0]);
        c & 4 && (d.step = a[2]);
        b.$set(d);
      },
      i: function i(a) {
        c || (n(b.$$.fragment, a), c = !0);
      },
      o: function o(a) {
        r(b.$$.fragment, a);
        c = !1;
      },
      d: function d(a) {
        O(b, a);
      }
    };
  }

  function nb(a) {
    var b, c;
    b = new gc({
      props: {
        step: a[2]
      }
    });
    return {
      c: function c() {
        T(b.$$.fragment);
      },
      m: function m(a, e) {
        N(b, a, e);
        c = !0;
      },
      p: function p(a, c) {
        var d = {};
        c & 4 && (d.step = a[2]);
        b.$set(d);
      },
      i: function i(a) {
        c || (n(b.$$.fragment, a), c = !0);
      },
      o: function o(a) {
        r(b.$$.fragment, a);
        c = !1;
      },
      d: function d(a) {
        O(b, a);
      }
    };
  }

  function hc(a) {
    var b,
        c = void 0 !== a[2].options.title || a[2].options.cancelIcon && a[2].options.cancelIcon.enabled,
        d,
        e = void 0 !== a[2].options.text,
        f,
        h = Array.isArray(a[2].options.buttons) && a[2].options.buttons.length,
        k,
        _m = c && lb(a),
        g = e && mb(a),
        l = h && nb(a);

    return {
      c: function c() {
        b = document.createElement("div");
        _m && _m.c();
        d = document.createTextNode(" ");
        g && g.c();
        f = document.createTextNode(" ");
        l && l.c();
        q(b, "class", "shepherd-content");
      },
      m: function m(a, c) {
        a.insertBefore(b, c || null);
        _m && _m.m(b, null);
        b.appendChild(d);
        g && g.m(b, null);
        b.appendChild(f);
        l && l.m(b, null);
        k = !0;
      },
      p: function p(a, _ref15) {
        var _ref16 = _slicedToArray(_ref15, 1),
            k = _ref16[0];

        k & 4 && (c = void 0 !== a[2].options.title || a[2].options.cancelIcon && a[2].options.cancelIcon.enabled);
        c ? _m ? (_m.p(a, k), k & 4 && n(_m, 1)) : (_m = lb(a), _m.c(), n(_m, 1), _m.m(b, d)) : _m && (Q(), r(_m, 1, 1, function () {
          _m = null;
        }), S());
        k & 4 && (e = void 0 !== a[2].options.text);
        e ? g ? (g.p(a, k), k & 4 && n(g, 1)) : (g = mb(a), g.c(), n(g, 1), g.m(b, f)) : g && (Q(), r(g, 1, 1, function () {
          g = null;
        }), S());
        k & 4 && (h = Array.isArray(a[2].options.buttons) && a[2].options.buttons.length);
        h ? l ? (l.p(a, k), k & 4 && n(l, 1)) : (l = nb(a), l.c(), n(l, 1), l.m(b, null)) : l && (Q(), r(l, 1, 1, function () {
          l = null;
        }), S());
      },
      i: function i(a) {
        k || (n(_m), n(g), n(l), k = !0);
      },
      o: function o(a) {
        r(_m);
        r(g);
        r(l);
        k = !1;
      },
      d: function d(a) {
        a && w(b);
        _m && _m.d();
        g && g.d();
        l && l.d();
      }
    };
  }

  function ic(a, b, c) {
    var d = b.descriptionId,
        e = b.labelId,
        f = b.step;

    a.$$set = function (a) {
      "descriptionId" in a && c(0, d = a.descriptionId);
      "labelId" in a && c(1, e = a.labelId);
      "step" in a && c(2, f = a.step);
    };

    return [d, e, f];
  }

  function ob(a) {
    var b;
    return {
      c: function c() {
        b = document.createElement("div");
        q(b, "class", "shepherd-arrow");
        q(b, "data-popper-arrow", "");
      },
      m: function m(a, d) {
        a.insertBefore(b, d || null);
      },
      d: function d(a) {
        a && w(b);
      }
    };
  }

  function jc(a) {
    var b,
        _c4,
        _d4,
        e,
        f,
        h,
        k,
        _m2,
        g = a[4].options.arrow && a[4].options.attachTo && a[4].options.attachTo.element && a[4].options.attachTo.on && ob();

    _d4 = new kc({
      props: {
        descriptionId: a[2],
        labelId: a[3],
        step: a[4]
      }
    });
    var l = [{
      "aria-describedby": e = void 0 !== a[4].options.text ? a[2] : null
    }, {
      "aria-labelledby": f = a[4].options.title ? a[3] : null
    }, a[1], {
      role: "dialog"
    }, {
      tabindex: "0"
    }],
        _p = {};

    for (var _a3 = 0; _a3 < l.length; _a3 += 1) {
      _p = Ob(_p, l[_a3]);
    }

    return {
      c: function c() {
        b = document.createElement("div");
        g && g.c();
        _c4 = document.createTextNode(" ");
        T(_d4.$$.fragment);
        db(b, _p);
        Z(b, "shepherd-has-cancel-icon", a[5]);
        Z(b, "shepherd-has-title", a[6]);
        Z(b, "shepherd-element", !0);
      },
      m: function m(e, f) {
        e.insertBefore(b, f || null);
        g && g.m(b, null);
        b.appendChild(_c4);
        N(_d4, b, null);
        a[13](b);
        h = !0;
        k || (_m2 = oa(b, "keydown", a[7]), k = !0);
      },
      p: function p(a, _ref17) {
        var _ref18 = _slicedToArray(_ref17, 1),
            k = _ref18[0];

        a[4].options.arrow && a[4].options.attachTo && a[4].options.attachTo.element && a[4].options.attachTo.on ? g || (g = ob(), g.c(), g.m(b, _c4)) : g && (g.d(1), g = null);
        var m = {};
        k & 4 && (m.descriptionId = a[2]);
        k & 8 && (m.labelId = a[3]);
        k & 16 && (m.step = a[4]);

        _d4.$set(m);

        m = b;
        {
          k = [(!h || k & 20 && e !== (e = void 0 !== a[4].options.text ? a[2] : null)) && {
            "aria-describedby": e
          }, (!h || k & 24 && f !== (f = a[4].options.title ? a[3] : null)) && {
            "aria-labelledby": f
          }, k & 2 && a[1], {
            role: "dialog"
          }, {
            tabindex: "0"
          }];
          var _b4 = {},
              c = {},
              _d3 = {
            $$scope: 1
          },
              _g = l.length;

          for (; _g--;) {
            var _a4 = l[_g],
                _e2 = k[_g];

            if (_e2) {
              for (u in _a4) {
                u in _e2 || (c[u] = 1);
              }

              for (var _a5 in _e2) {
                _d3[_a5] || (_b4[_a5] = _e2[_a5], _d3[_a5] = 1);
              }

              l[_g] = _e2;
            } else for (var _b5 in _a4) {
              _d3[_b5] = 1;
            }
          }

          for (var _a6 in c) {
            _a6 in _b4 || (_b4[_a6] = void 0);
          }

          var u = _b4;
        }
        db(m, _p = u);
        Z(b, "shepherd-has-cancel-icon", a[5]);
        Z(b, "shepherd-has-title", a[6]);
        Z(b, "shepherd-element", !0);
      },
      i: function i(a) {
        h || (n(_d4.$$.fragment, a), h = !0);
      },
      o: function o(a) {
        r(_d4.$$.fragment, a);
        h = !1;
      },
      d: function d(c) {
        c && w(b);
        g && g.d();
        O(_d4);
        a[13](null);
        k = !1;

        _m2();
      }
    };
  }

  function pb(a) {
    return a.split(" ").filter(function (a) {
      return !!a.length;
    });
  }

  function lc(a, b, c) {
    var d = b.classPrefix,
        e = b.element,
        f = b.descriptionId,
        h = b.firstFocusableElement,
        k = b.focusableElements,
        m = b.labelId,
        g = b.lastFocusableElement,
        l = b.step,
        p = b.dataStepId,
        t,
        A,
        C;
    pa().$$.on_mount.push(function () {
      c(1, p = _defineProperty({}, "data-".concat(d, "shepherd-step-id"), l.id));
      c(9, k = e.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'));
      c(8, h = k[0]);
      c(10, g = k[k.length - 1]);
    });
    pa().$$.after_update.push(function () {
      if (C !== l.options.classes) {
        var _e$classList, _e$classList2;

        var a = C;
        da(a) && (a = pb(a), a.length && (_e$classList = e.classList).remove.apply(_e$classList, _toConsumableArray(a)));
        a = C = l.options.classes;
        da(a) && (a = pb(a), a.length && (_e$classList2 = e.classList).add.apply(_e$classList2, _toConsumableArray(a)));
      }
    });

    a.$$set = function (a) {
      "classPrefix" in a && c(11, d = a.classPrefix);
      "element" in a && c(0, e = a.element);
      "descriptionId" in a && c(2, f = a.descriptionId);
      "firstFocusableElement" in a && c(8, h = a.firstFocusableElement);
      "focusableElements" in a && c(9, k = a.focusableElements);
      "labelId" in a && c(3, m = a.labelId);
      "lastFocusableElement" in a && c(10, g = a.lastFocusableElement);
      "step" in a && c(4, l = a.step);
      "dataStepId" in a && c(1, p = a.dataStepId);
    };

    a.$$.update = function () {
      a.$$.dirty & 16 && (c(5, t = l.options && l.options.cancelIcon && l.options.cancelIcon.enabled), c(6, A = l.options && l.options.title));
    };

    return [e, p, f, m, l, t, A, function (a) {
      var _l = l,
          b = _l.tour;

      switch (a.keyCode) {
        case 9:
          if (0 === k.length) {
            a.preventDefault();
            break;
          }

          if (a.shiftKey) {
            if (document.activeElement === h || document.activeElement.classList.contains("shepherd-element")) a.preventDefault(), g.focus();
          } else document.activeElement === g && (a.preventDefault(), h.focus());

          break;

        case 27:
          b.options.exitOnEsc && l.cancel();
          break;

        case 37:
          b.options.keyboardNavigation && b.back();
          break;

        case 39:
          b.options.keyboardNavigation && b.next();
      }
    }, h, k, g, d, function () {
      return e;
    }, function (a) {
      aa[a ? "unshift" : "push"](function () {
        e = a;
        c(0, e);
      });
    }];
  }

  function mc(a) {
    var _a7;

    a && ((_a7 = a, a = _a7.steps, _a7), a.forEach(function (a) {
      a.options && !1 === a.options.canClickTarget && a.options.attachTo && a.target instanceof HTMLElement && a.target.classList.remove("shepherd-target-click-disabled");
    }));
  }

  function nc(_ref19) {
    var a = _ref19.width,
        b = _ref19.height,
        _ref19$x = _ref19.x,
        c = _ref19$x === void 0 ? 0 : _ref19$x,
        _ref19$y = _ref19.y,
        d = _ref19$y === void 0 ? 0 : _ref19$y,
        _ref19$r = _ref19.r,
        e = _ref19$r === void 0 ? 0 : _ref19$r;
    var _window = window,
        f = _window.innerWidth,
        h = _window.innerHeight;
    return "M".concat(f, ",").concat(h, "H0V0H").concat(f, "V").concat(h, "ZM").concat(c + e, ",").concat(d, "a").concat(e, ",").concat(e, ",0,0,0-").concat(e, ",").concat(e, "V").concat(b + d - e, "a").concat(e, ",").concat(e, ",0,0,0,").concat(e, ",").concat(e, "H").concat(a + c - e, "a").concat(e, ",").concat(e, ",0,0,0,").concat(e, "-").concat(e, "V").concat(d + e, "a").concat(e, ",").concat(e, ",0,0,0-").concat(e, "-").concat(e, "Z");
  }

  function oc(a) {
    var b, _c5, d, e, f;

    return {
      c: function c() {
        b = cb("svg");
        _c5 = cb("path");
        q(_c5, "d", a[2]);
        q(b, "class", d = "".concat(a[1] ? "shepherd-modal-is-visible" : "", " shepherd-modal-overlay-container"));
      },
      m: function m(d, k) {
        d.insertBefore(b, k || null);
        b.appendChild(_c5);
        a[11](b);
        e || (f = oa(b, "touchmove", a[3]), e = !0);
      },
      p: function p(a, _ref20) {
        var _ref21 = _slicedToArray(_ref20, 1),
            e = _ref21[0];

        e & 4 && q(_c5, "d", a[2]);
        e & 2 && d !== (d = "".concat(a[1] ? "shepherd-modal-is-visible" : "", " shepherd-modal-overlay-container")) && q(b, "class", d);
      },
      i: x,
      o: x,
      d: function d(c) {
        c && w(b);
        a[11](null);
        e = !1;
        f();
      }
    };
  }

  function qb(a) {
    if (!a) return null;
    var b = a instanceof HTMLElement && window.getComputedStyle(a).overflowY;
    return "hidden" !== b && "visible" !== b && a.scrollHeight >= a.clientHeight ? a : qb(a.parentElement);
  }

  function pc(a, b, c) {
    function d() {
      c(4, l = {
        width: 0,
        height: 0,
        x: 0,
        y: 0,
        r: 0
      });
    }

    function e() {
      c(1, p = !1);
      k();
    }

    function f() {
      var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var e = arguments.length > 2 ? arguments[2] : undefined;
      var f = arguments.length > 3 ? arguments[3] : undefined;

      if (f) {
        var g = f.getBoundingClientRect();
        var u = g.y || g.top;
        g = g.bottom || u + g.height;

        if (e) {
          var h = e.getBoundingClientRect();
          e = h.y || h.top;
          h = h.bottom || e + h.height;
          u = Math.max(u, e);
          g = Math.min(g, h);
        }

        u = {
          y: u,
          height: Math.max(g - u, 0)
        };

        var _u = u,
            _d5 = _u.y,
            _k = _u.height,
            _f$getBoundingClientR = f.getBoundingClientRect(),
            _m3 = _f$getBoundingClientR.x,
            _p3 = _f$getBoundingClientR.width,
            _A = _f$getBoundingClientR.left;

        c(4, l = {
          width: _p3 + 2 * a,
          height: _k + 2 * a,
          x: (_m3 || _A) - a,
          y: _d5 - a,
          r: b
        });
      } else d();
    }

    function h() {
      c(1, p = !0);
    }

    function k() {
      t && (cancelAnimationFrame(t), t = void 0);
      window.removeEventListener("touchmove", C, {
        passive: !1
      });
    }

    function m(a) {
      var _a$options = a.options,
          b = _a$options.modalOverlayOpeningPadding,
          c = _a$options.modalOverlayOpeningRadius,
          d = qb(a.target),
          e = function e() {
        t = void 0;
        f(b, c, d, a.target);
        t = requestAnimationFrame(e);
      };

      e();
      window.addEventListener("touchmove", C, {
        passive: !1
      });
    }

    var g = b.element,
        l = b.openingProperties;
    Ba();
    var p = !1,
        t = void 0,
        A;
    d();

    var C = function C(a) {
      a.preventDefault();
    };

    a.$$set = function (a) {
      "element" in a && c(0, g = a.element);
      "openingProperties" in a && c(4, l = a.openingProperties);
    };

    a.$$.update = function () {
      a.$$.dirty & 16 && c(2, A = nc(l));
    };

    return [g, p, A, function (a) {
      a.stopPropagation();
    }, l, function () {
      return g;
    }, d, e, f, function (a) {
      k();
      a.tour.options.useModalOverlay ? (m(a), h()) : e();
    }, h, function (a) {
      aa[a ? "unshift" : "push"](function () {
        g = a;
        c(0, g);
      });
    }];
  }

  var vb = function vb(a) {
    var b;
    if (b = !!a && "object" === _typeof(a)) b = Object.prototype.toString.call(a), b = !("[object RegExp]" === b || "[object Date]" === b || a.$$typeof === qc);
    return b;
  },
      qc = "function" === typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

  V.all = function (a, b) {
    if (!Array.isArray(a)) throw Error("first argument should be an array");
    return a.reduce(function (a, d) {
      return V(a, d, b);
    }, {});
  };

  var rc = V;

  var Ga = /*#__PURE__*/function () {
    function Ga() {
      _classCallCheck(this, Ga);
    }

    _createClass(Ga, [{
      key: "on",
      value: function on(a, b, c) {
        var d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
        void 0 === this.bindings && (this.bindings = {});
        void 0 === this.bindings[a] && (this.bindings[a] = []);
        this.bindings[a].push({
          handler: b,
          ctx: c,
          once: d
        });
        return this;
      }
    }, {
      key: "once",
      value: function once(a, b, c) {
        return this.on(a, b, c, !0);
      }
    }, {
      key: "off",
      value: function off(a, b) {
        var _this = this;

        if (void 0 === this.bindings || void 0 === this.bindings[a]) return this;
        void 0 === b ? delete this.bindings[a] : this.bindings[a].forEach(function (c, d) {
          c.handler === b && _this.bindings[a].splice(d, 1);
        });
        return this;
      }
    }, {
      key: "trigger",
      value: function trigger(a) {
        var _this2 = this;

        for (var _len2 = arguments.length, b = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          b[_key2 - 1] = arguments[_key2];
        }

        void 0 !== this.bindings && this.bindings[a] && this.bindings[a].forEach(function (c, d) {
          var e = c.ctx,
              f = c.handler,
              h = c.once;
          f.apply(e || _this2, b);
          h && _this2.bindings[a].splice(d, 1);
        });
        return this;
      }
    }]);

    return Ga;
  }();

  var ja = ["top", "bottom", "right", "left"],
      Wa = ja.reduce(function (a, b) {
    return a.concat([b + "-start", b + "-end"]);
  }, []),
      Va = [].concat(ja, ["auto"]).reduce(function (a, b) {
    return a.concat([b, b + "-start", b + "-end"]);
  }, []),
      Ib = "beforeRead read afterRead beforeMain main afterMain beforeWrite write afterWrite".split(" "),
      E = Math.max,
      M = Math.min,
      ma = Math.round,
      yb = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  },
      sa = {
    passive: !0
  },
      zb = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  },
      Ab = {
    start: "end",
    end: "start"
  },
      rb = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  },
      sc = function (a) {
    void 0 === a && (a = {});
    var b = a.defaultModifiers,
        c = void 0 === b ? [] : b;
    a = a.defaultOptions;
    var d = void 0 === a ? rb : a;
    return function (a, b, h) {
      function e() {
        g.orderedModifiers.forEach(function (a) {
          var b = a.name,
              c = a.options;
          c = void 0 === c ? {} : c;
          a = a.effect;
          "function" === typeof a && (b = a({
            state: g,
            name: b,
            instance: t,
            options: c
          }), l.push(b || function () {}));
        });
      }

      function f() {
        l.forEach(function (a) {
          return a();
        });
        l = [];
      }

      void 0 === h && (h = d);
      var g = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, rb, d),
        modifiersData: {},
        elements: {
          reference: a,
          popper: b
        },
        attributes: {},
        styles: {}
      },
          l = [],
          p = !1,
          t = {
        state: g,
        setOptions: function setOptions(h) {
          f();
          g.options = Object.assign({}, d, g.options, h);
          g.scrollParents = {
            reference: ea(a) ? ha(a) : a.contextElement ? ha(a.contextElement) : [],
            popper: ha(b)
          };
          h = Hb(Kb([].concat(c, g.options.modifiers)));
          g.orderedModifiers = h.filter(function (a) {
            return a.enabled;
          });
          e();
          return t.update();
        },
        forceUpdate: function forceUpdate() {
          if (!p) {
            var a = g.elements,
                b = a.reference;
            a = a.popper;
            if (Za(b, a)) for (g.rects = {
              reference: Fb(b, fa(a), "fixed" === g.options.strategy),
              popper: ta(a)
            }, g.reset = !1, g.placement = g.options.placement, g.orderedModifiers.forEach(function (a) {
              return g.modifiersData[a.name] = Object.assign({}, a.data);
            }), b = 0; b < g.orderedModifiers.length; b++) {
              if (!0 === g.reset) g.reset = !1, b = -1;else {
                var c = g.orderedModifiers[b];
                a = c.fn;
                var d = c.options;
                d = void 0 === d ? {} : d;
                c = c.name;
                "function" === typeof a && (g = a({
                  state: g,
                  options: d,
                  name: c,
                  instance: t
                }) || g);
              }
            }
          }
        },
        update: Jb(function () {
          return new Promise(function (a) {
            t.forceUpdate();
            a(g);
          });
        }),
        destroy: function destroy() {
          f();
          p = !0;
        }
      };
      if (!Za(a, b)) return t;
      t.setOptions(h).then(function (a) {
        if (!p && h.onFirstUpdate) h.onFirstUpdate(a);
      });
      return t;
    };
  }({
    defaultModifiers: [{
      name: "eventListeners",
      enabled: !0,
      phase: "write",
      fn: function fn() {},
      effect: function effect(a) {
        var b = a.state,
            c = a.instance;
        a = a.options;
        var d = a.scroll,
            e = void 0 === d ? !0 : d;
        a = a.resize;
        var f = void 0 === a ? !0 : a,
            h = z(b.elements.popper),
            k = [].concat(b.scrollParents.reference, b.scrollParents.popper);
        e && k.forEach(function (a) {
          a.addEventListener("scroll", c.update, sa);
        });
        f && h.addEventListener("resize", c.update, sa);
        return function () {
          e && k.forEach(function (a) {
            a.removeEventListener("scroll", c.update, sa);
          });
          f && h.removeEventListener("resize", c.update, sa);
        };
      },
      data: {}
    }, {
      name: "popperOffsets",
      enabled: !0,
      phase: "read",
      fn: function fn(a) {
        var b = a.state;
        b.modifiersData[a.name] = Ua({
          reference: b.rects.reference,
          element: b.rects.popper,
          strategy: "absolute",
          placement: b.placement
        });
      },
      data: {}
    }, {
      name: "computeStyles",
      enabled: !0,
      phase: "beforeWrite",
      fn: function fn(a) {
        var b = a.state,
            c = a.options;
        a = c.gpuAcceleration;
        a = void 0 === a ? !0 : a;
        var d = c.adaptive;
        d = void 0 === d ? !0 : d;
        c = c.roundOffsets;
        c = void 0 === c ? !0 : c;
        a = {
          placement: F(b.placement),
          popper: b.elements.popper,
          popperRect: b.rects.popper,
          gpuAcceleration: a
        };
        null != b.modifiersData.popperOffsets && (b.styles.popper = Object.assign({}, b.styles.popper, Qa(Object.assign({}, a, {
          offsets: b.modifiersData.popperOffsets,
          position: b.options.strategy,
          adaptive: d,
          roundOffsets: c
        }))));
        null != b.modifiersData.arrow && (b.styles.arrow = Object.assign({}, b.styles.arrow, Qa(Object.assign({}, a, {
          offsets: b.modifiersData.arrow,
          position: "absolute",
          adaptive: !1,
          roundOffsets: c
        }))));
        b.attributes.popper = Object.assign({}, b.attributes.popper, {
          "data-popper-placement": b.placement
        });
      },
      data: {}
    }, {
      name: "applyStyles",
      enabled: !0,
      phase: "write",
      fn: function fn(a) {
        var b = a.state;
        Object.keys(b.elements).forEach(function (a) {
          var c = b.styles[a] || {},
              e = b.attributes[a] || {},
              f = b.elements[a];
          y(f) && B(f) && (Object.assign(f.style, c), Object.keys(e).forEach(function (a) {
            var b = e[a];
            !1 === b ? f.removeAttribute(a) : f.setAttribute(a, !0 === b ? "" : b);
          }));
        });
      },
      effect: function effect(a) {
        var b = a.state,
            c = {
          popper: {
            position: b.options.strategy,
            left: "0",
            top: "0",
            margin: "0"
          },
          arrow: {
            position: "absolute"
          },
          reference: {}
        };
        Object.assign(b.elements.popper.style, c.popper);
        b.styles = c;
        b.elements.arrow && Object.assign(b.elements.arrow.style, c.arrow);
        return function () {
          Object.keys(b.elements).forEach(function (a) {
            var d = b.elements[a],
                f = b.attributes[a] || {};
            a = Object.keys(b.styles.hasOwnProperty(a) ? b.styles[a] : c[a]).reduce(function (a, b) {
              a[b] = "";
              return a;
            }, {});
            y(d) && B(d) && (Object.assign(d.style, a), Object.keys(f).forEach(function (a) {
              d.removeAttribute(a);
            }));
          });
        };
      },
      requires: ["computeStyles"]
    }, {
      name: "offset",
      enabled: !0,
      phase: "main",
      requires: ["popperOffsets"],
      fn: function fn(a) {
        var b = a.state,
            c = a.name;
        a = a.options.offset;
        var d = void 0 === a ? [0, 0] : a;
        a = Va.reduce(function (a, c) {
          var e = b.rects;
          var f = F(c);
          var h = 0 <= ["left", "top"].indexOf(f) ? -1 : 1,
              k = "function" === typeof d ? d(Object.assign({}, e, {
            placement: c
          })) : d;
          e = k[0];
          k = k[1];
          e = e || 0;
          k = (k || 0) * h;
          f = 0 <= ["left", "right"].indexOf(f) ? {
            x: k,
            y: e
          } : {
            x: e,
            y: k
          };
          a[c] = f;
          return a;
        }, {});
        var e = a[b.placement],
            f = e.x;
        e = e.y;
        null != b.modifiersData.popperOffsets && (b.modifiersData.popperOffsets.x += f, b.modifiersData.popperOffsets.y += e);
        b.modifiersData[c] = a;
      }
    }, {
      name: "flip",
      enabled: !0,
      phase: "main",
      fn: function fn(a) {
        var b = a.state,
            c = a.options;
        a = a.name;

        if (!b.modifiersData[a]._skip) {
          var d = c.mainAxis;
          d = void 0 === d ? !0 : d;
          var e = c.altAxis;
          e = void 0 === e ? !0 : e;
          var f = c.fallbackPlacements,
              h = c.padding,
              k = c.boundary,
              m = c.rootBoundary,
              g = c.altBoundary,
              l = c.flipVariations,
              p = void 0 === l ? !0 : l,
              t = c.allowedAutoPlacements;
          c = b.options.placement;
          l = F(c);
          f = f || (l !== c && p ? Eb(c) : [na(c)]);
          var A = [c].concat(f).reduce(function (a, c) {
            return a.concat("auto" === F(c) ? Db(b, {
              placement: c,
              boundary: k,
              rootBoundary: m,
              padding: h,
              flipVariations: p,
              allowedAutoPlacements: t
            }) : c);
          }, []);
          c = b.rects.reference;
          f = b.rects.popper;
          var n = new Map();
          l = !0;

          for (var u = A[0], D = 0; D < A.length; D++) {
            var v = A[D],
                q = F(v),
                r = "start" === v.split("-")[1],
                U = 0 <= ["top", "bottom"].indexOf(q),
                x = U ? "width" : "height",
                w = ia(b, {
              placement: v,
              boundary: k,
              rootBoundary: m,
              altBoundary: g,
              padding: h
            });
            r = U ? r ? "right" : "left" : r ? "bottom" : "top";
            c[x] > f[x] && (r = na(r));
            x = na(r);
            U = [];
            d && U.push(0 >= w[q]);
            e && U.push(0 >= w[r], 0 >= w[x]);

            if (U.every(function (a) {
              return a;
            })) {
              u = v;
              l = !1;
              break;
            }

            n.set(v, U);
          }

          if (l) for (d = function d(a) {
            var b = A.find(function (b) {
              if (b = n.get(b)) return b.slice(0, a).every(function (a) {
                return a;
              });
            });
            if (b) return u = b, "break";
          }, e = p ? 3 : 1; 0 < e && "break" !== d(e); e--) {
            ;
          }
          b.placement !== u && (b.modifiersData[a]._skip = !0, b.placement = u, b.reset = !0);
        }
      },
      requiresIfExists: ["offset"],
      data: {
        _skip: !1
      }
    }, {
      name: "preventOverflow",
      enabled: !0,
      phase: "main",
      fn: function fn(a) {
        var b = a.state,
            c = a.options;
        a = a.name;
        var d = c.mainAxis,
            e = void 0 === d ? !0 : d;
        d = c.altAxis;
        var f = void 0 === d ? !1 : d;
        d = c.tether;
        d = void 0 === d ? !0 : d;
        var h = c.tetherOffset,
            k = void 0 === h ? 0 : h,
            m = ia(b, {
          boundary: c.boundary,
          rootBoundary: c.rootBoundary,
          padding: c.padding,
          altBoundary: c.altBoundary
        });
        c = F(b.placement);
        var g = b.placement.split("-")[1],
            l = !g,
            p = ua(c);
        c = "x" === p ? "y" : "x";
        h = b.modifiersData.popperOffsets;
        var t = b.rects.reference,
            n = b.rects.popper,
            q = "function" === typeof k ? k(Object.assign({}, b.rects, {
          placement: b.placement
        })) : k;
        k = {
          x: 0,
          y: 0
        };

        if (h) {
          if (e || f) {
            var u = "y" === p ? "top" : "left",
                D = "y" === p ? "bottom" : "right",
                v = "y" === p ? "height" : "width",
                r = h[p],
                x = h[p] + m[u],
                w = h[p] - m[D],
                z = d ? -n[v] / 2 : 0,
                y = "start" === g ? t[v] : n[v];
            g = "start" === g ? -n[v] : -t[v];
            n = b.elements.arrow;
            n = d && n ? ta(n) : {
              width: 0,
              height: 0
            };
            var B = b.modifiersData["arrow#persistent"] ? b.modifiersData["arrow#persistent"].padding : {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            };
            u = B[u];
            D = B[D];
            n = E(0, M(t[v], n[v]));
            y = l ? t[v] / 2 - z - n - u - q : y - n - u - q;
            t = l ? -t[v] / 2 + z + n + D + q : g + n + D + q;
            l = b.elements.arrow && fa(b.elements.arrow);
            q = b.modifiersData.offset ? b.modifiersData.offset[b.placement][p] : 0;
            l = h[p] + y - q - (l ? "y" === p ? l.clientTop || 0 : l.clientLeft || 0 : 0);
            t = h[p] + t - q;
            e && (e = d ? M(x, l) : x, w = d ? E(w, t) : w, e = E(e, M(r, w)), h[p] = e, k[p] = e - r);
            f && (f = h[c], e = f + m["x" === p ? "top" : "left"], m = f - m["x" === p ? "bottom" : "right"], e = d ? M(e, l) : e, d = d ? E(m, t) : m, d = E(e, M(f, d)), h[c] = d, k[c] = d - f);
          }

          b.modifiersData[a] = k;
        }
      },
      requiresIfExists: ["offset"]
    }, {
      name: "arrow",
      enabled: !0,
      phase: "main",
      fn: function fn(a) {
        var b,
            c = a.state,
            d = a.name,
            e = a.options,
            f = c.elements.arrow,
            h = c.modifiersData.popperOffsets,
            k = F(c.placement);
        a = ua(k);
        k = 0 <= ["left", "right"].indexOf(k) ? "height" : "width";

        if (f && h) {
          e = e.padding;
          e = "function" === typeof e ? e(Object.assign({}, c.rects, {
            placement: c.placement
          })) : e;
          e = Oa("number" !== typeof e ? e : Pa(e, ja));
          var m = ta(f),
              g = "y" === a ? "top" : "left",
              l = "y" === a ? "bottom" : "right",
              p = c.rects.reference[k] + c.rects.reference[a] - h[a] - c.rects.popper[k];
          h = h[a] - c.rects.reference[a];
          f = (f = fa(f)) ? "y" === a ? f.clientHeight || 0 : f.clientWidth || 0 : 0;
          h = f / 2 - m[k] / 2 + (p / 2 - h / 2);
          k = E(e[g], M(h, f - m[k] - e[l]));
          c.modifiersData[d] = (b = {}, b[a] = k, b.centerOffset = k - h, b);
        }
      },
      effect: function effect(a) {
        var b = a.state;
        a = a.options.element;
        a = void 0 === a ? "[data-popper-arrow]" : a;

        if (null != a) {
          if ("string" === typeof a && (a = b.elements.popper.querySelector(a), !a)) return;
          Ma(b.elements.popper, a) && (b.elements.arrow = a);
        }
      },
      requires: ["popperOffsets"],
      requiresIfExists: ["preventOverflow"]
    }, {
      name: "hide",
      enabled: !0,
      phase: "main",
      requiresIfExists: ["preventOverflow"],
      fn: function fn(a) {
        var b = a.state;
        a = a.name;
        var c = b.rects.reference,
            d = b.rects.popper,
            e = b.modifiersData.preventOverflow,
            f = ia(b, {
          elementContext: "reference"
        }),
            h = ia(b, {
          altBoundary: !0
        });
        c = Xa(f, c);
        d = Xa(h, d, e);
        e = Ya(c);
        h = Ya(d);
        b.modifiersData[a] = {
          referenceClippingOffsets: c,
          popperEscapeOffsets: d,
          isReferenceHidden: e,
          hasPopperEscaped: h
        };
        b.attributes.popper = Object.assign({}, b.attributes.popper, {
          "data-popper-reference-hidden": e,
          "data-popper-escaped": h
        });
      }
    }]
  });

  var P,
      ka = [],
      aa = [],
      qa = [],
      fb = [],
      Pb = Promise.resolve(),
      Fa = !1,
      Da = !1,
      Ea = new Set(),
      ra = new Set(),
      R;

  var K = /*#__PURE__*/function () {
    function K() {
      _classCallCheck(this, K);
    }

    _createClass(K, [{
      key: "$destroy",
      value: function $destroy() {
        O(this, 1);
        this.$destroy = x;
      }
    }, {
      key: "$on",
      value: function $on(a, b) {
        var c = this.$$.callbacks[a] || (this.$$.callbacks[a] = []);
        c.push(b);
        return function () {
          var a = c.indexOf(b);
          -1 !== a && c.splice(a, 1);
        };
      }
    }, {
      key: "$set",
      value: function $set(a) {
        this.$$set && 0 !== Object.keys(a).length && (this.$$.skip_bound = !0, this.$$set(a), this.$$.skip_bound = !1);
      }
    }]);

    return K;
  }();

  var Sb = /*#__PURE__*/function (_K) {
    _inherits(Sb, _K);

    var _super = _createSuper(Sb);

    function Sb(a) {
      var _this3;

      _classCallCheck(this, Sb);

      _this3 = _super.call(this);
      J(_assertThisInitialized(_this3), a, Rb, Qb, I, {
        config: 6,
        step: 7
      });
      return _this3;
    }

    return Sb;
  }(K);

  var gc = /*#__PURE__*/function (_K2) {
    _inherits(gc, _K2);

    var _super2 = _createSuper(gc);

    function gc(a) {
      var _this4;

      _classCallCheck(this, gc);

      _this4 = _super2.call(this);
      J(_assertThisInitialized(_this4), a, Ub, Tb, I, {
        step: 0
      });
      return _this4;
    }

    return gc;
  }(K);

  var $b = /*#__PURE__*/function (_K3) {
    _inherits($b, _K3);

    var _super3 = _createSuper($b);

    function $b(a) {
      var _this5;

      _classCallCheck(this, $b);

      _this5 = _super3.call(this);
      J(_assertThisInitialized(_this5), a, Wb, Vb, I, {
        cancelIcon: 0,
        step: 2
      });
      return _this5;
    }

    return $b;
  }(K);

  var Zb = /*#__PURE__*/function (_K4) {
    _inherits(Zb, _K4);

    var _super4 = _createSuper(Zb);

    function Zb(a) {
      var _this6;

      _classCallCheck(this, Zb);

      _this6 = _super4.call(this);
      J(_assertThisInitialized(_this6), a, Yb, Xb, I, {
        labelId: 1,
        element: 0,
        title: 2
      });
      return _this6;
    }

    return Zb;
  }(K);

  var ec = /*#__PURE__*/function (_K5) {
    _inherits(ec, _K5);

    var _super5 = _createSuper(ec);

    function ec(a) {
      var _this7;

      _classCallCheck(this, ec);

      _this7 = _super5.call(this);
      J(_assertThisInitialized(_this7), a, bc, ac, I, {
        labelId: 0,
        step: 1
      });
      return _this7;
    }

    return ec;
  }(K);

  var fc = /*#__PURE__*/function (_K6) {
    _inherits(fc, _K6);

    var _super6 = _createSuper(fc);

    function fc(a) {
      var _this8;

      _classCallCheck(this, fc);

      _this8 = _super6.call(this);
      J(_assertThisInitialized(_this8), a, dc, cc, I, {
        descriptionId: 1,
        element: 0,
        step: 2
      });
      return _this8;
    }

    return fc;
  }(K);

  var kc = /*#__PURE__*/function (_K7) {
    _inherits(kc, _K7);

    var _super7 = _createSuper(kc);

    function kc(a) {
      var _this9;

      _classCallCheck(this, kc);

      _this9 = _super7.call(this);
      J(_assertThisInitialized(_this9), a, ic, hc, I, {
        descriptionId: 0,
        labelId: 1,
        step: 2
      });
      return _this9;
    }

    return kc;
  }(K);

  var tc = /*#__PURE__*/function (_K8) {
    _inherits(tc, _K8);

    var _super8 = _createSuper(tc);

    function tc(a) {
      var _this10;

      _classCallCheck(this, tc);

      _this10 = _super8.call(this);
      J(_assertThisInitialized(_this10), a, lc, jc, I, {
        classPrefix: 11,
        element: 0,
        descriptionId: 2,
        firstFocusableElement: 8,
        focusableElements: 9,
        labelId: 3,
        lastFocusableElement: 10,
        step: 4,
        dataStepId: 1,
        getElement: 12
      });
      return _this10;
    }

    _createClass(tc, [{
      key: "getElement",
      get: function get() {
        return this.$$.ctx[12];
      }
    }]);

    return tc;
  }(K);

  var sb = function (a, b) {
    return b = {
      exports: {}
    }, a(b, b.exports), b.exports;
  }(function (a, b) {
    (function () {
      a.exports = {
        polyfill: function polyfill() {
          function a(a, b) {
            this.scrollLeft = a;
            this.scrollTop = b;
          }

          function b(a) {
            if (null === a || "object" !== _typeof(a) || void 0 === a.behavior || "auto" === a.behavior || "instant" === a.behavior) return !0;
            if ("object" === _typeof(a) && "smooth" === a.behavior) return !1;
            throw new TypeError("behavior member of ScrollOptions " + a.behavior + " is not a valid value for enumeration ScrollBehavior.");
          }

          function e(a, b) {
            if ("Y" === b) return a.clientHeight + r < a.scrollHeight;
            if ("X" === b) return a.clientWidth + r < a.scrollWidth;
          }

          function f(a, b) {
            a = g.getComputedStyle(a, null)["overflow" + b];
            return "auto" === a || "scroll" === a;
          }

          function h(a) {
            var b = e(a, "Y") && f(a, "Y");
            a = e(a, "X") && f(a, "X");
            return b || a;
          }

          function k(a) {
            var b = (q() - a.startTime) / 468;
            var c = .5 * (1 - Math.cos(Math.PI * (1 < b ? 1 : b)));
            b = a.startX + (a.x - a.startX) * c;
            c = a.startY + (a.y - a.startY) * c;
            a.method.call(a.scrollable, b, c);
            b === a.x && c === a.y || g.requestAnimationFrame(k.bind(g, a));
          }

          function m(b, c, d) {
            var e = q();

            if (b === l.body) {
              var f = g;
              var h = g.scrollX || g.pageXOffset;
              b = g.scrollY || g.pageYOffset;
              var u = n.scroll;
            } else f = b, h = b.scrollLeft, b = b.scrollTop, u = a;

            k({
              scrollable: f,
              method: u,
              startTime: e,
              startX: h,
              startY: b,
              x: c,
              y: d
            });
          }

          var g = window,
              l = document;

          if (!("scrollBehavior" in l.documentElement.style && !0 !== g.__forceSmoothScrollPolyfill__)) {
            var p = g.HTMLElement || g.Element,
                n = {
              scroll: g.scroll || g.scrollTo,
              scrollBy: g.scrollBy,
              elementScroll: p.prototype.scroll || a,
              scrollIntoView: p.prototype.scrollIntoView
            },
                q = g.performance && g.performance.now ? g.performance.now.bind(g.performance) : Date.now,
                r = /MSIE |Trident\/|Edge\//.test(g.navigator.userAgent) ? 1 : 0;

            g.scroll = g.scrollTo = function (a, c) {
              void 0 !== a && (!0 === b(a) ? n.scroll.call(g, void 0 !== a.left ? a.left : "object" !== _typeof(a) ? a : g.scrollX || g.pageXOffset, void 0 !== a.top ? a.top : void 0 !== c ? c : g.scrollY || g.pageYOffset) : m.call(g, l.body, void 0 !== a.left ? ~~a.left : g.scrollX || g.pageXOffset, void 0 !== a.top ? ~~a.top : g.scrollY || g.pageYOffset));
            };

            g.scrollBy = function (a, c) {
              void 0 !== a && (b(a) ? n.scrollBy.call(g, void 0 !== a.left ? a.left : "object" !== _typeof(a) ? a : 0, void 0 !== a.top ? a.top : void 0 !== c ? c : 0) : m.call(g, l.body, ~~a.left + (g.scrollX || g.pageXOffset), ~~a.top + (g.scrollY || g.pageYOffset)));
            };

            p.prototype.scroll = p.prototype.scrollTo = function (a, c) {
              if (void 0 !== a) if (!0 === b(a)) {
                if ("number" === typeof a && void 0 === c) throw new SyntaxError("Value could not be converted");
                n.elementScroll.call(this, void 0 !== a.left ? ~~a.left : "object" !== _typeof(a) ? ~~a : this.scrollLeft, void 0 !== a.top ? ~~a.top : void 0 !== c ? ~~c : this.scrollTop);
              } else c = a.left, a = a.top, m.call(this, this, "undefined" === typeof c ? this.scrollLeft : ~~c, "undefined" === typeof a ? this.scrollTop : ~~a);
            };

            p.prototype.scrollBy = function (a, c) {
              void 0 !== a && (!0 === b(a) ? n.elementScroll.call(this, void 0 !== a.left ? ~~a.left + this.scrollLeft : ~~a + this.scrollLeft, void 0 !== a.top ? ~~a.top + this.scrollTop : ~~c + this.scrollTop) : this.scroll({
                left: ~~a.left + this.scrollLeft,
                top: ~~a.top + this.scrollTop,
                behavior: a.behavior
              }));
            };

            p.prototype.scrollIntoView = function (a) {
              if (!0 === b(a)) n.scrollIntoView.call(this, void 0 === a ? !0 : a);else {
                for (a = this; a !== l.body && !1 === h(a);) {
                  a = a.parentNode || a.host;
                }

                var c = a.getBoundingClientRect(),
                    d = this.getBoundingClientRect();
                a !== l.body ? (m.call(this, a, a.scrollLeft + d.left - c.left, a.scrollTop + d.top - c.top), "fixed" !== g.getComputedStyle(a).position && g.scrollBy({
                  left: c.left,
                  top: c.top,
                  behavior: "smooth"
                })) : g.scrollBy({
                  left: d.left,
                  top: d.top,
                  behavior: "smooth"
                });
              }
            };
          }
        }
      };
    })();
  });

  sb.polyfill;
  sb.polyfill();

  var Ha = /*#__PURE__*/function (_Ga) {
    _inherits(Ha, _Ga);

    var _super9 = _createSuper(Ha);

    function Ha(a) {
      var _this11;

      var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Ha);

      _this11 = _super9.call(this, a, b);
      _this11.tour = a;
      _this11.classPrefix = _this11.tour.options ? $a(_this11.tour.options.classPrefix) : "";
      _this11.styles = a.styles;
      Ka(_assertThisInitialized(_this11));

      _this11._setOptions(b);

      return _possibleConstructorReturn(_this11, _assertThisInitialized(_this11));
    }

    _createClass(Ha, [{
      key: "cancel",
      value: function cancel() {
        this.tour.cancel();
        this.trigger("cancel");
      }
    }, {
      key: "complete",
      value: function complete() {
        this.tour.complete();
        this.trigger("complete");
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.tooltip && (this.tooltip.destroy(), this.tooltip = null);
        this.el instanceof HTMLElement && this.el.parentNode && (this.el.parentNode.removeChild(this.el), this.el = null);

        this._updateStepTargetOnHide();

        this.trigger("destroy");
      }
    }, {
      key: "getTour",
      value: function getTour() {
        return this.tour;
      }
    }, {
      key: "hide",
      value: function hide() {
        this.tour.modal.hide();
        this.trigger("before-hide");
        this.el && (this.el.hidden = !0);

        this._updateStepTargetOnHide();

        this.trigger("hide");
      }
    }, {
      key: "isCentered",
      value: function isCentered() {
        var a = Aa(this);
        return !a.element || !a.on;
      }
    }, {
      key: "isOpen",
      value: function isOpen() {
        return !(!this.el || this.el.hidden);
      }
    }, {
      key: "show",
      value: function show() {
        var _this12 = this;

        if (W(this.options.beforeShowPromise)) {
          var a = this.options.beforeShowPromise();
          if (void 0 !== a) return a.then(function () {
            return _this12._show();
          });
        }

        this._show();
      }
    }, {
      key: "updateStepOptions",
      value: function updateStepOptions(a) {
        Object.assign(this.options, a);
        this.shepherdElementComponent && this.shepherdElementComponent.$set({
          step: this
        });
      }
    }, {
      key: "getElement",
      value: function getElement() {
        return this.el;
      }
    }, {
      key: "getTarget",
      value: function getTarget() {
        return this.target;
      }
    }, {
      key: "_createTooltipContent",
      value: function _createTooltipContent() {
        this.shepherdElementComponent = new tc({
          target: this.tour.options.stepsContainer || document.body,
          props: {
            classPrefix: this.classPrefix,
            descriptionId: "".concat(this.id, "-description"),
            labelId: "".concat(this.id, "-label"),
            step: this,
            styles: this.styles
          }
        });
        return this.shepherdElementComponent.getElement();
      }
    }, {
      key: "_scrollTo",
      value: function _scrollTo(a) {
        var _Aa = Aa(this),
            b = _Aa.element;

        W(this.options.scrollToHandler) ? this.options.scrollToHandler(b) : b instanceof Element && "function" === typeof b.scrollIntoView && b.scrollIntoView(a);
      }
    }, {
      key: "_getClassOptions",
      value: function _getClassOptions(a) {
        var b = this.tour && this.tour.options && this.tour.options.defaultStepOptions;
        b = b && b.classes ? b.classes : "";
        a = [].concat(_toConsumableArray((a.classes ? a.classes : "").split(" ")), _toConsumableArray(b.split(" ")));
        a = new Set(a);
        return Array.from(a).join(" ").trim();
      }
    }, {
      key: "_setOptions",
      value: function _setOptions() {
        var _this13 = this;

        var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var b = this.tour && this.tour.options && this.tour.options.defaultStepOptions;
        b = rc({}, b || {});
        this.options = Object.assign({
          arrow: !0
        }, b, a);
        var c = this.options.when;
        this.options.classes = this._getClassOptions(a);
        this.destroy();
        this.id = this.options.id || "step-".concat(Ba());
        c && Object.keys(c).forEach(function (a) {
          _this13.on(a, c[a], _this13);
        });
      }
    }, {
      key: "_setupElements",
      value: function _setupElements() {
        void 0 !== this.el && this.destroy();
        this.el = this._createTooltipContent();
        this.options.advanceOn && xb(this);
        {
          this.tooltip && this.tooltip.destroy();
          var a = Aa(this),
              b = a.element,
              c = Nb(a, this);
          this.isCentered() && (b = document.body, this.shepherdElementComponent.getElement().classList.add("shepherd-centered"));
          this.tooltip = sc(b, this.el, c);
          this.target = a.element;
        }
      }
    }, {
      key: "_show",
      value: function _show() {
        var _this14 = this;

        this.trigger("before-show");

        this._setupElements();

        this.tour.modal || this.tour._setupModal();
        this.tour.modal.setupForStep(this);

        this._styleTargetElementForStep(this);

        this.el.hidden = !1;
        this.options.scrollTo && setTimeout(function () {
          _this14._scrollTo(_this14.options.scrollTo);
        });
        this.el.hidden = !1;
        var a = this.shepherdElementComponent.getElement(),
            b = this.target || document.body;
        b.classList.add("".concat(this.classPrefix, "shepherd-enabled"));
        b.classList.add("".concat(this.classPrefix, "shepherd-target"));
        a.classList.add("shepherd-enabled");
        this.trigger("show");
      }
    }, {
      key: "_styleTargetElementForStep",
      value: function _styleTargetElementForStep(a) {
        var b = a.target;
        b && (a.options.highlightClass && b.classList.add(a.options.highlightClass), !1 === a.options.canClickTarget && b.classList.add("shepherd-target-click-disabled"));
      }
    }, {
      key: "_updateStepTargetOnHide",
      value: function _updateStepTargetOnHide() {
        var a = this.target || document.body;
        this.options.highlightClass && a.classList.remove(this.options.highlightClass);
        a.classList.remove("shepherd-target-click-disabled", "".concat(this.classPrefix, "shepherd-enabled"), "".concat(this.classPrefix, "shepherd-target"));
      }
    }]);

    return Ha;
  }(Ga);

  var uc = /*#__PURE__*/function (_K9) {
    _inherits(uc, _K9);

    var _super10 = _createSuper(uc);

    function uc(a) {
      var _this15;

      _classCallCheck(this, uc);

      _this15 = _super10.call(this);
      J(_assertThisInitialized(_this15), a, pc, oc, I, {
        element: 0,
        openingProperties: 4,
        getElement: 5,
        closeModalOpening: 6,
        hide: 7,
        positionModal: 8,
        setupForStep: 9,
        show: 10
      });
      return _this15;
    }

    _createClass(uc, [{
      key: "getElement",
      get: function get() {
        return this.$$.ctx[5];
      }
    }, {
      key: "closeModalOpening",
      get: function get() {
        return this.$$.ctx[6];
      }
    }, {
      key: "hide",
      get: function get() {
        return this.$$.ctx[7];
      }
    }, {
      key: "positionModal",
      get: function get() {
        return this.$$.ctx[8];
      }
    }, {
      key: "setupForStep",
      get: function get() {
        return this.$$.ctx[9];
      }
    }, {
      key: "show",
      get: function get() {
        return this.$$.ctx[10];
      }
    }]);

    return uc;
  }(K);

  var ba = new Ga();

  var vc = /*#__PURE__*/function (_Ga2) {
    _inherits(vc, _Ga2);

    var _super11 = _createSuper(vc);

    function vc() {
      var _this16;

      var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, vc);

      _this16 = _super11.call(this, a);
      Ka(_assertThisInitialized(_this16));
      _this16.options = Object.assign({}, {
        exitOnEsc: !0,
        keyboardNavigation: !0
      }, a);
      _this16.classPrefix = $a(_this16.options.classPrefix);
      _this16.steps = [];

      _this16.addSteps(_this16.options.steps);

      "active cancel complete inactive show start".split(" ").map(function (a) {
        (function (a) {
          _this16.on(a, function (b) {
            b = b || {};
            b.tour = _assertThisInitialized(_this16);
            ba.trigger(a, b);
          });
        })(a);
      });

      _this16._setTourID();

      return _possibleConstructorReturn(_this16, _assertThisInitialized(_this16));
    }

    _createClass(vc, [{
      key: "addStep",
      value: function addStep(a, b) {
        a instanceof Ha ? a.tour = this : a = new Ha(this, a);
        void 0 !== b ? this.steps.splice(b, 0, a) : this.steps.push(a);
        return a;
      }
    }, {
      key: "addSteps",
      value: function addSteps(a) {
        var _this17 = this;

        Array.isArray(a) && a.forEach(function (a) {
          _this17.addStep(a);
        });
        return this;
      }
    }, {
      key: "back",
      value: function back() {
        var a = this.steps.indexOf(this.currentStep);
        this.show(a - 1, !1);
      }
    }, {
      key: "cancel",
      value: function cancel() {
        this.options.confirmCancel ? window.confirm(this.options.confirmCancelMessage || "Are you sure you want to stop the tour?") && this._done("cancel") : this._done("cancel");
      }
    }, {
      key: "complete",
      value: function complete() {
        this._done("complete");
      }
    }, {
      key: "getById",
      value: function getById(a) {
        return this.steps.find(function (b) {
          return b.id === a;
        });
      }
    }, {
      key: "getCurrentStep",
      value: function getCurrentStep() {
        return this.currentStep;
      }
    }, {
      key: "hide",
      value: function hide() {
        var a = this.getCurrentStep();
        if (a) return a.hide();
      }
    }, {
      key: "isActive",
      value: function isActive() {
        return ba.activeTour === this;
      }
    }, {
      key: "next",
      value: function next() {
        var a = this.steps.indexOf(this.currentStep);
        a === this.steps.length - 1 ? this.complete() : this.show(a + 1, !0);
      }
    }, {
      key: "removeStep",
      value: function removeStep(a) {
        var _this18 = this;

        var b = this.getCurrentStep();
        this.steps.some(function (b, d) {
          if (b.id === a) return b.isOpen() && b.hide(), b.destroy(), _this18.steps.splice(d, 1), !0;
        });
        b && b.id === a && (this.currentStep = void 0, this.steps.length ? this.show(0) : this.cancel());
      }
    }, {
      key: "show",
      value: function show() {
        var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
        if (a = da(a) ? this.getById(a) : this.steps[a]) this._updateStateBeforeShow(), W(a.options.showOn) && !a.options.showOn() ? this._skipStep(a, b) : (this.trigger("show", {
          step: a,
          previous: this.currentStep
        }), this.currentStep = a, a.show());
      }
    }, {
      key: "start",
      value: function start() {
        this.trigger("start");
        this.focusedElBeforeOpen = document.activeElement;
        this.currentStep = null;

        this._setupModal();

        this._setupActiveTour();

        this.next();
      }
    }, {
      key: "_done",
      value: function _done(a) {
        var b = this.steps.indexOf(this.currentStep);
        Array.isArray(this.steps) && this.steps.forEach(function (a) {
          return a.destroy();
        });
        mc(this);
        this.trigger(a, {
          index: b
        });
        ba.activeTour = null;
        this.trigger("inactive", {
          tour: this
        });
        this.modal && this.modal.hide();
        "cancel" !== a && "complete" !== a || !this.modal || (a = document.querySelector(".shepherd-modal-overlay-container")) && a.remove();
        this.focusedElBeforeOpen instanceof HTMLElement && this.focusedElBeforeOpen.focus();
      }
    }, {
      key: "_setupActiveTour",
      value: function _setupActiveTour() {
        this.trigger("active", {
          tour: this
        });
        ba.activeTour = this;
      }
    }, {
      key: "_setupModal",
      value: function _setupModal() {
        this.modal = new uc({
          target: this.options.modalContainer || document.body,
          props: {
            classPrefix: this.classPrefix,
            styles: this.styles
          }
        });
      }
    }, {
      key: "_skipStep",
      value: function _skipStep(a, b) {
        a = this.steps.indexOf(a);
        this.show(b ? a + 1 : a - 1, b);
      }
    }, {
      key: "_updateStateBeforeShow",
      value: function _updateStateBeforeShow() {
        this.currentStep && this.currentStep.hide();
        this.isActive() || this._setupActiveTour();
      }
    }, {
      key: "_setTourID",
      value: function _setTourID() {
        this.id = "".concat(this.options.tourName || "tour", "--").concat(Ba());
      }
    }]);

    return vc;
  }(Ga);

  Object.assign(ba, {
    Tour: vc,
    Step: Ha
  });
  return ba;
});