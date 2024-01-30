import { computed as d, markRaw as Ll, defineComponent as st, getCurrentInstance as te, h as g, ref as R, withDirectives as kn, provide as Ol, onDeactivated as bt, onActivated as qn, onMounted as yt, nextTick as pe, watch as J, openBlock as ne, createBlock as ve, unref as He, withCtx as ee, renderSlot as tn, resolveDynamicComponent as Rt, createElementVNode as De, createElementBlock as _e, Fragment as Ot, renderList as fn, normalizeClass as At, mergeProps as ut, toHandlers as Oo, createVNode as le, createCommentVNode as Ce, toRaw as ze, reactive as Po, inject as Ro, onBeforeUnmount as de, onBeforeUpdate as Pl, Transition as Qe, onUnmounted as Ao, Teleport as Mo, onBeforeMount as Fo, onUpdated as zo, createTextVNode as ot, toDisplayString as ht, shallowRef as Ho, normalizeProps as Io, guardReactiveProps as Do } from "vue";
import Jn from "lodash.set";
import Zn from "lodash.get";
const Be = {
  dark: {
    type: Boolean,
    default: null
  }
};
function Ve(e, t) {
  return d(() => e.dark === null ? t.dark.isActive : e.dark);
}
const ie = (e) => Ll(st(e)), Rl = (e) => Ll(e), jo = {
  true: "inset",
  item: "item-inset",
  "item-thumbnail": "item-thumbnail-inset"
}, nn = {
  xs: 2,
  sm: 4,
  md: 8,
  lg: 16,
  xl: 24
}, vn = ie({
  name: "QSeparator",
  props: {
    ...Be,
    spaced: [Boolean, String],
    inset: [Boolean, String],
    vertical: Boolean,
    color: String,
    size: String
  },
  setup(e) {
    const t = te(), n = Ve(e, t.proxy.$q), l = d(() => e.vertical === !0 ? "vertical" : "horizontal"), o = d(() => ` q-separator--${l.value}`), i = d(() => e.inset !== !1 ? `${o.value}-${jo[e.inset]}` : ""), u = d(
      () => `q-separator${o.value}${i.value}` + (e.color !== void 0 ? ` bg-${e.color}` : "") + (n.value === !0 ? " q-separator--dark" : "")
    ), r = d(() => {
      const f = {};
      if (e.size !== void 0 && (f[e.vertical === !0 ? "width" : "height"] = e.size), e.spaced !== !1) {
        const h = e.spaced === !0 ? `${nn.md}px` : e.spaced in nn ? `${nn[e.spaced]}px` : e.spaced, s = e.vertical === !0 ? ["Left", "Right"] : ["Top", "Bottom"];
        f[`margin${s[0]}`] = f[`margin${s[1]}`] = h;
      }
      return f;
    });
    return () => g("hr", {
      class: u.value,
      style: r.value,
      "aria-orientation": l.value
    });
  }
}), No = (e) => JSON.parse(JSON.stringify(e)), Wo = (e) => {
  const t = R(e), n = R({}), l = window.structuredClone(No(e)), o = d(() => Object.values(n.value)), i = (f) => {
    t.value = { ...f };
  };
  return i(e), {
    formData: t,
    fieldError: n,
    fieldErrorTexts: o,
    resetDefaultForm: () => {
      i(window.structuredClone(l));
    },
    validateForm: (f) => {
      n.value = {};
      const h = f.safeParse(t.value);
      return h.success ? (i(h.data), !0) : (n.value = h.error.errors.reduce(
        (s, b) => (s[b.path.join(".")] = b.message, s),
        {}
      ), !1);
    },
    setFormData: i
  };
}, be = {
  hasPassive: !1,
  passiveCapture: !0,
  notPassiveCapture: !0
};
try {
  const e = Object.defineProperty({}, "passive", {
    get() {
      Object.assign(be, {
        hasPassive: !0,
        passive: { passive: !0 },
        notPassive: { passive: !1 },
        passiveCapture: { passive: !0, capture: !0 },
        notPassiveCapture: { passive: !1, capture: !0 }
      });
    }
  });
  window.addEventListener("qtest", null, e), window.removeEventListener("qtest", null, e);
} catch {
}
function Ko() {
}
function Al(e) {
  return e.touches && e.touches[0] ? e = e.touches[0] : e.changedTouches && e.changedTouches[0] ? e = e.changedTouches[0] : e.targetTouches && e.targetTouches[0] && (e = e.targetTouches[0]), {
    top: e.clientY,
    left: e.clientX
  };
}
function Qo(e) {
  if (e.path)
    return e.path;
  if (e.composedPath)
    return e.composedPath();
  const t = [];
  let n = e.target;
  for (; n; ) {
    if (t.push(n), n.tagName === "HTML")
      return t.push(document), t.push(window), t;
    n = n.parentElement;
  }
}
function Te(e) {
  e.stopPropagation();
}
function ke(e) {
  e.cancelable !== !1 && e.preventDefault();
}
function oe(e) {
  e.cancelable !== !1 && e.preventDefault(), e.stopPropagation();
}
function gt(e, t, n) {
  const l = `__q_${t}_evt`;
  e[l] = e[l] !== void 0 ? e[l].concat(n) : n, n.forEach((o) => {
    o[0].addEventListener(o[1], e[o[2]], be[o[3]]);
  });
}
function Mt(e, t) {
  const n = `__q_${t}_evt`;
  e[n] !== void 0 && (e[n].forEach((l) => {
    l[0].removeEventListener(l[1], e[l[2]], be[l[3]]);
  }), e[n] = void 0);
}
let Ie = [], pt = [];
function Ml(e) {
  pt = pt.filter((t) => t !== e);
}
function Uo(e) {
  Ml(e), pt.push(e);
}
function el(e) {
  Ml(e), pt.length === 0 && Ie.length !== 0 && (Ie[Ie.length - 1](), Ie = []);
}
function Ut(e) {
  pt.length === 0 ? e() : Ie.push(e);
}
function Xo(e) {
  Ie = Ie.filter((t) => t !== e);
}
function me(e, t) {
  return e !== void 0 && e() || t;
}
function Yo(e, t) {
  if (e !== void 0) {
    const n = e();
    if (n != null)
      return n.slice();
  }
  return t;
}
function Ee(e, t) {
  return e !== void 0 ? t.concat(e()) : t;
}
function Go(e, t) {
  return e === void 0 ? t : t !== void 0 ? t.concat(e()) : e();
}
function Jo(e, t, n, l, o, i) {
  t.key = l + o;
  const u = g(e, t, n);
  return o === !0 ? kn(u, i()) : u;
}
const Fl = "_q_fo_";
function Pt(e) {
  if (Object(e.$parent) === e.$parent)
    return e.$parent;
  let { parent: t } = e.$;
  for (; Object(t) === t; ) {
    if (Object(t.proxy) === t.proxy)
      return t.proxy;
    t = t.parent;
  }
}
function zl(e) {
  return e.appContext.config.globalProperties.$router !== void 0;
}
function Cn(e) {
  return e.isUnmounted === !0 || e.isDeactivated === !0;
}
const Zo = ie({
  name: "QForm",
  props: {
    autofocus: Boolean,
    noErrorFocus: Boolean,
    noResetFocus: Boolean,
    greedy: Boolean,
    onSubmit: Function
  },
  emits: ["reset", "validationSuccess", "validationError"],
  setup(e, { slots: t, emit: n }) {
    const l = te(), o = R(null);
    let i = 0;
    const u = [];
    function r(c) {
      const m = typeof c == "boolean" ? c : e.noErrorFocus !== !0, y = ++i, p = (w, q) => {
        n("validation" + (w === !0 ? "Success" : "Error"), q);
      }, S = (w) => {
        const q = w.validate();
        return typeof q.then == "function" ? q.then(
          (x) => ({ valid: x, comp: w }),
          (x) => ({ valid: !1, comp: w, err: x })
        ) : Promise.resolve({ valid: q, comp: w });
      };
      return (e.greedy === !0 ? Promise.all(u.map(S)).then((w) => w.filter((q) => q.valid !== !0)) : u.reduce(
        (w, q) => w.then(() => S(q).then((x) => {
          if (x.valid === !1)
            return Promise.reject(x);
        })),
        Promise.resolve()
      ).catch((w) => [w])).then((w) => {
        if (w === void 0 || w.length === 0)
          return y === i && p(!0), !0;
        if (y === i) {
          const { comp: q, err: x } = w[0];
          if (x !== void 0 && console.error(x), p(!1, q), m === !0) {
            const M = w.find(({ comp: O }) => typeof O.focus == "function" && Cn(O.$) === !1);
            M !== void 0 && M.comp.focus();
          }
        }
        return !1;
      });
    }
    function f() {
      i++, u.forEach((c) => {
        typeof c.resetValidation == "function" && c.resetValidation();
      });
    }
    function h(c) {
      c !== void 0 && oe(c);
      const m = i + 1;
      r().then((y) => {
        m === i && y === !0 && (e.onSubmit !== void 0 ? n("submit", c) : c !== void 0 && c.target !== void 0 && typeof c.target.submit == "function" && c.target.submit());
      });
    }
    function s(c) {
      c !== void 0 && oe(c), n("reset"), pe(() => {
        f(), e.autofocus === !0 && e.noResetFocus !== !0 && b();
      });
    }
    function b() {
      Ut(() => {
        if (o.value === null)
          return;
        const c = o.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || o.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || o.value.querySelector("[autofocus], [data-autofocus]") || Array.prototype.find.call(o.value.querySelectorAll("[tabindex]"), (m) => m.tabIndex > -1);
        c != null && c.focus({ preventScroll: !0 });
      });
    }
    Ol(Fl, {
      bindComponent(c) {
        u.push(c);
      },
      unbindComponent(c) {
        const m = u.indexOf(c);
        m > -1 && u.splice(m, 1);
      }
    });
    let v = !1;
    return bt(() => {
      v = !0;
    }), qn(() => {
      v === !0 && e.autofocus === !0 && b();
    }), yt(() => {
      e.autofocus === !0 && b();
    }), Object.assign(l.proxy, {
      validate: r,
      resetValidation: f,
      submit: h,
      reset: s,
      focus: b,
      getValidationComponents: () => u
    }), () => g("form", {
      class: "q-form",
      ref: o,
      onSubmit: h,
      onReset: s
    }, me(t.default));
  }
}), ei = {
  class: /* @__PURE__ */ At("row q-col-gutter-md")
}, ti = { class: "col" }, ni = {
  key: 0,
  class: "col-auto flex"
}, su = /* @__PURE__ */ st({
  __name: "AppForm",
  props: {
    modelSchema: {},
    schema: {},
    readonly: { type: Boolean, default: () => !1 },
    disable: { type: Boolean, default: () => !1 },
    loading: { type: Boolean, default: () => !1 },
    fieldWrapper: { default: () => "div" },
    colGutter: { default: () => "sm" },
    modelValue: {}
  },
  emits: [
    "submit",
    "update:modelValue",
    "reset",
    "close",
    "error"
  ],
  setup(e, { emit: t }) {
    const n = e, l = R(), o = R(!1), i = Math.max(...n.schema.map((S) => S.column || 1)), u = (S = {}, k) => {
      for (const w of k) {
        const q = Zn(
          S,
          w.scope,
          w != null && w.transform ? w == null ? void 0 : w.transform(w.defaultValue) : w.defaultValue
        );
        Jn(S, w.scope, q);
      }
      return S;
    }, { resetDefaultForm: r, validateForm: f, formData: h, fieldError: s } = Wo(
      u(n.modelValue, n.schema)
    );
    J(
      s,
      (S) => {
        t("error", S);
      },
      {
        deep: !0
      }
    ), J(
      h,
      (S) => {
        t("update:modelValue", S);
      },
      {
        deep: !0,
        immediate: !0
      }
    );
    const b = (S) => Zn(h.value, S), v = (S, k) => {
      Jn(
        h.value,
        k.scope,
        k != null && k.transform ? k == null ? void 0 : k.transform(S) : S
      ), o.value && f(n.modelSchema);
    }, c = () => {
      o.value = !0, f(n.modelSchema), f(n.modelSchema) && t("submit", ze(h.value));
    }, m = () => {
      var S;
      r(), (S = l.value) == null || S.resetValidation(), t("reset");
    }, y = () => f(n.modelSchema), p = d(() => (S) => {
      var k, w, q;
      return {
        bind: {
          ...S.componentProps || {},
          readonly: ((k = S.componentProps) == null ? void 0 : k.readonly) || ((w = S.componentProps) == null ? void 0 : w.readonly),
          disable: ((q = S.componentProps) == null ? void 0 : q.disable) || n.disable,
          modelValue: b(S.scope),
          error: !!s.value[S.scope],
          errorMessage: s.value[S.scope] || ""
        },
        on: {
          "update:modelValue": (x) => v(x, S)
        }
      };
    });
    return (S, k) => (ne(), ve(He(Zo), {
      onValidationError: y,
      onSubmit: c,
      greedy: "",
      onReset: m,
      ref_key: "form",
      ref: l
    }, {
      default: ee(() => [
        tn(S.$slots, "top"),
        (ne(), ve(Rt(S.fieldWrapper), null, {
          default: ee(() => [
            De("div", ei, [
              (ne(!0), _e(Ot, null, fn(He(i), (w) => (ne(), _e(Ot, { key: w }, [
                De("div", ti, [
                  De("div", {
                    class: At(`row q-col-gutter-${S.colGutter}`)
                  }, [
                    (ne(!0), _e(Ot, null, fn(S.schema.filter((q) => {
                      const x = q.column || 1;
                      return x > He(i) ? w === 1 : x === w;
                    }), (q) => (ne(), _e("div", {
                      key: q.scope,
                      class: At(`col-${q.cols || "auto"}`)
                    }, [
                      tn(S.$slots, q.scope, {
                        props: {
                          setterScope: v,
                          getterScope: b,
                          scope: q.scope,
                          ...p.value(q)
                        }
                      }, () => [
                        (ne(), ve(Rt(q.component), ut(p.value(q).bind, Oo(p.value(q).on)), null, 16))
                      ])
                    ], 2))), 128))
                  ], 2)
                ]),
                w !== He(i) ? (ne(), _e("div", ni, [
                  le(vn, { vertical: "" })
                ])) : Ce("", !0)
              ], 64))), 128))
            ])
          ]),
          _: 3
        })),
        tn(S.$slots, "bottom")
      ]),
      _: 3
    }, 512));
  }
}), mn = {
  xs: 18,
  sm: 24,
  md: 32,
  lg: 38,
  xl: 46
}, wt = {
  size: String
};
function St(e, t = mn) {
  return d(() => e.size !== void 0 ? { fontSize: e.size in t ? `${t[e.size]}px` : e.size } : null);
}
const tl = "0 0 24 24", nl = (e) => e, ln = (e) => `ionicons ${e}`, Hl = {
  "mdi-": (e) => `mdi ${e}`,
  "icon-": nl,
  // fontawesome equiv
  "bt-": (e) => `bt ${e}`,
  "eva-": (e) => `eva ${e}`,
  "ion-md": ln,
  "ion-ios": ln,
  "ion-logo": ln,
  "iconfont ": nl,
  "ti-": (e) => `themify-icon ${e}`,
  "bi-": (e) => `bootstrap-icons ${e}`
}, Il = {
  o_: "-outlined",
  r_: "-round",
  s_: "-sharp"
}, Dl = {
  sym_o_: "-outlined",
  sym_r_: "-rounded",
  sym_s_: "-sharp"
}, li = new RegExp("^(" + Object.keys(Hl).join("|") + ")"), oi = new RegExp("^(" + Object.keys(Il).join("|") + ")"), ll = new RegExp("^(" + Object.keys(Dl).join("|") + ")"), ii = /^[Mm]\s?[-+]?\.?\d/, ai = /^img:/, ui = /^svguse:/, ri = /^ion-/, si = /^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /, Se = ie({
  name: "QIcon",
  props: {
    ...wt,
    tag: {
      type: String,
      default: "i"
    },
    name: String,
    color: String,
    left: Boolean,
    right: Boolean
  },
  setup(e, { slots: t }) {
    const { proxy: { $q: n } } = te(), l = St(e), o = d(
      () => "q-icon" + (e.left === !0 ? " on-left" : "") + (e.right === !0 ? " on-right" : "") + (e.color !== void 0 ? ` text-${e.color}` : "")
    ), i = d(() => {
      let u, r = e.name;
      if (r === "none" || !r)
        return { none: !0 };
      if (n.iconMapFn !== null) {
        const s = n.iconMapFn(r);
        if (s !== void 0)
          if (s.icon !== void 0) {
            if (r = s.icon, r === "none" || !r)
              return { none: !0 };
          } else
            return {
              cls: s.cls,
              content: s.content !== void 0 ? s.content : " "
            };
      }
      if (ii.test(r) === !0) {
        const [s, b = tl] = r.split("|");
        return {
          svg: !0,
          viewBox: b,
          nodes: s.split("&&").map((v) => {
            const [c, m, y] = v.split("@@");
            return g("path", { style: m, d: c, transform: y });
          })
        };
      }
      if (ai.test(r) === !0)
        return {
          img: !0,
          src: r.substring(4)
        };
      if (ui.test(r) === !0) {
        const [s, b = tl] = r.split("|");
        return {
          svguse: !0,
          src: s.substring(7),
          viewBox: b
        };
      }
      let f = " ";
      const h = r.match(li);
      if (h !== null)
        u = Hl[h[1]](r);
      else if (si.test(r) === !0)
        u = r;
      else if (ri.test(r) === !0)
        u = `ionicons ion-${n.platform.is.ios === !0 ? "ios" : "md"}${r.substring(3)}`;
      else if (ll.test(r) === !0) {
        u = "notranslate material-symbols";
        const s = r.match(ll);
        s !== null && (r = r.substring(6), u += Dl[s[1]]), f = r;
      } else {
        u = "notranslate material-icons";
        const s = r.match(oi);
        s !== null && (r = r.substring(2), u += Il[s[1]]), f = r;
      }
      return {
        cls: u,
        content: f
      };
    });
    return () => {
      const u = {
        class: o.value,
        style: l.value,
        "aria-hidden": "true",
        role: "presentation"
      };
      return i.value.none === !0 ? g(e.tag, u, me(t.default)) : i.value.img === !0 ? g("span", u, Ee(t.default, [
        g("img", { src: i.value.src })
      ])) : i.value.svg === !0 ? g("span", u, Ee(t.default, [
        g("svg", {
          viewBox: i.value.viewBox || "0 0 24 24"
        }, i.value.nodes)
      ])) : i.value.svguse === !0 ? g("span", u, Ee(t.default, [
        g("svg", {
          viewBox: i.value.viewBox
        }, [
          g("use", { "xlink:href": i.value.src })
        ])
      ])) : (i.value.cls !== void 0 && (u.class += " " + i.value.cls), g(e.tag, u, Ee(t.default, [
        i.value.content
      ])));
    };
  }
});
function ci(e, t) {
  const n = R(null), l = d(() => e.disable === !0 ? null : g("span", {
    ref: n,
    class: "no-outline",
    tabindex: -1
  }));
  function o(i) {
    const u = t.value;
    i !== void 0 && i.type.indexOf("key") === 0 ? u !== null && document.activeElement !== u && u.contains(document.activeElement) === !0 && u.focus() : n.value !== null && (i === void 0 || u !== null && u.contains(i.target) === !0) && n.value.focus();
  }
  return {
    refocusTargetEl: l,
    refocusTarget: o
  };
}
const jl = {
  name: String
};
function di(e = {}) {
  return (t, n, l) => {
    t[n](
      g("input", {
        class: "hidden" + (l || ""),
        ...e.value
      })
    );
  };
}
function fi(e) {
  return d(() => e.name || e.for);
}
const vi = {
  xs: 30,
  sm: 35,
  md: 40,
  lg: 50,
  xl: 60
}, mi = {
  ...Be,
  ...wt,
  ...jl,
  modelValue: {
    required: !0,
    default: null
  },
  val: {},
  trueValue: { default: !0 },
  falseValue: { default: !1 },
  indeterminateValue: { default: null },
  checkedIcon: String,
  uncheckedIcon: String,
  indeterminateIcon: String,
  toggleOrder: {
    type: String,
    validator: (e) => e === "tf" || e === "ft"
  },
  toggleIndeterminate: Boolean,
  label: String,
  leftLabel: Boolean,
  color: String,
  keepColor: Boolean,
  dense: Boolean,
  disable: Boolean,
  tabindex: [String, Number]
}, hi = ["update:modelValue"];
function gi(e, t) {
  const { props: n, slots: l, emit: o, proxy: i } = te(), { $q: u } = i, r = Ve(n, u), f = R(null), { refocusTargetEl: h, refocusTarget: s } = ci(n, f), b = St(n, vi), v = d(
    () => n.val !== void 0 && Array.isArray(n.modelValue)
  ), c = d(() => {
    const z = ze(n.val);
    return v.value === !0 ? n.modelValue.findIndex((X) => ze(X) === z) : -1;
  }), m = d(() => v.value === !0 ? c.value > -1 : ze(n.modelValue) === ze(n.trueValue)), y = d(() => v.value === !0 ? c.value === -1 : ze(n.modelValue) === ze(n.falseValue)), p = d(
    () => m.value === !1 && y.value === !1
  ), S = d(() => n.disable === !0 ? -1 : n.tabindex || 0), k = d(
    () => `q-${e} cursor-pointer no-outline row inline no-wrap items-center` + (n.disable === !0 ? " disabled" : "") + (r.value === !0 ? ` q-${e}--dark` : "") + (n.dense === !0 ? ` q-${e}--dense` : "") + (n.leftLabel === !0 ? " reverse" : "")
  ), w = d(() => {
    const z = m.value === !0 ? "truthy" : y.value === !0 ? "falsy" : "indet", X = n.color !== void 0 && (n.keepColor === !0 || (e === "toggle" ? m.value === !0 : y.value !== !0)) ? ` text-${n.color}` : "";
    return `q-${e}__inner relative-position non-selectable q-${e}__inner--${z}${X}`;
  }), q = d(() => {
    const z = { type: "checkbox" };
    return n.name !== void 0 && Object.assign(z, {
      // see https://vuejs.org/guide/extras/render-function.html#creating-vnodes (.prop)
      ".checked": m.value,
      "^checked": m.value === !0 ? "checked" : void 0,
      name: n.name,
      value: v.value === !0 ? n.val : n.trueValue
    }), z;
  }), x = di(q), M = d(() => {
    const z = {
      tabindex: S.value,
      role: e === "toggle" ? "switch" : "checkbox",
      "aria-label": n.label,
      "aria-checked": p.value === !0 ? "mixed" : m.value === !0 ? "true" : "false"
    };
    return n.disable === !0 && (z["aria-disabled"] = "true"), z;
  });
  function O(z) {
    z !== void 0 && (oe(z), s(z)), n.disable !== !0 && o("update:modelValue", I(), z);
  }
  function I() {
    if (v.value === !0) {
      if (m.value === !0) {
        const z = n.modelValue.slice();
        return z.splice(c.value, 1), z;
      }
      return n.modelValue.concat([n.val]);
    }
    if (m.value === !0) {
      if (n.toggleOrder !== "ft" || n.toggleIndeterminate === !1)
        return n.falseValue;
    } else if (y.value === !0) {
      if (n.toggleOrder === "ft" || n.toggleIndeterminate === !1)
        return n.trueValue;
    } else
      return n.toggleOrder !== "ft" ? n.trueValue : n.falseValue;
    return n.indeterminateValue;
  }
  function K(z) {
    (z.keyCode === 13 || z.keyCode === 32) && oe(z);
  }
  function Z(z) {
    (z.keyCode === 13 || z.keyCode === 32) && O(z);
  }
  const W = t(m, p);
  return Object.assign(i, { toggle: O }), () => {
    const z = W();
    n.disable !== !0 && x(
      z,
      "unshift",
      ` q-${e}__native absolute q-ma-none q-pa-none`
    );
    const X = [
      g("div", {
        class: w.value,
        style: b.value,
        "aria-hidden": "true"
      }, z)
    ];
    h.value !== null && X.push(h.value);
    const T = n.label !== void 0 ? Ee(l.default, [n.label]) : me(l.default);
    return T !== void 0 && X.push(
      g("div", {
        class: `q-${e}__label q-anchor--skip`
      }, T)
    ), g("div", {
      ref: f,
      class: k.value,
      ...M.value,
      onClick: O,
      onKeydown: K,
      onKeyup: Z
    }, X);
  };
}
const pi = g("div", {
  key: "svg",
  class: "q-checkbox__bg absolute"
}, [
  g("svg", {
    class: "q-checkbox__svg fit absolute-full",
    viewBox: "0 0 24 24"
  }, [
    g("path", {
      class: "q-checkbox__truthy",
      fill: "none",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    }),
    g("path", {
      class: "q-checkbox__indet",
      d: "M4,14H20V10H4"
    })
  ])
]), bi = ie({
  name: "QCheckbox",
  props: mi,
  emits: hi,
  setup(e) {
    function t(n, l) {
      const o = d(
        () => (n.value === !0 ? e.checkedIcon : l.value === !0 ? e.indeterminateIcon : e.uncheckedIcon) || null
      );
      return () => o.value !== null ? [
        g("div", {
          key: "icon",
          class: "q-checkbox__icon-container absolute-full flex flex-center no-wrap"
        }, [
          g(Se, {
            class: "q-checkbox__icon",
            name: o.value
          })
        ])
      ] : [pi];
    }
    return gi("checkbox", t);
  }
}), je = ie({
  name: "QItemSection",
  props: {
    avatar: Boolean,
    thumbnail: Boolean,
    side: Boolean,
    top: Boolean,
    noWrap: Boolean
  },
  setup(e, { slots: t }) {
    const n = d(
      () => `q-item__section column q-item__section--${e.avatar === !0 || e.side === !0 || e.thumbnail === !0 ? "side" : "main"}` + (e.top === !0 ? " q-item__section--top justify-start" : " justify-center") + (e.avatar === !0 ? " q-item__section--avatar" : "") + (e.thumbnail === !0 ? " q-item__section--thumbnail" : "") + (e.noWrap === !0 ? " q-item__section--nowrap" : "")
    );
    return () => g("div", { class: n.value }, me(t.default));
  }
}), hn = ie({
  name: "QItemLabel",
  props: {
    overline: Boolean,
    caption: Boolean,
    header: Boolean,
    lines: [Number, String]
  },
  setup(e, { slots: t }) {
    const n = d(() => parseInt(e.lines, 10)), l = d(
      () => "q-item__label" + (e.overline === !0 ? " q-item__label--overline text-overline" : "") + (e.caption === !0 ? " q-item__label--caption text-caption" : "") + (e.header === !0 ? " q-item__label--header" : "") + (n.value === 1 ? " ellipsis" : "")
    ), o = d(() => e.lines !== void 0 && n.value > 1 ? {
      overflow: "hidden",
      display: "-webkit-box",
      "-webkit-box-orient": "vertical",
      "-webkit-line-clamp": n.value
    } : null);
    return () => g("div", {
      style: o.value,
      class: l.value
    }, me(t.default));
  }
});
function ol(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
function il(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function yi(e, t) {
  for (const n in t) {
    const l = t[n], o = e[n];
    if (typeof l == "string") {
      if (l !== o)
        return !1;
    } else if (Array.isArray(o) === !1 || o.length !== l.length || l.some((i, u) => i !== o[u]))
      return !1;
  }
  return !0;
}
function al(e, t) {
  return Array.isArray(t) === !0 ? e.length === t.length && e.every((n, l) => n === t[l]) : e.length === 1 && e[0] === t;
}
function wi(e, t) {
  return Array.isArray(e) === !0 ? al(e, t) : Array.isArray(t) === !0 ? al(t, e) : e === t;
}
function Si(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (wi(e[n], t[n]) === !1)
      return !1;
  return !0;
}
const Nl = {
  // router-link
  to: [String, Object],
  replace: Boolean,
  exact: Boolean,
  activeClass: {
    type: String,
    default: "q-router-link--active"
  },
  exactActiveClass: {
    type: String,
    default: "q-router-link--exact-active"
  },
  // regular <a> link
  href: String,
  target: String,
  // state
  disable: Boolean
};
function Wl({ fallbackTag: e, useDisableForRouterLinkProps: t = !0 } = {}) {
  const n = te(), { props: l, proxy: o, emit: i } = n, u = zl(n), r = d(() => l.disable !== !0 && l.href !== void 0), f = t === !0 ? d(
    () => u === !0 && l.disable !== !0 && r.value !== !0 && l.to !== void 0 && l.to !== null && l.to !== ""
  ) : d(
    () => u === !0 && r.value !== !0 && l.to !== void 0 && l.to !== null && l.to !== ""
  ), h = d(() => f.value === !0 ? k(l.to) : null), s = d(() => h.value !== null), b = d(() => r.value === !0 || s.value === !0), v = d(() => l.type === "a" || b.value === !0 ? "a" : l.tag || e || "div"), c = d(() => r.value === !0 ? {
    href: l.href,
    target: l.target
  } : s.value === !0 ? {
    href: h.value.href,
    target: l.target
  } : {}), m = d(() => {
    if (s.value === !1)
      return -1;
    const { matched: x } = h.value, { length: M } = x, O = x[M - 1];
    if (O === void 0)
      return -1;
    const I = o.$route.matched;
    if (I.length === 0)
      return -1;
    const K = I.findIndex(
      il.bind(null, O)
    );
    if (K > -1)
      return K;
    const Z = ol(x[M - 2]);
    return (
      // we are dealing with nested routes
      M > 1 && ol(O) === Z && I[I.length - 1].path !== Z ? I.findIndex(
        il.bind(null, x[M - 2])
      ) : K
    );
  }), y = d(
    () => s.value === !0 && m.value !== -1 && yi(o.$route.params, h.value.params)
  ), p = d(
    () => y.value === !0 && m.value === o.$route.matched.length - 1 && Si(o.$route.params, h.value.params)
  ), S = d(() => s.value === !0 ? p.value === !0 ? ` ${l.exactActiveClass} ${l.activeClass}` : l.exact === !0 ? "" : y.value === !0 ? ` ${l.activeClass}` : "" : "");
  function k(x) {
    try {
      return o.$router.resolve(x);
    } catch {
    }
    return null;
  }
  function w(x, { returnRouterError: M, to: O = l.to, replace: I = l.replace } = {}) {
    if (l.disable === !0)
      return x.preventDefault(), Promise.resolve(!1);
    if (
      // don't redirect with control keys;
      // should match RouterLink from Vue Router
      x.metaKey || x.altKey || x.ctrlKey || x.shiftKey || x.button !== void 0 && x.button !== 0 || l.target === "_blank"
    )
      return Promise.resolve(!1);
    x.preventDefault();
    const K = o.$router[I === !0 ? "replace" : "push"](O);
    return M === !0 ? K : K.then(() => {
    }).catch(() => {
    });
  }
  function q(x) {
    if (s.value === !0) {
      const M = (O) => w(x, O);
      i("click", x, M), x.defaultPrevented !== !0 && M();
    } else
      i("click", x);
  }
  return {
    hasRouterLink: s,
    hasHrefLink: r,
    hasLink: b,
    linkTag: v,
    resolvedLink: h,
    linkIsActive: y,
    linkIsExactActive: p,
    linkClass: S,
    linkAttrs: c,
    getLink: k,
    navigateToRouterLink: w,
    navigateOnClick: q
  };
}
function Kl(e) {
  return e !== Object(e) || e.isComposing === !0 || e.qKeyEvent === !0;
}
function Oe(e, t) {
  return Kl(e) === !0 ? !1 : [].concat(t).includes(e.keyCode);
}
const Ft = ie({
  name: "QItem",
  props: {
    ...Be,
    ...Nl,
    tag: {
      type: String,
      default: "div"
    },
    active: {
      type: Boolean,
      default: null
    },
    clickable: Boolean,
    dense: Boolean,
    insetLevel: Number,
    tabindex: [String, Number],
    focused: Boolean,
    manualFocus: Boolean
  },
  emits: ["click", "keyup"],
  setup(e, { slots: t, emit: n }) {
    const { proxy: { $q: l } } = te(), o = Ve(e, l), { hasLink: i, linkAttrs: u, linkClass: r, linkTag: f, navigateOnClick: h } = Wl(), s = R(null), b = R(null), v = d(
      () => e.clickable === !0 || i.value === !0 || e.tag === "label"
    ), c = d(
      () => e.disable !== !0 && v.value === !0
    ), m = d(
      () => "q-item q-item-type row no-wrap" + (e.dense === !0 ? " q-item--dense" : "") + (o.value === !0 ? " q-item--dark" : "") + (i.value === !0 && e.active === null ? r.value : e.active === !0 ? ` q-item--active${e.activeClass !== void 0 ? ` ${e.activeClass}` : ""}` : "") + (e.disable === !0 ? " disabled" : "") + (c.value === !0 ? " q-item--clickable q-link cursor-pointer " + (e.manualFocus === !0 ? "q-manual-focusable" : "q-focusable q-hoverable") + (e.focused === !0 ? " q-manual-focusable--focused" : "") : "")
    ), y = d(() => e.insetLevel === void 0 ? null : {
      ["padding" + (l.lang.rtl === !0 ? "Right" : "Left")]: 16 + e.insetLevel * 56 + "px"
    });
    function p(w) {
      c.value === !0 && (b.value !== null && (w.qKeyEvent !== !0 && document.activeElement === s.value ? b.value.focus() : document.activeElement === b.value && s.value.focus()), h(w));
    }
    function S(w) {
      if (c.value === !0 && Oe(w, 13) === !0) {
        oe(w), w.qKeyEvent = !0;
        const q = new MouseEvent("click", w);
        q.qKeyEvent = !0, s.value.dispatchEvent(q);
      }
      n("keyup", w);
    }
    function k() {
      const w = Yo(t.default, []);
      return c.value === !0 && w.unshift(
        g("div", { class: "q-focus-helper", tabindex: -1, ref: b })
      ), w;
    }
    return () => {
      const w = {
        ref: s,
        class: m.value,
        style: y.value,
        role: "listitem",
        onClick: p,
        onKeyup: S
      };
      return c.value === !0 ? (w.tabindex = e.tabindex || "0", Object.assign(w, u.value)) : v.value === !0 && (w["aria-disabled"] = "true"), g(
        f.value,
        w,
        k()
      );
    };
  }
});
function _n(e, t, n, l) {
  return Object.defineProperty(e, t, {
    get: n,
    set: l,
    enumerable: !0
  }), e;
}
const zt = R(
  !1
);
let En;
function xi(e, t) {
  const n = /(edg|edge|edga|edgios)\/([\w.]+)/.exec(e) || /(opr)[\/]([\w.]+)/.exec(e) || /(vivaldi)[\/]([\w.]+)/.exec(e) || /(chrome|crios)[\/]([\w.]+)/.exec(e) || /(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(firefox|fxios)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[\/]([\w.]+)/.exec(e) || [];
  return {
    browser: n[5] || n[3] || n[1] || "",
    version: n[2] || n[4] || "0",
    versionNumber: n[4] || n[2] || "0",
    platform: t[0] || ""
  };
}
function ki(e) {
  return /(ipad)/.exec(e) || /(ipod)/.exec(e) || /(windows phone)/.exec(e) || /(iphone)/.exec(e) || /(kindle)/.exec(e) || /(silk)/.exec(e) || /(android)/.exec(e) || /(win)/.exec(e) || /(mac)/.exec(e) || /(linux)/.exec(e) || /(cros)/.exec(e) || /(playbook)/.exec(e) || /(bb)/.exec(e) || /(blackberry)/.exec(e) || [];
}
const Ql = "ontouchstart" in window || window.navigator.maxTouchPoints > 0;
function qi(e) {
  En = { is: { ...e } }, delete e.mac, delete e.desktop;
  const t = Math.min(window.innerHeight, window.innerWidth) > 414 ? "ipad" : "iphone";
  Object.assign(e, {
    mobile: !0,
    ios: !0,
    platform: t,
    [t]: !0
  });
}
function Ci(e) {
  const t = e.toLowerCase(), n = ki(t), l = xi(t, n), o = {};
  l.browser && (o[l.browser] = !0, o.version = l.version, o.versionNumber = parseInt(l.versionNumber, 10)), l.platform && (o[l.platform] = !0);
  const i = o.android || o.ios || o.bb || o.blackberry || o.ipad || o.iphone || o.ipod || o.kindle || o.playbook || o.silk || o["windows phone"];
  return i === !0 || t.indexOf("mobile") > -1 ? (o.mobile = !0, o.edga || o.edgios ? (o.edge = !0, l.browser = "edge") : o.crios ? (o.chrome = !0, l.browser = "chrome") : o.fxios && (o.firefox = !0, l.browser = "firefox")) : o.desktop = !0, (o.ipod || o.ipad || o.iphone) && (o.ios = !0), o["windows phone"] && (o.winphone = !0, delete o["windows phone"]), (o.chrome || o.opr || o.safari || o.vivaldi || o.mobile === !0 && o.ios !== !0 && i !== !0) && (o.webkit = !0), o.edg && (l.browser = "edgechromium", o.edgeChromium = !0), (o.safari && o.blackberry || o.bb) && (l.browser = "blackberry", o.blackberry = !0), o.safari && o.playbook && (l.browser = "playbook", o.playbook = !0), o.opr && (l.browser = "opera", o.opera = !0), o.safari && o.android && (l.browser = "android", o.android = !0), o.safari && o.kindle && (l.browser = "kindle", o.kindle = !0), o.safari && o.silk && (l.browser = "silk", o.silk = !0), o.vivaldi && (l.browser = "vivaldi", o.vivaldi = !0), o.name = l.browser, o.platform = l.platform, t.indexOf("electron") > -1 ? o.electron = !0 : document.location.href.indexOf("-extension://") > -1 ? o.bex = !0 : (window.Capacitor !== void 0 ? (o.capacitor = !0, o.nativeMobile = !0, o.nativeMobileWrapper = "capacitor") : (window._cordovaNative !== void 0 || window.cordova !== void 0) && (o.cordova = !0, o.nativeMobile = !0, o.nativeMobileWrapper = "cordova"), Ql === !0 && o.mac === !0 && (o.desktop === !0 && o.safari === !0 || o.nativeMobile === !0 && o.android !== !0 && o.ios !== !0 && o.ipad !== !0) && qi(o)), o;
}
const ul = navigator.userAgent || navigator.vendor || window.opera, _i = {
  has: {
    touch: !1,
    webStorage: !1
  },
  within: { iframe: !1 }
}, he = {
  userAgent: ul,
  is: Ci(ul),
  has: {
    touch: Ql
  },
  within: {
    iframe: window.self !== window.top
  }
}, gn = {
  install(e) {
    const { $q: t } = e;
    zt.value === !0 ? (e.onSSRHydrated.push(() => {
      Object.assign(t.platform, he), zt.value = !1, En = void 0;
    }), t.platform = Po(this)) : t.platform = this;
  }
};
{
  let e;
  _n(he.has, "webStorage", () => {
    if (e !== void 0)
      return e;
    try {
      if (window.localStorage)
        return e = !0, !0;
    } catch {
    }
    return e = !1, !1;
  }), he.is.ios === !0 && window.navigator.vendor.toLowerCase().indexOf("apple"), zt.value === !0 ? Object.assign(gn, he, En, _i) : Object.assign(gn, he);
}
const Ei = {
  size: {
    type: [Number, String],
    default: "1em"
  },
  color: String
};
function Bi(e) {
  return {
    cSize: d(() => e.size in mn ? `${mn[e.size]}px` : e.size),
    classes: d(
      () => "q-spinner" + (e.color ? ` text-${e.color}` : "")
    )
  };
}
const Ul = ie({
  name: "QSpinner",
  props: {
    ...Ei,
    thickness: {
      type: Number,
      default: 5
    }
  },
  setup(e) {
    const { cSize: t, classes: n } = Bi(e);
    return () => g("svg", {
      class: n.value + " q-spinner-mat",
      width: t.value,
      height: t.value,
      viewBox: "25 25 50 50"
    }, [
      g("circle", {
        class: "path",
        cx: "50",
        cy: "50",
        r: "20",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": e.thickness,
        "stroke-miterlimit": "10"
      })
    ]);
  }
});
function Vi({ validate: e, resetValidation: t, requiresQForm: n }) {
  const l = Ro(Fl, !1);
  if (l !== !1) {
    const { props: o, proxy: i } = te();
    Object.assign(i, { validate: e, resetValidation: t }), J(() => o.disable, (u) => {
      u === !0 ? (typeof t == "function" && t(), l.unbindComponent(i)) : l.bindComponent(i);
    }), yt(() => {
      o.disable !== !0 && l.bindComponent(i);
    }), de(() => {
      o.disable !== !0 && l.unbindComponent(i);
    });
  } else
    n === !0 && console.error("Parent QForm not found on useFormChild()!");
}
const rl = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/, sl = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/, cl = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/, Et = /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/, Bt = /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/, on = {
  date: (e) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),
  time: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),
  fulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),
  timeOrFulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),
  // -- RFC 5322 --
  // -- Added in v2.6.6 --
  // This is a basic helper validation.
  // For something more complex (like RFC 822) you should write and use your own rule.
  // We won't be accepting PRs to enhance the one below because of the reason above.
  // eslint-disable-next-line
  email: (e) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),
  hexColor: (e) => rl.test(e),
  hexaColor: (e) => sl.test(e),
  hexOrHexaColor: (e) => cl.test(e),
  rgbColor: (e) => Et.test(e),
  rgbaColor: (e) => Bt.test(e),
  rgbOrRgbaColor: (e) => Et.test(e) || Bt.test(e),
  hexOrRgbColor: (e) => rl.test(e) || Et.test(e),
  hexaOrRgbaColor: (e) => sl.test(e) || Bt.test(e),
  anyColor: (e) => cl.test(e) || Et.test(e) || Bt.test(e)
};
function Xl(e, t = 250, n) {
  let l = null;
  function o() {
    const i = arguments, u = () => {
      l = null, n !== !0 && e.apply(this, i);
    };
    l !== null ? clearTimeout(l) : n === !0 && e.apply(this, i), l = setTimeout(u, t);
  }
  return o.cancel = () => {
    l !== null && clearTimeout(l);
  }, o;
}
const $i = [!0, !1, "ondemand"], Ti = {
  modelValue: {},
  error: {
    type: Boolean,
    default: null
  },
  errorMessage: String,
  noErrorIcon: Boolean,
  rules: Array,
  reactiveRules: Boolean,
  lazyRules: {
    type: [Boolean, String],
    validator: (e) => $i.includes(e)
  }
};
function Li(e, t) {
  const { props: n, proxy: l } = te(), o = R(!1), i = R(null), u = R(null);
  Vi({ validate: m, resetValidation: c });
  let r = 0, f;
  const h = d(
    () => n.rules !== void 0 && n.rules !== null && n.rules.length !== 0
  ), s = d(
    () => n.disable !== !0 && h.value === !0
  ), b = d(
    () => n.error === !0 || o.value === !0
  ), v = d(() => typeof n.errorMessage == "string" && n.errorMessage.length !== 0 ? n.errorMessage : i.value);
  J(() => n.modelValue, () => {
    y();
  }), J(() => n.reactiveRules, (S) => {
    S === !0 ? f === void 0 && (f = J(() => n.rules, () => {
      y(!0);
    })) : f !== void 0 && (f(), f = void 0);
  }, { immediate: !0 }), J(e, (S) => {
    S === !0 ? u.value === null && (u.value = !1) : u.value === !1 && (u.value = !0, s.value === !0 && n.lazyRules !== "ondemand" && t.value === !1 && p());
  });
  function c() {
    r++, t.value = !1, u.value = null, o.value = !1, i.value = null, p.cancel();
  }
  function m(S = n.modelValue) {
    if (s.value !== !0)
      return !0;
    const k = ++r, w = t.value !== !0 ? () => {
      u.value = !0;
    } : () => {
    }, q = (M, O) => {
      M === !0 && w(), o.value = M, i.value = O || null, t.value = !1;
    }, x = [];
    for (let M = 0; M < n.rules.length; M++) {
      const O = n.rules[M];
      let I;
      if (typeof O == "function" ? I = O(S, on) : typeof O == "string" && on[O] !== void 0 && (I = on[O](S)), I === !1 || typeof I == "string")
        return q(!0, I), !1;
      I !== !0 && I !== void 0 && x.push(I);
    }
    return x.length === 0 ? (q(!1), !0) : (t.value = !0, Promise.all(x).then(
      (M) => {
        if (M === void 0 || Array.isArray(M) === !1 || M.length === 0)
          return k === r && q(!1), !0;
        const O = M.find((I) => I === !1 || typeof I == "string");
        return k === r && q(O !== void 0, O), O === void 0;
      },
      (M) => (k === r && (console.error(M), q(!0)), !1)
    ));
  }
  function y(S) {
    s.value === !0 && n.lazyRules !== "ondemand" && (u.value === !0 || n.lazyRules !== !0 && S !== !0) && p();
  }
  const p = Xl(m, 0);
  return de(() => {
    f !== void 0 && f(), p.cancel();
  }), Object.assign(l, { resetValidation: c, validate: m }), _n(l, "hasError", () => b.value), {
    isDirtyModel: u,
    hasRules: h,
    hasError: b,
    errorMessage: v,
    validate: m,
    resetValidation: c
  };
}
const dl = /^on[A-Z]/;
function Oi(e, t) {
  const n = {
    listeners: R({}),
    attributes: R({})
  };
  function l() {
    const o = {}, i = {};
    for (const u in e)
      u !== "class" && u !== "style" && dl.test(u) === !1 && (o[u] = e[u]);
    for (const u in t.props)
      dl.test(u) === !0 && (i[u] = t.props[u]);
    n.attributes.value = o, n.listeners.value = i;
  }
  return Pl(l), l(), n;
}
let an, Vt = 0;
const ce = new Array(256);
for (let e = 0; e < 256; e++)
  ce[e] = (e + 256).toString(16).substring(1);
