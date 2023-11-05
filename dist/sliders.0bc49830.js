parcelRequire = (function (e, r, t, n) {
  var i,
    o = "function" == typeof parcelRequire && parcelRequire,
    u = "function" == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      (p.resolve = function (r) {
        return e[t][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[t] = new f.Module(t));
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  (f.isParcelRequire = !0),
    (f.Module = function (e) {
      (this.id = e), (this.bundle = f), (this.exports = {});
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function (r, t) {
      e[r] = [
        function (e, r) {
          r.exports = t;
        },
        {},
      ];
    });
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = l)
      : "function" == typeof define && define.amd
      ? define(function () {
          return l;
        })
      : n && (this[n] = l);
  }
  if (((parcelRequire = f), i)) throw i;
  return f;
})(
  {
    wehY: [
      function (require, module, exports) {
        function t(t, n) {
          var r =
            ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
            t["@@iterator"];
          if (!r) {
            if (
              Array.isArray(t) ||
              (r = e(t)) ||
              (n && t && "number" == typeof t.length)
            ) {
              r && (t = r);
              var a = 0,
                i = function () {};
              return {
                s: i,
                n: function () {
                  return a >= t.length
                    ? { done: !0 }
                    : { done: !1, value: t[a++] };
                },
                e: function (t) {
                  throw t;
                },
                f: i,
              };
            }
            throw new TypeError(
              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          }
          var o,
            l = !0,
            u = !1;
          return {
            s: function () {
              r = r.call(t);
            },
            n: function () {
              var t = r.next();
              return (l = t.done), t;
            },
            e: function (t) {
              (u = !0), (o = t);
            },
            f: function () {
              try {
                l || null == r.return || r.return();
              } finally {
                if (u) throw o;
              }
            },
          };
        }
        function e(t, e) {
          if (t) {
            if ("string" == typeof t) return n(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            return (
              "Object" === r && t.constructor && (r = t.constructor.name),
              "Map" === r || "Set" === r
                ? Array.from(t)
                : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? n(t, e)
                : void 0
            );
          }
        }
        function n(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
          return r;
        }
        function r() {
          document.addEventListener("touchstart", function () {}, !1), o();
        }
        function a(t) {
          var e = t.target,
            n = document.querySelector("#spy_count");
          (n.max = Math.ceil(e.value / 2 - 1)),
            parseFloat(n.max) < n.value && u(n, n.max),
            o();
        }
        function i(t) {
          var e = t.target.value;
          t.target.hasAttribute("min") &&
            e < parseFloat(t.target.min) &&
            (t.target.value = t.target.min),
            t.target.hasAttribute("max") &&
              e > parseFloat(t.target.max) &&
              (t.target.value = t.target.max);
        }
        function o() {
          var e,
            n = t(document.getElementsByClassName("number-input-text-box"));
          try {
            for (n.s(); !(e = n.n()).done; ) {
              var r = e.value;
              if (r.id.length > 0) {
                var a = r.value,
                  i = r.parentElement.parentElement;
                i.children[0].onclick || (i.children[0].onclick = l),
                  i.children[2].onclick || (i.children[2].onclick = l),
                  i.children[0] &&
                    r.hasAttribute("min") &&
                    (i.children[0].disabled = a <= parseFloat(r.min)),
                  i.children[2] &&
                    r.hasAttribute("max") &&
                    (i.children[2].disabled = a >= parseFloat(r.max));
              }
            }
          } catch (o) {
            n.e(o);
          } finally {
            n.f();
          }
        }
        function l(t) {
          var e = t.target,
            n = document.querySelector("#" + e.dataset.inputId);
          if (n) {
            var r = parseFloat(n.value),
              i = parseFloat(n.dataset.step);
            "decrement" === e.dataset.operation
              ? (r -= isNaN(i) ? 1 : i)
              : "increment" === e.dataset.operation && (r += isNaN(i) ? 1 : i),
              n.hasAttribute("min") && r < parseFloat(n.min) && (r = n.min),
              n.hasAttribute("max") && r > parseFloat(n.max) && (r = n.max),
              n.value !== r && (u(n, r), o()),
              "players_count" === e.dataset.inputId &&
                a({ target: document.querySelector("#players_count") });
          }
        }
        function u(t, e) {
          var n = t.cloneNode(!0),
            r = t.parentElement.getBoundingClientRect();
          (t.id = ""),
            (n.value = e),
            e > t.value
              ? (t.parentElement.appendChild(n),
                (t.style.marginLeft = -r.width + "px"))
              : e < t.value &&
                ((n.style.marginLeft = -r.width + "px"),
                t.parentElement.prepend(n),
                window.setTimeout(function () {
                  n.style.marginLeft = 0;
                }, 20)),
            window.setTimeout(function () {
              t.parentElement.removeChild(t);
            }, 250);
        }
        window.onload = r;
      },
      {},
    ],
  },
  {},
  ["wehY"],
  null,
);
//# sourceMappingURL=/sliders.0bc49830.js.map
