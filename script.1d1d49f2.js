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
    xYNa: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.localizeUI = n);
        var e = t(require("../assets/localization/ui.json"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function n(t) {
          if (e.default) {
            var n = e.default[t];
            (document.querySelector("#title").innerHTML = n.title),
              (document.querySelector("#number_of_players").innerHTML =
                n.players),
              (document.querySelector("#number_of_spies").innerHTML = n.spies),
              (document.querySelector("#adv_settings").innerHTML =
                n.adv_settings),
              (document.querySelector("#play_now").innerHTML = n.play_now),
              r(n.options, n.topic);
          }
        }
        function r(e, t) {
          var n = document.createElement("fieldset"),
            r = document.createElement("legend");
          (r.innerHTML = t),
            n.appendChild(r),
            e.forEach(function (e, t) {
              var r = document.createElement("div"),
                o = document.createElement("input");
              (o.name = e),
                (o.id = e.toLowerCase()),
                (o.type = "checkbox"),
                (o.value = t);
              var i = document.createElement("label");
              (i.innerText = e),
                i.setAttribute("for", e.toLowerCase()),
                r.appendChild(o),
                r.appendChild(i),
                n.appendChild(r);
            }),
            (document.querySelector("#options").innerHTML = ""),
            document.querySelector("#options").appendChild(n),
            document.querySelector("#wrapper").classList.add("hydrated");
        }
      },
      { "../assets/localization/ui.json": "eTl0" },
    ],
    qkFJ: [
      function (require, module, exports) {
        "use strict";
        var t = require("./localize_ui.mjs");
        function e(t) {
          return (e =
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
        function r() {
          r = function () {
            return n;
          };
          var t,
            n = {},
            o = Object.prototype,
            i = o.hasOwnProperty,
            a =
              Object.defineProperty ||
              function (t, e, r) {
                t[e] = r.value;
              },
            c = "function" == typeof Symbol ? Symbol : {},
            u = c.iterator || "@@iterator",
            l = c.asyncIterator || "@@asyncIterator",
            s = c.toStringTag || "@@toStringTag";
          function f(t, e, r) {
            return (
              Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            f({}, "");
          } catch (t) {
            f = function (t, e, r) {
              return (t[e] = r);
            };
          }
          function h(t, e, r, n) {
            var o = e && e.prototype instanceof w ? e : w,
              i = Object.create(o.prototype),
              c = new P(n || []);
            return a(i, "_invoke", { value: j(t, r, c) }), i;
          }
          function p(t, e, r) {
            try {
              return { type: "normal", arg: t.call(e, r) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          n.wrap = h;
          var y = "suspendedStart",
            v = "suspendedYield",
            d = "executing",
            m = "completed",
            g = {};
          function w() {}
          function b() {}
          function S() {}
          var L = {};
          f(L, u, function () {
            return this;
          });
          var x = Object.getPrototypeOf,
            E = x && x(x(A([])));
          E && E !== o && i.call(E, u) && (L = E);
          var _ = (S.prototype = w.prototype = Object.create(L));
          function O(t) {
            ["next", "throw", "return"].forEach(function (e) {
              f(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function k(t, r) {
            function n(o, a, c, u) {
              var l = p(t[o], t, a);
              if ("throw" !== l.type) {
                var s = l.arg,
                  f = s.value;
                return f && "object" == e(f) && i.call(f, "__await")
                  ? r.resolve(f.__await).then(
                      function (t) {
                        n("next", t, c, u);
                      },
                      function (t) {
                        n("throw", t, c, u);
                      },
                    )
                  : r.resolve(f).then(
                      function (t) {
                        (s.value = t), c(s);
                      },
                      function (t) {
                        return n("throw", t, c, u);
                      },
                    );
              }
              u(l.arg);
            }
            var o;
            a(this, "_invoke", {
              value: function (t, e) {
                function i() {
                  return new r(function (r, o) {
                    n(t, e, r, o);
                  });
                }
                return (o = o ? o.then(i, i) : i());
              },
            });
          }
          function j(e, r, n) {
            var o = y;
            return function (i, a) {
              if (o === d) throw new Error("Generator is already running");
              if (o === m) {
                if ("throw" === i) throw a;
                return { value: t, done: !0 };
              }
              for (n.method = i, n.arg = a; ; ) {
                var c = n.delegate;
                if (c) {
                  var u = I(c, n);
                  if (u) {
                    if (u === g) continue;
                    return u;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if (o === y) throw ((o = m), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = d;
                var l = p(e, r, n);
                if ("normal" === l.type) {
                  if (((o = n.done ? m : v), l.arg === g)) continue;
                  return { value: l.arg, done: n.done };
                }
                "throw" === l.type &&
                  ((o = m), (n.method = "throw"), (n.arg = l.arg));
              }
            };
          }
          function I(e, r) {
            var n = r.method,
              o = e.iterator[n];
            if (o === t)
              return (
                (r.delegate = null),
                ("throw" === n &&
                  e.iterator.return &&
                  ((r.method = "return"),
                  (r.arg = t),
                  I(e, r),
                  "throw" === r.method)) ||
                  ("return" !== n &&
                    ((r.method = "throw"),
                    (r.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method",
                    )))),
                g
              );
            var i = p(o, e.iterator, r.arg);
            if ("throw" === i.type)
              return (
                (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), g
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((r[e.resultName] = a.value),
                  (r.next = e.nextLoc),
                  "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                  (r.delegate = null),
                  g)
                : a
              : ((r.method = "throw"),
                (r.arg = new TypeError("iterator result is not an object")),
                (r.delegate = null),
                g);
          }
          function q(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function N(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function P(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(q, this),
              this.reset(!0);
          }
          function A(r) {
            if (r || "" === r) {
              var n = r[u];
              if (n) return n.call(r);
              if ("function" == typeof r.next) return r;
              if (!isNaN(r.length)) {
                var o = -1,
                  a = function e() {
                    for (; ++o < r.length; )
                      if (i.call(r, o))
                        return (e.value = r[o]), (e.done = !1), e;
                    return (e.value = t), (e.done = !0), e;
                  };
                return (a.next = a);
              }
            }
            throw new TypeError(e(r) + " is not iterable");
          }
          return (
            (b.prototype = S),
            a(_, "constructor", { value: S, configurable: !0 }),
            a(S, "constructor", { value: b, configurable: !0 }),
            (b.displayName = f(S, s, "GeneratorFunction")),
            (n.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return (
                !!e &&
                (e === b || "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (n.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, S)
                  : ((t.__proto__ = S), f(t, s, "GeneratorFunction")),
                (t.prototype = Object.create(_)),
                t
              );
            }),
            (n.awrap = function (t) {
              return { __await: t };
            }),
            O(k.prototype),
            f(k.prototype, l, function () {
              return this;
            }),
            (n.AsyncIterator = k),
            (n.async = function (t, e, r, o, i) {
              void 0 === i && (i = Promise);
              var a = new k(h(t, e, r, o), i);
              return n.isGeneratorFunction(e)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            O(_),
            f(_, s, "Generator"),
            f(_, u, function () {
              return this;
            }),
            f(_, "toString", function () {
              return "[object Generator]";
            }),
            (n.keys = function (t) {
              var e = Object(t),
                r = [];
              for (var n in e) r.push(n);
              return (
                r.reverse(),
                function t() {
                  for (; r.length; ) {
                    var n = r.pop();
                    if (n in e) return (t.value = n), (t.done = !1), t;
                  }
                  return (t.done = !0), t;
                }
              );
            }),
            (n.values = A),
            (P.prototype = {
              constructor: P,
              reset: function (e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(N),
                  !e)
                )
                  for (var r in this)
                    "t" === r.charAt(0) &&
                      i.call(this, r) &&
                      !isNaN(+r.slice(1)) &&
                      (this[r] = t);
              },
              stop: function () {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (e) {
                if (this.done) throw e;
                var r = this;
                function n(n, o) {
                  return (
                    (c.type = "throw"),
                    (c.arg = e),
                    (r.next = n),
                    o && ((r.method = "next"), (r.arg = t)),
                    !!o
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var a = this.tryEntries[o],
                    c = a.completion;
                  if ("root" === a.tryLoc) return n("end");
                  if (a.tryLoc <= this.prev) {
                    var u = i.call(a, "catchLoc"),
                      l = i.call(a, "finallyLoc");
                    if (u && l) {
                      if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                      if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                    } else if (u) {
                      if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                    } else {
                      if (!l)
                        throw new Error(
                          "try statement without catch or finally",
                        );
                      if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var n = this.tryEntries[r];
                  if (
                    n.tryLoc <= this.prev &&
                    i.call(n, "finallyLoc") &&
                    this.prev < n.finallyLoc
                  ) {
                    var o = n;
                    break;
                  }
                }
                o &&
                  ("break" === t || "continue" === t) &&
                  o.tryLoc <= e &&
                  e <= o.finallyLoc &&
                  (o = null);
                var a = o ? o.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  o
                    ? ((this.method = "next"), (this.next = o.finallyLoc), g)
                    : this.complete(a)
                );
              },
              complete: function (t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                  g
                );
              },
              finish: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.finallyLoc === t)
                    return this.complete(r.completion, r.afterLoc), N(r), g;
                }
              },
              catch: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                      var o = n.arg;
                      N(r);
                    }
                    return o;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (e, r, n) {
                return (
                  (this.delegate = {
                    iterator: A(e),
                    resultName: r,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = t),
                  g
                );
              },
            }),
            n
          );
        }
        function n(t, e, r, n, o, i, a) {
          try {
            var c = t[i](a),
              u = c.value;
          } catch (l) {
            return void r(l);
          }
          c.done ? e(u) : Promise.resolve(u).then(n, o);
        }
        function o(t) {
          return function () {
            var e = this,
              r = arguments;
            return new Promise(function (o, i) {
              var a = t.apply(e, r);
              function c(t) {
                n(a, o, i, c, u, "next", t);
              }
              function u(t) {
                n(a, o, i, c, u, "throw", t);
              }
              c(void 0);
            });
          };
        }
        function i() {
          var t = JSON.parse(localStorage.getItem("topics"));
          t ||
            ((t = [0, 1]),
            localStorage.setItem("topics", JSON.stringify([0, 1]))),
            (t = t.map(function (t) {
              return parseInt(t);
            })),
            Array.from(
              document.querySelector("#options").querySelectorAll("input"),
            ).forEach(function (e, r) {
              t.includes(r) && (e.checked = !0);
            });
        }
        function a(t) {
          var e = Array.from(
              document.querySelector("#options").querySelectorAll(":checked"),
            ).map(function (t) {
              return t.value;
            }),
            r = {
              lang: document
                .querySelector("#lang_selector")
                .querySelector(":checked").value,
              gameSettings: {
                playersCount: parseInt(t.players_count.value),
                spiesCount: parseInt(t.spy_count.value),
                topics: e,
              },
            };
          localStorage.setItem("payload", JSON.stringify(r)),
            (window.location.href = "play.html");
        }
        window.addEventListener(
          "load",
          o(
            r().mark(function e() {
              var n;
              return r().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      document.querySelector("#lang_selector").addEventListener(
                        "input",
                        (function () {
                          var e = o(
                            r().mark(function e(n) {
                              return r().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      (0, t.localizeUI)(n.target.value),
                                        localStorage.setItem(
                                          "lang",
                                          n.target.value,
                                        ),
                                        i();
                                    case 3:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            }),
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      ),
                        document
                          .querySelector("#options")
                          .addEventListener("input", function () {
                            var t = Array.from(
                              document
                                .querySelector("#options")
                                .querySelectorAll(":checked"),
                            ).map(function (t) {
                              return t.value;
                            });
                            localStorage.setItem("topics", JSON.stringify(t));
                          }),
                        (n = localStorage.getItem("lang")),
                        (window.formSubmit = a),
                        (0, t.localizeUI)(n || "en"),
                        (document.querySelector("#" + (n || "en")).checked =
                          !0),
                        i();
                    case 9:
                    case "end":
                      return e.stop();
                  }
              }, e);
            }),
          ),
        );
      },
      { "./localize_ui.mjs": "xYNa" },
    ],
  },
  {},
  ["qkFJ"],
  null,
);
//# sourceMappingURL=script.1d1d49f2.js.map
