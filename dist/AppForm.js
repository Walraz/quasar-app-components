import { computed as d, markRaw as Ll, defineComponent as rt, getCurrentInstance as ee, h as p, ref as A, toRaw as Te, withDirectives as kn, provide as Ol, onDeactivated as gt, onActivated as qn, onMounted as pt, nextTick as pe, watch as J, openBlock as te, createBlock as ve, unref as He, withCtx as le, renderSlot as tn, resolveDynamicComponent as Ot, createElementVNode as De, createElementBlock as _e, Fragment as Tt, renderList as fn, normalizeClass as Rt, mergeProps as at, toHandlers as Oo, createVNode as ne, createCommentVNode as Ce, reactive as Ro, inject as Po, onBeforeUnmount as de, onBeforeUpdate as Rl, Transition as Qe, onUnmounted as Ao, Teleport as Mo, onBeforeMount as Fo, onUpdated as zo, createTextVNode as Pt, shallowRef as Ho, toDisplayString as vn, normalizeProps as Io, guardReactiveProps as Do } from "vue";
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
const ie = (e) => Ll(rt(e)), Pl = (e) => Ll(e), jo = {
  true: "inset",
  item: "item-inset",
  "item-thumbnail": "item-thumbnail-inset"
}, nn = {
  xs: 2,
  sm: 4,
  md: 8,
  lg: 16,
  xl: 24
}, At = ie({
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
    const t = ee(), n = Ve(e, t.proxy.$q), l = d(() => e.vertical === !0 ? "vertical" : "horizontal"), o = d(() => ` q-separator--${l.value}`), i = d(() => e.inset !== !1 ? `${o.value}-${jo[e.inset]}` : ""), u = d(
      () => `q-separator${o.value}${i.value}` + (e.color !== void 0 ? ` bg-${e.color}` : "") + (n.value === !0 ? " q-separator--dark" : "")
    ), r = d(() => {
      const f = {};
      if (e.size !== void 0 && (f[e.vertical === !0 ? "width" : "height"] = e.size), e.spaced !== !1) {
        const g = e.spaced === !0 ? `${nn.md}px` : e.spaced in nn ? `${nn[e.spaced]}px` : e.spaced, s = e.vertical === !0 ? ["Left", "Right"] : ["Top", "Bottom"];
        f[`margin${s[0]}`] = f[`margin${s[1]}`] = g;
      }
      return f;
    });
    return () => p("hr", {
      class: u.value,
      style: r.value,
      "aria-orientation": l.value
    });
  }
}), No = (e) => {
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
      const g = f.safeParse(t.value);
      return g.success ? (i(g.data), !0) : (n.value = g.error.errors.reduce(
        (s, y) => (s[y.path.join(".")] = y.message, s),
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
function Wo() {
}
function Al(e) {
  return e.touches && e.touches[0] ? e = e.touches[0] : e.changedTouches && e.changedTouches[0] ? e = e.changedTouches[0] : e.targetTouches && e.targetTouches[0] && (e = e.targetTouches[0]), {
    top: e.clientY,
    left: e.clientX
  };
}
function Ko(e) {
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
function Mt(e, t) {
  const n = `__q_${t}_evt`;
  e[n] !== void 0 && (e[n].forEach((l) => {
    l[0].removeEventListener(l[1], e[l[2]], be[l[3]]);
  }), e[n] = void 0);
}
let Ie = [], ht = [];
function Ml(e) {
  ht = ht.filter((t) => t !== e);
}
function Qo(e) {
  Ml(e), ht.push(e);
}
function el(e) {
  Ml(e), ht.length === 0 && Ie.length !== 0 && (Ie[Ie.length - 1](), Ie = []);
}
function Ut(e) {
  ht.length === 0 ? e() : Ie.push(e);
}
function Uo(e) {
  Ie = Ie.filter((t) => t !== e);
}
function me(e, t) {
  return e !== void 0 && e() || t;
}
function Xo(e, t) {
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
function Yo(e, t) {
  return e === void 0 ? t : t !== void 0 ? t.concat(e()) : e();
}
function Go(e, t, n, l, o, i) {
  t.key = l + o;
  const u = p(e, t, n);
  return o === !0 ? kn(u, i()) : u;
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
    const l = ee(), o = A(null);
    let i = 0;
    const u = [];
    function r(c) {
      const h = typeof c == "boolean" ? c : e.noErrorFocus !== !0, b = ++i, v = (w, B) => {
        n("validation" + (w === !0 ? "Success" : "Error"), B);
      }, k = (w) => {
        const B = w.validate();
        return typeof B.then == "function" ? B.then(
          (x) => ({ valid: x, comp: w }),
          (x) => ({ valid: !1, comp: w, err: x })
        ) : Promise.resolve({ valid: B, comp: w });
      };
      return (e.greedy === !0 ? Promise.all(u.map(k)).then((w) => w.filter((B) => B.valid !== !0)) : u.reduce(
        (w, B) => w.then(() => k(B).then((x) => {
          if (x.valid === !1)
            return Promise.reject(x);
        })),
        Promise.resolve()
      ).catch((w) => [w])).then((w) => {
        if (w === void 0 || w.length === 0)
          return b === i && v(!0), !0;
        if (b === i) {
          const { comp: B, err: x } = w[0];
          if (x !== void 0 && console.error(x), v(!1, B), h === !0) {
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
    function g(c) {
      c !== void 0 && oe(c);
      const h = i + 1;
      r().then((b) => {
        h === i && b === !0 && (e.onSubmit !== void 0 ? n("submit", c) : c !== void 0 && c.target !== void 0 && typeof c.target.submit == "function" && c.target.submit());
      });
    }
    function s(c) {
      c !== void 0 && oe(c), n("reset"), pe(() => {
        f(), e.autofocus === !0 && e.noResetFocus !== !0 && y();
      });
    }
    function y() {
      Ut(() => {
        if (o.value === null)
          return;
        const c = o.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || o.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || o.value.querySelector("[autofocus], [data-autofocus]") || Array.prototype.find.call(o.value.querySelectorAll("[tabindex]"), (h) => h.tabIndex > -1);
        c != null && c.focus({ preventScroll: !0 });
      });
    }
    Ol(Fl, {
      bindComponent(c) {
        u.push(c);
      },
      unbindComponent(c) {
        const h = u.indexOf(c);
        h > -1 && u.splice(h, 1);
      }
    });
    let m = !1;
    return gt(() => {
      m = !0;
    }), qn(() => {
      m === !0 && e.autofocus === !0 && y();
    }), pt(() => {
      e.autofocus === !0 && y();
    }), Object.assign(l.proxy, {
      validate: r,
      resetValidation: f,
      submit: g,
      reset: s,
      focus: y,
      getValidationComponents: () => u
    }), () => p("form", {
      class: "q-form",
      ref: o,
      onSubmit: g,
      onReset: s
    }, me(t.default));
  }
}), Jo = {
  class: /* @__PURE__ */ Rt("row q-col-gutter-md")
}, ei = { class: "col" }, ti = {
  key: 0,
  class: "col-auto flex"
}, ru = /* @__PURE__ */ rt({
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
    }, { resetDefaultForm: u, validateForm: r, formData: f, fieldError: g } = No(
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
    const s = (v) => Jn(f.value, v), y = (v, k) => {
      Zn(
        f.value,
        k.scope,
        k != null && k.transform ? k == null ? void 0 : k.transform(v) : v
      ), g.value[k.scope] && r(n.modelSchema);
    }, m = () => {
      r(n.modelSchema), r(n.modelSchema) && t("submit", Te(f.value));
    }, c = () => {
      var v;
      u(), (v = l.value) == null || v.resetValidation(), t("reset");
    }, h = () => r(n.modelSchema), b = d(() => (v) => ({
      bind: {
        ...v.componentProps || {},
        readonly: n.readonly,
        disable: n.disable,
        modelValue: s(v.scope),
        error: !!g.value[v.scope],
        errorMessage: g.value[v.scope] || ""
      },
      on: {
        "update:modelValue": (k) => y(k, v)
      }
    }));
    return (v, k) => (te(), ve(He(Zo), {
      onValidationError: h,
      onSubmit: m,
      greedy: "",
      onReset: c,
      ref_key: "form",
      ref: l
    }, {
      default: le(() => [
        tn(v.$slots, "top"),
        (te(), ve(Ot(v.fieldWrapper), null, {
          default: le(() => [
            De("div", Jo, [
              (te(!0), _e(Tt, null, fn(He(o), (S) => (te(), _e(Tt, { key: S }, [
                De("div", ei, [
                  De("div", {
                    class: Rt(`row q-col-gutter-${v.colGutter}`)
                  }, [
                    (te(!0), _e(Tt, null, fn(v.schema.filter((w) => {
                      const B = w.column || 1;
                      return B > He(o) ? S === 1 : B === S;
                    }), (w) => (te(), _e("div", {
                      key: w.scope,
                      class: Rt(`col-${w.cols || "auto"}`)
                    }, [
                      tn(v.$slots, w.scope, {
                        props: {
                          setterScope: y,
                          getterScope: s,
                          scope: w.scope,
                          ...b.value(w)
                        }
                      }, () => [
                        (te(), ve(Ot(w.component), at(b.value(w).bind, Oo(b.value(w).on)), null, 16))
                      ])
                    ], 2))), 128))
                  ], 2)
                ]),
                S !== He(o) ? (te(), _e("div", ti, [
                  ne(At, { vertical: "" })
                ])) : Ce("", !0)
              ], 64))), 128))
            ])
          ]),
          _: 3
        })),
        tn(v.$slots, "bottom")
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
}, ni = new RegExp("^(" + Object.keys(Hl).join("|") + ")"), li = new RegExp("^(" + Object.keys(Il).join("|") + ")"), ll = new RegExp("^(" + Object.keys(Dl).join("|") + ")"), oi = /^[Mm]\s?[-+]?\.?\d/, ii = /^img:/, ai = /^svguse:/, ui = /^ion-/, ri = /^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /, Se = ie({
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
      if (oi.test(r) === !0) {
        const [s, y = tl] = r.split("|");
        return {
          svg: !0,
          viewBox: y,
          nodes: s.split("&&").map((m) => {
            const [c, h, b] = m.split("@@");
            return p("path", { style: h, d: c, transform: b });
          })
        };
      }
      if (ii.test(r) === !0)
        return {
          img: !0,
          src: r.substring(4)
        };
      if (ai.test(r) === !0) {
        const [s, y = tl] = r.split("|");
        return {
          svguse: !0,
          src: s.substring(7),
          viewBox: y
        };
      }
      let f = " ";
      const g = r.match(ni);
      if (g !== null)
        u = Hl[g[1]](r);
      else if (ri.test(r) === !0)
        u = r;
      else if (ui.test(r) === !0)
        u = `ionicons ion-${n.platform.is.ios === !0 ? "ios" : "md"}${r.substring(3)}`;
      else if (ll.test(r) === !0) {
        u = "notranslate material-symbols";
        const s = r.match(ll);
        s !== null && (r = r.substring(6), u += Dl[s[1]]), f = r;
      } else {
        u = "notranslate material-icons";
        const s = r.match(li);
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
      return i.value.none === !0 ? p(e.tag, u, me(t.default)) : i.value.img === !0 ? p("span", u, Ee(t.default, [
        p("img", { src: i.value.src })
      ])) : i.value.svg === !0 ? p("span", u, Ee(t.default, [
        p("svg", {
          viewBox: i.value.viewBox || "0 0 24 24"
        }, i.value.nodes)
      ])) : i.value.svguse === !0 ? p("span", u, Ee(t.default, [
        p("svg", {
          viewBox: i.value.viewBox
        }, [
          p("use", { "xlink:href": i.value.src })
        ])
      ])) : (i.value.cls !== void 0 && (u.class += " " + i.value.cls), p(e.tag, u, Ee(t.default, [
        i.value.content
      ])));
    };
  }
});
function si(e, t) {
  const n = A(null), l = d(() => e.disable === !0 ? null : p("span", {
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
function ci(e = {}) {
  return (t, n, l) => {
    t[n](
      p("input", {
        class: "hidden" + (l || ""),
        ...e.value
      })
    );
  };
}
function di(e) {
  return d(() => e.name || e.for);
}
const fi = {
  xs: 30,
  sm: 35,
  md: 40,
  lg: 50,
  xl: 60
}, vi = {
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
}, mi = ["update:modelValue"];
function hi(e, t) {
  const { props: n, slots: l, emit: o, proxy: i } = ee(), { $q: u } = i, r = Ve(n, u), f = A(null), { refocusTargetEl: g, refocusTarget: s } = si(n, f), y = yt(n, fi), m = d(
    () => n.val !== void 0 && Array.isArray(n.modelValue)
  ), c = d(() => {
    const z = Te(n.val);
    return m.value === !0 ? n.modelValue.findIndex((X) => Te(X) === z) : -1;
  }), h = d(() => m.value === !0 ? c.value > -1 : Te(n.modelValue) === Te(n.trueValue)), b = d(() => m.value === !0 ? c.value === -1 : Te(n.modelValue) === Te(n.falseValue)), v = d(
    () => h.value === !1 && b.value === !1
  ), k = d(() => n.disable === !0 ? -1 : n.tabindex || 0), S = d(
    () => `q-${e} cursor-pointer no-outline row inline no-wrap items-center` + (n.disable === !0 ? " disabled" : "") + (r.value === !0 ? ` q-${e}--dark` : "") + (n.dense === !0 ? ` q-${e}--dense` : "") + (n.leftLabel === !0 ? " reverse" : "")
  ), w = d(() => {
    const z = h.value === !0 ? "truthy" : b.value === !0 ? "falsy" : "indet", X = n.color !== void 0 && (n.keepColor === !0 || (e === "toggle" ? h.value === !0 : b.value !== !0)) ? ` text-${n.color}` : "";
    return `q-${e}__inner relative-position non-selectable q-${e}__inner--${z}${X}`;
  }), B = d(() => {
    const z = { type: "checkbox" };
    return n.name !== void 0 && Object.assign(z, {
      // see https://vuejs.org/guide/extras/render-function.html#creating-vnodes (.prop)
      ".checked": h.value,
      "^checked": h.value === !0 ? "checked" : void 0,
      name: n.name,
      value: m.value === !0 ? n.val : n.trueValue
    }), z;
  }), x = ci(B), M = d(() => {
    const z = {
      tabindex: k.value,
      role: e === "toggle" ? "switch" : "checkbox",
      "aria-label": n.label,
      "aria-checked": v.value === !0 ? "mixed" : h.value === !0 ? "true" : "false"
    };
    return n.disable === !0 && (z["aria-disabled"] = "true"), z;
  });
  function O(z) {
    z !== void 0 && (oe(z), s(z)), n.disable !== !0 && o("update:modelValue", I(), z);
  }
  function I() {
    if (m.value === !0) {
      if (h.value === !0) {
        const z = n.modelValue.slice();
        return z.splice(c.value, 1), z;
      }
      return n.modelValue.concat([n.val]);
    }
    if (h.value === !0) {
      if (n.toggleOrder !== "ft" || n.toggleIndeterminate === !1)
        return n.falseValue;
    } else if (b.value === !0) {
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
  const W = t(h, v);
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
        style: y.value,
        "aria-hidden": "true"
      }, z)
    ];
    g.value !== null && X.push(g.value);
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
const gi = p("div", {
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
]), pi = ie({
  name: "QCheckbox",
  props: vi,
  emits: mi,
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
      ] : [gi];
    }
    return hi("checkbox", t);
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
function bi(e, t) {
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
function yi(e, t) {
  return Array.isArray(e) === !0 ? al(e, t) : Array.isArray(t) === !0 ? al(t, e) : e === t;
}
function wi(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (yi(e[n], t[n]) === !1)
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
  const n = ee(), { props: l, proxy: o, emit: i } = n, u = zl(n), r = d(() => l.disable !== !0 && l.href !== void 0), f = t === !0 ? d(
    () => u === !0 && l.disable !== !0 && r.value !== !0 && l.to !== void 0 && l.to !== null && l.to !== ""
  ) : d(
    () => u === !0 && r.value !== !0 && l.to !== void 0 && l.to !== null && l.to !== ""
  ), g = d(() => f.value === !0 ? S(l.to) : null), s = d(() => g.value !== null), y = d(() => r.value === !0 || s.value === !0), m = d(() => l.type === "a" || y.value === !0 ? "a" : l.tag || e || "div"), c = d(() => r.value === !0 ? {
    href: l.href,
    target: l.target
  } : s.value === !0 ? {
    href: g.value.href,
    target: l.target
  } : {}), h = d(() => {
    if (s.value === !1)
      return -1;
    const { matched: x } = g.value, { length: M } = x, O = x[M - 1];
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
  }), b = d(
    () => s.value === !0 && h.value !== -1 && bi(o.$route.params, g.value.params)
  ), v = d(
    () => b.value === !0 && h.value === o.$route.matched.length - 1 && wi(o.$route.params, g.value.params)
  ), k = d(() => s.value === !0 ? v.value === !0 ? ` ${l.exactActiveClass} ${l.activeClass}` : l.exact === !0 ? "" : b.value === !0 ? ` ${l.activeClass}` : "" : "");
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
    hasLink: y,
    linkTag: m,
    resolvedLink: g,
    linkIsActive: b,
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
    const { proxy: { $q: l } } = ee(), o = Ve(e, l), { hasLink: i, linkAttrs: u, linkClass: r, linkTag: f, navigateOnClick: g } = Wl(), s = A(null), y = A(null), m = d(
      () => e.clickable === !0 || i.value === !0 || e.tag === "label"
    ), c = d(
      () => e.disable !== !0 && m.value === !0
    ), h = d(
      () => "q-item q-item-type row no-wrap" + (e.dense === !0 ? " q-item--dense" : "") + (o.value === !0 ? " q-item--dark" : "") + (i.value === !0 && e.active === null ? r.value : e.active === !0 ? ` q-item--active${e.activeClass !== void 0 ? ` ${e.activeClass}` : ""}` : "") + (e.disable === !0 ? " disabled" : "") + (c.value === !0 ? " q-item--clickable q-link cursor-pointer " + (e.manualFocus === !0 ? "q-manual-focusable" : "q-focusable q-hoverable") + (e.focused === !0 ? " q-manual-focusable--focused" : "") : "")
    ), b = d(() => e.insetLevel === void 0 ? null : {
      ["padding" + (l.lang.rtl === !0 ? "Right" : "Left")]: 16 + e.insetLevel * 56 + "px"
    });
    function v(w) {
      c.value === !0 && (y.value !== null && (w.qKeyEvent !== !0 && document.activeElement === s.value ? y.value.focus() : document.activeElement === y.value && s.value.focus()), g(w));
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
      const w = Xo(t.default, []);
      return c.value === !0 && w.unshift(
        p("div", { class: "q-focus-helper", tabindex: -1, ref: y })
      ), w;
    }
    return () => {
      const w = {
        ref: s,
        class: h.value,
        style: b.value,
        role: "listitem",
        onClick: v,
        onKeyup: k
      };
      return c.value === !0 ? (w.tabindex = e.tabindex || "0", Object.assign(w, u.value)) : m.value === !0 && (w["aria-disabled"] = "true"), p(
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
const zt = A(
  !1
);
let En;
function Si(e, t) {
  const n = /(edg|edge|edga|edgios)\/([\w.]+)/.exec(e) || /(opr)[\/]([\w.]+)/.exec(e) || /(vivaldi)[\/]([\w.]+)/.exec(e) || /(chrome|crios)[\/]([\w.]+)/.exec(e) || /(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(firefox|fxios)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[\/]([\w.]+)/.exec(e) || [];
  return {
    browser: n[5] || n[3] || n[1] || "",
    version: n[2] || n[4] || "0",
    versionNumber: n[4] || n[2] || "0",
    platform: t[0] || ""
  };
}
function xi(e) {
  return /(ipad)/.exec(e) || /(ipod)/.exec(e) || /(windows phone)/.exec(e) || /(iphone)/.exec(e) || /(kindle)/.exec(e) || /(silk)/.exec(e) || /(android)/.exec(e) || /(win)/.exec(e) || /(mac)/.exec(e) || /(linux)/.exec(e) || /(cros)/.exec(e) || /(playbook)/.exec(e) || /(bb)/.exec(e) || /(blackberry)/.exec(e) || [];
}
const Ql = "ontouchstart" in window || window.navigator.maxTouchPoints > 0;
function ki(e) {
  En = { is: { ...e } }, delete e.mac, delete e.desktop;
  const t = Math.min(window.innerHeight, window.innerWidth) > 414 ? "ipad" : "iphone";
  Object.assign(e, {
    mobile: !0,
    ios: !0,
    platform: t,
    [t]: !0
  });
}
function qi(e) {
  const t = e.toLowerCase(), n = xi(t), l = Si(t, n), o = {};
  l.browser && (o[l.browser] = !0, o.version = l.version, o.versionNumber = parseInt(l.versionNumber, 10)), l.platform && (o[l.platform] = !0);
  const i = o.android || o.ios || o.bb || o.blackberry || o.ipad || o.iphone || o.ipod || o.kindle || o.playbook || o.silk || o["windows phone"];
  return i === !0 || t.indexOf("mobile") > -1 ? (o.mobile = !0, o.edga || o.edgios ? (o.edge = !0, l.browser = "edge") : o.crios ? (o.chrome = !0, l.browser = "chrome") : o.fxios && (o.firefox = !0, l.browser = "firefox")) : o.desktop = !0, (o.ipod || o.ipad || o.iphone) && (o.ios = !0), o["windows phone"] && (o.winphone = !0, delete o["windows phone"]), (o.chrome || o.opr || o.safari || o.vivaldi || o.mobile === !0 && o.ios !== !0 && i !== !0) && (o.webkit = !0), o.edg && (l.browser = "edgechromium", o.edgeChromium = !0), (o.safari && o.blackberry || o.bb) && (l.browser = "blackberry", o.blackberry = !0), o.safari && o.playbook && (l.browser = "playbook", o.playbook = !0), o.opr && (l.browser = "opera", o.opera = !0), o.safari && o.android && (l.browser = "android", o.android = !0), o.safari && o.kindle && (l.browser = "kindle", o.kindle = !0), o.safari && o.silk && (l.browser = "silk", o.silk = !0), o.vivaldi && (l.browser = "vivaldi", o.vivaldi = !0), o.name = l.browser, o.platform = l.platform, t.indexOf("electron") > -1 ? o.electron = !0 : document.location.href.indexOf("-extension://") > -1 ? o.bex = !0 : (window.Capacitor !== void 0 ? (o.capacitor = !0, o.nativeMobile = !0, o.nativeMobileWrapper = "capacitor") : (window._cordovaNative !== void 0 || window.cordova !== void 0) && (o.cordova = !0, o.nativeMobile = !0, o.nativeMobileWrapper = "cordova"), Ql === !0 && o.mac === !0 && (o.desktop === !0 && o.safari === !0 || o.nativeMobile === !0 && o.android !== !0 && o.ios !== !0 && o.ipad !== !0) && ki(o)), o;
}
const ul = navigator.userAgent || navigator.vendor || window.opera, Ci = {
  has: {
    touch: !1,
    webStorage: !1
  },
  within: { iframe: !1 }
}, he = {
  userAgent: ul,
  is: qi(ul),
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
    }), t.platform = Ro(this)) : t.platform = this;
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
  }), he.is.ios === !0 && window.navigator.vendor.toLowerCase().indexOf("apple"), zt.value === !0 ? Object.assign(gn, he, En, Ci) : Object.assign(gn, he);
}
const _i = {
  size: {
    type: [Number, String],
    default: "1em"
  },
  color: String
};
function Ei(e) {
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
    ..._i,
    thickness: {
      type: Number,
      default: 5
    }
  },
  setup(e) {
    const { cSize: t, classes: n } = Ei(e);
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
function Bi({ validate: e, resetValidation: t, requiresQForm: n }) {
  const l = Po(Fl, !1);
  if (l !== !1) {
    const { props: o, proxy: i } = ee();
    Object.assign(i, { validate: e, resetValidation: t }), J(() => o.disable, (u) => {
      u === !0 ? (typeof t == "function" && t(), l.unbindComponent(i)) : l.bindComponent(i);
    }), pt(() => {
      o.disable !== !0 && l.bindComponent(i);
    }), de(() => {
      o.disable !== !0 && l.unbindComponent(i);
    });
  } else
    n === !0 && console.error("Parent QForm not found on useFormChild()!");
}
const rl = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/, sl = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/, cl = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/, Ct = /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/, _t = /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/, on = {
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
    const i = arguments, u = () => {
      l = null, n !== !0 && e.apply(this, i);
    };
    l !== null ? clearTimeout(l) : n === !0 && e.apply(this, i), l = setTimeout(u, t);
  }
  return o.cancel = () => {
    l !== null && clearTimeout(l);
  }, o;
}
const Vi = [!0, !1, "ondemand"], $i = {
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
    validator: (e) => Vi.includes(e)
  }
};
function Ti(e, t) {
  const { props: n, proxy: l } = ee(), o = A(!1), i = A(null), u = A(null);
  Bi({ validate: h, resetValidation: c });
  let r = 0, f;
  const g = d(
    () => n.rules !== void 0 && n.rules !== null && n.rules.length !== 0
  ), s = d(
    () => n.disable !== !0 && g.value === !0
  ), y = d(
    () => n.error === !0 || o.value === !0
  ), m = d(() => typeof n.errorMessage == "string" && n.errorMessage.length !== 0 ? n.errorMessage : i.value);
  J(() => n.modelValue, () => {
    b();
  }), J(() => n.reactiveRules, (k) => {
    k === !0 ? f === void 0 && (f = J(() => n.rules, () => {
      b(!0);
    })) : f !== void 0 && (f(), f = void 0);
  }, { immediate: !0 }), J(e, (k) => {
    k === !0 ? u.value === null && (u.value = !1) : u.value === !1 && (u.value = !0, s.value === !0 && n.lazyRules !== "ondemand" && t.value === !1 && v());
  });
  function c() {
    r++, t.value = !1, u.value = null, o.value = !1, i.value = null, v.cancel();
  }
  function h(k = n.modelValue) {
    if (s.value !== !0)
      return !0;
    const S = ++r, w = t.value !== !0 ? () => {
      u.value = !0;
    } : () => {
    }, B = (M, O) => {
      M === !0 && w(), o.value = M, i.value = O || null, t.value = !1;
    }, x = [];
    for (let M = 0; M < n.rules.length; M++) {
      const O = n.rules[M];
      let I;
      if (typeof O == "function" ? I = O(k, on) : typeof O == "string" && on[O] !== void 0 && (I = on[O](k)), I === !1 || typeof I == "string")
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
  function b(k) {
    s.value === !0 && n.lazyRules !== "ondemand" && (u.value === !0 || n.lazyRules !== !0 && k !== !0) && v();
  }
  const v = Xl(h, 0);
  return de(() => {
    f !== void 0 && f(), v.cancel();
  }), Object.assign(l, { resetValidation: c, validate: h }), _n(l, "hasError", () => y.value), {
    isDirtyModel: u,
    hasRules: g,
    hasError: y,
    errorMessage: m,
    validate: h,
    resetValidation: c
  };
}
const dl = /^on[A-Z]/;
function Li(e, t) {
  const n = {
    listeners: A({}),
    attributes: A({})
  };
  function l() {
    const o = {}, i = {};
    for (const u in e)
      u !== "class" && u !== "style" && dl.test(u) === !1 && (o[u] = e[u]);
    for (const u in t.props)
      dl.test(u) === !0 && (i[u] = t.props[u]);
    n.attributes.value = o, n.listeners.value = i;
  }
  return Rl(l), l(), n;
}
let an, Et = 0;
const ce = new Array(256);
for (let e = 0; e < 256; e++)
  ce[e] = (e + 256).toString(16).substring(1);
const Oi = (() => {
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
  (an === void 0 || Et + 16 > fl) && (Et = 0, an = Oi(fl));
  const e = Array.prototype.slice.call(an, Et, Et += 16);
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
  ...$i,
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
    splitAttrs: Li(t, l),
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
  const { props: t, emit: n, slots: l, attrs: o, proxy: i } = ee(), { $q: u } = i;
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
    hasRules: g,
    hasError: s,
    errorMessage: y,
    resetValidation: m
  } = Ti(e.focused, e.innerLoading), c = e.floatingLabel !== void 0 ? d(() => t.stackLabel === !0 || e.focused.value === !0 || e.floatingLabel.value === !0) : d(() => t.stackLabel === !0 || e.focused.value === !0 || e.hasValue.value === !0), h = d(
    () => t.bottomSlots === !0 || t.hint !== void 0 || g.value === !0 || t.counter === !0 || t.error !== null
  ), b = d(() => t.filled === !0 ? "filled" : t.outlined === !0 ? "outlined" : t.borderless === !0 ? "borderless" : t.standout ? "standout" : "standard"), v = d(
    () => `q-field row no-wrap items-start q-field--${b.value}` + (e.fieldClass !== void 0 ? ` ${e.fieldClass.value}` : "") + (t.rounded === !0 ? " q-field--rounded" : "") + (t.square === !0 ? " q-field--square" : "") + (c.value === !0 ? " q-field--float" : "") + (S.value === !0 ? " q-field--labeled" : "") + (t.dense === !0 ? " q-field--dense" : "") + (t.itemAligned === !0 ? " q-field--item-aligned q-item-type" : "") + (e.isDark.value === !0 ? " q-field--dark" : "") + (e.getControl === void 0 ? " q-field--auto-height" : "") + (e.focused.value === !0 ? " q-field--focused" : "") + (s.value === !0 ? " q-field--error" : "") + (s.value === !0 || e.focused.value === !0 ? " q-field--highlighted" : "") + (t.hideBottomSpace !== !0 && h.value === !0 ? " q-field--with-bottom" : "") + (t.disable === !0 ? " q-field--disabled" : t.readonly === !0 ? " q-field--readonly" : "")
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
    Ut(M);
  }
  function I() {
    Uo(M);
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
      m(), u.platform.is.mobile !== !0 && (f.value = !1);
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
        p(Se, { name: u.iconSet.field.error, color: "negative" })
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
          name: t.clearIcon || u.iconSet.field.clear,
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
    s.value === !0 ? y.value !== null ? ($ = [p("div", { role: "alert" }, y.value)], N = `q--slot-error-${y.value}`) : ($ = me(l.error), N = "q--slot-error") : (t.hideHint !== !0 || e.focused.value === !0) && (t.hint !== void 0 ? ($ = [p("div", t.hint)], N = `q--slot-hint-${t.hint}`) : ($ = me(l.hint), N = "q--slot-hint"));
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
    zt.value === !0 && t.for === void 0 && (e.targetUid.value = pn()), t.autofocus === !0 && i.focus();
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
        h.value === !0 ? T() : null
      ]),
      l.after !== void 0 ? p("div", {
        class: "q-field__after q-field__marginal row no-wrap items-center",
        onClick: ke
      }, l.after()) : null
    ]);
  };
}
const Pi = ie({
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
function Ai(e) {
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
function Mi(e, t = 250) {
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
  const u = document.createElement("span"), r = document.createElement("span"), f = Al(e), { left: g, top: s, width: y, height: m } = t.getBoundingClientRect(), c = Math.sqrt(y * y + m * m), h = c / 2, b = `${(y - c) / 2}px`, v = i ? b : `${f.left - g - h}px`, k = `${(m - c) / 2}px`, S = i ? k : `${f.top - s - h}px`;
  r.className = "q-ripple__inner", yn(r, {
    height: `${c}px`,
    width: `${c}px`,
    transform: `translate3d(${v},${S},0) scale3d(.2,.2,1)`,
    opacity: 0
  }), u.className = `q-ripple${o ? " text-" + o : ""}`, u.setAttribute("dir", "ltr"), u.appendChild(r), t.appendChild(u);
  const w = () => {
    u.remove(), clearTimeout(B);
  };
  n.abort.push(w);
  let B = setTimeout(() => {
    r.classList.add("q-ripple__inner--enter"), r.style.transform = `translate3d(${b},${k},0) scale3d(1,1,1)`, r.style.opacity = 0.2, B = setTimeout(() => {
      r.classList.remove("q-ripple__inner--enter"), r.classList.add("q-ripple__inner--leave"), r.style.opacity = 0, B = setTimeout(() => {
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
        keystart: Mi((o) => {
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
      }), Mt(t, "main"), delete e._qripple);
    }
  }
), Fi = {
  xs: 8,
  sm: 10,
  md: 14,
  lg: 20,
  xl: 24
}, zi = ie({
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
    const { proxy: { $q: l } } = ee(), o = Ve(e, l), i = yt(e, Fi), u = d(() => e.selected === !0 || e.icon !== void 0), r = d(() => e.selected === !0 ? e.iconSelected || l.iconSet.chip.selected : e.icon), f = d(() => e.iconRemove || l.iconSet.chip.remove), g = d(
      () => e.disable === !1 && (e.clickable === !0 || e.selected !== null)
    ), s = d(() => {
      const v = e.outline === !0 && e.color || e.textColor;
      return "q-chip row inline no-wrap items-center" + (e.outline === !1 && e.color !== void 0 ? ` bg-${e.color}` : "") + (v ? ` text-${v} q-chip--colored` : "") + (e.disable === !0 ? " disabled" : "") + (e.dense === !0 ? " q-chip--dense" : "") + (e.outline === !0 ? " q-chip--outline" : "") + (e.selected === !0 ? " q-chip--selected" : "") + (g.value === !0 ? " q-chip--clickable cursor-pointer non-selectable q-hoverable" : "") + (e.square === !0 ? " q-chip--square" : "") + (o.value === !0 ? " q-chip--dark q-dark" : "");
    }), y = d(() => {
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
    function h(v) {
      (v.keyCode === void 0 || v.keyCode === 13) && (oe(v), e.disable === !1 && (n("update:modelValue", !1), n("remove")));
    }
    function b() {
      const v = [];
      g.value === !0 && v.push(
        p("div", { class: "q-focus-helper" })
      ), u.value === !0 && v.push(
        p(Se, {
          class: "q-chip__icon q-chip__icon--left",
          name: r.value
        })
      );
      const k = e.label !== void 0 ? [p("div", { class: "ellipsis" }, [e.label])] : void 0;
      return v.push(
        p("div", {
          class: "q-chip__content col row no-wrap items-center q-anchor--skip"
        }, Yo(t.default, k))
      ), e.iconRight && v.push(
        p(Se, {
          class: "q-chip__icon q-chip__icon--right",
          name: e.iconRight
        })
      ), e.removable === !0 && v.push(
        p(Se, {
          class: "q-chip__icon q-chip__icon--remove cursor-pointer",
          name: f.value,
          ...y.value.remove,
          onClick: h,
          onKeyup: h
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
      return g.value === !0 && Object.assign(
        v,
        y.value.chip,
        { onClick: c, onKeyup: m }
      ), Go(
        "div",
        v,
        b(),
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
  const { props: l, proxy: o, emit: i } = ee(), u = A(null);
  let r = null;
  function f(c) {
    return u.value === null ? !1 : c === void 0 || c.touches === void 0 || c.touches.length <= 1;
  }
  const g = {};
  n === void 0 && (Object.assign(g, {
    hide(c) {
      o.hide(c);
    },
    toggle(c) {
      o.toggle(c), c.qAnchorHandled = !0;
    },
    toggleKey(c) {
      Re(c, 13) === !0 && g.toggle(c);
    },
    contextClick(c) {
      o.hide(c), ke(c), pe(() => {
        o.show(c), c.qAnchorHandled = !0;
      });
    },
    prevent: ke,
    mobileTouch(c) {
      if (g.mobileCleanup(c), f(c) !== !0)
        return;
      o.hide(c), u.value.classList.add("non-selectable");
      const h = c.target;
      mt(g, "anchor", [
        [h, "touchmove", "mobileCleanup", "passive"],
        [h, "touchend", "mobileCleanup", "passive"],
        [h, "touchcancel", "mobileCleanup", "passive"],
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
    let h;
    c === !0 ? o.$q.platform.is.mobile === !0 ? h = [
      [u.value, "touchstart", "mobileTouch", "passive"]
    ] : h = [
      [u.value, "mousedown", "hide", "passive"],
      [u.value, "contextmenu", "contextClick", "notPassive"]
    ] : h = [
      [u.value, "click", "toggle", "passive"],
      [u.value, "keyup", "toggleKey", "passive"]
    ], mt(g, "anchor", h);
  });
  function s() {
    Mt(g, "anchor");
  }
  function y(c) {
    for (u.value = c; u.value.classList.contains("q-anchor--skip"); )
      u.value = u.value.parentNode;
    n();
  }
  function m() {
    if (l.target === !1 || l.target === "" || o.$el.parentNode === null)
      u.value = null;
    else if (l.target === !0)
      y(o.$el.parentNode);
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
    u.value !== null && s(), m();
  }), J(() => l.noParentEvent, (c) => {
    u.value !== null && (c === !0 ? s() : n());
  }), pt(() => {
    m(), t !== !0 && l.modelValue === !0 && u.value === null && i("update:modelValue", !1);
  }), de(() => {
    r !== null && clearTimeout(r), s();
  }), {
    anchorEl: u,
    canShow: f,
    anchorEvents: g
  };
}
function lo(e, t) {
  const n = A(null);
  let l;
  function o(r, f) {
    const g = `${f !== void 0 ? "add" : "remove"}EventListener`, s = f !== void 0 ? f : l;
    r !== window && r[g]("scroll", s, be.passive), window[g]("scroll", s, be.passive), l = f;
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
  const u = ee(), { props: r, emit: f, proxy: g } = u;
  let s;
  function y(S) {
    e.value === !0 ? h(S) : m(S);
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
  function h(S) {
    if (r.disable === !0)
      return;
    const w = r["onUpdate:modelValue"] !== void 0;
    w === !0 && (f("update:modelValue", !1), s = S, pe(() => {
      s === S && (s = void 0);
    })), (r.modelValue === null || w === !1) && b(S);
  }
  function b(S) {
    e.value !== !1 && (e.value = !1, f("beforeHide", S), o !== void 0 ? o(S) : f("hide", S));
  }
  function v(S) {
    r.disable === !0 && S === !0 ? r["onUpdate:modelValue"] !== void 0 && f("update:modelValue", !1) : S === !0 !== e.value && (S === !0 ? c : b)(s);
  }
  J(() => r.modelValue, v), n !== void 0 && zl(u) === !0 && J(() => g.$route.fullPath, () => {
    n.value === !0 && e.value === !0 && h();
  }), i === !0 && pt(() => {
    v(r.modelValue);
  });
  const k = { show: m, hide: h, toggle: y };
  return Object.assign(g, k), k;
}
const hl = {};
let Hi = 1, Ii = document.body;
function Di(e, t) {
  const n = document.createElement("div");
  if (n.id = t !== void 0 ? `q-portal--${t}--${Hi++}` : e, hl.globalNodes !== void 0) {
    const l = hl.globalNodes.class;
    l !== void 0 && (n.className = l);
  }
  return Ii.appendChild(n), n;
}
function ji(e) {
  e.remove();
}
const ot = [];
function Ni(e) {
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
function Wi(e, t, n) {
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
function Ki(e) {
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
  let u = null;
  const r = {}, f = l === "dialog" && Ki(e);
  function g(y) {
    if (y === !0) {
      el(r), i.value = !0;
      return;
    }
    i.value = !1, o.value === !1 && (f === !1 && u === null && (u = Di(!1, l)), o.value = !0, ot.push(e.proxy), Qo(r));
  }
  function s(y) {
    if (i.value = !1, y !== !0)
      return;
    el(r), o.value = !1;
    const m = ot.indexOf(e.proxy);
    m !== -1 && ot.splice(m, 1), u !== null && (ji(u), u = null);
  }
  return Ao(() => {
    s(!0);
  }), e.proxy.__qPortal = !0, _n(e.proxy, "contentEl", () => t.value), {
    showPortal: g,
    hidePortal: s,
    portalIsActive: o,
    portalIsAccessible: i,
    renderPortal: () => f === !0 ? n() : o.value === !0 ? [p(Mo, { to: u }, n())] : void 0
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
const Qi = [null, document, document.body, document.scrollingElement, document.documentElement];
function io(e, t) {
  let n = Ai(t);
  if (n === void 0) {
    if (e == null)
      return window;
    n = e.closest(".scroll,.scroll-y,.overflow-auto");
  }
  return Qi.includes(n) ? window : n;
}
function Ui(e) {
  return e === window ? window.pageYOffset || window.scrollY || document.body.scrollTop || 0 : e.scrollTop;
}
function Xi(e) {
  return e === window ? window.pageXOffset || window.scrollX || document.body.scrollLeft || 0 : e.scrollLeft;
}
let Bt;
function Yi() {
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
function Gi(e, t = !0) {
  return !e || e.nodeType !== Node.ELEMENT_NODE ? !1 : t ? e.scrollHeight > e.clientHeight && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-y"])) : e.scrollWidth > e.clientWidth && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-x"]));
}
const Ne = [];
let ut;
function Zi(e) {
  ut = e.keyCode === 27;
}
function Ji() {
  ut === !0 && (ut = !1);
}
function ea(e) {
  ut === !0 && (ut = !1, Re(e, 27) === !0 && Ne[Ne.length - 1](e));
}
function ao(e) {
  window[e]("keydown", Zi), window[e]("blur", Ji), window[e]("keyup", ea), ut = !1;
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
function ta(e, t) {
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
function na(e, t, n) {
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
function la(e, t) {
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
    cover: g,
    maxHeight: s,
    maxWidth: y
  } = e;
  if (he.is.ios === !0 && window.visualViewport !== void 0) {
    const M = document.body.style, { offsetLeft: O, offsetTop: I } = window.visualViewport;
    O !== gl && (M.setProperty("--q-pe-left", O + "px"), gl = O), I !== pl && (M.setProperty("--q-pe-top", I + "px"), pl = I);
  }
  const { scrollLeft: m, scrollTop: c } = n, h = r === void 0 ? ta(o, g === !0 ? [0, 0] : l) : na(o, r, l);
  Object.assign(n.style, {
    top: 0,
    left: 0,
    minWidth: null,
    minHeight: null,
    maxWidth: y || "100vw",
    maxHeight: s || "100vh",
    visibility: "visible"
  });
  const { offsetWidth: b, offsetHeight: v } = n, { elWidth: k, elHeight: S } = f === !0 || g === !0 ? { elWidth: Math.max(h.width, b), elHeight: g === !0 ? Math.max(h.height, v) : v } : { elWidth: b, elHeight: v };
  let w = { maxWidth: y, maxHeight: s };
  (f === !0 || g === !0) && (w.minWidth = h.width + "px", g === !0 && (w.minHeight = h.height + "px")), Object.assign(n.style, w);
  const B = la(k, S);
  let x = bl(h, B, i, u);
  if (r === void 0 || l === void 0)
    un(x, h, B, i, u);
  else {
    const { top: M, left: O } = x;
    un(x, h, B, i, u);
    let I = !1;
    if (x.top !== M) {
      I = !0;
      const K = 2 * l[1];
      h.center = h.top -= K, h.bottom -= K + 2;
    }
    if (x.left !== O) {
      I = !0;
      const K = 2 * l[0];
      h.middle = h.left -= K, h.right -= K + 2;
    }
    I === !0 && (x = bl(h, B, i, u), un(x, h, B, i, u));
  }
  w = {
    top: x.top + "px",
    left: x.left + "px"
  }, x.maxHeight !== void 0 && (w.maxHeight = x.maxHeight + "px", h.height > x.maxHeight && (w.minHeight = w.maxHeight)), x.maxWidth !== void 0 && (w.maxWidth = x.maxWidth + "px", h.width > x.maxWidth && (w.minWidth = w.maxWidth)), Object.assign(n.style, w), n.scrollTop !== c && (n.scrollTop = c), n.scrollLeft !== m && (n.scrollLeft = m);
}
function un(e, t, n, l, o) {
  const i = n.bottom, u = n.right, r = Yi(), f = window.innerHeight - r, g = document.body.clientWidth;
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
  if (e.left < 0 || e.left + u > g)
    if (e.maxWidth = Math.min(u, g), o.horizontal === "middle")
      e.left = t[l.horizontal] > g / 2 ? Math.max(0, g - u) : 0;
    else if (t[l.horizontal] > g / 2) {
      const s = Math.min(
        g,
        l.horizontal === "middle" ? t.middle : l.horizontal === o.horizontal ? t.right : t.left
      );
      e.maxWidth = Math.min(u, s), e.left = Math.max(0, s - e.maxWidth);
    } else
      e.left = Math.max(
        0,
        l.horizontal === "middle" ? t.middle : l.horizontal === o.horizontal ? t.left : t.right
      ), e.maxWidth = Math.min(u, g - e.left);
}
const oa = ie({
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
    const f = ee(), { proxy: g } = f, { $q: s } = g, y = A(null), m = A(!1), c = d(
      () => e.persistent !== !0 && e.noRouteDismiss !== !0
    ), h = Ve(e, s), { registerTick: b, removeTick: v } = Pn(), { registerTimeout: k } = An(), { transitionProps: S, transitionStyle: w } = Rn(e), { localScrollTarget: B, changeScrollEvent: x, unconfigureScrollTarget: M } = lo(e, L), { anchorEl: O, canShow: I } = no({ showing: m }), { hide: K } = Tn({
      showing: m,
      canShow: I,
      handleShow: C,
      handleHide: _,
      hideOnRouteChange: c,
      processOnMount: !0
    }), { showPortal: Z, hidePortal: W, renderPortal: z } = Ln(f, y, ae, "menu"), X = {
      anchorEl: O,
      innerRef: y,
      onClickOutside(q) {
        if (e.persistent !== !0 && m.value === !0)
          return K(q), // always prevent touch event
          (q.type === "touchstart" || q.target.classList.contains("q-dialog__backdrop")) && oe(q), !0;
      }
    }, T = d(
      () => Wt(
        e.anchor || (e.cover === !0 ? "center middle" : "bottom start"),
        s.lang.rtl
      )
    ), j = d(() => e.cover === !0 ? T.value : Wt(e.self || "top start", s.lang.rtl)), U = d(
      () => (e.square === !0 ? " q-menu--square" : "") + (h.value === !0 ? " q-menu--dark q-dark" : "")
    ), $ = d(() => e.autoClose === !0 ? { onClick: Q } : {}), N = d(
      () => m.value === !0 && e.persistent !== !0
    );
    J(N, (q) => {
      q === !0 ? (uo(P), co(X)) : (Ht(P), jt(X));
    });
    function re() {
      Ut(() => {
        let q = y.value;
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
      u === void 0 && (u = J(
        () => s.screen.width + "|" + s.screen.height + "|" + e.self + "|" + e.anchor + "|" + s.lang.rtl,
        H
      )), e.noFocus !== !0 && document.activeElement.blur(), b(() => {
        H(), e.noFocus !== !0 && re();
      }), k(() => {
        s.platform.is.ios === !0 && (r = e.autoClose, y.value.click()), H(), Z(!0), n("show", q);
      }, e.transitionDuration);
    }
    function _(q) {
      v(), W(), F(!0), o !== null && // menu was hidden from code or ESC plugin
      (q === void 0 || q.qClickOutside !== !0) && (((q && q.type.indexOf("key") === 0 ? o.closest('[tabindex]:not([tabindex^="-"])') : void 0) || o).focus(), o = null), k(() => {
        W(!0), n("hide", q);
      }, e.transitionDuration);
    }
    function F(q) {
      i = void 0, u !== void 0 && (u(), u = void 0), (q === !0 || m.value === !0) && (Sn(R), M(), jt(X), Ht(P)), q !== !0 && (o = null);
    }
    function L() {
      (O.value !== null || e.scrollTarget !== void 0) && (B.value = io(O.value, e.scrollTarget), x(B.value, H));
    }
    function Q(q) {
      r !== !0 ? (oo(g, q), n("click", q)) : r = !1;
    }
    function R(q) {
      N.value === !0 && e.noFocus !== !0 && Jl(y.value, q.target) !== !0 && re();
    }
    function P(q) {
      n("escapeKey"), K(q);
    }
    function H() {
      Mn({
        targetEl: y.value,
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
          ref: y,
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
    return de(F), Object.assign(g, { focus: re, updatePosition: H }), z;
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
let dt = 0, rn, sn, vt, cn = !1, yl, wl, Sl, ze = null;
function aa(e) {
  ua(e) && oe(e);
}
function ua(e) {
  if (e.target === document.body || e.target.classList.contains("q-layout__backdrop"))
    return !0;
  const t = Ko(e), n = e.shiftKey && !e.deltaX, l = !n && Math.abs(e.deltaX) <= Math.abs(e.deltaY), o = n || l ? e.deltaY : e.deltaX;
  for (let i = 0; i < t.length; i++) {
    const u = t[i];
    if (Gi(u, l))
      return l ? o < 0 && u.scrollTop === 0 ? !0 : o > 0 && u.scrollTop + u.clientHeight === u.scrollHeight : o < 0 && u.scrollLeft === 0 ? !0 : o > 0 && u.scrollLeft + u.clientWidth === u.scrollWidth;
  }
  return !0;
}
function xl(e) {
  e.target === document && (document.scrollingElement.scrollTop = document.scrollingElement.scrollTop);
}
function Vt(e) {
  cn !== !0 && (cn = !0, requestAnimationFrame(() => {
    cn = !1;
    const { height: t } = e.target, { clientHeight: n, scrollTop: l } = document.scrollingElement;
    (vt === void 0 || t !== window.innerHeight) && (vt = n - t, document.scrollingElement.scrollTop = l), l > vt && (document.scrollingElement.scrollTop -= Math.ceil((l - vt) / 8));
  }));
}
function kl(e) {
  const t = document.body, n = window.visualViewport !== void 0;
  if (e === "add") {
    const { overflowY: l, overflowX: o } = window.getComputedStyle(t);
    rn = Xi(window), sn = Ui(window), yl = t.style.left, wl = t.style.top, Sl = window.location.href, t.style.left = `-${rn}px`, t.style.top = `-${sn}px`, o !== "hidden" && (o === "scroll" || t.scrollWidth > window.innerWidth) && t.classList.add("q-body--force-scrollbar-x"), l !== "hidden" && (l === "scroll" || t.scrollHeight > window.innerHeight) && t.classList.add("q-body--force-scrollbar-y"), t.classList.add("q-body--prevent-scroll"), document.qScrollPrevented = !0, he.is.ios === !0 && (n === !0 ? (window.scrollTo(0, 0), window.visualViewport.addEventListener("resize", Vt, be.passiveCapture), window.visualViewport.addEventListener("scroll", Vt, be.passiveCapture), window.scrollTo(0, 0)) : window.addEventListener("scroll", xl, be.passiveCapture));
  }
  he.is.desktop === !0 && he.is.mac === !0 && window[`${e}EventListener`]("wheel", aa, be.notPassive), e === "remove" && (he.is.ios === !0 && (n === !0 ? (window.visualViewport.removeEventListener("resize", Vt, be.passiveCapture), window.visualViewport.removeEventListener("scroll", Vt, be.passiveCapture)) : window.removeEventListener("scroll", xl, be.passiveCapture)), t.classList.remove("q-body--prevent-scroll"), t.classList.remove("q-body--force-scrollbar-x"), t.classList.remove("q-body--force-scrollbar-y"), document.qScrollPrevented = !1, t.style.left = yl, t.style.top = wl, window.location.href === Sl && window.scrollTo(rn, sn), vt = void 0);
}
function ra(e) {
  let t = "add";
  if (e === !0) {
    if (dt++, ze !== null) {
      clearTimeout(ze), ze = null;
      return;
    }
    if (dt > 1)
      return;
  } else {
    if (dt === 0 || (dt--, dt > 0))
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
    const o = ee(), i = A(null), u = A(!1), r = A(!1);
    let f = null, g = null, s, y;
    const m = d(
      () => e.persistent !== !0 && e.noRouteDismiss !== !0 && e.seamless !== !0
    ), { preventBodyScroll: c } = sa(), { registerTimeout: h } = An(), { registerTick: b, removeTick: v } = Pn(), { transitionProps: k, transitionStyle: S } = Rn(
      e,
      () => ql[e.position][0],
      () => ql[e.position][1]
    ), { showPortal: w, hidePortal: B, portalIsAccessible: x, renderPortal: M } = Ln(
      o,
      i,
      Q,
      "dialog"
    ), { hide: O } = Tn({
      showing: u,
      hideOnRouteChange: m,
      handleShow: T,
      handleHide: j,
      processOnMount: !0
    }), { addToHistory: I, removeFromHistory: K } = ia(u), Z = d(
      () => `q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized === !0 ? "maximized" : "minimized"} q-dialog__inner--${e.position} ${ca[e.position]}` + (r.value === !0 ? " q-dialog__inner--animating" : "") + (e.fullWidth === !0 ? " q-dialog__inner--fullwidth" : "") + (e.fullHeight === !0 ? " q-dialog__inner--fullheight" : "") + (e.square === !0 ? " q-dialog__inner--square" : "")
    ), W = d(() => u.value === !0 && e.seamless !== !0), z = d(() => e.autoClose === !0 ? { onClick: _ } : {}), X = d(() => [
      `q-dialog fullscreen no-pointer-events q-dialog--${W.value === !0 ? "modal" : "seamless"}`,
      l.class
    ]);
    J(() => e.maximized, (R) => {
      u.value === !0 && C(R);
    }), J(W, (R) => {
      c(R), R === !0 ? (so(L), uo(N)) : (Sn(L), Ht(N));
    });
    function T(R) {
      I(), g = e.noRefocus === !1 && document.activeElement !== null ? document.activeElement : null, C(e.maximized), w(), r.value = !0, e.noFocus !== !0 ? (document.activeElement !== null && document.activeElement.blur(), b(U)) : v(), h(() => {
        if (o.proxy.$q.platform.is.ios === !0) {
          if (e.seamless !== !0 && document.activeElement) {
            const { top: P, bottom: H } = document.activeElement.getBoundingClientRect(), { innerHeight: ae } = window, q = window.visualViewport !== void 0 ? window.visualViewport.height : ae;
            P > 0 && H > q / 2 && (document.scrollingElement.scrollTop = Math.min(
              document.scrollingElement.scrollHeight - q,
              H >= ae ? 1 / 0 : Math.ceil(document.scrollingElement.scrollTop + H - q / 2)
            )), document.activeElement.scrollIntoView();
          }
          y = !0, i.value.click(), y = !1;
        }
        w(!0), r.value = !1, n("show", R);
      }, e.transitionDuration);
    }
    function j(R) {
      v(), K(), re(!0), r.value = !0, B(), g !== null && (((R && R.type.indexOf("key") === 0 ? g.closest('[tabindex]:not([tabindex^="-"])') : void 0) || g).focus(), g = null), h(() => {
        B(!0), r.value = !1, n("hide", R);
      }, e.transitionDuration);
    }
    function U(R) {
      Ut(() => {
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
      f !== null && (clearTimeout(f), f = null), (R === !0 || u.value === !0) && (C(!1), e.seamless !== !0 && (c(!1), Sn(L), Ht(N))), R !== !0 && (g = null);
    }
    function C(R) {
      R === !0 ? s !== !0 && ($t < 1 && document.body.classList.add("q-body--dialog"), $t++, s = !0) : s === !0 && ($t < 2 && document.body.classList.remove("q-body--dialog"), $t--, s = !1);
    }
    function _(R) {
      y !== !0 && (O(R), n("click", R));
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
        g = R || null;
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
          () => u.value === !0 ? p("div", {
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
const xe = 1e3, da = [
  "start",
  "center",
  "end",
  "start-force",
  "center-force",
  "end-force"
], mo = Array.prototype.filter, fa = window.getComputedStyle(document.body).overflowAnchor === void 0 ? Wo : function(e, t) {
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
function it(e, t) {
  return e + t;
}
function dn(e, t, n, l, o, i, u, r) {
  const f = e === window ? document.scrollingElement || document.documentElement : e, g = o === !0 ? "offsetWidth" : "offsetHeight", s = {
    scrollStart: 0,
    scrollViewSize: -u - r,
    scrollMaxSize: 0,
    offsetStart: -u,
    offsetEnd: -r
  };
  if (o === !0 ? (e === window ? (s.scrollStart = window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, s.scrollViewSize += document.documentElement.clientWidth) : (s.scrollStart = f.scrollLeft, s.scrollViewSize += f.clientWidth), s.scrollMaxSize = f.scrollWidth, i === !0 && (s.scrollStart = (Kt === !0 ? s.scrollMaxSize - s.scrollViewSize : 0) - s.scrollStart)) : (e === window ? (s.scrollStart = window.pageYOffset || window.scrollY || document.body.scrollTop || 0, s.scrollViewSize += document.documentElement.clientHeight) : (s.scrollStart = f.scrollTop, s.scrollViewSize += f.clientHeight), s.scrollMaxSize = f.scrollHeight), n !== null)
    for (let y = n.previousElementSibling; y !== null; y = y.previousElementSibling)
      y.classList.contains("q-virtual-scroll--skip") === !1 && (s.offsetStart += y[g]);
  if (l !== null)
    for (let y = l.nextElementSibling; y !== null; y = y.nextElementSibling)
      y.classList.contains("q-virtual-scroll--skip") === !1 && (s.offsetEnd += y[g]);
  if (t !== e) {
    const y = f.getBoundingClientRect(), m = t.getBoundingClientRect();
    o === !0 ? (s.offsetStart += m.left - y.left, s.offsetEnd -= m.width) : (s.offsetStart += m.top - y.top, s.offsetEnd -= m.height), e !== window && (s.offsetStart += s.scrollStart), s.offsetEnd += s.scrollMaxSize - s.offsetStart;
  }
  return s;
}
function Cl(e, t, n, l) {
  t === "end" && (t = (e === window ? document.body : e)[n === !0 ? "scrollWidth" : "scrollHeight"]), e === window ? n === !0 ? (l === !0 && (t = (Kt === !0 ? document.body.scrollWidth - document.documentElement.clientWidth : 0) - t), window.scrollTo(t, window.pageYOffset || window.scrollY || document.body.scrollTop || 0)) : window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, t) : n === !0 ? (l === !0 && (t = (Kt === !0 ? e.scrollWidth - e.offsetWidth : 0) - t), e.scrollLeft = t) : e.scrollTop = t;
}
function ft(e, t, n, l) {
  if (n >= l)
    return 0;
  const o = t.length, i = Math.floor(n / xe), u = Math.floor((l - 1) / xe) + 1;
  let r = e.slice(i, u).reduce(it, 0);
  return n % xe !== 0 && (r -= t.slice(i * xe, n).reduce(it, 0)), l % xe !== 0 && l !== o && (r -= t.slice(l, u * xe).reduce(it, 0)), r;
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
  const o = ee(), { props: i, emit: u, proxy: r } = o, { $q: f } = r;
  let g, s, y, m = [], c;
  const h = A(0), b = A(0), v = A({}), k = A(null), S = A(null), w = A(null), B = A({ from: 0, to: 0 }), x = d(() => i.tableColspan !== void 0 ? i.tableColspan : 100);
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
    const Q = dn(
      L,
      n(),
      k.value,
      S.value,
      i.virtualScrollHorizontal,
      f.lang.rtl,
      i.virtualScrollStickySizeStart,
      i.virtualScrollStickySizeEnd
    );
    y !== Q.scrollViewSize && U(Q.scrollViewSize), z(
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
    const F = dn(
      _,
      n(),
      k.value,
      S.value,
      i.virtualScrollHorizontal,
      f.lang.rtl,
      i.virtualScrollStickySizeStart,
      i.virtualScrollStickySizeEnd
    ), L = e.value - 1, Q = F.scrollMaxSize - F.offsetStart - F.offsetEnd - b.value;
    if (g === F.scrollStart)
      return;
    if (F.scrollMaxSize <= 0) {
      z(_, F, 0, 0);
      return;
    }
    y !== F.scrollViewSize && U(F.scrollViewSize), X(B.value.from);
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
    if (H <= Q && H + F.scrollViewSize >= h.value)
      H -= h.value, P = B.value.from, ae = H;
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
    se > e.value && (se = e.value, q = Math.max(0, se - v.value.total)), g = F.scrollStart;
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
      B.value = { from: q, to: Ae }, h.value = ft(m, c, 0, q), b.value = ft(m, c, se, e.value), requestAnimationFrame(() => {
        B.value.to !== se && g === F.scrollStart && (B.value = { from: B.value.from, to: se }, b.value = ft(m, c, se, e.value));
      });
    }
    requestAnimationFrame(() => {
      if (g !== F.scrollStart)
        return;
      $e === !0 && X(q);
      const Ae = c.slice(q, L).reduce(it, 0), Ue = Ae + F.offsetStart + h.value, St = Ue + c[L];
      let st = Ue + Q;
      if (H !== void 0) {
        const Xt = Ae - wt, ge = F.scrollStart + Xt;
        st = P !== !0 && ge < Ue && St < ge + F.scrollViewSize ? ge : H === "end" ? St - F.scrollViewSize : Ue - (H === "start" ? 0 : Math.round((F.scrollViewSize - c[L]) / 2));
      }
      g = st, Cl(
        _,
        st,
        i.virtualScrollHorizontal,
        f.lang.rtl
      ), N(L);
    });
  }
  function X(_) {
    const F = w.value;
    if (F) {
      const L = mo.call(
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
    s = -1, g = void 0, h.value = ft(m, c, 0, B.value.from), b.value = ft(m, c, B.value.to, e.value), _ >= 0 ? (X(B.value.from), pe(() => {
      Z(_);
    })) : re();
  }
  function U(_) {
    if (_ === void 0 && typeof window < "u") {
      const H = t();
      H != null && H.nodeType !== 8 && (_ = dn(
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
    y = _;
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
            style: { [L]: `${h.value}px`, ...Q },
            colspan: x.value
          })
        ])
      ]) : p(_, {
        class: "q-virtual-scroll__padding",
        key: "before",
        ref: k,
        style: { [L]: `${h.value}px`, ...Q }
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
            style: { [L]: `${b.value}px`, ...Q },
            colspan: x.value
          })
        ])
      ]) : p(_, {
        class: "q-virtual-scroll__padding",
        key: "after",
        ref: S,
        style: { [L]: `${b.value}px`, ...Q }
      })
    ];
  }
  function N(_) {
    s !== _ && (i.onVirtualScroll !== void 0 && u("virtualScroll", {
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
  Fo(() => {
    U();
  });
  let C = !1;
  return gt(() => {
    C = !0;
  }), qn(() => {
    if (C !== !0)
      return;
    const _ = t();
    g !== void 0 && _ !== void 0 && _ !== null && _.nodeType !== 8 ? Cl(
      _,
      g,
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
    const { proxy: l } = ee(), { $q: o } = l, i = A(!1), u = A(!1), r = A(-1), f = A(""), g = A(!1), s = A(!1);
    let y = null, m, c, h, b = null, v, k, S, w;
    const B = A(null), x = A(null), M = A(null), O = A(null), I = A(null), K = di(e), Z = wa(Qn), W = d(() => Array.isArray(e.options) ? e.options.length : 0), z = d(() => e.virtualScrollItemSize === void 0 ? e.optionsDense === !0 ? 24 : 48 : e.virtualScrollItemSize), {
      virtualScrollSliceRange: X,
      virtualScrollSliceSizeComputed: T,
      localResetVirtualScroll: j,
      padVirtualScroll: U,
      onVirtualScrollEvt: $,
      scrollTo: N,
      setVirtualScrollSize: re
    } = ha({
      virtualScrollLength: W,
      getVirtualScrollTarget: wo,
      getVirtualScrollEl: Wn,
      virtualScrollItemSizeComputed: z
    }), C = Gl(), _ = d(() => {
      const a = e.mapOptions === !0 && e.multiple !== !0, V = e.modelValue !== void 0 && (e.modelValue !== null || a === !0) ? e.multiple === !0 && Array.isArray(e.modelValue) ? e.modelValue : [e.modelValue] : [];
      if (e.mapOptions === !0 && Array.isArray(e.options) === !0) {
        const E = e.mapOptions === !0 && m !== void 0 ? m : [], D = V.map((G) => yo(G, E));
        return e.modelValue === null && a === !0 ? D.filter((G) => G !== null) : D;
      }
      return V;
    }), F = d(() => {
      const a = {};
      return xa.forEach((V) => {
        const E = e[V];
        E !== void 0 && (a[V] = E);
      }), a;
    }), L = d(() => e.optionsDark === null ? C.isDark.value : e.optionsDark), Q = d(() => bn(_.value)), R = d(() => {
      let a = "q-field__input q-placeholder col";
      return e.hideSelected === !0 || _.value.length === 0 ? [a, e.inputClass] : (a += " q-field__input--padding", e.inputClass === void 0 ? a : [a, e.inputClass]);
    }), P = d(
      () => (e.virtualScrollHorizontal === !0 ? "q-virtual-scroll--horizontal" : "") + (e.popupContentClass ? " " + e.popupContentClass : "")
    ), H = d(() => W.value === 0), ae = d(
      () => _.value.map((a) => ye.value(a)).join(", ")
    ), q = d(() => e.displayValue !== void 0 ? e.displayValue : ae.value), se = d(() => e.optionsHtml === !0 ? () => !0 : (a) => a != null && a.html === !0), $e = d(() => e.displayValueHtml === !0 || e.displayValue === void 0 && (e.optionsHtml === !0 || _.value.some(se.value))), Pe = d(() => C.focused.value === !0 ? e.tabindex : -1), qe = d(() => {
      const a = {
        tabindex: e.tabindex,
        role: "combobox",
        "aria-label": e.label,
        "aria-readonly": e.readonly === !0 ? "true" : "false",
        "aria-autocomplete": e.useInput === !0 ? "list" : "none",
        "aria-expanded": i.value === !0 ? "true" : "false",
        "aria-controls": `${C.targetUid.value}_lb`
      };
      return r.value >= 0 && (a["aria-activedescendant"] = `${C.targetUid.value}_${r.value}`), a;
    }), wt = d(() => ({
      id: `${C.targetUid.value}_lb`,
      role: "listbox",
      "aria-multiselectable": e.multiple === !0 ? "true" : "false"
    })), Ae = d(() => _.value.map((a, V) => ({
      index: V,
      opt: a,
      html: se.value(a),
      selected: !0,
      removeAtIndex: bo,
      toggleOption: Me,
      tabindex: Pe.value
    }))), Ue = d(() => {
      if (W.value === 0)
        return [];
      const { from: a, to: V } = X.value;
      return e.options.slice(a, V).map((E, D) => {
        const G = Xe.value(E) === !0, Y = a + D, ue = {
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
          id: `${C.targetUid.value}_${Y}`,
          onClick: () => {
            Me(E);
          }
        };
        return G !== !0 && (Zt(E) === !0 && (ue.active = !0), r.value === Y && (ue.focused = !0), ue["aria-selected"] = ue.active === !0 ? "true" : "false", o.platform.is.desktop === !0 && (ue.onMousemove = () => {
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
    }), St = d(() => e.dropdownIcon !== void 0 ? e.dropdownIcon : o.iconSet.arrow.dropdown), st = d(
      () => e.optionsCover === !1 && e.outlined !== !0 && e.standout !== !0 && e.borderless !== !0 && e.rounded !== !0
    ), Xt = d(() => e.optionsSelectedClass !== void 0 ? e.optionsSelectedClass : e.color !== void 0 ? `text-${e.color}` : ""), ge = d(() => Gt(e.optionValue, "value")), ye = d(() => Gt(e.optionLabel, "label")), Xe = d(() => Gt(e.optionDisable, "disable")), xt = d(() => _.value.map((a) => ge.value(a))), po = d(() => {
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
          c === !0 && Le(V);
        }
      };
      return a.onCompositionstart = a.onCompositionupdate = a.onCompositionend = Z, a;
    });
    J(_, (a) => {
      m = a, e.useInput === !0 && e.fillInput === !0 && e.multiple !== !0 && C.innerLoading.value !== !0 && (u.value !== !0 && i.value !== !0 || Q.value !== !0) && (h !== !0 && et(), (u.value === !0 || i.value === !0) && Ge(""));
    }, { immediate: !0 }), J(() => e.fillInput, et), J(i, Jt), J(W, Lo);
    function Fn(a) {
      return e.emitValue === !0 ? ge.value(a) : a;
    }
    function Yt(a) {
      if (a > -1 && a < _.value.length)
        if (e.multiple === !0) {
          const V = e.modelValue.slice();
          n("remove", { index: a, value: V.splice(a, 1)[0] }), n("update:modelValue", V);
        } else
          n("update:modelValue", null);
    }
    function bo(a) {
      Yt(a), C.focus();
    }
    function zn(a, V) {
      const E = Fn(a);
      if (e.multiple !== !0) {
        e.fillInput === !0 && ct(
          ye.value(a),
          !0,
          !0
        ), n("update:modelValue", E);
        return;
      }
      if (_.value.length === 0) {
        n("add", { index: 0, value: E }), n("update:modelValue", e.multiple === !0 ? [E] : E);
        return;
      }
      if (V === !0 && Zt(a) === !0 || e.maxValues !== void 0 && e.modelValue.length >= e.maxValues)
        return;
      const D = e.modelValue.slice();
      n("add", { index: D.length, value: E }), D.push(E), n("update:modelValue", D);
    }
    function Me(a, V) {
      if (C.editable.value !== !0 || a === void 0 || Xe.value(a) === !0)
        return;
      const E = ge.value(a);
      if (e.multiple !== !0) {
        V !== !0 && (ct(
          e.fillInput === !0 ? ye.value(a) : "",
          !0,
          !0
        ), Fe()), x.value !== null && x.value.focus(), (_.value.length === 0 || Oe(ge.value(_.value[0]), E) !== !0) && n("update:modelValue", e.emitValue === !0 ? E : a);
        return;
      }
      if ((c !== !0 || g.value === !0) && C.focus(), Hn(), _.value.length === 0) {
        const Y = e.emitValue === !0 ? E : a;
        n("add", { index: 0, value: Y }), n("update:modelValue", e.multiple === !0 ? [Y] : Y);
        return;
      }
      const D = e.modelValue.slice(), G = xt.value.findIndex((Y) => Oe(Y, E));
      if (G > -1)
        n("remove", { index: G, value: D.splice(G, 1)[0] });
      else {
        if (e.maxValues !== void 0 && D.length >= e.maxValues)
          return;
        const Y = e.emitValue === !0 ? E : a;
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
    function kt(a = 1, V) {
      if (i.value === !0) {
        let E = r.value;
        do
          E = _l(
            E + a,
            -1,
            W.value - 1
          );
        while (E !== -1 && E !== r.value && Xe.value(e.options[E]) === !0);
        r.value !== E && (Ye(E), N(E), V !== !0 && e.useInput === !0 && e.fillInput === !0 && qt(
          E >= 0 ? ye.value(e.options[E]) : v
        ));
      }
    }
    function yo(a, V) {
      const E = (D) => Oe(ge.value(D), a);
      return e.options.find(E) || V.find(E) || a;
    }
    function Gt(a, V) {
      const E = a !== void 0 ? a : V;
      return typeof E == "function" ? E : (D) => D !== null && typeof D == "object" && E in D ? D[E] : D;
    }
    function Zt(a) {
      const V = ge.value(a);
      return xt.value.find((E) => Oe(E, V)) !== void 0;
    }
    function Hn(a) {
      e.useInput === !0 && x.value !== null && (a === void 0 || x.value === a.target && a.target.value === ae.value) && x.value.select();
    }
    function In(a) {
      Re(a, 27) === !0 && i.value === !0 && (Le(a), Fe(), et()), n("keyup", a);
    }
    function Dn(a) {
      const { value: V } = a.target;
      if (a.keyCode !== void 0) {
        In(a);
        return;
      }
      if (a.target.value = "", y !== null && (clearTimeout(y), y = null), et(), typeof V == "string" && V.length !== 0) {
        const E = V.toLocaleLowerCase(), D = (Y) => {
          const ue = e.options.find((fe) => Y.value(fe).toLocaleLowerCase() === E);
          return ue === void 0 ? !1 : (_.value.indexOf(ue) === -1 ? Me(ue) : Fe(), !0);
        }, G = (Y) => {
          D(ge) !== !0 && (D(ye) === !0 || Y === !0 || Ge(V, !0, () => G(!0)));
        };
        G();
      } else
        C.clearValue(a);
    }
    function jn(a) {
      n("keypress", a);
    }
    function Nn(a) {
      if (n("keydown", a), Kl(a) === !0)
        return;
      const V = f.value.length !== 0 && (e.newValueMode !== void 0 || e.onNewValue !== void 0), E = a.shiftKey !== !0 && e.multiple !== !0 && (r.value > -1 || V === !0);
      if (a.keyCode === 27) {
        ke(a);
        return;
      }
      if (a.keyCode === 9 && E === !1) {
        Ze();
        return;
      }
      if (a.target === void 0 || a.target.id !== C.targetUid.value || C.editable.value !== !0)
        return;
      if (a.keyCode === 40 && C.innerLoading.value !== !0 && i.value === !1) {
        oe(a), Je();
        return;
      }
      if (a.keyCode === 8 && e.hideSelected !== !0 && f.value.length === 0) {
        e.multiple === !0 && Array.isArray(e.modelValue) === !0 ? Yt(e.modelValue.length - 1) : e.multiple !== !0 && e.modelValue !== null && n("update:modelValue", null);
        return;
      }
      (a.keyCode === 35 || a.keyCode === 36) && (typeof f.value != "string" || f.value.length === 0) && (oe(a), r.value = -1, kt(a.keyCode === 36 ? 1 : -1, e.multiple)), (a.keyCode === 33 || a.keyCode === 34) && T.value !== void 0 && (oe(a), r.value = Math.max(
        -1,
        Math.min(
          W.value,
          r.value + (a.keyCode === 33 ? -1 : 1) * T.value.view
        )
      ), kt(a.keyCode === 33 ? 1 : -1, e.multiple)), (a.keyCode === 38 || a.keyCode === 40) && (oe(a), kt(a.keyCode === 38 ? -1 : 1, e.multiple));
      const D = W.value;
      if ((S === void 0 || w < Date.now()) && (S = ""), D > 0 && e.useInput !== !0 && a.key !== void 0 && a.key.length === 1 && a.altKey === !1 && a.ctrlKey === !1 && a.metaKey === !1 && (a.keyCode !== 32 || S.length !== 0)) {
        i.value !== !0 && Je(a);
        const G = a.key.toLocaleLowerCase(), Y = S.length === 1 && S[0] === G;
        w = Date.now() + 1500, Y === !1 && (oe(a), S += G);
        const ue = new RegExp("^" + S.split("").map((en) => Sa.indexOf(en) > -1 ? "\\" + en : en).join(".*"), "i");
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
      if (!(a.keyCode !== 13 && (a.keyCode !== 32 || e.useInput === !0 || S !== "") && (a.keyCode !== 9 || E === !1))) {
        if (a.keyCode !== 9 && oe(a), r.value > -1 && r.value < D) {
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
            if (ct("", e.multiple !== !0, !0), Y == null)
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
    function wo() {
      return Wn();
    }
    function So() {
      return e.hideSelected === !0 ? [] : t["selected-item"] !== void 0 ? Ae.value.map((a) => t["selected-item"](a)).slice() : t.selected !== void 0 ? [].concat(t.selected()) : e.useChips === !0 ? Ae.value.map((a, V) => p(zi, {
        key: "option-" + V,
        removable: C.editable.value === !0 && Xe.value(a.opt) !== !0,
        dense: !0,
        textColor: e.color,
        tabindex: Pe.value,
        onRemove() {
          a.removeAtIndex(V);
        }
      }, () => p("span", {
        class: "ellipsis",
        [a.html === !0 ? "innerHTML" : "textContent"]: ye.value(a.opt)
      }))) : [
        p("span", {
          [$e.value === !0 ? "innerHTML" : "textContent"]: q.value
        })
      ];
    }
    function Kn() {
      if (H.value === !0)
        return t["no-option"] !== void 0 ? t["no-option"]({ inputValue: f.value }) : void 0;
      const a = t.option !== void 0 ? t.option : (E) => p(Ft, {
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
      let V = U("div", Ue.value.map(a));
      return t["before-options"] !== void 0 && (V = t["before-options"]().concat(V)), Ee(t["after-options"], V);
    }
    function xo(a, V) {
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
        "data-autofocus": a === !0 || e.autofocus === !0 || void 0,
        disabled: e.disable === !0,
        readonly: e.readonly === !0,
        ...po.value
      };
      return a !== !0 && c === !0 && (Array.isArray(D.class) === !0 ? D.class = [...D.class, "no-pointer-events"] : D.class += " no-pointer-events"), p("input", D);
    }
    function Qn(a) {
      y !== null && (clearTimeout(y), y = null), !(a && a.target && a.target.qComposing === !0) && (qt(a.target.value || ""), h = !0, v = f.value, C.focused.value !== !0 && (c !== !0 || g.value === !0) && C.focus(), e.onFilter !== void 0 && (y = setTimeout(() => {
        y = null, Ge(f.value);
      }, e.inputDebounce)));
    }
    function qt(a) {
      f.value !== a && (f.value = a, n("inputValue", a));
    }
    function ct(a, V, E) {
      h = E !== !0, e.useInput === !0 && (qt(a), (V === !0 || E !== !0) && (v = a), V !== !0 && Ge(a));
    }
    function Ge(a, V, E) {
      if (e.onFilter === void 0 || V !== !0 && C.focused.value !== !0)
        return;
      C.innerLoading.value === !0 ? n("filterAbort") : (C.innerLoading.value = !0, s.value = !0), a !== "" && e.multiple !== !0 && _.value.length !== 0 && h !== !0 && a === ye.value(_.value[0]) && (a = "");
      const D = setTimeout(() => {
        i.value === !0 && (i.value = !1);
      }, 10);
      b !== null && clearTimeout(b), b = D, n(
        "filter",
        a,
        (G, Y) => {
          (V === !0 || C.focused.value === !0) && b === D && (clearTimeout(b), typeof G == "function" && G(), s.value = !1, pe(() => {
            C.innerLoading.value = !1, C.editable.value === !0 && (V === !0 ? i.value === !0 && Fe() : i.value === !0 ? Jt(!0) : i.value = !0), typeof Y == "function" && pe(() => {
              Y(l);
            }), typeof E == "function" && pe(() => {
              E(l);
            });
          }));
        },
        () => {
          C.focused.value === !0 && b === D && (clearTimeout(b), C.innerLoading.value = !1, s.value = !1), i.value === !0 && (i.value = !1);
        }
      );
    }
    function ko() {
      return p(oa, {
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
        square: st.value,
        transitionShow: e.transitionShow,
        transitionHide: e.transitionHide,
        transitionDuration: e.transitionDuration,
        separateClosePopup: !0,
        ...wt.value,
        onScrollPassive: $,
        onBeforeShow: Xn,
        onBeforeHide: qo,
        onShow: Co
      }, Kn);
    }
    function qo(a) {
      Yn(a), Ze();
    }
    function Co() {
      re();
    }
    function _o(a) {
      Le(a), x.value !== null && x.value.focus(), g.value = !0, window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, 0);
    }
    function Eo(a) {
      Le(a), pe(() => {
        g.value = !1;
      });
    }
    function Bo() {
      const a = [
        p(Pi, {
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
          onFocus: _o,
          onBlur: Eo
        }, {
          ...t,
          rawControl: () => C.getControl(!0),
          before: void 0,
          after: void 0
        })
      ];
      return i.value === !0 && a.push(
        p("div", {
          ref: I,
          class: P.value + " scroll",
          style: e.popupContentStyle,
          ...wt.value,
          onClick: ke,
          onScrollPassive: $
        }, Kn())
      ), p(vo, {
        ref: O,
        modelValue: u.value,
        position: e.useInput === !0 ? "top" : void 0,
        transitionShow: k,
        transitionHide: e.transitionHide,
        transitionDuration: e.transitionDuration,
        onBeforeShow: Xn,
        onBeforeHide: Vo,
        onHide: $o,
        onShow: To
      }, () => p("div", {
        class: "q-select__dialog" + (L.value === !0 ? " q-select__dialog--dark q-dark" : "") + (g.value === !0 ? " q-select__dialog--focused" : "")
      }, a));
    }
    function Vo(a) {
      Yn(a), O.value !== null && O.value.__updateRefocusTarget(
        C.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")
      ), C.focused.value = !1;
    }
    function $o(a) {
      Fe(), C.focused.value === !1 && n("blur", a), et();
    }
    function To() {
      const a = document.activeElement;
      (a === null || a.id !== C.targetUid.value) && x.value !== null && x.value !== a && x.value.focus(), re();
    }
    function Ze() {
      u.value !== !0 && (r.value = -1, i.value === !0 && (i.value = !1), C.focused.value === !1 && (b !== null && (clearTimeout(b), b = null), C.innerLoading.value === !0 && (n("filterAbort"), C.innerLoading.value = !1, s.value = !1)));
    }
    function Je(a) {
      C.editable.value === !0 && (c === !0 ? (C.onControlFocusin(a), u.value = !0, pe(() => {
        C.focus();
      })) : C.focus(), e.onFilter !== void 0 ? Ge(f.value) : (H.value !== !0 || t["no-option"] !== void 0) && (i.value = !0));
    }
    function Fe() {
      u.value = !1, Ze();
    }
    function et() {
      e.useInput === !0 && ct(
        e.multiple !== !0 && e.fillInput === !0 && _.value.length !== 0 && ye.value(_.value[0]) || "",
        !0,
        !0
      );
    }
    function Jt(a) {
      let V = -1;
      if (a === !0) {
        if (_.value.length !== 0) {
          const E = ge.value(_.value[0]);
          V = e.options.findIndex((D) => Oe(ge.value(D), E));
        }
        j(V);
      }
      Ye(V);
    }
    function Lo(a, V) {
      i.value === !0 && C.innerLoading.value === !1 && (j(-1, !0), pe(() => {
        i.value === !0 && C.innerLoading.value === !1 && (a > V ? j() : Jt(!0));
      }));
    }
    function Un() {
      u.value === !1 && M.value !== null && M.value.updatePosition();
    }
    function Xn(a) {
      a !== void 0 && Le(a), n("popupShow", a), C.hasPopupOpen = !0, C.onControlFocusin(a);
    }
    function Yn(a) {
      a !== void 0 && Le(a), n("popupHide", a), C.hasPopupOpen = !1, C.onControlFocusout(a);
    }
    function Gn() {
      c = o.platform.is.mobile !== !0 && e.behavior !== "dialog" ? !1 : e.behavior !== "menu" && (e.useInput === !0 ? t["no-option"] !== void 0 || e.onFilter !== void 0 || H.value === !1 : !0), k = o.platform.is.ios === !0 && c === !0 && e.useInput === !0 ? "fade" : e.transitionShow;
    }
    return Rl(Gn), zo(Un), Gn(), de(() => {
      y !== null && clearTimeout(y);
    }), Object.assign(l, {
      showPopup: Je,
      hidePopup: Fe,
      removeAtIndex: Yt,
      add: zn,
      toggleOption: Me,
      getOptionIndex: () => r.value,
      setOptionIndex: Ye,
      moveOptionSelection: kt,
      filter: Ge,
      updateMenuPosition: Un,
      updateInputValue: ct,
      isOptionSelected: Zt,
      getEmittingOptionValue: Fn,
      isOptionDisabled: (...a) => Xe.value.apply(null, a) === !0,
      getOptionValue: (...a) => ge.value.apply(null, a),
      getOptionLabel: (...a) => ye.value.apply(null, a)
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
        if (C.editable.value !== !1 && (u.value === !0 || H.value !== !0 || t["no-option"] !== void 0))
          return c === !0 ? Bo() : ko();
        C.hasPopupOpen === !0 && (C.hasPopupOpen = !1);
      },
      controlEvents: {
        onFocusin(a) {
          C.onControlFocusin(a);
        },
        onFocusout(a) {
          C.onControlFocusout(a, () => {
            et(), Ze();
          });
        },
        onClick(a) {
          if (ke(a), c !== !0 && i.value === !0) {
            Ze(), x.value !== null && x.value.focus();
            return;
          }
          Je(a);
        }
      },
      getControl: (a) => {
        const V = So(), E = a === !0 || u.value !== !0 || c !== !0;
        if (e.useInput === !0)
          V.push(xo(a, E));
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
              "data-autofocus": a === !0 || e.autofocus === !0 || void 0,
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
}), su = /* @__PURE__ */ rt({
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
    }, o = A(""), i = A([]), u = d(() => [...i.value, ...n.options].filter(
      (s) => !o.value || (n.exactFilterMatch ? `${s.label}`.toLowerCase() === `${o.value}`.toLowerCase() : `${s.label}`.toLowerCase().includes(`${o.value}`.toLowerCase()))
    )), r = (s, y) => {
      o.value = s.toLowerCase(), y(
        () => {
          o.value = s.toLowerCase();
        },
        (m) => {
          s !== "" && m.options && m.options.length > 0 && (m.setOptionIndex(-1), m.moveOptionSelection(1, !0));
        }
      );
    }, f = () => {
      t("update:modelValue", n.multiple ? [] : null);
    }, g = (s, y) => {
      n.newValue && (i.value.push({
        value: n.transformNewValueFn(s),
        label: n.transformNewValueFn(s)
      }), y(s, "add-unique"));
    };
    return (s, y) => (te(), ve(ka, {
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
      onNewValue: g
    }, {
      option: le(({ itemProps: m, opt: c, selected: h, toggleOption: b }) => [
        ne(At),
        ne(Ft, at(m, {
          disable: c.disable
        }), {
          default: le(() => [
            ne(je, { side: "" }, {
              default: le(() => [
                ne(pi, {
                  dense: "",
                  "model-value": h,
                  "onUpdate:modelValue": (v) => b(c)
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
        ne(Ft, null, {
          default: le(() => [
            ne(je, { class: "text-grey" }, {
              default: le(() => [
                Pt(" Inget resultat ")
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
    const u = ee(), { proxy: { $q: r } } = u, f = A(null), g = A(!1), s = d(() => Wt(e.anchor, r.lang.rtl)), y = d(() => Wt(e.self, r.lang.rtl)), m = d(() => e.persistent !== !0), { registerTick: c, removeTick: h } = Pn(), { registerTimeout: b } = An(), { transitionProps: v, transitionStyle: k } = Rn(e), { localScrollTarget: S, changeScrollEvent: w, unconfigureScrollTarget: B } = lo(e, C), { anchorEl: x, canShow: M, anchorEvents: O } = no({ showing: g, configureAnchorEl: re }), { show: I, hide: K } = Tn({
      showing: g,
      canShow: M,
      handleShow: X,
      handleHide: T,
      hideOnRouteChange: m,
      processOnMount: !0
    });
    Object.assign(O, { delayShow: $, delayHide: N });
    const { showPortal: Z, hidePortal: W, renderPortal: z } = Ln(u, f, F, "tooltip");
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
          e.modelValue === null && e.persistent !== !0 && g.value === !0
        )
      );
      J(Q, (R) => {
        (R === !0 ? co : jt)(L);
      }), de(() => {
        jt(L);
      });
    }
    function X(L) {
      Z(), c(() => {
        i = new MutationObserver(() => U()), i.observe(f.value, { attributes: !1, childList: !0, characterData: !0, subtree: !0 }), U(), C();
      }), o === void 0 && (o = J(
        () => r.screen.width + "|" + r.screen.height + "|" + e.self + "|" + e.anchor + "|" + r.lang.rtl,
        U
      )), b(() => {
        Z(!0), n("show", L);
      }, e.transitionDuration);
    }
    function T(L) {
      h(), W(), j(), b(() => {
        W(!0), n("hide", L);
      }, e.transitionDuration);
    }
    function j() {
      i !== void 0 && (i.disconnect(), i = void 0), o !== void 0 && (o(), o = void 0), B(), Mt(O, "tooltipTemp");
    }
    function U() {
      Mn({
        targetEl: f.value,
        offset: e.offset,
        anchorEl: x.value,
        anchorOrigin: s.value,
        selfOrigin: y.value,
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
      b(() => {
        I(L);
      }, e.delay);
    }
    function N(L) {
      r.platform.is.mobile === !0 && (Mt(O, "tooltipTemp"), wn(), setTimeout(() => {
        document.body.classList.remove("non-selectable");
      }, 10)), b(() => {
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
      return g.value === !0 ? p("div", {
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
}, Ea = Object.keys(ho), Ba = {
  align: {
    type: String,
    validator: (e) => Ea.includes(e)
  }
};
function Va(e) {
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
  const t = yt(e, $a), n = Va(e), { hasRouterLink: l, hasLink: o, linkTag: i, linkAttrs: u, navigateOnClick: r } = Wl({
    fallbackTag: "button"
  }), f = d(() => {
    const v = e.fab === !1 && e.fabMini === !1 ? t.value : {};
    return e.padding !== void 0 ? Object.assign({}, v, {
      padding: e.padding.split(/\s+/).map((k) => k in Bl ? Bl[k] + "px" : k).join(" "),
      minWidth: "0",
      minHeight: "0"
    }) : v;
  }), g = d(
    () => e.rounded === !0 || e.fab === !0 || e.fabMini === !0
  ), s = d(
    () => e.disable !== !0 && e.loading !== !0
  ), y = d(() => s.value === !0 ? e.tabindex || 0 : -1), m = d(() => Ra(e, "standard")), c = d(() => {
    const v = { tabindex: y.value };
    return o.value === !0 ? Object.assign(v, u.value) : Ta.includes(e.type) === !0 && (v.type = e.type), i.value === "a" ? (e.disable === !0 ? v["aria-disabled"] = "true" : v.href === void 0 && (v.role = "button"), l.value !== !0 && La.test(e.type) === !0 && (v.type = e.type)) : e.disable === !0 && (v.disabled = "", v["aria-disabled"] = "true"), e.loading === !0 && e.percentage !== void 0 && Object.assign(v, {
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-valuenow": e.percentage
    }), v;
  }), h = d(() => {
    let v;
    e.color !== void 0 ? e.flat === !0 || e.outline === !0 ? v = `text-${e.textColor || e.color}` : v = `bg-${e.color} text-${e.textColor || "white"}` : e.textColor && (v = `text-${e.textColor}`);
    const k = e.round === !0 ? "round" : `rectangle${g.value === !0 ? " q-btn--rounded" : e.square === !0 ? " q-btn--square" : ""}`;
    return `q-btn--${m.value} q-btn--${k}` + (v !== void 0 ? " " + v : "") + (s.value === !0 ? " q-btn--actionable q-focusable q-hoverable" : e.disable === !0 ? " disabled" : "") + (e.fab === !0 ? " q-btn--fab" : e.fabMini === !0 ? " q-btn--fab-mini" : "") + (e.noCaps === !0 ? " q-btn--no-uppercase" : "") + (e.dense === !0 ? " q-btn--dense" : "") + (e.stretch === !0 ? " no-border-radius self-stretch" : "") + (e.glossy === !0 ? " glossy" : "") + (e.square ? " q-btn--square" : "");
  }), b = d(
    () => n.value + (e.stack === !0 ? " column" : " row") + (e.noWrap === !0 ? " no-wrap text-no-wrap" : "") + (e.loading === !0 ? " q-btn__content--hidden" : "")
  );
  return {
    classes: h,
    style: f,
    innerClasses: b,
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
      innerClasses: u,
      attributes: r,
      hasLink: f,
      linkTag: g,
      navigateOnClick: s,
      isActionable: y
    } = Aa(e), m = A(null), c = A(null);
    let h = null, b, v = null;
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
      if (y.value === !0) {
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
      m.value !== null && (n("touchstart", T), T.defaultPrevented !== !0 && (tt !== m.value && (tt !== null && z(), tt = m.value, h = T.target, h.addEventListener("touchcancel", W, we), h.addEventListener("touchend", W, we)), b = !0, v !== null && clearTimeout(v), v = setTimeout(() => {
        v = null, b = !1;
      }, 200)));
    }
    function Z(T) {
      m.value !== null && (T.qSkipRipple = b === !0, n("mousedown", T), T.defaultPrevented !== !0 && lt !== m.value && (lt !== null && z(), lt = m.value, m.value.classList.add("q-btn--active"), document.addEventListener("mouseup", W, we)));
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
      T !== !0 && (tt === m.value || lt === m.value) && j !== null && j !== document.activeElement && (j.setAttribute("tabindex", -1), j.focus()), tt === m.value && (h !== null && (h.removeEventListener("touchcancel", W, we), h.removeEventListener("touchend", W, we)), tt = h = null), lt === m.value && (document.removeEventListener("mouseup", W, we), lt = null), nt === m.value && (document.removeEventListener("keyup", W, !0), m.value !== null && m.value.removeEventListener("blur", W, we), nt = null), m.value !== null && m.value.classList.remove("q-btn--active");
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
          class: "q-btn__content text-center col items-center q-anchor--skip " + u.value
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
          g.value,
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
    let l = !1, o, i, u = null, r = null, f, g;
    function s() {
      o && o(), o = null, l = !1, u !== null && (clearTimeout(u), u = null), r !== null && (clearTimeout(r), r = null), i !== void 0 && i.removeEventListener("transitionend", f), f = null;
    }
    function y(b, v, k) {
      v !== void 0 && (b.style.height = `${v}px`), b.style.transition = `height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`, l = !0, o = k;
    }
    function m(b, v) {
      b.style.overflowY = null, b.style.height = null, b.style.transition = null, s(), v !== g && n(v);
    }
    function c(b, v) {
      let k = 0;
      i = b, l === !0 ? (s(), k = b.offsetHeight === b.scrollHeight ? 0 : void 0) : (g = "hide", b.style.overflowY = "hidden"), y(b, k, v), u = setTimeout(() => {
        u = null, b.style.height = `${b.scrollHeight}px`, f = (S) => {
          r = null, (Object(S) !== S || S.target === b) && m(b, "show");
        }, b.addEventListener("transitionend", f), r = setTimeout(f, e.duration * 1.1);
      }, 100);
    }
    function h(b, v) {
      let k;
      i = b, l === !0 ? s() : (g = "show", b.style.overflowY = "hidden", k = b.scrollHeight), y(b, k, v), u = setTimeout(() => {
        u = null, b.style.height = 0, f = (S) => {
          r = null, (Object(S) !== S || S.target === b) && m(b, "hide");
        }, b.addEventListener("transitionend", f), r = setTimeout(f, e.duration * 1.1);
      }, 100);
    }
    return de(() => {
      l === !0 && s();
    }), () => p(Qe, {
      css: !1,
      appear: e.appear,
      onEnter: c,
      onLeave: h
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
    const { proxy: n } = ee(), l = Ve(e, n.$q), o = yt(e, Ia), i = d(() => e.indeterminate === !0 || e.query === !0), u = d(() => e.reverse !== e.query), r = d(() => ({
      ...o.value !== null ? o.value : {},
      "--q-linear-progress-speed": `${e.animationSpeed}ms`
    })), f = d(
      () => "q-linear-progress" + (e.color !== void 0 ? ` text-${e.color}` : "") + (e.reverse === !0 || e.query === !0 ? " q-linear-progress--reverse" : "") + (e.rounded === !0 ? " rounded-borders" : "")
    ), g = d(() => $l(e.buffer !== void 0 ? e.buffer : 1, u.value, n.$q)), s = d(() => `with${e.instantFeedback === !0 ? "out" : ""}-transition`), y = d(
      () => `q-linear-progress__track absolute-full q-linear-progress__track--${s.value} q-linear-progress__track--${l.value === !0 ? "dark" : "light"}` + (e.trackColor !== void 0 ? ` bg-${e.trackColor}` : "")
    ), m = d(() => $l(i.value === !0 ? 1 : e.value, u.value, n.$q)), c = d(
      () => `q-linear-progress__model absolute-full q-linear-progress__model--${s.value} q-linear-progress__model--${i.value === !0 ? "in" : ""}determinate`
    ), h = d(() => ({ width: `${e.value * 100}%` })), b = d(
      () => `q-linear-progress__stripe absolute-${e.reverse === !0 ? "right" : "left"} q-linear-progress__stripe--${s.value}`
    );
    return () => {
      const v = [
        p("div", {
          class: y.value,
          style: g.value
        }),
        p("div", {
          class: c.value,
          style: m.value
        })
      ];
      return e.stripe === !0 && i.value === !1 && v.push(
        p("div", {
          class: b.value,
          style: h.value
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
function Qt() {
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
Qt.emitsObject = Wa(go);
const Ka = {
  key: 0,
  class: "text-body1 text-weight-medium"
}, Qa = {
  key: 0,
  class: "q-pb-sm"
}, Ua = {
  class: "scroll",
  style: { "max-height": "300px" }
}, Xa = { class: "q-px-md q-py-sm bg-red-1 text-red text-caption" }, Ya = /* @__PURE__ */ De("br", null, null, -1), Ga = { style: { "white-space": "pre-wrap" } }, Za = { key: 0 }, Ja = /* @__PURE__ */ rt({
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
    }, { dialogRef: l, onDialogHide: o, onDialogOK: i, onDialogCancel: u } = Qt(), r = A(!1), f = A(null), g = (h, b) => {
      f.value = {
        type: h,
        message: JSON.stringify(b, Object.getOwnPropertyNames(b), 2)
      };
    }, s = Ho([]);
    (async () => {
      if (t.dependencies) {
        r.value = !0;
        try {
          const h = await Promise.all(t.dependencies());
          s.value = h;
        } catch (h) {
          g("dependecy", h);
        }
        r.value = !1;
      }
    })();
    const m = A(!1);
    return Ol(eu, {
      pending: m,
      dependencyData: s,
      onSubmit: async (h) => {
        f.value = null, m.value = !0;
        try {
          const b = await h();
          i(b);
        } catch (b) {
          g("submit", b);
        } finally {
          m.value = !1;
        }
      },
      onDialogCancel: u,
      onDialogOK: i
    }), (h, b) => (te(), ve(vo, at(h.$props, {
      ref_key: "dialogRef",
      ref: l,
      onHide: He(o)
    }), {
      default: le(() => [
        ne(ja, {
          square: "",
          style: n
        }, {
          default: le(() => [
            ne(Fa, { class: "flex" }, {
              default: le(() => [
                h.title ? (te(), _e("div", Ka, vn(h.title), 1)) : Ce("", !0),
                ne(Ca),
                ne(Ma, {
                  onClick: He(u),
                  size: "sm",
                  icon: "mdi-close",
                  unelevated: "",
                  square: "",
                  padding: "4px",
                  disable: m.value
                }, {
                  default: le(() => [
                    ne(_a, null, {
                      default: le(() => [
                        Pt(" Stäng ")
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
                f.value ? (te(), _e("div", Qa, [
                  ne(At, { color: "red-2" }),
                  De("div", Ua, [
                    De("div", Xa, [
                      ne(Ha, { color: "red" }, {
                        default: le(() => [
                          ne(Se, {
                            class: "q-mr-sm",
                            name: "mdi-alert-circle-outline"
                          }),
                          Pt(" Ett fel uppstod")
                        ]),
                        _: 1
                      }),
                      Ya,
                      De("code", Ga, vn(f.value.message), 1)
                    ])
                  ]),
                  ne(At, { color: "red-2" })
                ])) : Ce("", !0)
              ]),
              _: 1
            }),
            r.value ? (te(), ve(Da, {
              key: 0,
              indeterminate: ""
            })) : Ce("", !0),
            ne(Vl, null, {
              default: le(() => {
                var v;
                return [
                  !r.value && ((v = f.value) == null ? void 0 : v.type) !== "dependecy" ? (te(), _e("div", Za, [
                    (te(), ve(Ot(t.slot.component), Io(Do(t.slot.componentProps)), null, 16))
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
            const o = Ni(e);
            o !== void 0 && Wi(o, l, n.depth);
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
), lu = /* @__PURE__ */ rt({
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
    return (i, u) => kn((te(), ve(Ft, at(i.props.componentProps, {
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
          class: Rt(n.value)
        }, {
          default: le(() => [
            Pt(vn(i.props.label), 1)
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
        o.value.length ? (te(), ve(Ot(t.component), {
          key: 3,
          square: "",
          anchor: "top end",
          self: "top start",
          "no-focus": "",
          "separate-close-popup": ""
        }, {
          default: le(() => [
            ne(ou, at({
              component: t.component
            }, i.listProps, { items: o.value }), null, 16, ["component", "items"])
          ]),
          _: 1
        })) : Ce("", !0)
      ]),
      _: 1
    }, 16)), [
      [nu, !o.value.length]
    ]);
  }
}), ou = /* @__PURE__ */ rt({
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
    return (l, o) => (te(), ve(tu, at({ style: { "min-width": "150px" } }, t.props), {
      default: le(() => [
        (te(!0), _e(Tt, null, fn(n.value, (i, u) => (te(), ve(lu, {
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
  ru as AppForm,
  ou as AppList,
  lu as AppListItem,
  Ja as AppModal,
  su as AppSelect,
  eu as appModalInjectionKey,
  cu as useAppModal,
  No as useForm
};
