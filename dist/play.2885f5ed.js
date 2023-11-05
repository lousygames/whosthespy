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
    Fy3d: [
      function (require, module, exports) {
        "use strict";
        function t(t) {
          return Math.floor(Math.random() * t);
        }
        function e(t) {
          for (var e = t.length - 1; e > 0; e--) {
            var o = Math.floor(Math.random() * (e + 1)),
              r = [t[o], t[e]];
            (t[e] = r[0]), (t[o] = r[1]);
          }
          return t;
        }
        function o(o) {
          var r = JSON.parse(localStorage.getItem("cooldown")) || [];
          null != r &&
            r.length &&
            r.forEach(function (t) {
              var e = o.indexOf(t);
              e >= 0 && o.splice(e, 1);
            });
          var n = (o = e(o))[t(o.length)];
          return (
            r.push(n),
            r.length > 20 && r.shift(),
            localStorage.setItem("cooldown", JSON.stringify(r)),
            n
          );
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.extractRandomElementFrom = o),
          (exports.shuffle = e);
      },
      {},
    ],
    bW6F: [
      function (require, module, exports) {
        "use strict";
        function e(e, n, a) {
          var r = document.createElement("h1");
          (r.innerText = e.play),
            document.querySelector(".scene").appendChild(r),
            (document.querySelector(".counter_label").innerText = e.player),
            document.querySelector(".counter").classList.remove("complete"),
            (document.querySelector(".counter_ratio").innerText = "1/".concat(
              n.gameSettings.playersCount,
            )),
            document.querySelector(".counter").classList.add("hydrated"),
            (a = a.map(function (n) {
              return t(n, e);
            })).forEach(function (e) {
              document.querySelector(".scene").appendChild(e);
            });
        }
        function t(e, t) {
          var a = document.createElement("div");
          a.classList.add("card__face", "card__face--front");
          var r = document.createElement("p");
          (r.innerText = t.title), r.classList.add("title");
          var c = document.createElement("p");
          (c.innerText = t.tap),
            c.classList.add("small_text"),
            a.appendChild(r),
            a.appendChild(c);
          var d = document.createElement("div");
          d.classList.add("card__face", "card__face--back");
          var i = document.createElement("p");
          (i.innerText = e), i.classList.add("title");
          var s = document.createElement("p");
          (s.innerText = t.nextPlayer),
            s.classList.add("small_text"),
            d.appendChild(i),
            d.appendChild(s);
          var o = document.createElement("div");
          return (
            o.classList.add("card"),
            o.appendChild(a),
            o.appendChild(d),
            o.addEventListener("click", function (e) {
              return n(e);
            }),
            o.addEventListener("transitionstart", function () {
              return (o.dataset.isRunningTransition = !0);
            }),
            o.addEventListener("transitionend", function (e) {
              var t = e.target;
              delete t.dataset.isRunningTransition,
                t.dataset.isRemoved && t.parentElement.removeChild(t);
            }),
            o
          );
        }
        function n(e) {
          for (var t = e.target; !t.classList.contains("card"); )
            t = t.parentElement;
          if (!t.dataset.isRunningTransition)
            if (t.dataset.isFlipped) {
              var n = JSON.parse(localStorage.getItem("payload")).gameSettings
                  .playersCount,
                a = Array.from(document.querySelectorAll(".card")).length - 1;
              n - a + 1 <= n
                ? (document.querySelector(".counter_ratio").innerText = ""
                    .concat(n - a + 1, "/")
                    .concat(n))
                : document.querySelector(".counter").classList.add("complete"),
                (t.dataset.isRemoved = !0);
            } else t.dataset.isFlipped = !0;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.initializeDom = e);
      },
      {},
    ],
    eTl0: [
      function (require, module, exports) {
        module.exports = {
          it: {
            title: "Trova la spia",
            players: "Numero di giocatori",
            spies: "Numero di spie",
            play_now: "Gioca ora!",
            adv_settings: "Impostazioni avanzate",
            options: [
              "Geografia",
              "Luoghi",
              "Nazioni",
              "Animali",
              "Lavori",
              "Oggetti",
            ],
            topic: "Argomenti",
            spy: "Sei tu la spia!",
            tap: "Tocca per pescare una carta",
            play: "Si gioca!",
            nextPlayer:
              "Tocca di nuovo e passa il telefono al giocatore successivo",
            player: "Giocatore",
          },
          en: {
            title: "Find the spy",
            players: "Number of players",
            spies: "Number of spies",
            play_now: "Play now!",
            adv_settings: "Advanced settings",
            options: [
              "Geography",
              "Locations",
              "Nations",
              "Animals",
              "Jobs",
              "Objects",
            ],
            topic: "Topics",
            spy: "You're the spy!",
            tap: "Tap to draw a card",
            play: "Game on!",
            nextPlayer: "Tap again and give the phone to the next player",
            player: "Player",
          },
          fr: {
            title: "Découvrir l'espion",
            players: "Nombre de joueurs",
            spies: "Nombre d'espions",
            play_now: "Jouer maintenant!",
            adv_settings: "Paramètres avancés",
            options: [
              "Géographie",
              "Lieux",
              "Nations",
              "Animaux",
              "Emplois",
              "Objets",
            ],
            topic: "Sujets",
            spy: "Vous êtes l'espion!",
            tap: "Tapez pour tirer une carte",
            play: "C'est parti!",
            nextPlayer:
              "Tapez à nouveau et passez le téléphone au joueur suivant",
            player: "Joueur",
          },
          es: {
            title: "Descubra al espía",
            players: "Número de jugadores",
            spies: "Número de espías",
            play_now: "Jugar ahora!",
            adv_settings: "Configuración avanzada",
            options: [
              "Geografía",
              "Lugares",
              "Naciones",
              "Animales",
              "Trabajos",
              "Objetos",
            ],
            topic: "Temas",
            spy: "¡Tú eres el espía!",
            tap: "Toca para robar una carta",
            play: "¡A jugar!",
            nextPlayer: "Toca de nuevo y pasa el teléfono al siguiente jugador",
            player: "Jugador",
          },
          de: {
            title: "Finde den Spion",
            players: "Anzahl der Spieler",
            spies: "Anzahl der Spione",
            play_now: "Jetzt spielen!",
            adv_settings: "Erweiterte Einstellungen",
            options: [
              "Geographie",
              "Orte",
              "Nationen",
              "Tiere",
              "Berufe",
              "Objekte",
            ],
            topic: "Themen",
            spy: "Du bist der Spion!",
            tap: "Antippen, um eine Karte zu ziehen",
            play: "Das Spiel läuft!",
            nextPlayer:
              "Tippen Sie erneut und geben Sie das Telefon an den nächsten Spieler weiter",
            player: "Spieler",
          },
        };
      },
      {},
    ],
    GkN2: [
      function (require, module, exports) {
        "use strict";
        var t = require("./array-utils.mjs"),
          r = require("./dom-utils.mjs"),
          e = n(require("../assets/localization/ui.json"));
        function n(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function o(t) {
          return (o =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        function i() {
          i = function () {
            return r;
          };
          var t,
            r = {},
            e = Object.prototype,
            n = e.hasOwnProperty,
            a =
              Object.defineProperty ||
              function (t, r, e) {
                t[r] = e.value;
              },
            u = "function" == typeof Symbol ? Symbol : {},
            c = u.iterator || "@@iterator",
            l = u.asyncIterator || "@@asyncIterator",
            s = u.toStringTag || "@@toStringTag";
          function f(t, r, e) {
            return (
              Object.defineProperty(t, r, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[r]
            );
          }
          try {
            f({}, "");
          } catch (t) {
            f = function (t, r, e) {
              return (t[r] = e);
            };
          }
          function h(t, r, e, n) {
            var o = r && r.prototype instanceof w ? r : w,
              i = Object.create(o.prototype),
              u = new G(n || []);
            return a(i, "_invoke", { value: k(t, e, u) }), i;
          }
          function p(t, r, e) {
            try {
              return { type: "normal", arg: t.call(r, e) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          r.wrap = h;
          var y = "suspendedStart",
            v = "suspendedYield",
            g = "executing",
            m = "completed",
            d = {};
          function w() {}
          function b() {}
          function x() {}
          var L = {};
          f(L, c, function () {
            return this;
          });
          var E = Object.getPrototypeOf,
            S = E && E(E(I([])));
          S && S !== e && n.call(S, c) && (L = S);
          var j = (x.prototype = w.prototype = Object.create(L));
          function O(t) {
            ["next", "throw", "return"].forEach(function (r) {
              f(t, r, function (t) {
                return this._invoke(r, t);
              });
            });
          }
          function _(t, r) {
            function e(i, a, u, c) {
              var l = p(t[i], t, a);
              if ("throw" !== l.type) {
                var s = l.arg,
                  f = s.value;
                return f && "object" == o(f) && n.call(f, "__await")
                  ? r.resolve(f.__await).then(
                      function (t) {
                        e("next", t, u, c);
                      },
                      function (t) {
                        e("throw", t, u, c);
                      },
                    )
                  : r.resolve(f).then(
                      function (t) {
                        (s.value = t), u(s);
                      },
                      function (t) {
                        return e("throw", t, u, c);
                      },
                    );
              }
              c(l.arg);
            }
            var i;
            a(this, "_invoke", {
              value: function (t, n) {
                function o() {
                  return new r(function (r, o) {
                    e(t, n, r, o);
                  });
                }
                return (i = i ? i.then(o, o) : o());
              },
            });
          }
          function k(r, e, n) {
            var o = y;
            return function (i, a) {
              if (o === g) throw new Error("Generator is already running");
              if (o === m) {
                if ("throw" === i) throw a;
                return { value: t, done: !0 };
              }
              for (n.method = i, n.arg = a; ; ) {
                var u = n.delegate;
                if (u) {
                  var c = A(u, n);
                  if (c) {
                    if (c === d) continue;
                    return c;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if (o === y) throw ((o = m), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = g;
                var l = p(r, e, n);
                if ("normal" === l.type) {
                  if (((o = n.done ? m : v), l.arg === d)) continue;
                  return { value: l.arg, done: n.done };
                }
                "throw" === l.type &&
                  ((o = m), (n.method = "throw"), (n.arg = l.arg));
              }
            };
          }
          function A(r, e) {
            var n = e.method,
              o = r.iterator[n];
            if (o === t)
              return (
                (e.delegate = null),
                ("throw" === n &&
                  r.iterator.return &&
                  ((e.method = "return"),
                  (e.arg = t),
                  A(r, e),
                  "throw" === e.method)) ||
                  ("return" !== n &&
                    ((e.method = "throw"),
                    (e.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method",
                    )))),
                d
              );
            var i = p(o, r.iterator, e.arg);
            if ("throw" === i.type)
              return (
                (e.method = "throw"), (e.arg = i.arg), (e.delegate = null), d
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((e[r.resultName] = a.value),
                  (e.next = r.nextLoc),
                  "return" !== e.method && ((e.method = "next"), (e.arg = t)),
                  (e.delegate = null),
                  d)
                : a
              : ((e.method = "throw"),
                (e.arg = new TypeError("iterator result is not an object")),
                (e.delegate = null),
                d);
          }
          function N(t) {
            var r = { tryLoc: t[0] };
            1 in t && (r.catchLoc = t[1]),
              2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])),
              this.tryEntries.push(r);
          }
          function P(t) {
            var r = t.completion || {};
            (r.type = "normal"), delete r.arg, (t.completion = r);
          }
          function G(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(N, this),
              this.reset(!0);
          }
          function I(r) {
            if (r || "" === r) {
              var e = r[c];
              if (e) return e.call(r);
              if ("function" == typeof r.next) return r;
              if (!isNaN(r.length)) {
                var i = -1,
                  a = function e() {
                    for (; ++i < r.length; )
                      if (n.call(r, i))
                        return (e.value = r[i]), (e.done = !1), e;
                    return (e.value = t), (e.done = !0), e;
                  };
                return (a.next = a);
              }
            }
            throw new TypeError(o(r) + " is not iterable");
          }
          return (
            (b.prototype = x),
            a(j, "constructor", { value: x, configurable: !0 }),
            a(x, "constructor", { value: b, configurable: !0 }),
            (b.displayName = f(x, s, "GeneratorFunction")),
            (r.isGeneratorFunction = function (t) {
              var r = "function" == typeof t && t.constructor;
              return (
                !!r &&
                (r === b || "GeneratorFunction" === (r.displayName || r.name))
              );
            }),
            (r.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, x)
                  : ((t.__proto__ = x), f(t, s, "GeneratorFunction")),
                (t.prototype = Object.create(j)),
                t
              );
            }),
            (r.awrap = function (t) {
              return { __await: t };
            }),
            O(_.prototype),
            f(_.prototype, l, function () {
              return this;
            }),
            (r.AsyncIterator = _),
            (r.async = function (t, e, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new _(h(t, e, n, o), i);
              return r.isGeneratorFunction(e)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            O(j),
            f(j, s, "Generator"),
            f(j, c, function () {
              return this;
            }),
            f(j, "toString", function () {
              return "[object Generator]";
            }),
            (r.keys = function (t) {
              var r = Object(t),
                e = [];
              for (var n in r) e.push(n);
              return (
                e.reverse(),
                function t() {
                  for (; e.length; ) {
                    var n = e.pop();
                    if (n in r) return (t.value = n), (t.done = !1), t;
                  }
                  return (t.done = !0), t;
                }
              );
            }),
            (r.values = I),
            (G.prototype = {
              constructor: G,
              reset: function (r) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(P),
                  !r)
                )
                  for (var e in this)
                    "t" === e.charAt(0) &&
                      n.call(this, e) &&
                      !isNaN(+e.slice(1)) &&
                      (this[e] = t);
              },
              stop: function () {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (r) {
                if (this.done) throw r;
                var e = this;
                function o(n, o) {
                  return (
                    (u.type = "throw"),
                    (u.arg = r),
                    (e.next = n),
                    o && ((e.method = "next"), (e.arg = t)),
                    !!o
                  );
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var a = this.tryEntries[i],
                    u = a.completion;
                  if ("root" === a.tryLoc) return o("end");
                  if (a.tryLoc <= this.prev) {
                    var c = n.call(a, "catchLoc"),
                      l = n.call(a, "finallyLoc");
                    if (c && l) {
                      if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                      if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                    } else if (c) {
                      if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    } else {
                      if (!l)
                        throw new Error(
                          "try statement without catch or finally",
                        );
                      if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (t, r) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var o = this.tryEntries[e];
                  if (
                    o.tryLoc <= this.prev &&
                    n.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var i = o;
                    break;
                  }
                }
                i &&
                  ("break" === t || "continue" === t) &&
                  i.tryLoc <= r &&
                  r <= i.finallyLoc &&
                  (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = t),
                  (a.arg = r),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), d)
                    : this.complete(a)
                );
              },
              complete: function (t, r) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && r && (this.next = r),
                  d
                );
              },
              finish: function (t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var e = this.tryEntries[r];
                  if (e.finallyLoc === t)
                    return this.complete(e.completion, e.afterLoc), P(e), d;
                }
              },
              catch: function (t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var e = this.tryEntries[r];
                  if (e.tryLoc === t) {
                    var n = e.completion;
                    if ("throw" === n.type) {
                      var o = n.arg;
                      P(e);
                    }
                    return o;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (r, e, n) {
                return (
                  (this.delegate = {
                    iterator: I(r),
                    resultName: e,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = t),
                  d
                );
              },
            }),
            r
          );
        }
        function a(t) {
          return s(t) || l(t) || c(t) || u();
        }
        function u() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        }
        function c(t, r) {
          if (t) {
            if ("string" == typeof t) return f(t, r);
            var e = Object.prototype.toString.call(t).slice(8, -1);
            return (
              "Object" === e && t.constructor && (e = t.constructor.name),
              "Map" === e || "Set" === e
                ? Array.from(t)
                : "Arguments" === e ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
                ? f(t, r)
                : void 0
            );
          }
        }
        function l(t) {
          if (
            ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
            null != t["@@iterator"]
          )
            return Array.from(t);
        }
        function s(t) {
          if (Array.isArray(t)) return f(t);
        }
        function f(t, r) {
          (null == r || r > t.length) && (r = t.length);
          for (var e = 0, n = new Array(r); e < r; e++) n[e] = t[e];
          return n;
        }
        function h(t, r, e, n, o, i, a) {
          try {
            var u = t[i](a),
              c = u.value;
          } catch (l) {
            return void e(l);
          }
          u.done ? r(c) : Promise.resolve(c).then(n, o);
        }
        function p(t) {
          return function () {
            var r = this,
              e = arguments;
            return new Promise(function (n, o) {
              var i = t.apply(r, e);
              function a(t) {
                h(i, n, o, a, u, "next", t);
              }
              function u(t) {
                h(i, n, o, a, u, "throw", t);
              }
              a(void 0);
            });
          };
        }
        var y = { 0: "geo", 1: "loc", 2: "nat", 3: "anm", 4: "job", 5: "obj" },
          v = (function () {
            var n = p(
              i().mark(function n() {
                var o, u, c, l, s, f;
                return i().wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          ((o = JSON.parse(localStorage.getItem("payload"))) &&
                            null != o &&
                            o.gameSettings.playersCount &&
                            null != o &&
                            o.gameSettings.spiesCount &&
                            null != o &&
                            o.gameSettings.topics &&
                            null != o &&
                            o.lang) ||
                            (window.location.href = "/index.html"),
                          (u = e.default[o.lang]),
                          (n.next = 5),
                          fetch(
                            "assets/localization/assets.".concat(
                              o.lang,
                              ".json",
                            ),
                          ).then(function (t) {
                            return t.json();
                          })
                        );
                      case 5:
                        (c = n.sent),
                          (l = []),
                          o.gameSettings.topics.forEach(function (t) {
                            var r,
                              e = y[t];
                            l = (r = l).concat.apply(r, a(c[e]));
                          }),
                          (s = (0, t.extractRandomElementFrom)(l)),
                          (f = g(
                            o.gameSettings.playersCount,
                            o.gameSettings.spiesCount,
                            s,
                            u.spy,
                          )),
                          (0, r.initializeDom)(u, o, f);
                      case 11:
                      case "end":
                        return n.stop();
                    }
                }, n);
              }),
            );
            return function () {
              return n.apply(this, arguments);
            };
          })();
        function g(r, e, n, o) {
          for (var i = [], a = 0; a < r - e; a++) i.push(n);
          for (var u = 0; u < e; u++) i.push(o);
          return (0, t.shuffle)(i), i;
        }
        window.onload = v;
      },
      {
        "./array-utils.mjs": "Fy3d",
        "./dom-utils.mjs": "bW6F",
        "../assets/localization/ui.json": "eTl0",
      },
    ],
  },
  {},
  ["GkN2"],
  null,
);
//# sourceMappingURL=/play.2885f5ed.js.map