const Pi = (() => {
  const e = typeof crypto < "u" ? crypto : typeof window < "u" ? window.crypto || window.msCrypto : void 0;
  if (e !== void 0) {
    if (e.randomBytes !== void 0)
      return e.randomBytes;
    if (e.getRandomValues !== void 0)
      return (t) => {
        const n = new Uint8Array(t);
        return e.getRandomValues(n), n;
      };
  }
  return (t) => {
    const n = [];
    for (let l = t; l > 0; l--)
      n.push(Math.floor(Math.random() * 256));
    return n;
  };
})(), fl = 4096;
function Ri() {
  (an === void 0 || Vt + 16 > fl) && (Vt = 0, an = Pi(fl));
  const e = Array.prototype.slice.call(an, Vt, Vt += 16);
  return e[6] = e[6] & 15 | 64, e[8] = e[8] & 63 | 128, ce[e[0]] + ce[e[1]] + ce[e[2]] + ce[e[3]] + "-" + ce[e[4]] + ce[e[5]] + "-" + ce[e[6]] + ce[e[7]] + "-" + ce[e[8]] + ce[e[9]] + "-" + ce[e[10]] + ce[e[11]] + ce[e[12]] + ce[e[13]] + ce[e[14]] + ce[e[15]];
}
function pn(e) {
  return e === void 0 ? `f_${Ri()}` : e;
}
function bn(e) {
  return e != null && ("" + e).length !== 0;
}
const Bn = {
  ...Be,
  ...Ti,
  label: String,
  stackLabel: Boolean,
  hint: String,
  hideHint: Boolean,
  prefix: String,
  suffix: String,
  labelColor: String,
  color: String,
  bgColor: String,
  filled: Boolean,
  outlined: Boolean,
  borderless: Boolean,
  standout: [Boolean, String],
  square: Boolean,
  loading: Boolean,
  labelSlot: Boolean,
  bottomSlots: Boolean,
  hideBottomSpace: Boolean,
  rounded: Boolean,
  dense: Boolean,
  itemAligned: Boolean,
  counter: Boolean,
  clearable: Boolean,
  clearIcon: String,
  disable: Boolean,
  readonly: Boolean,
  autofocus: Boolean,
  for: String,
  maxlength: [Number, String]
}, Yl = ["update:modelValue", "clear", "focus", "blur", "popupShow", "popupHide"];
function Gl() {
  const { props: e, attrs: t, proxy: n, vnode: l } = te();
  return {
    isDark: Ve(e, n.$q),
    editable: d(
      () => e.disable !== !0 && e.readonly !== !0
    ),
    innerLoading: R(!1),
    focused: R(!1),
    hasPopupOpen: !1,
    splitAttrs: Oi(t, l),
    targetUid: R(pn(e.for)),
    rootRef: R(null),
    targetRef: R(null),
    controlRef: R(null)
    /**
         * user supplied additionals:
    
         * innerValue - computed
         * floatingLabel - computed
         * inputRef - computed
    
         * fieldClass - computed
         * hasShadow - computed
    
         * controlEvents - Object with fn(e)
    
         * getControl - fn
         * getInnerAppend - fn
         * getControlChild - fn
         * getShadowControl - fn
         * showPopup - fn
         */
  };
}
function Jl(e) {
  const { props: t, emit: n, slots: l, attrs: o, proxy: i } = te(), { $q: u } = i;
  let r = null;
  e.hasValue === void 0 && (e.hasValue = d(() => bn(t.modelValue))), e.emitValue === void 0 && (e.emitValue = ($) => {
    n("update:modelValue", $);
  }), e.controlEvents === void 0 && (e.controlEvents = {
    onFocusin: K,
    onFocusout: Z
  }), Object.assign(e, {
    clearValue: W,
    onControlFocusin: K,
    onControlFocusout: Z,
    focus: O
  }), e.computedCounter === void 0 && (e.computedCounter = d(() => {
    if (t.counter !== !1) {
      const $ = typeof t.modelValue == "string" || typeof t.modelValue == "number" ? ("" + t.modelValue).length : Array.isArray(t.modelValue) === !0 ? t.modelValue.length : 0, N = t.maxlength !== void 0 ? t.maxlength : t.maxValues;
      return $ + (N !== void 0 ? " / " + N : "");
    }
  }));
  const {
    isDirtyModel: f,
    hasRules: h,
    hasError: s,
    errorMessage: b,
    resetValidation: v
  } = Li(e.focused, e.innerLoading), c = e.floatingLabel !== void 0 ? d(() => t.stackLabel === !0 || e.focused.value === !0 || e.floatingLabel.value === !0) : d(() => t.stackLabel === !0 || e.focused.value === !0 || e.hasValue.value === !0), m = d(
    () => t.bottomSlots === !0 || t.hint !== void 0 || h.value === !0 || t.counter === !0 || t.error !== null
  ), y = d(() => t.filled === !0 ? "filled" : t.outlined === !0 ? "outlined" : t.borderless === !0 ? "borderless" : t.standout ? "standout" : "standard"), p = d(
    () => `q-field row no-wrap items-start q-field--${y.value}` + (e.fieldClass !== void 0 ? ` ${e.fieldClass.value}` : "") + (t.rounded === !0 ? " q-field--rounded" : "") + (t.square === !0 ? " q-field--square" : "") + (c.value === !0 ? " q-field--float" : "") + (k.value === !0 ? " q-field--labeled" : "") + (t.dense === !0 ? " q-field--dense" : "") + (t.itemAligned === !0 ? " q-field--item-aligned q-item-type" : "") + (e.isDark.value === !0 ? " q-field--dark" : "") + (e.getControl === void 0 ? " q-field--auto-height" : "") + (e.focused.value === !0 ? " q-field--focused" : "") + (s.value === !0 ? " q-field--error" : "") + (s.value === !0 || e.focused.value === !0 ? " q-field--highlighted" : "") + (t.hideBottomSpace !== !0 && m.value === !0 ? " q-field--with-bottom" : "") + (t.disable === !0 ? " q-field--disabled" : t.readonly === !0 ? " q-field--readonly" : "")
  ), S = d(
    () => "q-field__control relative-position row no-wrap" + (t.bgColor !== void 0 ? ` bg-${t.bgColor}` : "") + (s.value === !0 ? " text-negative" : typeof t.standout == "string" && t.standout.length !== 0 && e.focused.value === !0 ? ` ${t.standout}` : t.color !== void 0 ? ` text-${t.color}` : "")
  ), k = d(
    () => t.labelSlot === !0 || t.label !== void 0
  ), w = d(
    () => "q-field__label no-pointer-events absolute ellipsis" + (t.labelColor !== void 0 && s.value !== !0 ? ` text-${t.labelColor}` : "")
  ), q = d(() => ({
    id: e.targetUid.value,
    editable: e.editable.value,
    focused: e.focused.value,
    floatingLabel: c.value,
    modelValue: t.modelValue,
    emitValue: e.emitValue
  })), x = d(() => {
    const $ = {
      for: e.targetUid.value
    };
    return t.disable === !0 ? $["aria-disabled"] = "true" : t.readonly === !0 && ($["aria-readonly"] = "true"), $;
  });
  J(() => t.for, ($) => {
    e.targetUid.value = pn($);
  });
  function M() {
    const $ = document.activeElement;
    let N = e.targetRef !== void 0 && e.targetRef.value;
    N && ($ === null || $.id !== e.targetUid.value) && (N.hasAttribute("tabindex") === !0 || (N = N.querySelector("[tabindex]")), N && N !== $ && N.focus({ preventScroll: !0 }));
  }
  function O() {
    Ut(M);
  }
  function I() {
    Xo(M);
    const $ = document.activeElement;
    $ !== null && e.rootRef.value.contains($) && $.blur();
  }
  function K($) {
    r !== null && (clearTimeout(r), r = null), e.editable.value === !0 && e.focused.value === !1 && (e.focused.value = !0, n("focus", $));
  }
  function Z($, N) {
    r !== null && clearTimeout(r), r = setTimeout(() => {
      r = null, !(document.hasFocus() === !0 && (e.hasPopupOpen === !0 || e.controlRef === void 0 || e.controlRef.value === null || e.controlRef.value.contains(document.activeElement) !== !1)) && (e.focused.value === !0 && (e.focused.value = !1, n("blur", $)), N !== void 0 && N());
    });
  }
  function W($) {
    oe($), u.platform.is.mobile !== !0 ? (e.targetRef !== void 0 && e.targetRef.value || e.rootRef.value).focus() : e.rootRef.value.contains(document.activeElement) === !0 && document.activeElement.blur(), t.type === "file" && (e.inputRef.value.value = null), n("update:modelValue", null), n("clear", t.modelValue), pe(() => {
      v(), u.platform.is.mobile !== !0 && (f.value = !1);
    });
  }
  function z() {
    const $ = [];
    return l.prepend !== void 0 && $.push(
      g("div", {
        class: "q-field__prepend q-field__marginal row no-wrap items-center",
        key: "prepend",
        onClick: ke
      }, l.prepend())
    ), $.push(
      g("div", {
        class: "q-field__control-container col relative-position row no-wrap q-anchor--skip"
      }, X())
    ), s.value === !0 && t.noErrorIcon === !1 && $.push(
      j("error", [
        g(Se, { name: u.iconSet.field.error, color: "negative" })
      ])
    ), t.loading === !0 || e.innerLoading.value === !0 ? $.push(
      j(
        "inner-loading-append",
        l.loading !== void 0 ? l.loading() : [g(Ul, { color: t.color })]
      )
    ) : t.clearable === !0 && e.hasValue.value === !0 && e.editable.value === !0 && $.push(
      j("inner-clearable-append", [
        g(Se, {
          class: "q-field__focusable-action",
          tag: "button",
          name: t.clearIcon || u.iconSet.field.clear,
          tabindex: 0,
          type: "button",
          "aria-hidden": null,
          role: null,
          onClick: W
        })
      ])
    ), l.append !== void 0 && $.push(
      g("div", {
        class: "q-field__append q-field__marginal row no-wrap items-center",
        key: "append",
        onClick: ke
      }, l.append())
    ), e.getInnerAppend !== void 0 && $.push(
      j("inner-append", e.getInnerAppend())
    ), e.getControlChild !== void 0 && $.push(
      e.getControlChild()
    ), $;
  }
  function X() {
    const $ = [];
    return t.prefix !== void 0 && t.prefix !== null && $.push(
      g("div", {
        class: "q-field__prefix no-pointer-events row items-center"
      }, t.prefix)
    ), e.getShadowControl !== void 0 && e.hasShadow.value === !0 && $.push(
      e.getShadowControl()
    ), e.getControl !== void 0 ? $.push(e.getControl()) : l.rawControl !== void 0 ? $.push(l.rawControl()) : l.control !== void 0 && $.push(
      g("div", {
        ref: e.targetRef,
        class: "q-field__native row",
        tabindex: -1,
        ...e.splitAttrs.attributes.value,
        "data-autofocus": t.autofocus === !0 || void 0
      }, l.control(q.value))
    ), k.value === !0 && $.push(
      g("div", {
        class: w.value
      }, me(l.label, t.label))
    ), t.suffix !== void 0 && t.suffix !== null && $.push(
      g("div", {
        class: "q-field__suffix no-pointer-events row items-center"
      }, t.suffix)
    ), $.concat(me(l.default));
  }
  function T() {
    let $, N;
    s.value === !0 ? b.value !== null ? ($ = [g("div", { role: "alert" }, b.value)], N = `q--slot-error-${b.value}`) : ($ = me(l.error), N = "q--slot-error") : (t.hideHint !== !0 || e.focused.value === !0) && (t.hint !== void 0 ? ($ = [g("div", t.hint)], N = `q--slot-hint-${t.hint}`) : ($ = me(l.hint), N = "q--slot-hint"));
    const re = t.counter === !0 || l.counter !== void 0;
    if (t.hideBottomSpace === !0 && re === !1 && $ === void 0)
      return;
    const _ = g("div", {
      key: N,
      class: "q-field__messages col"
    }, $);
    return g("div", {
      class: "q-field__bottom row items-start q-field__bottom--" + (t.hideBottomSpace !== !0 ? "animated" : "stale"),
      onClick: ke
    }, [
      t.hideBottomSpace === !0 ? _ : g(Qe, { name: "q-transition--field-message" }, () => _),
      re === !0 ? g("div", {
        class: "q-field__counter"
      }, l.counter !== void 0 ? l.counter() : e.computedCounter.value) : null
    ]);
  }
  function j($, N) {
    return N === null ? null : g("div", {
      key: $,
      class: "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"
    }, N);
  }
  let U = !1;
  return bt(() => {
    U = !0;
  }), qn(() => {
    U === !0 && t.autofocus === !0 && i.focus();
  }), yt(() => {
    zt.value === !0 && t.for === void 0 && (e.targetUid.value = pn()), t.autofocus === !0 && i.focus();
  }), de(() => {
    r !== null && clearTimeout(r);
  }), Object.assign(i, { focus: O, blur: I }), function() {
    const N = e.getControl === void 0 && l.control === void 0 ? {
      ...e.splitAttrs.attributes.value,
      "data-autofocus": t.autofocus === !0 || void 0,
      ...x.value
    } : x.value;
    return g("label", {
      ref: e.rootRef,
      class: [
        p.value,
        o.class
      ],
      style: o.style,
      ...N
    }, [
      l.before !== void 0 ? g("div", {
        class: "q-field__before q-field__marginal row no-wrap items-center",
        onClick: ke
      }, l.before()) : null,
      g("div", {
        class: "q-field__inner relative-position col self-stretch"
      }, [
        g("div", {
          ref: e.controlRef,
          class: S.value,
          tabindex: -1,
          ...e.controlEvents
        }, z()),
        m.value === !0 ? T() : null
      ]),
      l.after !== void 0 ? g("div", {
        class: "q-field__after q-field__marginal row no-wrap items-center",
        onClick: ke
      }, l.after()) : null
    ]);
  };
}
const Ai = ie({
  name: "QField",
  inheritAttrs: !1,
  props: Bn,
  emits: Yl,
  setup() {
    return Jl(Gl());
  }
});
function yn(e, t) {
  const n = e.style;
  for (const l in t)
    n[l] = t[l];
}
function Mi(e) {
  if (e == null)
    return;
  if (typeof e == "string")
    try {
      return document.querySelector(e) || void 0;
    } catch {
      return;
    }
  const t = He(e);
  if (t)
    return t.$el || t;
}
function Zl(e, t) {
  if (e == null || e.contains(t) === !0)
    return !0;
  for (let n = e.nextElementSibling; n !== null; n = n.nextElementSibling)
    if (n.contains(t))
      return !0;
  return !1;
}
function Fi(e, t = 250) {
  let n = !1, l;
  return function() {
    return n === !1 && (n = !0, setTimeout(() => {
      n = !1;
    }, t), l = e.apply(this, arguments)), l;
  };
}
function vl(e, t, n, l) {
  n.modifiers.stop === !0 && Te(e);
  const o = n.modifiers.color;
  let i = n.modifiers.center;
  i = i === !0 || l === !0;
  const u = document.createElement("span"), r = document.createElement("span"), f = Al(e), { left: h, top: s, width: b, height: v } = t.getBoundingClientRect(), c = Math.sqrt(b * b + v * v), m = c / 2, y = `${(b - c) / 2}px`, p = i ? y : `${f.left - h - m}px`, S = `${(v - c) / 2}px`, k = i ? S : `${f.top - s - m}px`;
  r.className = "q-ripple__inner", yn(r, {
    height: `${c}px`,
    width: `${c}px`,
    transform: `translate3d(${p},${k},0) scale3d(.2,.2,1)`,
    opacity: 0
  }), u.className = `q-ripple${o ? " text-" + o : ""}`, u.setAttribute("dir", "ltr"), u.appendChild(r), t.appendChild(u);
  const w = () => {
    u.remove(), clearTimeout(q);
  };
  n.abort.push(w);
  let q = setTimeout(() => {
    r.classList.add("q-ripple__inner--enter"), r.style.transform = `translate3d(${y},${S},0) scale3d(1,1,1)`, r.style.opacity = 0.2, q = setTimeout(() => {
      r.classList.remove("q-ripple__inner--enter"), r.classList.add("q-ripple__inner--leave"), r.style.opacity = 0, q = setTimeout(() => {
        u.remove(), n.abort.splice(n.abort.indexOf(w), 1);
      }, 275);
    }, 250);
  }, 50);
}
function ml(e, { modifiers: t, value: n, arg: l }) {
  const o = Object.assign({}, e.cfg.ripple, t, n);
  e.modifiers = {
    early: o.early === !0,
    stop: o.stop === !0,
    center: o.center === !0,
    color: o.color || l,
    keyCodes: [].concat(o.keyCodes || 13)
  };
}
const eo = Rl(
  {
    name: "ripple",
    beforeMount(e, t) {
      const n = t.instance.$.appContext.config.globalProperties.$q.config || {};
      if (n.ripple === !1)
        return;
      const l = {
        cfg: n,
        enabled: t.value !== !1,
        modifiers: {},
        abort: [],
        start(o) {
          l.enabled === !0 && o.qSkipRipple !== !0 && o.type === (l.modifiers.early === !0 ? "pointerdown" : "click") && vl(o, e, l, o.qKeyEvent === !0);
        },
        keystart: Fi((o) => {
          l.enabled === !0 && o.qSkipRipple !== !0 && Oe(o, l.modifiers.keyCodes) === !0 && o.type === `key${l.modifiers.early === !0 ? "down" : "up"}` && vl(o, e, l, !0);
        }, 300)
      };
      ml(l, t), e.__qripple = l, gt(l, "main", [
        [e, "pointerdown", "start", "passive"],
        [e, "click", "start", "passive"],
        [e, "keydown", "keystart", "passive"],
        [e, "keyup", "keystart", "passive"]
      ]);
    },
    updated(e, t) {
      if (t.oldValue !== t.value) {
        const n = e.__qripple;
        n !== void 0 && (n.enabled = t.value !== !1, n.enabled === !0 && Object(t.value) === t.value && ml(n, t));
      }
    },
    beforeUnmount(e) {
      const t = e.__qripple;
      t !== void 0 && (t.abort.forEach((n) => {
        n();
      }), Mt(t, "main"), delete e._qripple);
    }
  }
), zi = {
  xs: 8,
  sm: 10,
  md: 14,
  lg: 20,
  xl: 24
}, Hi = ie({
  name: "QChip",
  props: {
    ...Be,
    ...wt,
    dense: Boolean,
    icon: String,
    iconRight: String,
    iconRemove: String,
    iconSelected: String,
    label: [String, Number],
    color: String,
    textColor: String,
    modelValue: {
      type: Boolean,
      default: !0
    },
    selected: {
      type: Boolean,
      default: null
    },
    square: Boolean,
    outline: Boolean,
    clickable: Boolean,
    removable: Boolean,
    removeAriaLabel: String,
    tabindex: [String, Number],
    disable: Boolean,
    ripple: {
      type: [Boolean, Object],
      default: !0
    }
  },
  emits: ["update:modelValue", "update:selected", "remove", "click"],
  setup(e, { slots: t, emit: n }) {
    const { proxy: { $q: l } } = te(), o = Ve(e, l), i = St(e, zi), u = d(() => e.selected === !0 || e.icon !== void 0), r = d(() => e.selected === !0 ? e.iconSelected || l.iconSet.chip.selected : e.icon), f = d(() => e.iconRemove || l.iconSet.chip.remove), h = d(
      () => e.disable === !1 && (e.clickable === !0 || e.selected !== null)
    ), s = d(() => {
      const p = e.outline === !0 && e.color || e.textColor;
      return "q-chip row inline no-wrap items-center" + (e.outline === !1 && e.color !== void 0 ? ` bg-${e.color}` : "") + (p ? ` text-${p} q-chip--colored` : "") + (e.disable === !0 ? " disabled" : "") + (e.dense === !0 ? " q-chip--dense" : "") + (e.outline === !0 ? " q-chip--outline" : "") + (e.selected === !0 ? " q-chip--selected" : "") + (h.value === !0 ? " q-chip--clickable cursor-pointer non-selectable q-hoverable" : "") + (e.square === !0 ? " q-chip--square" : "") + (o.value === !0 ? " q-chip--dark q-dark" : "");
    }), b = d(() => {
      const p = e.disable === !0 ? { tabindex: -1, "aria-disabled": "true" } : { tabindex: e.tabindex || 0 }, S = {
        ...p,
        role: "button",
        "aria-hidden": "false",
        "aria-label": e.removeAriaLabel || l.lang.label.remove
      };
      return { chip: p, remove: S };
    });
    function v(p) {
      p.keyCode === 13 && c(p);
    }
    function c(p) {
      e.disable || (n("update:selected", !e.selected), n("click", p));
    }
    function m(p) {
      (p.keyCode === void 0 || p.keyCode === 13) && (oe(p), e.disable === !1 && (n("update:modelValue", !1), n("remove")));
    }
    function y() {
      const p = [];
      h.value === !0 && p.push(
        g("div", { class: "q-focus-helper" })
      ), u.value === !0 && p.push(
        g(Se, {
          class: "q-chip__icon q-chip__icon--left",
          name: r.value
        })
      );
      const S = e.label !== void 0 ? [g("div", { class: "ellipsis" }, [e.label])] : void 0;
      return p.push(
        g("div", {
          class: "q-chip__content col row no-wrap items-center q-anchor--skip"
        }, Go(t.default, S))
      ), e.iconRight && p.push(
        g(Se, {
          class: "q-chip__icon q-chip__icon--right",
          name: e.iconRight
        })
      ), e.removable === !0 && p.push(
        g(Se, {
          class: "q-chip__icon q-chip__icon--remove cursor-pointer",
          name: f.value,
          ...b.value.remove,
          onClick: m,
          onKeyup: m
        })
      ), p;
    }
    return () => {
      if (e.modelValue === !1)
        return;
      const p = {
        class: s.value,
        style: i.value
      };
      return h.value === !0 && Object.assign(
        p,
        b.value.chip,
        { onClick: c, onKeyup: v }
      ), Jo(
        "div",
        p,
        y(),
        "ripple",
        e.ripple !== !1 && e.disable !== !0,
        () => [[eo, e.ripple]]
      );
    };
  }
});
function wn() {
  if (window.getSelection !== void 0) {
    const e = window.getSelection();
    e.empty !== void 0 ? e.empty() : e.removeAllRanges !== void 0 && (e.removeAllRanges(), gn.is.mobile !== !0 && e.addRange(document.createRange()));
  } else
    document.selection !== void 0 && document.selection.empty();
}
const to = {
  target: {
    default: !0
  },
  noParentEvent: Boolean,
  contextMenu: Boolean
};
function no({
  showing: e,
  avoidEmit: t,
  // required for QPopupProxy (true)
  configureAnchorEl: n
  // optional
}) {
  const { props: l, proxy: o, emit: i } = te(), u = R(null);
  let r = null;
  function f(c) {
    return u.value === null ? !1 : c === void 0 || c.touches === void 0 || c.touches.length <= 1;
  }
  const h = {};
  n === void 0 && (Object.assign(h, {
    hide(c) {
      o.hide(c);
    },
    toggle(c) {
      o.toggle(c), c.qAnchorHandled = !0;
    },
    toggleKey(c) {
      Oe(c, 13) === !0 && h.toggle(c);
    },
    contextClick(c) {
      o.hide(c), ke(c), pe(() => {
        o.show(c), c.qAnchorHandled = !0;
      });
    },
    prevent: ke,
    mobileTouch(c) {
      if (h.mobileCleanup(c), f(c) !== !0)
        return;
      o.hide(c), u.value.classList.add("non-selectable");
      const m = c.target;
      gt(h, "anchor", [
        [m, "touchmove", "mobileCleanup", "passive"],
        [m, "touchend", "mobileCleanup", "passive"],
        [m, "touchcancel", "mobileCleanup", "passive"],
        [u.value, "contextmenu", "prevent", "notPassive"]
      ]), r = setTimeout(() => {
        r = null, o.show(c), c.qAnchorHandled = !0;
      }, 300);
    },
    mobileCleanup(c) {
      u.value.classList.remove("non-selectable"), r !== null && (clearTimeout(r), r = null), e.value === !0 && c !== void 0 && wn();
    }
  }), n = function(c = l.contextMenu) {
    if (l.noParentEvent === !0 || u.value === null)
      return;
    let m;
    c === !0 ? o.$q.platform.is.mobile === !0 ? m = [
      [u.value, "touchstart", "mobileTouch", "passive"]
    ] : m = [
      [u.value, "mousedown", "hide", "passive"],
      [u.value, "contextmenu", "contextClick", "notPassive"]
    ] : m = [
      [u.value, "click", "toggle", "passive"],
      [u.value, "keyup", "toggleKey", "passive"]
    ], gt(h, "anchor", m);
  });
  function s() {
    Mt(h, "anchor");
  }
  function b(c) {
    for (u.value = c; u.value.classList.contains("q-anchor--skip"); )
      u.value = u.value.parentNode;
    n();
  }
  function v() {
    if (l.target === !1 || l.target === "" || o.$el.parentNode === null)
      u.value = null;
    else if (l.target === !0)
      b(o.$el.parentNode);
    else {
      let c = l.target;
      if (typeof l.target == "string")
        try {
          c = document.querySelector(l.target);
        } catch {
          c = void 0;
        }
      c != null ? (u.value = c.$el || c, n()) : (u.value = null, console.error(`Anchor: target "${l.target}" not found`));
    }
  }
  return J(() => l.contextMenu, (c) => {
    u.value !== null && (s(), n(c));
  }), J(() => l.target, () => {
    u.value !== null && s(), v();
  }), J(() => l.noParentEvent, (c) => {
    u.value !== null && (c === !0 ? s() : n());
  }), yt(() => {
    v(), t !== !0 && l.modelValue === !0 && u.value === null && i("update:modelValue", !1);
  }), de(() => {
    r !== null && clearTimeout(r), s();
  }), {
    anchorEl: u,
    canShow: f,
    anchorEvents: h
  };
}
function lo(e, t) {
  const n = R(null);
  let l;
  function o(r, f) {
    const h = `${f !== void 0 ? "add" : "remove"}EventListener`, s = f !== void 0 ? f : l;
    r !== window && r[h]("scroll", s, be.passive), window[h]("scroll", s, be.passive), l = f;
  }
  function i() {
    n.value !== null && (o(n.value), n.value = null);
  }
  const u = J(() => e.noParentEvent, () => {
    n.value !== null && (i(), t());
  });
  return de(u), {
    localScrollTarget: n,
    unconfigureScrollTarget: i,
    changeScrollEvent: o
  };
}
const Vn = {
  modelValue: {
    type: Boolean,
    default: null
  },
  "onUpdate:modelValue": [Function, Array]
}, $n = [
  "beforeShow",
  "show",
  "beforeHide",
  "hide"
];
function Tn({
  showing: e,
  canShow: t,
  // optional
  hideOnRouteChange: n,
  // optional
  handleShow: l,
  // optional
  handleHide: o,
  // optional
  processOnMount: i
  // optional
}) {
  const u = te(), { props: r, emit: f, proxy: h } = u;
  let s;
  function b(k) {
    e.value === !0 ? m(k) : v(k);
  }
  function v(k) {
    if (r.disable === !0 || k !== void 0 && k.qAnchorHandled === !0 || t !== void 0 && t(k) !== !0)
      return;
    const w = r["onUpdate:modelValue"] !== void 0;
    w === !0 && (f("update:modelValue", !0), s = k, pe(() => {
      s === k && (s = void 0);
    })), (r.modelValue === null || w === !1) && c(k);
  }
  function c(k) {
    e.value !== !0 && (e.value = !0, f("beforeShow", k), l !== void 0 ? l(k) : f("show", k));
  }
  function m(k) {
    if (r.disable === !0)
      return;
    const w = r["onUpdate:modelValue"] !== void 0;
    w === !0 && (f("update:modelValue", !1), s = k, pe(() => {
      s === k && (s = void 0);
    })), (r.modelValue === null || w === !1) && y(k);
  }
  function y(k) {
    e.value !== !1 && (e.value = !1, f("beforeHide", k), o !== void 0 ? o(k) : f("hide", k));
  }
  function p(k) {
    r.disable === !0 && k === !0 ? r["onUpdate:modelValue"] !== void 0 && f("update:modelValue", !1) : k === !0 !== e.value && (k === !0 ? c : y)(s);
  }
  J(() => r.modelValue, p), n !== void 0 && zl(u) === !0 && J(() => h.$route.fullPath, () => {
    n.value === !0 && e.value === !0 && m();
  }), i === !0 && yt(() => {
    p(r.modelValue);
  });
  const S = { show: v, hide: m, toggle: b };
  return Object.assign(h, S), S;
}
const hl = {};
let Ii = 1, Di = document.body;
function ji(e, t) {
  const n = document.createElement("div");
  if (n.id = t !== void 0 ? `q-portal--${t}--${Ii++}` : e, hl.globalNodes !== void 0) {
    const l = hl.globalNodes.class;
    l !== void 0 && (n.className = l);
  }
  return Di.appendChild(n), n;
}
function Ni(e) {
  e.remove();
}
const it = [];
function Wi(e) {
  return it.find(
    (t) => t.contentEl !== null && t.contentEl.contains(e)
  );
}
function oo(e, t) {
  do {
    if (e.$options.name === "QMenu") {
      if (e.hide(t), e.$props.separateClosePopup === !0)
        return Pt(e);
    } else if (e.__qPortal === !0) {
      const n = Pt(e);
      return n !== void 0 && n.$options.name === "QPopupProxy" ? (e.hide(t), n) : e;
    }
    e = Pt(e);
  } while (e != null);
}
function Ki(e, t, n) {
  for (; n !== 0 && e !== void 0 && e !== null; ) {
    if (e.__qPortal === !0) {
      if (n--, e.$options.name === "QMenu") {
        e = oo(e, t);
        continue;
      }
      e.hide(t);
    }
    e = Pt(e);
  }
}
function Qi(e) {
  for (e = e.parent; e != null; ) {
    if (e.type.name === "QGlobalDialog")
      return !0;
    if (e.type.name === "QDialog" || e.type.name === "QMenu")
      return !1;
    e = e.parent;
  }
  return !1;
}
function Ln(e, t, n, l) {
  const o = R(!1), i = R(!1);
  let u = null;
  const r = {}, f = l === "dialog" && Qi(e);
  function h(b) {
    if (b === !0) {
      el(r), i.value = !0;
      return;
    }
    i.value = !1, o.value === !1 && (f === !1 && u === null && (u = ji(!1, l)), o.value = !0, it.push(e.proxy), Uo(r));
  }
  function s(b) {
    if (i.value = !1, b !== !0)
      return;
    el(r), o.value = !1;
    const v = it.indexOf(e.proxy);
    v !== -1 && it.splice(v, 1), u !== null && (Ni(u), u = null);
  }
  return Ao(() => {
    s(!0);
  }), e.proxy.__qPortal = !0, _n(e.proxy, "contentEl", () => t.value), {
    showPortal: h,
    hidePortal: s,
    portalIsActive: o,
    portalIsAccessible: i,
    renderPortal: () => f === !0 ? n() : o.value === !0 ? [g(Mo, { to: u }, n())] : void 0
  };
}
const On = {
  transitionShow: {
    type: String,
    default: "fade"
  },
  transitionHide: {
    type: String,
    default: "fade"
  },
  transitionDuration: {
    type: [String, Number],
    default: 300
  }
};
function Pn(e, t = () => {
}, n = () => {
}) {
  return {
    transitionProps: d(() => {
      const l = `q-transition--${e.transitionShow || t()}`, o = `q-transition--${e.transitionHide || n()}`;
      return {
        appear: !0,
        enterFromClass: `${l}-enter-from`,
        enterActiveClass: `${l}-enter-active`,
        enterToClass: `${l}-enter-to`,
        leaveFromClass: `${o}-leave-from`,
        leaveActiveClass: `${o}-leave-active`,
        leaveToClass: `${o}-leave-to`
      };
    }),
    transitionStyle: d(() => `--q-transition-duration: ${e.transitionDuration}ms`)
  };
}
function Rn() {
  let e;
  const t = te();
  function n() {
    e = void 0;
  }
  return bt(n), de(n), {
    removeTick: n,
    registerTick(l) {
      e = l, pe(() => {
        e === l && (Cn(t) === !1 && e(), e = void 0);
      });
    }
  };
}
function An() {
  let e = null;
  const t = te();
  function n() {
    e !== null && (clearTimeout(e), e = null);
  }
  return bt(n), de(n), {
    removeTimeout: n,
    registerTimeout(l, o) {
      n(), Cn(t) === !1 && (e = setTimeout(l, o));
    }
  };
}
const Ui = [null, document, document.body, document.scrollingElement, document.documentElement];
function io(e, t) {
  let n = Mi(t);
  if (n === void 0) {
    if (e == null)
      return window;
    n = e.closest(".scroll,.scroll-y,.overflow-auto");
  }
  return Ui.includes(n) ? window : n;
}
function Xi(e) {
  return e === window ? window.pageYOffset || window.scrollY || document.body.scrollTop || 0 : e.scrollTop;
}
function Yi(e) {
  return e === window ? window.pageXOffset || window.scrollX || document.body.scrollLeft || 0 : e.scrollLeft;
}
let $t;
function Gi() {
  if ($t !== void 0)
    return $t;
  const e = document.createElement("p"), t = document.createElement("div");
  yn(e, {
    width: "100%",
    height: "200px"
  }), yn(t, {
    position: "absolute",
    top: "0px",
    left: "0px",
    visibility: "hidden",
    width: "200px",
    height: "150px",
    overflow: "hidden"
  }), t.appendChild(e), document.body.appendChild(t);
  const n = e.offsetWidth;
  t.style.overflow = "scroll";
  let l = e.offsetWidth;
  return n === l && (l = t.clientWidth), t.remove(), $t = n - l, $t;
}
function Ji(e, t = !0) {
  return !e || e.nodeType !== Node.ELEMENT_NODE ? !1 : t ? e.scrollHeight > e.clientHeight && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-y"])) : e.scrollWidth > e.clientWidth && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-x"]));
}
const Ne = [];
let rt;
function Zi(e) {
  rt = e.keyCode === 27;
}
function ea() {
  rt === !0 && (rt = !1);
}
function ta(e) {
  rt === !0 && (rt = !1, Oe(e, 27) === !0 && Ne[Ne.length - 1](e));
}
function ao(e) {
  window[e]("keydown", Zi), window[e]("blur", ea), window[e]("keyup", ta), rt = !1;
}
function uo(e) {
  he.is.desktop === !0 && (Ne.push(e), Ne.length === 1 && ao("addEventListener"));
}
function Ht(e) {
  const t = Ne.indexOf(e);
  t > -1 && (Ne.splice(t, 1), Ne.length === 0 && ao("removeEventListener"));
}
const We = [];
function ro(e) {
  We[We.length - 1](e);
}
function so(e) {
  he.is.desktop === !0 && (We.push(e), We.length === 1 && document.body.addEventListener("focusin", ro));
}
function Sn(e) {
  const t = We.indexOf(e);
  t > -1 && (We.splice(t, 1), We.length === 0 && document.body.removeEventListener("focusin", ro));
}
const { notPassiveCapture: It } = be, Ke = [];
function Dt(e) {
  const t = e.target;
  if (t === void 0 || t.nodeType === 8 || t.classList.contains("no-pointer-events") === !0)
    return;
  let n = it.length - 1;
  for (; n >= 0; ) {
    const l = it[n].$;
    if (l.type.name === "QTooltip") {
      n--;
      continue;
    }
    if (l.type.name !== "QDialog")
      break;
    if (l.props.seamless !== !0)
      return;
    n--;
  }
  for (let l = Ke.length - 1; l >= 0; l--) {
    const o = Ke[l];
    if ((o.anchorEl.value === null || o.anchorEl.value.contains(t) === !1) && (t === document.body || o.innerRef.value !== null && o.innerRef.value.contains(t) === !1))
      e.qClickOutside = !0, o.onClickOutside(e);
    else
      return;
  }
}
function co(e) {
  Ke.push(e), Ke.length === 1 && (document.addEventListener("mousedown", Dt, It), document.addEventListener("touchstart", Dt, It));
}
function jt(e) {
  const t = Ke.findIndex((n) => n === e);
  t > -1 && (Ke.splice(t, 1), Ke.length === 0 && (document.removeEventListener("mousedown", Dt, It), document.removeEventListener("touchstart", Dt, It)));
}
let gl, pl;
function Nt(e) {
  const t = e.split(" ");
  return t.length !== 2 ? !1 : ["top", "center", "bottom"].includes(t[0]) !== !0 ? (console.error("Anchor/Self position must start with one of top/center/bottom"), !1) : ["left", "middle", "right", "start", "end"].includes(t[1]) !== !0 ? (console.error("Anchor/Self position must end with one of left/middle/right/start/end"), !1) : !0;
}
function fo(e) {
  return e ? !(e.length !== 2 || typeof e[0] != "number" || typeof e[1] != "number") : !0;
}
const xn = {
  "start#ltr": "left",
  "start#rtl": "right",
  "end#ltr": "right",
  "end#rtl": "left"
};
["left", "middle", "right"].forEach((e) => {
  xn[`${e}#ltr`] = e, xn[`${e}#rtl`] = e;
});
function Wt(e, t) {
  const n = e.split(" ");
  return {
    vertical: n[0],
    horizontal: xn[`${n[1]}#${t === !0 ? "rtl" : "ltr"}`]
  };
}
function na(e, t) {
  let { top: n, left: l, right: o, bottom: i, width: u, height: r } = e.getBoundingClientRect();
  return t !== void 0 && (n -= t[1], l -= t[0], i += t[1], o += t[0], u += t[0], r += t[1]), {
    top: n,
    bottom: i,
    height: r,
    left: l,
    right: o,
    width: u,
    middle: l + (o - l) / 2,
    center: n + (i - n) / 2
  };
}
function la(e, t, n) {
  let { top: l, left: o } = e.getBoundingClientRect();
  return l += t.top, o += t.left, n !== void 0 && (l += n[1], o += n[0]), {
    top: l,
    bottom: l + 1,
    height: 1,
    left: o,
    right: o + 1,
    width: 1,
    middle: o,
    center: l
  };
}
function oa(e, t) {
  return {
    top: 0,
    center: t / 2,
    bottom: t,
    left: 0,
    middle: e / 2,
    right: e
  };
}
function bl(e, t, n, l) {
  return {
    top: e[n.vertical] - t[l.vertical],
    left: e[n.horizontal] - t[l.horizontal]
  };
}
function Mn(e, t = 0) {
  if (e.targetEl === null || e.anchorEl === null || t > 5)
    return;
  if (e.targetEl.offsetHeight === 0 || e.targetEl.offsetWidth === 0) {
    setTimeout(() => {
      Mn(e, t + 1);
    }, 10);
    return;
  }
  const {
    targetEl: n,
    offset: l,
    anchorEl: o,
    anchorOrigin: i,
    selfOrigin: u,
    absoluteOffset: r,
    fit: f,
    cover: h,
    maxHeight: s,
    maxWidth: b
  } = e;
  if (he.is.ios === !0 && window.visualViewport !== void 0) {
    const M = document.body.style, { offsetLeft: O, offsetTop: I } = window.visualViewport;
    O !== gl && (M.setProperty("--q-pe-left", O + "px"), gl = O), I !== pl && (M.setProperty("--q-pe-top", I + "px"), pl = I);
  }
  const { scrollLeft: v, scrollTop: c } = n, m = r === void 0 ? na(o, h === !0 ? [0, 0] : l) : la(o, r, l);
  Object.assign(n.style, {
    top: 0,
    left: 0,
    minWidth: null,
    minHeight: null,
    maxWidth: b || "100vw",
    maxHeight: s || "100vh",
    visibility: "visible"
  });
  const { offsetWidth: y, offsetHeight: p } = n, { elWidth: S, elHeight: k } = f === !0 || h === !0 ? { elWidth: Math.max(m.width, y), elHeight: h === !0 ? Math.max(m.height, p) : p } : { elWidth: y, elHeight: p };
  let w = { maxWidth: b, maxHeight: s };
  (f === !0 || h === !0) && (w.minWidth = m.width + "px", h === !0 && (w.minHeight = m.height + "px")), Object.assign(n.style, w);
  const q = oa(S, k);
  let x = bl(m, q, i, u);
  if (r === void 0 || l === void 0)
    un(x, m, q, i, u);
  else {
    const { top: M, left: O } = x;
    un(x, m, q, i, u);
    let I = !1;
    if (x.top !== M) {
      I = !0;
      const K = 2 * l[1];
      m.center = m.top -= K, m.bottom -= K + 2;
    }
    if (x.left !== O) {
      I = !0;
      const K = 2 * l[0];
      m.middle = m.left -= K, m.right -= K + 2;
    }
    I === !0 && (x = bl(m, q, i, u), un(x, m, q, i, u));
  }
  w = {
    top: x.top + "px",
    left: x.left + "px"
  }, x.maxHeight !== void 0 && (w.maxHeight = x.maxHeight + "px", m.height > x.maxHeight && (w.minHeight = w.maxHeight)), x.maxWidth !== void 0 && (w.maxWidth = x.maxWidth + "px", m.width > x.maxWidth && (w.minWidth = w.maxWidth)), Object.assign(n.style, w), n.scrollTop !== c && (n.scrollTop = c), n.scrollLeft !== v && (n.scrollLeft = v);
}
function un(e, t, n, l, o) {
  const i = n.bottom, u = n.right, r = Gi(), f = window.innerHeight - r, h = document.body.clientWidth;
  if (e.top < 0 || e.top + i > f)
    if (o.vertical === "center")
      e.top = t[l.vertical] > f / 2 ? Math.max(0, f - i) : 0, e.maxHeight = Math.min(i, f);
    else if (t[l.vertical] > f / 2) {
      const s = Math.min(
        f,
        l.vertical === "center" ? t.center : l.vertical === o.vertical ? t.bottom : t.top
      );
      e.maxHeight = Math.min(i, s), e.top = Math.max(0, s - i);
    } else
      e.top = Math.max(
        0,
        l.vertical === "center" ? t.center : l.vertical === o.vertical ? t.top : t.bottom
      ), e.maxHeight = Math.min(i, f - e.top);
  if (e.left < 0 || e.left + u > h)
    if (e.maxWidth = Math.min(u, h), o.horizontal === "middle")
      e.left = t[l.horizontal] > h / 2 ? Math.max(0, h - u) : 0;
    else if (t[l.horizontal] > h / 2) {
      const s = Math.min(
        h,
        l.horizontal === "middle" ? t.middle : l.horizontal === o.horizontal ? t.right : t.left
      );
      e.maxWidth = Math.min(u, s), e.left = Math.max(0, s - e.maxWidth);
    } else
      e.left = Math.max(
        0,
        l.horizontal === "middle" ? t.middle : l.horizontal === o.horizontal ? t.left : t.right
      ), e.maxWidth = Math.min(u, h - e.left);
}
const ia = ie({
  name: "QMenu",
  inheritAttrs: !1,
  props: {
    ...to,
    ...Vn,
    ...Be,
    ...On,
    persistent: Boolean,
    autoClose: Boolean,
    separateClosePopup: Boolean,
    noRouteDismiss: Boolean,
    noRefocus: Boolean,
    noFocus: Boolean,
    fit: Boolean,
    cover: Boolean,
    square: Boolean,
    anchor: {
      type: String,
      validator: Nt
    },
    self: {
      type: String,
      validator: Nt
    },
    offset: {
      type: Array,
      validator: fo
    },
    scrollTarget: {
      default: void 0
    },
    touchPosition: Boolean,
    maxHeight: {
      type: String,
      default: null
    },
    maxWidth: {
      type: String,
      default: null
    }
  },
  emits: [
    ...$n,
    "click",
    "escapeKey"
  ],
  setup(e, { slots: t, emit: n, attrs: l }) {
    let o = null, i, u, r;
    const f = te(), { proxy: h } = f, { $q: s } = h, b = R(null), v = R(!1), c = d(
      () => e.persistent !== !0 && e.noRouteDismiss !== !0
    ), m = Ve(e, s), { registerTick: y, removeTick: p } = Rn(), { registerTimeout: S } = An(), { transitionProps: k, transitionStyle: w } = Pn(e), { localScrollTarget: q, changeScrollEvent: x, unconfigureScrollTarget: M } = lo(e, L), { anchorEl: O, canShow: I } = no({ showing: v }), { hide: K } = Tn({
      showing: v,
      canShow: I,
      handleShow: _,
      handleHide: E,
      hideOnRouteChange: c,
      processOnMount: !0
    }), { showPortal: Z, hidePortal: W, renderPortal: z } = Ln(f, b, ae, "menu"), X = {
      anchorEl: O,
      innerRef: b,
      onClickOutside(C) {
        if (e.persistent !== !0 && v.value === !0)
          return K(C), // always prevent touch event
          (C.type === "touchstart" || C.target.classList.contains("q-dialog__backdrop")) && oe(C), !0;
      }
    }, T = d(
      () => Wt(
        e.anchor || (e.cover === !0 ? "center middle" : "bottom start"),
        s.lang.rtl
      )
    ), j = d(() => e.cover === !0 ? T.value : Wt(e.self || "top start", s.lang.rtl)), U = d(
      () => (e.square === !0 ? " q-menu--square" : "") + (m.value === !0 ? " q-menu--dark q-dark" : "")
    ), $ = d(() => e.autoClose === !0 ? { onClick: Q } : {}), N = d(
      () => v.value === !0 && e.persistent !== !0
    );
    J(N, (C) => {
      C === !0 ? (uo(A), co(X)) : (Ht(A), jt(X));
    });
    function re() {
      Ut(() => {
        let C = b.value;
        C && C.contains(document.activeElement) !== !0 && (C = C.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || C.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || C.querySelector("[autofocus], [data-autofocus]") || C, C.focus({ preventScroll: !0 }));
      });
    }
    function _(C) {
      if (o = e.noRefocus === !1 ? document.activeElement : null, so(P), Z(), L(), i = void 0, C !== void 0 && (e.touchPosition || e.contextMenu)) {
        const se = Al(C);
        if (se.left !== void 0) {
          const { top: $e, left: Pe } = O.value.getBoundingClientRect();
          i = { left: se.left - Pe, top: se.top - $e };
        }
      }
      u === void 0 && (u = J(
        () => s.screen.width + "|" + s.screen.height + "|" + e.self + "|" + e.anchor + "|" + s.lang.rtl,
        H
      )), e.noFocus !== !0 && document.activeElement.blur(), y(() => {
        H(), e.noFocus !== !0 && re();
      }), S(() => {
        s.platform.is.ios === !0 && (r = e.autoClose, b.value.click()), H(), Z(!0), n("show", C);
      }, e.transitionDuration);
    }
    function E(C) {
      p(), W(), F(!0), o !== null && // menu was hidden from code or ESC plugin
      (C === void 0 || C.qClickOutside !== !0) && (((C && C.type.indexOf("key") === 0 ? o.closest('[tabindex]:not([tabindex^="-"])') : void 0) || o).focus(), o = null), S(() => {
        W(!0), n("hide", C);
      }, e.transitionDuration);
    }
    function F(C) {
      i = void 0, u !== void 0 && (u(), u = void 0), (C === !0 || v.value === !0) && (Sn(P), M(), jt(X), Ht(A)), C !== !0 && (o = null);
    }
    function L() {
      (O.value !== null || e.scrollTarget !== void 0) && (q.value = io(O.value, e.scrollTarget), x(q.value, H));
    }
    function Q(C) {
      r !== !0 ? (oo(h, C), n("click", C)) : r = !1;
    }
    function P(C) {
      N.value === !0 && e.noFocus !== !0 && Zl(b.value, C.target) !== !0 && re();
    }
    function A(C) {
      n("escapeKey"), K(C);
    }
    function H() {
      Mn({
        targetEl: b.value,
        offset: e.offset,
        anchorEl: O.value,
        anchorOrigin: T.value,
        selfOrigin: j.value,
        absoluteOffset: i,
        fit: e.fit,
        cover: e.cover,
        maxHeight: e.maxHeight,
        maxWidth: e.maxWidth
      });
    }
    function ae() {
      return g(
        Qe,
        k.value,
        () => v.value === !0 ? g("div", {
          role: "menu",
          ...l,
          ref: b,
          tabindex: -1,
          class: [
            "q-menu q-position-engine scroll" + U.value,
            l.class
          ],
          style: [
            l.style,
            w.value
          ],
          ...$.value
        }, me(t.default)) : null
      );
    }
    return de(F), Object.assign(h, { focus: re, updatePosition: H }), z;
  }
});
function aa(e, t, n) {
  function l() {
  }
  return de(() => {
    e.value === !0 && void 0;
  }), {
    removeFromHistory: l,
    addToHistory() {
    }
  };
}
let ft = 0, rn, sn, mt, cn = !1, yl, wl, Sl, Fe = null;
function ua(e) {
  ra(e) && oe(e);
}
function ra(e) {
  if (e.target === document.body || e.target.classList.contains("q-layout__backdrop"))
    return !0;
  const t = Qo(e), n = e.shiftKey && !e.deltaX, l = !n && Math.abs(e.deltaX) <= Math.abs(e.deltaY), o = n || l ? e.deltaY : e.deltaX;
  for (let i = 0; i < t.length; i++) {
    const u = t[i];
    if (Ji(u, l))
      return l ? o < 0 && u.scrollTop === 0 ? !0 : o > 0 && u.scrollTop + u.clientHeight === u.scrollHeight : o < 0 && u.scrollLeft === 0 ? !0 : o > 0 && u.scrollLeft + u.clientWidth === u.scrollWidth;
  }
  return !0;
}
function xl(e) {
  e.target === document && (document.scrollingElement.scrollTop = document.scrollingElement.scrollTop);
}
function Tt(e) {
  cn !== !0 && (cn = !0, requestAnimationFrame(() => {
    cn = !1;
    const { height: t } = e.target, { clientHeight: n, scrollTop: l } = document.scrollingElement;
    (mt === void 0 || t !== window.innerHeight) && (mt = n - t, document.scrollingElement.scrollTop = l), l > mt && (document.scrollingElement.scrollTop -= Math.ceil((l - mt) / 8));
  }));
}
function kl(e) {
  const t = document.body, n = window.visualViewport !== void 0;
  if (e === "add") {
    const { overflowY: l, overflowX: o } = window.getComputedStyle(t);
    rn = Yi(window), sn = Xi(window), yl = t.style.left, wl = t.style.top, Sl = window.location.href, t.style.left = `-${rn}px`, t.style.top = `-${sn}px`, o !== "hidden" && (o === "scroll" || t.scrollWidth > window.innerWidth) && t.classList.add("q-body--force-scrollbar-x"), l !== "hidden" && (l === "scroll" || t.scrollHeight > window.innerHeight) && t.classList.add("q-body--force-scrollbar-y"), t.classList.add("q-body--prevent-scroll"), document.qScrollPrevented = !0, he.is.ios === !0 && (n === !0 ? (window.scrollTo(0, 0), window.visualViewport.addEventListener("resize", Tt, be.passiveCapture), window.visualViewport.addEventListener("scroll", Tt, be.passiveCapture), window.scrollTo(0, 0)) : window.addEventListener("scroll", xl, be.passiveCapture));
  }
  he.is.desktop === !0 && he.is.mac === !0 && window[`${e}EventListener`]("wheel", ua, be.notPassive), e === "remove" && (he.is.ios === !0 && (n === !0 ? (window.visualViewport.removeEventListener("resize", Tt, be.passiveCapture), window.visualViewport.removeEventListener("scroll", Tt, be.passiveCapture)) : window.removeEventListener("scroll", xl, be.passiveCapture)), t.classList.remove("q-body--prevent-scroll"), t.classList.remove("q-body--force-scrollbar-x"), t.classList.remove("q-body--force-scrollbar-y"), document.qScrollPrevented = !1, t.style.left = yl, t.style.top = wl, window.location.href === Sl && window.scrollTo(rn, sn), mt = void 0);
}
function sa(e) {
  let t = "add";
  if (e === !0) {
    if (ft++, Fe !== null) {
      clearTimeout(Fe), Fe = null;
      return;
    }
    if (ft > 1)
      return;
  } else {
    if (ft === 0 || (ft--, ft > 0))
      return;
    if (t = "remove", he.is.ios === !0 && he.is.nativeMobile === !0) {
      Fe !== null && clearTimeout(Fe), Fe = setTimeout(() => {
        kl(t), Fe = null;
      }, 100);
      return;
    }
  }
  kl(t);
}
function ca() {
  let e;
  return {
    preventBodyScroll(t) {
      t !== e && (e !== void 0 || t === !0) && (e = t, sa(t));
    }
  };
}
let Lt = 0;
const da = {
  standard: "fixed-full flex-center",
  top: "fixed-top justify-center",
  bottom: "fixed-bottom justify-center",
  right: "fixed-right items-center",
  left: "fixed-left items-center"
}, ql = {
  standard: ["scale", "scale"],
  top: ["slide-down", "slide-up"],
  bottom: ["slide-up", "slide-down"],
  right: ["slide-left", "slide-right"],
  left: ["slide-right", "slide-left"]
}, vo = ie({
  name: "QDialog",
  inheritAttrs: !1,
  props: {
    ...Vn,
    ...On,
    transitionShow: String,
    // override useTransitionProps
    transitionHide: String,
    // override useTransitionProps
    persistent: Boolean,
    autoClose: Boolean,
    allowFocusOutside: Boolean,
    noEscDismiss: Boolean,
    noBackdropDismiss: Boolean,
    noRouteDismiss: Boolean,
    noRefocus: Boolean,
    noFocus: Boolean,
    noShake: Boolean,
    seamless: Boolean,
    maximized: Boolean,
    fullWidth: Boolean,
    fullHeight: Boolean,
    square: Boolean,
    position: {
      type: String,
      default: "standard",
      validator: (e) => e === "standard" || ["top", "bottom", "left", "right"].includes(e)
    }
  },
  emits: [
    ...$n,
    "shake",
    "click",
    "escapeKey"
  ],
  setup(e, { slots: t, emit: n, attrs: l }) {
    const o = te(), i = R(null), u = R(!1), r = R(!1);
    let f = null, h = null, s, b;
    const v = d(
      () => e.persistent !== !0 && e.noRouteDismiss !== !0 && e.seamless !== !0
    ), { preventBodyScroll: c } = ca(), { registerTimeout: m } = An(), { registerTick: y, removeTick: p } = Rn(), { transitionProps: S, transitionStyle: k } = Pn(
      e,
      () => ql[e.position][0],
      () => ql[e.position][1]
    ), { showPortal: w, hidePortal: q, portalIsAccessible: x, renderPortal: M } = Ln(
      o,
      i,
      Q,
      "dialog"
    ), { hide: O } = Tn({
      showing: u,
      hideOnRouteChange: v,
      handleShow: T,
      handleHide: j,
      processOnMount: !0
    }), { addToHistory: I, removeFromHistory: K } = aa(u), Z = d(
      () => `q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized === !0 ? "maximized" : "minimized"} q-dialog__inner--${e.position} ${da[e.position]}` + (r.value === !0 ? " q-dialog__inner--animating" : "") + (e.fullWidth === !0 ? " q-dialog__inner--fullwidth" : "") + (e.fullHeight === !0 ? " q-dialog__inner--fullheight" : "") + (e.square === !0 ? " q-dialog__inner--square" : "")
    ), W = d(() => u.value === !0 && e.seamless !== !0), z = d(() => e.autoClose === !0 ? { onClick: E } : {}), X = d(() => [
      `q-dialog fullscreen no-pointer-events q-dialog--${W.value === !0 ? "modal" : "seamless"}`,
      l.class
    ]);
    J(() => e.maximized, (P) => {
      u.value === !0 && _(P);
    }), J(W, (P) => {
      c(P), P === !0 ? (so(L), uo(N)) : (Sn(L), Ht(N));
    });
    function T(P) {
      I(), h = e.noRefocus === !1 && document.activeElement !== null ? document.activeElement : null, _(e.maximized), w(), r.value = !0, e.noFocus !== !0 ? (document.activeElement !== null && document.activeElement.blur(), y(U)) : p(), m(() => {
        if (o.proxy.$q.platform.is.ios === !0) {
          if (e.seamless !== !0 && document.activeElement) {
            const { top: A, bottom: H } = document.activeElement.getBoundingClientRect(), { innerHeight: ae } = window, C = window.visualViewport !== void 0 ? window.visualViewport.height : ae;
            A > 0 && H > C / 2 && (document.scrollingElement.scrollTop = Math.min(
              document.scrollingElement.scrollHeight - C,
              H >= ae ? 1 / 0 : Math.ceil(document.scrollingElement.scrollTop + H - C / 2)
            )), document.activeElement.scrollIntoView();
          }
          b = !0, i.value.click(), b = !1;
        }
        w(!0), r.value = !1, n("show", P);
      }, e.transitionDuration);
    }
    function j(P) {
      p(), K(), re(!0), r.value = !0, q(), h !== null && (((P && P.type.indexOf("key") === 0 ? h.closest('[tabindex]:not([tabindex^="-"])') : void 0) || h).focus(), h = null), m(() => {
        q(!0), r.value = !1, n("hide", P);
      }, e.transitionDuration);
    }
    function U(P) {
      Ut(() => {
        let A = i.value;
        A === null || A.contains(document.activeElement) === !0 || (A = (P !== "" ? A.querySelector(P) : null) || A.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || A.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || A.querySelector("[autofocus], [data-autofocus]") || A, A.focus({ preventScroll: !0 }));
      });
    }
    function $(P) {
      P && typeof P.focus == "function" ? P.focus({ preventScroll: !0 }) : U(), n("shake");
      const A = i.value;
      A !== null && (A.classList.remove("q-animate--scale"), A.classList.add("q-animate--scale"), f !== null && clearTimeout(f), f = setTimeout(() => {
        f = null, i.value !== null && (A.classList.remove("q-animate--scale"), U());
      }, 170));
    }
    function N() {
      e.seamless !== !0 && (e.persistent === !0 || e.noEscDismiss === !0 ? e.maximized !== !0 && e.noShake !== !0 && $() : (n("escapeKey"), O()));
    }
    function re(P) {
      f !== null && (clearTimeout(f), f = null), (P === !0 || u.value === !0) && (_(!1), e.seamless !== !0 && (c(!1), Sn(L), Ht(N))), P !== !0 && (h = null);
    }
    function _(P) {
      P === !0 ? s !== !0 && (Lt < 1 && document.body.classList.add("q-body--dialog"), Lt++, s = !0) : s === !0 && (Lt < 2 && document.body.classList.remove("q-body--dialog"), Lt--, s = !1);
    }
    function E(P) {
      b !== !0 && (O(P), n("click", P));
    }
    function F(P) {
      e.persistent !== !0 && e.noBackdropDismiss !== !0 ? O(P) : e.noShake !== !0 && $();
    }
    function L(P) {
      e.allowFocusOutside !== !0 && x.value === !0 && Zl(i.value, P.target) !== !0 && U('[tabindex]:not([tabindex="-1"])');
    }
    Object.assign(o.proxy, {
      // expose public methods
      focus: U,
      shake: $,
      // private but needed by QSelect
      __updateRefocusTarget(P) {
        h = P || null;
      }
    }), de(re);
    function Q() {
      return g("div", {
        role: "dialog",
        "aria-modal": W.value === !0 ? "true" : "false",
        ...l,
        class: X.value
      }, [
        g(Qe, {
          name: "q-transition--fade",
          appear: !0
        }, () => W.value === !0 ? g("div", {
          class: "q-dialog__backdrop fixed-full",
          style: k.value,
          "aria-hidden": "true",
          tabindex: -1,
          onClick: F
        }) : null),
        g(
          Qe,
          S.value,
          () => u.value === !0 ? g("div", {
            ref: i,
            class: Z.value,
            style: k.value,
            tabindex: -1,
            ...z.value
          }, me(t.default)) : null
        )
      ]);
    }
    return M;
  }
});
let Kt = !1;
{
  const e = document.createElement("div");
  e.setAttribute("dir", "rtl"), Object.assign(e.style, {
    width: "1px",
    height: "1px",
    overflow: "auto"
  });
  const t = document.createElement("div");
  Object.assign(t.style, {
    width: "1000px",
    height: "1px"
  }), document.body.appendChild(e), e.appendChild(t), e.scrollLeft = -1e3, Kt = e.scrollLeft >= 0, e.remove();
}
const xe = 1e3, fa = [
  "start",
  "center",
  "end",
  "start-force",
  "center-force",
  "end-force"
], mo = Array.prototype.filter, va = window.getComputedStyle(document.body).overflowAnchor === void 0 ? Ko : function(e, t) {
  e !== null && (e._qOverflowAnimationFrame !== void 0 && cancelAnimationFrame(e._qOverflowAnimationFrame), e._qOverflowAnimationFrame = requestAnimationFrame(() => {
    if (e === null)
      return;
    e._qOverflowAnimationFrame = void 0;
    const n = e.children || [];
    mo.call(n, (o) => o.dataset && o.dataset.qVsAnchor !== void 0).forEach((o) => {
      delete o.dataset.qVsAnchor;
    });
    const l = n[t];
    l && l.dataset && (l.dataset.qVsAnchor = "");
  }));
};
function at(e, t) {
  return e + t;
}
function dn(e, t, n, l, o, i, u, r) {
  const f = e === window ? document.scrollingElement || document.documentElement : e, h = o === !0 ? "offsetWidth" : "offsetHeight", s = {
    scrollStart: 0,
    scrollViewSize: -u - r,
    scrollMaxSize: 0,
    offsetStart: -u,
    offsetEnd: -r
  };
  if (o === !0 ? (e === window ? (s.scrollStart = window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, s.scrollViewSize += document.documentElement.clientWidth) : (s.scrollStart = f.scrollLeft, s.scrollViewSize += f.clientWidth), s.scrollMaxSize = f.scrollWidth, i === !0 && (s.scrollStart = (Kt === !0 ? s.scrollMaxSize - s.scrollViewSize : 0) - s.scrollStart)) : (e === window ? (s.scrollStart = window.pageYOffset || window.scrollY || document.body.scrollTop || 0, s.scrollViewSize += document.documentElement.clientHeight) : (s.scrollStart = f.scrollTop, s.scrollViewSize += f.clientHeight), s.scrollMaxSize = f.scrollHeight), n !== null)
    for (let b = n.previousElementSibling; b !== null; b = b.previousElementSibling)
      b.classList.contains("q-virtual-scroll--skip") === !1 && (s.offsetStart += b[h]);
  if (l !== null)
    for (let b = l.nextElementSibling; b !== null; b = b.nextElementSibling)
      b.classList.contains("q-virtual-scroll--skip") === !1 && (s.offsetEnd += b[h]);
  if (t !== e) {
    const b = f.getBoundingClientRect(), v = t.getBoundingClientRect();
    o === !0 ? (s.offsetStart += v.left - b.left, s.offsetEnd -= v.width) : (s.offsetStart += v.top - b.top, s.offsetEnd -= v.height), e !== window && (s.offsetStart += s.scrollStart), s.offsetEnd += s.scrollMaxSize - s.offsetStart;
  }
  return s;
}
function Cl(e, t, n, l) {
  t === "end" && (t = (e === window ? document.body : e)[n === !0 ? "scrollWidth" : "scrollHeight"]), e === window ? n === !0 ? (l === !0 && (t = (Kt === !0 ? document.body.scrollWidth - document.documentElement.clientWidth : 0) - t), window.scrollTo(t, window.pageYOffset || window.scrollY || document.body.scrollTop || 0)) : window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, t) : n === !0 ? (l === !0 && (t = (Kt === !0 ? e.scrollWidth - e.offsetWidth : 0) - t), e.scrollLeft = t) : e.scrollTop = t;
}
function vt(e, t, n, l) {
  if (n >= l)
    return 0;
  const o = t.length, i = Math.floor(n / xe), u = Math.floor((l - 1) / xe) + 1;
  let r = e.slice(i, u).reduce(at, 0);
  return n % xe !== 0 && (r -= t.slice(i * xe, n).reduce(at, 0)), l % xe !== 0 && l !== o && (r -= t.slice(l, u * xe).reduce(at, 0)), r;
}
const ma = {
  virtualScrollSliceSize: {
    type: [Number, String],
    default: null
  },
  virtualScrollSliceRatioBefore: {
    type: [Number, String],
    default: 1
  },
  virtualScrollSliceRatioAfter: {
    type: [Number, String],
    default: 1
  },
  virtualScrollItemSize: {
    type: [Number, String],
    default: 24
  },
  virtualScrollStickySizeStart: {
    type: [Number, String],
    default: 0
  },
  virtualScrollStickySizeEnd: {
    type: [Number, String],
    default: 0
  },
  tableColspan: [Number, String]
}, ha = {
  virtualScrollHorizontal: Boolean,
  onVirtualScroll: Function,
  ...ma
};
function ga({
  virtualScrollLength: e,
  getVirtualScrollTarget: t,
  getVirtualScrollEl: n,
  virtualScrollItemSizeComputed: l
  // optional
}) {
  const o = te(), { props: i, emit: u, proxy: r } = o, { $q: f } = r;
  let h, s, b, v = [], c;
  const m = R(0), y = R(0), p = R({}), S = R(null), k = R(null), w = R(null), q = R({ from: 0, to: 0 }), x = d(() => i.tableColspan !== void 0 ? i.tableColspan : 100);
  l === void 0 && (l = d(() => i.virtualScrollItemSize));
  const M = d(() => l.value + ";" + i.virtualScrollHorizontal), O = d(
    () => M.value + ";" + i.virtualScrollSliceRatioBefore + ";" + i.virtualScrollSliceRatioAfter
  );
  J(O, () => {
    U();
  }), J(M, I);
  function I() {
    j(s, !0);
  }
  function K(E) {
    j(E === void 0 ? s : E);
  }
  function Z(E, F) {
    const L = t();
    if (L == null || L.nodeType === 8)
      return;
    const Q = dn(
      L,
      n(),
      S.value,
      k.value,
      i.virtualScrollHorizontal,
      f.lang.rtl,
      i.virtualScrollStickySizeStart,
      i.virtualScrollStickySizeEnd
    );
    b !== Q.scrollViewSize && U(Q.scrollViewSize), z(
      L,
      Q,
      Math.min(e.value - 1, Math.max(0, parseInt(E, 10) || 0)),
      0,
      fa.indexOf(F) > -1 ? F : s > -1 && E > s ? "end" : "start"
    );
  }
  function W() {
    const E = t();
    if (E == null || E.nodeType === 8)
      return;
    const F = dn(
      E,
      n(),
      S.value,
      k.value,
      i.virtualScrollHorizontal,
      f.lang.rtl,
      i.virtualScrollStickySizeStart,
      i.virtualScrollStickySizeEnd
    ), L = e.value - 1, Q = F.scrollMaxSize - F.offsetStart - F.offsetEnd - y.value;
    if (h === F.scrollStart)
      return;
    if (F.scrollMaxSize <= 0) {
      z(E, F, 0, 0);
      return;
    }
    b !== F.scrollViewSize && U(F.scrollViewSize), X(q.value.from);
    const P = Math.floor(F.scrollMaxSize - Math.max(F.scrollViewSize, F.offsetEnd) - Math.min(c[L], F.scrollViewSize / 2));
    if (P > 0 && Math.ceil(F.scrollStart) >= P) {
      z(
        E,
        F,
        L,
        F.scrollMaxSize - F.offsetEnd - v.reduce(at, 0)
      );
      return;
    }
    let A = 0, H = F.scrollStart - F.offsetStart, ae = H;
    if (H <= Q && H + F.scrollViewSize >= m.value)
      H -= m.value, A = q.value.from, ae = H;
    else
      for (let C = 0; H >= v[C] && A < L; C++)
        H -= v[C], A += xe;
    for (; H > 0 && A < L; )
      H -= c[A], H > -F.scrollViewSize ? (A++, ae = H) : ae = c[A] + H;
    z(
      E,
      F,
      A,
      ae
    );
  }
  function z(E, F, L, Q, P) {
    const A = typeof P == "string" && P.indexOf("-force") > -1, H = A === !0 ? P.replace("-force", "") : P, ae = H !== void 0 ? H : "start";
    let C = Math.max(0, L - p.value[ae]), se = C + p.value.total;
    se > e.value && (se = e.value, C = Math.max(0, se - p.value.total)), h = F.scrollStart;
    const $e = C !== q.value.from || se !== q.value.to;
    if ($e === !1 && H === void 0) {
      N(L);
      return;
    }
    const { activeElement: Pe } = document, qe = w.value;
    $e === !0 && qe !== null && qe !== Pe && qe.contains(Pe) === !0 && (qe.addEventListener("focusout", T), setTimeout(() => {
      qe !== null && qe.removeEventListener("focusout", T);
    })), va(qe, L - C);
    const xt = H !== void 0 ? c.slice(C, L).reduce(at, 0) : 0;
    if ($e === !0) {
      const Re = se >= q.value.from && C <= q.value.to ? q.value.to : se;
      q.value = { from: C, to: Re }, m.value = vt(v, c, 0, C), y.value = vt(v, c, se, e.value), requestAnimationFrame(() => {
        q.value.to !== se && h === F.scrollStart && (q.value = { from: q.value.from, to: se }, y.value = vt(v, c, se, e.value));
      });
    }
    requestAnimationFrame(() => {
      if (h !== F.scrollStart)
        return;
      $e === !0 && X(C);
      const Re = c.slice(C, L).reduce(at, 0), Ue = Re + F.offsetStart + m.value, kt = Ue + c[L];
      let ct = Ue + Q;
      if (H !== void 0) {
        const Xt = Re - xt, ge = F.scrollStart + Xt;
        ct = A !== !0 && ge < Ue && kt < ge + F.scrollViewSize ? ge : H === "end" ? kt - F.scrollViewSize : Ue - (H === "start" ? 0 : Math.round((F.scrollViewSize - c[L]) / 2));
      }
      h = ct, Cl(
        E,
        ct,
        i.virtualScrollHorizontal,
        f.lang.rtl
      ), N(L);
    });
  }
  function X(E) {
    const F = w.value;
    if (F) {
      const L = mo.call(
        F.children,
        (C) => C.classList && C.classList.contains("q-virtual-scroll--skip") === !1
      ), Q = L.length, P = i.virtualScrollHorizontal === !0 ? (C) => C.getBoundingClientRect().width : (C) => C.offsetHeight;
      let A = E, H, ae;
      for (let C = 0; C < Q; ) {
        for (H = P(L[C]), C++; C < Q && L[C].classList.contains("q-virtual-scroll--with-prev") === !0; )
          H += P(L[C]), C++;
        ae = H - c[A], ae !== 0 && (c[A] += ae, v[Math.floor(A / xe)] += ae), A++;
      }
    }
  }
  function T() {
    w.value !== null && w.value !== void 0 && w.value.focus();
  }
  function j(E, F) {
    const L = 1 * l.value;
    (F === !0 || Array.isArray(c) === !1) && (c = []);
    const Q = c.length;
    c.length = e.value;
    for (let A = e.value - 1; A >= Q; A--)
      c[A] = L;
    const P = Math.floor((e.value - 1) / xe);
    v = [];
    for (let A = 0; A <= P; A++) {
      let H = 0;
      const ae = Math.min((A + 1) * xe, e.value);
      for (let C = A * xe; C < ae; C++)
        H += c[C];
      v.push(H);
    }
    s = -1, h = void 0, m.value = vt(v, c, 0, q.value.from), y.value = vt(v, c, q.value.to, e.value), E >= 0 ? (X(q.value.from), pe(() => {
      Z(E);
    })) : re();
  }
  function U(E) {
    if (E === void 0 && typeof window < "u") {
      const H = t();
      H != null && H.nodeType !== 8 && (E = dn(
        H,
        n(),
        S.value,
        k.value,
        i.virtualScrollHorizontal,
        f.lang.rtl,
        i.virtualScrollStickySizeStart,
        i.virtualScrollStickySizeEnd
      ).scrollViewSize);
    }
    b = E;
    const F = parseFloat(i.virtualScrollSliceRatioBefore) || 0, L = parseFloat(i.virtualScrollSliceRatioAfter) || 0, Q = 1 + F + L, P = E === void 0 || E <= 0 ? 1 : Math.ceil(E / l.value), A = Math.max(
      1,
      P,
      Math.ceil((i.virtualScrollSliceSize > 0 ? i.virtualScrollSliceSize : 10) / Q)
    );
    p.value = {
      total: Math.ceil(A * Q),
      start: Math.ceil(A * F),
      center: Math.ceil(A * (0.5 + F)),
      end: Math.ceil(A * (1 + F)),
      view: P
    };
  }
  function $(E, F) {
    const L = i.virtualScrollHorizontal === !0 ? "width" : "height", Q = {
      ["--q-virtual-scroll-item-" + L]: l.value + "px"
    };
    return [
      E === "tbody" ? g(E, {
        class: "q-virtual-scroll__padding",
        key: "before",
        ref: S
      }, [
        g("tr", [
          g("td", {
            style: { [L]: `${m.value}px`, ...Q },
            colspan: x.value
          })
        ])
      ]) : g(E, {
        class: "q-virtual-scroll__padding",
        key: "before",
        ref: S,
        style: { [L]: `${m.value}px`, ...Q }
      }),
      g(E, {
        class: "q-virtual-scroll__content",
        key: "content",
        ref: w,
        tabindex: -1
      }, F.flat()),
      E === "tbody" ? g(E, {
        class: "q-virtual-scroll__padding",
        key: "after",
        ref: k
      }, [
        g("tr", [
          g("td", {
            style: { [L]: `${y.value}px`, ...Q },
            colspan: x.value
          })
        ])
      ]) : g(E, {
        class: "q-virtual-scroll__padding",
        key: "after",
        ref: k,
        style: { [L]: `${y.value}px`, ...Q }
      })
    ];
  }
  function N(E) {
    s !== E && (i.onVirtualScroll !== void 0 && u("virtualScroll", {
      index: E,
      from: q.value.from,
      to: q.value.to - 1,
      direction: E < s ? "decrease" : "increase",
      ref: r
    }), s = E);
  }
  U();
  const re = Xl(
    W,
    f.platform.is.ios === !0 ? 120 : 35
  );
  Fo(() => {
    U();
  });
  let _ = !1;
  return bt(() => {
    _ = !0;
  }), qn(() => {
    if (_ !== !0)
      return;
    const E = t();
    h !== void 0 && E !== void 0 && E !== null && E.nodeType !== 8 ? Cl(
      E,
      h,
      i.virtualScrollHorizontal,
      f.lang.rtl
    ) : Z(s);
  }), de(() => {
    re.cancel();
  }), Object.assign(r, { scrollTo: Z, reset: I, refresh: K }), {
    virtualScrollSliceRange: q,
    virtualScrollSliceSizeComputed: p,
    setVirtualScrollSize: U,
    onVirtualScrollEvt: re,
    localResetVirtualScroll: j,
    padVirtualScroll: $,
    scrollTo: Z,
    reset: I,
    refresh: K
  };
}
const pa = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/, ba = /[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u, ya = /[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/, wa = /[a-z0-9_ -]$/i;
function Sa(e) {
  return function(n) {
    if (n.type === "compositionend" || n.type === "change") {
      if (n.target.qComposing !== !0)
        return;
      n.target.qComposing = !1, e(n);
    } else
      n.type === "compositionupdate" && n.target.qComposing !== !0 && typeof n.data == "string" && (he.is.firefox === !0 ? wa.test(n.data) === !1 : pa.test(n.data) === !0 || ba.test(n.data) === !0 || ya.test(n.data) === !0) === !0 && (n.target.qComposing = !0);
  };
}
function Le(e, t) {
  if (e === t)
    return !0;
  if (e !== null && t !== null && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor)
      return !1;
    let n, l;
    if (e.constructor === Array) {
      if (n = e.length, n !== t.length)
        return !1;
      for (l = n; l-- !== 0; )
        if (Le(e[l], t[l]) !== !0)
          return !1;
      return !0;
    }
    if (e.constructor === Map) {
      if (e.size !== t.size)
        return !1;
      let i = e.entries();
      for (l = i.next(); l.done !== !0; ) {
        if (t.has(l.value[0]) !== !0)
          return !1;
        l = i.next();
      }
      for (i = e.entries(), l = i.next(); l.done !== !0; ) {
        if (Le(l.value[1], t.get(l.value[0])) !== !0)
          return !1;
        l = i.next();
      }
      return !0;
    }
    if (e.constructor === Set) {
      if (e.size !== t.size)
        return !1;
      const i = e.entries();
      for (l = i.next(); l.done !== !0; ) {
        if (t.has(l.value[0]) !== !0)
          return !1;
        l = i.next();
      }
      return !0;
    }
    if (e.buffer != null && e.buffer.constructor === ArrayBuffer) {
      if (n = e.length, n !== t.length)
        return !1;
      for (l = n; l-- !== 0; )
        if (e[l] !== t[l])
          return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === t.toString();
    const o = Object.keys(e).filter((i) => e[i] !== void 0);
    if (n = o.length, n !== Object.keys(t).filter((i) => t[i] !== void 0).length)
      return !1;
    for (l = n; l-- !== 0; ) {
      const i = o[l];
      if (Le(e[i], t[i]) !== !0)
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function _l(e, t, n) {
  if (n <= t)
    return t;
  const l = n - t + 1;
  let o = t + (e - t) % l;
  return o < t && (o = l + o), o === 0 ? 0 : o;
}
const El = (e) => ["add", "add-unique", "toggle"].includes(e), xa = ".*+?^${}()|[]\\", ka = Object.keys(Bn), qa = ie({
  name: "QSelect",
  inheritAttrs: !1,
  props: {
    ...ha,
    ...jl,
    ...Bn,
    modelValue: {
      required: !0
    },
    multiple: Boolean,
    displayValue: [String, Number],
    displayValueHtml: Boolean,
    dropdownIcon: String,
    options: {
      type: Array,
      default: () => []
    },
    optionValue: [Function, String],
    optionLabel: [Function, String],
    optionDisable: [Function, String],
    hideSelected: Boolean,
    hideDropdownIcon: Boolean,
    fillInput: Boolean,
    maxValues: [Number, String],
    optionsDense: Boolean,
    optionsDark: {
      type: Boolean,
      default: null
    },
    optionsSelectedClass: String,
    optionsHtml: Boolean,
    optionsCover: Boolean,
    menuShrink: Boolean,
    menuAnchor: String,
    menuSelf: String,
    menuOffset: Array,
    popupContentClass: String,
    popupContentStyle: [String, Array, Object],
    useInput: Boolean,
    useChips: Boolean,
    newValueMode: {
      type: String,
      validator: El
    },
    mapOptions: Boolean,
    emitValue: Boolean,
    inputDebounce: {
      type: [Number, String],
      default: 500
    },
    inputClass: [Array, String, Object],
    inputStyle: [Array, String, Object],
    tabindex: {
      type: [String, Number],
      default: 0
    },
    autocomplete: String,
    transitionShow: String,
    transitionHide: String,
    transitionDuration: [String, Number],
    behavior: {
      type: String,
      validator: (e) => ["default", "menu", "dialog"].includes(e),
      default: "default"
    },
    virtualScrollItemSize: {
      type: [Number, String],
      default: void 0
    },
    onNewValue: Function,
    onFilter: Function
  },
  emits: [
    ...Yl,
    "add",
    "remove",
    "inputValue",
    "newValue",
    "keyup",
    "keypress",
    "keydown",
    "filterAbort"
  ],
  setup(e, { slots: t, emit: n }) {
    const { proxy: l } = te(), { $q: o } = l, i = R(!1), u = R(!1), r = R(-1), f = R(""), h = R(!1), s = R(!1);
    let b = null, v, c, m, y = null, p, S, k, w;
    const q = R(null), x = R(null), M = R(null), O = R(null), I = R(null), K = fi(e), Z = Sa(Qn), W = d(() => Array.isArray(e.options) ? e.options.length : 0), z = d(() => e.virtualScrollItemSize === void 0 ? e.optionsDense === !0 ? 24 : 48 : e.virtualScrollItemSize), {
      virtualScrollSliceRange: X,
      virtualScrollSliceSizeComputed: T,
      localResetVirtualScroll: j,
      padVirtualScroll: U,
      onVirtualScrollEvt: $,
      scrollTo: N,
      setVirtualScrollSize: re
    } = ga({
      virtualScrollLength: W,
      getVirtualScrollTarget: wo,
      getVirtualScrollEl: Wn,
      virtualScrollItemSizeComputed: z
    }), _ = Gl(), E = d(() => {
      const a = e.mapOptions === !0 && e.multiple !== !0, V = e.modelValue !== void 0 && (e.modelValue !== null || a === !0) ? e.multiple === !0 && Array.isArray(e.modelValue) ? e.modelValue : [e.modelValue] : [];
      if (e.mapOptions === !0 && Array.isArray(e.options) === !0) {
        const B = e.mapOptions === !0 && v !== void 0 ? v : [], D = V.map((G) => yo(G, B));
        return e.modelValue === null && a === !0 ? D.filter((G) => G !== null) : D;
      }
      return V;
    }), F = d(() => {
      const a = {};
      return ka.forEach((V) => {
        const B = e[V];
        B !== void 0 && (a[V] = B);
      }), a;
    }), L = d(() => e.optionsDark === null ? _.isDark.value : e.optionsDark), Q = d(() => bn(E.value)), P = d(() => {
      let a = "q-field__input q-placeholder col";
      return e.hideSelected === !0 || E.value.length === 0 ? [a, e.inputClass] : (a += " q-field__input--padding", e.inputClass === void 0 ? a : [a, e.inputClass]);
    }), A = d(
      () => (e.virtualScrollHorizontal === !0 ? "q-virtual-scroll--horizontal" : "") + (e.popupContentClass ? " " + e.popupContentClass : "")
    ), H = d(() => W.value === 0), ae = d(
      () => E.value.map((a) => ye.value(a)).join(", ")
    ), C = d(() => e.displayValue !== void 0 ? e.displayValue : ae.value), se = d(() => e.optionsHtml === !0 ? () => !0 : (a) => a != null && a.html === !0), $e = d(() => e.displayValueHtml === !0 || e.displayValue === void 0 && (e.optionsHtml === !0 || E.value.some(se.value))), Pe = d(() => _.focused.value === !0 ? e.tabindex : -1), qe = d(() => {
      const a = {
        tabindex: e.tabindex,
        role: "combobox",
        "aria-label": e.label,
        "aria-readonly": e.readonly === !0 ? "true" : "false",
        "aria-autocomplete": e.useInput === !0 ? "list" : "none",
        "aria-expanded": i.value === !0 ? "true" : "false",
        "aria-controls": `${_.targetUid.value}_lb`
      };
      return r.value >= 0 && (a["aria-activedescendant"] = `${_.targetUid.value}_${r.value}`), a;
    }), xt = d(() => ({
      id: `${_.targetUid.value}_lb`,
      role: "listbox",
      "aria-multiselectable": e.multiple === !0 ? "true" : "false"
    })), Re = d(() => E.value.map((a, V) => ({
      index: V,
      opt: a,
      html: se.value(a),
      selected: !0,
      removeAtIndex: bo,
      toggleOption: Ae,
      tabindex: Pe.value
    }))), Ue = d(() => {
      if (W.value === 0)
        return [];
      const { from: a, to: V } = X.value;
      return e.options.slice(a, V).map((B, D) => {
        const G = Xe.value(B) === !0, Y = a + D, ue = {
          clickable: !0,
          active: !1,
          activeClass: Xt.value,
          manualFocus: !0,
          focused: !1,
          disable: G,
          tabindex: -1,
          dense: e.optionsDense,
          dark: L.value,
          role: "option",
          id: `${_.targetUid.value}_${Y}`,
          onClick: () => {
            Ae(B);
          }
        };
        return G !== !0 && (Jt(B) === !0 && (ue.active = !0), r.value === Y && (ue.focused = !0), ue["aria-selected"] = ue.active === !0 ? "true" : "false", o.platform.is.desktop === !0 && (ue.onMousemove = () => {
          i.value === !0 && Ye(Y);
        })), {
          index: Y,
          opt: B,
          html: se.value(B),
          label: ye.value(B),
          selected: ue.active,
          focused: ue.focused,
          toggleOption: Ae,
          setOptionIndex: Ye,
          itemProps: ue
        };
      });
    }), kt = d(() => e.dropdownIcon !== void 0 ? e.dropdownIcon : o.iconSet.arrow.dropdown), ct = d(
      () => e.optionsCover === !1 && e.outlined !== !0 && e.standout !== !0 && e.borderless !== !0 && e.rounded !== !0
    ), Xt = d(() => e.optionsSelectedClass !== void 0 ? e.optionsSelectedClass : e.color !== void 0 ? `text-${e.color}` : ""), ge = d(() => Gt(e.optionValue, "value")), ye = d(() => Gt(e.optionLabel, "label")), Xe = d(() => Gt(e.optionDisable, "disable")), qt = d(() => E.value.map((a) => ge.value(a))), po = d(() => {
      const a = {
        onInput: Qn,
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        onChange: Z,
        onKeydown: Nn,
        onKeyup: Dn,
        onKeypress: jn,
        onFocus: Hn,
        onClick(V) {
          c === !0 && Te(V);
        }
      };
      return a.onCompositionstart = a.onCompositionupdate = a.onCompositionend = Z, a;
    });
    J(E, (a) => {
      v = a, e.useInput === !0 && e.fillInput === !0 && e.multiple !== !0 && _.innerLoading.value !== !0 && (u.value !== !0 && i.value !== !0 || Q.value !== !0) && (m !== !0 && et(), (u.value === !0 || i.value === !0) && Ge(""));
    }, { immediate: !0 }), J(() => e.fillInput, et), J(i, Zt), J(W, Lo);
    function Fn(a) {
      return e.emitValue === !0 ? ge.value(a) : a;
    }
    function Yt(a) {
      if (a > -1 && a < E.value.length)
        if (e.multiple === !0) {
          const V = e.modelValue.slice();
          n("remove", { index: a, value: V.splice(a, 1)[0] }), n("update:modelValue", V);
        } else
          n("update:modelValue", null);
    }
    function bo(a) {
      Yt(a), _.focus();
    }
    function zn(a, V) {
      const B = Fn(a);
      if (e.multiple !== !0) {
        e.fillInput === !0 && dt(
          ye.value(a),
          !0,
          !0
        ), n("update:modelValue", B);
        return;
      }
      if (E.value.length === 0) {
        n("add", { index: 0, value: B }), n("update:modelValue", e.multiple === !0 ? [B] : B);
        return;
      }
      if (V === !0 && Jt(a) === !0 || e.maxValues !== void 0 && e.modelValue.length >= e.maxValues)
        return;
      const D = e.modelValue.slice();
      n("add", { index: D.length, value: B }), D.push(B), n("update:modelValue", D);
    }
    function Ae(a, V) {
      if (_.editable.value !== !0 || a === void 0 || Xe.value(a) === !0)
        return;
      const B = ge.value(a);
      if (e.multiple !== !0) {
        V !== !0 && (dt(
          e.fillInput === !0 ? ye.value(a) : "",
          !0,
          !0
        ), Me()), x.value !== null && x.value.focus(), (E.value.length === 0 || Le(ge.value(E.value[0]), B) !== !0) && n("update:modelValue", e.emitValue === !0 ? B : a);
        return;
      }
      if ((c !== !0 || h.value === !0) && _.focus(), Hn(), E.value.length === 0) {
        const Y = e.emitValue === !0 ? B : a;
        n("add", { index: 0, value: Y }), n("update:modelValue", e.multiple === !0 ? [Y] : Y);
        return;
      }
      const D = e.modelValue.slice(), G = qt.value.findIndex((Y) => Le(Y, B));
      if (G > -1)
        n("remove", { index: G, value: D.splice(G, 1)[0] });
      else {
        if (e.maxValues !== void 0 && D.length >= e.maxValues)
          return;
        const Y = e.emitValue === !0 ? B : a;
        n("add", { index: D.length, value: Y }), D.push(Y);
      }
      n("update:modelValue", D);
    }
    function Ye(a) {
      if (o.platform.is.desktop !== !0)
        return;
      const V = a > -1 && a < W.value ? a : -1;
      r.value !== V && (r.value = V);
    }
    function Ct(a = 1, V) {
      if (i.value === !0) {
        let B = r.value;
        do
          B = _l(
            B + a,
            -1,
            W.value - 1
          );
        while (B !== -1 && B !== r.value && Xe.value(e.options[B]) === !0);
        r.value !== B && (Ye(B), N(B), V !== !0 && e.useInput === !0 && e.fillInput === !0 && _t(
          B >= 0 ? ye.value(e.options[B]) : p
        ));
      }
    }
    function yo(a, V) {
      const B = (D) => Le(ge.value(D), a);
      return e.options.find(B) || V.find(B) || a;
    }
    function Gt(a, V) {
      const B = a !== void 0 ? a : V;
      return typeof B == "function" ? B : (D) => D !== null && typeof D == "object" && B in D ? D[B] : D;
    }
    function Jt(a) {
      const V = ge.value(a);
      return qt.value.find((B) => Le(B, V)) !== void 0;
    }
    function Hn(a) {
      e.useInput === !0 && x.value !== null && (a === void 0 || x.value === a.target && a.target.value === ae.value) && x.value.select();
    }
    function In(a) {
      Oe(a, 27) === !0 && i.value === !0 && (Te(a), Me(), et()), n("keyup", a);
    }
    function Dn(a) {
      const { value: V } = a.target;
      if (a.keyCode !== void 0) {
        In(a);
        return;
      }
      if (a.target.value = "", b !== null && (clearTimeout(b), b = null), et(), typeof V == "string" && V.length !== 0) {
        const B = V.toLocaleLowerCase(), D = (Y) => {
          const ue = e.options.find((fe) => Y.value(fe).toLocaleLowerCase() === B);
          return ue === void 0 ? !1 : (E.value.indexOf(ue) === -1 ? Ae(ue) : Me(), !0);
        }, G = (Y) => {
          D(ge) !== !0 && (D(ye) === !0 || Y === !0 || Ge(V, !0, () => G(!0)));
        };
        G();
      } else
        _.clearValue(a);
    }
    function jn(a) {
      n("keypress", a);
    }
    function Nn(a) {
      if (n("keydown", a), Kl(a) === !0)
        return;
      const V = f.value.length !== 0 && (e.newValueMode !== void 0 || e.onNewValue !== void 0), B = a.shiftKey !== !0 && e.multiple !== !0 && (r.value > -1 || V === !0);
      if (a.keyCode === 27) {
        ke(a);
        return;
      }
      if (a.keyCode === 9 && B === !1) {
        Je();
        return;
      }
      if (a.target === void 0 || a.target.id !== _.targetUid.value || _.editable.value !== !0)
        return;
      if (a.keyCode === 40 && _.innerLoading.value !== !0 && i.value === !1) {
        oe(a), Ze();
        return;
      }
      if (a.keyCode === 8 && e.hideSelected !== !0 && f.value.length === 0) {
        e.multiple === !0 && Array.isArray(e.modelValue) === !0 ? Yt(e.modelValue.length - 1) : e.multiple !== !0 && e.modelValue !== null && n("update:modelValue", null);
        return;
      }
      (a.keyCode === 35 || a.keyCode === 36) && (typeof f.value != "string" || f.value.length === 0) && (oe(a), r.value = -1, Ct(a.keyCode === 36 ? 1 : -1, e.multiple)), (a.keyCode === 33 || a.keyCode === 34) && T.value !== void 0 && (oe(a), r.value = Math.max(
        -1,
        Math.min(
          W.value,
          r.value + (a.keyCode === 33 ? -1 : 1) * T.value.view
        )
      ), Ct(a.keyCode === 33 ? 1 : -1, e.multiple)), (a.keyCode === 38 || a.keyCode === 40) && (oe(a), Ct(a.keyCode === 38 ? -1 : 1, e.multiple));
      const D = W.value;
      if ((k === void 0 || w < Date.now()) && (k = ""), D > 0 && e.useInput !== !0 && a.key !== void 0 && a.key.length === 1 && a.altKey === !1 && a.ctrlKey === !1 && a.metaKey === !1 && (a.keyCode !== 32 || k.length !== 0)) {
        i.value !== !0 && Ze(a);
        const G = a.key.toLocaleLowerCase(), Y = k.length === 1 && k[0] === G;
        w = Date.now() + 1500, Y === !1 && (oe(a), k += G);
        const ue = new RegExp("^" + k.split("").map((en) => xa.indexOf(en) > -1 ? "\\" + en : en).join(".*"), "i");
        let fe = r.value;
        if (Y === !0 || fe < 0 || ue.test(ye.value(e.options[fe])) !== !0)
          do
            fe = _l(fe + 1, -1, D - 1);
          while (fe !== r.value && (Xe.value(e.options[fe]) === !0 || ue.test(ye.value(e.options[fe])) !== !0));
        r.value !== fe && pe(() => {
          Ye(fe), N(fe), fe >= 0 && e.useInput === !0 && e.fillInput === !0 && _t(ye.value(e.options[fe]));
        });
        return;
      }
      if (!(a.keyCode !== 13 && (a.keyCode !== 32 || e.useInput === !0 || k !== "") && (a.keyCode !== 9 || B === !1))) {
        if (a.keyCode !== 9 && oe(a), r.value > -1 && r.value < D) {
          Ae(e.options[r.value]);
          return;
        }
        if (V === !0) {
          const G = (Y, ue) => {
            if (ue) {
              if (El(ue) !== !0)
                return;
            } else
              ue = e.newValueMode;
            if (dt("", e.multiple !== !0, !0), Y == null)
              return;
            (ue === "toggle" ? Ae : zn)(Y, ue === "add-unique"), e.multiple !== !0 && (x.value !== null && x.value.focus(), Me());
          };
          if (e.onNewValue !== void 0 ? n("newValue", f.value, G) : G(f.value), e.multiple !== !0)
            return;
        }
        i.value === !0 ? Je() : _.innerLoading.value !== !0 && Ze();
      }
    }
    function Wn() {
      return c === !0 ? I.value : M.value !== null && M.value.contentEl !== null ? M.value.contentEl : void 0;
    }
    function wo() {
      return Wn();
    }
    function So() {
      return e.hideSelected === !0 ? [] : t["selected-item"] !== void 0 ? Re.value.map((a) => t["selected-item"](a)).slice() : t.selected !== void 0 ? [].concat(t.selected()) : e.useChips === !0 ? Re.value.map((a, V) => g(Hi, {
        key: "option-" + V,
        removable: _.editable.value === !0 && Xe.value(a.opt) !== !0,
        dense: !0,
        textColor: e.color,
        tabindex: Pe.value,
        onRemove() {
          a.removeAtIndex(V);
        }
      }, () => g("span", {
        class: "ellipsis",
        [a.html === !0 ? "innerHTML" : "textContent"]: ye.value(a.opt)
      }))) : [
        g("span", {
          [$e.value === !0 ? "innerHTML" : "textContent"]: C.value
        })
      ];
    }
    function Kn() {
      if (H.value === !0)
        return t["no-option"] !== void 0 ? t["no-option"]({ inputValue: f.value }) : void 0;
      const a = t.option !== void 0 ? t.option : (B) => g(Ft, {
        key: B.index,
        ...B.itemProps
      }, () => g(
        je,
        () => g(
          hn,
          () => g("span", {
            [B.html === !0 ? "innerHTML" : "textContent"]: B.label
          })
        )
      ));
      let V = U("div", Ue.value.map(a));
      return t["before-options"] !== void 0 && (V = t["before-options"]().concat(V)), Ee(t["after-options"], V);
    }
    function xo(a, V) {
      const B = V === !0 ? { ...qe.value, ..._.splitAttrs.attributes.value } : void 0, D = {
        ref: V === !0 ? x : void 0,
        key: "i_t",
        class: P.value,
        style: e.inputStyle,
        value: f.value !== void 0 ? f.value : "",
        // required for Android in order to show ENTER key when in form
        type: "search",
        ...B,
        id: V === !0 ? _.targetUid.value : void 0,
        maxlength: e.maxlength,
        autocomplete: e.autocomplete,
        "data-autofocus": a === !0 || e.autofocus === !0 || void 0,
        disabled: e.disable === !0,
        readonly: e.readonly === !0,
        ...po.value
      };
      return a !== !0 && c === !0 && (Array.isArray(D.class) === !0 ? D.class = [...D.class, "no-pointer-events"] : D.class += " no-pointer-events"), g("input", D);
    }
    function Qn(a) {
      b !== null && (clearTimeout(b), b = null), !(a && a.target && a.target.qComposing === !0) && (_t(a.target.value || ""), m = !0, p = f.value, _.focused.value !== !0 && (c !== !0 || h.value === !0) && _.focus(), e.onFilter !== void 0 && (b = setTimeout(() => {
        b = null, Ge(f.value);
      }, e.inputDebounce)));
    }
    function _t(a) {
      f.value !== a && (f.value = a, n("inputValue", a));
    }
    function dt(a, V, B) {
      m = B !== !0, e.useInput === !0 && (_t(a), (V === !0 || B !== !0) && (p = a), V !== !0 && Ge(a));
    }
    function Ge(a, V, B) {
      if (e.onFilter === void 0 || V !== !0 && _.focused.value !== !0)
        return;
      _.innerLoading.value === !0 ? n("filterAbort") : (_.innerLoading.value = !0, s.value = !0), a !== "" && e.multiple !== !0 && E.value.length !== 0 && m !== !0 && a === ye.value(E.value[0]) && (a = "");
      const D = setTimeout(() => {
        i.value === !0 && (i.value = !1);
      }, 10);
      y !== null && clearTimeout(y), y = D, n(
        "filter",
        a,
        (G, Y) => {
          (V === !0 || _.focused.value === !0) && y === D && (clearTimeout(y), typeof G == "function" && G(), s.value = !1, pe(() => {
            _.innerLoading.value = !1, _.editable.value === !0 && (V === !0 ? i.value === !0 && Me() : i.value === !0 ? Zt(!0) : i.value = !0), typeof Y == "function" && pe(() => {
              Y(l);
            }), typeof B == "function" && pe(() => {
              B(l);
            });
          }));
        },
        () => {
          _.focused.value === !0 && y === D && (clearTimeout(y), _.innerLoading.value = !1, s.value = !1), i.value === !0 && (i.value = !1);
        }
      );
    }
    function ko() {
      return g(ia, {
        ref: M,
        class: A.value,
        style: e.popupContentStyle,
        modelValue: i.value,
        fit: e.menuShrink !== !0,
        cover: e.optionsCover === !0 && H.value !== !0 && e.useInput !== !0,
        anchor: e.menuAnchor,
        self: e.menuSelf,
        offset: e.menuOffset,
        dark: L.value,
        noParentEvent: !0,
        noRefocus: !0,
        noFocus: !0,
        square: ct.value,
        transitionShow: e.transitionShow,
        transitionHide: e.transitionHide,
        transitionDuration: e.transitionDuration,
        separateClosePopup: !0,
        ...xt.value,
        onScrollPassive: $,
        onBeforeShow: Xn,
        onBeforeHide: qo,
        onShow: Co
      }, Kn);
    }
    function qo(a) {
      Yn(a), Je();
    }
    function Co() {
      re();
    }
    function _o(a) {
      Te(a), x.value !== null && x.value.focus(), h.value = !0, window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, 0);
    }
    function Eo(a) {
      Te(a), pe(() => {
        h.value = !1;
      });
    }
    function Bo() {
      const a = [
        g(Ai, {
          class: `col-auto ${_.fieldClass.value}`,
          ...F.value,
          for: _.targetUid.value,
          dark: L.value,
          square: !0,
          loading: s.value,
          itemAligned: !1,
          filled: !0,
          stackLabel: f.value.length !== 0,
          ..._.splitAttrs.listeners.value,
          onFocus: _o,
          onBlur: Eo
        }, {
          ...t,
          rawControl: () => _.getControl(!0),
          before: void 0,
          after: void 0
        })
      ];
      return i.value === !0 && a.push(
        g("div", {
          ref: I,
          class: A.value + " scroll",
          style: e.popupContentStyle,
          ...xt.value,
          onClick: ke,
          onScrollPassive: $
        }, Kn())
      ), g(vo, {
        ref: O,
        modelValue: u.value,
        position: e.useInput === !0 ? "top" : void 0,
        transitionShow: S,
        transitionHide: e.transitionHide,
        transitionDuration: e.transitionDuration,
        onBeforeShow: Xn,
        onBeforeHide: Vo,
        onHide: $o,
        onShow: To
      }, () => g("div", {
        class: "q-select__dialog" + (L.value === !0 ? " q-select__dialog--dark q-dark" : "") + (h.value === !0 ? " q-select__dialog--focused" : "")
      }, a));
    }
    function Vo(a) {
      Yn(a), O.value !== null && O.value.__updateRefocusTarget(
        _.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")
      ), _.focused.value = !1;
    }
    function $o(a) {
      Me(), _.focused.value === !1 && n("blur", a), et();
    }
    function To() {
      const a = document.activeElement;
      (a === null || a.id !== _.targetUid.value) && x.value !== null && x.value !== a && x.value.focus(), re();
    }
    function Je() {
      u.value !== !0 && (r.value = -1, i.value === !0 && (i.value = !1), _.focused.value === !1 && (y !== null && (clearTimeout(y), y = null), _.innerLoading.value === !0 && (n("filterAbort"), _.innerLoading.value = !1, s.value = !1)));
    }
    function Ze(a) {
      _.editable.value === !0 && (c === !0 ? (_.onControlFocusin(a), u.value = !0, pe(() => {
        _.focus();
      })) : _.focus(), e.onFilter !== void 0 ? Ge(f.value) : (H.value !== !0 || t["no-option"] !== void 0) && (i.value = !0));
    }
    function Me() {
      u.value = !1, Je();
    }
    function et() {
      e.useInput === !0 && dt(
        e.multiple !== !0 && e.fillInput === !0 && E.value.length !== 0 && ye.value(E.value[0]) || "",
        !0,
        !0
      );
    }
    function Zt(a) {
      let V = -1;
      if (a === !0) {
        if (E.value.length !== 0) {
          const B = ge.value(E.value[0]);
          V = e.options.findIndex((D) => Le(ge.value(D), B));
        }
        j(V);
      }
      Ye(V);
    }
    function Lo(a, V) {
      i.value === !0 && _.innerLoading.value === !1 && (j(-1, !0), pe(() => {
        i.value === !0 && _.innerLoading.value === !1 && (a > V ? j() : Zt(!0));
      }));
    }
    function Un() {
      u.value === !1 && M.value !== null && M.value.updatePosition();
    }
    function Xn(a) {
      a !== void 0 && Te(a), n("popupShow", a), _.hasPopupOpen = !0, _.onControlFocusin(a);
    }
    function Yn(a) {
      a !== void 0 && Te(a), n("popupHide", a), _.hasPopupOpen = !1, _.onControlFocusout(a);
    }
    function Gn() {
      c = o.platform.is.mobile !== !0 && e.behavior !== "dialog" ? !1 : e.behavior !== "menu" && (e.useInput === !0 ? t["no-option"] !== void 0 || e.onFilter !== void 0 || H.value === !1 : !0), S = o.platform.is.ios === !0 && c === !0 && e.useInput === !0 ? "fade" : e.transitionShow;
    }
    return Pl(Gn), zo(Un), Gn(), de(() => {
      b !== null && clearTimeout(b);
    }), Object.assign(l, {
      showPopup: Ze,
      hidePopup: Me,
      removeAtIndex: Yt,
      add: zn,
      toggleOption: Ae,
      getOptionIndex: () => r.value,
      setOptionIndex: Ye,
      moveOptionSelection: Ct,
      filter: Ge,
      updateMenuPosition: Un,
      updateInputValue: dt,
      isOptionSelected: Jt,
      getEmittingOptionValue: Fn,
      isOptionDisabled: (...a) => Xe.value.apply(null, a) === !0,
      getOptionValue: (...a) => ge.value.apply(null, a),
      getOptionLabel: (...a) => ye.value.apply(null, a)
    }), Object.assign(_, {
      innerValue: E,
      fieldClass: d(
        () => `q-select q-field--auto-height q-select--with${e.useInput !== !0 ? "out" : ""}-input q-select--with${e.useChips !== !0 ? "out" : ""}-chips q-select--${e.multiple === !0 ? "multiple" : "single"}`
      ),
      inputRef: q,
      targetRef: x,
      hasValue: Q,
      showPopup: Ze,
      floatingLabel: d(
        () => e.hideSelected !== !0 && Q.value === !0 || typeof f.value == "number" || f.value.length !== 0 || bn(e.displayValue)
      ),
      getControlChild: () => {
        if (_.editable.value !== !1 && (u.value === !0 || H.value !== !0 || t["no-option"] !== void 0))
          return c === !0 ? Bo() : ko();
        _.hasPopupOpen === !0 && (_.hasPopupOpen = !1);
      },
      controlEvents: {
        onFocusin(a) {
          _.onControlFocusin(a);
        },
        onFocusout(a) {
          _.onControlFocusout(a, () => {
            et(), Je();
          });
        },
        onClick(a) {
          if (ke(a), c !== !0 && i.value === !0) {
            Je(), x.value !== null && x.value.focus();
            return;
          }
          Ze(a);
        }
      },
      getControl: (a) => {
        const V = So(), B = a === !0 || u.value !== !0 || c !== !0;
        if (e.useInput === !0)
          V.push(xo(a, B));
        else if (_.editable.value === !0) {
          const G = B === !0 ? qe.value : void 0;
          V.push(
            g("input", {
              ref: B === !0 ? x : void 0,
              key: "d_t",
              class: "q-select__focus-target",
              id: B === !0 ? _.targetUid.value : void 0,
              value: C.value,
              readonly: !0,
              "data-autofocus": a === !0 || e.autofocus === !0 || void 0,
              ...G,
              onKeydown: Nn,
              onKeyup: In,
              onKeypress: jn
            })
          ), B === !0 && typeof e.autocomplete == "string" && e.autocomplete.length !== 0 && V.push(
            g("input", {
              class: "q-select__autocomplete-input",
              autocomplete: e.autocomplete,
              tabindex: -1,
              onKeyup: Dn
            })
          );
        }
        if (K.value !== void 0 && e.disable !== !0 && qt.value.length !== 0) {
          const G = qt.value.map((Y) => g("option", { value: Y, selected: !0 }));
          V.push(
            g("select", {
              class: "hidden",
              name: K.value,
              multiple: e.multiple
            }, G)
          );
        }
        const D = e.useInput === !0 || B !== !0 ? void 0 : _.splitAttrs.attributes.value;
        return g("div", {
          class: "q-field__native row items-center",
          ...D,
          ..._.splitAttrs.listeners.value
        }, V);
      },
      getInnerAppend: () => e.loading !== !0 && s.value !== !0 && e.hideDropdownIcon !== !0 ? [
        g(Se, {
          class: "q-select__dropdown-icon" + (i.value === !0 ? " rotate-180" : ""),
          name: kt.value
        })
      ] : null
    }), Jl(_);
  }
}), cu = /* @__PURE__ */ st({
  __name: "AppSelect",
  props: {
    modelValue: {},
    multiple: { type: Boolean, default: () => !1 },
    newValue: { type: Boolean },
    options: {},
    virtualScrolltemSize: { default: () => 28 },
    transformNewValueFn: { type: Function, default: (e) => e },
    exactFilterMatch: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, l = (s) => {
      t("update:modelValue", s);
    }, o = R(""), i = R([]), u = d(() => [...i.value, ...n.options].filter(
      (s) => !o.value || (n.exactFilterMatch ? `${s.label}`.toLowerCase() === `${o.value}`.toLowerCase() : `${s.label}`.toLowerCase().includes(`${o.value}`.toLowerCase()))
    )), r = (s, b) => {
      o.value = s.toLowerCase(), b(
        () => {
          o.value = s.toLowerCase();
        },
        (v) => {
          s !== "" && v.options && v.options.length > 0 && (v.setOptionIndex(-1), v.moveOptionSelection(1, !0));
        }
      );
    }, f = () => {
      t("update:modelValue", n.multiple ? [] : null);
    }, h = (s, b) => {
      n.newValue && (i.value.push({
        value: n.transformNewValueFn(s),
        label: n.transformNewValueFn(s)
      }), b(s, "add-unique"));
    };
    return (s, b) => (ne(), ve(qa, {
      "model-value": s.modelValue,
      "onUpdate:modelValue": l,
      clearable: "",
      "use-input": "",
      "map-options": "",
      "options-dense": "",
      multiple: s.multiple,
      "use-chips": s.multiple,
      "emit-value": "",
      "input-debounce": "0",
      "popup-content-class": "no-border-radius",
      options: u.value,
      "virtual-scroll-item-size": s.virtualScrolltemSize,
      onFilter: r,
      onClear: f,
      onNewValue: h
    }, {
      option: ee(({ itemProps: v, opt: c, selected: m, toggleOption: y }) => [
        le(Ft, ut(v, {
          disable: c.disable,
          style: { "border-top": "1px solid rgba(0, 0, 0, 0.08)" }
        }), {
          default: ee(() => [
            le(je, { side: "" }, {
              default: ee(() => [
                le(bi, {
                  dense: "",
                  "model-value": m,
                  "onUpdate:modelValue": (p) => y(c)
                }, null, 8, ["model-value", "onUpdate:modelValue"])
              ]),
              _: 2
            }, 1024),
            le(je, null, {
              default: ee(() => [
                le(hn, null, {
                  default: ee(() => [
                    ot(ht(c.label), 1)
                  ]),
                  _: 2
                }, 1024),
                c.caption ? (ne(), ve(hn, {
                  key: 0,
                  caption: ""
                }, {
                  default: ee(() => [
                    ot(ht(c.caption), 1)
                  ]),
                  _: 2
                }, 1024)) : Ce("", !0)
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1040, ["disable"])
      ]),
      "no-option": ee(() => [
        le(Ft, null, {
          default: ee(() => [
            le(je, { class: "text-grey" }, {
              default: ee(() => [
                ot(" Inget resultat ")
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["model-value", "multiple", "use-chips", "options", "virtual-scroll-item-size"]));
  }
}), Ca = g("div", { class: "q-space" }), _a = ie({
  name: "QSpace",
  setup() {
    return () => Ca;
  }
}), Ea = ie({
  name: "QTooltip",
  inheritAttrs: !1,
  props: {
    ...to,
    ...Vn,
    ...On,
    maxHeight: {
      type: String,
      default: null
    },
    maxWidth: {
      type: String,
      default: null
    },
    transitionShow: {
      default: "jump-down"
    },
    transitionHide: {
      default: "jump-up"
    },
    anchor: {
      type: String,
      default: "bottom middle",
      validator: Nt
    },
    self: {
      type: String,
      default: "top middle",
      validator: Nt
    },
    offset: {
      type: Array,
      default: () => [14, 14],
      validator: fo
    },
    scrollTarget: {
      default: void 0
    },
    delay: {
      type: Number,
      default: 0
    },
    hideDelay: {
      type: Number,
      default: 0
    }
  },
  emits: [
    ...$n
  ],
  setup(e, { slots: t, emit: n, attrs: l }) {
    let o, i;
    const u = te(), { proxy: { $q: r } } = u, f = R(null), h = R(!1), s = d(() => Wt(e.anchor, r.lang.rtl)), b = d(() => Wt(e.self, r.lang.rtl)), v = d(() => e.persistent !== !0), { registerTick: c, removeTick: m } = Rn(), { registerTimeout: y } = An(), { transitionProps: p, transitionStyle: S } = Pn(e), { localScrollTarget: k, changeScrollEvent: w, unconfigureScrollTarget: q } = lo(e, _), { anchorEl: x, canShow: M, anchorEvents: O } = no({ showing: h, configureAnchorEl: re }), { show: I, hide: K } = Tn({
      showing: h,
      canShow: M,
      handleShow: X,
      handleHide: T,
      hideOnRouteChange: v,
      processOnMount: !0
    });
    Object.assign(O, { delayShow: $, delayHide: N });
    const { showPortal: Z, hidePortal: W, renderPortal: z } = Ln(u, f, F, "tooltip");
    if (r.platform.is.mobile === !0) {
      const L = {
        anchorEl: x,
        innerRef: f,
        onClickOutside(P) {
          return K(P), P.target.classList.contains("q-dialog__backdrop") && oe(P), !0;
        }
      }, Q = d(
        () => (
          // it doesn't has external model
          // (null is the default value)
          e.modelValue === null && e.persistent !== !0 && h.value === !0
        )
      );
      J(Q, (P) => {
        (P === !0 ? co : jt)(L);
      }), de(() => {
        jt(L);
      });
    }
    function X(L) {
      Z(), c(() => {
        i = new MutationObserver(() => U()), i.observe(f.value, { attributes: !1, childList: !0, characterData: !0, subtree: !0 }), U(), _();
      }), o === void 0 && (o = J(
        () => r.screen.width + "|" + r.screen.height + "|" + e.self + "|" + e.anchor + "|" + r.lang.rtl,
        U
      )), y(() => {
        Z(!0), n("show", L);
      }, e.transitionDuration);
    }
    function T(L) {
      m(), W(), j(), y(() => {
        W(!0), n("hide", L);
      }, e.transitionDuration);
    }
    function j() {
      i !== void 0 && (i.disconnect(), i = void 0), o !== void 0 && (o(), o = void 0), q(), Mt(O, "tooltipTemp");
    }
    function U() {
      Mn({
        targetEl: f.value,
        offset: e.offset,
        anchorEl: x.value,
        anchorOrigin: s.value,
        selfOrigin: b.value,
        maxHeight: e.maxHeight,
        maxWidth: e.maxWidth
      });
    }
    function $(L) {
      if (r.platform.is.mobile === !0) {
        wn(), document.body.classList.add("non-selectable");
        const Q = x.value, P = ["touchmove", "touchcancel", "touchend", "click"].map((A) => [Q, A, "delayHide", "passiveCapture"]);
        gt(O, "tooltipTemp", P);
      }
      y(() => {
        I(L);
      }, e.delay);
    }
    function N(L) {
      r.platform.is.mobile === !0 && (Mt(O, "tooltipTemp"), wn(), setTimeout(() => {
        document.body.classList.remove("non-selectable");
      }, 10)), y(() => {
        K(L);
      }, e.hideDelay);
    }
    function re() {
      if (e.noParentEvent === !0 || x.value === null)
        return;
      const L = r.platform.is.mobile === !0 ? [
        [x.value, "touchstart", "delayShow", "passive"]
      ] : [
        [x.value, "mouseenter", "delayShow", "passive"],
        [x.value, "mouseleave", "delayHide", "passive"]
      ];
      gt(O, "anchor", L);
    }
    function _() {
      if (x.value !== null || e.scrollTarget !== void 0) {
        k.value = io(x.value, e.scrollTarget);
        const L = e.noParentEvent === !0 ? U : K;
        w(k.value, L);
      }
    }
    function E() {
      return h.value === !0 ? g("div", {
        ...l,
        ref: f,
        class: [
          "q-tooltip q-tooltip--style q-position-engine no-pointer-events",
          l.class
        ],
        style: [
          l.style,
          S.value
        ],
        role: "tooltip"
      }, me(t.default)) : null;
    }
    function F() {
      return g(Qe, p.value, E);
    }
    return de(j), Object.assign(u.proxy, { updatePosition: U }), z;
  }
}), ho = {
  left: "start",
  center: "center",
  right: "end",
  between: "between",
  around: "around",
  evenly: "evenly",
  stretch: "stretch"
}, Ba = Object.keys(ho), Va = {
  align: {
    type: String,
    validator: (e) => Ba.includes(e)
  }
};
function $a(e) {
  return d(() => {
    const t = e.align === void 0 ? e.vertical === !0 ? "stretch" : "left" : e.align;
    return `${e.vertical === !0 ? "items" : "justify"}-${ho[t]}`;
  });
}
const Bl = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32
}, Ta = {
  xs: 8,
  sm: 10,
  md: 14,
  lg: 20,
  xl: 24
}, La = ["button", "submit", "reset"], Oa = /[^\s]\/[^\s]/, Pa = ["flat", "outline", "push", "unelevated"], Ra = (e, t) => e.flat === !0 ? "flat" : e.outline === !0 ? "outline" : e.push === !0 ? "push" : e.unelevated === !0 ? "unelevated" : t, Aa = {
  ...wt,
  ...Nl,
  type: {
    type: String,
    default: "button"
  },
  label: [Number, String],
  icon: String,
  iconRight: String,
  ...Pa.reduce(
    (e, t) => (e[t] = Boolean) && e,
    {}
  ),
  square: Boolean,
  round: Boolean,
  rounded: Boolean,
  glossy: Boolean,
  size: String,
  fab: Boolean,
  fabMini: Boolean,
  padding: String,
  color: String,
  textColor: String,
  noCaps: Boolean,
  noWrap: Boolean,
  dense: Boolean,
  tabindex: [Number, String],
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  align: {
    ...Va.align,
    default: "center"
  },
  stack: Boolean,
  stretch: Boolean,
  loading: {
    type: Boolean,
    default: null
  },
  disable: Boolean
};
function Ma(e) {
  const t = St(e, Ta), n = $a(e), { hasRouterLink: l, hasLink: o, linkTag: i, linkAttrs: u, navigateOnClick: r } = Wl({
    fallbackTag: "button"
  }), f = d(() => {
    const p = e.fab === !1 && e.fabMini === !1 ? t.value : {};
    return e.padding !== void 0 ? Object.assign({}, p, {
      padding: e.padding.split(/\s+/).map((S) => S in Bl ? Bl[S] + "px" : S).join(" "),
      minWidth: "0",
      minHeight: "0"
    }) : p;
  }), h = d(
    () => e.rounded === !0 || e.fab === !0 || e.fabMini === !0
  ), s = d(
    () => e.disable !== !0 && e.loading !== !0
  ), b = d(() => s.value === !0 ? e.tabindex || 0 : -1), v = d(() => Ra(e, "standard")), c = d(() => {
    const p = { tabindex: b.value };
    return o.value === !0 ? Object.assign(p, u.value) : La.includes(e.type) === !0 && (p.type = e.type), i.value === "a" ? (e.disable === !0 ? p["aria-disabled"] = "true" : p.href === void 0 && (p.role = "button"), l.value !== !0 && Oa.test(e.type) === !0 && (p.type = e.type)) : e.disable === !0 && (p.disabled = "", p["aria-disabled"] = "true"), e.loading === !0 && e.percentage !== void 0 && Object.assign(p, {
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-valuenow": e.percentage
    }), p;
  }), m = d(() => {
    let p;
    e.color !== void 0 ? e.flat === !0 || e.outline === !0 ? p = `text-${e.textColor || e.color}` : p = `bg-${e.color} text-${e.textColor || "white"}` : e.textColor && (p = `text-${e.textColor}`);
    const S = e.round === !0 ? "round" : `rectangle${h.value === !0 ? " q-btn--rounded" : e.square === !0 ? " q-btn--square" : ""}`;
    return `q-btn--${v.value} q-btn--${S}` + (p !== void 0 ? " " + p : "") + (s.value === !0 ? " q-btn--actionable q-focusable q-hoverable" : e.disable === !0 ? " disabled" : "") + (e.fab === !0 ? " q-btn--fab" : e.fabMini === !0 ? " q-btn--fab-mini" : "") + (e.noCaps === !0 ? " q-btn--no-uppercase" : "") + (e.dense === !0 ? " q-btn--dense" : "") + (e.stretch === !0 ? " no-border-radius self-stretch" : "") + (e.glossy === !0 ? " glossy" : "") + (e.square ? " q-btn--square" : "");
  }), y = d(
    () => n.value + (e.stack === !0 ? " column" : " row") + (e.noWrap === !0 ? " no-wrap text-no-wrap" : "") + (e.loading === !0 ? " q-btn__content--hidden" : "")
  );
  return {
    classes: m,
    style: f,
    innerClasses: y,
    attributes: c,
    hasLink: o,
    linkTag: i,
    navigateOnClick: r,
    isActionable: s
  };
}
const { passiveCapture: we } = be;
let tt = null, nt = null, lt = null;
const Fa = ie({
  name: "QBtn",
  props: {
    ...Aa,
    percentage: Number,
    darkPercentage: Boolean,
    onTouchstart: [Function, Array]
  },
  emits: ["click", "keydown", "mousedown", "keyup"],
  setup(e, { slots: t, emit: n }) {
    const { proxy: l } = te(), {
      classes: o,
      style: i,
      innerClasses: u,
      attributes: r,
      hasLink: f,
      linkTag: h,
      navigateOnClick: s,
      isActionable: b
    } = Ma(e), v = R(null), c = R(null);
    let m = null, y, p = null;
    const S = d(
      () => e.label !== void 0 && e.label !== null && e.label !== ""
    ), k = d(() => e.disable === !0 || e.ripple === !1 ? !1 : {
      keyCodes: f.value === !0 ? [13, 32] : [13],
      ...e.ripple === !0 ? {} : e.ripple
    }), w = d(() => ({ center: e.round })), q = d(() => {
      const T = Math.max(0, Math.min(100, e.percentage));
      return T > 0 ? { transition: "transform 0.6s", transform: `translateX(${T - 100}%)` } : {};
    }), x = d(() => {
      if (e.loading === !0)
        return {
          onMousedown: X,
          onTouchstart: X,
          onClick: X,
          onKeydown: X,
          onKeyup: X
        };
      if (b.value === !0) {
        const T = {
          onClick: O,
          onKeydown: I,
          onMousedown: Z
        };
        if (l.$q.platform.has.touch === !0) {
          const j = e.onTouchstart !== void 0 ? "" : "Passive";
          T[`onTouchstart${j}`] = K;
        }
        return T;
      }
      return {
        // needed; especially for disabled <a> tags
        onClick: oe
      };
    }), M = d(() => ({
      ref: v,
      class: "q-btn q-btn-item non-selectable no-outline " + o.value,
      style: i.value,
      ...r.value,
      ...x.value
    }));
    function O(T) {
      if (v.value !== null) {
        if (T !== void 0) {
          if (T.defaultPrevented === !0)
            return;
          const j = document.activeElement;
          if (e.type === "submit" && j !== document.body && v.value.contains(j) === !1 && j.contains(v.value) === !1) {
            v.value.focus();
            const U = () => {
              document.removeEventListener("keydown", oe, !0), document.removeEventListener("keyup", U, we), v.value !== null && v.value.removeEventListener("blur", U, we);
            };
            document.addEventListener("keydown", oe, !0), document.addEventListener("keyup", U, we), v.value.addEventListener("blur", U, we);
          }
        }
        s(T);
      }
    }
    function I(T) {
      v.value !== null && (n("keydown", T), Oe(T, [13, 32]) === !0 && nt !== v.value && (nt !== null && z(), T.defaultPrevented !== !0 && (v.value.focus(), nt = v.value, v.value.classList.add("q-btn--active"), document.addEventListener("keyup", W, !0), v.value.addEventListener("blur", W, we)), oe(T)));
    }
    function K(T) {
      v.value !== null && (n("touchstart", T), T.defaultPrevented !== !0 && (tt !== v.value && (tt !== null && z(), tt = v.value, m = T.target, m.addEventListener("touchcancel", W, we), m.addEventListener("touchend", W, we)), y = !0, p !== null && clearTimeout(p), p = setTimeout(() => {
        p = null, y = !1;
      }, 200)));
    }
    function Z(T) {
      v.value !== null && (T.qSkipRipple = y === !0, n("mousedown", T), T.defaultPrevented !== !0 && lt !== v.value && (lt !== null && z(), lt = v.value, v.value.classList.add("q-btn--active"), document.addEventListener("mouseup", W, we)));
    }
    function W(T) {
      if (v.value !== null && !(T !== void 0 && T.type === "blur" && document.activeElement === v.value)) {
        if (T !== void 0 && T.type === "keyup") {
          if (nt === v.value && Oe(T, [13, 32]) === !0) {
            const j = new MouseEvent("click", T);
            j.qKeyEvent = !0, T.defaultPrevented === !0 && ke(j), T.cancelBubble === !0 && Te(j), v.value.dispatchEvent(j), oe(T), T.qKeyEvent = !0;
          }
          n("keyup", T);
        }
        z();
      }
    }
    function z(T) {
      const j = c.value;
      T !== !0 && (tt === v.value || lt === v.value) && j !== null && j !== document.activeElement && (j.setAttribute("tabindex", -1), j.focus()), tt === v.value && (m !== null && (m.removeEventListener("touchcancel", W, we), m.removeEventListener("touchend", W, we)), tt = m = null), lt === v.value && (document.removeEventListener("mouseup", W, we), lt = null), nt === v.value && (document.removeEventListener("keyup", W, !0), v.value !== null && v.value.removeEventListener("blur", W, we), nt = null), v.value !== null && v.value.classList.remove("q-btn--active");
    }
    function X(T) {
      oe(T), T.qSkipRipple = !0;
    }
    return de(() => {
      z(!0);
    }), Object.assign(l, { click: O }), () => {
      let T = [];
      e.icon !== void 0 && T.push(
        g(Se, {
          name: e.icon,
          left: e.stack === !1 && S.value === !0,
          role: "img",
          "aria-hidden": "true"
        })
      ), S.value === !0 && T.push(
        g("span", { class: "block" }, [e.label])
      ), T = Ee(t.default, T), e.iconRight !== void 0 && e.round === !1 && T.push(
        g(Se, {
          name: e.iconRight,
          right: e.stack === !1 && S.value === !0,
          role: "img",
          "aria-hidden": "true"
        })
      );
      const j = [
        g("span", {
          class: "q-focus-helper",
          ref: c
        })
      ];
      return e.loading === !0 && e.percentage !== void 0 && j.push(
        g("span", {
          class: "q-btn__progress absolute-full overflow-hidden" + (e.darkPercentage === !0 ? " q-btn__progress--dark" : "")
        }, [
          g("span", {
            class: "q-btn__progress-indicator fit block",
            style: q.value
          })
        ])
      ), j.push(
        g("span", {
          class: "q-btn__content text-center col items-center q-anchor--skip " + u.value
        }, T)
      ), e.loading !== null && j.push(
        g(Qe, {
          name: "q-transition--fade"
        }, () => e.loading === !0 ? [
          g("span", {
            key: "loading",
            class: "absolute-full flex flex-center"
          }, t.loading !== void 0 ? t.loading() : [g(Ul)])
        ] : null)
      ), kn(
        g(
          h.value,
          M.value,
          j
        ),
        [[
          eo,
          k.value,
          void 0,
          w.value
        ]]
      );
    };
  }
}), za = ie({
  name: "QCardSection",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    horizontal: Boolean
  },
  setup(e, { slots: t }) {
    const n = d(
      () => `q-card__section q-card__section--${e.horizontal === !0 ? "horiz row no-wrap" : "vert"}`
    );
    return () => g(e.tag, { class: n.value }, me(t.default));
  }
}), Ha = ["top", "middle", "bottom"], Ia = ie({
  name: "QBadge",
  props: {
    color: String,
    textColor: String,
    floating: Boolean,
    transparent: Boolean,
    multiLine: Boolean,
    outline: Boolean,
    rounded: Boolean,
    label: [Number, String],
    align: {
      type: String,
      validator: (e) => Ha.includes(e)
    }
  },
  setup(e, { slots: t }) {
    const n = d(() => e.align !== void 0 ? { verticalAlign: e.align } : null), l = d(() => {
      const o = e.outline === !0 && e.color || e.textColor;
      return `q-badge flex inline items-center no-wrap q-badge--${e.multiLine === !0 ? "multi" : "single"}-line` + (e.outline === !0 ? " q-badge--outline" : e.color !== void 0 ? ` bg-${e.color}` : "") + (o !== void 0 ? ` text-${o}` : "") + (e.floating === !0 ? " q-badge--floating" : "") + (e.rounded === !0 ? " q-badge--rounded" : "") + (e.transparent === !0 ? " q-badge--transparent" : "");
    });
    return () => g("div", {
      class: l.value,
      style: n.value,
      role: "status",
      "aria-label": e.label
    }, Ee(t.default, e.label !== void 0 ? [e.label] : []));
  }
}), Vl = ie({
  name: "QSlideTransition",
  props: {
    appear: Boolean,
    duration: {
      type: Number,
      default: 300
    }
  },
  emits: ["show", "hide"],
  setup(e, { slots: t, emit: n }) {
    let l = !1, o, i, u = null, r = null, f, h;
    function s() {
      o && o(), o = null, l = !1, u !== null && (clearTimeout(u), u = null), r !== null && (clearTimeout(r), r = null), i !== void 0 && i.removeEventListener("transitionend", f), f = null;
    }
    function b(y, p, S) {
      p !== void 0 && (y.style.height = `${p}px`), y.style.transition = `height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`, l = !0, o = S;
    }
    function v(y, p) {
      y.style.overflowY = null, y.style.height = null, y.style.transition = null, s(), p !== h && n(p);
    }
    function c(y, p) {
      let S = 0;
      i = y, l === !0 ? (s(), S = y.offsetHeight === y.scrollHeight ? 0 : void 0) : (h = "hide", y.style.overflowY = "hidden"), b(y, S, p), u = setTimeout(() => {
        u = null, y.style.height = `${y.scrollHeight}px`, f = (k) => {
          r = null, (Object(k) !== k || k.target === y) && v(y, "show");
        }, y.addEventListener("transitionend", f), r = setTimeout(f, e.duration * 1.1);
      }, 100);
    }
    function m(y, p) {
      let S;
      i = y, l === !0 ? s() : (h = "show", y.style.overflowY = "hidden", S = y.scrollHeight), b(y, S, p), u = setTimeout(() => {
        u = null, y.style.height = 0, f = (k) => {
          r = null, (Object(k) !== k || k.target === y) && v(y, "hide");
        }, y.addEventListener("transitionend", f), r = setTimeout(f, e.duration * 1.1);
      }, 100);
    }
    return de(() => {
      l === !0 && s();
    }), () => g(Qe, {
      css: !1,
      appear: e.appear,
      onEnter: c,
      onLeave: m
    }, t.default);
  }
}), Da = {
  xs: 2,
  sm: 4,
  md: 6,
  lg: 10,
  xl: 14
};
function $l(e, t, n) {
  return {
    transform: t === !0 ? `translateX(${n.lang.rtl === !0 ? "-" : ""}100%) scale3d(${-e},1,1)` : `scale3d(${e},1,1)`
  };
}
const ja = ie({
  name: "QLinearProgress",
  props: {
    ...Be,
    ...wt,
    value: {
      type: Number,
      default: 0
    },
    buffer: Number,
    color: String,
    trackColor: String,
    reverse: Boolean,
    stripe: Boolean,
    indeterminate: Boolean,
    query: Boolean,
    rounded: Boolean,
    animationSpeed: {
      type: [String, Number],
      default: 2100
    },
    instantFeedback: Boolean
  },
  setup(e, { slots: t }) {
    const { proxy: n } = te(), l = Ve(e, n.$q), o = St(e, Da), i = d(() => e.indeterminate === !0 || e.query === !0), u = d(() => e.reverse !== e.query), r = d(() => ({
      ...o.value !== null ? o.value : {},
      "--q-linear-progress-speed": `${e.animationSpeed}ms`
    })), f = d(
      () => "q-linear-progress" + (e.color !== void 0 ? ` text-${e.color}` : "") + (e.reverse === !0 || e.query === !0 ? " q-linear-progress--reverse" : "") + (e.rounded === !0 ? " rounded-borders" : "")
    ), h = d(() => $l(e.buffer !== void 0 ? e.buffer : 1, u.value, n.$q)), s = d(() => `with${e.instantFeedback === !0 ? "out" : ""}-transition`), b = d(
      () => `q-linear-progress__track absolute-full q-linear-progress__track--${s.value} q-linear-progress__track--${l.value === !0 ? "dark" : "light"}` + (e.trackColor !== void 0 ? ` bg-${e.trackColor}` : "")
    ), v = d(() => $l(i.value === !0 ? 1 : e.value, u.value, n.$q)), c = d(
      () => `q-linear-progress__model absolute-full q-linear-progress__model--${s.value} q-linear-progress__model--${i.value === !0 ? "in" : ""}determinate`
    ), m = d(() => ({ width: `${e.value * 100}%` })), y = d(
      () => `q-linear-progress__stripe absolute-${e.reverse === !0 ? "right" : "left"} q-linear-progress__stripe--${s.value}`
    );
    return () => {
      const p = [
        g("div", {
          class: b.value,
          style: h.value
        }),
        g("div", {
          class: c.value,
          style: v.value
        })
      ];
      return e.stripe === !0 && i.value === !1 && p.push(
        g("div", {
          class: y.value,
          style: m.value
        })
      ), g("div", {
        class: f.value,
        style: r.value,
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": 1,
        "aria-valuenow": e.indeterminate === !0 ? void 0 : e.value
      }, Ee(t.default, p));
    };
  }
}), Na = ie({
  name: "QCard",
  props: {
    ...Be,
    tag: {
      type: String,
      default: "div"
    },
    square: Boolean,
    flat: Boolean,
    bordered: Boolean
  },
  setup(e, { slots: t }) {
    const { proxy: { $q: n } } = te(), l = Ve(e, n), o = d(
      () => "q-card" + (l.value === !0 ? " q-card--dark q-dark" : "") + (e.bordered === !0 ? " q-card--bordered" : "") + (e.square === !0 ? " q-card--square no-border-radius" : "") + (e.flat === !0 ? " q-card--flat no-shadow" : "")
    );
    return () => g(e.tag, { class: o.value }, me(t.default));
  }
}), Wa = () => !0;
function Ka(e) {
  const t = {};
  return e.forEach((n) => {
    t[n] = Wa;
  }), t;
}
function Qt() {
  const { emit: e, proxy: t } = te(), n = R(null);
  function l() {
    n.value.show();
  }
  function o() {
    n.value.hide();
  }
  function i(r) {
    e("ok", r), o();
  }
  function u() {
    e("hide");
  }
  return Object.assign(t, { show: l, hide: o }), {
    dialogRef: n,
    onDialogHide: u,
    onDialogOK: i,
    onDialogCancel: o
  };
}
const go = ["ok", "hide"];
Qt.emits = go;
Qt.emitsObject = Ka(go);
const Qa = {
  key: 0,
  class: "text-body1 text-weight-medium"
}, Ua = {
  key: 0,
  class: "q-pb-sm"
}, Xa = {
  class: "scroll",
  style: { "max-height": "300px" }
}, Ya = { class: "q-px-md q-py-sm bg-red-1 text-red text-caption" }, Ga = /* @__PURE__ */ De("br", null, null, -1), Ja = { style: { "white-space": "pre-wrap" } }, Za = { key: 0 }, eu = /* @__PURE__ */ st({
  __name: "AppModal",
  props: {
    transitionShow: {},
    transitionHide: {},
    transitionDuration: {},
    modelValue: { type: Boolean },
    persistent: { type: Boolean },
    noEscDismiss: { type: Boolean },
    noBackdropDismiss: { type: Boolean },
    noRouteDismiss: { type: Boolean },
    autoClose: { type: Boolean },
    seamless: { type: Boolean },
    maximized: { type: Boolean },
    fullWidth: { type: Boolean },
    fullHeight: { type: Boolean },
    position: {},
    square: { type: Boolean },
    noRefocus: { type: Boolean },
    noFocus: { type: Boolean },
    noShake: { type: Boolean },
    allowFocusOutside: { type: Boolean },
    "onUpdate:modelValue": { type: Function },
    onShow: { type: Function },
    onBeforeShow: { type: Function },
    onHide: { type: Function },
    onBeforeHide: { type: Function },
    onShake: { type: Function },
    onEscapeKey: { type: Function },
    slot: {},
    width: {},
    title: {},
    dependencies: { type: Function }
  },
  emits: {
    ...Qt.emitsObject
  },
  setup(e) {
    const t = e, n = {
      minWidth: "360px",
      width: t.width ? `${t.width}px` : "",
      maxWidth: t.width ? `${t.width}px` : ""
    }, { dialogRef: l, onDialogHide: o, onDialogOK: i, onDialogCancel: u } = Qt(), r = R(!1), f = R(null), h = (m, y) => {
      f.value = {
        type: m,
        message: JSON.stringify(y, Object.getOwnPropertyNames(y), 2)
      };
    }, s = Ho([]);
    (async () => {
      if (t.dependencies) {
        r.value = !0;
        try {
          const m = await Promise.all(t.dependencies());
          s.value = m;
        } catch (m) {
          h("dependecy", m);
        }
        r.value = !1;
      }
    })();
    const v = R(!1);
    return Ol(tu, {
      pending: v,
      dependencyData: s,
      onSubmit: async (m) => {
        f.value = null, v.value = !0;
        try {
          const y = await m();
          i(y);
        } catch (y) {
          h("submit", y);
        } finally {
          v.value = !1;
        }
      },
      onDialogCancel: u,
      onDialogOK: i
    }), (m, y) => (ne(), ve(vo, ut(m.$props, {
      ref_key: "dialogRef",
      ref: l,
      onHide: He(o)
    }), {
      default: ee(() => [
        le(Na, {
          square: "",
          style: n
        }, {
          default: ee(() => [
            le(za, { class: "flex" }, {
              default: ee(() => [
                m.title ? (ne(), _e("div", Qa, ht(m.title), 1)) : Ce("", !0),
                le(_a),
                le(Fa, {
                  onClick: He(u),
                  size: "sm",
                  icon: "mdi-close",
                  unelevated: "",
                  square: "",
                  padding: "4px",
                  disable: v.value
                }, {
                  default: ee(() => [
                    le(Ea, null, {
                      default: ee(() => [
                        ot(" Stäng ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["onClick", "disable"])
              ]),
              _: 1
            }),
            le(Vl, null, {
              default: ee(() => [
                f.value ? (ne(), _e("div", Ua, [
                  le(vn, { color: "red-2" }),
                  De("div", Xa, [
                    De("div", Ya, [
                      le(Ia, { color: "red" }, {
                        default: ee(() => [
                          le(Se, {
                            class: "q-mr-sm",
                            name: "mdi-alert-circle-outline"
                          }),
                          ot(" Ett fel uppstod")
                        ]),
                        _: 1
                      }),
                      Ga,
                      De("code", Ja, ht(f.value.message), 1)
                    ])
                  ]),
                  le(vn, { color: "red-2" })
                ])) : Ce("", !0)
              ]),
              _: 1
            }),
            r.value ? (ne(), ve(ja, {
              key: 0,
              indeterminate: ""
            })) : Ce("", !0),
            le(Vl, null, {
              default: ee(() => {
                var p;
                return [
                  !r.value && ((p = f.value) == null ? void 0 : p.type) !== "dependecy" ? (ne(), _e("div", Za, [
                    (ne(), ve(Rt(t.slot.component), Io(Do(t.slot.componentProps)), null, 16))
                  ])) : Ce("", !0)
                ];
              }),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 16, ["onHide"]));
  }
}), du = (e, t) => e.create({
  component: eu,
  componentProps: t
}), tu = Symbol(), nu = ie({
  name: "QList",
  props: {
    ...Be,
    bordered: Boolean,
    dense: Boolean,
    separator: Boolean,
    padding: Boolean,
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(e, { slots: t }) {
    const n = te(), l = Ve(e, n.proxy.$q), o = d(
      () => "q-list" + (e.bordered === !0 ? " q-list--bordered" : "") + (e.dense === !0 ? " q-list--dense" : "") + (e.separator === !0 ? " q-list--separator" : "") + (l.value === !0 ? " q-list--dark" : "") + (e.padding === !0 ? " q-list--padding" : "")
    );
    return () => g(e.tag, { class: o.value }, me(t.default));
  }
});
function Tl(e) {
  if (e === !1)
    return 0;
  if (e === !0 || e === void 0)
    return 1;
  const t = parseInt(e, 10);
  return isNaN(t) ? 0 : t;
}
const lu = Rl(
  {
    name: "close-popup",
    beforeMount(e, { value: t }) {
      const n = {
        depth: Tl(t),
        handler(l) {
          n.depth !== 0 && setTimeout(() => {
            const o = Wi(e);
            o !== void 0 && Ki(o, l, n.depth);
          });
        },
        handlerKey(l) {
          Oe(l, 13) === !0 && n.handler(l);
        }
      };
      e.__qclosepopup = n, e.addEventListener("click", n.handler), e.addEventListener("keyup", n.handlerKey);
    },
    updated(e, { value: t, oldValue: n }) {
      t !== n && (e.__qclosepopup.depth = Tl(t));
    },
    beforeUnmount(e) {
      const t = e.__qclosepopup;
      e.removeEventListener("click", t.handler), e.removeEventListener("keyup", t.handlerKey), delete e.__qclosepopup;
    }
  }
), ou = /* @__PURE__ */ st({
  __name: "AppListItem",
  props: {
    component: {},
    props: {},
    listProps: { default: () => ({}) }
  },
  setup(e) {
    const t = e, n = d(() => `text-${t.props.color}`), l = () => {
      t.props.clickFn && t.props.clickFn();
    }, o = d(() => (t.props.items || []).filter(
      (i) => typeof i.visible == "boolean" ? i.visible : !0
    ));
    return (i, u) => kn((ne(), ve(Ft, ut(i.props.componentProps, {
      clickable: "",
      onClick: l
    }), {
      default: ee(() => [
        i.props.icon ? (ne(), ve(je, {
          key: 0,
          side: ""
        }, {
          default: ee(() => [
            le(Se, {
              size: "16px",
              name: i.props.icon,
              color: i.props.color
            }, null, 8, ["name", "color"])
          ]),
          _: 1
        })) : Ce("", !0),
        i.props.label ? (ne(), ve(je, {
          key: 1,
          class: At(n.value)
        }, {
          default: ee(() => [
            ot(ht(i.props.label), 1)
          ]),
          _: 1
        }, 8, ["class"])) : Ce("", !0),
        o.value.length ? (ne(), ve(je, {
          key: 2,
          side: ""
        }, {
          default: ee(() => [
            le(Se, {
              size: "16px",
              name: "mdi-chevron-right"
            })
          ]),
          _: 1
        })) : Ce("", !0),
        o.value.length ? (ne(), ve(Rt(t.component), {
          key: 3,
          square: "",
          anchor: "top end",
          self: "top start",
          "no-focus": "",
          "separate-close-popup": ""
        }, {
          default: ee(() => [
            le(iu, ut({
              component: t.component
            }, i.listProps, { items: o.value }), null, 16, ["component", "items"])
          ]),
          _: 1
        })) : Ce("", !0)
      ]),
      _: 1
    }, 16)), [
      [lu, !o.value.length]
    ]);
  }
}), iu = /* @__PURE__ */ st({
  __name: "AppList",
  props: {
    component: {},
    items: {},
    props: { default: () => ({}) }
  },
  setup(e) {
    const t = e, n = d(() => t.items.filter(
      (l) => typeof l.visible == "boolean" ? l.visible : !0
    ));
    return (l, o) => (ne(), ve(nu, ut({ style: { "min-width": "150px" } }, t.props), {
      default: ee(() => [
        (ne(!0), _e(Ot, null, fn(n.value, (i, u) => (ne(), ve(ou, {
          component: t.component,
          "list-props": t.props,
          props: i,
          key: u
        }, null, 8, ["component", "list-props", "props"]))), 128))
      ]),
      _: 1
    }, 16));
  }
});
export {
  su as AppForm,
  iu as AppList,
  ou as AppListItem,
  eu as AppModal,
  cu as AppSelect,
  tu as appModalInjectionKey,
  du as useAppModal,
  Wo as useForm
};
