import { computed as d, markRaw as Ll, defineComponent as ut, getCurrentInstance as ee, h as p, ref as A, toRaw as Te, withDirectives as kn, provide as Ol, onDeactivated as gt, onActivated as qn, onMounted as pt, nextTick as pe, watch as J, openBlock as te, createBlock as ve, unref as He, withCtx as le, renderSlot as en, resolveDynamicComponent as dn, createElementVNode as De, createElementBlock as _e, Fragment as Tt, renderList as fn, normalizeClass as Ot, mergeProps as vt, toHandlers as Ro, createVNode as ne, createCommentVNode as Ce, reactive as Po, inject as Ao, onBeforeUnmount as de, onBeforeUpdate as Rl, Transition as Qe, onUnmounted as Mo, Teleport as Fo, onBeforeMount as zo, onUpdated as Ho, createTextVNode as Rt, shallowRef as Io, toDisplayString as vn, normalizeProps as Do, guardReactiveProps as jo } from "vue";
import Zn from "lodash.set";
import Jn from "lodash.get";
const Be = {
  dark: {
    type: Boolean,
    default: null
  }
};
function Ve(e, t) {
  return d(() => e.dark === null ? t.dark.isActive : e.dark);
}
const ie = (e) => Ll(ut(e)), Pl = (e) => Ll(e), No = {
  true: "inset",
  item: "item-inset",
  "item-thumbnail": "item-thumbnail-inset"
}, tn = {
  xs: 2,
  sm: 4,
  md: 8,
  lg: 16,
  xl: 24
}, Pt = ie({
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
    const t = ee(), n = Ve(e, t.proxy.$q), l = d(() => e.vertical === !0 ? "vertical" : "horizontal"), o = d(() => ` q-separator--${l.value}`), i = d(() => e.inset !== !1 ? `${o.value}-${No[e.inset]}` : ""), a = d(
      () => `q-separator${o.value}${i.value}` + (e.color !== void 0 ? ` bg-${e.color}` : "") + (n.value === !0 ? " q-separator--dark" : "")
    ), r = d(() => {
      const f = {};
      if (e.size !== void 0 && (f[e.vertical === !0 ? "width" : "height"] = e.size), e.spaced !== !1) {
        const h = e.spaced === !0 ? `${tn.md}px` : e.spaced in tn ? `${tn[e.spaced]}px` : e.spaced, s = e.vertical === !0 ? ["Left", "Right"] : ["Top", "Bottom"];
        f[`margin${s[0]}`] = f[`margin${s[1]}`] = h;
      }
      return f;
    });
    return () => p("hr", {
      class: a.value,
      style: r.value,
      "aria-orientation": l.value
    });
  }
}), Wo = (e) => {
  const t = A(e), n = A({}), l = window.structuredClone(Te(e)), o = d(() => Object.values(n.value)), i = (f) => {
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
function Le(e) {
  e.stopPropagation();
}
function ke(e) {
  e.cancelable !== !1 && e.preventDefault();
}
function oe(e) {
  e.cancelable !== !1 && e.preventDefault(), e.stopPropagation();
}
function mt(e, t, n) {
  const l = `__q_${t}_evt`;
  e[l] = e[l] !== void 0 ? e[l].concat(n) : n, n.forEach((o) => {
    o[0].addEventListener(o[1], e[o[2]], be[o[3]]);
  });
}
function At(e, t) {
  const n = `__q_${t}_evt`;
  e[n] !== void 0 && (e[n].forEach((l) => {
    l[0].removeEventListener(l[1], e[l[2]], be[l[3]]);
  }), e[n] = void 0);
}
let Ie = [], ht = [];
function Ml(e) {
  ht = ht.filter((t) => t !== e);
}
function Uo(e) {
  Ml(e), ht.push(e);
}
function el(e) {
  Ml(e), ht.length === 0 && Ie.length !== 0 && (Ie[Ie.length - 1](), Ie = []);
}
function Qt(e) {
  ht.length === 0 ? e() : Ie.push(e);
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
function Zo(e, t, n, l, o, i) {
  t.key = l + o;
  const a = p(e, t, n);
  return o === !0 ? kn(a, i()) : a;
}
const Fl = "_q_fo_";
function Lt(e) {
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
const Jo = ie({
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
    const l = ee(), o = A(null);
    let i = 0;
    const a = [];
    function r(c) {
      const g = typeof c == "boolean" ? c : e.noErrorFocus !== !0, y = ++i, v = (w, B) => {
        n("validation" + (w === !0 ? "Success" : "Error"), B);
      }, k = (w) => {
        const B = w.validate();
        return typeof B.then == "function" ? B.then(
          (x) => ({ valid: x, comp: w }),
          (x) => ({ valid: !1, comp: w, err: x })
        ) : Promise.resolve({ valid: B, comp: w });
      };
      return (e.greedy === !0 ? Promise.all(a.map(k)).then((w) => w.filter((B) => B.valid !== !0)) : a.reduce(
        (w, B) => w.then(() => k(B).then((x) => {
          if (x.valid === !1)
            return Promise.reject(x);
        })),
        Promise.resolve()
      ).catch((w) => [w])).then((w) => {
        if (w === void 0 || w.length === 0)
          return y === i && v(!0), !0;
        if (y === i) {
          const { comp: B, err: x } = w[0];
          if (x !== void 0 && console.error(x), v(!1, B), g === !0) {
            const M = w.find(({ comp: O }) => typeof O.focus == "function" && Cn(O.$) === !1);
            M !== void 0 && M.comp.focus();
          }
        }
        return !1;
      });
    }
    function f() {
      i++, a.forEach((c) => {
        typeof c.resetValidation == "function" && c.resetValidation();
      });
    }
    function h(c) {
      c !== void 0 && oe(c);
      const g = i + 1;
      r().then((y) => {
        g === i && y === !0 && (e.onSubmit !== void 0 ? n("submit", c) : c !== void 0 && c.target !== void 0 && typeof c.target.submit == "function" && c.target.submit());
      });
    }
    function s(c) {
      c !== void 0 && oe(c), n("reset"), pe(() => {
        f(), e.autofocus === !0 && e.noResetFocus !== !0 && b();
      });
    }
    function b() {
      Qt(() => {
        if (o.value === null)
          return;
        const c = o.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || o.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || o.value.querySelector("[autofocus], [data-autofocus]") || Array.prototype.find.call(o.value.querySelectorAll("[tabindex]"), (g) => g.tabIndex > -1);
        c != null && c.focus({ preventScroll: !0 });
      });
    }
    Ol(Fl, {
      bindComponent(c) {
        a.push(c);
      },
      unbindComponent(c) {
        const g = a.indexOf(c);
        g > -1 && a.splice(g, 1);
      }
    });
    let m = !1;
    return gt(() => {
      m = !0;
    }), qn(() => {
      m === !0 && e.autofocus === !0 && b();
    }), pt(() => {
      e.autofocus === !0 && b();
    }), Object.assign(l.proxy, {
      validate: r,
      resetValidation: f,
      submit: h,
      reset: s,
      focus: b,
      getValidationComponents: () => a
    }), () => p("form", {
      class: "q-form",
      ref: o,
      onSubmit: h,
      onReset: s
    }, me(t.default));
  }
}), ei = {
  class: /* @__PURE__ */ Ot("row q-col-gutter-md")
}, ti = { class: "col" }, ni = {
  key: 0,
  class: "col-auto flex"
}, ru = /* @__PURE__ */ ut({
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
  emits: ["submit", "update:modelValue", "reset", "close"],
  setup(e, { emit: t }) {
    const n = e, l = A(), o = Math.max(...n.schema.map((v) => v.column || 1)), i = (v = {}, k) => {
      for (const S of k) {
        const w = Jn(
          v,
          S.scope,
          S != null && S.transform ? S == null ? void 0 : S.transform(S.defaultValue) : S.defaultValue
        );
        Zn(v, S.scope, w);
      }
      return v;
    }, { resetDefaultForm: a, validateForm: r, formData: f, fieldError: h } = Wo(
      i(n.modelValue, n.schema)
    );
    J(
      f,
      (v) => {
        t("update:modelValue", v);
      },
      {
        deep: !0,
        immediate: !0
      }
    );
    const s = (v) => Jn(f.value, v), b = (v, k) => {
      Zn(
        f.value,
        k.scope,
        k != null && k.transform ? k == null ? void 0 : k.transform(v) : v
      ), h.value[k.scope] && r(n.modelSchema);
    }, m = () => {
      r(n.modelSchema), r(n.modelSchema) && t("submit", Te(f.value));
    }, c = () => {
      var v;
      a(), (v = l.value) == null || v.resetValidation(), t("reset");
    }, g = () => r(n.modelSchema), y = d(() => (v) => ({
      bind: {
        ...v.componentProps || {},
        readonly: n.readonly,
        disable: n.disable,
        modelValue: s(v.scope),
        error: !!h.value[v.scope],
        errorMessage: h.value[v.scope] || ""
      },
      on: {
        "update:modelValue": (k) => b(k, v)
      }
    }));
    return (v, k) => (te(), ve(He(Jo), {
      onValidationError: g,
      onSubmit: m,
      greedy: "",
      onReset: c,
      ref_key: "form",
      ref: l
    }, {
      default: le(() => [
        en(v.$slots, "top"),
        (te(), ve(dn(v.fieldWrapper), null, {
          default: le(() => [
            De("div", ei, [
              (te(!0), _e(Tt, null, fn(He(o), (S) => (te(), _e(Tt, { key: S }, [
                De("div", ti, [
                  De("div", {
                    class: Ot(`row q-col-gutter-${v.colGutter}`)
                  }, [
                    (te(!0), _e(Tt, null, fn(v.schema.filter((w) => {
                      const B = w.column || 1;
                      return B > He(o) ? S === 1 : B === S;
                    }), (w) => (te(), _e("div", {
                      key: w.scope,
                      class: Ot(`col-${w.cols || "auto"}`)
                    }, [
                      en(v.$slots, w.scope, {
                        props: {
                          setterScope: b,
                          getterScope: s,
                          scope: w.scope,
                          ...y.value(w)
                        }
                      }, () => [
                        (te(), ve(dn(w.component), vt(y.value(w).bind, Ro(y.value(w).on)), null, 16))
                      ])
                    ], 2))), 128))
                  ], 2)
                ]),
                S !== He(o) ? (te(), _e("div", ni, [
                  ne(Pt, { vertical: "" })
                ])) : Ce("", !0)
              ], 64))), 128))
            ])
          ]),
          _: 3
        })),
        en(v.$slots, "bottom")
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
}, bt = {
  size: String
};
function yt(e, t = mn) {
  return d(() => e.size !== void 0 ? { fontSize: e.size in t ? `${t[e.size]}px` : e.size } : null);
}
const tl = "0 0 24 24", nl = (e) => e, nn = (e) => `ionicons ${e}`, Hl = {
  "mdi-": (e) => `mdi ${e}`,
  "icon-": nl,
  // fontawesome equiv
  "bt-": (e) => `bt ${e}`,
  "eva-": (e) => `eva ${e}`,
  "ion-md": nn,
  "ion-ios": nn,
  "ion-logo": nn,
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
    ...bt,
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
    const { proxy: { $q: n } } = ee(), l = yt(e), o = d(
      () => "q-icon" + (e.left === !0 ? " on-left" : "") + (e.right === !0 ? " on-right" : "") + (e.color !== void 0 ? ` text-${e.color}` : "")
    ), i = d(() => {
      let a, r = e.name;
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
          nodes: s.split("&&").map((m) => {
            const [c, g, y] = m.split("@@");
            return p("path", { style: g, d: c, transform: y });
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
        a = Hl[h[1]](r);
      else if (si.test(r) === !0)
        a = r;
      else if (ri.test(r) === !0)
        a = `ionicons ion-${n.platform.is.ios === !0 ? "ios" : "md"}${r.substring(3)}`;
      else if (ll.test(r) === !0) {
        a = "notranslate material-symbols";
        const s = r.match(ll);
        s !== null && (r = r.substring(6), a += Dl[s[1]]), f = r;
      } else {
        a = "notranslate material-icons";
        const s = r.match(oi);
        s !== null && (r = r.substring(2), a += Il[s[1]]), f = r;
      }
      return {
        cls: a,
        content: f
      };
    });
    return () => {
      const a = {
        class: o.value,
        style: l.value,
        "aria-hidden": "true",
        role: "presentation"
      };
      return i.value.none === !0 ? p(e.tag, a, me(t.default)) : i.value.img === !0 ? p("span", a, Ee(t.default, [
        p("img", { src: i.value.src })
      ])) : i.value.svg === !0 ? p("span", a, Ee(t.default, [
        p("svg", {
          viewBox: i.value.viewBox || "0 0 24 24"
        }, i.value.nodes)
      ])) : i.value.svguse === !0 ? p("span", a, Ee(t.default, [
        p("svg", {
          viewBox: i.value.viewBox
        }, [
          p("use", { "xlink:href": i.value.src })
        ])
      ])) : (i.value.cls !== void 0 && (a.class += " " + i.value.cls), p(e.tag, a, Ee(t.default, [
        i.value.content
      ])));
    };
  }
});
function ci(e, t) {
  const n = A(null), l = d(() => e.disable === !0 ? null : p("span", {
    ref: n,
    class: "no-outline",
    tabindex: -1
  }));
  function o(i) {
    const a = t.value;
    i !== void 0 && i.type.indexOf("key") === 0 ? a !== null && document.activeElement !== a && a.contains(document.activeElement) === !0 && a.focus() : n.value !== null && (i === void 0 || a !== null && a.contains(i.target) === !0) && n.value.focus();
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
      p("input", {
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
  ...bt,
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
  const { props: n, slots: l, emit: o, proxy: i } = ee(), { $q: a } = i, r = Ve(n, a), f = A(null), { refocusTargetEl: h, refocusTarget: s } = ci(n, f), b = yt(n, vi), m = d(
    () => n.val !== void 0 && Array.isArray(n.modelValue)
  ), c = d(() => {
    const z = Te(n.val);
    return m.value === !0 ? n.modelValue.findIndex((X) => Te(X) === z) : -1;
  }), g = d(() => m.value === !0 ? c.value > -1 : Te(n.modelValue) === Te(n.trueValue)), y = d(() => m.value === !0 ? c.value === -1 : Te(n.modelValue) === Te(n.falseValue)), v = d(
    () => g.value === !1 && y.value === !1
  ), k = d(() => n.disable === !0 ? -1 : n.tabindex || 0), S = d(
    () => `q-${e} cursor-pointer no-outline row inline no-wrap items-center` + (n.disable === !0 ? " disabled" : "") + (r.value === !0 ? ` q-${e}--dark` : "") + (n.dense === !0 ? ` q-${e}--dense` : "") + (n.leftLabel === !0 ? " reverse" : "")
  ), w = d(() => {
    const z = g.value === !0 ? "truthy" : y.value === !0 ? "falsy" : "indet", X = n.color !== void 0 && (n.keepColor === !0 || (e === "toggle" ? g.value === !0 : y.value !== !0)) ? ` text-${n.color}` : "";
    return `q-${e}__inner relative-position non-selectable q-${e}__inner--${z}${X}`;
  }), B = d(() => {
    const z = { type: "checkbox" };
    return n.name !== void 0 && Object.assign(z, {
      // see https://vuejs.org/guide/extras/render-function.html#creating-vnodes (.prop)
      ".checked": g.value,
      "^checked": g.value === !0 ? "checked" : void 0,
      name: n.name,
      value: m.value === !0 ? n.val : n.trueValue
    }), z;
  }), x = di(B), M = d(() => {
    const z = {
      tabindex: k.value,
      role: e === "toggle" ? "switch" : "checkbox",
      "aria-label": n.label,
      "aria-checked": v.value === !0 ? "mixed" : g.value === !0 ? "true" : "false"
    };
    return n.disable === !0 && (z["aria-disabled"] = "true"), z;
  });
  function O(z) {
    z !== void 0 && (oe(z), s(z)), n.disable !== !0 && o("update:modelValue", I(), z);
  }
  function I() {
    if (m.value === !0) {
      if (g.value === !0) {
        const z = n.modelValue.slice();
        return z.splice(c.value, 1), z;
      }
      return n.modelValue.concat([n.val]);
    }
    if (g.value === !0) {
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
  const W = t(g, v);
  return Object.assign(i, { toggle: O }), () => {
    const z = W();
    n.disable !== !0 && x(
      z,
      "unshift",
      ` q-${e}__native absolute q-ma-none q-pa-none`
    );
    const X = [
      p("div", {
        class: w.value,
        style: b.value,
        "aria-hidden": "true"
      }, z)
    ];
    h.value !== null && X.push(h.value);
    const T = n.label !== void 0 ? Ee(l.default, [n.label]) : me(l.default);
    return T !== void 0 && X.push(
      p("div", {
        class: `q-${e}__label q-anchor--skip`
      }, T)
    ), p("div", {
      ref: f,
      class: S.value,
      ...M.value,
      onClick: O,
      onKeydown: K,
      onKeyup: Z
    }, X);
  };
}
const pi = p("div", {
  key: "svg",
  class: "q-checkbox__bg absolute"
}, [
  p("svg", {
    class: "q-checkbox__svg fit absolute-full",
    viewBox: "0 0 24 24"
  }, [
    p("path", {
      class: "q-checkbox__truthy",
      fill: "none",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    }),
    p("path", {
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
        p("div", {
          key: "icon",
          class: "q-checkbox__icon-container absolute-full flex flex-center no-wrap"
        }, [
          p(Se, {
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
    return () => p("div", { class: n.value }, me(t.default));
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
    return () => p("div", {
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
    } else if (Array.isArray(o) === !1 || o.length !== l.length || l.some((i, a) => i !== o[a]))
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
  const n = ee(), { props: l, proxy: o, emit: i } = n, a = zl(n), r = d(() => l.disable !== !0 && l.href !== void 0), f = t === !0 ? d(
    () => a === !0 && l.disable !== !0 && r.value !== !0 && l.to !== void 0 && l.to !== null && l.to !== ""
  ) : d(
    () => a === !0 && r.value !== !0 && l.to !== void 0 && l.to !== null && l.to !== ""
  ), h = d(() => f.value === !0 ? S(l.to) : null), s = d(() => h.value !== null), b = d(() => r.value === !0 || s.value === !0), m = d(() => l.type === "a" || b.value === !0 ? "a" : l.tag || e || "div"), c = d(() => r.value === !0 ? {
    href: l.href,
    target: l.target
  } : s.value === !0 ? {
    href: h.value.href,
    target: l.target
  } : {}), g = d(() => {
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
    () => s.value === !0 && g.value !== -1 && yi(o.$route.params, h.value.params)
  ), v = d(
    () => y.value === !0 && g.value === o.$route.matched.length - 1 && Si(o.$route.params, h.value.params)
  ), k = d(() => s.value === !0 ? v.value === !0 ? ` ${l.exactActiveClass} ${l.activeClass}` : l.exact === !0 ? "" : y.value === !0 ? ` ${l.activeClass}` : "" : "");
  function S(x) {
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
  function B(x) {
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
    linkTag: m,
    resolvedLink: h,
    linkIsActive: y,
    linkIsExactActive: v,
    linkClass: k,
    linkAttrs: c,
    getLink: S,
    navigateToRouterLink: w,
    navigateOnClick: B
  };
}
function Kl(e) {
  return e !== Object(e) || e.isComposing === !0 || e.qKeyEvent === !0;
}
function Re(e, t) {
  return Kl(e) === !0 ? !1 : [].concat(t).includes(e.keyCode);
}
const Mt = ie({
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
    const { proxy: { $q: l } } = ee(), o = Ve(e, l), { hasLink: i, linkAttrs: a, linkClass: r, linkTag: f, navigateOnClick: h } = Wl(), s = A(null), b = A(null), m = d(
      () => e.clickable === !0 || i.value === !0 || e.tag === "label"
    ), c = d(
      () => e.disable !== !0 && m.value === !0
    ), g = d(
      () => "q-item q-item-type row no-wrap" + (e.dense === !0 ? " q-item--dense" : "") + (o.value === !0 ? " q-item--dark" : "") + (i.value === !0 && e.active === null ? r.value : e.active === !0 ? ` q-item--active${e.activeClass !== void 0 ? ` ${e.activeClass}` : ""}` : "") + (e.disable === !0 ? " disabled" : "") + (c.value === !0 ? " q-item--clickable q-link cursor-pointer " + (e.manualFocus === !0 ? "q-manual-focusable" : "q-focusable q-hoverable") + (e.focused === !0 ? " q-manual-focusable--focused" : "") : "")
    ), y = d(() => e.insetLevel === void 0 ? null : {
      ["padding" + (l.lang.rtl === !0 ? "Right" : "Left")]: 16 + e.insetLevel * 56 + "px"
    });
    function v(w) {
      c.value === !0 && (b.value !== null && (w.qKeyEvent !== !0 && document.activeElement === s.value ? b.value.focus() : document.activeElement === b.value && s.value.focus()), h(w));
    }
    function k(w) {
      if (c.value === !0 && Re(w, 13) === !0) {
        oe(w), w.qKeyEvent = !0;
        const B = new MouseEvent("click", w);
        B.qKeyEvent = !0, s.value.dispatchEvent(B);
      }
      n("keyup", w);
    }
    function S() {
      const w = Yo(t.default, []);
      return c.value === !0 && w.unshift(
        p("div", { class: "q-focus-helper", tabindex: -1, ref: b })
      ), w;
    }
    return () => {
      const w = {
        ref: s,
        class: g.value,
        style: y.value,
        role: "listitem",
        onClick: v,
        onKeyup: k
      };
      return c.value === !0 ? (w.tabindex = e.tabindex || "0", Object.assign(w, a.value)) : m.value === !0 && (w["aria-disabled"] = "true"), p(
        f.value,
        w,
        S()
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
const Ft = A(
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
    Ft.value === !0 ? (e.onSSRHydrated.push(() => {
      Object.assign(t.platform, he), Ft.value = !1, En = void 0;
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
  }), he.is.ios === !0 && window.navigator.vendor.toLowerCase().indexOf("apple"), Ft.value === !0 ? Object.assign(gn, he, En, _i) : Object.assign(gn, he);
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
    return () => p("svg", {
      class: n.value + " q-spinner-mat",
      width: t.value,
      height: t.value,
      viewBox: "25 25 50 50"
    }, [
      p("circle", {
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
  const l = Ao(Fl, !1);
  if (l !== !1) {
    const { props: o, proxy: i } = ee();
    Object.assign(i, { validate: e, resetValidation: t }), J(() => o.disable, (a) => {
      a === !0 ? (typeof t == "function" && t(), l.unbindComponent(i)) : l.bindComponent(i);
    }), pt(() => {
      o.disable !== !0 && l.bindComponent(i);
    }), de(() => {
      o.disable !== !0 && l.unbindComponent(i);
    });
  } else
    n === !0 && console.error("Parent QForm not found on useFormChild()!");
}
const rl = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/, sl = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/, cl = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/, Ct = /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/, _t = /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/, ln = {
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
  rgbColor: (e) => Ct.test(e),
  rgbaColor: (e) => _t.test(e),
  rgbOrRgbaColor: (e) => Ct.test(e) || _t.test(e),
  hexOrRgbColor: (e) => rl.test(e) || Ct.test(e),
  hexaOrRgbaColor: (e) => sl.test(e) || _t.test(e),
  anyColor: (e) => cl.test(e) || Ct.test(e) || _t.test(e)
};
function Xl(e, t = 250, n) {
  let l = null;
  function o() {
    const i = arguments, a = () => {
      l = null, n !== !0 && e.apply(this, i);
    };
    l !== null ? clearTimeout(l) : n === !0 && e.apply(this, i), l = setTimeout(a, t);
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
  const { props: n, proxy: l } = ee(), o = A(!1), i = A(null), a = A(null);
  Vi({ validate: g, resetValidation: c });
  let r = 0, f;
  const h = d(
    () => n.rules !== void 0 && n.rules !== null && n.rules.length !== 0
  ), s = d(
    () => n.disable !== !0 && h.value === !0
  ), b = d(
    () => n.error === !0 || o.value === !0
  ), m = d(() => typeof n.errorMessage == "string" && n.errorMessage.length !== 0 ? n.errorMessage : i.value);
  J(() => n.modelValue, () => {
    y();
  }), J(() => n.reactiveRules, (k) => {
    k === !0 ? f === void 0 && (f = J(() => n.rules, () => {
      y(!0);
    })) : f !== void 0 && (f(), f = void 0);
  }, { immediate: !0 }), J(e, (k) => {
    k === !0 ? a.value === null && (a.value = !1) : a.value === !1 && (a.value = !0, s.value === !0 && n.lazyRules !== "ondemand" && t.value === !1 && v());
  });
  function c() {
    r++, t.value = !1, a.value = null, o.value = !1, i.value = null, v.cancel();
  }
  function g(k = n.modelValue) {
    if (s.value !== !0)
      return !0;
    const S = ++r, w = t.value !== !0 ? () => {
      a.value = !0;
    } : () => {
    }, B = (M, O) => {
      M === !0 && w(), o.value = M, i.value = O || null, t.value = !1;
    }, x = [];
    for (let M = 0; M < n.rules.length; M++) {
      const O = n.rules[M];
      let I;
      if (typeof O == "function" ? I = O(k, ln) : typeof O == "string" && ln[O] !== void 0 && (I = ln[O](k)), I === !1 || typeof I == "string")
        return B(!0, I), !1;
      I !== !0 && I !== void 0 && x.push(I);
    }
    return x.length === 0 ? (B(!1), !0) : (t.value = !0, Promise.all(x).then(
      (M) => {
        if (M === void 0 || Array.isArray(M) === !1 || M.length === 0)
          return S === r && B(!1), !0;
        const O = M.find((I) => I === !1 || typeof I == "string");
        return S === r && B(O !== void 0, O), O === void 0;
      },
      (M) => (S === r && (console.error(M), B(!0)), !1)
    ));
  }
  function y(k) {
    s.value === !0 && n.lazyRules !== "ondemand" && (a.value === !0 || n.lazyRules !== !0 && k !== !0) && v();
  }
  const v = Xl(g, 0);
  return de(() => {
    f !== void 0 && f(), v.cancel();
  }), Object.assign(l, { resetValidation: c, validate: g }), _n(l, "hasError", () => b.value), {
    isDirtyModel: a,
    hasRules: h,
    hasError: b,
    errorMessage: m,
    validate: g,
    resetValidation: c
  };
}
const dl = /^on[A-Z]/;
function Oi(e, t) {
  const n = {
    listeners: A({}),
    attributes: A({})
  };
  function l() {
    const o = {}, i = {};
    for (const a in e)
      a !== "class" && a !== "style" && dl.test(a) === !1 && (o[a] = e[a]);
    for (const a in t.props)
      dl.test(a) === !0 && (i[a] = t.props[a]);
    n.attributes.value = o, n.listeners.value = i;
  }
  return Rl(l), l(), n;
}
let on, Et = 0;
const ce = new Array(256);
for (let e = 0; e < 256; e++)
  ce[e] = (e + 256).toString(16).substring(1);
const Ri = (() => {
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
function Pi() {
  (on === void 0 || Et + 16 > fl) && (Et = 0, on = Ri(fl));
  const e = Array.prototype.slice.call(on, Et, Et += 16);
  return e[6] = e[6] & 15 | 64, e[8] = e[8] & 63 | 128, ce[e[0]] + ce[e[1]] + ce[e[2]] + ce[e[3]] + "-" + ce[e[4]] + ce[e[5]] + "-" + ce[e[6]] + ce[e[7]] + "-" + ce[e[8]] + ce[e[9]] + "-" + ce[e[10]] + ce[e[11]] + ce[e[12]] + ce[e[13]] + ce[e[14]] + ce[e[15]];
}
function pn(e) {
  return e === void 0 ? `f_${Pi()}` : e;
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
  const { props: e, attrs: t, proxy: n, vnode: l } = ee();
  return {
    isDark: Ve(e, n.$q),
    editable: d(
      () => e.disable !== !0 && e.readonly !== !0
    ),
    innerLoading: A(!1),
    focused: A(!1),
    hasPopupOpen: !1,
    splitAttrs: Oi(t, l),
    targetUid: A(pn(e.for)),
    rootRef: A(null),
    targetRef: A(null),
    controlRef: A(null)
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
function Zl(e) {
  const { props: t, emit: n, slots: l, attrs: o, proxy: i } = ee(), { $q: a } = i;
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
    resetValidation: m
  } = Li(e.focused, e.innerLoading), c = e.floatingLabel !== void 0 ? d(() => t.stackLabel === !0 || e.focused.value === !0 || e.floatingLabel.value === !0) : d(() => t.stackLabel === !0 || e.focused.value === !0 || e.hasValue.value === !0), g = d(
    () => t.bottomSlots === !0 || t.hint !== void 0 || h.value === !0 || t.counter === !0 || t.error !== null
  ), y = d(() => t.filled === !0 ? "filled" : t.outlined === !0 ? "outlined" : t.borderless === !0 ? "borderless" : t.standout ? "standout" : "standard"), v = d(
    () => `q-field row no-wrap items-start q-field--${y.value}` + (e.fieldClass !== void 0 ? ` ${e.fieldClass.value}` : "") + (t.rounded === !0 ? " q-field--rounded" : "") + (t.square === !0 ? " q-field--square" : "") + (c.value === !0 ? " q-field--float" : "") + (S.value === !0 ? " q-field--labeled" : "") + (t.dense === !0 ? " q-field--dense" : "") + (t.itemAligned === !0 ? " q-field--item-aligned q-item-type" : "") + (e.isDark.value === !0 ? " q-field--dark" : "") + (e.getControl === void 0 ? " q-field--auto-height" : "") + (e.focused.value === !0 ? " q-field--focused" : "") + (s.value === !0 ? " q-field--error" : "") + (s.value === !0 || e.focused.value === !0 ? " q-field--highlighted" : "") + (t.hideBottomSpace !== !0 && g.value === !0 ? " q-field--with-bottom" : "") + (t.disable === !0 ? " q-field--disabled" : t.readonly === !0 ? " q-field--readonly" : "")
  ), k = d(
    () => "q-field__control relative-position row no-wrap" + (t.bgColor !== void 0 ? ` bg-${t.bgColor}` : "") + (s.value === !0 ? " text-negative" : typeof t.standout == "string" && t.standout.length !== 0 && e.focused.value === !0 ? ` ${t.standout}` : t.color !== void 0 ? ` text-${t.color}` : "")
  ), S = d(
    () => t.labelSlot === !0 || t.label !== void 0
  ), w = d(
    () => "q-field__label no-pointer-events absolute ellipsis" + (t.labelColor !== void 0 && s.value !== !0 ? ` text-${t.labelColor}` : "")
  ), B = d(() => ({
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
    Qt(M);
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
    oe($), a.platform.is.mobile !== !0 ? (e.targetRef !== void 0 && e.targetRef.value || e.rootRef.value).focus() : e.rootRef.value.contains(document.activeElement) === !0 && document.activeElement.blur(), t.type === "file" && (e.inputRef.value.value = null), n("update:modelValue", null), n("clear", t.modelValue), pe(() => {
      m(), a.platform.is.mobile !== !0 && (f.value = !1);
    });
  }
  function z() {
    const $ = [];
    return l.prepend !== void 0 && $.push(
      p("div", {
        class: "q-field__prepend q-field__marginal row no-wrap items-center",
        key: "prepend",
        onClick: ke
      }, l.prepend())
    ), $.push(
      p("div", {
        class: "q-field__control-container col relative-position row no-wrap q-anchor--skip"
      }, X())
    ), s.value === !0 && t.noErrorIcon === !1 && $.push(
      j("error", [
        p(Se, { name: a.iconSet.field.error, color: "negative" })
      ])
    ), t.loading === !0 || e.innerLoading.value === !0 ? $.push(
      j(
        "inner-loading-append",
        l.loading !== void 0 ? l.loading() : [p(Ul, { color: t.color })]
      )
    ) : t.clearable === !0 && e.hasValue.value === !0 && e.editable.value === !0 && $.push(
      j("inner-clearable-append", [
        p(Se, {
          class: "q-field__focusable-action",
          tag: "button",
          name: t.clearIcon || a.iconSet.field.clear,
          tabindex: 0,
          type: "button",
          "aria-hidden": null,
          role: null,
          onClick: W
        })
      ])
    ), l.append !== void 0 && $.push(
      p("div", {
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
      p("div", {
        class: "q-field__prefix no-pointer-events row items-center"
      }, t.prefix)
    ), e.getShadowControl !== void 0 && e.hasShadow.value === !0 && $.push(
      e.getShadowControl()
    ), e.getControl !== void 0 ? $.push(e.getControl()) : l.rawControl !== void 0 ? $.push(l.rawControl()) : l.control !== void 0 && $.push(
      p("div", {
        ref: e.targetRef,
        class: "q-field__native row",
        tabindex: -1,
        ...e.splitAttrs.attributes.value,
        "data-autofocus": t.autofocus === !0 || void 0
      }, l.control(B.value))
    ), S.value === !0 && $.push(
      p("div", {
        class: w.value
      }, me(l.label, t.label))
    ), t.suffix !== void 0 && t.suffix !== null && $.push(
      p("div", {
        class: "q-field__suffix no-pointer-events row items-center"
      }, t.suffix)
    ), $.concat(me(l.default));
  }
  function T() {
    let $, N;
    s.value === !0 ? b.value !== null ? ($ = [p("div", { role: "alert" }, b.value)], N = `q--slot-error-${b.value}`) : ($ = me(l.error), N = "q--slot-error") : (t.hideHint !== !0 || e.focused.value === !0) && (t.hint !== void 0 ? ($ = [p("div", t.hint)], N = `q--slot-hint-${t.hint}`) : ($ = me(l.hint), N = "q--slot-hint"));
    const re = t.counter === !0 || l.counter !== void 0;
    if (t.hideBottomSpace === !0 && re === !1 && $ === void 0)
      return;
    const C = p("div", {
      key: N,
      class: "q-field__messages col"
    }, $);
    return p("div", {
      class: "q-field__bottom row items-start q-field__bottom--" + (t.hideBottomSpace !== !0 ? "animated" : "stale"),
      onClick: ke
    }, [
      t.hideBottomSpace === !0 ? C : p(Qe, { name: "q-transition--field-message" }, () => C),
      re === !0 ? p("div", {
        class: "q-field__counter"
      }, l.counter !== void 0 ? l.counter() : e.computedCounter.value) : null
    ]);
  }
  function j($, N) {
    return N === null ? null : p("div", {
      key: $,
      class: "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"
    }, N);
  }
  let U = !1;
  return gt(() => {
    U = !0;
  }), qn(() => {
    U === !0 && t.autofocus === !0 && i.focus();
  }), pt(() => {
    Ft.value === !0 && t.for === void 0 && (e.targetUid.value = pn()), t.autofocus === !0 && i.focus();
  }), de(() => {
    r !== null && clearTimeout(r);
  }), Object.assign(i, { focus: O, blur: I }), function() {
    const N = e.getControl === void 0 && l.control === void 0 ? {
      ...e.splitAttrs.attributes.value,
      "data-autofocus": t.autofocus === !0 || void 0,
      ...x.value
    } : x.value;
    return p("label", {
      ref: e.rootRef,
      class: [
        v.value,
        o.class
      ],
      style: o.style,
      ...N
    }, [
      l.before !== void 0 ? p("div", {
        class: "q-field__before q-field__marginal row no-wrap items-center",
        onClick: ke
      }, l.before()) : null,
      p("div", {
        class: "q-field__inner relative-position col self-stretch"
      }, [
        p("div", {
          ref: e.controlRef,
          class: k.value,
          tabindex: -1,
          ...e.controlEvents
        }, z()),
        g.value === !0 ? T() : null
      ]),
      l.after !== void 0 ? p("div", {
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
    return Zl(Gl());
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
function Jl(e, t) {
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
  n.modifiers.stop === !0 && Le(e);
  const o = n.modifiers.color;
  let i = n.modifiers.center;
  i = i === !0 || l === !0;
  const a = document.createElement("span"), r = document.createElement("span"), f = Al(e), { left: h, top: s, width: b, height: m } = t.getBoundingClientRect(), c = Math.sqrt(b * b + m * m), g = c / 2, y = `${(b - c) / 2}px`, v = i ? y : `${f.left - h - g}px`, k = `${(m - c) / 2}px`, S = i ? k : `${f.top - s - g}px`;
  r.className = "q-ripple__inner", yn(r, {
    height: `${c}px`,
    width: `${c}px`,
    transform: `translate3d(${v},${S},0) scale3d(.2,.2,1)`,
    opacity: 0
  }), a.className = `q-ripple${o ? " text-" + o : ""}`, a.setAttribute("dir", "ltr"), a.appendChild(r), t.appendChild(a);
  const w = () => {
    a.remove(), clearTimeout(B);
  };
  n.abort.push(w);
  let B = setTimeout(() => {
    r.classList.add("q-ripple__inner--enter"), r.style.transform = `translate3d(${y},${k},0) scale3d(1,1,1)`, r.style.opacity = 0.2, B = setTimeout(() => {
      r.classList.remove("q-ripple__inner--enter"), r.classList.add("q-ripple__inner--leave"), r.style.opacity = 0, B = setTimeout(() => {
        a.remove(), n.abort.splice(n.abort.indexOf(w), 1);
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
const eo = Pl(
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
          l.enabled === !0 && o.qSkipRipple !== !0 && Re(o, l.modifiers.keyCodes) === !0 && o.type === `key${l.modifiers.early === !0 ? "down" : "up"}` && vl(o, e, l, !0);
        }, 300)
      };
      ml(l, t), e.__qripple = l, mt(l, "main", [
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
      }), At(t, "main"), delete e._qripple);
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
    ...bt,
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
    const { proxy: { $q: l } } = ee(), o = Ve(e, l), i = yt(e, zi), a = d(() => e.selected === !0 || e.icon !== void 0), r = d(() => e.selected === !0 ? e.iconSelected || l.iconSet.chip.selected : e.icon), f = d(() => e.iconRemove || l.iconSet.chip.remove), h = d(
      () => e.disable === !1 && (e.clickable === !0 || e.selected !== null)
    ), s = d(() => {
      const v = e.outline === !0 && e.color || e.textColor;
      return "q-chip row inline no-wrap items-center" + (e.outline === !1 && e.color !== void 0 ? ` bg-${e.color}` : "") + (v ? ` text-${v} q-chip--colored` : "") + (e.disable === !0 ? " disabled" : "") + (e.dense === !0 ? " q-chip--dense" : "") + (e.outline === !0 ? " q-chip--outline" : "") + (e.selected === !0 ? " q-chip--selected" : "") + (h.value === !0 ? " q-chip--clickable cursor-pointer non-selectable q-hoverable" : "") + (e.square === !0 ? " q-chip--square" : "") + (o.value === !0 ? " q-chip--dark q-dark" : "");
    }), b = d(() => {
      const v = e.disable === !0 ? { tabindex: -1, "aria-disabled": "true" } : { tabindex: e.tabindex || 0 }, k = {
        ...v,
        role: "button",
        "aria-hidden": "false",
        "aria-label": e.removeAriaLabel || l.lang.label.remove
      };
      return { chip: v, remove: k };
    });
    function m(v) {
      v.keyCode === 13 && c(v);
    }
    function c(v) {
      e.disable || (n("update:selected", !e.selected), n("click", v));
    }
    function g(v) {
      (v.keyCode === void 0 || v.keyCode === 13) && (oe(v), e.disable === !1 && (n("update:modelValue", !1), n("remove")));
    }
    function y() {
      const v = [];
      h.value === !0 && v.push(
        p("div", { class: "q-focus-helper" })
      ), a.value === !0 && v.push(
        p(Se, {
          class: "q-chip__icon q-chip__icon--left",
          name: r.value
        })
      );
      const k = e.label !== void 0 ? [p("div", { class: "ellipsis" }, [e.label])] : void 0;
      return v.push(
        p("div", {
          class: "q-chip__content col row no-wrap items-center q-anchor--skip"
        }, Go(t.default, k))
      ), e.iconRight && v.push(
        p(Se, {
          class: "q-chip__icon q-chip__icon--right",
          name: e.iconRight
        })
      ), e.removable === !0 && v.push(
        p(Se, {
          class: "q-chip__icon q-chip__icon--remove cursor-pointer",
          name: f.value,
          ...b.value.remove,
          onClick: g,
          onKeyup: g
        })
      ), v;
    }
    return () => {
      if (e.modelValue === !1)
        return;
      const v = {
        class: s.value,
        style: i.value
      };
      return h.value === !0 && Object.assign(
        v,
        b.value.chip,
        { onClick: c, onKeyup: m }
      ), Zo(
        "div",
        v,
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
  const { props: l, proxy: o, emit: i } = ee(), a = A(null);
  let r = null;
  function f(c) {
    return a.value === null ? !1 : c === void 0 || c.touches === void 0 || c.touches.length <= 1;
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
      Re(c, 13) === !0 && h.toggle(c);
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
      o.hide(c), a.value.classList.add("non-selectable");
      const g = c.target;
      mt(h, "anchor", [
        [g, "touchmove", "mobileCleanup", "passive"],
        [g, "touchend", "mobileCleanup", "passive"],
        [g, "touchcancel", "mobileCleanup", "passive"],
        [a.value, "contextmenu", "prevent", "notPassive"]
      ]), r = setTimeout(() => {
        r = null, o.show(c), c.qAnchorHandled = !0;
      }, 300);
    },
    mobileCleanup(c) {
      a.value.classList.remove("non-selectable"), r !== null && (clearTimeout(r), r = null), e.value === !0 && c !== void 0 && wn();
    }
  }), n = function(c = l.contextMenu) {
    if (l.noParentEvent === !0 || a.value === null)
      return;
    let g;
    c === !0 ? o.$q.platform.is.mobile === !0 ? g = [
      [a.value, "touchstart", "mobileTouch", "passive"]
    ] : g = [
      [a.value, "mousedown", "hide", "passive"],
      [a.value, "contextmenu", "contextClick", "notPassive"]
    ] : g = [
      [a.value, "click", "toggle", "passive"],
      [a.value, "keyup", "toggleKey", "passive"]
    ], mt(h, "anchor", g);
  });
  function s() {
    At(h, "anchor");
  }
  function b(c) {
    for (a.value = c; a.value.classList.contains("q-anchor--skip"); )
      a.value = a.value.parentNode;
    n();
  }
  function m() {
    if (l.target === !1 || l.target === "" || o.$el.parentNode === null)
      a.value = null;
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
      c != null ? (a.value = c.$el || c, n()) : (a.value = null, console.error(`Anchor: target "${l.target}" not found`));
    }
  }
  return J(() => l.contextMenu, (c) => {
    a.value !== null && (s(), n(c));
  }), J(() => l.target, () => {
    a.value !== null && s(), m();
  }), J(() => l.noParentEvent, (c) => {
    a.value !== null && (c === !0 ? s() : n());
  }), pt(() => {
    m(), t !== !0 && l.modelValue === !0 && a.value === null && i("update:modelValue", !1);
  }), de(() => {
    r !== null && clearTimeout(r), s();
  }), {
    anchorEl: a,
    canShow: f,
    anchorEvents: h
  };
}
function lo(e, t) {
  const n = A(null);
  let l;
  function o(r, f) {
    const h = `${f !== void 0 ? "add" : "remove"}EventListener`, s = f !== void 0 ? f : l;
    r !== window && r[h]("scroll", s, be.passive), window[h]("scroll", s, be.passive), l = f;
  }
  function i() {
    n.value !== null && (o(n.value), n.value = null);
  }
  const a = J(() => e.noParentEvent, () => {
    n.value !== null && (i(), t());
  });
  return de(a), {
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
  const a = ee(), { props: r, emit: f, proxy: h } = a;
  let s;
  function b(S) {
    e.value === !0 ? g(S) : m(S);
  }
  function m(S) {
    if (r.disable === !0 || S !== void 0 && S.qAnchorHandled === !0 || t !== void 0 && t(S) !== !0)
      return;
    const w = r["onUpdate:modelValue"] !== void 0;
    w === !0 && (f("update:modelValue", !0), s = S, pe(() => {
      s === S && (s = void 0);
    })), (r.modelValue === null || w === !1) && c(S);
  }
  function c(S) {
    e.value !== !0 && (e.value = !0, f("beforeShow", S), l !== void 0 ? l(S) : f("show", S));
  }
  function g(S) {
    if (r.disable === !0)
      return;
    const w = r["onUpdate:modelValue"] !== void 0;
    w === !0 && (f("update:modelValue", !1), s = S, pe(() => {
      s === S && (s = void 0);
    })), (r.modelValue === null || w === !1) && y(S);
  }
  function y(S) {
    e.value !== !1 && (e.value = !1, f("beforeHide", S), o !== void 0 ? o(S) : f("hide", S));
  }
  function v(S) {
    r.disable === !0 && S === !0 ? r["onUpdate:modelValue"] !== void 0 && f("update:modelValue", !1) : S === !0 !== e.value && (S === !0 ? c : y)(s);
  }
  J(() => r.modelValue, v), n !== void 0 && zl(a) === !0 && J(() => h.$route.fullPath, () => {
    n.value === !0 && e.value === !0 && g();
  }), i === !0 && pt(() => {
    v(r.modelValue);
  });
  const k = { show: m, hide: g, toggle: b };
  return Object.assign(h, k), k;
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
const ot = [];
function Wi(e) {
  return ot.find(
    (t) => t.contentEl !== null && t.contentEl.contains(e)
  );
}
function oo(e, t) {
  do {
    if (e.$options.name === "QMenu") {
      if (e.hide(t), e.$props.separateClosePopup === !0)
        return Lt(e);
    } else if (e.__qPortal === !0) {
      const n = Lt(e);
      return n !== void 0 && n.$options.name === "QPopupProxy" ? (e.hide(t), n) : e;
    }
    e = Lt(e);
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
    e = Lt(e);
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
  const o = A(!1), i = A(!1);
  let a = null;
  const r = {}, f = l === "dialog" && Qi(e);
  function h(b) {
    if (b === !0) {
      el(r), i.value = !0;
      return;
    }
    i.value = !1, o.value === !1 && (f === !1 && a === null && (a = ji(!1, l)), o.value = !0, ot.push(e.proxy), Uo(r));
  }
  function s(b) {
    if (i.value = !1, b !== !0)
      return;
    el(r), o.value = !1;
    const m = ot.indexOf(e.proxy);
    m !== -1 && ot.splice(m, 1), a !== null && (Ni(a), a = null);
  }
  return Mo(() => {
    s(!0);
  }), e.proxy.__qPortal = !0, _n(e.proxy, "contentEl", () => t.value), {
    showPortal: h,
    hidePortal: s,
    portalIsActive: o,
    portalIsAccessible: i,
    renderPortal: () => f === !0 ? n() : o.value === !0 ? [p(Fo, { to: a }, n())] : void 0
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
function Rn(e, t = () => {
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
function Pn() {
  let e;
  const t = ee();
  function n() {
    e = void 0;
  }
  return gt(n), de(n), {
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
  const t = ee();
  function n() {
    e !== null && (clearTimeout(e), e = null);
  }
  return gt(n), de(n), {
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
let Bt;
function Gi() {
  if (Bt !== void 0)
    return Bt;
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
  return n === l && (l = t.clientWidth), t.remove(), Bt = n - l, Bt;
}
function Zi(e, t = !0) {
  return !e || e.nodeType !== Node.ELEMENT_NODE ? !1 : t ? e.scrollHeight > e.clientHeight && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-y"])) : e.scrollWidth > e.clientWidth && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-x"]));
}
const Ne = [];
let at;
function Ji(e) {
  at = e.keyCode === 27;
}
function ea() {
  at === !0 && (at = !1);
}
function ta(e) {
  at === !0 && (at = !1, Re(e, 27) === !0 && Ne[Ne.length - 1](e));
}
function ao(e) {
  window[e]("keydown", Ji), window[e]("blur", ea), window[e]("keyup", ta), at = !1;
}
function uo(e) {
  he.is.desktop === !0 && (Ne.push(e), Ne.length === 1 && ao("addEventListener"));
}
function zt(e) {
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
const { notPassiveCapture: Ht } = be, Ke = [];
function It(e) {
  const t = e.target;
  if (t === void 0 || t.nodeType === 8 || t.classList.contains("no-pointer-events") === !0)
    return;
  let n = ot.length - 1;
  for (; n >= 0; ) {
    const l = ot[n].$;
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
  Ke.push(e), Ke.length === 1 && (document.addEventListener("mousedown", It, Ht), document.addEventListener("touchstart", It, Ht));
}
function Dt(e) {
  const t = Ke.findIndex((n) => n === e);
  t > -1 && (Ke.splice(t, 1), Ke.length === 0 && (document.removeEventListener("mousedown", It, Ht), document.removeEventListener("touchstart", It, Ht)));
}
let gl, pl;
function jt(e) {
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
function Nt(e, t) {
  const n = e.split(" ");
  return {
    vertical: n[0],
    horizontal: xn[`${n[1]}#${t === !0 ? "rtl" : "ltr"}`]
  };
}
function na(e, t) {
  let { top: n, left: l, right: o, bottom: i, width: a, height: r } = e.getBoundingClientRect();
  return t !== void 0 && (n -= t[1], l -= t[0], i += t[1], o += t[0], a += t[0], r += t[1]), {
    top: n,
    bottom: i,
    height: r,
    left: l,
    right: o,
    width: a,
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
    selfOrigin: a,
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
  const { scrollLeft: m, scrollTop: c } = n, g = r === void 0 ? na(o, h === !0 ? [0, 0] : l) : la(o, r, l);
  Object.assign(n.style, {
    top: 0,
    left: 0,
    minWidth: null,
    minHeight: null,
    maxWidth: b || "100vw",
    maxHeight: s || "100vh",
    visibility: "visible"
  });
  const { offsetWidth: y, offsetHeight: v } = n, { elWidth: k, elHeight: S } = f === !0 || h === !0 ? { elWidth: Math.max(g.width, y), elHeight: h === !0 ? Math.max(g.height, v) : v } : { elWidth: y, elHeight: v };
  let w = { maxWidth: b, maxHeight: s };
  (f === !0 || h === !0) && (w.minWidth = g.width + "px", h === !0 && (w.minHeight = g.height + "px")), Object.assign(n.style, w);
  const B = oa(k, S);
  let x = bl(g, B, i, a);
  if (r === void 0 || l === void 0)
    an(x, g, B, i, a);
  else {
    const { top: M, left: O } = x;
    an(x, g, B, i, a);
    let I = !1;
    if (x.top !== M) {
      I = !0;
      const K = 2 * l[1];
      g.center = g.top -= K, g.bottom -= K + 2;
    }
    if (x.left !== O) {
      I = !0;
      const K = 2 * l[0];
      g.middle = g.left -= K, g.right -= K + 2;
    }
    I === !0 && (x = bl(g, B, i, a), an(x, g, B, i, a));
  }
  w = {
    top: x.top + "px",
    left: x.left + "px"
  }, x.maxHeight !== void 0 && (w.maxHeight = x.maxHeight + "px", g.height > x.maxHeight && (w.minHeight = w.maxHeight)), x.maxWidth !== void 0 && (w.maxWidth = x.maxWidth + "px", g.width > x.maxWidth && (w.minWidth = w.maxWidth)), Object.assign(n.style, w), n.scrollTop !== c && (n.scrollTop = c), n.scrollLeft !== m && (n.scrollLeft = m);
}
function an(e, t, n, l, o) {
  const i = n.bottom, a = n.right, r = Gi(), f = window.innerHeight - r, h = document.body.clientWidth;
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
  if (e.left < 0 || e.left + a > h)
    if (e.maxWidth = Math.min(a, h), o.horizontal === "middle")
      e.left = t[l.horizontal] > h / 2 ? Math.max(0, h - a) : 0;
    else if (t[l.horizontal] > h / 2) {
      const s = Math.min(
        h,
        l.horizontal === "middle" ? t.middle : l.horizontal === o.horizontal ? t.right : t.left
      );
      e.maxWidth = Math.min(a, s), e.left = Math.max(0, s - e.maxWidth);
    } else
      e.left = Math.max(
        0,
        l.horizontal === "middle" ? t.middle : l.horizontal === o.horizontal ? t.left : t.right
      ), e.maxWidth = Math.min(a, h - e.left);
}
const vo = ie({
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
      validator: jt
    },
    self: {
      type: String,
      validator: jt
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
    let o = null, i, a, r;
    const f = ee(), { proxy: h } = f, { $q: s } = h, b = A(null), m = A(!1), c = d(
      () => e.persistent !== !0 && e.noRouteDismiss !== !0
    ), g = Ve(e, s), { registerTick: y, removeTick: v } = Pn(), { registerTimeout: k } = An(), { transitionProps: S, transitionStyle: w } = Rn(e), { localScrollTarget: B, changeScrollEvent: x, unconfigureScrollTarget: M } = lo(e, L), { anchorEl: O, canShow: I } = no({ showing: m }), { hide: K } = Tn({
      showing: m,
      canShow: I,
      handleShow: C,
      handleHide: _,
      hideOnRouteChange: c,
      processOnMount: !0
    }), { showPortal: Z, hidePortal: W, renderPortal: z } = Ln(f, b, ae, "menu"), X = {
      anchorEl: O,
      innerRef: b,
      onClickOutside(q) {
        if (e.persistent !== !0 && m.value === !0)
          return K(q), // always prevent touch event
          (q.type === "touchstart" || q.target.classList.contains("q-dialog__backdrop")) && oe(q), !0;
      }
    }, T = d(
      () => Nt(
        e.anchor || (e.cover === !0 ? "center middle" : "bottom start"),
        s.lang.rtl
      )
    ), j = d(() => e.cover === !0 ? T.value : Nt(e.self || "top start", s.lang.rtl)), U = d(
      () => (e.square === !0 ? " q-menu--square" : "") + (g.value === !0 ? " q-menu--dark q-dark" : "")
    ), $ = d(() => e.autoClose === !0 ? { onClick: Q } : {}), N = d(
      () => m.value === !0 && e.persistent !== !0
    );
    J(N, (q) => {
      q === !0 ? (uo(P), co(X)) : (zt(P), Dt(X));
    });
    function re() {
      Qt(() => {
        let q = b.value;
        q && q.contains(document.activeElement) !== !0 && (q = q.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || q.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || q.querySelector("[autofocus], [data-autofocus]") || q, q.focus({ preventScroll: !0 }));
      });
    }
    function C(q) {
      if (o = e.noRefocus === !1 ? document.activeElement : null, so(R), Z(), L(), i = void 0, q !== void 0 && (e.touchPosition || e.contextMenu)) {
        const se = Al(q);
        if (se.left !== void 0) {
          const { top: $e, left: Pe } = O.value.getBoundingClientRect();
          i = { left: se.left - Pe, top: se.top - $e };
        }
      }
      a === void 0 && (a = J(
        () => s.screen.width + "|" + s.screen.height + "|" + e.self + "|" + e.anchor + "|" + s.lang.rtl,
        H
      )), e.noFocus !== !0 && document.activeElement.blur(), y(() => {
        H(), e.noFocus !== !0 && re();
      }), k(() => {
        s.platform.is.ios === !0 && (r = e.autoClose, b.value.click()), H(), Z(!0), n("show", q);
      }, e.transitionDuration);
    }
    function _(q) {
      v(), W(), F(!0), o !== null && // menu was hidden from code or ESC plugin
      (q === void 0 || q.qClickOutside !== !0) && (((q && q.type.indexOf("key") === 0 ? o.closest('[tabindex]:not([tabindex^="-"])') : void 0) || o).focus(), o = null), k(() => {
        W(!0), n("hide", q);
      }, e.transitionDuration);
    }
    function F(q) {
      i = void 0, a !== void 0 && (a(), a = void 0), (q === !0 || m.value === !0) && (Sn(R), M(), Dt(X), zt(P)), q !== !0 && (o = null);
    }
    function L() {
      (O.value !== null || e.scrollTarget !== void 0) && (B.value = io(O.value, e.scrollTarget), x(B.value, H));
    }
    function Q(q) {
      r !== !0 ? (oo(h, q), n("click", q)) : r = !1;
    }
    function R(q) {
      N.value === !0 && e.noFocus !== !0 && Jl(b.value, q.target) !== !0 && re();
    }
    function P(q) {
      n("escapeKey"), K(q);
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
      return p(
        Qe,
        S.value,
        () => m.value === !0 ? p("div", {
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
function ia(e, t, n) {
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
let ct = 0, un, rn, ft, sn = !1, yl, wl, Sl, ze = null;
function aa(e) {
  ua(e) && oe(e);
}
function ua(e) {
  if (e.target === document.body || e.target.classList.contains("q-layout__backdrop"))
    return !0;
  const t = Qo(e), n = e.shiftKey && !e.deltaX, l = !n && Math.abs(e.deltaX) <= Math.abs(e.deltaY), o = n || l ? e.deltaY : e.deltaX;
  for (let i = 0; i < t.length; i++) {
    const a = t[i];
    if (Zi(a, l))
      return l ? o < 0 && a.scrollTop === 0 ? !0 : o > 0 && a.scrollTop + a.clientHeight === a.scrollHeight : o < 0 && a.scrollLeft === 0 ? !0 : o > 0 && a.scrollLeft + a.clientWidth === a.scrollWidth;
  }
  return !0;
}
function xl(e) {
  e.target === document && (document.scrollingElement.scrollTop = document.scrollingElement.scrollTop);
}
function Vt(e) {
  sn !== !0 && (sn = !0, requestAnimationFrame(() => {
    sn = !1;
    const { height: t } = e.target, { clientHeight: n, scrollTop: l } = document.scrollingElement;
    (ft === void 0 || t !== window.innerHeight) && (ft = n - t, document.scrollingElement.scrollTop = l), l > ft && (document.scrollingElement.scrollTop -= Math.ceil((l - ft) / 8));
  }));
}
function kl(e) {
  const t = document.body, n = window.visualViewport !== void 0;
  if (e === "add") {
    const { overflowY: l, overflowX: o } = window.getComputedStyle(t);
    un = Yi(window), rn = Xi(window), yl = t.style.left, wl = t.style.top, Sl = window.location.href, t.style.left = `-${un}px`, t.style.top = `-${rn}px`, o !== "hidden" && (o === "scroll" || t.scrollWidth > window.innerWidth) && t.classList.add("q-body--force-scrollbar-x"), l !== "hidden" && (l === "scroll" || t.scrollHeight > window.innerHeight) && t.classList.add("q-body--force-scrollbar-y"), t.classList.add("q-body--prevent-scroll"), document.qScrollPrevented = !0, he.is.ios === !0 && (n === !0 ? (window.scrollTo(0, 0), window.visualViewport.addEventListener("resize", Vt, be.passiveCapture), window.visualViewport.addEventListener("scroll", Vt, be.passiveCapture), window.scrollTo(0, 0)) : window.addEventListener("scroll", xl, be.passiveCapture));
  }
  he.is.desktop === !0 && he.is.mac === !0 && window[`${e}EventListener`]("wheel", aa, be.notPassive), e === "remove" && (he.is.ios === !0 && (n === !0 ? (window.visualViewport.removeEventListener("resize", Vt, be.passiveCapture), window.visualViewport.removeEventListener("scroll", Vt, be.passiveCapture)) : window.removeEventListener("scroll", xl, be.passiveCapture)), t.classList.remove("q-body--prevent-scroll"), t.classList.remove("q-body--force-scrollbar-x"), t.classList.remove("q-body--force-scrollbar-y"), document.qScrollPrevented = !1, t.style.left = yl, t.style.top = wl, window.location.href === Sl && window.scrollTo(un, rn), ft = void 0);
}
function ra(e) {
  let t = "add";
  if (e === !0) {
    if (ct++, ze !== null) {
      clearTimeout(ze), ze = null;
      return;
    }
    if (ct > 1)
      return;
  } else {
    if (ct === 0 || (ct--, ct > 0))
      return;
    if (t = "remove", he.is.ios === !0 && he.is.nativeMobile === !0) {
      ze !== null && clearTimeout(ze), ze = setTimeout(() => {
        kl(t), ze = null;
      }, 100);
      return;
    }
  }
  kl(t);
}
function sa() {
  let e;
  return {
    preventBodyScroll(t) {
      t !== e && (e !== void 0 || t === !0) && (e = t, ra(t));
    }
  };
}
let $t = 0;
const ca = {
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
}, mo = ie({
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
    const o = ee(), i = A(null), a = A(!1), r = A(!1);
    let f = null, h = null, s, b;
    const m = d(
      () => e.persistent !== !0 && e.noRouteDismiss !== !0 && e.seamless !== !0
    ), { preventBodyScroll: c } = sa(), { registerTimeout: g } = An(), { registerTick: y, removeTick: v } = Pn(), { transitionProps: k, transitionStyle: S } = Rn(
      e,
      () => ql[e.position][0],
      () => ql[e.position][1]
    ), { showPortal: w, hidePortal: B, portalIsAccessible: x, renderPortal: M } = Ln(
      o,
      i,
      Q,
      "dialog"
    ), { hide: O } = Tn({
      showing: a,
      hideOnRouteChange: m,
      handleShow: T,
      handleHide: j,
      processOnMount: !0
    }), { addToHistory: I, removeFromHistory: K } = ia(a), Z = d(
      () => `q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized === !0 ? "maximized" : "minimized"} q-dialog__inner--${e.position} ${ca[e.position]}` + (r.value === !0 ? " q-dialog__inner--animating" : "") + (e.fullWidth === !0 ? " q-dialog__inner--fullwidth" : "") + (e.fullHeight === !0 ? " q-dialog__inner--fullheight" : "") + (e.square === !0 ? " q-dialog__inner--square" : "")
    ), W = d(() => a.value === !0 && e.seamless !== !0), z = d(() => e.autoClose === !0 ? { onClick: _ } : {}), X = d(() => [
      `q-dialog fullscreen no-pointer-events q-dialog--${W.value === !0 ? "modal" : "seamless"}`,
      l.class
    ]);
    J(() => e.maximized, (R) => {
      a.value === !0 && C(R);
    }), J(W, (R) => {
      c(R), R === !0 ? (so(L), uo(N)) : (Sn(L), zt(N));
    });
    function T(R) {
      I(), h = e.noRefocus === !1 && document.activeElement !== null ? document.activeElement : null, C(e.maximized), w(), r.value = !0, e.noFocus !== !0 ? (document.activeElement !== null && document.activeElement.blur(), y(U)) : v(), g(() => {
        if (o.proxy.$q.platform.is.ios === !0) {
          if (e.seamless !== !0 && document.activeElement) {
            const { top: P, bottom: H } = document.activeElement.getBoundingClientRect(), { innerHeight: ae } = window, q = window.visualViewport !== void 0 ? window.visualViewport.height : ae;
            P > 0 && H > q / 2 && (document.scrollingElement.scrollTop = Math.min(
              document.scrollingElement.scrollHeight - q,
              H >= ae ? 1 / 0 : Math.ceil(document.scrollingElement.scrollTop + H - q / 2)
            )), document.activeElement.scrollIntoView();
          }
          b = !0, i.value.click(), b = !1;
        }
        w(!0), r.value = !1, n("show", R);
      }, e.transitionDuration);
    }
    function j(R) {
      v(), K(), re(!0), r.value = !0, B(), h !== null && (((R && R.type.indexOf("key") === 0 ? h.closest('[tabindex]:not([tabindex^="-"])') : void 0) || h).focus(), h = null), g(() => {
        B(!0), r.value = !1, n("hide", R);
      }, e.transitionDuration);
    }
    function U(R) {
      Qt(() => {
        let P = i.value;
        P === null || P.contains(document.activeElement) === !0 || (P = (R !== "" ? P.querySelector(R) : null) || P.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || P.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || P.querySelector("[autofocus], [data-autofocus]") || P, P.focus({ preventScroll: !0 }));
      });
    }
    function $(R) {
      R && typeof R.focus == "function" ? R.focus({ preventScroll: !0 }) : U(), n("shake");
      const P = i.value;
      P !== null && (P.classList.remove("q-animate--scale"), P.classList.add("q-animate--scale"), f !== null && clearTimeout(f), f = setTimeout(() => {
        f = null, i.value !== null && (P.classList.remove("q-animate--scale"), U());
      }, 170));
    }
    function N() {
      e.seamless !== !0 && (e.persistent === !0 || e.noEscDismiss === !0 ? e.maximized !== !0 && e.noShake !== !0 && $() : (n("escapeKey"), O()));
    }
    function re(R) {
      f !== null && (clearTimeout(f), f = null), (R === !0 || a.value === !0) && (C(!1), e.seamless !== !0 && (c(!1), Sn(L), zt(N))), R !== !0 && (h = null);
    }
    function C(R) {
      R === !0 ? s !== !0 && ($t < 1 && document.body.classList.add("q-body--dialog"), $t++, s = !0) : s === !0 && ($t < 2 && document.body.classList.remove("q-body--dialog"), $t--, s = !1);
    }
    function _(R) {
      b !== !0 && (O(R), n("click", R));
    }
    function F(R) {
      e.persistent !== !0 && e.noBackdropDismiss !== !0 ? O(R) : e.noShake !== !0 && $();
    }
    function L(R) {
      e.allowFocusOutside !== !0 && x.value === !0 && Jl(i.value, R.target) !== !0 && U('[tabindex]:not([tabindex="-1"])');
    }
    Object.assign(o.proxy, {
      // expose public methods
      focus: U,
      shake: $,
      // private but needed by QSelect
      __updateRefocusTarget(R) {
        h = R || null;
      }
    }), de(re);
    function Q() {
      return p("div", {
        role: "dialog",
        "aria-modal": W.value === !0 ? "true" : "false",
        ...l,
        class: X.value
      }, [
        p(Qe, {
          name: "q-transition--fade",
          appear: !0
        }, () => W.value === !0 ? p("div", {
          class: "q-dialog__backdrop fixed-full",
          style: S.value,
          "aria-hidden": "true",
          tabindex: -1,
          onClick: F
        }) : null),
        p(
          Qe,
          k.value,
          () => a.value === !0 ? p("div", {
            ref: i,
            class: Z.value,
            style: S.value,
            tabindex: -1,
            ...z.value
          }, me(t.default)) : null
        )
      ]);
    }
    return M;
  }
});
let Wt = !1;
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
  }), document.body.appendChild(e), e.appendChild(t), e.scrollLeft = -1e3, Wt = e.scrollLeft >= 0, e.remove();
}
const xe = 1e3, da = [
  "start",
  "center",
  "end",
  "start-force",
  "center-force",
  "end-force"
], ho = Array.prototype.filter, fa = window.getComputedStyle(document.body).overflowAnchor === void 0 ? Ko : function(e, t) {
  e !== null && (e._qOverflowAnimationFrame !== void 0 && cancelAnimationFrame(e._qOverflowAnimationFrame), e._qOverflowAnimationFrame = requestAnimationFrame(() => {
    if (e === null)
      return;
    e._qOverflowAnimationFrame = void 0;
    const n = e.children || [];
    ho.call(n, (o) => o.dataset && o.dataset.qVsAnchor !== void 0).forEach((o) => {
      delete o.dataset.qVsAnchor;
    });
    const l = n[t];
    l && l.dataset && (l.dataset.qVsAnchor = "");
  }));
};
function it(e, t) {
  return e + t;
}
function cn(e, t, n, l, o, i, a, r) {
  const f = e === window ? document.scrollingElement || document.documentElement : e, h = o === !0 ? "offsetWidth" : "offsetHeight", s = {
    scrollStart: 0,
    scrollViewSize: -a - r,
    scrollMaxSize: 0,
    offsetStart: -a,
    offsetEnd: -r
  };
  if (o === !0 ? (e === window ? (s.scrollStart = window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, s.scrollViewSize += document.documentElement.clientWidth) : (s.scrollStart = f.scrollLeft, s.scrollViewSize += f.clientWidth), s.scrollMaxSize = f.scrollWidth, i === !0 && (s.scrollStart = (Wt === !0 ? s.scrollMaxSize - s.scrollViewSize : 0) - s.scrollStart)) : (e === window ? (s.scrollStart = window.pageYOffset || window.scrollY || document.body.scrollTop || 0, s.scrollViewSize += document.documentElement.clientHeight) : (s.scrollStart = f.scrollTop, s.scrollViewSize += f.clientHeight), s.scrollMaxSize = f.scrollHeight), n !== null)
    for (let b = n.previousElementSibling; b !== null; b = b.previousElementSibling)
      b.classList.contains("q-virtual-scroll--skip") === !1 && (s.offsetStart += b[h]);
  if (l !== null)
    for (let b = l.nextElementSibling; b !== null; b = b.nextElementSibling)
      b.classList.contains("q-virtual-scroll--skip") === !1 && (s.offsetEnd += b[h]);
  if (t !== e) {
    const b = f.getBoundingClientRect(), m = t.getBoundingClientRect();
    o === !0 ? (s.offsetStart += m.left - b.left, s.offsetEnd -= m.width) : (s.offsetStart += m.top - b.top, s.offsetEnd -= m.height), e !== window && (s.offsetStart += s.scrollStart), s.offsetEnd += s.scrollMaxSize - s.offsetStart;
  }
  return s;
}
function Cl(e, t, n, l) {
  t === "end" && (t = (e === window ? document.body : e)[n === !0 ? "scrollWidth" : "scrollHeight"]), e === window ? n === !0 ? (l === !0 && (t = (Wt === !0 ? document.body.scrollWidth - document.documentElement.clientWidth : 0) - t), window.scrollTo(t, window.pageYOffset || window.scrollY || document.body.scrollTop || 0)) : window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, t) : n === !0 ? (l === !0 && (t = (Wt === !0 ? e.scrollWidth - e.offsetWidth : 0) - t), e.scrollLeft = t) : e.scrollTop = t;
}
function dt(e, t, n, l) {
  if (n >= l)
    return 0;
  const o = t.length, i = Math.floor(n / xe), a = Math.floor((l - 1) / xe) + 1;
  let r = e.slice(i, a).reduce(it, 0);
  return n % xe !== 0 && (r -= t.slice(i * xe, n).reduce(it, 0)), l % xe !== 0 && l !== o && (r -= t.slice(l, a * xe).reduce(it, 0)), r;
}
const va = {
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
}, ma = {
  virtualScrollHorizontal: Boolean,
  onVirtualScroll: Function,
  ...va
};
function ha({
  virtualScrollLength: e,
  getVirtualScrollTarget: t,
  getVirtualScrollEl: n,
  virtualScrollItemSizeComputed: l
  // optional
}) {
  const o = ee(), { props: i, emit: a, proxy: r } = o, { $q: f } = r;
  let h, s, b, m = [], c;
  const g = A(0), y = A(0), v = A({}), k = A(null), S = A(null), w = A(null), B = A({ from: 0, to: 0 }), x = d(() => i.tableColspan !== void 0 ? i.tableColspan : 100);
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
  function K(_) {
    j(_ === void 0 ? s : _);
  }
  function Z(_, F) {
    const L = t();
    if (L == null || L.nodeType === 8)
      return;
    const Q = cn(
      L,
      n(),
      k.value,
      S.value,
      i.virtualScrollHorizontal,
      f.lang.rtl,
      i.virtualScrollStickySizeStart,
      i.virtualScrollStickySizeEnd
    );
    b !== Q.scrollViewSize && U(Q.scrollViewSize), z(
      L,
      Q,
      Math.min(e.value - 1, Math.max(0, parseInt(_, 10) || 0)),
      0,
      da.indexOf(F) > -1 ? F : s > -1 && _ > s ? "end" : "start"
    );
  }
  function W() {
    const _ = t();
    if (_ == null || _.nodeType === 8)
      return;
    const F = cn(
      _,
      n(),
      k.value,
      S.value,
      i.virtualScrollHorizontal,
      f.lang.rtl,
      i.virtualScrollStickySizeStart,
      i.virtualScrollStickySizeEnd
    ), L = e.value - 1, Q = F.scrollMaxSize - F.offsetStart - F.offsetEnd - y.value;
    if (h === F.scrollStart)
      return;
    if (F.scrollMaxSize <= 0) {
      z(_, F, 0, 0);
      return;
    }
    b !== F.scrollViewSize && U(F.scrollViewSize), X(B.value.from);
    const R = Math.floor(F.scrollMaxSize - Math.max(F.scrollViewSize, F.offsetEnd) - Math.min(c[L], F.scrollViewSize / 2));
    if (R > 0 && Math.ceil(F.scrollStart) >= R) {
      z(
        _,
        F,
        L,
        F.scrollMaxSize - F.offsetEnd - m.reduce(it, 0)
      );
      return;
    }
    let P = 0, H = F.scrollStart - F.offsetStart, ae = H;
    if (H <= Q && H + F.scrollViewSize >= g.value)
      H -= g.value, P = B.value.from, ae = H;
    else
      for (let q = 0; H >= m[q] && P < L; q++)
        H -= m[q], P += xe;
    for (; H > 0 && P < L; )
      H -= c[P], H > -F.scrollViewSize ? (P++, ae = H) : ae = c[P] + H;
    z(
      _,
      F,
      P,
      ae
    );
  }
  function z(_, F, L, Q, R) {
    const P = typeof R == "string" && R.indexOf("-force") > -1, H = P === !0 ? R.replace("-force", "") : R, ae = H !== void 0 ? H : "start";
    let q = Math.max(0, L - v.value[ae]), se = q + v.value.total;
    se > e.value && (se = e.value, q = Math.max(0, se - v.value.total)), h = F.scrollStart;
    const $e = q !== B.value.from || se !== B.value.to;
    if ($e === !1 && H === void 0) {
      N(L);
      return;
    }
    const { activeElement: Pe } = document, qe = w.value;
    $e === !0 && qe !== null && qe !== Pe && qe.contains(Pe) === !0 && (qe.addEventListener("focusout", T), setTimeout(() => {
      qe !== null && qe.removeEventListener("focusout", T);
    })), fa(qe, L - q);
    const wt = H !== void 0 ? c.slice(q, L).reduce(it, 0) : 0;
    if ($e === !0) {
      const Ae = se >= B.value.from && q <= B.value.to ? B.value.to : se;
      B.value = { from: q, to: Ae }, g.value = dt(m, c, 0, q), y.value = dt(m, c, se, e.value), requestAnimationFrame(() => {
        B.value.to !== se && h === F.scrollStart && (B.value = { from: B.value.from, to: se }, y.value = dt(m, c, se, e.value));
      });
    }
    requestAnimationFrame(() => {
      if (h !== F.scrollStart)
        return;
      $e === !0 && X(q);
      const Ae = c.slice(q, L).reduce(it, 0), Ue = Ae + F.offsetStart + g.value, St = Ue + c[L];
      let rt = Ue + Q;
      if (H !== void 0) {
        const Ut = Ae - wt, ge = F.scrollStart + Ut;
        rt = P !== !0 && ge < Ue && St < ge + F.scrollViewSize ? ge : H === "end" ? St - F.scrollViewSize : Ue - (H === "start" ? 0 : Math.round((F.scrollViewSize - c[L]) / 2));
      }
      h = rt, Cl(
        _,
        rt,
        i.virtualScrollHorizontal,
        f.lang.rtl
      ), N(L);
    });
  }
  function X(_) {
    const F = w.value;
    if (F) {
      const L = ho.call(
        F.children,
        (q) => q.classList && q.classList.contains("q-virtual-scroll--skip") === !1
      ), Q = L.length, R = i.virtualScrollHorizontal === !0 ? (q) => q.getBoundingClientRect().width : (q) => q.offsetHeight;
      let P = _, H, ae;
      for (let q = 0; q < Q; ) {
        for (H = R(L[q]), q++; q < Q && L[q].classList.contains("q-virtual-scroll--with-prev") === !0; )
          H += R(L[q]), q++;
        ae = H - c[P], ae !== 0 && (c[P] += ae, m[Math.floor(P / xe)] += ae), P++;
      }
    }
  }
  function T() {
    w.value !== null && w.value !== void 0 && w.value.focus();
  }
  function j(_, F) {
    const L = 1 * l.value;
    (F === !0 || Array.isArray(c) === !1) && (c = []);
    const Q = c.length;
    c.length = e.value;
    for (let P = e.value - 1; P >= Q; P--)
      c[P] = L;
    const R = Math.floor((e.value - 1) / xe);
    m = [];
    for (let P = 0; P <= R; P++) {
      let H = 0;
      const ae = Math.min((P + 1) * xe, e.value);
      for (let q = P * xe; q < ae; q++)
        H += c[q];
      m.push(H);
    }
    s = -1, h = void 0, g.value = dt(m, c, 0, B.value.from), y.value = dt(m, c, B.value.to, e.value), _ >= 0 ? (X(B.value.from), pe(() => {
      Z(_);
    })) : re();
  }
  function U(_) {
    if (_ === void 0 && typeof window < "u") {
      const H = t();
      H != null && H.nodeType !== 8 && (_ = cn(
        H,
        n(),
        k.value,
        S.value,
        i.virtualScrollHorizontal,
        f.lang.rtl,
        i.virtualScrollStickySizeStart,
        i.virtualScrollStickySizeEnd
      ).scrollViewSize);
    }
    b = _;
    const F = parseFloat(i.virtualScrollSliceRatioBefore) || 0, L = parseFloat(i.virtualScrollSliceRatioAfter) || 0, Q = 1 + F + L, R = _ === void 0 || _ <= 0 ? 1 : Math.ceil(_ / l.value), P = Math.max(
      1,
      R,
      Math.ceil((i.virtualScrollSliceSize > 0 ? i.virtualScrollSliceSize : 10) / Q)
    );
    v.value = {
      total: Math.ceil(P * Q),
      start: Math.ceil(P * F),
      center: Math.ceil(P * (0.5 + F)),
      end: Math.ceil(P * (1 + F)),
      view: R
    };
  }
  function $(_, F) {
    const L = i.virtualScrollHorizontal === !0 ? "width" : "height", Q = {
      ["--q-virtual-scroll-item-" + L]: l.value + "px"
    };
    return [
      _ === "tbody" ? p(_, {
        class: "q-virtual-scroll__padding",
        key: "before",
        ref: k
      }, [
        p("tr", [
          p("td", {
            style: { [L]: `${g.value}px`, ...Q },
            colspan: x.value
          })
        ])
      ]) : p(_, {
        class: "q-virtual-scroll__padding",
        key: "before",
        ref: k,
        style: { [L]: `${g.value}px`, ...Q }
      }),
      p(_, {
        class: "q-virtual-scroll__content",
        key: "content",
        ref: w,
        tabindex: -1
      }, F.flat()),
      _ === "tbody" ? p(_, {
        class: "q-virtual-scroll__padding",
        key: "after",
        ref: S
      }, [
        p("tr", [
          p("td", {
            style: { [L]: `${y.value}px`, ...Q },
            colspan: x.value
          })
        ])
      ]) : p(_, {
        class: "q-virtual-scroll__padding",
        key: "after",
        ref: S,
        style: { [L]: `${y.value}px`, ...Q }
      })
    ];
  }
  function N(_) {
    s !== _ && (i.onVirtualScroll !== void 0 && a("virtualScroll", {
      index: _,
      from: B.value.from,
      to: B.value.to - 1,
      direction: _ < s ? "decrease" : "increase",
      ref: r
    }), s = _);
  }
  U();
  const re = Xl(
    W,
    f.platform.is.ios === !0 ? 120 : 35
  );
  zo(() => {
    U();
  });
  let C = !1;
  return gt(() => {
    C = !0;
  }), qn(() => {
    if (C !== !0)
      return;
    const _ = t();
    h !== void 0 && _ !== void 0 && _ !== null && _.nodeType !== 8 ? Cl(
      _,
      h,
      i.virtualScrollHorizontal,
      f.lang.rtl
    ) : Z(s);
  }), de(() => {
    re.cancel();
  }), Object.assign(r, { scrollTo: Z, reset: I, refresh: K }), {
    virtualScrollSliceRange: B,
    virtualScrollSliceSizeComputed: v,
    setVirtualScrollSize: U,
    onVirtualScrollEvt: re,
    localResetVirtualScroll: j,
    padVirtualScroll: $,
    scrollTo: Z,
    reset: I,
    refresh: K
  };
}
const ga = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/, pa = /[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u, ba = /[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/, ya = /[a-z0-9_ -]$/i;
function wa(e) {
  return function(n) {
    if (n.type === "compositionend" || n.type === "change") {
      if (n.target.qComposing !== !0)
        return;
      n.target.qComposing = !1, e(n);
    } else
      n.type === "compositionupdate" && n.target.qComposing !== !0 && typeof n.data == "string" && (he.is.firefox === !0 ? ya.test(n.data) === !1 : ga.test(n.data) === !0 || pa.test(n.data) === !0 || ba.test(n.data) === !0) === !0 && (n.target.qComposing = !0);
  };
}
function Oe(e, t) {
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
        if (Oe(e[l], t[l]) !== !0)
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
        if (Oe(l.value[1], t.get(l.value[0])) !== !0)
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
      if (Oe(e[i], t[i]) !== !0)
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
const El = (e) => ["add", "add-unique", "toggle"].includes(e), Sa = ".*+?^${}()|[]\\", xa = Object.keys(Bn), ka = ie({
  name: "QSelect",
  inheritAttrs: !1,
  props: {
    ...ma,
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
    const { proxy: l } = ee(), { $q: o } = l, i = A(!1), a = A(!1), r = A(-1), f = A(""), h = A(!1), s = A(!1);
    let b = null, m, c, g, y = null, v, k, S, w;
    const B = A(null), x = A(null), M = A(null), O = A(null), I = A(null), K = fi(e), Z = wa(Qn), W = d(() => Array.isArray(e.options) ? e.options.length : 0), z = d(() => e.virtualScrollItemSize === void 0 ? e.optionsDense === !0 ? 24 : 48 : e.virtualScrollItemSize), {
      virtualScrollSliceRange: X,
      virtualScrollSliceSizeComputed: T,
      localResetVirtualScroll: j,
      padVirtualScroll: U,
      onVirtualScrollEvt: $,
      scrollTo: N,
      setVirtualScrollSize: re
    } = ha({
      virtualScrollLength: W,
      getVirtualScrollTarget: So,
      getVirtualScrollEl: Wn,
      virtualScrollItemSizeComputed: z
    }), C = Gl(), _ = d(() => {
      const u = e.mapOptions === !0 && e.multiple !== !0, V = e.modelValue !== void 0 && (e.modelValue !== null || u === !0) ? e.multiple === !0 && Array.isArray(e.modelValue) ? e.modelValue : [e.modelValue] : [];
      if (e.mapOptions === !0 && Array.isArray(e.options) === !0) {
        const E = e.mapOptions === !0 && m !== void 0 ? m : [], D = V.map((G) => wo(G, E));
        return e.modelValue === null && u === !0 ? D.filter((G) => G !== null) : D;
      }
      return V;
    }), F = d(() => {
      const u = {};
      return xa.forEach((V) => {
        const E = e[V];
        E !== void 0 && (u[V] = E);
      }), u;
    }), L = d(() => e.optionsDark === null ? C.isDark.value : e.optionsDark), Q = d(() => bn(_.value)), R = d(() => {
      let u = "q-field__input q-placeholder col";
      return e.hideSelected === !0 || _.value.length === 0 ? [u, e.inputClass] : (u += " q-field__input--padding", e.inputClass === void 0 ? u : [u, e.inputClass]);
    }), P = d(
      () => (e.virtualScrollHorizontal === !0 ? "q-virtual-scroll--horizontal" : "") + (e.popupContentClass ? " " + e.popupContentClass : "")
    ), H = d(() => W.value === 0), ae = d(
      () => _.value.map((u) => ye.value(u)).join(", ")
    ), q = d(() => e.displayValue !== void 0 ? e.displayValue : ae.value), se = d(() => e.optionsHtml === !0 ? () => !0 : (u) => u != null && u.html === !0), $e = d(() => e.displayValueHtml === !0 || e.displayValue === void 0 && (e.optionsHtml === !0 || _.value.some(se.value))), Pe = d(() => C.focused.value === !0 ? e.tabindex : -1), qe = d(() => {
      const u = {
        tabindex: e.tabindex,
        role: "combobox",
        "aria-label": e.label,
        "aria-readonly": e.readonly === !0 ? "true" : "false",
        "aria-autocomplete": e.useInput === !0 ? "list" : "none",
        "aria-expanded": i.value === !0 ? "true" : "false",
        "aria-controls": `${C.targetUid.value}_lb`
      };
      return r.value >= 0 && (u["aria-activedescendant"] = `${C.targetUid.value}_${r.value}`), u;
    }), wt = d(() => ({
      id: `${C.targetUid.value}_lb`,
      role: "listbox",
      "aria-multiselectable": e.multiple === !0 ? "true" : "false"
    })), Ae = d(() => _.value.map((u, V) => ({
      index: V,
      opt: u,
      html: se.value(u),
      selected: !0,
      removeAtIndex: yo,
      toggleOption: Me,
      tabindex: Pe.value
    }))), Ue = d(() => {
      if (W.value === 0)
        return [];
      const { from: u, to: V } = X.value;
      return e.options.slice(u, V).map((E, D) => {
        const G = Xe.value(E) === !0, Y = u + D, ue = {
          clickable: !0,
          active: !1,
          activeClass: Ut.value,
          manualFocus: !0,
          focused: !1,
          disable: G,
          tabindex: -1,
          dense: e.optionsDense,
          dark: L.value,
          role: "option",
          id: `${C.targetUid.value}_${Y}`,
          onClick: () => {
            Me(E);
          }
        };
        return G !== !0 && (Gt(E) === !0 && (ue.active = !0), r.value === Y && (ue.focused = !0), ue["aria-selected"] = ue.active === !0 ? "true" : "false", o.platform.is.desktop === !0 && (ue.onMousemove = () => {
          i.value === !0 && Ye(Y);
        })), {
          index: Y,
          opt: E,
          html: se.value(E),
          label: ye.value(E),
          selected: ue.active,
          focused: ue.focused,
          toggleOption: Me,
          setOptionIndex: Ye,
          itemProps: ue
        };
      });
    }), St = d(() => e.dropdownIcon !== void 0 ? e.dropdownIcon : o.iconSet.arrow.dropdown), rt = d(
      () => e.optionsCover === !1 && e.outlined !== !0 && e.standout !== !0 && e.borderless !== !0 && e.rounded !== !0
    ), Ut = d(() => e.optionsSelectedClass !== void 0 ? e.optionsSelectedClass : e.color !== void 0 ? `text-${e.color}` : ""), ge = d(() => Yt(e.optionValue, "value")), ye = d(() => Yt(e.optionLabel, "label")), Xe = d(() => Yt(e.optionDisable, "disable")), xt = d(() => _.value.map((u) => ge.value(u))), bo = d(() => {
      const u = {
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
          c === !0 && Le(V);
        }
      };
      return u.onCompositionstart = u.onCompositionupdate = u.onCompositionend = Z, u;
    });
    J(_, (u) => {
      m = u, e.useInput === !0 && e.fillInput === !0 && e.multiple !== !0 && C.innerLoading.value !== !0 && (a.value !== !0 && i.value !== !0 || Q.value !== !0) && (g !== !0 && et(), (a.value === !0 || i.value === !0) && Ge(""));
    }, { immediate: !0 }), J(() => e.fillInput, et), J(i, Zt), J(W, Oo);
    function Fn(u) {
      return e.emitValue === !0 ? ge.value(u) : u;
    }
    function Xt(u) {
      if (u > -1 && u < _.value.length)
        if (e.multiple === !0) {
          const V = e.modelValue.slice();
          n("remove", { index: u, value: V.splice(u, 1)[0] }), n("update:modelValue", V);
        } else
          n("update:modelValue", null);
    }
    function yo(u) {
      Xt(u), C.focus();
    }
    function zn(u, V) {
      const E = Fn(u);
      if (e.multiple !== !0) {
        e.fillInput === !0 && st(
          ye.value(u),
          !0,
          !0
        ), n("update:modelValue", E);
        return;
      }
      if (_.value.length === 0) {
        n("add", { index: 0, value: E }), n("update:modelValue", e.multiple === !0 ? [E] : E);
        return;
      }
      if (V === !0 && Gt(u) === !0 || e.maxValues !== void 0 && e.modelValue.length >= e.maxValues)
        return;
      const D = e.modelValue.slice();
      n("add", { index: D.length, value: E }), D.push(E), n("update:modelValue", D);
    }
    function Me(u, V) {
      if (C.editable.value !== !0 || u === void 0 || Xe.value(u) === !0)
        return;
      const E = ge.value(u);
      if (e.multiple !== !0) {
        V !== !0 && (st(
          e.fillInput === !0 ? ye.value(u) : "",
          !0,
          !0
        ), Fe()), x.value !== null && x.value.focus(), (_.value.length === 0 || Oe(ge.value(_.value[0]), E) !== !0) && n("update:modelValue", e.emitValue === !0 ? E : u);
        return;
      }
      if ((c !== !0 || h.value === !0) && C.focus(), Hn(), _.value.length === 0) {
        const Y = e.emitValue === !0 ? E : u;
        n("add", { index: 0, value: Y }), n("update:modelValue", e.multiple === !0 ? [Y] : Y);
        return;
      }
      const D = e.modelValue.slice(), G = xt.value.findIndex((Y) => Oe(Y, E));
      if (G > -1)
        n("remove", { index: G, value: D.splice(G, 1)[0] });
      else {
        if (e.maxValues !== void 0 && D.length >= e.maxValues)
          return;
        const Y = e.emitValue === !0 ? E : u;
        n("add", { index: D.length, value: Y }), D.push(Y);
      }
      n("update:modelValue", D);
    }
    function Ye(u) {
      if (o.platform.is.desktop !== !0)
        return;
      const V = u > -1 && u < W.value ? u : -1;
      r.value !== V && (r.value = V);
    }
    function kt(u = 1, V) {
      if (i.value === !0) {
        let E = r.value;
        do
          E = _l(
            E + u,
            -1,
            W.value - 1
          );
        while (E !== -1 && E !== r.value && Xe.value(e.options[E]) === !0);
        r.value !== E && (Ye(E), N(E), V !== !0 && e.useInput === !0 && e.fillInput === !0 && qt(
          E >= 0 ? ye.value(e.options[E]) : v
        ));
      }
    }
    function wo(u, V) {
      const E = (D) => Oe(ge.value(D), u);
      return e.options.find(E) || V.find(E) || u;
    }
    function Yt(u, V) {
      const E = u !== void 0 ? u : V;
      return typeof E == "function" ? E : (D) => D !== null && typeof D == "object" && E in D ? D[E] : D;
    }
    function Gt(u) {
      const V = ge.value(u);
      return xt.value.find((E) => Oe(E, V)) !== void 0;
    }
    function Hn(u) {
      e.useInput === !0 && x.value !== null && (u === void 0 || x.value === u.target && u.target.value === ae.value) && x.value.select();
    }
    function In(u) {
      Re(u, 27) === !0 && i.value === !0 && (Le(u), Fe(), et()), n("keyup", u);
    }
    function Dn(u) {
      const { value: V } = u.target;
      if (u.keyCode !== void 0) {
        In(u);
        return;
      }
      if (u.target.value = "", b !== null && (clearTimeout(b), b = null), et(), typeof V == "string" && V.length !== 0) {
        const E = V.toLocaleLowerCase(), D = (Y) => {
          const ue = e.options.find((fe) => Y.value(fe).toLocaleLowerCase() === E);
          return ue === void 0 ? !1 : (_.value.indexOf(ue) === -1 ? Me(ue) : Fe(), !0);
        }, G = (Y) => {
          D(ge) !== !0 && (D(ye) === !0 || Y === !0 || Ge(V, !0, () => G(!0)));
        };
        G();
      } else
        C.clearValue(u);
    }
    function jn(u) {
      n("keypress", u);
    }
    function Nn(u) {
      if (n("keydown", u), Kl(u) === !0)
        return;
      const V = f.value.length !== 0 && (e.newValueMode !== void 0 || e.onNewValue !== void 0), E = u.shiftKey !== !0 && e.multiple !== !0 && (r.value > -1 || V === !0);
      if (u.keyCode === 27) {
        ke(u);
        return;
      }
      if (u.keyCode === 9 && E === !1) {
        Ze();
        return;
      }
      if (u.target === void 0 || u.target.id !== C.targetUid.value || C.editable.value !== !0)
        return;
      if (u.keyCode === 40 && C.innerLoading.value !== !0 && i.value === !1) {
        oe(u), Je();
        return;
      }
      if (u.keyCode === 8 && e.hideSelected !== !0 && f.value.length === 0) {
        e.multiple === !0 && Array.isArray(e.modelValue) === !0 ? Xt(e.modelValue.length - 1) : e.multiple !== !0 && e.modelValue !== null && n("update:modelValue", null);
        return;
      }
      (u.keyCode === 35 || u.keyCode === 36) && (typeof f.value != "string" || f.value.length === 0) && (oe(u), r.value = -1, kt(u.keyCode === 36 ? 1 : -1, e.multiple)), (u.keyCode === 33 || u.keyCode === 34) && T.value !== void 0 && (oe(u), r.value = Math.max(
        -1,
        Math.min(
          W.value,
          r.value + (u.keyCode === 33 ? -1 : 1) * T.value.view
        )
      ), kt(u.keyCode === 33 ? 1 : -1, e.multiple)), (u.keyCode === 38 || u.keyCode === 40) && (oe(u), kt(u.keyCode === 38 ? -1 : 1, e.multiple));
      const D = W.value;
      if ((S === void 0 || w < Date.now()) && (S = ""), D > 0 && e.useInput !== !0 && u.key !== void 0 && u.key.length === 1 && u.altKey === !1 && u.ctrlKey === !1 && u.metaKey === !1 && (u.keyCode !== 32 || S.length !== 0)) {
        i.value !== !0 && Je(u);
        const G = u.key.toLocaleLowerCase(), Y = S.length === 1 && S[0] === G;
        w = Date.now() + 1500, Y === !1 && (oe(u), S += G);
        const ue = new RegExp("^" + S.split("").map((Jt) => Sa.indexOf(Jt) > -1 ? "\\" + Jt : Jt).join(".*"), "i");
        let fe = r.value;
        if (Y === !0 || fe < 0 || ue.test(ye.value(e.options[fe])) !== !0)
          do
            fe = _l(fe + 1, -1, D - 1);
          while (fe !== r.value && (Xe.value(e.options[fe]) === !0 || ue.test(ye.value(e.options[fe])) !== !0));
        r.value !== fe && pe(() => {
          Ye(fe), N(fe), fe >= 0 && e.useInput === !0 && e.fillInput === !0 && qt(ye.value(e.options[fe]));
        });
        return;
      }
      if (!(u.keyCode !== 13 && (u.keyCode !== 32 || e.useInput === !0 || S !== "") && (u.keyCode !== 9 || E === !1))) {
        if (u.keyCode !== 9 && oe(u), r.value > -1 && r.value < D) {
          Me(e.options[r.value]);
          return;
        }
        if (V === !0) {
          const G = (Y, ue) => {
            if (ue) {
              if (El(ue) !== !0)
                return;
            } else
              ue = e.newValueMode;
            if (st("", e.multiple !== !0, !0), Y == null)
              return;
            (ue === "toggle" ? Me : zn)(Y, ue === "add-unique"), e.multiple !== !0 && (x.value !== null && x.value.focus(), Fe());
          };
          if (e.onNewValue !== void 0 ? n("newValue", f.value, G) : G(f.value), e.multiple !== !0)
            return;
        }
        i.value === !0 ? Ze() : C.innerLoading.value !== !0 && Je();
      }
    }
    function Wn() {
      return c === !0 ? I.value : M.value !== null && M.value.contentEl !== null ? M.value.contentEl : void 0;
    }
    function So() {
      return Wn();
    }
    function xo() {
      return e.hideSelected === !0 ? [] : t["selected-item"] !== void 0 ? Ae.value.map((u) => t["selected-item"](u)).slice() : t.selected !== void 0 ? [].concat(t.selected()) : e.useChips === !0 ? Ae.value.map((u, V) => p(Hi, {
        key: "option-" + V,
        removable: C.editable.value === !0 && Xe.value(u.opt) !== !0,
        dense: !0,
        textColor: e.color,
        tabindex: Pe.value,
        onRemove() {
          u.removeAtIndex(V);
        }
      }, () => p("span", {
        class: "ellipsis",
        [u.html === !0 ? "innerHTML" : "textContent"]: ye.value(u.opt)
      }))) : [
        p("span", {
          [$e.value === !0 ? "innerHTML" : "textContent"]: q.value
        })
      ];
    }
    function Kn() {
      if (H.value === !0)
        return t["no-option"] !== void 0 ? t["no-option"]({ inputValue: f.value }) : void 0;
      const u = t.option !== void 0 ? t.option : (E) => p(Mt, {
        key: E.index,
        ...E.itemProps
      }, () => p(
        je,
        () => p(
          hn,
          () => p("span", {
            [E.html === !0 ? "innerHTML" : "textContent"]: E.label
          })
        )
      ));
      let V = U("div", Ue.value.map(u));
      return t["before-options"] !== void 0 && (V = t["before-options"]().concat(V)), Ee(t["after-options"], V);
    }
    function ko(u, V) {
      const E = V === !0 ? { ...qe.value, ...C.splitAttrs.attributes.value } : void 0, D = {
        ref: V === !0 ? x : void 0,
        key: "i_t",
        class: R.value,
        style: e.inputStyle,
        value: f.value !== void 0 ? f.value : "",
        // required for Android in order to show ENTER key when in form
        type: "search",
        ...E,
        id: V === !0 ? C.targetUid.value : void 0,
        maxlength: e.maxlength,
        autocomplete: e.autocomplete,
        "data-autofocus": u === !0 || e.autofocus === !0 || void 0,
        disabled: e.disable === !0,
        readonly: e.readonly === !0,
        ...bo.value
      };
      return u !== !0 && c === !0 && (Array.isArray(D.class) === !0 ? D.class = [...D.class, "no-pointer-events"] : D.class += " no-pointer-events"), p("input", D);
    }
    function Qn(u) {
      b !== null && (clearTimeout(b), b = null), !(u && u.target && u.target.qComposing === !0) && (qt(u.target.value || ""), g = !0, v = f.value, C.focused.value !== !0 && (c !== !0 || h.value === !0) && C.focus(), e.onFilter !== void 0 && (b = setTimeout(() => {
        b = null, Ge(f.value);
      }, e.inputDebounce)));
    }
    function qt(u) {
      f.value !== u && (f.value = u, n("inputValue", u));
    }
    function st(u, V, E) {
      g = E !== !0, e.useInput === !0 && (qt(u), (V === !0 || E !== !0) && (v = u), V !== !0 && Ge(u));
    }
    function Ge(u, V, E) {
      if (e.onFilter === void 0 || V !== !0 && C.focused.value !== !0)
        return;
      C.innerLoading.value === !0 ? n("filterAbort") : (C.innerLoading.value = !0, s.value = !0), u !== "" && e.multiple !== !0 && _.value.length !== 0 && g !== !0 && u === ye.value(_.value[0]) && (u = "");
      const D = setTimeout(() => {
        i.value === !0 && (i.value = !1);
      }, 10);
      y !== null && clearTimeout(y), y = D, n(
        "filter",
        u,
        (G, Y) => {
          (V === !0 || C.focused.value === !0) && y === D && (clearTimeout(y), typeof G == "function" && G(), s.value = !1, pe(() => {
            C.innerLoading.value = !1, C.editable.value === !0 && (V === !0 ? i.value === !0 && Fe() : i.value === !0 ? Zt(!0) : i.value = !0), typeof Y == "function" && pe(() => {
              Y(l);
            }), typeof E == "function" && pe(() => {
              E(l);
            });
          }));
        },
        () => {
          C.focused.value === !0 && y === D && (clearTimeout(y), C.innerLoading.value = !1, s.value = !1), i.value === !0 && (i.value = !1);
        }
      );
    }
    function qo() {
      return p(vo, {
        ref: M,
        class: P.value,
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
        square: rt.value,
        transitionShow: e.transitionShow,
        transitionHide: e.transitionHide,
        transitionDuration: e.transitionDuration,
        separateClosePopup: !0,
        ...wt.value,
        onScrollPassive: $,
        onBeforeShow: Xn,
        onBeforeHide: Co,
        onShow: _o
      }, Kn);
    }
    function Co(u) {
      Yn(u), Ze();
    }
    function _o() {
      re();
    }
    function Eo(u) {
      Le(u), x.value !== null && x.value.focus(), h.value = !0, window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, 0);
    }
    function Bo(u) {
      Le(u), pe(() => {
        h.value = !1;
      });
    }
    function Vo() {
      const u = [
        p(Ai, {
          class: `col-auto ${C.fieldClass.value}`,
          ...F.value,
          for: C.targetUid.value,
          dark: L.value,
          square: !0,
          loading: s.value,
          itemAligned: !1,
          filled: !0,
          stackLabel: f.value.length !== 0,
          ...C.splitAttrs.listeners.value,
          onFocus: Eo,
          onBlur: Bo
        }, {
          ...t,
          rawControl: () => C.getControl(!0),
          before: void 0,
          after: void 0
        })
      ];
      return i.value === !0 && u.push(
        p("div", {
          ref: I,
          class: P.value + " scroll",
          style: e.popupContentStyle,
          ...wt.value,
          onClick: ke,
          onScrollPassive: $
        }, Kn())
      ), p(mo, {
        ref: O,
        modelValue: a.value,
        position: e.useInput === !0 ? "top" : void 0,
        transitionShow: k,
        transitionHide: e.transitionHide,
        transitionDuration: e.transitionDuration,
        onBeforeShow: Xn,
        onBeforeHide: $o,
        onHide: To,
        onShow: Lo
      }, () => p("div", {
        class: "q-select__dialog" + (L.value === !0 ? " q-select__dialog--dark q-dark" : "") + (h.value === !0 ? " q-select__dialog--focused" : "")
      }, u));
    }
    function $o(u) {
      Yn(u), O.value !== null && O.value.__updateRefocusTarget(
        C.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")
      ), C.focused.value = !1;
    }
    function To(u) {
      Fe(), C.focused.value === !1 && n("blur", u), et();
    }
    function Lo() {
      const u = document.activeElement;
      (u === null || u.id !== C.targetUid.value) && x.value !== null && x.value !== u && x.value.focus(), re();
    }
    function Ze() {
      a.value !== !0 && (r.value = -1, i.value === !0 && (i.value = !1), C.focused.value === !1 && (y !== null && (clearTimeout(y), y = null), C.innerLoading.value === !0 && (n("filterAbort"), C.innerLoading.value = !1, s.value = !1)));
    }
    function Je(u) {
      C.editable.value === !0 && (c === !0 ? (C.onControlFocusin(u), a.value = !0, pe(() => {
        C.focus();
      })) : C.focus(), e.onFilter !== void 0 ? Ge(f.value) : (H.value !== !0 || t["no-option"] !== void 0) && (i.value = !0));
    }
    function Fe() {
      a.value = !1, Ze();
    }
    function et() {
      e.useInput === !0 && st(
        e.multiple !== !0 && e.fillInput === !0 && _.value.length !== 0 && ye.value(_.value[0]) || "",
        !0,
        !0
      );
    }
    function Zt(u) {
      let V = -1;
      if (u === !0) {
        if (_.value.length !== 0) {
          const E = ge.value(_.value[0]);
          V = e.options.findIndex((D) => Oe(ge.value(D), E));
        }
        j(V);
      }
      Ye(V);
    }
    function Oo(u, V) {
      i.value === !0 && C.innerLoading.value === !1 && (j(-1, !0), pe(() => {
        i.value === !0 && C.innerLoading.value === !1 && (u > V ? j() : Zt(!0));
      }));
    }
    function Un() {
      a.value === !1 && M.value !== null && M.value.updatePosition();
    }
    function Xn(u) {
      u !== void 0 && Le(u), n("popupShow", u), C.hasPopupOpen = !0, C.onControlFocusin(u);
    }
    function Yn(u) {
      u !== void 0 && Le(u), n("popupHide", u), C.hasPopupOpen = !1, C.onControlFocusout(u);
    }
    function Gn() {
      c = o.platform.is.mobile !== !0 && e.behavior !== "dialog" ? !1 : e.behavior !== "menu" && (e.useInput === !0 ? t["no-option"] !== void 0 || e.onFilter !== void 0 || H.value === !1 : !0), k = o.platform.is.ios === !0 && c === !0 && e.useInput === !0 ? "fade" : e.transitionShow;
    }
    return Rl(Gn), Ho(Un), Gn(), de(() => {
      b !== null && clearTimeout(b);
    }), Object.assign(l, {
      showPopup: Je,
      hidePopup: Fe,
      removeAtIndex: Xt,
      add: zn,
      toggleOption: Me,
      getOptionIndex: () => r.value,
      setOptionIndex: Ye,
      moveOptionSelection: kt,
      filter: Ge,
      updateMenuPosition: Un,
      updateInputValue: st,
      isOptionSelected: Gt,
      getEmittingOptionValue: Fn,
      isOptionDisabled: (...u) => Xe.value.apply(null, u) === !0,
      getOptionValue: (...u) => ge.value.apply(null, u),
      getOptionLabel: (...u) => ye.value.apply(null, u)
    }), Object.assign(C, {
      innerValue: _,
      fieldClass: d(
        () => `q-select q-field--auto-height q-select--with${e.useInput !== !0 ? "out" : ""}-input q-select--with${e.useChips !== !0 ? "out" : ""}-chips q-select--${e.multiple === !0 ? "multiple" : "single"}`
      ),
      inputRef: B,
      targetRef: x,
      hasValue: Q,
      showPopup: Je,
      floatingLabel: d(
        () => e.hideSelected !== !0 && Q.value === !0 || typeof f.value == "number" || f.value.length !== 0 || bn(e.displayValue)
      ),
      getControlChild: () => {
        if (C.editable.value !== !1 && (a.value === !0 || H.value !== !0 || t["no-option"] !== void 0))
          return c === !0 ? Vo() : qo();
        C.hasPopupOpen === !0 && (C.hasPopupOpen = !1);
      },
      controlEvents: {
        onFocusin(u) {
          C.onControlFocusin(u);
        },
        onFocusout(u) {
          C.onControlFocusout(u, () => {
            et(), Ze();
          });
        },
        onClick(u) {
          if (ke(u), c !== !0 && i.value === !0) {
            Ze(), x.value !== null && x.value.focus();
            return;
          }
          Je(u);
        }
      },
      getControl: (u) => {
        const V = xo(), E = u === !0 || a.value !== !0 || c !== !0;
        if (e.useInput === !0)
          V.push(ko(u, E));
        else if (C.editable.value === !0) {
          const G = E === !0 ? qe.value : void 0;
          V.push(
            p("input", {
              ref: E === !0 ? x : void 0,
              key: "d_t",
              class: "q-select__focus-target",
              id: E === !0 ? C.targetUid.value : void 0,
              value: q.value,
              readonly: !0,
              "data-autofocus": u === !0 || e.autofocus === !0 || void 0,
              ...G,
              onKeydown: Nn,
              onKeyup: In,
              onKeypress: jn
            })
          ), E === !0 && typeof e.autocomplete == "string" && e.autocomplete.length !== 0 && V.push(
            p("input", {
              class: "q-select__autocomplete-input",
              autocomplete: e.autocomplete,
              tabindex: -1,
              onKeyup: Dn
            })
          );
        }
        if (K.value !== void 0 && e.disable !== !0 && xt.value.length !== 0) {
          const G = xt.value.map((Y) => p("option", { value: Y, selected: !0 }));
          V.push(
            p("select", {
              class: "hidden",
              name: K.value,
              multiple: e.multiple
            }, G)
          );
        }
        const D = e.useInput === !0 || E !== !0 ? void 0 : C.splitAttrs.attributes.value;
        return p("div", {
          class: "q-field__native row items-center",
          ...D,
          ...C.splitAttrs.listeners.value
        }, V);
      },
      getInnerAppend: () => e.loading !== !0 && s.value !== !0 && e.hideDropdownIcon !== !0 ? [
        p(Se, {
          class: "q-select__dropdown-icon" + (i.value === !0 ? " rotate-180" : ""),
          name: St.value
        })
      ] : null
    }), Zl(C);
  }
}), su = /* @__PURE__ */ ut({
  __name: "AppSelect",
  props: {
    modelValue: {},
    multiple: { type: Boolean, default: () => !1 },
    newValue: { type: Boolean },
    options: {},
    virtualScrolltemSize: { default: () => 24 },
    transformNewValueFn: { type: Function, default: (e) => e },
    exactFilterMatch: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, l = (s) => {
      t("update:modelValue", s);
    }, o = A(""), i = A([]), a = d(() => [...i.value, ...n.options].filter(
      (s) => !o.value || (n.exactFilterMatch ? `${s.label}`.toLowerCase() === `${o.value}`.toLowerCase() : `${s.label}`.toLowerCase().includes(`${o.value}`.toLowerCase()))
    )), r = (s, b) => {
      o.value = s.toLowerCase(), b(
        () => {
          o.value = s.toLowerCase();
        },
        (m) => {
          s !== "" && m.options && m.options.length > 0 && (m.setOptionIndex(-1), m.moveOptionSelection(1, !0));
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
    return (s, b) => (te(), ve(ka, {
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
      options: a.value,
      "virtual-scroll-item-size": s.virtualScrolltemSize,
      onFilter: r,
      onClear: f,
      onNewValue: h
    }, {
      option: le(({ itemProps: m, opt: c, selected: g, toggleOption: y }) => [
        ne(Pt),
        ne(Mt, vt(m, {
          disable: c.disable
        }), {
          default: le(() => [
            ne(je, { side: "" }, {
              default: le(() => [
                ne(bi, {
                  dense: "",
                  "model-value": g,
                  "onUpdate:modelValue": (v) => y(c)
                }, null, 8, ["model-value", "onUpdate:modelValue"])
              ]),
              _: 2
            }, 1024),
            ne(je, null, {
              default: le(() => [
                ne(hn, {
                  innerHTML: c.label
                }, null, 8, ["innerHTML"]),
                c.caption ? (te(), ve(hn, {
                  key: 0,
                  caption: "",
                  innerHTML: c.caption
                }, null, 8, ["innerHTML"])) : Ce("", !0)
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1040, ["disable"])
      ]),
      "no-option": le(() => [
        ne(Mt, null, {
          default: le(() => [
            ne(je, { class: "text-grey" }, {
              default: le(() => [
                Rt(" Inget resultat ")
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
}), qa = p("div", { class: "q-space" }), Ca = ie({
  name: "QSpace",
  setup() {
    return () => qa;
  }
}), _a = ie({
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
      validator: jt
    },
    self: {
      type: String,
      default: "top middle",
      validator: jt
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
    const a = ee(), { proxy: { $q: r } } = a, f = A(null), h = A(!1), s = d(() => Nt(e.anchor, r.lang.rtl)), b = d(() => Nt(e.self, r.lang.rtl)), m = d(() => e.persistent !== !0), { registerTick: c, removeTick: g } = Pn(), { registerTimeout: y } = An(), { transitionProps: v, transitionStyle: k } = Rn(e), { localScrollTarget: S, changeScrollEvent: w, unconfigureScrollTarget: B } = lo(e, C), { anchorEl: x, canShow: M, anchorEvents: O } = no({ showing: h, configureAnchorEl: re }), { show: I, hide: K } = Tn({
      showing: h,
      canShow: M,
      handleShow: X,
      handleHide: T,
      hideOnRouteChange: m,
      processOnMount: !0
    });
    Object.assign(O, { delayShow: $, delayHide: N });
    const { showPortal: Z, hidePortal: W, renderPortal: z } = Ln(a, f, F, "tooltip");
    if (r.platform.is.mobile === !0) {
      const L = {
        anchorEl: x,
        innerRef: f,
        onClickOutside(R) {
          return K(R), R.target.classList.contains("q-dialog__backdrop") && oe(R), !0;
        }
      }, Q = d(
        () => (
          // it doesn't has external model
          // (null is the default value)
          e.modelValue === null && e.persistent !== !0 && h.value === !0
        )
      );
      J(Q, (R) => {
        (R === !0 ? co : Dt)(L);
      }), de(() => {
        Dt(L);
      });
    }
    function X(L) {
      Z(), c(() => {
        i = new MutationObserver(() => U()), i.observe(f.value, { attributes: !1, childList: !0, characterData: !0, subtree: !0 }), U(), C();
      }), o === void 0 && (o = J(
        () => r.screen.width + "|" + r.screen.height + "|" + e.self + "|" + e.anchor + "|" + r.lang.rtl,
        U
      )), y(() => {
        Z(!0), n("show", L);
      }, e.transitionDuration);
    }
    function T(L) {
      g(), W(), j(), y(() => {
        W(!0), n("hide", L);
      }, e.transitionDuration);
    }
    function j() {
      i !== void 0 && (i.disconnect(), i = void 0), o !== void 0 && (o(), o = void 0), B(), At(O, "tooltipTemp");
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
        const Q = x.value, R = ["touchmove", "touchcancel", "touchend", "click"].map((P) => [Q, P, "delayHide", "passiveCapture"]);
        mt(O, "tooltipTemp", R);
      }
      y(() => {
        I(L);
      }, e.delay);
    }
    function N(L) {
      r.platform.is.mobile === !0 && (At(O, "tooltipTemp"), wn(), setTimeout(() => {
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
      mt(O, "anchor", L);
    }
    function C() {
      if (x.value !== null || e.scrollTarget !== void 0) {
        S.value = io(x.value, e.scrollTarget);
        const L = e.noParentEvent === !0 ? U : K;
        w(S.value, L);
      }
    }
    function _() {
      return h.value === !0 ? p("div", {
        ...l,
        ref: f,
        class: [
          "q-tooltip q-tooltip--style q-position-engine no-pointer-events",
          l.class
        ],
        style: [
          l.style,
          k.value
        ],
        role: "tooltip"
      }, me(t.default)) : null;
    }
    function F() {
      return p(Qe, v.value, _);
    }
    return de(j), Object.assign(a.proxy, { updatePosition: U }), z;
  }
}), go = {
  left: "start",
  center: "center",
  right: "end",
  between: "between",
  around: "around",
  evenly: "evenly",
  stretch: "stretch"
}, Ea = Object.keys(go), Ba = {
  align: {
    type: String,
    validator: (e) => Ea.includes(e)
  }
};
function Va(e) {
  return d(() => {
    const t = e.align === void 0 ? e.vertical === !0 ? "stretch" : "left" : e.align;
    return `${e.vertical === !0 ? "items" : "justify"}-${go[t]}`;
  });
}
const Bl = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32
}, $a = {
  xs: 8,
  sm: 10,
  md: 14,
  lg: 20,
  xl: 24
}, Ta = ["button", "submit", "reset"], La = /[^\s]\/[^\s]/, Oa = ["flat", "outline", "push", "unelevated"], Ra = (e, t) => e.flat === !0 ? "flat" : e.outline === !0 ? "outline" : e.push === !0 ? "push" : e.unelevated === !0 ? "unelevated" : t, Pa = {
  ...bt,
  ...Nl,
  type: {
    type: String,
    default: "button"
  },
  label: [Number, String],
  icon: String,
  iconRight: String,
  ...Oa.reduce(
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
    ...Ba.align,
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
function Aa(e) {
  const t = yt(e, $a), n = Va(e), { hasRouterLink: l, hasLink: o, linkTag: i, linkAttrs: a, navigateOnClick: r } = Wl({
    fallbackTag: "button"
  }), f = d(() => {
    const v = e.fab === !1 && e.fabMini === !1 ? t.value : {};
    return e.padding !== void 0 ? Object.assign({}, v, {
      padding: e.padding.split(/\s+/).map((k) => k in Bl ? Bl[k] + "px" : k).join(" "),
      minWidth: "0",
      minHeight: "0"
    }) : v;
  }), h = d(
    () => e.rounded === !0 || e.fab === !0 || e.fabMini === !0
  ), s = d(
    () => e.disable !== !0 && e.loading !== !0
  ), b = d(() => s.value === !0 ? e.tabindex || 0 : -1), m = d(() => Ra(e, "standard")), c = d(() => {
    const v = { tabindex: b.value };
    return o.value === !0 ? Object.assign(v, a.value) : Ta.includes(e.type) === !0 && (v.type = e.type), i.value === "a" ? (e.disable === !0 ? v["aria-disabled"] = "true" : v.href === void 0 && (v.role = "button"), l.value !== !0 && La.test(e.type) === !0 && (v.type = e.type)) : e.disable === !0 && (v.disabled = "", v["aria-disabled"] = "true"), e.loading === !0 && e.percentage !== void 0 && Object.assign(v, {
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-valuenow": e.percentage
    }), v;
  }), g = d(() => {
    let v;
    e.color !== void 0 ? e.flat === !0 || e.outline === !0 ? v = `text-${e.textColor || e.color}` : v = `bg-${e.color} text-${e.textColor || "white"}` : e.textColor && (v = `text-${e.textColor}`);
    const k = e.round === !0 ? "round" : `rectangle${h.value === !0 ? " q-btn--rounded" : e.square === !0 ? " q-btn--square" : ""}`;
    return `q-btn--${m.value} q-btn--${k}` + (v !== void 0 ? " " + v : "") + (s.value === !0 ? " q-btn--actionable q-focusable q-hoverable" : e.disable === !0 ? " disabled" : "") + (e.fab === !0 ? " q-btn--fab" : e.fabMini === !0 ? " q-btn--fab-mini" : "") + (e.noCaps === !0 ? " q-btn--no-uppercase" : "") + (e.dense === !0 ? " q-btn--dense" : "") + (e.stretch === !0 ? " no-border-radius self-stretch" : "") + (e.glossy === !0 ? " glossy" : "") + (e.square ? " q-btn--square" : "");
  }), y = d(
    () => n.value + (e.stack === !0 ? " column" : " row") + (e.noWrap === !0 ? " no-wrap text-no-wrap" : "") + (e.loading === !0 ? " q-btn__content--hidden" : "")
  );
  return {
    classes: g,
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
const Ma = ie({
  name: "QBtn",
  props: {
    ...Pa,
    percentage: Number,
    darkPercentage: Boolean,
    onTouchstart: [Function, Array]
  },
  emits: ["click", "keydown", "mousedown", "keyup"],
  setup(e, { slots: t, emit: n }) {
    const { proxy: l } = ee(), {
      classes: o,
      style: i,
      innerClasses: a,
      attributes: r,
      hasLink: f,
      linkTag: h,
      navigateOnClick: s,
      isActionable: b
    } = Aa(e), m = A(null), c = A(null);
    let g = null, y, v = null;
    const k = d(
      () => e.label !== void 0 && e.label !== null && e.label !== ""
    ), S = d(() => e.disable === !0 || e.ripple === !1 ? !1 : {
      keyCodes: f.value === !0 ? [13, 32] : [13],
      ...e.ripple === !0 ? {} : e.ripple
    }), w = d(() => ({ center: e.round })), B = d(() => {
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
      ref: m,
      class: "q-btn q-btn-item non-selectable no-outline " + o.value,
      style: i.value,
      ...r.value,
      ...x.value
    }));
    function O(T) {
      if (m.value !== null) {
        if (T !== void 0) {
          if (T.defaultPrevented === !0)
            return;
          const j = document.activeElement;
          if (e.type === "submit" && j !== document.body && m.value.contains(j) === !1 && j.contains(m.value) === !1) {
            m.value.focus();
            const U = () => {
              document.removeEventListener("keydown", oe, !0), document.removeEventListener("keyup", U, we), m.value !== null && m.value.removeEventListener("blur", U, we);
            };
            document.addEventListener("keydown", oe, !0), document.addEventListener("keyup", U, we), m.value.addEventListener("blur", U, we);
          }
        }
        s(T);
      }
    }
    function I(T) {
      m.value !== null && (n("keydown", T), Re(T, [13, 32]) === !0 && nt !== m.value && (nt !== null && z(), T.defaultPrevented !== !0 && (m.value.focus(), nt = m.value, m.value.classList.add("q-btn--active"), document.addEventListener("keyup", W, !0), m.value.addEventListener("blur", W, we)), oe(T)));
    }
    function K(T) {
      m.value !== null && (n("touchstart", T), T.defaultPrevented !== !0 && (tt !== m.value && (tt !== null && z(), tt = m.value, g = T.target, g.addEventListener("touchcancel", W, we), g.addEventListener("touchend", W, we)), y = !0, v !== null && clearTimeout(v), v = setTimeout(() => {
        v = null, y = !1;
      }, 200)));
    }
    function Z(T) {
      m.value !== null && (T.qSkipRipple = y === !0, n("mousedown", T), T.defaultPrevented !== !0 && lt !== m.value && (lt !== null && z(), lt = m.value, m.value.classList.add("q-btn--active"), document.addEventListener("mouseup", W, we)));
    }
    function W(T) {
      if (m.value !== null && !(T !== void 0 && T.type === "blur" && document.activeElement === m.value)) {
        if (T !== void 0 && T.type === "keyup") {
          if (nt === m.value && Re(T, [13, 32]) === !0) {
            const j = new MouseEvent("click", T);
            j.qKeyEvent = !0, T.defaultPrevented === !0 && ke(j), T.cancelBubble === !0 && Le(j), m.value.dispatchEvent(j), oe(T), T.qKeyEvent = !0;
          }
          n("keyup", T);
        }
        z();
      }
    }
    function z(T) {
      const j = c.value;
      T !== !0 && (tt === m.value || lt === m.value) && j !== null && j !== document.activeElement && (j.setAttribute("tabindex", -1), j.focus()), tt === m.value && (g !== null && (g.removeEventListener("touchcancel", W, we), g.removeEventListener("touchend", W, we)), tt = g = null), lt === m.value && (document.removeEventListener("mouseup", W, we), lt = null), nt === m.value && (document.removeEventListener("keyup", W, !0), m.value !== null && m.value.removeEventListener("blur", W, we), nt = null), m.value !== null && m.value.classList.remove("q-btn--active");
    }
    function X(T) {
      oe(T), T.qSkipRipple = !0;
    }
    return de(() => {
      z(!0);
    }), Object.assign(l, { click: O }), () => {
      let T = [];
      e.icon !== void 0 && T.push(
        p(Se, {
          name: e.icon,
          left: e.stack === !1 && k.value === !0,
          role: "img",
          "aria-hidden": "true"
        })
      ), k.value === !0 && T.push(
        p("span", { class: "block" }, [e.label])
      ), T = Ee(t.default, T), e.iconRight !== void 0 && e.round === !1 && T.push(
        p(Se, {
          name: e.iconRight,
          right: e.stack === !1 && k.value === !0,
          role: "img",
          "aria-hidden": "true"
        })
      );
      const j = [
        p("span", {
          class: "q-focus-helper",
          ref: c
        })
      ];
      return e.loading === !0 && e.percentage !== void 0 && j.push(
        p("span", {
          class: "q-btn__progress absolute-full overflow-hidden" + (e.darkPercentage === !0 ? " q-btn__progress--dark" : "")
        }, [
          p("span", {
            class: "q-btn__progress-indicator fit block",
            style: B.value
          })
        ])
      ), j.push(
        p("span", {
          class: "q-btn__content text-center col items-center q-anchor--skip " + a.value
        }, T)
      ), e.loading !== null && j.push(
        p(Qe, {
          name: "q-transition--fade"
        }, () => e.loading === !0 ? [
          p("span", {
            key: "loading",
            class: "absolute-full flex flex-center"
          }, t.loading !== void 0 ? t.loading() : [p(Ul)])
        ] : null)
      ), kn(
        p(
          h.value,
          M.value,
          j
        ),
        [[
          eo,
          S.value,
          void 0,
          w.value
        ]]
      );
    };
  }
}), Fa = ie({
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
    return () => p(e.tag, { class: n.value }, me(t.default));
  }
}), za = ["top", "middle", "bottom"], Ha = ie({
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
      validator: (e) => za.includes(e)
    }
  },
  setup(e, { slots: t }) {
    const n = d(() => e.align !== void 0 ? { verticalAlign: e.align } : null), l = d(() => {
      const o = e.outline === !0 && e.color || e.textColor;
      return `q-badge flex inline items-center no-wrap q-badge--${e.multiLine === !0 ? "multi" : "single"}-line` + (e.outline === !0 ? " q-badge--outline" : e.color !== void 0 ? ` bg-${e.color}` : "") + (o !== void 0 ? ` text-${o}` : "") + (e.floating === !0 ? " q-badge--floating" : "") + (e.rounded === !0 ? " q-badge--rounded" : "") + (e.transparent === !0 ? " q-badge--transparent" : "");
    });
    return () => p("div", {
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
    let l = !1, o, i, a = null, r = null, f, h;
    function s() {
      o && o(), o = null, l = !1, a !== null && (clearTimeout(a), a = null), r !== null && (clearTimeout(r), r = null), i !== void 0 && i.removeEventListener("transitionend", f), f = null;
    }
    function b(y, v, k) {
      v !== void 0 && (y.style.height = `${v}px`), y.style.transition = `height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`, l = !0, o = k;
    }
    function m(y, v) {
      y.style.overflowY = null, y.style.height = null, y.style.transition = null, s(), v !== h && n(v);
    }
    function c(y, v) {
      let k = 0;
      i = y, l === !0 ? (s(), k = y.offsetHeight === y.scrollHeight ? 0 : void 0) : (h = "hide", y.style.overflowY = "hidden"), b(y, k, v), a = setTimeout(() => {
        a = null, y.style.height = `${y.scrollHeight}px`, f = (S) => {
          r = null, (Object(S) !== S || S.target === y) && m(y, "show");
        }, y.addEventListener("transitionend", f), r = setTimeout(f, e.duration * 1.1);
      }, 100);
    }
    function g(y, v) {
      let k;
      i = y, l === !0 ? s() : (h = "show", y.style.overflowY = "hidden", k = y.scrollHeight), b(y, k, v), a = setTimeout(() => {
        a = null, y.style.height = 0, f = (S) => {
          r = null, (Object(S) !== S || S.target === y) && m(y, "hide");
        }, y.addEventListener("transitionend", f), r = setTimeout(f, e.duration * 1.1);
      }, 100);
    }
    return de(() => {
      l === !0 && s();
    }), () => p(Qe, {
      css: !1,
      appear: e.appear,
      onEnter: c,
      onLeave: g
    }, t.default);
  }
}), Ia = {
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
const Da = ie({
  name: "QLinearProgress",
  props: {
    ...Be,
    ...bt,
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
    const { proxy: n } = ee(), l = Ve(e, n.$q), o = yt(e, Ia), i = d(() => e.indeterminate === !0 || e.query === !0), a = d(() => e.reverse !== e.query), r = d(() => ({
      ...o.value !== null ? o.value : {},
      "--q-linear-progress-speed": `${e.animationSpeed}ms`
    })), f = d(
      () => "q-linear-progress" + (e.color !== void 0 ? ` text-${e.color}` : "") + (e.reverse === !0 || e.query === !0 ? " q-linear-progress--reverse" : "") + (e.rounded === !0 ? " rounded-borders" : "")
    ), h = d(() => $l(e.buffer !== void 0 ? e.buffer : 1, a.value, n.$q)), s = d(() => `with${e.instantFeedback === !0 ? "out" : ""}-transition`), b = d(
      () => `q-linear-progress__track absolute-full q-linear-progress__track--${s.value} q-linear-progress__track--${l.value === !0 ? "dark" : "light"}` + (e.trackColor !== void 0 ? ` bg-${e.trackColor}` : "")
    ), m = d(() => $l(i.value === !0 ? 1 : e.value, a.value, n.$q)), c = d(
      () => `q-linear-progress__model absolute-full q-linear-progress__model--${s.value} q-linear-progress__model--${i.value === !0 ? "in" : ""}determinate`
    ), g = d(() => ({ width: `${e.value * 100}%` })), y = d(
      () => `q-linear-progress__stripe absolute-${e.reverse === !0 ? "right" : "left"} q-linear-progress__stripe--${s.value}`
    );
    return () => {
      const v = [
        p("div", {
          class: b.value,
          style: h.value
        }),
        p("div", {
          class: c.value,
          style: m.value
        })
      ];
      return e.stripe === !0 && i.value === !1 && v.push(
        p("div", {
          class: y.value,
          style: g.value
        })
      ), p("div", {
        class: f.value,
        style: r.value,
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": 1,
        "aria-valuenow": e.indeterminate === !0 ? void 0 : e.value
      }, Ee(t.default, v));
    };
  }
}), ja = ie({
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
    const { proxy: { $q: n } } = ee(), l = Ve(e, n), o = d(
      () => "q-card" + (l.value === !0 ? " q-card--dark q-dark" : "") + (e.bordered === !0 ? " q-card--bordered" : "") + (e.square === !0 ? " q-card--square no-border-radius" : "") + (e.flat === !0 ? " q-card--flat no-shadow" : "")
    );
    return () => p(e.tag, { class: o.value }, me(t.default));
  }
}), Na = () => !0;
function Wa(e) {
  const t = {};
  return e.forEach((n) => {
    t[n] = Na;
  }), t;
}
function Kt() {
  const { emit: e, proxy: t } = ee(), n = A(null);
  function l() {
    n.value.show();
  }
  function o() {
    n.value.hide();
  }
  function i(r) {
    e("ok", r), o();
  }
  function a() {
    e("hide");
  }
  return Object.assign(t, { show: l, hide: o }), {
    dialogRef: n,
    onDialogHide: a,
    onDialogOK: i,
    onDialogCancel: o
  };
}
const po = ["ok", "hide"];
Kt.emits = po;
Kt.emitsObject = Wa(po);
const Ka = {
  key: 0,
  class: "text-body1 text-weight-medium"
}, Qa = {
  key: 0,
  class: "q-pb-sm"
}, Ua = {
  class: "scroll",
  style: { "max-height": "300px" }
}, Xa = { class: "q-px-md q-py-sm bg-red-1 text-red text-caption" }, Ya = /* @__PURE__ */ De("br", null, null, -1), Ga = { style: { "white-space": "pre-wrap" } }, Za = { key: 0 }, Ja = /* @__PURE__ */ ut({
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
    title: {},
    dependencies: { type: Function }
  },
  emits: {
    ...Kt.emitsObject
  },
  setup(e) {
    const t = e, { dialogRef: n, onDialogHide: l, onDialogOK: o, onDialogCancel: i } = Kt(), a = A(!1), r = A(null), f = (c, g) => {
      r.value = {
        type: c,
        message: JSON.stringify(g, Object.getOwnPropertyNames(g), 2)
      };
    }, h = Io([]);
    (async () => {
      if (t.dependencies) {
        a.value = !0;
        try {
          const c = await Promise.all(t.dependencies());
          h.value = c;
        } catch (c) {
          f("dependecy", c);
        }
        a.value = !1;
      }
    })();
    const b = A(!1);
    return Ol(eu, {
      pending: b,
      dependencyData: h,
      onSubmit: async (c) => {
        r.value = null, b.value = !0;
        try {
          const g = await c();
          o(g);
        } catch (g) {
          f("submit", g);
        } finally {
          b.value = !1;
        }
      },
      onDialogCancel: i,
      onDialogOK: o
    }), (c, g) => (te(), ve(mo, {
      ref_key: "dialogRef",
      ref: n,
      onHide: He(l)
    }, {
      default: le(() => [
        ne(ja, {
          square: "",
          style: { "min-width": "360px" }
        }, {
          default: le(() => [
            ne(Fa, { class: "flex" }, {
              default: le(() => [
                c.title ? (te(), _e("div", Ka, vn(c.title), 1)) : Ce("", !0),
                ne(Ca),
                ne(Ma, {
                  onClick: He(i),
                  size: "sm",
                  icon: "mdi-close",
                  unelevated: "",
                  square: "",
                  padding: "4px",
                  disable: b.value
                }, {
                  default: le(() => [
                    ne(_a, null, {
                      default: le(() => [
                        Rt(" Stäng ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["onClick", "disable"])
              ]),
              _: 1
            }),
            ne(Vl, null, {
              default: le(() => [
                r.value ? (te(), _e("div", Qa, [
                  ne(Pt, { color: "red-2" }),
                  De("div", Ua, [
                    De("div", Xa, [
                      ne(Ha, { color: "red" }, {
                        default: le(() => [
                          ne(Se, {
                            class: "q-mr-sm",
                            name: "mdi-alert-circle-outline"
                          }),
                          Rt(" Ett fel uppstod")
                        ]),
                        _: 1
                      }),
                      Ya,
                      De("code", Ga, vn(r.value.message), 1)
                    ])
                  ]),
                  ne(Pt, { color: "red-2" })
                ])) : Ce("", !0)
              ]),
              _: 1
            }),
            a.value ? (te(), ve(Da, {
              key: 0,
              indeterminate: ""
            })) : Ce("", !0),
            ne(Vl, null, {
              default: le(() => {
                var y;
                return [
                  !a.value && ((y = r.value) == null ? void 0 : y.type) !== "dependecy" ? (te(), _e("div", Za, [
                    (te(), ve(dn(t.slot.component), Do(jo(t.slot.componentProps)), null, 16))
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
    }, 8, ["onHide"]));
  }
}), cu = (e, t) => e.create({
  component: Ja,
  componentProps: t
}), eu = Symbol(), tu = ie({
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
    const n = ee(), l = Ve(e, n.proxy.$q), o = d(
      () => "q-list" + (e.bordered === !0 ? " q-list--bordered" : "") + (e.dense === !0 ? " q-list--dense" : "") + (e.separator === !0 ? " q-list--separator" : "") + (l.value === !0 ? " q-list--dark" : "") + (e.padding === !0 ? " q-list--padding" : "")
    );
    return () => p(e.tag, { class: o.value }, me(t.default));
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
const nu = Pl(
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
          Re(l, 13) === !0 && n.handler(l);
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
), lu = /* @__PURE__ */ ut({
  __name: "AppListItem",
  props: {
    props: {},
    listProps: { default: () => ({}) }
  },
  setup(e) {
    const t = e, n = d(() => `text-${t.props.color}`), l = () => {
      t.props.clickFn && t.props.clickFn();
    }, o = d(() => (t.props.items || []).filter(
      (i) => typeof i.visible == "boolean" ? i.visible : !0
    ));
    return (i, a) => kn((te(), ve(Mt, vt(i.props.componentProps, {
      clickable: "",
      onClick: l
    }), {
      default: le(() => [
        i.props.icon ? (te(), ve(je, {
          key: 0,
          side: ""
        }, {
          default: le(() => [
            ne(Se, {
              size: "16px",
              name: i.props.icon,
              color: i.props.color
            }, null, 8, ["name", "color"])
          ]),
          _: 1
        })) : Ce("", !0),
        i.props.label ? (te(), ve(je, {
          key: 1,
          class: Ot(n.value)
        }, {
          default: le(() => [
            Rt(vn(i.props.label), 1)
          ]),
          _: 1
        }, 8, ["class"])) : Ce("", !0),
        o.value.length ? (te(), ve(je, {
          key: 2,
          side: ""
        }, {
          default: le(() => [
            ne(Se, {
              size: "16px",
              name: "mdi-chevron-right"
            })
          ]),
          _: 1
        })) : Ce("", !0),
        o.value.length ? (te(), ve(vo, {
          key: 3,
          square: "",
          anchor: "top end",
          self: "top start",
          "no-focus": ""
        }, {
          default: le(() => [
            ne(ou, vt(i.listProps, { items: o.value }), null, 16, ["items"])
          ]),
          _: 1
        })) : Ce("", !0)
      ]),
      _: 1
    }, 16)), [
      [nu, !o.value.length]
    ]);
  }
}), ou = /* @__PURE__ */ ut({
  __name: "AppList",
  props: {
    items: {},
    props: { default: () => ({}) }
  },
  setup(e) {
    const t = e, n = d(() => t.items.filter(
      (l) => typeof l.visible == "boolean" ? l.visible : !0
    ));
    return (l, o) => (te(), ve(tu, vt({ style: { "min-width": "150px" } }, t.props), {
      default: le(() => [
        (te(!0), _e(Tt, null, fn(n.value, (i, a) => (te(), ve(lu, {
          "list-props": t.props,
          props: i,
          key: a
        }, null, 8, ["list-props", "props"]))), 128))
      ]),
      _: 1
    }, 16));
  }
});
export {
  ru as AppForm,
  ou as AppList,
  lu as AppListItem,
  Ja as AppModal,
  su as AppSelect,
  eu as appModalInjectionKey,
  cu as useAppModal,
  Wo as useForm
};
