import { computed as d, markRaw as no, defineComponent as vt, getCurrentInstance as J, h as b, ref as N, toRaw as qe, withDirectives as An, provide as lo, onDeactivated as Et, onActivated as Fn, onMounted as mt, nextTick as se, watch as Z, openBlock as le, createBlock as pe, unref as je, withCtx as ae, renderSlot as fn, resolveDynamicComponent as xn, createElementVNode as Ke, createElementBlock as Oe, Fragment as Ht, renderList as _n, normalizeClass as Dt, mergeProps as Pn, toHandlers as hi, createVNode as ie, createCommentVNode as Te, reactive as oo, inject as bi, onBeforeUnmount as me, onBeforeUpdate as io, Transition as Xe, onUnmounted as yi, Teleport as pi, onBeforeMount as wi, onUpdated as ki, createTextVNode as jt, shallowRef as Si, toDisplayString as Cn, normalizeProps as ao, guardReactiveProps as ro, createApp as xi } from "vue";
import hl from "lodash.set";
import bl from "lodash.get";
const _e = {
  dark: {
    type: Boolean,
    default: null
  }
};
function Ce(e, t) {
  return d(() => e.dark === null ? t.dark.isActive : e.dark);
}
const ee = (e) => no(vt(e)), uo = (e) => no(e), _i = {
  true: "inset",
  item: "item-inset",
  "item-thumbnail": "item-thumbnail-inset"
}, vn = {
  xs: 2,
  sm: 4,
  md: 8,
  lg: 16,
  xl: 24
}, ct = ee({
  name: "QSeparator",
  props: {
    ..._e,
    spaced: [Boolean, String],
    inset: [Boolean, String],
    vertical: Boolean,
    color: String,
    size: String
  },
  setup(e) {
    const t = J(), n = Ce(e, t.proxy.$q), l = d(() => e.vertical === !0 ? "vertical" : "horizontal"), o = d(() => ` q-separator--${l.value}`), i = d(() => e.inset !== !1 ? `${o.value}-${_i[e.inset]}` : ""), a = d(
      () => `q-separator${o.value}${i.value}` + (e.color !== void 0 ? ` bg-${e.color}` : "") + (n.value === !0 ? " q-separator--dark" : "")
    ), u = d(() => {
      const f = {};
      if (e.size !== void 0 && (f[e.vertical === !0 ? "width" : "height"] = e.size), e.spaced !== !1) {
        const g = e.spaced === !0 ? `${vn.md}px` : e.spaced in vn ? `${vn[e.spaced]}px` : e.spaced, r = e.vertical === !0 ? ["Left", "Right"] : ["Top", "Bottom"];
        f[`margin${r[0]}`] = f[`margin${r[1]}`] = g;
      }
      return f;
    });
    return () => b("hr", {
      class: a.value,
      style: u.value,
      "aria-orientation": l.value
    });
  }
}), Ci = (e) => {
  const t = N(e), n = N({}), l = window.structuredClone(qe(e)), o = d(() => Object.values(n.value)), i = (f) => {
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
        (r, m) => (r[m.path.join(".")] = m.message, r),
        {}
      ), !1);
    },
    setFormData: i
  };
}, ye = {
  hasPassive: !1,
  passiveCapture: !0,
  notPassiveCapture: !0
};
try {
  const e = Object.defineProperty({}, "passive", {
    get() {
      Object.assign(ye, {
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
function qn() {
}
function so(e) {
  return e.touches && e.touches[0] ? e = e.touches[0] : e.changedTouches && e.changedTouches[0] ? e = e.changedTouches[0] : e.targetTouches && e.targetTouches[0] && (e = e.targetTouches[0]), {
    top: e.clientY,
    left: e.clientX
  };
}
function qi(e) {
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
function Me(e) {
  e.stopPropagation();
}
function Ve(e) {
  e.cancelable !== !1 && e.preventDefault();
}
function oe(e) {
  e.cancelable !== !1 && e.preventDefault(), e.stopPropagation();
}
function _t(e, t, n) {
  const l = `__q_${t}_evt`;
  e[l] = e[l] !== void 0 ? e[l].concat(n) : n, n.forEach((o) => {
    o[0].addEventListener(o[1], e[o[2]], ye[o[3]]);
  });
}
function Nt(e, t) {
  const n = `__q_${t}_evt`;
  e[n] !== void 0 && (e[n].forEach((l) => {
    l[0].removeEventListener(l[1], e[l[2]], ye[l[3]]);
  }), e[n] = void 0);
}
let Ne = [], Ct = [];
function co(e) {
  Ct = Ct.filter((t) => t !== e);
}
function Ei(e) {
  co(e), Ct.push(e);
}
function yl(e) {
  co(e), Ct.length === 0 && Ne.length !== 0 && (Ne[Ne.length - 1](), Ne = []);
}
function Vt(e) {
  Ct.length === 0 ? e() : Ne.push(e);
}
function Vi(e) {
  Ne = Ne.filter((t) => t !== e);
}
function ve(e, t) {
  return e !== void 0 && e() || t;
}
function Bi(e, t) {
  if (e !== void 0) {
    const n = e();
    if (n != null)
      return n.slice();
  }
  return t;
}
function Le(e, t) {
  return e !== void 0 ? t.concat(e()) : t;
}
function Mi(e, t) {
  return e === void 0 ? t : t !== void 0 ? t.concat(e()) : e();
}
function Ti(e, t, n, l, o, i) {
  t.key = l + o;
  const a = b(e, t, n);
  return o === !0 ? An(a, i()) : a;
}
const fo = "_q_fo_";
function It(e) {
  if (Object(e.$parent) === e.$parent)
    return e.$parent;
  let { parent: t } = e.$;
  for (; Object(t) === t; ) {
    if (Object(t.proxy) === t.proxy)
      return t.proxy;
    t = t.parent;
  }
}
function vo(e) {
  return e.appContext.config.globalProperties.$router !== void 0;
}
function zn(e) {
  return e.isUnmounted === !0 || e.isDeactivated === !0;
}
const Li = ee({
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
    const l = J(), o = N(null);
    let i = 0;
    const a = [];
    function u(c) {
      const y = typeof c == "boolean" ? c : e.noErrorFocus !== !0, _ = ++i, h = (p, $) => {
        n("validation" + (p === !0 ? "Success" : "Error"), $);
      }, T = (p) => {
        const $ = p.validate();
        return typeof $.then == "function" ? $.then(
          (C) => ({ valid: C, comp: p }),
          (C) => ({ valid: !1, comp: p, err: C })
        ) : Promise.resolve({ valid: $, comp: p });
      };
      return (e.greedy === !0 ? Promise.all(a.map(T)).then((p) => p.filter(($) => $.valid !== !0)) : a.reduce(
        (p, $) => p.then(() => T($).then((C) => {
          if (C.valid === !1)
            return Promise.reject(C);
        })),
        Promise.resolve()
      ).catch((p) => [p])).then((p) => {
        if (p === void 0 || p.length === 0)
          return _ === i && h(!0), !0;
        if (_ === i) {
          const { comp: $, err: C } = p[0];
          if (C !== void 0 && console.error(C), h(!1, $), y === !0) {
            const H = p.find(({ comp: A }) => typeof A.focus == "function" && zn(A.$) === !1);
            H !== void 0 && H.comp.focus();
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
    function g(c) {
      c !== void 0 && oe(c);
      const y = i + 1;
      u().then((_) => {
        y === i && _ === !0 && (e.onSubmit !== void 0 ? n("submit", c) : c !== void 0 && c.target !== void 0 && typeof c.target.submit == "function" && c.target.submit());
      });
    }
    function r(c) {
      c !== void 0 && oe(c), n("reset"), se(() => {
        f(), e.autofocus === !0 && e.noResetFocus !== !0 && m();
      });
    }
    function m() {
      Vt(() => {
        if (o.value === null)
          return;
        const c = o.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || o.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || o.value.querySelector("[autofocus], [data-autofocus]") || Array.prototype.find.call(o.value.querySelectorAll("[tabindex]"), (y) => y.tabIndex > -1);
        c != null && c.focus({ preventScroll: !0 });
      });
    }
    lo(fo, {
      bindComponent(c) {
        a.push(c);
      },
      unbindComponent(c) {
        const y = a.indexOf(c);
        y > -1 && a.splice(y, 1);
      }
    });
    let v = !1;
    return Et(() => {
      v = !0;
    }), Fn(() => {
      v === !0 && e.autofocus === !0 && m();
    }), mt(() => {
      e.autofocus === !0 && m();
    }), Object.assign(l.proxy, {
      validate: u,
      resetValidation: f,
      submit: g,
      reset: r,
      focus: m,
      getValidationComponents: () => a
    }), () => b("form", {
      class: "q-form",
      ref: o,
      onSubmit: g,
      onReset: r
    }, ve(t.default));
  }
}), $i = {
  class: /* @__PURE__ */ Dt("row q-col-gutter-md")
}, Oi = { class: "col" }, Ri = {
  key: 0,
  class: "col-auto flex"
}, Ir = /* @__PURE__ */ vt({
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
    const n = e, l = N(), o = Math.max(...n.schema.map((h) => h.column || 1)), i = (h = {}, T) => {
      for (const w of T) {
        const p = bl(
          h,
          w.scope,
          w != null && w.transform ? w == null ? void 0 : w.transform(w.defaultValue) : w.defaultValue
        );
        hl(h, w.scope, p);
      }
      return h;
    }, { resetDefaultForm: a, validateForm: u, formData: f, fieldError: g } = Ci(
      i(n.modelValue, n.schema)
    );
    Z(
      f,
      (h) => {
        t("update:modelValue", h);
      },
      {
        deep: !0,
        immediate: !0
      }
    );
    const r = (h) => bl(f.value, h), m = (h, T) => {
      hl(
        f.value,
        T.scope,
        T != null && T.transform ? T == null ? void 0 : T.transform(h) : h
      ), g.value[T.scope] && u(n.modelSchema);
    }, v = () => {
      u(n.modelSchema), u(n.modelSchema) && t("submit", qe(f.value));
    }, c = () => {
      var h;
      a(), (h = l.value) == null || h.resetValidation(), t("reset");
    }, y = () => u(n.modelSchema), _ = d(() => (h) => ({
      bind: {
        ...h.componentProps || {},
        readonly: n.readonly,
        disable: n.disable,
        modelValue: r(h.scope),
        error: !!g.value[h.scope],
        errorMessage: g.value[h.scope] || ""
      },
      on: {
        "update:modelValue": (T) => m(T, h)
      }
    }));
    return (h, T) => (le(), pe(je(Li), {
      onValidationError: y,
      onSubmit: v,
      greedy: "",
      onReset: c,
      ref_key: "form",
      ref: l
    }, {
      default: ae(() => [
        fn(h.$slots, "top"),
        (le(), pe(xn(h.fieldWrapper), null, {
          default: ae(() => [
            Ke("div", $i, [
              (le(!0), Oe(Ht, null, _n(je(o), (w) => (le(), Oe(Ht, { key: w }, [
                Ke("div", Oi, [
                  Ke("div", {
                    class: Dt(`row q-col-gutter-${h.colGutter}`)
                  }, [
                    (le(!0), Oe(Ht, null, _n(h.schema.filter((p) => {
                      const $ = p.column || 1;
                      return $ > je(o) ? w === 1 : $ === w;
                    }), (p) => (le(), Oe("div", {
                      key: p.scope,
                      class: Dt(`col-${p.cols || "auto"}`)
                    }, [
                      fn(h.$slots, p.scope, {
                        props: {
                          setterScope: m,
                          getterScope: r,
                          scope: p.scope,
                          ..._.value(p)
                        }
                      }, () => [
                        (le(), pe(xn(p.component), Pn(_.value(p).bind, hi(_.value(p).on)), null, 16))
                      ])
                    ], 2))), 128))
                  ], 2)
                ]),
                w !== je(o) ? (le(), Oe("div", Ri, [
                  ie(ct, { vertical: "" })
                ])) : Te("", !0)
              ], 64))), 128))
            ])
          ]),
          _: 3
        })),
        fn(h.$slots, "bottom")
      ]),
      _: 3
    }, 512));
  }
}), En = {
  xs: 18,
  sm: 24,
  md: 32,
  lg: 38,
  xl: 46
}, gt = {
  size: String
};
function ht(e, t = En) {
  return d(() => e.size !== void 0 ? { fontSize: e.size in t ? `${t[e.size]}px` : e.size } : null);
}
const pl = "0 0 24 24", wl = (e) => e, mn = (e) => `ionicons ${e}`, mo = {
  "mdi-": (e) => `mdi ${e}`,
  "icon-": wl,
  // fontawesome equiv
  "bt-": (e) => `bt ${e}`,
  "eva-": (e) => `eva ${e}`,
  "ion-md": mn,
  "ion-ios": mn,
  "ion-logo": mn,
  "iconfont ": wl,
  "ti-": (e) => `themify-icon ${e}`,
  "bi-": (e) => `bootstrap-icons ${e}`
}, go = {
  o_: "-outlined",
  r_: "-round",
  s_: "-sharp"
}, ho = {
  sym_o_: "-outlined",
  sym_r_: "-rounded",
  sym_s_: "-sharp"
}, Ai = new RegExp("^(" + Object.keys(mo).join("|") + ")"), Fi = new RegExp("^(" + Object.keys(go).join("|") + ")"), kl = new RegExp("^(" + Object.keys(ho).join("|") + ")"), Pi = /^[Mm]\s?[-+]?\.?\d/, zi = /^img:/, Hi = /^svguse:/, Ii = /^ion-/, Di = /^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /, ke = ee({
  name: "QIcon",
  props: {
    ...gt,
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
    const { proxy: { $q: n } } = J(), l = ht(e), o = d(
      () => "q-icon" + (e.left === !0 ? " on-left" : "") + (e.right === !0 ? " on-right" : "") + (e.color !== void 0 ? ` text-${e.color}` : "")
    ), i = d(() => {
      let a, u = e.name;
      if (u === "none" || !u)
        return { none: !0 };
      if (n.iconMapFn !== null) {
        const r = n.iconMapFn(u);
        if (r !== void 0)
          if (r.icon !== void 0) {
            if (u = r.icon, u === "none" || !u)
              return { none: !0 };
          } else
            return {
              cls: r.cls,
              content: r.content !== void 0 ? r.content : " "
            };
      }
      if (Pi.test(u) === !0) {
        const [r, m = pl] = u.split("|");
        return {
          svg: !0,
          viewBox: m,
          nodes: r.split("&&").map((v) => {
            const [c, y, _] = v.split("@@");
            return b("path", { style: y, d: c, transform: _ });
          })
        };
      }
      if (zi.test(u) === !0)
        return {
          img: !0,
          src: u.substring(4)
        };
      if (Hi.test(u) === !0) {
        const [r, m = pl] = u.split("|");
        return {
          svguse: !0,
          src: r.substring(7),
          viewBox: m
        };
      }
      let f = " ";
      const g = u.match(Ai);
      if (g !== null)
        a = mo[g[1]](u);
      else if (Di.test(u) === !0)
        a = u;
      else if (Ii.test(u) === !0)
        a = `ionicons ion-${n.platform.is.ios === !0 ? "ios" : "md"}${u.substring(3)}`;
      else if (kl.test(u) === !0) {
        a = "notranslate material-symbols";
        const r = u.match(kl);
        r !== null && (u = u.substring(6), a += ho[r[1]]), f = u;
      } else {
        a = "notranslate material-icons";
        const r = u.match(Fi);
        r !== null && (u = u.substring(2), a += go[r[1]]), f = u;
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
      return i.value.none === !0 ? b(e.tag, a, ve(t.default)) : i.value.img === !0 ? b("span", a, Le(t.default, [
        b("img", { src: i.value.src })
      ])) : i.value.svg === !0 ? b("span", a, Le(t.default, [
        b("svg", {
          viewBox: i.value.viewBox || "0 0 24 24"
        }, i.value.nodes)
      ])) : i.value.svguse === !0 ? b("span", a, Le(t.default, [
        b("svg", {
          viewBox: i.value.viewBox
        }, [
          b("use", { "xlink:href": i.value.src })
        ])
      ])) : (i.value.cls !== void 0 && (a.class += " " + i.value.cls), b(e.tag, a, Le(t.default, [
        i.value.content
      ])));
    };
  }
});
function bo(e, t) {
  const n = N(null), l = d(() => e.disable === !0 ? null : b("span", {
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
const nn = {
  name: String
};
function yo(e = {}) {
  return (t, n, l) => {
    t[n](
      b("input", {
        class: "hidden" + (l || ""),
        ...e.value
      })
    );
  };
}
function po(e) {
  return d(() => e.name || e.for);
}
const wo = {
  xs: 30,
  sm: 35,
  md: 40,
  lg: 50,
  xl: 60
}, ko = {
  ..._e,
  ...gt,
  ...nn,
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
}, So = ["update:modelValue"];
function xo(e, t) {
  const { props: n, slots: l, emit: o, proxy: i } = J(), { $q: a } = i, u = Ce(n, a), f = N(null), { refocusTargetEl: g, refocusTarget: r } = bo(n, f), m = ht(n, wo), v = d(
    () => n.val !== void 0 && Array.isArray(n.modelValue)
  ), c = d(() => {
    const S = qe(n.val);
    return v.value === !0 ? n.modelValue.findIndex((j) => qe(j) === S) : -1;
  }), y = d(() => v.value === !0 ? c.value > -1 : qe(n.modelValue) === qe(n.trueValue)), _ = d(() => v.value === !0 ? c.value === -1 : qe(n.modelValue) === qe(n.falseValue)), h = d(
    () => y.value === !1 && _.value === !1
  ), T = d(() => n.disable === !0 ? -1 : n.tabindex || 0), w = d(
    () => `q-${e} cursor-pointer no-outline row inline no-wrap items-center` + (n.disable === !0 ? " disabled" : "") + (u.value === !0 ? ` q-${e}--dark` : "") + (n.dense === !0 ? ` q-${e}--dense` : "") + (n.leftLabel === !0 ? " reverse" : "")
  ), p = d(() => {
    const S = y.value === !0 ? "truthy" : _.value === !0 ? "falsy" : "indet", j = n.color !== void 0 && (n.keepColor === !0 || (e === "toggle" ? y.value === !0 : _.value !== !0)) ? ` text-${n.color}` : "";
    return `q-${e}__inner relative-position non-selectable q-${e}__inner--${S}${j}`;
  }), $ = d(() => {
    const S = { type: "checkbox" };
    return n.name !== void 0 && Object.assign(S, {
      // see https://vuejs.org/guide/extras/render-function.html#creating-vnodes (.prop)
      ".checked": y.value,
      "^checked": y.value === !0 ? "checked" : void 0,
      name: n.name,
      value: v.value === !0 ? n.val : n.trueValue
    }), S;
  }), C = yo($), H = d(() => {
    const S = {
      tabindex: T.value,
      role: e === "toggle" ? "switch" : "checkbox",
      "aria-label": n.label,
      "aria-checked": h.value === !0 ? "mixed" : y.value === !0 ? "true" : "false"
    };
    return n.disable === !0 && (S["aria-disabled"] = "true"), S;
  });
  function A(S) {
    S !== void 0 && (oe(S), r(S)), n.disable !== !0 && o("update:modelValue", Q(), S);
  }
  function Q() {
    if (v.value === !0) {
      if (y.value === !0) {
        const S = n.modelValue.slice();
        return S.splice(c.value, 1), S;
      }
      return n.modelValue.concat([n.val]);
    }
    if (y.value === !0) {
      if (n.toggleOrder !== "ft" || n.toggleIndeterminate === !1)
        return n.falseValue;
    } else if (_.value === !0) {
      if (n.toggleOrder === "ft" || n.toggleIndeterminate === !1)
        return n.trueValue;
    } else
      return n.toggleOrder !== "ft" ? n.trueValue : n.falseValue;
    return n.indeterminateValue;
  }
  function q(S) {
    (S.keyCode === 13 || S.keyCode === 32) && oe(S);
  }
  function E(S) {
    (S.keyCode === 13 || S.keyCode === 32) && A(S);
  }
  const L = t(y, h);
  return Object.assign(i, { toggle: A }), () => {
    const S = L();
    n.disable !== !0 && C(
      S,
      "unshift",
      ` q-${e}__native absolute q-ma-none q-pa-none`
    );
    const j = [
      b("div", {
        class: p.value,
        style: m.value,
        "aria-hidden": "true"
      }, S)
    ];
    g.value !== null && j.push(g.value);
    const x = n.label !== void 0 ? Le(l.default, [n.label]) : ve(l.default);
    return x !== void 0 && j.push(
      b("div", {
        class: `q-${e}__label q-anchor--skip`
      }, x)
    ), b("div", {
      ref: f,
      class: w.value,
      ...H.value,
      onClick: A,
      onKeydown: q,
      onKeyup: E
    }, j);
  };
}
const ji = b("div", {
  key: "svg",
  class: "q-checkbox__bg absolute"
}, [
  b("svg", {
    class: "q-checkbox__svg fit absolute-full",
    viewBox: "0 0 24 24"
  }, [
    b("path", {
      class: "q-checkbox__truthy",
      fill: "none",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    }),
    b("path", {
      class: "q-checkbox__indet",
      d: "M4,14H20V10H4"
    })
  ])
]), _o = ee({
  name: "QCheckbox",
  props: ko,
  emits: So,
  setup(e) {
    function t(n, l) {
      const o = d(
        () => (n.value === !0 ? e.checkedIcon : l.value === !0 ? e.indeterminateIcon : e.uncheckedIcon) || null
      );
      return () => o.value !== null ? [
        b("div", {
          key: "icon",
          class: "q-checkbox__icon-container absolute-full flex flex-center no-wrap"
        }, [
          b(ke, {
            class: "q-checkbox__icon",
            name: o.value
          })
        ])
      ] : [ji];
    }
    return xo("checkbox", t);
  }
}), We = ee({
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
    return () => b("div", { class: n.value }, ve(t.default));
  }
}), Vn = ee({
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
    return () => b("div", {
      style: o.value,
      class: l.value
    }, ve(t.default));
  }
});
function Sl(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
function xl(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Ni(e, t) {
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
function _l(e, t) {
  return Array.isArray(t) === !0 ? e.length === t.length && e.every((n, l) => n === t[l]) : e.length === 1 && e[0] === t;
}
function Ki(e, t) {
  return Array.isArray(e) === !0 ? _l(e, t) : Array.isArray(t) === !0 ? _l(t, e) : e === t;
}
function Wi(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (Ki(e[n], t[n]) === !1)
      return !1;
  return !0;
}
const Co = {
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
function qo({ fallbackTag: e, useDisableForRouterLinkProps: t = !0 } = {}) {
  const n = J(), { props: l, proxy: o, emit: i } = n, a = vo(n), u = d(() => l.disable !== !0 && l.href !== void 0), f = t === !0 ? d(
    () => a === !0 && l.disable !== !0 && u.value !== !0 && l.to !== void 0 && l.to !== null && l.to !== ""
  ) : d(
    () => a === !0 && u.value !== !0 && l.to !== void 0 && l.to !== null && l.to !== ""
  ), g = d(() => f.value === !0 ? w(l.to) : null), r = d(() => g.value !== null), m = d(() => u.value === !0 || r.value === !0), v = d(() => l.type === "a" || m.value === !0 ? "a" : l.tag || e || "div"), c = d(() => u.value === !0 ? {
    href: l.href,
    target: l.target
  } : r.value === !0 ? {
    href: g.value.href,
    target: l.target
  } : {}), y = d(() => {
    if (r.value === !1)
      return -1;
    const { matched: C } = g.value, { length: H } = C, A = C[H - 1];
    if (A === void 0)
      return -1;
    const Q = o.$route.matched;
    if (Q.length === 0)
      return -1;
    const q = Q.findIndex(
      xl.bind(null, A)
    );
    if (q > -1)
      return q;
    const E = Sl(C[H - 2]);
    return (
      // we are dealing with nested routes
      H > 1 && Sl(A) === E && Q[Q.length - 1].path !== E ? Q.findIndex(
        xl.bind(null, C[H - 2])
      ) : q
    );
  }), _ = d(
    () => r.value === !0 && y.value !== -1 && Ni(o.$route.params, g.value.params)
  ), h = d(
    () => _.value === !0 && y.value === o.$route.matched.length - 1 && Wi(o.$route.params, g.value.params)
  ), T = d(() => r.value === !0 ? h.value === !0 ? ` ${l.exactActiveClass} ${l.activeClass}` : l.exact === !0 ? "" : _.value === !0 ? ` ${l.activeClass}` : "" : "");
  function w(C) {
    try {
      return o.$router.resolve(C);
    } catch {
    }
    return null;
  }
  function p(C, { returnRouterError: H, to: A = l.to, replace: Q = l.replace } = {}) {
    if (l.disable === !0)
      return C.preventDefault(), Promise.resolve(!1);
    if (
      // don't redirect with control keys;
      // should match RouterLink from Vue Router
      C.metaKey || C.altKey || C.ctrlKey || C.shiftKey || C.button !== void 0 && C.button !== 0 || l.target === "_blank"
    )
      return Promise.resolve(!1);
    C.preventDefault();
    const q = o.$router[Q === !0 ? "replace" : "push"](A);
    return H === !0 ? q : q.then(() => {
    }).catch(() => {
    });
  }
  function $(C) {
    if (r.value === !0) {
      const H = (A) => p(C, A);
      i("click", C, H), C.defaultPrevented !== !0 && H();
    } else
      i("click", C);
  }
  return {
    hasRouterLink: r,
    hasHrefLink: u,
    hasLink: m,
    linkTag: v,
    resolvedLink: g,
    linkIsActive: _,
    linkIsExactActive: h,
    linkClass: T,
    linkAttrs: c,
    getLink: w,
    navigateToRouterLink: p,
    navigateOnClick: $
  };
}
function Hn(e) {
  return e !== Object(e) || e.isComposing === !0 || e.qKeyEvent === !0;
}
function Re(e, t) {
  return Hn(e) === !0 ? !1 : [].concat(t).includes(e.keyCode);
}
const Kt = ee({
  name: "QItem",
  props: {
    ..._e,
    ...Co,
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
    const { proxy: { $q: l } } = J(), o = Ce(e, l), { hasLink: i, linkAttrs: a, linkClass: u, linkTag: f, navigateOnClick: g } = qo(), r = N(null), m = N(null), v = d(
      () => e.clickable === !0 || i.value === !0 || e.tag === "label"
    ), c = d(
      () => e.disable !== !0 && v.value === !0
    ), y = d(
      () => "q-item q-item-type row no-wrap" + (e.dense === !0 ? " q-item--dense" : "") + (o.value === !0 ? " q-item--dark" : "") + (i.value === !0 && e.active === null ? u.value : e.active === !0 ? ` q-item--active${e.activeClass !== void 0 ? ` ${e.activeClass}` : ""}` : "") + (e.disable === !0 ? " disabled" : "") + (c.value === !0 ? " q-item--clickable q-link cursor-pointer " + (e.manualFocus === !0 ? "q-manual-focusable" : "q-focusable q-hoverable") + (e.focused === !0 ? " q-manual-focusable--focused" : "") : "")
    ), _ = d(() => e.insetLevel === void 0 ? null : {
      ["padding" + (l.lang.rtl === !0 ? "Right" : "Left")]: 16 + e.insetLevel * 56 + "px"
    });
    function h(p) {
      c.value === !0 && (m.value !== null && (p.qKeyEvent !== !0 && document.activeElement === r.value ? m.value.focus() : document.activeElement === m.value && r.value.focus()), g(p));
    }
    function T(p) {
      if (c.value === !0 && Re(p, 13) === !0) {
        oe(p), p.qKeyEvent = !0;
        const $ = new MouseEvent("click", p);
        $.qKeyEvent = !0, r.value.dispatchEvent($);
      }
      n("keyup", p);
    }
    function w() {
      const p = Bi(t.default, []);
      return c.value === !0 && p.unshift(
        b("div", { class: "q-focus-helper", tabindex: -1, ref: m })
      ), p;
    }
    return () => {
      const p = {
        ref: r,
        class: y.value,
        style: _.value,
        role: "listitem",
        onClick: h,
        onKeyup: T
      };
      return c.value === !0 ? (p.tabindex = e.tabindex || "0", Object.assign(p, a.value)) : v.value === !0 && (p["aria-disabled"] = "true"), b(
        f.value,
        p,
        w()
      );
    };
  }
});
function bt(e, t, n, l) {
  return Object.defineProperty(e, t, {
    get: n,
    set: l,
    enumerable: !0
  }), e;
}
const dt = N(
  !1
);
let In;
function Qi(e, t) {
  const n = /(edg|edge|edga|edgios)\/([\w.]+)/.exec(e) || /(opr)[\/]([\w.]+)/.exec(e) || /(vivaldi)[\/]([\w.]+)/.exec(e) || /(chrome|crios)[\/]([\w.]+)/.exec(e) || /(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(firefox|fxios)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[\/]([\w.]+)/.exec(e) || [];
  return {
    browser: n[5] || n[3] || n[1] || "",
    version: n[2] || n[4] || "0",
    versionNumber: n[4] || n[2] || "0",
    platform: t[0] || ""
  };
}
function Ui(e) {
  return /(ipad)/.exec(e) || /(ipod)/.exec(e) || /(windows phone)/.exec(e) || /(iphone)/.exec(e) || /(kindle)/.exec(e) || /(silk)/.exec(e) || /(android)/.exec(e) || /(win)/.exec(e) || /(mac)/.exec(e) || /(linux)/.exec(e) || /(cros)/.exec(e) || /(playbook)/.exec(e) || /(bb)/.exec(e) || /(blackberry)/.exec(e) || [];
}
const Eo = "ontouchstart" in window || window.navigator.maxTouchPoints > 0;
function Yi(e) {
  In = { is: { ...e } }, delete e.mac, delete e.desktop;
  const t = Math.min(window.innerHeight, window.innerWidth) > 414 ? "ipad" : "iphone";
  Object.assign(e, {
    mobile: !0,
    ios: !0,
    platform: t,
    [t]: !0
  });
}
function Xi(e) {
  const t = e.toLowerCase(), n = Ui(t), l = Qi(t, n), o = {};
  l.browser && (o[l.browser] = !0, o.version = l.version, o.versionNumber = parseInt(l.versionNumber, 10)), l.platform && (o[l.platform] = !0);
  const i = o.android || o.ios || o.bb || o.blackberry || o.ipad || o.iphone || o.ipod || o.kindle || o.playbook || o.silk || o["windows phone"];
  return i === !0 || t.indexOf("mobile") > -1 ? (o.mobile = !0, o.edga || o.edgios ? (o.edge = !0, l.browser = "edge") : o.crios ? (o.chrome = !0, l.browser = "chrome") : o.fxios && (o.firefox = !0, l.browser = "firefox")) : o.desktop = !0, (o.ipod || o.ipad || o.iphone) && (o.ios = !0), o["windows phone"] && (o.winphone = !0, delete o["windows phone"]), (o.chrome || o.opr || o.safari || o.vivaldi || o.mobile === !0 && o.ios !== !0 && i !== !0) && (o.webkit = !0), o.edg && (l.browser = "edgechromium", o.edgeChromium = !0), (o.safari && o.blackberry || o.bb) && (l.browser = "blackberry", o.blackberry = !0), o.safari && o.playbook && (l.browser = "playbook", o.playbook = !0), o.opr && (l.browser = "opera", o.opera = !0), o.safari && o.android && (l.browser = "android", o.android = !0), o.safari && o.kindle && (l.browser = "kindle", o.kindle = !0), o.safari && o.silk && (l.browser = "silk", o.silk = !0), o.vivaldi && (l.browser = "vivaldi", o.vivaldi = !0), o.name = l.browser, o.platform = l.platform, t.indexOf("electron") > -1 ? o.electron = !0 : document.location.href.indexOf("-extension://") > -1 ? o.bex = !0 : (window.Capacitor !== void 0 ? (o.capacitor = !0, o.nativeMobile = !0, o.nativeMobileWrapper = "capacitor") : (window._cordovaNative !== void 0 || window.cordova !== void 0) && (o.cordova = !0, o.nativeMobile = !0, o.nativeMobileWrapper = "cordova"), Eo === !0 && o.mac === !0 && (o.desktop === !0 && o.safari === !0 || o.nativeMobile === !0 && o.android !== !0 && o.ios !== !0 && o.ipad !== !0) && Yi(o)), o;
}
const Cl = navigator.userAgent || navigator.vendor || window.opera, Zi = {
  has: {
    touch: !1,
    webStorage: !1
  },
  within: { iframe: !1 }
}, ge = {
  userAgent: Cl,
  is: Xi(Cl),
  has: {
    touch: Eo
  },
  within: {
    iframe: window.self !== window.top
  }
}, Bn = {
  install(e) {
    const { $q: t } = e;
    dt.value === !0 ? (e.onSSRHydrated.push(() => {
      Object.assign(t.platform, ge), dt.value = !1, In = void 0;
    }), t.platform = oo(this)) : t.platform = this;
  }
};
{
  let e;
  bt(ge.has, "webStorage", () => {
    if (e !== void 0)
      return e;
    try {
      if (window.localStorage)
        return e = !0, !0;
    } catch {
    }
    return e = !1, !1;
  }), ge.is.ios === !0 && window.navigator.vendor.toLowerCase().indexOf("apple"), dt.value === !0 ? Object.assign(Bn, ge, In, Zi) : Object.assign(Bn, ge);
}
const Gi = {
  size: {
    type: [Number, String],
    default: "1em"
  },
  color: String
};
function Ji(e) {
  return {
    cSize: d(() => e.size in En ? `${En[e.size]}px` : e.size),
    classes: d(
      () => "q-spinner" + (e.color ? ` text-${e.color}` : "")
    )
  };
}
const Wt = ee({
  name: "QSpinner",
  props: {
    ...Gi,
    thickness: {
      type: Number,
      default: 5
    }
  },
  setup(e) {
    const { cSize: t, classes: n } = Ji(e);
    return () => b("svg", {
      class: n.value + " q-spinner-mat",
      width: t.value,
      height: t.value,
      viewBox: "25 25 50 50"
    }, [
      b("circle", {
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
function ea({ validate: e, resetValidation: t, requiresQForm: n }) {
  const l = bi(fo, !1);
  if (l !== !1) {
    const { props: o, proxy: i } = J();
    Object.assign(i, { validate: e, resetValidation: t }), Z(() => o.disable, (a) => {
      a === !0 ? (typeof t == "function" && t(), l.unbindComponent(i)) : l.bindComponent(i);
    }), mt(() => {
      o.disable !== !0 && l.bindComponent(i);
    }), me(() => {
      o.disable !== !0 && l.unbindComponent(i);
    });
  } else
    n === !0 && console.error("Parent QForm not found on useFormChild()!");
}
const ql = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/, El = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/, Vl = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/, Ot = /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/, Rt = /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/, gn = {
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
  hexColor: (e) => ql.test(e),
  hexaColor: (e) => El.test(e),
  hexOrHexaColor: (e) => Vl.test(e),
  rgbColor: (e) => Ot.test(e),
  rgbaColor: (e) => Rt.test(e),
  rgbOrRgbaColor: (e) => Ot.test(e) || Rt.test(e),
  hexOrRgbColor: (e) => ql.test(e) || Ot.test(e),
  hexaOrRgbaColor: (e) => El.test(e) || Rt.test(e),
  anyColor: (e) => Vl.test(e) || Ot.test(e) || Rt.test(e)
};
function Dn(e, t = 250, n) {
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
const ta = [!0, !1, "ondemand"], na = {
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
    validator: (e) => ta.includes(e)
  }
};
function la(e, t) {
  const { props: n, proxy: l } = J(), o = N(!1), i = N(null), a = N(null);
  ea({ validate: y, resetValidation: c });
  let u = 0, f;
  const g = d(
    () => n.rules !== void 0 && n.rules !== null && n.rules.length !== 0
  ), r = d(
    () => n.disable !== !0 && g.value === !0
  ), m = d(
    () => n.error === !0 || o.value === !0
  ), v = d(() => typeof n.errorMessage == "string" && n.errorMessage.length !== 0 ? n.errorMessage : i.value);
  Z(() => n.modelValue, () => {
    _();
  }), Z(() => n.reactiveRules, (T) => {
    T === !0 ? f === void 0 && (f = Z(() => n.rules, () => {
      _(!0);
    })) : f !== void 0 && (f(), f = void 0);
  }, { immediate: !0 }), Z(e, (T) => {
    T === !0 ? a.value === null && (a.value = !1) : a.value === !1 && (a.value = !0, r.value === !0 && n.lazyRules !== "ondemand" && t.value === !1 && h());
  });
  function c() {
    u++, t.value = !1, a.value = null, o.value = !1, i.value = null, h.cancel();
  }
  function y(T = n.modelValue) {
    if (r.value !== !0)
      return !0;
    const w = ++u, p = t.value !== !0 ? () => {
      a.value = !0;
    } : () => {
    }, $ = (H, A) => {
      H === !0 && p(), o.value = H, i.value = A || null, t.value = !1;
    }, C = [];
    for (let H = 0; H < n.rules.length; H++) {
      const A = n.rules[H];
      let Q;
      if (typeof A == "function" ? Q = A(T, gn) : typeof A == "string" && gn[A] !== void 0 && (Q = gn[A](T)), Q === !1 || typeof Q == "string")
        return $(!0, Q), !1;
      Q !== !0 && Q !== void 0 && C.push(Q);
    }
    return C.length === 0 ? ($(!1), !0) : (t.value = !0, Promise.all(C).then(
      (H) => {
        if (H === void 0 || Array.isArray(H) === !1 || H.length === 0)
          return w === u && $(!1), !0;
        const A = H.find((Q) => Q === !1 || typeof Q == "string");
        return w === u && $(A !== void 0, A), A === void 0;
      },
      (H) => (w === u && (console.error(H), $(!0)), !1)
    ));
  }
  function _(T) {
    r.value === !0 && n.lazyRules !== "ondemand" && (a.value === !0 || n.lazyRules !== !0 && T !== !0) && h();
  }
  const h = Dn(y, 0);
  return me(() => {
    f !== void 0 && f(), h.cancel();
  }), Object.assign(l, { resetValidation: c, validate: y }), bt(l, "hasError", () => m.value), {
    isDirtyModel: a,
    hasRules: g,
    hasError: m,
    errorMessage: v,
    validate: y,
    resetValidation: c
  };
}
const Bl = /^on[A-Z]/;
function oa(e, t) {
  const n = {
    listeners: N({}),
    attributes: N({})
  };
  function l() {
    const o = {}, i = {};
    for (const a in e)
      a !== "class" && a !== "style" && Bl.test(a) === !1 && (o[a] = e[a]);
    for (const a in t.props)
      Bl.test(a) === !0 && (i[a] = t.props[a]);
    n.attributes.value = o, n.listeners.value = i;
  }
  return io(l), l(), n;
}
let hn, At = 0;
const fe = new Array(256);
for (let e = 0; e < 256; e++)
  fe[e] = (e + 256).toString(16).substring(1);
const ia = (() => {
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
})(), Ml = 4096;
function aa() {
  (hn === void 0 || At + 16 > Ml) && (At = 0, hn = ia(Ml));
  const e = Array.prototype.slice.call(hn, At, At += 16);
  return e[6] = e[6] & 15 | 64, e[8] = e[8] & 63 | 128, fe[e[0]] + fe[e[1]] + fe[e[2]] + fe[e[3]] + "-" + fe[e[4]] + fe[e[5]] + "-" + fe[e[6]] + fe[e[7]] + "-" + fe[e[8]] + fe[e[9]] + "-" + fe[e[10]] + fe[e[11]] + fe[e[12]] + fe[e[13]] + fe[e[14]] + fe[e[15]];
}
function Mn(e) {
  return e === void 0 ? `f_${aa()}` : e;
}
function qt(e) {
  return e != null && ("" + e).length !== 0;
}
const ln = {
  ..._e,
  ...na,
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
}, jn = ["update:modelValue", "clear", "focus", "blur", "popupShow", "popupHide"];
function Nn() {
  const { props: e, attrs: t, proxy: n, vnode: l } = J();
  return {
    isDark: Ce(e, n.$q),
    editable: d(
      () => e.disable !== !0 && e.readonly !== !0
    ),
    innerLoading: N(!1),
    focused: N(!1),
    hasPopupOpen: !1,
    splitAttrs: oa(t, l),
    targetUid: N(Mn(e.for)),
    rootRef: N(null),
    targetRef: N(null),
    controlRef: N(null)
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
function Kn(e) {
  const { props: t, emit: n, slots: l, attrs: o, proxy: i } = J(), { $q: a } = i;
  let u = null;
  e.hasValue === void 0 && (e.hasValue = d(() => qt(t.modelValue))), e.emitValue === void 0 && (e.emitValue = (B) => {
    n("update:modelValue", B);
  }), e.controlEvents === void 0 && (e.controlEvents = {
    onFocusin: q,
    onFocusout: E
  }), Object.assign(e, {
    clearValue: L,
    onControlFocusin: q,
    onControlFocusout: E,
    focus: A
  }), e.computedCounter === void 0 && (e.computedCounter = d(() => {
    if (t.counter !== !1) {
      const B = typeof t.modelValue == "string" || typeof t.modelValue == "number" ? ("" + t.modelValue).length : Array.isArray(t.modelValue) === !0 ? t.modelValue.length : 0, U = t.maxlength !== void 0 ? t.maxlength : t.maxValues;
      return B + (U !== void 0 ? " / " + U : "");
    }
  }));
  const {
    isDirtyModel: f,
    hasRules: g,
    hasError: r,
    errorMessage: m,
    resetValidation: v
  } = la(e.focused, e.innerLoading), c = e.floatingLabel !== void 0 ? d(() => t.stackLabel === !0 || e.focused.value === !0 || e.floatingLabel.value === !0) : d(() => t.stackLabel === !0 || e.focused.value === !0 || e.hasValue.value === !0), y = d(
    () => t.bottomSlots === !0 || t.hint !== void 0 || g.value === !0 || t.counter === !0 || t.error !== null
  ), _ = d(() => t.filled === !0 ? "filled" : t.outlined === !0 ? "outlined" : t.borderless === !0 ? "borderless" : t.standout ? "standout" : "standard"), h = d(
    () => `q-field row no-wrap items-start q-field--${_.value}` + (e.fieldClass !== void 0 ? ` ${e.fieldClass.value}` : "") + (t.rounded === !0 ? " q-field--rounded" : "") + (t.square === !0 ? " q-field--square" : "") + (c.value === !0 ? " q-field--float" : "") + (w.value === !0 ? " q-field--labeled" : "") + (t.dense === !0 ? " q-field--dense" : "") + (t.itemAligned === !0 ? " q-field--item-aligned q-item-type" : "") + (e.isDark.value === !0 ? " q-field--dark" : "") + (e.getControl === void 0 ? " q-field--auto-height" : "") + (e.focused.value === !0 ? " q-field--focused" : "") + (r.value === !0 ? " q-field--error" : "") + (r.value === !0 || e.focused.value === !0 ? " q-field--highlighted" : "") + (t.hideBottomSpace !== !0 && y.value === !0 ? " q-field--with-bottom" : "") + (t.disable === !0 ? " q-field--disabled" : t.readonly === !0 ? " q-field--readonly" : "")
  ), T = d(
    () => "q-field__control relative-position row no-wrap" + (t.bgColor !== void 0 ? ` bg-${t.bgColor}` : "") + (r.value === !0 ? " text-negative" : typeof t.standout == "string" && t.standout.length !== 0 && e.focused.value === !0 ? ` ${t.standout}` : t.color !== void 0 ? ` text-${t.color}` : "")
  ), w = d(
    () => t.labelSlot === !0 || t.label !== void 0
  ), p = d(
    () => "q-field__label no-pointer-events absolute ellipsis" + (t.labelColor !== void 0 && r.value !== !0 ? ` text-${t.labelColor}` : "")
  ), $ = d(() => ({
    id: e.targetUid.value,
    editable: e.editable.value,
    focused: e.focused.value,
    floatingLabel: c.value,
    modelValue: t.modelValue,
    emitValue: e.emitValue
  })), C = d(() => {
    const B = {
      for: e.targetUid.value
    };
    return t.disable === !0 ? B["aria-disabled"] = "true" : t.readonly === !0 && (B["aria-readonly"] = "true"), B;
  });
  Z(() => t.for, (B) => {
    e.targetUid.value = Mn(B);
  });
  function H() {
    const B = document.activeElement;
    let U = e.targetRef !== void 0 && e.targetRef.value;
    U && (B === null || B.id !== e.targetUid.value) && (U.hasAttribute("tabindex") === !0 || (U = U.querySelector("[tabindex]")), U && U !== B && U.focus({ preventScroll: !0 }));
  }
  function A() {
    Vt(H);
  }
  function Q() {
    Vi(H);
    const B = document.activeElement;
    B !== null && e.rootRef.value.contains(B) && B.blur();
  }
  function q(B) {
    u !== null && (clearTimeout(u), u = null), e.editable.value === !0 && e.focused.value === !1 && (e.focused.value = !0, n("focus", B));
  }
  function E(B, U) {
    u !== null && clearTimeout(u), u = setTimeout(() => {
      u = null, !(document.hasFocus() === !0 && (e.hasPopupOpen === !0 || e.controlRef === void 0 || e.controlRef.value === null || e.controlRef.value.contains(document.activeElement) !== !1)) && (e.focused.value === !0 && (e.focused.value = !1, n("blur", B)), U !== void 0 && U());
    });
  }
  function L(B) {
    oe(B), a.platform.is.mobile !== !0 ? (e.targetRef !== void 0 && e.targetRef.value || e.rootRef.value).focus() : e.rootRef.value.contains(document.activeElement) === !0 && document.activeElement.blur(), t.type === "file" && (e.inputRef.value.value = null), n("update:modelValue", null), n("clear", t.modelValue), se(() => {
      v(), a.platform.is.mobile !== !0 && (f.value = !1);
    });
  }
  function S() {
    const B = [];
    return l.prepend !== void 0 && B.push(
      b("div", {
        class: "q-field__prepend q-field__marginal row no-wrap items-center",
        key: "prepend",
        onClick: Ve
      }, l.prepend())
    ), B.push(
      b("div", {
        class: "q-field__control-container col relative-position row no-wrap q-anchor--skip"
      }, j())
    ), r.value === !0 && t.noErrorIcon === !1 && B.push(
      D("error", [
        b(ke, { name: a.iconSet.field.error, color: "negative" })
      ])
    ), t.loading === !0 || e.innerLoading.value === !0 ? B.push(
      D(
        "inner-loading-append",
        l.loading !== void 0 ? l.loading() : [b(Wt, { color: t.color })]
      )
    ) : t.clearable === !0 && e.hasValue.value === !0 && e.editable.value === !0 && B.push(
      D("inner-clearable-append", [
        b(ke, {
          class: "q-field__focusable-action",
          tag: "button",
          name: t.clearIcon || a.iconSet.field.clear,
          tabindex: 0,
          type: "button",
          "aria-hidden": null,
          role: null,
          onClick: L
        })
      ])
    ), l.append !== void 0 && B.push(
      b("div", {
        class: "q-field__append q-field__marginal row no-wrap items-center",
        key: "append",
        onClick: Ve
      }, l.append())
    ), e.getInnerAppend !== void 0 && B.push(
      D("inner-append", e.getInnerAppend())
    ), e.getControlChild !== void 0 && B.push(
      e.getControlChild()
    ), B;
  }
  function j() {
    const B = [];
    return t.prefix !== void 0 && t.prefix !== null && B.push(
      b("div", {
        class: "q-field__prefix no-pointer-events row items-center"
      }, t.prefix)
    ), e.getShadowControl !== void 0 && e.hasShadow.value === !0 && B.push(
      e.getShadowControl()
    ), e.getControl !== void 0 ? B.push(e.getControl()) : l.rawControl !== void 0 ? B.push(l.rawControl()) : l.control !== void 0 && B.push(
      b("div", {
        ref: e.targetRef,
        class: "q-field__native row",
        tabindex: -1,
        ...e.splitAttrs.attributes.value,
        "data-autofocus": t.autofocus === !0 || void 0
      }, l.control($.value))
    ), w.value === !0 && B.push(
      b("div", {
        class: p.value
      }, ve(l.label, t.label))
    ), t.suffix !== void 0 && t.suffix !== null && B.push(
      b("div", {
        class: "q-field__suffix no-pointer-events row items-center"
      }, t.suffix)
    ), B.concat(ve(l.default));
  }
  function x() {
    let B, U;
    r.value === !0 ? m.value !== null ? (B = [b("div", { role: "alert" }, m.value)], U = `q--slot-error-${m.value}`) : (B = ve(l.error), U = "q--slot-error") : (t.hideHint !== !0 || e.focused.value === !0) && (t.hint !== void 0 ? (B = [b("div", t.hint)], U = `q--slot-hint-${t.hint}`) : (B = ve(l.hint), U = "q--slot-hint"));
    const te = t.counter === !0 || l.counter !== void 0;
    if (t.hideBottomSpace === !0 && te === !1 && B === void 0)
      return;
    const V = b("div", {
      key: U,
      class: "q-field__messages col"
    }, B);
    return b("div", {
      class: "q-field__bottom row items-start q-field__bottom--" + (t.hideBottomSpace !== !0 ? "animated" : "stale"),
      onClick: Ve
    }, [
      t.hideBottomSpace === !0 ? V : b(Xe, { name: "q-transition--field-message" }, () => V),
      te === !0 ? b("div", {
        class: "q-field__counter"
      }, l.counter !== void 0 ? l.counter() : e.computedCounter.value) : null
    ]);
  }
  function D(B, U) {
    return U === null ? null : b("div", {
      key: B,
      class: "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"
    }, U);
  }
  let K = !1;
  return Et(() => {
    K = !0;
  }), Fn(() => {
    K === !0 && t.autofocus === !0 && i.focus();
  }), mt(() => {
    dt.value === !0 && t.for === void 0 && (e.targetUid.value = Mn()), t.autofocus === !0 && i.focus();
  }), me(() => {
    u !== null && clearTimeout(u);
  }), Object.assign(i, { focus: A, blur: Q }), function() {
    const U = e.getControl === void 0 && l.control === void 0 ? {
      ...e.splitAttrs.attributes.value,
      "data-autofocus": t.autofocus === !0 || void 0,
      ...C.value
    } : C.value;
    return b("label", {
      ref: e.rootRef,
      class: [
        h.value,
        o.class
      ],
      style: o.style,
      ...U
    }, [
      l.before !== void 0 ? b("div", {
        class: "q-field__before q-field__marginal row no-wrap items-center",
        onClick: Ve
      }, l.before()) : null,
      b("div", {
        class: "q-field__inner relative-position col self-stretch"
      }, [
        b("div", {
          ref: e.controlRef,
          class: T.value,
          tabindex: -1,
          ...e.controlEvents
        }, S()),
        y.value === !0 ? x() : null
      ]),
      l.after !== void 0 ? b("div", {
        class: "q-field__after q-field__marginal row no-wrap items-center",
        onClick: Ve
      }, l.after()) : null
    ]);
  };
}
const ra = ee({
  name: "QField",
  inheritAttrs: !1,
  props: ln,
  emits: jn,
  setup() {
    return Kn(Nn());
  }
});
function Tn(e, t) {
  const n = e.style;
  for (const l in t)
    n[l] = t[l];
}
function ua(e) {
  if (e == null)
    return;
  if (typeof e == "string")
    try {
      return document.querySelector(e) || void 0;
    } catch {
      return;
    }
  const t = je(e);
  if (t)
    return t.$el || t;
}
function Vo(e, t) {
  if (e == null || e.contains(t) === !0)
    return !0;
  for (let n = e.nextElementSibling; n !== null; n = n.nextElementSibling)
    if (n.contains(t))
      return !0;
  return !1;
}
function sa(e, t = 250) {
  let n = !1, l;
  return function() {
    return n === !1 && (n = !0, setTimeout(() => {
      n = !1;
    }, t), l = e.apply(this, arguments)), l;
  };
}
function Tl(e, t, n, l) {
  n.modifiers.stop === !0 && Me(e);
  const o = n.modifiers.color;
  let i = n.modifiers.center;
  i = i === !0 || l === !0;
  const a = document.createElement("span"), u = document.createElement("span"), f = so(e), { left: g, top: r, width: m, height: v } = t.getBoundingClientRect(), c = Math.sqrt(m * m + v * v), y = c / 2, _ = `${(m - c) / 2}px`, h = i ? _ : `${f.left - g - y}px`, T = `${(v - c) / 2}px`, w = i ? T : `${f.top - r - y}px`;
  u.className = "q-ripple__inner", Tn(u, {
    height: `${c}px`,
    width: `${c}px`,
    transform: `translate3d(${h},${w},0) scale3d(.2,.2,1)`,
    opacity: 0
  }), a.className = `q-ripple${o ? " text-" + o : ""}`, a.setAttribute("dir", "ltr"), a.appendChild(u), t.appendChild(a);
  const p = () => {
    a.remove(), clearTimeout($);
  };
  n.abort.push(p);
  let $ = setTimeout(() => {
    u.classList.add("q-ripple__inner--enter"), u.style.transform = `translate3d(${_},${T},0) scale3d(1,1,1)`, u.style.opacity = 0.2, $ = setTimeout(() => {
      u.classList.remove("q-ripple__inner--enter"), u.classList.add("q-ripple__inner--leave"), u.style.opacity = 0, $ = setTimeout(() => {
        a.remove(), n.abort.splice(n.abort.indexOf(p), 1);
      }, 275);
    }, 250);
  }, 50);
}
function Ll(e, { modifiers: t, value: n, arg: l }) {
  const o = Object.assign({}, e.cfg.ripple, t, n);
  e.modifiers = {
    early: o.early === !0,
    stop: o.stop === !0,
    center: o.center === !0,
    color: o.color || l,
    keyCodes: [].concat(o.keyCodes || 13)
  };
}
const Bo = uo(
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
          l.enabled === !0 && o.qSkipRipple !== !0 && o.type === (l.modifiers.early === !0 ? "pointerdown" : "click") && Tl(o, e, l, o.qKeyEvent === !0);
        },
        keystart: sa((o) => {
          l.enabled === !0 && o.qSkipRipple !== !0 && Re(o, l.modifiers.keyCodes) === !0 && o.type === `key${l.modifiers.early === !0 ? "down" : "up"}` && Tl(o, e, l, !0);
        }, 300)
      };
      Ll(l, t), e.__qripple = l, _t(l, "main", [
        [e, "pointerdown", "start", "passive"],
        [e, "click", "start", "passive"],
        [e, "keydown", "keystart", "passive"],
        [e, "keyup", "keystart", "passive"]
      ]);
    },
    updated(e, t) {
      if (t.oldValue !== t.value) {
        const n = e.__qripple;
        n !== void 0 && (n.enabled = t.value !== !1, n.enabled === !0 && Object(t.value) === t.value && Ll(n, t));
      }
    },
    beforeUnmount(e) {
      const t = e.__qripple;
      t !== void 0 && (t.abort.forEach((n) => {
        n();
      }), Nt(t, "main"), delete e._qripple);
    }
  }
), ca = {
  xs: 8,
  sm: 10,
  md: 14,
  lg: 20,
  xl: 24
}, da = ee({
  name: "QChip",
  props: {
    ..._e,
    ...gt,
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
    const { proxy: { $q: l } } = J(), o = Ce(e, l), i = ht(e, ca), a = d(() => e.selected === !0 || e.icon !== void 0), u = d(() => e.selected === !0 ? e.iconSelected || l.iconSet.chip.selected : e.icon), f = d(() => e.iconRemove || l.iconSet.chip.remove), g = d(
      () => e.disable === !1 && (e.clickable === !0 || e.selected !== null)
    ), r = d(() => {
      const h = e.outline === !0 && e.color || e.textColor;
      return "q-chip row inline no-wrap items-center" + (e.outline === !1 && e.color !== void 0 ? ` bg-${e.color}` : "") + (h ? ` text-${h} q-chip--colored` : "") + (e.disable === !0 ? " disabled" : "") + (e.dense === !0 ? " q-chip--dense" : "") + (e.outline === !0 ? " q-chip--outline" : "") + (e.selected === !0 ? " q-chip--selected" : "") + (g.value === !0 ? " q-chip--clickable cursor-pointer non-selectable q-hoverable" : "") + (e.square === !0 ? " q-chip--square" : "") + (o.value === !0 ? " q-chip--dark q-dark" : "");
    }), m = d(() => {
      const h = e.disable === !0 ? { tabindex: -1, "aria-disabled": "true" } : { tabindex: e.tabindex || 0 }, T = {
        ...h,
        role: "button",
        "aria-hidden": "false",
        "aria-label": e.removeAriaLabel || l.lang.label.remove
      };
      return { chip: h, remove: T };
    });
    function v(h) {
      h.keyCode === 13 && c(h);
    }
    function c(h) {
      e.disable || (n("update:selected", !e.selected), n("click", h));
    }
    function y(h) {
      (h.keyCode === void 0 || h.keyCode === 13) && (oe(h), e.disable === !1 && (n("update:modelValue", !1), n("remove")));
    }
    function _() {
      const h = [];
      g.value === !0 && h.push(
        b("div", { class: "q-focus-helper" })
      ), a.value === !0 && h.push(
        b(ke, {
          class: "q-chip__icon q-chip__icon--left",
          name: u.value
        })
      );
      const T = e.label !== void 0 ? [b("div", { class: "ellipsis" }, [e.label])] : void 0;
      return h.push(
        b("div", {
          class: "q-chip__content col row no-wrap items-center q-anchor--skip"
        }, Mi(t.default, T))
      ), e.iconRight && h.push(
        b(ke, {
          class: "q-chip__icon q-chip__icon--right",
          name: e.iconRight
        })
      ), e.removable === !0 && h.push(
        b(ke, {
          class: "q-chip__icon q-chip__icon--remove cursor-pointer",
          name: f.value,
          ...m.value.remove,
          onClick: y,
          onKeyup: y
        })
      ), h;
    }
    return () => {
      if (e.modelValue === !1)
        return;
      const h = {
        class: r.value,
        style: i.value
      };
      return g.value === !0 && Object.assign(
        h,
        m.value.chip,
        { onClick: c, onKeyup: v }
      ), Ti(
        "div",
        h,
        _(),
        "ripple",
        e.ripple !== !1 && e.disable !== !0,
        () => [[Bo, e.ripple]]
      );
    };
  }
});
function Ln() {
  if (window.getSelection !== void 0) {
    const e = window.getSelection();
    e.empty !== void 0 ? e.empty() : e.removeAllRanges !== void 0 && (e.removeAllRanges(), Bn.is.mobile !== !0 && e.addRange(document.createRange()));
  } else
    document.selection !== void 0 && document.selection.empty();
}
const Mo = {
  target: {
    default: !0
  },
  noParentEvent: Boolean,
  contextMenu: Boolean
};
function To({
  showing: e,
  avoidEmit: t,
  // required for QPopupProxy (true)
  configureAnchorEl: n
  // optional
}) {
  const { props: l, proxy: o, emit: i } = J(), a = N(null);
  let u = null;
  function f(c) {
    return a.value === null ? !1 : c === void 0 || c.touches === void 0 || c.touches.length <= 1;
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
      o.hide(c), Ve(c), se(() => {
        o.show(c), c.qAnchorHandled = !0;
      });
    },
    prevent: Ve,
    mobileTouch(c) {
      if (g.mobileCleanup(c), f(c) !== !0)
        return;
      o.hide(c), a.value.classList.add("non-selectable");
      const y = c.target;
      _t(g, "anchor", [
        [y, "touchmove", "mobileCleanup", "passive"],
        [y, "touchend", "mobileCleanup", "passive"],
        [y, "touchcancel", "mobileCleanup", "passive"],
        [a.value, "contextmenu", "prevent", "notPassive"]
      ]), u = setTimeout(() => {
        u = null, o.show(c), c.qAnchorHandled = !0;
      }, 300);
    },
    mobileCleanup(c) {
      a.value.classList.remove("non-selectable"), u !== null && (clearTimeout(u), u = null), e.value === !0 && c !== void 0 && Ln();
    }
  }), n = function(c = l.contextMenu) {
    if (l.noParentEvent === !0 || a.value === null)
      return;
    let y;
    c === !0 ? o.$q.platform.is.mobile === !0 ? y = [
      [a.value, "touchstart", "mobileTouch", "passive"]
    ] : y = [
      [a.value, "mousedown", "hide", "passive"],
      [a.value, "contextmenu", "contextClick", "notPassive"]
    ] : y = [
      [a.value, "click", "toggle", "passive"],
      [a.value, "keyup", "toggleKey", "passive"]
    ], _t(g, "anchor", y);
  });
  function r() {
    Nt(g, "anchor");
  }
  function m(c) {
    for (a.value = c; a.value.classList.contains("q-anchor--skip"); )
      a.value = a.value.parentNode;
    n();
  }
  function v() {
    if (l.target === !1 || l.target === "" || o.$el.parentNode === null)
      a.value = null;
    else if (l.target === !0)
      m(o.$el.parentNode);
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
  return Z(() => l.contextMenu, (c) => {
    a.value !== null && (r(), n(c));
  }), Z(() => l.target, () => {
    a.value !== null && r(), v();
  }), Z(() => l.noParentEvent, (c) => {
    a.value !== null && (c === !0 ? r() : n());
  }), mt(() => {
    v(), t !== !0 && l.modelValue === !0 && a.value === null && i("update:modelValue", !1);
  }), me(() => {
    u !== null && clearTimeout(u), r();
  }), {
    anchorEl: a,
    canShow: f,
    anchorEvents: g
  };
}
function Lo(e, t) {
  const n = N(null);
  let l;
  function o(u, f) {
    const g = `${f !== void 0 ? "add" : "remove"}EventListener`, r = f !== void 0 ? f : l;
    u !== window && u[g]("scroll", r, ye.passive), window[g]("scroll", r, ye.passive), l = f;
  }
  function i() {
    n.value !== null && (o(n.value), n.value = null);
  }
  const a = Z(() => e.noParentEvent, () => {
    n.value !== null && (i(), t());
  });
  return me(a), {
    localScrollTarget: n,
    unconfigureScrollTarget: i,
    changeScrollEvent: o
  };
}
const Wn = {
  modelValue: {
    type: Boolean,
    default: null
  },
  "onUpdate:modelValue": [Function, Array]
}, Qn = [
  "beforeShow",
  "show",
  "beforeHide",
  "hide"
];
function Un({
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
  const a = J(), { props: u, emit: f, proxy: g } = a;
  let r;
  function m(w) {
    e.value === !0 ? y(w) : v(w);
  }
  function v(w) {
    if (u.disable === !0 || w !== void 0 && w.qAnchorHandled === !0 || t !== void 0 && t(w) !== !0)
      return;
    const p = u["onUpdate:modelValue"] !== void 0;
    p === !0 && (f("update:modelValue", !0), r = w, se(() => {
      r === w && (r = void 0);
    })), (u.modelValue === null || p === !1) && c(w);
  }
  function c(w) {
    e.value !== !0 && (e.value = !0, f("beforeShow", w), l !== void 0 ? l(w) : f("show", w));
  }
  function y(w) {
    if (u.disable === !0)
      return;
    const p = u["onUpdate:modelValue"] !== void 0;
    p === !0 && (f("update:modelValue", !1), r = w, se(() => {
      r === w && (r = void 0);
    })), (u.modelValue === null || p === !1) && _(w);
  }
  function _(w) {
    e.value !== !1 && (e.value = !1, f("beforeHide", w), o !== void 0 ? o(w) : f("hide", w));
  }
  function h(w) {
    u.disable === !0 && w === !0 ? u["onUpdate:modelValue"] !== void 0 && f("update:modelValue", !1) : w === !0 !== e.value && (w === !0 ? c : _)(r);
  }
  Z(() => u.modelValue, h), n !== void 0 && vo(a) === !0 && Z(() => g.$route.fullPath, () => {
    n.value === !0 && e.value === !0 && y();
  }), i === !0 && mt(() => {
    h(u.modelValue);
  });
  const T = { show: v, hide: y, toggle: m };
  return Object.assign(g, T), T;
}
const $l = {};
let fa = 1, va = document.body;
function $o(e, t) {
  const n = document.createElement("div");
  if (n.id = t !== void 0 ? `q-portal--${t}--${fa++}` : e, $l.globalNodes !== void 0) {
    const l = $l.globalNodes.class;
    l !== void 0 && (n.className = l);
  }
  return va.appendChild(n), n;
}
function Oo(e) {
  e.remove();
}
const ut = [];
function ma(e) {
  return ut.find(
    (t) => t.contentEl !== null && t.contentEl.contains(e)
  );
}
function Ro(e, t) {
  do {
    if (e.$options.name === "QMenu") {
      if (e.hide(t), e.$props.separateClosePopup === !0)
        return It(e);
    } else if (e.__qPortal === !0) {
      const n = It(e);
      return n !== void 0 && n.$options.name === "QPopupProxy" ? (e.hide(t), n) : e;
    }
    e = It(e);
  } while (e != null);
}
function ga(e, t, n) {
  for (; n !== 0 && e !== void 0 && e !== null; ) {
    if (e.__qPortal === !0) {
      if (n--, e.$options.name === "QMenu") {
        e = Ro(e, t);
        continue;
      }
      e.hide(t);
    }
    e = It(e);
  }
}
function ha(e) {
  for (e = e.parent; e != null; ) {
    if (e.type.name === "QGlobalDialog")
      return !0;
    if (e.type.name === "QDialog" || e.type.name === "QMenu")
      return !1;
    e = e.parent;
  }
  return !1;
}
function Yn(e, t, n, l) {
  const o = N(!1), i = N(!1);
  let a = null;
  const u = {}, f = l === "dialog" && ha(e);
  function g(m) {
    if (m === !0) {
      yl(u), i.value = !0;
      return;
    }
    i.value = !1, o.value === !1 && (f === !1 && a === null && (a = $o(!1, l)), o.value = !0, ut.push(e.proxy), Ei(u));
  }
  function r(m) {
    if (i.value = !1, m !== !0)
      return;
    yl(u), o.value = !1;
    const v = ut.indexOf(e.proxy);
    v !== -1 && ut.splice(v, 1), a !== null && (Oo(a), a = null);
  }
  return yi(() => {
    r(!0);
  }), e.proxy.__qPortal = !0, bt(e.proxy, "contentEl", () => t.value), {
    showPortal: g,
    hidePortal: r,
    portalIsActive: o,
    portalIsAccessible: i,
    renderPortal: () => f === !0 ? n() : o.value === !0 ? [b(pi, { to: a }, n())] : void 0
  };
}
const Xn = {
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
function Zn(e, t = () => {
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
function Gn() {
  let e;
  const t = J();
  function n() {
    e = void 0;
  }
  return Et(n), me(n), {
    removeTick: n,
    registerTick(l) {
      e = l, se(() => {
        e === l && (zn(t) === !1 && e(), e = void 0);
      });
    }
  };
}
function Jn() {
  let e = null;
  const t = J();
  function n() {
    e !== null && (clearTimeout(e), e = null);
  }
  return Et(n), me(n), {
    removeTimeout: n,
    registerTimeout(l, o) {
      n(), zn(t) === !1 && (e = setTimeout(l, o));
    }
  };
}
const ba = [null, document, document.body, document.scrollingElement, document.documentElement];
function Ao(e, t) {
  let n = ua(t);
  if (n === void 0) {
    if (e == null)
      return window;
    n = e.closest(".scroll,.scroll-y,.overflow-auto");
  }
  return ba.includes(n) ? window : n;
}
function ya(e) {
  return e === window ? window.pageYOffset || window.scrollY || document.body.scrollTop || 0 : e.scrollTop;
}
function pa(e) {
  return e === window ? window.pageXOffset || window.scrollX || document.body.scrollLeft || 0 : e.scrollLeft;
}
let Ft;
function wa() {
  if (Ft !== void 0)
    return Ft;
  const e = document.createElement("p"), t = document.createElement("div");
  Tn(e, {
    width: "100%",
    height: "200px"
  }), Tn(t, {
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
  return n === l && (l = t.clientWidth), t.remove(), Ft = n - l, Ft;
}
function ka(e, t = !0) {
  return !e || e.nodeType !== Node.ELEMENT_NODE ? !1 : t ? e.scrollHeight > e.clientHeight && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-y"])) : e.scrollWidth > e.clientWidth && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-x"]));
}
const Qe = [];
let ft;
function Sa(e) {
  ft = e.keyCode === 27;
}
function xa() {
  ft === !0 && (ft = !1);
}
function _a(e) {
  ft === !0 && (ft = !1, Re(e, 27) === !0 && Qe[Qe.length - 1](e));
}
function Fo(e) {
  window[e]("keydown", Sa), window[e]("blur", xa), window[e]("keyup", _a), ft = !1;
}
function Po(e) {
  ge.is.desktop === !0 && (Qe.push(e), Qe.length === 1 && Fo("addEventListener"));
}
function Qt(e) {
  const t = Qe.indexOf(e);
  t > -1 && (Qe.splice(t, 1), Qe.length === 0 && Fo("removeEventListener"));
}
const Ue = [];
function zo(e) {
  Ue[Ue.length - 1](e);
}
function Ho(e) {
  ge.is.desktop === !0 && (Ue.push(e), Ue.length === 1 && document.body.addEventListener("focusin", zo));
}
function $n(e) {
  const t = Ue.indexOf(e);
  t > -1 && (Ue.splice(t, 1), Ue.length === 0 && document.body.removeEventListener("focusin", zo));
}
const { notPassiveCapture: Ut } = ye, Ye = [];
function Yt(e) {
  const t = e.target;
  if (t === void 0 || t.nodeType === 8 || t.classList.contains("no-pointer-events") === !0)
    return;
  let n = ut.length - 1;
  for (; n >= 0; ) {
    const l = ut[n].$;
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
  for (let l = Ye.length - 1; l >= 0; l--) {
    const o = Ye[l];
    if ((o.anchorEl.value === null || o.anchorEl.value.contains(t) === !1) && (t === document.body || o.innerRef.value !== null && o.innerRef.value.contains(t) === !1))
      e.qClickOutside = !0, o.onClickOutside(e);
    else
      return;
  }
}
function Io(e) {
  Ye.push(e), Ye.length === 1 && (document.addEventListener("mousedown", Yt, Ut), document.addEventListener("touchstart", Yt, Ut));
}
function Xt(e) {
  const t = Ye.findIndex((n) => n === e);
  t > -1 && (Ye.splice(t, 1), Ye.length === 0 && (document.removeEventListener("mousedown", Yt, Ut), document.removeEventListener("touchstart", Yt, Ut)));
}
let Ol, Rl;
function Zt(e) {
  const t = e.split(" ");
  return t.length !== 2 ? !1 : ["top", "center", "bottom"].includes(t[0]) !== !0 ? (console.error("Anchor/Self position must start with one of top/center/bottom"), !1) : ["left", "middle", "right", "start", "end"].includes(t[1]) !== !0 ? (console.error("Anchor/Self position must end with one of left/middle/right/start/end"), !1) : !0;
}
function Do(e) {
  return e ? !(e.length !== 2 || typeof e[0] != "number" || typeof e[1] != "number") : !0;
}
const On = {
  "start#ltr": "left",
  "start#rtl": "right",
  "end#ltr": "right",
  "end#rtl": "left"
};
["left", "middle", "right"].forEach((e) => {
  On[`${e}#ltr`] = e, On[`${e}#rtl`] = e;
});
function Gt(e, t) {
  const n = e.split(" ");
  return {
    vertical: n[0],
    horizontal: On[`${n[1]}#${t === !0 ? "rtl" : "ltr"}`]
  };
}
function Ca(e, t) {
  let { top: n, left: l, right: o, bottom: i, width: a, height: u } = e.getBoundingClientRect();
  return t !== void 0 && (n -= t[1], l -= t[0], i += t[1], o += t[0], a += t[0], u += t[1]), {
    top: n,
    bottom: i,
    height: u,
    left: l,
    right: o,
    width: a,
    middle: l + (o - l) / 2,
    center: n + (i - n) / 2
  };
}
function qa(e, t, n) {
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
function Ea(e, t) {
  return {
    top: 0,
    center: t / 2,
    bottom: t,
    left: 0,
    middle: e / 2,
    right: e
  };
}
function Al(e, t, n, l) {
  return {
    top: e[n.vertical] - t[l.vertical],
    left: e[n.horizontal] - t[l.horizontal]
  };
}
function el(e, t = 0) {
  if (e.targetEl === null || e.anchorEl === null || t > 5)
    return;
  if (e.targetEl.offsetHeight === 0 || e.targetEl.offsetWidth === 0) {
    setTimeout(() => {
      el(e, t + 1);
    }, 10);
    return;
  }
  const {
    targetEl: n,
    offset: l,
    anchorEl: o,
    anchorOrigin: i,
    selfOrigin: a,
    absoluteOffset: u,
    fit: f,
    cover: g,
    maxHeight: r,
    maxWidth: m
  } = e;
  if (ge.is.ios === !0 && window.visualViewport !== void 0) {
    const H = document.body.style, { offsetLeft: A, offsetTop: Q } = window.visualViewport;
    A !== Ol && (H.setProperty("--q-pe-left", A + "px"), Ol = A), Q !== Rl && (H.setProperty("--q-pe-top", Q + "px"), Rl = Q);
  }
  const { scrollLeft: v, scrollTop: c } = n, y = u === void 0 ? Ca(o, g === !0 ? [0, 0] : l) : qa(o, u, l);
  Object.assign(n.style, {
    top: 0,
    left: 0,
    minWidth: null,
    minHeight: null,
    maxWidth: m || "100vw",
    maxHeight: r || "100vh",
    visibility: "visible"
  });
  const { offsetWidth: _, offsetHeight: h } = n, { elWidth: T, elHeight: w } = f === !0 || g === !0 ? { elWidth: Math.max(y.width, _), elHeight: g === !0 ? Math.max(y.height, h) : h } : { elWidth: _, elHeight: h };
  let p = { maxWidth: m, maxHeight: r };
  (f === !0 || g === !0) && (p.minWidth = y.width + "px", g === !0 && (p.minHeight = y.height + "px")), Object.assign(n.style, p);
  const $ = Ea(T, w);
  let C = Al(y, $, i, a);
  if (u === void 0 || l === void 0)
    bn(C, y, $, i, a);
  else {
    const { top: H, left: A } = C;
    bn(C, y, $, i, a);
    let Q = !1;
    if (C.top !== H) {
      Q = !0;
      const q = 2 * l[1];
      y.center = y.top -= q, y.bottom -= q + 2;
    }
    if (C.left !== A) {
      Q = !0;
      const q = 2 * l[0];
      y.middle = y.left -= q, y.right -= q + 2;
    }
    Q === !0 && (C = Al(y, $, i, a), bn(C, y, $, i, a));
  }
  p = {
    top: C.top + "px",
    left: C.left + "px"
  }, C.maxHeight !== void 0 && (p.maxHeight = C.maxHeight + "px", y.height > C.maxHeight && (p.minHeight = p.maxHeight)), C.maxWidth !== void 0 && (p.maxWidth = C.maxWidth + "px", y.width > C.maxWidth && (p.minWidth = p.maxWidth)), Object.assign(n.style, p), n.scrollTop !== c && (n.scrollTop = c), n.scrollLeft !== v && (n.scrollLeft = v);
}
function bn(e, t, n, l, o) {
  const i = n.bottom, a = n.right, u = wa(), f = window.innerHeight - u, g = document.body.clientWidth;
  if (e.top < 0 || e.top + i > f)
    if (o.vertical === "center")
      e.top = t[l.vertical] > f / 2 ? Math.max(0, f - i) : 0, e.maxHeight = Math.min(i, f);
    else if (t[l.vertical] > f / 2) {
      const r = Math.min(
        f,
        l.vertical === "center" ? t.center : l.vertical === o.vertical ? t.bottom : t.top
      );
      e.maxHeight = Math.min(i, r), e.top = Math.max(0, r - i);
    } else
      e.top = Math.max(
        0,
        l.vertical === "center" ? t.center : l.vertical === o.vertical ? t.top : t.bottom
      ), e.maxHeight = Math.min(i, f - e.top);
  if (e.left < 0 || e.left + a > g)
    if (e.maxWidth = Math.min(a, g), o.horizontal === "middle")
      e.left = t[l.horizontal] > g / 2 ? Math.max(0, g - a) : 0;
    else if (t[l.horizontal] > g / 2) {
      const r = Math.min(
        g,
        l.horizontal === "middle" ? t.middle : l.horizontal === o.horizontal ? t.right : t.left
      );
      e.maxWidth = Math.min(a, r), e.left = Math.max(0, r - e.maxWidth);
    } else
      e.left = Math.max(
        0,
        l.horizontal === "middle" ? t.middle : l.horizontal === o.horizontal ? t.left : t.right
      ), e.maxWidth = Math.min(a, g - e.left);
}
const jo = ee({
  name: "QMenu",
  inheritAttrs: !1,
  props: {
    ...Mo,
    ...Wn,
    ..._e,
    ...Xn,
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
      validator: Zt
    },
    self: {
      type: String,
      validator: Zt
    },
    offset: {
      type: Array,
      validator: Do
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
    ...Qn,
    "click",
    "escapeKey"
  ],
  setup(e, { slots: t, emit: n, attrs: l }) {
    let o = null, i, a, u;
    const f = J(), { proxy: g } = f, { $q: r } = g, m = N(null), v = N(!1), c = d(
      () => e.persistent !== !0 && e.noRouteDismiss !== !0
    ), y = Ce(e, r), { registerTick: _, removeTick: h } = Gn(), { registerTimeout: T } = Jn(), { transitionProps: w, transitionStyle: p } = Zn(e), { localScrollTarget: $, changeScrollEvent: C, unconfigureScrollTarget: H } = Lo(e, O), { anchorEl: A, canShow: Q } = To({ showing: v }), { hide: q } = Un({
      showing: v,
      canShow: Q,
      handleShow: V,
      handleHide: M,
      hideOnRouteChange: c,
      processOnMount: !0
    }), { showPortal: E, hidePortal: L, renderPortal: S } = Yn(f, m, re, "menu"), j = {
      anchorEl: A,
      innerRef: m,
      onClickOutside(R) {
        if (e.persistent !== !0 && v.value === !0)
          return q(R), // always prevent touch event
          (R.type === "touchstart" || R.target.classList.contains("q-dialog__backdrop")) && oe(R), !0;
      }
    }, x = d(
      () => Gt(
        e.anchor || (e.cover === !0 ? "center middle" : "bottom start"),
        r.lang.rtl
      )
    ), D = d(() => e.cover === !0 ? x.value : Gt(e.self || "top start", r.lang.rtl)), K = d(
      () => (e.square === !0 ? " q-menu--square" : "") + (y.value === !0 ? " q-menu--dark q-dark" : "")
    ), B = d(() => e.autoClose === !0 ? { onClick: X } : {}), U = d(
      () => v.value === !0 && e.persistent !== !0
    );
    Z(U, (R) => {
      R === !0 ? (Po(F), Io(j)) : (Qt(F), Xt(j));
    });
    function te() {
      Vt(() => {
        let R = m.value;
        R && R.contains(document.activeElement) !== !0 && (R = R.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || R.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || R.querySelector("[autofocus], [data-autofocus]") || R, R.focus({ preventScroll: !0 }));
      });
    }
    function V(R) {
      if (o = e.noRefocus === !1 ? document.activeElement : null, Ho(P), E(), O(), i = void 0, R !== void 0 && (e.touchPosition || e.contextMenu)) {
        const de = so(R);
        if (de.left !== void 0) {
          const { top: Ae, left: Pe } = A.value.getBoundingClientRect();
          i = { left: de.left - Pe, top: de.top - Ae };
        }
      }
      a === void 0 && (a = Z(
        () => r.screen.width + "|" + r.screen.height + "|" + e.self + "|" + e.anchor + "|" + r.lang.rtl,
        W
      )), e.noFocus !== !0 && document.activeElement.blur(), _(() => {
        W(), e.noFocus !== !0 && te();
      }), T(() => {
        r.platform.is.ios === !0 && (u = e.autoClose, m.value.click()), W(), E(!0), n("show", R);
      }, e.transitionDuration);
    }
    function M(R) {
      h(), L(), k(!0), o !== null && // menu was hidden from code or ESC plugin
      (R === void 0 || R.qClickOutside !== !0) && (((R && R.type.indexOf("key") === 0 ? o.closest('[tabindex]:not([tabindex^="-"])') : void 0) || o).focus(), o = null), T(() => {
        L(!0), n("hide", R);
      }, e.transitionDuration);
    }
    function k(R) {
      i = void 0, a !== void 0 && (a(), a = void 0), (R === !0 || v.value === !0) && ($n(P), H(), Xt(j), Qt(F)), R !== !0 && (o = null);
    }
    function O() {
      (A.value !== null || e.scrollTarget !== void 0) && ($.value = Ao(A.value, e.scrollTarget), C($.value, W));
    }
    function X(R) {
      u !== !0 ? (Ro(g, R), n("click", R)) : u = !1;
    }
    function P(R) {
      U.value === !0 && e.noFocus !== !0 && Vo(m.value, R.target) !== !0 && te();
    }
    function F(R) {
      n("escapeKey"), q(R);
    }
    function W() {
      el({
        targetEl: m.value,
        offset: e.offset,
        anchorEl: A.value,
        anchorOrigin: x.value,
        selfOrigin: D.value,
        absoluteOffset: i,
        fit: e.fit,
        cover: e.cover,
        maxHeight: e.maxHeight,
        maxWidth: e.maxWidth
      });
    }
    function re() {
      return b(
        Xe,
        w.value,
        () => v.value === !0 ? b("div", {
          role: "menu",
          ...l,
          ref: m,
          tabindex: -1,
          class: [
            "q-menu q-position-engine scroll" + K.value,
            l.class
          ],
          style: [
            l.style,
            p.value
          ],
          ...B.value
        }, ve(t.default)) : null
      );
    }
    return me(k), Object.assign(g, { focus: te, updatePosition: W }), S;
  }
});
function Va(e, t, n) {
  function l() {
  }
  return me(() => {
    e.value === !0 && void 0;
  }), {
    removeFromHistory: l,
    addToHistory() {
    }
  };
}
let wt = 0, yn, pn, xt, wn = !1, Fl, Pl, zl, De = null;
function Ba(e) {
  Ma(e) && oe(e);
}
function Ma(e) {
  if (e.target === document.body || e.target.classList.contains("q-layout__backdrop"))
    return !0;
  const t = qi(e), n = e.shiftKey && !e.deltaX, l = !n && Math.abs(e.deltaX) <= Math.abs(e.deltaY), o = n || l ? e.deltaY : e.deltaX;
  for (let i = 0; i < t.length; i++) {
    const a = t[i];
    if (ka(a, l))
      return l ? o < 0 && a.scrollTop === 0 ? !0 : o > 0 && a.scrollTop + a.clientHeight === a.scrollHeight : o < 0 && a.scrollLeft === 0 ? !0 : o > 0 && a.scrollLeft + a.clientWidth === a.scrollWidth;
  }
  return !0;
}
function Hl(e) {
  e.target === document && (document.scrollingElement.scrollTop = document.scrollingElement.scrollTop);
}
function Pt(e) {
  wn !== !0 && (wn = !0, requestAnimationFrame(() => {
    wn = !1;
    const { height: t } = e.target, { clientHeight: n, scrollTop: l } = document.scrollingElement;
    (xt === void 0 || t !== window.innerHeight) && (xt = n - t, document.scrollingElement.scrollTop = l), l > xt && (document.scrollingElement.scrollTop -= Math.ceil((l - xt) / 8));
  }));
}
function Il(e) {
  const t = document.body, n = window.visualViewport !== void 0;
  if (e === "add") {
    const { overflowY: l, overflowX: o } = window.getComputedStyle(t);
    yn = pa(window), pn = ya(window), Fl = t.style.left, Pl = t.style.top, zl = window.location.href, t.style.left = `-${yn}px`, t.style.top = `-${pn}px`, o !== "hidden" && (o === "scroll" || t.scrollWidth > window.innerWidth) && t.classList.add("q-body--force-scrollbar-x"), l !== "hidden" && (l === "scroll" || t.scrollHeight > window.innerHeight) && t.classList.add("q-body--force-scrollbar-y"), t.classList.add("q-body--prevent-scroll"), document.qScrollPrevented = !0, ge.is.ios === !0 && (n === !0 ? (window.scrollTo(0, 0), window.visualViewport.addEventListener("resize", Pt, ye.passiveCapture), window.visualViewport.addEventListener("scroll", Pt, ye.passiveCapture), window.scrollTo(0, 0)) : window.addEventListener("scroll", Hl, ye.passiveCapture));
  }
  ge.is.desktop === !0 && ge.is.mac === !0 && window[`${e}EventListener`]("wheel", Ba, ye.notPassive), e === "remove" && (ge.is.ios === !0 && (n === !0 ? (window.visualViewport.removeEventListener("resize", Pt, ye.passiveCapture), window.visualViewport.removeEventListener("scroll", Pt, ye.passiveCapture)) : window.removeEventListener("scroll", Hl, ye.passiveCapture)), t.classList.remove("q-body--prevent-scroll"), t.classList.remove("q-body--force-scrollbar-x"), t.classList.remove("q-body--force-scrollbar-y"), document.qScrollPrevented = !1, t.style.left = Fl, t.style.top = Pl, window.location.href === zl && window.scrollTo(yn, pn), xt = void 0);
}
function Ta(e) {
  let t = "add";
  if (e === !0) {
    if (wt++, De !== null) {
      clearTimeout(De), De = null;
      return;
    }
    if (wt > 1)
      return;
  } else {
    if (wt === 0 || (wt--, wt > 0))
      return;
    if (t = "remove", ge.is.ios === !0 && ge.is.nativeMobile === !0) {
      De !== null && clearTimeout(De), De = setTimeout(() => {
        Il(t), De = null;
      }, 100);
      return;
    }
  }
  Il(t);
}
function La() {
  let e;
  return {
    preventBodyScroll(t) {
      t !== e && (e !== void 0 || t === !0) && (e = t, Ta(t));
    }
  };
}
let zt = 0;
const $a = {
  standard: "fixed-full flex-center",
  top: "fixed-top justify-center",
  bottom: "fixed-bottom justify-center",
  right: "fixed-right items-center",
  left: "fixed-left items-center"
}, Dl = {
  standard: ["scale", "scale"],
  top: ["slide-down", "slide-up"],
  bottom: ["slide-up", "slide-down"],
  right: ["slide-left", "slide-right"],
  left: ["slide-right", "slide-left"]
}, tl = ee({
  name: "QDialog",
  inheritAttrs: !1,
  props: {
    ...Wn,
    ...Xn,
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
    ...Qn,
    "shake",
    "click",
    "escapeKey"
  ],
  setup(e, { slots: t, emit: n, attrs: l }) {
    const o = J(), i = N(null), a = N(!1), u = N(!1);
    let f = null, g = null, r, m;
    const v = d(
      () => e.persistent !== !0 && e.noRouteDismiss !== !0 && e.seamless !== !0
    ), { preventBodyScroll: c } = La(), { registerTimeout: y } = Jn(), { registerTick: _, removeTick: h } = Gn(), { transitionProps: T, transitionStyle: w } = Zn(
      e,
      () => Dl[e.position][0],
      () => Dl[e.position][1]
    ), { showPortal: p, hidePortal: $, portalIsAccessible: C, renderPortal: H } = Yn(
      o,
      i,
      X,
      "dialog"
    ), { hide: A } = Un({
      showing: a,
      hideOnRouteChange: v,
      handleShow: x,
      handleHide: D,
      processOnMount: !0
    }), { addToHistory: Q, removeFromHistory: q } = Va(a), E = d(
      () => `q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized === !0 ? "maximized" : "minimized"} q-dialog__inner--${e.position} ${$a[e.position]}` + (u.value === !0 ? " q-dialog__inner--animating" : "") + (e.fullWidth === !0 ? " q-dialog__inner--fullwidth" : "") + (e.fullHeight === !0 ? " q-dialog__inner--fullheight" : "") + (e.square === !0 ? " q-dialog__inner--square" : "")
    ), L = d(() => a.value === !0 && e.seamless !== !0), S = d(() => e.autoClose === !0 ? { onClick: M } : {}), j = d(() => [
      `q-dialog fullscreen no-pointer-events q-dialog--${L.value === !0 ? "modal" : "seamless"}`,
      l.class
    ]);
    Z(() => e.maximized, (P) => {
      a.value === !0 && V(P);
    }), Z(L, (P) => {
      c(P), P === !0 ? (Ho(O), Po(U)) : ($n(O), Qt(U));
    });
    function x(P) {
      Q(), g = e.noRefocus === !1 && document.activeElement !== null ? document.activeElement : null, V(e.maximized), p(), u.value = !0, e.noFocus !== !0 ? (document.activeElement !== null && document.activeElement.blur(), _(K)) : h(), y(() => {
        if (o.proxy.$q.platform.is.ios === !0) {
          if (e.seamless !== !0 && document.activeElement) {
            const { top: F, bottom: W } = document.activeElement.getBoundingClientRect(), { innerHeight: re } = window, R = window.visualViewport !== void 0 ? window.visualViewport.height : re;
            F > 0 && W > R / 2 && (document.scrollingElement.scrollTop = Math.min(
              document.scrollingElement.scrollHeight - R,
              W >= re ? 1 / 0 : Math.ceil(document.scrollingElement.scrollTop + W - R / 2)
            )), document.activeElement.scrollIntoView();
          }
          m = !0, i.value.click(), m = !1;
        }
        p(!0), u.value = !1, n("show", P);
      }, e.transitionDuration);
    }
    function D(P) {
      h(), q(), te(!0), u.value = !0, $(), g !== null && (((P && P.type.indexOf("key") === 0 ? g.closest('[tabindex]:not([tabindex^="-"])') : void 0) || g).focus(), g = null), y(() => {
        $(!0), u.value = !1, n("hide", P);
      }, e.transitionDuration);
    }
    function K(P) {
      Vt(() => {
        let F = i.value;
        F === null || F.contains(document.activeElement) === !0 || (F = (P !== "" ? F.querySelector(P) : null) || F.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || F.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || F.querySelector("[autofocus], [data-autofocus]") || F, F.focus({ preventScroll: !0 }));
      });
    }
    function B(P) {
      P && typeof P.focus == "function" ? P.focus({ preventScroll: !0 }) : K(), n("shake");
      const F = i.value;
      F !== null && (F.classList.remove("q-animate--scale"), F.classList.add("q-animate--scale"), f !== null && clearTimeout(f), f = setTimeout(() => {
        f = null, i.value !== null && (F.classList.remove("q-animate--scale"), K());
      }, 170));
    }
    function U() {
      e.seamless !== !0 && (e.persistent === !0 || e.noEscDismiss === !0 ? e.maximized !== !0 && e.noShake !== !0 && B() : (n("escapeKey"), A()));
    }
    function te(P) {
      f !== null && (clearTimeout(f), f = null), (P === !0 || a.value === !0) && (V(!1), e.seamless !== !0 && (c(!1), $n(O), Qt(U))), P !== !0 && (g = null);
    }
    function V(P) {
      P === !0 ? r !== !0 && (zt < 1 && document.body.classList.add("q-body--dialog"), zt++, r = !0) : r === !0 && (zt < 2 && document.body.classList.remove("q-body--dialog"), zt--, r = !1);
    }
    function M(P) {
      m !== !0 && (A(P), n("click", P));
    }
    function k(P) {
      e.persistent !== !0 && e.noBackdropDismiss !== !0 ? A(P) : e.noShake !== !0 && B();
    }
    function O(P) {
      e.allowFocusOutside !== !0 && C.value === !0 && Vo(i.value, P.target) !== !0 && K('[tabindex]:not([tabindex="-1"])');
    }
    Object.assign(o.proxy, {
      // expose public methods
      focus: K,
      shake: B,
      // private but needed by QSelect
      __updateRefocusTarget(P) {
        g = P || null;
      }
    }), me(te);
    function X() {
      return b("div", {
        role: "dialog",
        "aria-modal": L.value === !0 ? "true" : "false",
        ...l,
        class: j.value
      }, [
        b(Xe, {
          name: "q-transition--fade",
          appear: !0
        }, () => L.value === !0 ? b("div", {
          class: "q-dialog__backdrop fixed-full",
          style: w.value,
          "aria-hidden": "true",
          tabindex: -1,
          onClick: k
        }) : null),
        b(
          Xe,
          T.value,
          () => a.value === !0 ? b("div", {
            ref: i,
            class: E.value,
            style: w.value,
            tabindex: -1,
            ...S.value
          }, ve(t.default)) : null
        )
      ]);
    }
    return H;
  }
});
let Jt = !1;
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
  }), document.body.appendChild(e), e.appendChild(t), e.scrollLeft = -1e3, Jt = e.scrollLeft >= 0, e.remove();
}
const Ee = 1e3, Oa = [
  "start",
  "center",
  "end",
  "start-force",
  "center-force",
  "end-force"
], No = Array.prototype.filter, Ra = window.getComputedStyle(document.body).overflowAnchor === void 0 ? qn : function(e, t) {
  e !== null && (e._qOverflowAnimationFrame !== void 0 && cancelAnimationFrame(e._qOverflowAnimationFrame), e._qOverflowAnimationFrame = requestAnimationFrame(() => {
    if (e === null)
      return;
    e._qOverflowAnimationFrame = void 0;
    const n = e.children || [];
    No.call(n, (o) => o.dataset && o.dataset.qVsAnchor !== void 0).forEach((o) => {
      delete o.dataset.qVsAnchor;
    });
    const l = n[t];
    l && l.dataset && (l.dataset.qVsAnchor = "");
  }));
};
function st(e, t) {
  return e + t;
}
function kn(e, t, n, l, o, i, a, u) {
  const f = e === window ? document.scrollingElement || document.documentElement : e, g = o === !0 ? "offsetWidth" : "offsetHeight", r = {
    scrollStart: 0,
    scrollViewSize: -a - u,
    scrollMaxSize: 0,
    offsetStart: -a,
    offsetEnd: -u
  };
  if (o === !0 ? (e === window ? (r.scrollStart = window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, r.scrollViewSize += document.documentElement.clientWidth) : (r.scrollStart = f.scrollLeft, r.scrollViewSize += f.clientWidth), r.scrollMaxSize = f.scrollWidth, i === !0 && (r.scrollStart = (Jt === !0 ? r.scrollMaxSize - r.scrollViewSize : 0) - r.scrollStart)) : (e === window ? (r.scrollStart = window.pageYOffset || window.scrollY || document.body.scrollTop || 0, r.scrollViewSize += document.documentElement.clientHeight) : (r.scrollStart = f.scrollTop, r.scrollViewSize += f.clientHeight), r.scrollMaxSize = f.scrollHeight), n !== null)
    for (let m = n.previousElementSibling; m !== null; m = m.previousElementSibling)
      m.classList.contains("q-virtual-scroll--skip") === !1 && (r.offsetStart += m[g]);
  if (l !== null)
    for (let m = l.nextElementSibling; m !== null; m = m.nextElementSibling)
      m.classList.contains("q-virtual-scroll--skip") === !1 && (r.offsetEnd += m[g]);
  if (t !== e) {
    const m = f.getBoundingClientRect(), v = t.getBoundingClientRect();
    o === !0 ? (r.offsetStart += v.left - m.left, r.offsetEnd -= v.width) : (r.offsetStart += v.top - m.top, r.offsetEnd -= v.height), e !== window && (r.offsetStart += r.scrollStart), r.offsetEnd += r.scrollMaxSize - r.offsetStart;
  }
  return r;
}
function jl(e, t, n, l) {
  t === "end" && (t = (e === window ? document.body : e)[n === !0 ? "scrollWidth" : "scrollHeight"]), e === window ? n === !0 ? (l === !0 && (t = (Jt === !0 ? document.body.scrollWidth - document.documentElement.clientWidth : 0) - t), window.scrollTo(t, window.pageYOffset || window.scrollY || document.body.scrollTop || 0)) : window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, t) : n === !0 ? (l === !0 && (t = (Jt === !0 ? e.scrollWidth - e.offsetWidth : 0) - t), e.scrollLeft = t) : e.scrollTop = t;
}
function kt(e, t, n, l) {
  if (n >= l)
    return 0;
  const o = t.length, i = Math.floor(n / Ee), a = Math.floor((l - 1) / Ee) + 1;
  let u = e.slice(i, a).reduce(st, 0);
  return n % Ee !== 0 && (u -= t.slice(i * Ee, n).reduce(st, 0)), l % Ee !== 0 && l !== o && (u -= t.slice(l, a * Ee).reduce(st, 0)), u;
}
const Aa = {
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
}, Fa = {
  virtualScrollHorizontal: Boolean,
  onVirtualScroll: Function,
  ...Aa
};
function Pa({
  virtualScrollLength: e,
  getVirtualScrollTarget: t,
  getVirtualScrollEl: n,
  virtualScrollItemSizeComputed: l
  // optional
}) {
  const o = J(), { props: i, emit: a, proxy: u } = o, { $q: f } = u;
  let g, r, m, v = [], c;
  const y = N(0), _ = N(0), h = N({}), T = N(null), w = N(null), p = N(null), $ = N({ from: 0, to: 0 }), C = d(() => i.tableColspan !== void 0 ? i.tableColspan : 100);
  l === void 0 && (l = d(() => i.virtualScrollItemSize));
  const H = d(() => l.value + ";" + i.virtualScrollHorizontal), A = d(
    () => H.value + ";" + i.virtualScrollSliceRatioBefore + ";" + i.virtualScrollSliceRatioAfter
  );
  Z(A, () => {
    K();
  }), Z(H, Q);
  function Q() {
    D(r, !0);
  }
  function q(M) {
    D(M === void 0 ? r : M);
  }
  function E(M, k) {
    const O = t();
    if (O == null || O.nodeType === 8)
      return;
    const X = kn(
      O,
      n(),
      T.value,
      w.value,
      i.virtualScrollHorizontal,
      f.lang.rtl,
      i.virtualScrollStickySizeStart,
      i.virtualScrollStickySizeEnd
    );
    m !== X.scrollViewSize && K(X.scrollViewSize), S(
      O,
      X,
      Math.min(e.value - 1, Math.max(0, parseInt(M, 10) || 0)),
      0,
      Oa.indexOf(k) > -1 ? k : r > -1 && M > r ? "end" : "start"
    );
  }
  function L() {
    const M = t();
    if (M == null || M.nodeType === 8)
      return;
    const k = kn(
      M,
      n(),
      T.value,
      w.value,
      i.virtualScrollHorizontal,
      f.lang.rtl,
      i.virtualScrollStickySizeStart,
      i.virtualScrollStickySizeEnd
    ), O = e.value - 1, X = k.scrollMaxSize - k.offsetStart - k.offsetEnd - _.value;
    if (g === k.scrollStart)
      return;
    if (k.scrollMaxSize <= 0) {
      S(M, k, 0, 0);
      return;
    }
    m !== k.scrollViewSize && K(k.scrollViewSize), j($.value.from);
    const P = Math.floor(k.scrollMaxSize - Math.max(k.scrollViewSize, k.offsetEnd) - Math.min(c[O], k.scrollViewSize / 2));
    if (P > 0 && Math.ceil(k.scrollStart) >= P) {
      S(
        M,
        k,
        O,
        k.scrollMaxSize - k.offsetEnd - v.reduce(st, 0)
      );
      return;
    }
    let F = 0, W = k.scrollStart - k.offsetStart, re = W;
    if (W <= X && W + k.scrollViewSize >= y.value)
      W -= y.value, F = $.value.from, re = W;
    else
      for (let R = 0; W >= v[R] && F < O; R++)
        W -= v[R], F += Ee;
    for (; W > 0 && F < O; )
      W -= c[F], W > -k.scrollViewSize ? (F++, re = W) : re = c[F] + W;
    S(
      M,
      k,
      F,
      re
    );
  }
  function S(M, k, O, X, P) {
    const F = typeof P == "string" && P.indexOf("-force") > -1, W = F === !0 ? P.replace("-force", "") : P, re = W !== void 0 ? W : "start";
    let R = Math.max(0, O - h.value[re]), de = R + h.value.total;
    de > e.value && (de = e.value, R = Math.max(0, de - h.value.total)), g = k.scrollStart;
    const Ae = R !== $.value.from || de !== $.value.to;
    if (Ae === !1 && W === void 0) {
      U(O);
      return;
    }
    const { activeElement: Pe } = document, Be = p.value;
    Ae === !0 && Be !== null && Be !== Pe && Be.contains(Pe) === !0 && (Be.addEventListener("focusout", x), setTimeout(() => {
      Be !== null && Be.removeEventListener("focusout", x);
    })), Ra(Be, O - R);
    const Bt = W !== void 0 ? c.slice(R, O).reduce(st, 0) : 0;
    if (Ae === !0) {
      const ze = de >= $.value.from && R <= $.value.to ? $.value.to : de;
      $.value = { from: R, to: ze }, y.value = kt(v, c, 0, R), _.value = kt(v, c, de, e.value), requestAnimationFrame(() => {
        $.value.to !== de && g === k.scrollStart && ($.value = { from: $.value.from, to: de }, _.value = kt(v, c, de, e.value));
      });
    }
    requestAnimationFrame(() => {
      if (g !== k.scrollStart)
        return;
      Ae === !0 && j(R);
      const ze = c.slice(R, O).reduce(st, 0), Ze = ze + k.offsetStart + y.value, Mt = Ze + c[O];
      let yt = Ze + X;
      if (W !== void 0) {
        const an = ze - Bt, we = k.scrollStart + an;
        yt = F !== !0 && we < Ze && Mt < we + k.scrollViewSize ? we : W === "end" ? Mt - k.scrollViewSize : Ze - (W === "start" ? 0 : Math.round((k.scrollViewSize - c[O]) / 2));
      }
      g = yt, jl(
        M,
        yt,
        i.virtualScrollHorizontal,
        f.lang.rtl
      ), U(O);
    });
  }
  function j(M) {
    const k = p.value;
    if (k) {
      const O = No.call(
        k.children,
        (R) => R.classList && R.classList.contains("q-virtual-scroll--skip") === !1
      ), X = O.length, P = i.virtualScrollHorizontal === !0 ? (R) => R.getBoundingClientRect().width : (R) => R.offsetHeight;
      let F = M, W, re;
      for (let R = 0; R < X; ) {
        for (W = P(O[R]), R++; R < X && O[R].classList.contains("q-virtual-scroll--with-prev") === !0; )
          W += P(O[R]), R++;
        re = W - c[F], re !== 0 && (c[F] += re, v[Math.floor(F / Ee)] += re), F++;
      }
    }
  }
  function x() {
    p.value !== null && p.value !== void 0 && p.value.focus();
  }
  function D(M, k) {
    const O = 1 * l.value;
    (k === !0 || Array.isArray(c) === !1) && (c = []);
    const X = c.length;
    c.length = e.value;
    for (let F = e.value - 1; F >= X; F--)
      c[F] = O;
    const P = Math.floor((e.value - 1) / Ee);
    v = [];
    for (let F = 0; F <= P; F++) {
      let W = 0;
      const re = Math.min((F + 1) * Ee, e.value);
      for (let R = F * Ee; R < re; R++)
        W += c[R];
      v.push(W);
    }
    r = -1, g = void 0, y.value = kt(v, c, 0, $.value.from), _.value = kt(v, c, $.value.to, e.value), M >= 0 ? (j($.value.from), se(() => {
      E(M);
    })) : te();
  }
  function K(M) {
    if (M === void 0 && typeof window < "u") {
      const W = t();
      W != null && W.nodeType !== 8 && (M = kn(
        W,
        n(),
        T.value,
        w.value,
        i.virtualScrollHorizontal,
        f.lang.rtl,
        i.virtualScrollStickySizeStart,
        i.virtualScrollStickySizeEnd
      ).scrollViewSize);
    }
    m = M;
    const k = parseFloat(i.virtualScrollSliceRatioBefore) || 0, O = parseFloat(i.virtualScrollSliceRatioAfter) || 0, X = 1 + k + O, P = M === void 0 || M <= 0 ? 1 : Math.ceil(M / l.value), F = Math.max(
      1,
      P,
      Math.ceil((i.virtualScrollSliceSize > 0 ? i.virtualScrollSliceSize : 10) / X)
    );
    h.value = {
      total: Math.ceil(F * X),
      start: Math.ceil(F * k),
      center: Math.ceil(F * (0.5 + k)),
      end: Math.ceil(F * (1 + k)),
      view: P
    };
  }
  function B(M, k) {
    const O = i.virtualScrollHorizontal === !0 ? "width" : "height", X = {
      ["--q-virtual-scroll-item-" + O]: l.value + "px"
    };
    return [
      M === "tbody" ? b(M, {
        class: "q-virtual-scroll__padding",
        key: "before",
        ref: T
      }, [
        b("tr", [
          b("td", {
            style: { [O]: `${y.value}px`, ...X },
            colspan: C.value
          })
        ])
      ]) : b(M, {
        class: "q-virtual-scroll__padding",
        key: "before",
        ref: T,
        style: { [O]: `${y.value}px`, ...X }
      }),
      b(M, {
        class: "q-virtual-scroll__content",
        key: "content",
        ref: p,
        tabindex: -1
      }, k.flat()),
      M === "tbody" ? b(M, {
        class: "q-virtual-scroll__padding",
        key: "after",
        ref: w
      }, [
        b("tr", [
          b("td", {
            style: { [O]: `${_.value}px`, ...X },
            colspan: C.value
          })
        ])
      ]) : b(M, {
        class: "q-virtual-scroll__padding",
        key: "after",
        ref: w,
        style: { [O]: `${_.value}px`, ...X }
      })
    ];
  }
  function U(M) {
    r !== M && (i.onVirtualScroll !== void 0 && a("virtualScroll", {
      index: M,
      from: $.value.from,
      to: $.value.to - 1,
      direction: M < r ? "decrease" : "increase",
      ref: u
    }), r = M);
  }
  K();
  const te = Dn(
    L,
    f.platform.is.ios === !0 ? 120 : 35
  );
  wi(() => {
    K();
  });
  let V = !1;
  return Et(() => {
    V = !0;
  }), Fn(() => {
    if (V !== !0)
      return;
    const M = t();
    g !== void 0 && M !== void 0 && M !== null && M.nodeType !== 8 ? jl(
      M,
      g,
      i.virtualScrollHorizontal,
      f.lang.rtl
    ) : E(r);
  }), me(() => {
    te.cancel();
  }), Object.assign(u, { scrollTo: E, reset: Q, refresh: q }), {
    virtualScrollSliceRange: $,
    virtualScrollSliceSizeComputed: h,
    setVirtualScrollSize: K,
    onVirtualScrollEvt: te,
    localResetVirtualScroll: D,
    padVirtualScroll: B,
    scrollTo: E,
    reset: Q,
    refresh: q
  };
}
const za = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/, Ha = /[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u, Ia = /[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/, Da = /[a-z0-9_ -]$/i;
function Ko(e) {
  return function(n) {
    if (n.type === "compositionend" || n.type === "change") {
      if (n.target.qComposing !== !0)
        return;
      n.target.qComposing = !1, e(n);
    } else
      n.type === "compositionupdate" && n.target.qComposing !== !0 && typeof n.data == "string" && (ge.is.firefox === !0 ? Da.test(n.data) === !1 : za.test(n.data) === !0 || Ha.test(n.data) === !0 || Ia.test(n.data) === !0) === !0 && (n.target.qComposing = !0);
  };
}
function Fe(e, t) {
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
        if (Fe(e[l], t[l]) !== !0)
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
        if (Fe(l.value[1], t.get(l.value[0])) !== !0)
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
      if (Fe(e[i], t[i]) !== !0)
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function St(e) {
  return e !== null && typeof e == "object" && Array.isArray(e) !== !0;
}
function Nl(e, t, n) {
  if (n <= t)
    return t;
  const l = n - t + 1;
  let o = t + (e - t) % l;
  return o < t && (o = l + o), o === 0 ? 0 : o;
}
const Kl = (e) => ["add", "add-unique", "toggle"].includes(e), ja = ".*+?^${}()|[]\\", Na = Object.keys(ln), Ka = ee({
  name: "QSelect",
  inheritAttrs: !1,
  props: {
    ...Fa,
    ...nn,
    ...ln,
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
      validator: Kl
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
    ...jn,
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
    const { proxy: l } = J(), { $q: o } = l, i = N(!1), a = N(!1), u = N(-1), f = N(""), g = N(!1), r = N(!1);
    let m = null, v, c, y, _ = null, h, T, w, p;
    const $ = N(null), C = N(null), H = N(null), A = N(null), Q = N(null), q = po(e), E = Ko(dl), L = d(() => Array.isArray(e.options) ? e.options.length : 0), S = d(() => e.virtualScrollItemSize === void 0 ? e.optionsDense === !0 ? 24 : 48 : e.virtualScrollItemSize), {
      virtualScrollSliceRange: j,
      virtualScrollSliceSizeComputed: x,
      localResetVirtualScroll: D,
      padVirtualScroll: K,
      onVirtualScrollEvt: B,
      scrollTo: U,
      setVirtualScrollSize: te
    } = Pa({
      virtualScrollLength: L,
      getVirtualScrollTarget: li,
      getVirtualScrollEl: sl,
      virtualScrollItemSizeComputed: S
    }), V = Nn(), M = d(() => {
      const s = e.mapOptions === !0 && e.multiple !== !0, I = e.modelValue !== void 0 && (e.modelValue !== null || s === !0) ? e.multiple === !0 && Array.isArray(e.modelValue) ? e.modelValue : [e.modelValue] : [];
      if (e.mapOptions === !0 && Array.isArray(e.options) === !0) {
        const z = e.mapOptions === !0 && v !== void 0 ? v : [], Y = I.map((ne) => ni(ne, z));
        return e.modelValue === null && s === !0 ? Y.filter((ne) => ne !== null) : Y;
      }
      return I;
    }), k = d(() => {
      const s = {};
      return Na.forEach((I) => {
        const z = e[I];
        z !== void 0 && (s[I] = z);
      }), s;
    }), O = d(() => e.optionsDark === null ? V.isDark.value : e.optionsDark), X = d(() => qt(M.value)), P = d(() => {
      let s = "q-field__input q-placeholder col";
      return e.hideSelected === !0 || M.value.length === 0 ? [s, e.inputClass] : (s += " q-field__input--padding", e.inputClass === void 0 ? s : [s, e.inputClass]);
    }), F = d(
      () => (e.virtualScrollHorizontal === !0 ? "q-virtual-scroll--horizontal" : "") + (e.popupContentClass ? " " + e.popupContentClass : "")
    ), W = d(() => L.value === 0), re = d(
      () => M.value.map((s) => Se.value(s)).join(", ")
    ), R = d(() => e.displayValue !== void 0 ? e.displayValue : re.value), de = d(() => e.optionsHtml === !0 ? () => !0 : (s) => s != null && s.html === !0), Ae = d(() => e.displayValueHtml === !0 || e.displayValue === void 0 && (e.optionsHtml === !0 || M.value.some(de.value))), Pe = d(() => V.focused.value === !0 ? e.tabindex : -1), Be = d(() => {
      const s = {
        tabindex: e.tabindex,
        role: "combobox",
        "aria-label": e.label,
        "aria-readonly": e.readonly === !0 ? "true" : "false",
        "aria-autocomplete": e.useInput === !0 ? "list" : "none",
        "aria-expanded": i.value === !0 ? "true" : "false",
        "aria-controls": `${V.targetUid.value}_lb`
      };
      return u.value >= 0 && (s["aria-activedescendant"] = `${V.targetUid.value}_${u.value}`), s;
    }), Bt = d(() => ({
      id: `${V.targetUid.value}_lb`,
      role: "listbox",
      "aria-multiselectable": e.multiple === !0 ? "true" : "false"
    })), ze = d(() => M.value.map((s, I) => ({
      index: I,
      opt: s,
      html: de.value(s),
      selected: !0,
      removeAtIndex: ti,
      toggleOption: He,
      tabindex: Pe.value
    }))), Ze = d(() => {
      if (L.value === 0)
        return [];
      const { from: s, to: I } = j.value;
      return e.options.slice(s, I).map((z, Y) => {
        const ne = Ge.value(z) === !0, G = s + Y, ue = {
          clickable: !0,
          active: !1,
          activeClass: an.value,
          manualFocus: !0,
          focused: !1,
          disable: ne,
          tabindex: -1,
          dense: e.optionsDense,
          dark: O.value,
          role: "option",
          id: `${V.targetUid.value}_${G}`,
          onClick: () => {
            He(z);
          }
        };
        return ne !== !0 && (sn(z) === !0 && (ue.active = !0), u.value === G && (ue.focused = !0), ue["aria-selected"] = ue.active === !0 ? "true" : "false", o.platform.is.desktop === !0 && (ue.onMousemove = () => {
          i.value === !0 && Je(G);
        })), {
          index: G,
          opt: z,
          html: de.value(z),
          label: Se.value(z),
          selected: ue.active,
          focused: ue.focused,
          toggleOption: He,
          setOptionIndex: Je,
          itemProps: ue
        };
      });
    }), Mt = d(() => e.dropdownIcon !== void 0 ? e.dropdownIcon : o.iconSet.arrow.dropdown), yt = d(
      () => e.optionsCover === !1 && e.outlined !== !0 && e.standout !== !0 && e.borderless !== !0 && e.rounded !== !0
    ), an = d(() => e.optionsSelectedClass !== void 0 ? e.optionsSelectedClass : e.color !== void 0 ? `text-${e.color}` : ""), we = d(() => un(e.optionValue, "value")), Se = d(() => un(e.optionLabel, "label")), Ge = d(() => un(e.optionDisable, "disable")), Tt = d(() => M.value.map((s) => we.value(s))), ei = d(() => {
      const s = {
        onInput: dl,
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        onChange: E,
        onKeydown: ul,
        onKeyup: al,
        onKeypress: rl,
        onFocus: ol,
        onClick(I) {
          c === !0 && Me(I);
        }
      };
      return s.onCompositionstart = s.onCompositionupdate = s.onCompositionend = E, s;
    });
    Z(M, (s) => {
      v = s, e.useInput === !0 && e.fillInput === !0 && e.multiple !== !0 && V.innerLoading.value !== !0 && (a.value !== !0 && i.value !== !0 || X.value !== !0) && (y !== !0 && lt(), (a.value === !0 || i.value === !0) && et(""));
    }, { immediate: !0 }), Z(() => e.fillInput, lt), Z(i, cn), Z(L, gi);
    function nl(s) {
      return e.emitValue === !0 ? we.value(s) : s;
    }
    function rn(s) {
      if (s > -1 && s < M.value.length)
        if (e.multiple === !0) {
          const I = e.modelValue.slice();
          n("remove", { index: s, value: I.splice(s, 1)[0] }), n("update:modelValue", I);
        } else
          n("update:modelValue", null);
    }
    function ti(s) {
      rn(s), V.focus();
    }
    function ll(s, I) {
      const z = nl(s);
      if (e.multiple !== !0) {
        e.fillInput === !0 && pt(
          Se.value(s),
          !0,
          !0
        ), n("update:modelValue", z);
        return;
      }
      if (M.value.length === 0) {
        n("add", { index: 0, value: z }), n("update:modelValue", e.multiple === !0 ? [z] : z);
        return;
      }
      if (I === !0 && sn(s) === !0 || e.maxValues !== void 0 && e.modelValue.length >= e.maxValues)
        return;
      const Y = e.modelValue.slice();
      n("add", { index: Y.length, value: z }), Y.push(z), n("update:modelValue", Y);
    }
    function He(s, I) {
      if (V.editable.value !== !0 || s === void 0 || Ge.value(s) === !0)
        return;
      const z = we.value(s);
      if (e.multiple !== !0) {
        I !== !0 && (pt(
          e.fillInput === !0 ? Se.value(s) : "",
          !0,
          !0
        ), Ie()), C.value !== null && C.value.focus(), (M.value.length === 0 || Fe(we.value(M.value[0]), z) !== !0) && n("update:modelValue", e.emitValue === !0 ? z : s);
        return;
      }
      if ((c !== !0 || g.value === !0) && V.focus(), ol(), M.value.length === 0) {
        const G = e.emitValue === !0 ? z : s;
        n("add", { index: 0, value: G }), n("update:modelValue", e.multiple === !0 ? [G] : G);
        return;
      }
      const Y = e.modelValue.slice(), ne = Tt.value.findIndex((G) => Fe(G, z));
      if (ne > -1)
        n("remove", { index: ne, value: Y.splice(ne, 1)[0] });
      else {
        if (e.maxValues !== void 0 && Y.length >= e.maxValues)
          return;
        const G = e.emitValue === !0 ? z : s;
        n("add", { index: Y.length, value: G }), Y.push(G);
      }
      n("update:modelValue", Y);
    }
    function Je(s) {
      if (o.platform.is.desktop !== !0)
        return;
      const I = s > -1 && s < L.value ? s : -1;
      u.value !== I && (u.value = I);
    }
    function Lt(s = 1, I) {
      if (i.value === !0) {
        let z = u.value;
        do
          z = Nl(
            z + s,
            -1,
            L.value - 1
          );
        while (z !== -1 && z !== u.value && Ge.value(e.options[z]) === !0);
        u.value !== z && (Je(z), U(z), I !== !0 && e.useInput === !0 && e.fillInput === !0 && $t(
          z >= 0 ? Se.value(e.options[z]) : h
        ));
      }
    }
    function ni(s, I) {
      const z = (Y) => Fe(we.value(Y), s);
      return e.options.find(z) || I.find(z) || s;
    }
    function un(s, I) {
      const z = s !== void 0 ? s : I;
      return typeof z == "function" ? z : (Y) => Y !== null && typeof Y == "object" && z in Y ? Y[z] : Y;
    }
    function sn(s) {
      const I = we.value(s);
      return Tt.value.find((z) => Fe(z, I)) !== void 0;
    }
    function ol(s) {
      e.useInput === !0 && C.value !== null && (s === void 0 || C.value === s.target && s.target.value === re.value) && C.value.select();
    }
    function il(s) {
      Re(s, 27) === !0 && i.value === !0 && (Me(s), Ie(), lt()), n("keyup", s);
    }
    function al(s) {
      const { value: I } = s.target;
      if (s.keyCode !== void 0) {
        il(s);
        return;
      }
      if (s.target.value = "", m !== null && (clearTimeout(m), m = null), lt(), typeof I == "string" && I.length !== 0) {
        const z = I.toLocaleLowerCase(), Y = (G) => {
          const ue = e.options.find((he) => G.value(he).toLocaleLowerCase() === z);
          return ue === void 0 ? !1 : (M.value.indexOf(ue) === -1 ? He(ue) : Ie(), !0);
        }, ne = (G) => {
          Y(we) !== !0 && (Y(Se) === !0 || G === !0 || et(I, !0, () => ne(!0)));
        };
        ne();
      } else
        V.clearValue(s);
    }
    function rl(s) {
      n("keypress", s);
    }
    function ul(s) {
      if (n("keydown", s), Hn(s) === !0)
        return;
      const I = f.value.length !== 0 && (e.newValueMode !== void 0 || e.onNewValue !== void 0), z = s.shiftKey !== !0 && e.multiple !== !0 && (u.value > -1 || I === !0);
      if (s.keyCode === 27) {
        Ve(s);
        return;
      }
      if (s.keyCode === 9 && z === !1) {
        tt();
        return;
      }
      if (s.target === void 0 || s.target.id !== V.targetUid.value || V.editable.value !== !0)
        return;
      if (s.keyCode === 40 && V.innerLoading.value !== !0 && i.value === !1) {
        oe(s), nt();
        return;
      }
      if (s.keyCode === 8 && e.hideSelected !== !0 && f.value.length === 0) {
        e.multiple === !0 && Array.isArray(e.modelValue) === !0 ? rn(e.modelValue.length - 1) : e.multiple !== !0 && e.modelValue !== null && n("update:modelValue", null);
        return;
      }
      (s.keyCode === 35 || s.keyCode === 36) && (typeof f.value != "string" || f.value.length === 0) && (oe(s), u.value = -1, Lt(s.keyCode === 36 ? 1 : -1, e.multiple)), (s.keyCode === 33 || s.keyCode === 34) && x.value !== void 0 && (oe(s), u.value = Math.max(
        -1,
        Math.min(
          L.value,
          u.value + (s.keyCode === 33 ? -1 : 1) * x.value.view
        )
      ), Lt(s.keyCode === 33 ? 1 : -1, e.multiple)), (s.keyCode === 38 || s.keyCode === 40) && (oe(s), Lt(s.keyCode === 38 ? -1 : 1, e.multiple));
      const Y = L.value;
      if ((w === void 0 || p < Date.now()) && (w = ""), Y > 0 && e.useInput !== !0 && s.key !== void 0 && s.key.length === 1 && s.altKey === !1 && s.ctrlKey === !1 && s.metaKey === !1 && (s.keyCode !== 32 || w.length !== 0)) {
        i.value !== !0 && nt(s);
        const ne = s.key.toLocaleLowerCase(), G = w.length === 1 && w[0] === ne;
        p = Date.now() + 1500, G === !1 && (oe(s), w += ne);
        const ue = new RegExp("^" + w.split("").map((dn) => ja.indexOf(dn) > -1 ? "\\" + dn : dn).join(".*"), "i");
        let he = u.value;
        if (G === !0 || he < 0 || ue.test(Se.value(e.options[he])) !== !0)
          do
            he = Nl(he + 1, -1, Y - 1);
          while (he !== u.value && (Ge.value(e.options[he]) === !0 || ue.test(Se.value(e.options[he])) !== !0));
        u.value !== he && se(() => {
          Je(he), U(he), he >= 0 && e.useInput === !0 && e.fillInput === !0 && $t(Se.value(e.options[he]));
        });
        return;
      }
      if (!(s.keyCode !== 13 && (s.keyCode !== 32 || e.useInput === !0 || w !== "") && (s.keyCode !== 9 || z === !1))) {
        if (s.keyCode !== 9 && oe(s), u.value > -1 && u.value < Y) {
          He(e.options[u.value]);
          return;
        }
        if (I === !0) {
          const ne = (G, ue) => {
            if (ue) {
              if (Kl(ue) !== !0)
                return;
            } else
              ue = e.newValueMode;
            if (pt("", e.multiple !== !0, !0), G == null)
              return;
            (ue === "toggle" ? He : ll)(G, ue === "add-unique"), e.multiple !== !0 && (C.value !== null && C.value.focus(), Ie());
          };
          if (e.onNewValue !== void 0 ? n("newValue", f.value, ne) : ne(f.value), e.multiple !== !0)
            return;
        }
        i.value === !0 ? tt() : V.innerLoading.value !== !0 && nt();
      }
    }
    function sl() {
      return c === !0 ? Q.value : H.value !== null && H.value.contentEl !== null ? H.value.contentEl : void 0;
    }
    function li() {
      return sl();
    }
    function oi() {
      return e.hideSelected === !0 ? [] : t["selected-item"] !== void 0 ? ze.value.map((s) => t["selected-item"](s)).slice() : t.selected !== void 0 ? [].concat(t.selected()) : e.useChips === !0 ? ze.value.map((s, I) => b(da, {
        key: "option-" + I,
        removable: V.editable.value === !0 && Ge.value(s.opt) !== !0,
        dense: !0,
        textColor: e.color,
        tabindex: Pe.value,
        onRemove() {
          s.removeAtIndex(I);
        }
      }, () => b("span", {
        class: "ellipsis",
        [s.html === !0 ? "innerHTML" : "textContent"]: Se.value(s.opt)
      }))) : [
        b("span", {
          [Ae.value === !0 ? "innerHTML" : "textContent"]: R.value
        })
      ];
    }
    function cl() {
      if (W.value === !0)
        return t["no-option"] !== void 0 ? t["no-option"]({ inputValue: f.value }) : void 0;
      const s = t.option !== void 0 ? t.option : (z) => b(Kt, {
        key: z.index,
        ...z.itemProps
      }, () => b(
        We,
        () => b(
          Vn,
          () => b("span", {
            [z.html === !0 ? "innerHTML" : "textContent"]: z.label
          })
        )
      ));
      let I = K("div", Ze.value.map(s));
      return t["before-options"] !== void 0 && (I = t["before-options"]().concat(I)), Le(t["after-options"], I);
    }
    function ii(s, I) {
      const z = I === !0 ? { ...Be.value, ...V.splitAttrs.attributes.value } : void 0, Y = {
        ref: I === !0 ? C : void 0,
        key: "i_t",
        class: P.value,
        style: e.inputStyle,
        value: f.value !== void 0 ? f.value : "",
        // required for Android in order to show ENTER key when in form
        type: "search",
        ...z,
        id: I === !0 ? V.targetUid.value : void 0,
        maxlength: e.maxlength,
        autocomplete: e.autocomplete,
        "data-autofocus": s === !0 || e.autofocus === !0 || void 0,
        disabled: e.disable === !0,
        readonly: e.readonly === !0,
        ...ei.value
      };
      return s !== !0 && c === !0 && (Array.isArray(Y.class) === !0 ? Y.class = [...Y.class, "no-pointer-events"] : Y.class += " no-pointer-events"), b("input", Y);
    }
    function dl(s) {
      m !== null && (clearTimeout(m), m = null), !(s && s.target && s.target.qComposing === !0) && ($t(s.target.value || ""), y = !0, h = f.value, V.focused.value !== !0 && (c !== !0 || g.value === !0) && V.focus(), e.onFilter !== void 0 && (m = setTimeout(() => {
        m = null, et(f.value);
      }, e.inputDebounce)));
    }
    function $t(s) {
      f.value !== s && (f.value = s, n("inputValue", s));
    }
    function pt(s, I, z) {
      y = z !== !0, e.useInput === !0 && ($t(s), (I === !0 || z !== !0) && (h = s), I !== !0 && et(s));
    }
    function et(s, I, z) {
      if (e.onFilter === void 0 || I !== !0 && V.focused.value !== !0)
        return;
      V.innerLoading.value === !0 ? n("filterAbort") : (V.innerLoading.value = !0, r.value = !0), s !== "" && e.multiple !== !0 && M.value.length !== 0 && y !== !0 && s === Se.value(M.value[0]) && (s = "");
      const Y = setTimeout(() => {
        i.value === !0 && (i.value = !1);
      }, 10);
      _ !== null && clearTimeout(_), _ = Y, n(
        "filter",
        s,
        (ne, G) => {
          (I === !0 || V.focused.value === !0) && _ === Y && (clearTimeout(_), typeof ne == "function" && ne(), r.value = !1, se(() => {
            V.innerLoading.value = !1, V.editable.value === !0 && (I === !0 ? i.value === !0 && Ie() : i.value === !0 ? cn(!0) : i.value = !0), typeof G == "function" && se(() => {
              G(l);
            }), typeof z == "function" && se(() => {
              z(l);
            });
          }));
        },
        () => {
          V.focused.value === !0 && _ === Y && (clearTimeout(_), V.innerLoading.value = !1, r.value = !1), i.value === !0 && (i.value = !1);
        }
      );
    }
    function ai() {
      return b(jo, {
        ref: H,
        class: F.value,
        style: e.popupContentStyle,
        modelValue: i.value,
        fit: e.menuShrink !== !0,
        cover: e.optionsCover === !0 && W.value !== !0 && e.useInput !== !0,
        anchor: e.menuAnchor,
        self: e.menuSelf,
        offset: e.menuOffset,
        dark: O.value,
        noParentEvent: !0,
        noRefocus: !0,
        noFocus: !0,
        square: yt.value,
        transitionShow: e.transitionShow,
        transitionHide: e.transitionHide,
        transitionDuration: e.transitionDuration,
        separateClosePopup: !0,
        ...Bt.value,
        onScrollPassive: B,
        onBeforeShow: vl,
        onBeforeHide: ri,
        onShow: ui
      }, cl);
    }
    function ri(s) {
      ml(s), tt();
    }
    function ui() {
      te();
    }
    function si(s) {
      Me(s), C.value !== null && C.value.focus(), g.value = !0, window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, 0);
    }
    function ci(s) {
      Me(s), se(() => {
        g.value = !1;
      });
    }
    function di() {
      const s = [
        b(ra, {
          class: `col-auto ${V.fieldClass.value}`,
          ...k.value,
          for: V.targetUid.value,
          dark: O.value,
          square: !0,
          loading: r.value,
          itemAligned: !1,
          filled: !0,
          stackLabel: f.value.length !== 0,
          ...V.splitAttrs.listeners.value,
          onFocus: si,
          onBlur: ci
        }, {
          ...t,
          rawControl: () => V.getControl(!0),
          before: void 0,
          after: void 0
        })
      ];
      return i.value === !0 && s.push(
        b("div", {
          ref: Q,
          class: F.value + " scroll",
          style: e.popupContentStyle,
          ...Bt.value,
          onClick: Ve,
          onScrollPassive: B
        }, cl())
      ), b(tl, {
        ref: A,
        modelValue: a.value,
        position: e.useInput === !0 ? "top" : void 0,
        transitionShow: T,
        transitionHide: e.transitionHide,
        transitionDuration: e.transitionDuration,
        onBeforeShow: vl,
        onBeforeHide: fi,
        onHide: vi,
        onShow: mi
      }, () => b("div", {
        class: "q-select__dialog" + (O.value === !0 ? " q-select__dialog--dark q-dark" : "") + (g.value === !0 ? " q-select__dialog--focused" : "")
      }, s));
    }
    function fi(s) {
      ml(s), A.value !== null && A.value.__updateRefocusTarget(
        V.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")
      ), V.focused.value = !1;
    }
    function vi(s) {
      Ie(), V.focused.value === !1 && n("blur", s), lt();
    }
    function mi() {
      const s = document.activeElement;
      (s === null || s.id !== V.targetUid.value) && C.value !== null && C.value !== s && C.value.focus(), te();
    }
    function tt() {
      a.value !== !0 && (u.value = -1, i.value === !0 && (i.value = !1), V.focused.value === !1 && (_ !== null && (clearTimeout(_), _ = null), V.innerLoading.value === !0 && (n("filterAbort"), V.innerLoading.value = !1, r.value = !1)));
    }
    function nt(s) {
      V.editable.value === !0 && (c === !0 ? (V.onControlFocusin(s), a.value = !0, se(() => {
        V.focus();
      })) : V.focus(), e.onFilter !== void 0 ? et(f.value) : (W.value !== !0 || t["no-option"] !== void 0) && (i.value = !0));
    }
    function Ie() {
      a.value = !1, tt();
    }
    function lt() {
      e.useInput === !0 && pt(
        e.multiple !== !0 && e.fillInput === !0 && M.value.length !== 0 && Se.value(M.value[0]) || "",
        !0,
        !0
      );
    }
    function cn(s) {
      let I = -1;
      if (s === !0) {
        if (M.value.length !== 0) {
          const z = we.value(M.value[0]);
          I = e.options.findIndex((Y) => Fe(we.value(Y), z));
        }
        D(I);
      }
      Je(I);
    }
    function gi(s, I) {
      i.value === !0 && V.innerLoading.value === !1 && (D(-1, !0), se(() => {
        i.value === !0 && V.innerLoading.value === !1 && (s > I ? D() : cn(!0));
      }));
    }
    function fl() {
      a.value === !1 && H.value !== null && H.value.updatePosition();
    }
    function vl(s) {
      s !== void 0 && Me(s), n("popupShow", s), V.hasPopupOpen = !0, V.onControlFocusin(s);
    }
    function ml(s) {
      s !== void 0 && Me(s), n("popupHide", s), V.hasPopupOpen = !1, V.onControlFocusout(s);
    }
    function gl() {
      c = o.platform.is.mobile !== !0 && e.behavior !== "dialog" ? !1 : e.behavior !== "menu" && (e.useInput === !0 ? t["no-option"] !== void 0 || e.onFilter !== void 0 || W.value === !1 : !0), T = o.platform.is.ios === !0 && c === !0 && e.useInput === !0 ? "fade" : e.transitionShow;
    }
    return io(gl), ki(fl), gl(), me(() => {
      m !== null && clearTimeout(m);
    }), Object.assign(l, {
      showPopup: nt,
      hidePopup: Ie,
      removeAtIndex: rn,
      add: ll,
      toggleOption: He,
      getOptionIndex: () => u.value,
      setOptionIndex: Je,
      moveOptionSelection: Lt,
      filter: et,
      updateMenuPosition: fl,
      updateInputValue: pt,
      isOptionSelected: sn,
      getEmittingOptionValue: nl,
      isOptionDisabled: (...s) => Ge.value.apply(null, s) === !0,
      getOptionValue: (...s) => we.value.apply(null, s),
      getOptionLabel: (...s) => Se.value.apply(null, s)
    }), Object.assign(V, {
      innerValue: M,
      fieldClass: d(
        () => `q-select q-field--auto-height q-select--with${e.useInput !== !0 ? "out" : ""}-input q-select--with${e.useChips !== !0 ? "out" : ""}-chips q-select--${e.multiple === !0 ? "multiple" : "single"}`
      ),
      inputRef: $,
      targetRef: C,
      hasValue: X,
      showPopup: nt,
      floatingLabel: d(
        () => e.hideSelected !== !0 && X.value === !0 || typeof f.value == "number" || f.value.length !== 0 || qt(e.displayValue)
      ),
      getControlChild: () => {
        if (V.editable.value !== !1 && (a.value === !0 || W.value !== !0 || t["no-option"] !== void 0))
          return c === !0 ? di() : ai();
        V.hasPopupOpen === !0 && (V.hasPopupOpen = !1);
      },
      controlEvents: {
        onFocusin(s) {
          V.onControlFocusin(s);
        },
        onFocusout(s) {
          V.onControlFocusout(s, () => {
            lt(), tt();
          });
        },
        onClick(s) {
          if (Ve(s), c !== !0 && i.value === !0) {
            tt(), C.value !== null && C.value.focus();
            return;
          }
          nt(s);
        }
      },
      getControl: (s) => {
        const I = oi(), z = s === !0 || a.value !== !0 || c !== !0;
        if (e.useInput === !0)
          I.push(ii(s, z));
        else if (V.editable.value === !0) {
          const ne = z === !0 ? Be.value : void 0;
          I.push(
            b("input", {
              ref: z === !0 ? C : void 0,
              key: "d_t",
              class: "q-select__focus-target",
              id: z === !0 ? V.targetUid.value : void 0,
              value: R.value,
              readonly: !0,
              "data-autofocus": s === !0 || e.autofocus === !0 || void 0,
              ...ne,
              onKeydown: ul,
              onKeyup: il,
              onKeypress: rl
            })
          ), z === !0 && typeof e.autocomplete == "string" && e.autocomplete.length !== 0 && I.push(
            b("input", {
              class: "q-select__autocomplete-input",
              autocomplete: e.autocomplete,
              tabindex: -1,
              onKeyup: al
            })
          );
        }
        if (q.value !== void 0 && e.disable !== !0 && Tt.value.length !== 0) {
          const ne = Tt.value.map((G) => b("option", { value: G, selected: !0 }));
          I.push(
            b("select", {
              class: "hidden",
              name: q.value,
              multiple: e.multiple
            }, ne)
          );
        }
        const Y = e.useInput === !0 || z !== !0 ? void 0 : V.splitAttrs.attributes.value;
        return b("div", {
          class: "q-field__native row items-center",
          ...Y,
          ...V.splitAttrs.listeners.value
        }, I);
      },
      getInnerAppend: () => e.loading !== !0 && r.value !== !0 && e.hideDropdownIcon !== !0 ? [
        b(ke, {
          class: "q-select__dropdown-icon" + (i.value === !0 ? " rotate-180" : ""),
          name: Mt.value
        })
      ] : null
    }), Kn(V);
  }
}), Dr = /* @__PURE__ */ vt({
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
    const n = e, l = (r) => {
      t("update:modelValue", r);
    }, o = N(""), i = N([]), a = d(() => [...i.value, ...n.options].filter(
      (r) => !o.value || (n.exactFilterMatch ? `${r.label}`.toLowerCase() === o.value.toLowerCase() : `${r.label}`.toLowerCase().includes(o.value.toLowerCase()))
    )), u = (r, m) => {
      o.value = r.toLowerCase(), m(
        () => {
          o.value = r.toLowerCase();
        },
        (v) => {
          r !== "" && v.options && v.options.length > 0 && (v.setOptionIndex(-1), v.moveOptionSelection(1, !0));
        }
      );
    }, f = () => {
      t("update:modelValue", n.multiple ? [] : null);
    }, g = (r, m) => {
      n.newValue && (i.value.push({
        value: n.transformNewValueFn(r),
        label: n.transformNewValueFn(r)
      }), m(r, "add-unique"));
    };
    return (r, m) => (le(), pe(Ka, {
      "model-value": r.modelValue,
      "onUpdate:modelValue": l,
      clearable: "",
      "use-input": "",
      "map-options": "",
      "options-dense": "",
      multiple: r.multiple,
      "use-chips": r.multiple,
      "emit-value": "",
      "input-debounce": "0",
      "popup-content-class": "no-border-radius",
      options: a.value,
      "virtual-scroll-item-size": r.virtualScrolltemSize,
      onFilter: u,
      onClear: f,
      onNewValue: g
    }, {
      option: ae(({ itemProps: v, opt: c, selected: y, toggleOption: _ }) => [
        ie(ct),
        ie(Kt, Pn(v, {
          disable: c.disable
        }), {
          default: ae(() => [
            ie(We, { side: "" }, {
              default: ae(() => [
                ie(_o, {
                  dense: "",
                  "model-value": y,
                  "onUpdate:modelValue": (h) => _(c)
                }, null, 8, ["model-value", "onUpdate:modelValue"])
              ]),
              _: 2
            }, 1024),
            ie(We, null, {
              default: ae(() => [
                ie(Vn, {
                  innerHTML: c.label
                }, null, 8, ["innerHTML"]),
                c.caption ? (le(), pe(Vn, {
                  key: 0,
                  caption: "",
                  innerHTML: c.caption
                }, null, 8, ["innerHTML"])) : Te("", !0)
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1040, ["disable"])
      ]),
      "no-option": ae(() => [
        ie(Kt, null, {
          default: ae(() => [
            ie(We, { class: "text-grey" }, {
              default: ae(() => [
                jt(" Inget resultat ")
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
}), Wa = b("div", { class: "q-space" }), Qa = ee({
  name: "QSpace",
  setup() {
    return () => Wa;
  }
}), Ua = ee({
  name: "QTooltip",
  inheritAttrs: !1,
  props: {
    ...Mo,
    ...Wn,
    ...Xn,
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
      validator: Zt
    },
    self: {
      type: String,
      default: "top middle",
      validator: Zt
    },
    offset: {
      type: Array,
      default: () => [14, 14],
      validator: Do
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
    ...Qn
  ],
  setup(e, { slots: t, emit: n, attrs: l }) {
    let o, i;
    const a = J(), { proxy: { $q: u } } = a, f = N(null), g = N(!1), r = d(() => Gt(e.anchor, u.lang.rtl)), m = d(() => Gt(e.self, u.lang.rtl)), v = d(() => e.persistent !== !0), { registerTick: c, removeTick: y } = Gn(), { registerTimeout: _ } = Jn(), { transitionProps: h, transitionStyle: T } = Zn(e), { localScrollTarget: w, changeScrollEvent: p, unconfigureScrollTarget: $ } = Lo(e, V), { anchorEl: C, canShow: H, anchorEvents: A } = To({ showing: g, configureAnchorEl: te }), { show: Q, hide: q } = Un({
      showing: g,
      canShow: H,
      handleShow: j,
      handleHide: x,
      hideOnRouteChange: v,
      processOnMount: !0
    });
    Object.assign(A, { delayShow: B, delayHide: U });
    const { showPortal: E, hidePortal: L, renderPortal: S } = Yn(a, f, k, "tooltip");
    if (u.platform.is.mobile === !0) {
      const O = {
        anchorEl: C,
        innerRef: f,
        onClickOutside(P) {
          return q(P), P.target.classList.contains("q-dialog__backdrop") && oe(P), !0;
        }
      }, X = d(
        () => (
          // it doesn't has external model
          // (null is the default value)
          e.modelValue === null && e.persistent !== !0 && g.value === !0
        )
      );
      Z(X, (P) => {
        (P === !0 ? Io : Xt)(O);
      }), me(() => {
        Xt(O);
      });
    }
    function j(O) {
      E(), c(() => {
        i = new MutationObserver(() => K()), i.observe(f.value, { attributes: !1, childList: !0, characterData: !0, subtree: !0 }), K(), V();
      }), o === void 0 && (o = Z(
        () => u.screen.width + "|" + u.screen.height + "|" + e.self + "|" + e.anchor + "|" + u.lang.rtl,
        K
      )), _(() => {
        E(!0), n("show", O);
      }, e.transitionDuration);
    }
    function x(O) {
      y(), L(), D(), _(() => {
        L(!0), n("hide", O);
      }, e.transitionDuration);
    }
    function D() {
      i !== void 0 && (i.disconnect(), i = void 0), o !== void 0 && (o(), o = void 0), $(), Nt(A, "tooltipTemp");
    }
    function K() {
      el({
        targetEl: f.value,
        offset: e.offset,
        anchorEl: C.value,
        anchorOrigin: r.value,
        selfOrigin: m.value,
        maxHeight: e.maxHeight,
        maxWidth: e.maxWidth
      });
    }
    function B(O) {
      if (u.platform.is.mobile === !0) {
        Ln(), document.body.classList.add("non-selectable");
        const X = C.value, P = ["touchmove", "touchcancel", "touchend", "click"].map((F) => [X, F, "delayHide", "passiveCapture"]);
        _t(A, "tooltipTemp", P);
      }
      _(() => {
        Q(O);
      }, e.delay);
    }
    function U(O) {
      u.platform.is.mobile === !0 && (Nt(A, "tooltipTemp"), Ln(), setTimeout(() => {
        document.body.classList.remove("non-selectable");
      }, 10)), _(() => {
        q(O);
      }, e.hideDelay);
    }
    function te() {
      if (e.noParentEvent === !0 || C.value === null)
        return;
      const O = u.platform.is.mobile === !0 ? [
        [C.value, "touchstart", "delayShow", "passive"]
      ] : [
        [C.value, "mouseenter", "delayShow", "passive"],
        [C.value, "mouseleave", "delayHide", "passive"]
      ];
      _t(A, "anchor", O);
    }
    function V() {
      if (C.value !== null || e.scrollTarget !== void 0) {
        w.value = Ao(C.value, e.scrollTarget);
        const O = e.noParentEvent === !0 ? K : q;
        p(w.value, O);
      }
    }
    function M() {
      return g.value === !0 ? b("div", {
        ...l,
        ref: f,
        class: [
          "q-tooltip q-tooltip--style q-position-engine no-pointer-events",
          l.class
        ],
        style: [
          l.style,
          T.value
        ],
        role: "tooltip"
      }, ve(t.default)) : null;
    }
    function k() {
      return b(Xe, h.value, M);
    }
    return me(D), Object.assign(a.proxy, { updatePosition: K }), S;
  }
}), Wo = {
  left: "start",
  center: "center",
  right: "end",
  between: "between",
  around: "around",
  evenly: "evenly",
  stretch: "stretch"
}, Ya = Object.keys(Wo), Qo = {
  align: {
    type: String,
    validator: (e) => Ya.includes(e)
  }
};
function Uo(e) {
  return d(() => {
    const t = e.align === void 0 ? e.vertical === !0 ? "stretch" : "left" : e.align;
    return `${e.vertical === !0 ? "items" : "justify"}-${Wo[t]}`;
  });
}
const Wl = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32
}, Xa = {
  xs: 8,
  sm: 10,
  md: 14,
  lg: 20,
  xl: 24
}, Za = ["button", "submit", "reset"], Ga = /[^\s]\/[^\s]/, Ja = ["flat", "outline", "push", "unelevated"], er = (e, t) => e.flat === !0 ? "flat" : e.outline === !0 ? "outline" : e.push === !0 ? "push" : e.unelevated === !0 ? "unelevated" : t, tr = {
  ...gt,
  ...Co,
  type: {
    type: String,
    default: "button"
  },
  label: [Number, String],
  icon: String,
  iconRight: String,
  ...Ja.reduce(
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
    ...Qo.align,
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
function nr(e) {
  const t = ht(e, Xa), n = Uo(e), { hasRouterLink: l, hasLink: o, linkTag: i, linkAttrs: a, navigateOnClick: u } = qo({
    fallbackTag: "button"
  }), f = d(() => {
    const h = e.fab === !1 && e.fabMini === !1 ? t.value : {};
    return e.padding !== void 0 ? Object.assign({}, h, {
      padding: e.padding.split(/\s+/).map((T) => T in Wl ? Wl[T] + "px" : T).join(" "),
      minWidth: "0",
      minHeight: "0"
    }) : h;
  }), g = d(
    () => e.rounded === !0 || e.fab === !0 || e.fabMini === !0
  ), r = d(
    () => e.disable !== !0 && e.loading !== !0
  ), m = d(() => r.value === !0 ? e.tabindex || 0 : -1), v = d(() => er(e, "standard")), c = d(() => {
    const h = { tabindex: m.value };
    return o.value === !0 ? Object.assign(h, a.value) : Za.includes(e.type) === !0 && (h.type = e.type), i.value === "a" ? (e.disable === !0 ? h["aria-disabled"] = "true" : h.href === void 0 && (h.role = "button"), l.value !== !0 && Ga.test(e.type) === !0 && (h.type = e.type)) : e.disable === !0 && (h.disabled = "", h["aria-disabled"] = "true"), e.loading === !0 && e.percentage !== void 0 && Object.assign(h, {
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-valuenow": e.percentage
    }), h;
  }), y = d(() => {
    let h;
    e.color !== void 0 ? e.flat === !0 || e.outline === !0 ? h = `text-${e.textColor || e.color}` : h = `bg-${e.color} text-${e.textColor || "white"}` : e.textColor && (h = `text-${e.textColor}`);
    const T = e.round === !0 ? "round" : `rectangle${g.value === !0 ? " q-btn--rounded" : e.square === !0 ? " q-btn--square" : ""}`;
    return `q-btn--${v.value} q-btn--${T}` + (h !== void 0 ? " " + h : "") + (r.value === !0 ? " q-btn--actionable q-focusable q-hoverable" : e.disable === !0 ? " disabled" : "") + (e.fab === !0 ? " q-btn--fab" : e.fabMini === !0 ? " q-btn--fab-mini" : "") + (e.noCaps === !0 ? " q-btn--no-uppercase" : "") + (e.dense === !0 ? " q-btn--dense" : "") + (e.stretch === !0 ? " no-border-radius self-stretch" : "") + (e.glossy === !0 ? " glossy" : "") + (e.square ? " q-btn--square" : "");
  }), _ = d(
    () => n.value + (e.stack === !0 ? " column" : " row") + (e.noWrap === !0 ? " no-wrap text-no-wrap" : "") + (e.loading === !0 ? " q-btn__content--hidden" : "")
  );
  return {
    classes: y,
    style: f,
    innerClasses: _,
    attributes: c,
    hasLink: o,
    linkTag: i,
    navigateOnClick: u,
    isActionable: r
  };
}
const { passiveCapture: xe } = ye;
let ot = null, it = null, at = null;
const Rn = ee({
  name: "QBtn",
  props: {
    ...tr,
    percentage: Number,
    darkPercentage: Boolean,
    onTouchstart: [Function, Array]
  },
  emits: ["click", "keydown", "mousedown", "keyup"],
  setup(e, { slots: t, emit: n }) {
    const { proxy: l } = J(), {
      classes: o,
      style: i,
      innerClasses: a,
      attributes: u,
      hasLink: f,
      linkTag: g,
      navigateOnClick: r,
      isActionable: m
    } = nr(e), v = N(null), c = N(null);
    let y = null, _, h = null;
    const T = d(
      () => e.label !== void 0 && e.label !== null && e.label !== ""
    ), w = d(() => e.disable === !0 || e.ripple === !1 ? !1 : {
      keyCodes: f.value === !0 ? [13, 32] : [13],
      ...e.ripple === !0 ? {} : e.ripple
    }), p = d(() => ({ center: e.round })), $ = d(() => {
      const x = Math.max(0, Math.min(100, e.percentage));
      return x > 0 ? { transition: "transform 0.6s", transform: `translateX(${x - 100}%)` } : {};
    }), C = d(() => {
      if (e.loading === !0)
        return {
          onMousedown: j,
          onTouchstart: j,
          onClick: j,
          onKeydown: j,
          onKeyup: j
        };
      if (m.value === !0) {
        const x = {
          onClick: A,
          onKeydown: Q,
          onMousedown: E
        };
        if (l.$q.platform.has.touch === !0) {
          const D = e.onTouchstart !== void 0 ? "" : "Passive";
          x[`onTouchstart${D}`] = q;
        }
        return x;
      }
      return {
        // needed; especially for disabled <a> tags
        onClick: oe
      };
    }), H = d(() => ({
      ref: v,
      class: "q-btn q-btn-item non-selectable no-outline " + o.value,
      style: i.value,
      ...u.value,
      ...C.value
    }));
    function A(x) {
      if (v.value !== null) {
        if (x !== void 0) {
          if (x.defaultPrevented === !0)
            return;
          const D = document.activeElement;
          if (e.type === "submit" && D !== document.body && v.value.contains(D) === !1 && D.contains(v.value) === !1) {
            v.value.focus();
            const K = () => {
              document.removeEventListener("keydown", oe, !0), document.removeEventListener("keyup", K, xe), v.value !== null && v.value.removeEventListener("blur", K, xe);
            };
            document.addEventListener("keydown", oe, !0), document.addEventListener("keyup", K, xe), v.value.addEventListener("blur", K, xe);
          }
        }
        r(x);
      }
    }
    function Q(x) {
      v.value !== null && (n("keydown", x), Re(x, [13, 32]) === !0 && it !== v.value && (it !== null && S(), x.defaultPrevented !== !0 && (v.value.focus(), it = v.value, v.value.classList.add("q-btn--active"), document.addEventListener("keyup", L, !0), v.value.addEventListener("blur", L, xe)), oe(x)));
    }
    function q(x) {
      v.value !== null && (n("touchstart", x), x.defaultPrevented !== !0 && (ot !== v.value && (ot !== null && S(), ot = v.value, y = x.target, y.addEventListener("touchcancel", L, xe), y.addEventListener("touchend", L, xe)), _ = !0, h !== null && clearTimeout(h), h = setTimeout(() => {
        h = null, _ = !1;
      }, 200)));
    }
    function E(x) {
      v.value !== null && (x.qSkipRipple = _ === !0, n("mousedown", x), x.defaultPrevented !== !0 && at !== v.value && (at !== null && S(), at = v.value, v.value.classList.add("q-btn--active"), document.addEventListener("mouseup", L, xe)));
    }
    function L(x) {
      if (v.value !== null && !(x !== void 0 && x.type === "blur" && document.activeElement === v.value)) {
        if (x !== void 0 && x.type === "keyup") {
          if (it === v.value && Re(x, [13, 32]) === !0) {
            const D = new MouseEvent("click", x);
            D.qKeyEvent = !0, x.defaultPrevented === !0 && Ve(D), x.cancelBubble === !0 && Me(D), v.value.dispatchEvent(D), oe(x), x.qKeyEvent = !0;
          }
          n("keyup", x);
        }
        S();
      }
    }
    function S(x) {
      const D = c.value;
      x !== !0 && (ot === v.value || at === v.value) && D !== null && D !== document.activeElement && (D.setAttribute("tabindex", -1), D.focus()), ot === v.value && (y !== null && (y.removeEventListener("touchcancel", L, xe), y.removeEventListener("touchend", L, xe)), ot = y = null), at === v.value && (document.removeEventListener("mouseup", L, xe), at = null), it === v.value && (document.removeEventListener("keyup", L, !0), v.value !== null && v.value.removeEventListener("blur", L, xe), it = null), v.value !== null && v.value.classList.remove("q-btn--active");
    }
    function j(x) {
      oe(x), x.qSkipRipple = !0;
    }
    return me(() => {
      S(!0);
    }), Object.assign(l, { click: A }), () => {
      let x = [];
      e.icon !== void 0 && x.push(
        b(ke, {
          name: e.icon,
          left: e.stack === !1 && T.value === !0,
          role: "img",
          "aria-hidden": "true"
        })
      ), T.value === !0 && x.push(
        b("span", { class: "block" }, [e.label])
      ), x = Le(t.default, x), e.iconRight !== void 0 && e.round === !1 && x.push(
        b(ke, {
          name: e.iconRight,
          right: e.stack === !1 && T.value === !0,
          role: "img",
          "aria-hidden": "true"
        })
      );
      const D = [
        b("span", {
          class: "q-focus-helper",
          ref: c
        })
      ];
      return e.loading === !0 && e.percentage !== void 0 && D.push(
        b("span", {
          class: "q-btn__progress absolute-full overflow-hidden" + (e.darkPercentage === !0 ? " q-btn__progress--dark" : "")
        }, [
          b("span", {
            class: "q-btn__progress-indicator fit block",
            style: $.value
          })
        ])
      ), D.push(
        b("span", {
          class: "q-btn__content text-center col items-center q-anchor--skip " + a.value
        }, x)
      ), e.loading !== null && D.push(
        b(Xe, {
          name: "q-transition--fade"
        }, () => e.loading === !0 ? [
          b("span", {
            key: "loading",
            class: "absolute-full flex flex-center"
          }, t.loading !== void 0 ? t.loading() : [b(Wt)])
        ] : null)
      ), An(
        b(
          g.value,
          H.value,
          D
        ),
        [[
          Bo,
          w.value,
          void 0,
          p.value
        ]]
      );
    };
  }
}), rt = ee({
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
    return () => b(e.tag, { class: n.value }, ve(t.default));
  }
}), lr = ["top", "middle", "bottom"], or = ee({
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
      validator: (e) => lr.includes(e)
    }
  },
  setup(e, { slots: t }) {
    const n = d(() => e.align !== void 0 ? { verticalAlign: e.align } : null), l = d(() => {
      const o = e.outline === !0 && e.color || e.textColor;
      return `q-badge flex inline items-center no-wrap q-badge--${e.multiLine === !0 ? "multi" : "single"}-line` + (e.outline === !0 ? " q-badge--outline" : e.color !== void 0 ? ` bg-${e.color}` : "") + (o !== void 0 ? ` text-${o}` : "") + (e.floating === !0 ? " q-badge--floating" : "") + (e.rounded === !0 ? " q-badge--rounded" : "") + (e.transparent === !0 ? " q-badge--transparent" : "");
    });
    return () => b("div", {
      class: l.value,
      style: n.value,
      role: "status",
      "aria-label": e.label
    }, Le(t.default, e.label !== void 0 ? [e.label] : []));
  }
}), Ql = ee({
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
    let l = !1, o, i, a = null, u = null, f, g;
    function r() {
      o && o(), o = null, l = !1, a !== null && (clearTimeout(a), a = null), u !== null && (clearTimeout(u), u = null), i !== void 0 && i.removeEventListener("transitionend", f), f = null;
    }
    function m(_, h, T) {
      h !== void 0 && (_.style.height = `${h}px`), _.style.transition = `height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`, l = !0, o = T;
    }
    function v(_, h) {
      _.style.overflowY = null, _.style.height = null, _.style.transition = null, r(), h !== g && n(h);
    }
    function c(_, h) {
      let T = 0;
      i = _, l === !0 ? (r(), T = _.offsetHeight === _.scrollHeight ? 0 : void 0) : (g = "hide", _.style.overflowY = "hidden"), m(_, T, h), a = setTimeout(() => {
        a = null, _.style.height = `${_.scrollHeight}px`, f = (w) => {
          u = null, (Object(w) !== w || w.target === _) && v(_, "show");
        }, _.addEventListener("transitionend", f), u = setTimeout(f, e.duration * 1.1);
      }, 100);
    }
    function y(_, h) {
      let T;
      i = _, l === !0 ? r() : (g = "show", _.style.overflowY = "hidden", T = _.scrollHeight), m(_, T, h), a = setTimeout(() => {
        a = null, _.style.height = 0, f = (w) => {
          u = null, (Object(w) !== w || w.target === _) && v(_, "hide");
        }, _.addEventListener("transitionend", f), u = setTimeout(f, e.duration * 1.1);
      }, 100);
    }
    return me(() => {
      l === !0 && r();
    }), () => b(Xe, {
      css: !1,
      appear: e.appear,
      onEnter: c,
      onLeave: y
    }, t.default);
  }
}), ir = {
  xs: 2,
  sm: 4,
  md: 6,
  lg: 10,
  xl: 14
};
function Ul(e, t, n) {
  return {
    transform: t === !0 ? `translateX(${n.lang.rtl === !0 ? "-" : ""}100%) scale3d(${-e},1,1)` : `scale3d(${e},1,1)`
  };
}
const ar = ee({
  name: "QLinearProgress",
  props: {
    ..._e,
    ...gt,
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
    const { proxy: n } = J(), l = Ce(e, n.$q), o = ht(e, ir), i = d(() => e.indeterminate === !0 || e.query === !0), a = d(() => e.reverse !== e.query), u = d(() => ({
      ...o.value !== null ? o.value : {},
      "--q-linear-progress-speed": `${e.animationSpeed}ms`
    })), f = d(
      () => "q-linear-progress" + (e.color !== void 0 ? ` text-${e.color}` : "") + (e.reverse === !0 || e.query === !0 ? " q-linear-progress--reverse" : "") + (e.rounded === !0 ? " rounded-borders" : "")
    ), g = d(() => Ul(e.buffer !== void 0 ? e.buffer : 1, a.value, n.$q)), r = d(() => `with${e.instantFeedback === !0 ? "out" : ""}-transition`), m = d(
      () => `q-linear-progress__track absolute-full q-linear-progress__track--${r.value} q-linear-progress__track--${l.value === !0 ? "dark" : "light"}` + (e.trackColor !== void 0 ? ` bg-${e.trackColor}` : "")
    ), v = d(() => Ul(i.value === !0 ? 1 : e.value, a.value, n.$q)), c = d(
      () => `q-linear-progress__model absolute-full q-linear-progress__model--${r.value} q-linear-progress__model--${i.value === !0 ? "in" : ""}determinate`
    ), y = d(() => ({ width: `${e.value * 100}%` })), _ = d(
      () => `q-linear-progress__stripe absolute-${e.reverse === !0 ? "right" : "left"} q-linear-progress__stripe--${r.value}`
    );
    return () => {
      const h = [
        b("div", {
          class: m.value,
          style: g.value
        }),
        b("div", {
          class: c.value,
          style: v.value
        })
      ];
      return e.stripe === !0 && i.value === !1 && h.push(
        b("div", {
          class: _.value,
          style: y.value
        })
      ), b("div", {
        class: f.value,
        style: u.value,
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": 1,
        "aria-valuenow": e.indeterminate === !0 ? void 0 : e.value
      }, Le(t.default, h));
    };
  }
}), Yo = ee({
  name: "QCard",
  props: {
    ..._e,
    tag: {
      type: String,
      default: "div"
    },
    square: Boolean,
    flat: Boolean,
    bordered: Boolean
  },
  setup(e, { slots: t }) {
    const { proxy: { $q: n } } = J(), l = Ce(e, n), o = d(
      () => "q-card" + (l.value === !0 ? " q-card--dark q-dark" : "") + (e.bordered === !0 ? " q-card--bordered" : "") + (e.square === !0 ? " q-card--square no-border-radius" : "") + (e.flat === !0 ? " q-card--flat no-shadow" : "")
    );
    return () => b(e.tag, { class: o.value }, ve(t.default));
  }
}), rr = () => !0;
function ur(e) {
  const t = {};
  return e.forEach((n) => {
    t[n] = rr;
  }), t;
}
function en() {
  const { emit: e, proxy: t } = J(), n = N(null);
  function l() {
    n.value.show();
  }
  function o() {
    n.value.hide();
  }
  function i(u) {
    e("ok", u), o();
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
const Xo = ["ok", "hide"];
en.emits = Xo;
en.emitsObject = ur(Xo);
const sr = {
  key: 0,
  class: "text-body1 text-weight-medium"
}, cr = {
  key: 0,
  class: "q-pb-sm"
}, dr = {
  class: "scroll",
  style: { "max-height": "300px" }
}, fr = { class: "q-px-md q-py-sm bg-red-1 text-red text-caption" }, vr = /* @__PURE__ */ Ke("br", null, null, -1), mr = { style: { "white-space": "pre-wrap" } }, gr = { key: 0 }, hr = /* @__PURE__ */ vt({
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
    ...en.emitsObject
  },
  setup(e) {
    const t = e, { dialogRef: n, onDialogHide: l, onDialogOK: o, onDialogCancel: i } = en(), a = N(!1), u = N(null), f = (c, y) => {
      u.value = {
        type: c,
        message: JSON.stringify(y, Object.getOwnPropertyNames(y), 2)
      };
    }, g = Si([]);
    (async () => {
      if (t.dependencies) {
        a.value = !0;
        try {
          const c = await Promise.all(t.dependencies());
          g.value = c;
        } catch (c) {
          f("dependecy", c);
        }
        a.value = !1;
      }
    })();
    const m = N(!1);
    return lo($r, {
      pending: m,
      dependencyData: g,
      onSubmit: async (c) => {
        u.value = null, m.value = !0;
        try {
          const y = await c();
          o(y);
        } catch (y) {
          f("submit", y);
        } finally {
          m.value = !1;
        }
      },
      onDialogCancel: i,
      onDialogOK: o
    }), (c, y) => (le(), pe(tl, {
      ref_key: "dialogRef",
      ref: n,
      onHide: je(l)
    }, {
      default: ae(() => [
        ie(Yo, {
          square: "",
          style: { "min-width": "360px" }
        }, {
          default: ae(() => [
            ie(rt, { class: "flex" }, {
              default: ae(() => [
                c.title ? (le(), Oe("div", sr, Cn(c.title), 1)) : Te("", !0),
                ie(Qa),
                ie(Rn, {
                  onClick: je(i),
                  size: "sm",
                  icon: "mdi-close",
                  unelevated: "",
                  square: "",
                  padding: "4px",
                  disable: m.value
                }, {
                  default: ae(() => [
                    ie(Ua, null, {
                      default: ae(() => [
                        jt(" Stäng ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["onClick", "disable"])
              ]),
              _: 1
            }),
            ie(Ql, null, {
              default: ae(() => [
                u.value ? (le(), Oe("div", cr, [
                  ie(ct, { color: "red-2" }),
                  Ke("div", dr, [
                    Ke("div", fr, [
                      ie(or, { color: "red" }, {
                        default: ae(() => [
                          ie(ke, {
                            class: "q-mr-sm",
                            name: "mdi-alert-circle-outline"
                          }),
                          jt(" Ett fel uppstod")
                        ]),
                        _: 1
                      }),
                      vr,
                      Ke("code", mr, Cn(u.value.message), 1)
                    ])
                  ]),
                  ie(ct, { color: "red-2" })
                ])) : Te("", !0)
              ]),
              _: 1
            }),
            a.value ? (le(), pe(ar, {
              key: 0,
              indeterminate: ""
            })) : Te("", !0),
            ie(Ql, null, {
              default: ae(() => {
                var _;
                return [
                  !a.value && ((_ = u.value) == null ? void 0 : _.type) !== "dependecy" ? (le(), Oe("div", gr, [
                    (le(), pe(xn(t.slot.component), ao(ro(t.slot.componentProps)), null, 16))
                  ])) : Te("", !0)
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
}), br = ee({
  name: "QCardActions",
  props: {
    ...Qo,
    vertical: Boolean
  },
  setup(e, { slots: t }) {
    const n = Uo(e), l = d(
      () => `q-card__actions ${n.value} q-card__actions--${e.vertical === !0 ? "vert column" : "horiz row"}`
    );
    return () => b("div", { class: l.value }, ve(t.default));
  }
}), Yl = {
  date: "####/##/##",
  datetime: "####/##/## ##:##",
  time: "##:##",
  fulltime: "##:##:##",
  phone: "(###) ### - ####",
  card: "#### #### #### ####"
}, tn = {
  "#": { pattern: "[\\d]", negate: "[^\\d]" },
  S: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]" },
  N: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]" },
  A: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (e) => e.toLocaleUpperCase() },
  a: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (e) => e.toLocaleLowerCase() },
  X: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (e) => e.toLocaleUpperCase() },
  x: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (e) => e.toLocaleLowerCase() }
}, Zo = Object.keys(tn);
Zo.forEach((e) => {
  tn[e].regex = new RegExp(tn[e].pattern);
});
const yr = new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([" + Zo.join("") + "])|(.)", "g"), Xl = /[.*+?^${}()|[\]\\]/g, ce = String.fromCharCode(1), pr = {
  mask: String,
  reverseFillMask: Boolean,
  fillMask: [Boolean, String],
  unmaskedValue: Boolean
};
function wr(e, t, n, l) {
  let o, i, a, u, f, g;
  const r = N(null), m = N(c());
  function v() {
    return e.autogrow === !0 || ["textarea", "text", "search", "url", "tel", "password"].includes(e.type);
  }
  Z(() => e.type + e.autogrow, _), Z(() => e.mask, (q) => {
    if (q !== void 0)
      h(m.value, !0);
    else {
      const E = A(m.value);
      _(), e.modelValue !== E && t("update:modelValue", E);
    }
  }), Z(() => e.fillMask + e.reverseFillMask, () => {
    r.value === !0 && h(m.value, !0);
  }), Z(() => e.unmaskedValue, () => {
    r.value === !0 && h(m.value);
  });
  function c() {
    if (_(), r.value === !0) {
      const q = C(A(e.modelValue));
      return e.fillMask !== !1 ? Q(q) : q;
    }
    return e.modelValue;
  }
  function y(q) {
    if (q < o.length)
      return o.slice(-q);
    let E = "", L = o;
    const S = L.indexOf(ce);
    if (S > -1) {
      for (let j = q - L.length; j > 0; j--)
        E += ce;
      L = L.slice(0, S) + E + L.slice(S);
    }
    return L;
  }
  function _() {
    if (r.value = e.mask !== void 0 && e.mask.length !== 0 && v(), r.value === !1) {
      u = void 0, o = "", i = "";
      return;
    }
    const q = Yl[e.mask] === void 0 ? e.mask : Yl[e.mask], E = typeof e.fillMask == "string" && e.fillMask.length !== 0 ? e.fillMask.slice(0, 1) : "_", L = E.replace(Xl, "\\$&"), S = [], j = [], x = [];
    let D = e.reverseFillMask === !0, K = "", B = "";
    q.replace(yr, (M, k, O, X, P) => {
      if (X !== void 0) {
        const F = tn[X];
        x.push(F), B = F.negate, D === !0 && (j.push("(?:" + B + "+)?(" + F.pattern + "+)?(?:" + B + "+)?(" + F.pattern + "+)?"), D = !1), j.push("(?:" + B + "+)?(" + F.pattern + ")?");
      } else if (O !== void 0)
        K = "\\" + (O === "\\" ? "" : O), x.push(O), S.push("([^" + K + "]+)?" + K + "?");
      else {
        const F = k !== void 0 ? k : P;
        K = F === "\\" ? "\\\\\\\\" : F.replace(Xl, "\\\\$&"), x.push(F), S.push("([^" + K + "]+)?" + K + "?");
      }
    });
    const U = new RegExp(
      "^" + S.join("") + "(" + (K === "" ? "." : "[^" + K + "]") + "+)?" + (K === "" ? "" : "[" + K + "]*") + "$"
    ), te = j.length - 1, V = j.map((M, k) => k === 0 && e.reverseFillMask === !0 ? new RegExp("^" + L + "*" + M) : k === te ? new RegExp(
      "^" + M + "(" + (B === "" ? "." : B) + "+)?" + (e.reverseFillMask === !0 ? "$" : L + "*")
    ) : new RegExp("^" + M));
    a = x, u = (M) => {
      const k = U.exec(e.reverseFillMask === !0 ? M : M.slice(0, x.length + 1));
      k !== null && (M = k.slice(1).join(""));
      const O = [], X = V.length;
      for (let P = 0, F = M; P < X; P++) {
        const W = V[P].exec(F);
        if (W === null)
          break;
        F = F.slice(W.shift().length), O.push(...W);
      }
      return O.length !== 0 ? O.join("") : M;
    }, o = x.map((M) => typeof M == "string" ? M : ce).join(""), i = o.split(ce).join(E);
  }
  function h(q, E, L) {
    const S = l.value, j = S.selectionEnd, x = S.value.length - j, D = A(q);
    E === !0 && _();
    const K = C(D), B = e.fillMask !== !1 ? Q(K) : K, U = m.value !== B;
    S.value !== B && (S.value = B), U === !0 && (m.value = B), document.activeElement === S && se(() => {
      if (B === i) {
        const V = e.reverseFillMask === !0 ? i.length : 0;
        S.setSelectionRange(V, V, "forward");
        return;
      }
      if (L === "insertFromPaste" && e.reverseFillMask !== !0) {
        const V = S.selectionEnd;
        let M = j - 1;
        for (let k = f; k <= M && k < V; k++)
          o[k] !== ce && M++;
        w.right(S, M);
        return;
      }
      if (["deleteContentBackward", "deleteContentForward"].indexOf(L) > -1) {
        const V = e.reverseFillMask === !0 ? j === 0 ? B.length > K.length ? 1 : 0 : Math.max(0, B.length - (B === i ? 0 : Math.min(K.length, x) + 1)) + 1 : j;
        S.setSelectionRange(V, V, "forward");
        return;
      }
      if (e.reverseFillMask === !0)
        if (U === !0) {
          const V = Math.max(0, B.length - (B === i ? 0 : Math.min(K.length, x + 1)));
          V === 1 && j === 1 ? S.setSelectionRange(V, V, "forward") : w.rightReverse(S, V);
        } else {
          const V = B.length - x;
          S.setSelectionRange(V, V, "backward");
        }
      else if (U === !0) {
        const V = Math.max(0, o.indexOf(ce), Math.min(K.length, j) - 1);
        w.right(S, V);
      } else {
        const V = j - 1;
        w.right(S, V);
      }
    });
    const te = e.unmaskedValue === !0 ? A(B) : B;
    String(e.modelValue) !== te && n(te, !0);
  }
  function T(q, E, L) {
    const S = C(A(q.value));
    E = Math.max(0, o.indexOf(ce), Math.min(S.length, E)), f = E, q.setSelectionRange(E, L, "forward");
  }
  const w = {
    left(q, E) {
      const L = o.slice(E - 1).indexOf(ce) === -1;
      let S = Math.max(0, E - 1);
      for (; S >= 0; S--)
        if (o[S] === ce) {
          E = S, L === !0 && E++;
          break;
        }
      if (S < 0 && o[E] !== void 0 && o[E] !== ce)
        return w.right(q, 0);
      E >= 0 && q.setSelectionRange(E, E, "backward");
    },
    right(q, E) {
      const L = q.value.length;
      let S = Math.min(L, E + 1);
      for (; S <= L; S++)
        if (o[S] === ce) {
          E = S;
          break;
        } else
          o[S - 1] === ce && (E = S);
      if (S > L && o[E - 1] !== void 0 && o[E - 1] !== ce)
        return w.left(q, L);
      q.setSelectionRange(E, E, "forward");
    },
    leftReverse(q, E) {
      const L = y(q.value.length);
      let S = Math.max(0, E - 1);
      for (; S >= 0; S--)
        if (L[S - 1] === ce) {
          E = S;
          break;
        } else if (L[S] === ce && (E = S, S === 0))
          break;
      if (S < 0 && L[E] !== void 0 && L[E] !== ce)
        return w.rightReverse(q, 0);
      E >= 0 && q.setSelectionRange(E, E, "backward");
    },
    rightReverse(q, E) {
      const L = q.value.length, S = y(L), j = S.slice(0, E + 1).indexOf(ce) === -1;
      let x = Math.min(L, E + 1);
      for (; x <= L; x++)
        if (S[x - 1] === ce) {
          E = x, E > 0 && j === !0 && E--;
          break;
        }
      if (x > L && S[E - 1] !== void 0 && S[E - 1] !== ce)
        return w.leftReverse(q, L);
      q.setSelectionRange(E, E, "forward");
    }
  };
  function p(q) {
    t("click", q), g = void 0;
  }
  function $(q) {
    if (t("keydown", q), Hn(q) === !0 || q.altKey === !0)
      return;
    const E = l.value, L = E.selectionStart, S = E.selectionEnd;
    if (q.shiftKey || (g = void 0), q.keyCode === 37 || q.keyCode === 39) {
      q.shiftKey && g === void 0 && (g = E.selectionDirection === "forward" ? L : S);
      const j = w[(q.keyCode === 39 ? "right" : "left") + (e.reverseFillMask === !0 ? "Reverse" : "")];
      if (q.preventDefault(), j(E, g === L ? S : L), q.shiftKey) {
        const x = E.selectionStart;
        E.setSelectionRange(Math.min(g, x), Math.max(g, x), "forward");
      }
    } else
      q.keyCode === 8 && e.reverseFillMask !== !0 && L === S ? (w.left(E, L), E.setSelectionRange(E.selectionStart, S, "backward")) : q.keyCode === 46 && e.reverseFillMask === !0 && L === S && (w.rightReverse(E, S), E.setSelectionRange(L, E.selectionEnd, "forward"));
  }
  function C(q) {
    if (q == null || q === "")
      return "";
    if (e.reverseFillMask === !0)
      return H(q);
    const E = a;
    let L = 0, S = "";
    for (let j = 0; j < E.length; j++) {
      const x = q[L], D = E[j];
      if (typeof D == "string")
        S += D, x === D && L++;
      else if (x !== void 0 && D.regex.test(x))
        S += D.transform !== void 0 ? D.transform(x) : x, L++;
      else
        return S;
    }
    return S;
  }
  function H(q) {
    const E = a, L = o.indexOf(ce);
    let S = q.length - 1, j = "";
    for (let x = E.length - 1; x >= 0 && S > -1; x--) {
      const D = E[x];
      let K = q[S];
      if (typeof D == "string")
        j = D + j, K === D && S--;
      else if (K !== void 0 && D.regex.test(K))
        do
          j = (D.transform !== void 0 ? D.transform(K) : K) + j, S--, K = q[S];
        while (L === x && K !== void 0 && D.regex.test(K));
      else
        return j;
    }
    return j;
  }
  function A(q) {
    return typeof q != "string" || u === void 0 ? typeof q == "number" ? u("" + q) : q : u(q);
  }
  function Q(q) {
    return i.length - q.length <= 0 ? q : e.reverseFillMask === !0 && q.length !== 0 ? i.slice(0, -q.length) + q : q + i.slice(q.length);
  }
  return {
    innerValue: m,
    hasMask: r,
    moveCursorForPaste: T,
    updateMaskValue: h,
    onMaskedKeydown: $,
    onMaskedClick: p
  };
}
function kr(e, t) {
  function n() {
    const l = e.modelValue;
    try {
      const o = "DataTransfer" in window ? new DataTransfer() : "ClipboardEvent" in window ? new ClipboardEvent("").clipboardData : void 0;
      return Object(l) === l && ("length" in l ? Array.from(l) : [l]).forEach((i) => {
        o.items.add(i);
      }), {
        files: o.files
      };
    } catch {
      return {
        files: void 0
      };
    }
  }
  return t === !0 ? d(() => {
    if (e.type === "file")
      return n();
  }) : d(n);
}
const Sr = ee({
  name: "QInput",
  inheritAttrs: !1,
  props: {
    ...ln,
    ...pr,
    ...nn,
    modelValue: { required: !1 },
    shadowText: String,
    type: {
      type: String,
      default: "text"
    },
    debounce: [String, Number],
    autogrow: Boolean,
    // makes a textarea
    inputClass: [Array, String, Object],
    inputStyle: [Array, String, Object]
  },
  emits: [
    ...jn,
    "paste",
    "change",
    "keydown",
    "click",
    "animationend"
  ],
  setup(e, { emit: t, attrs: n }) {
    const { proxy: l } = J(), { $q: o } = l, i = {};
    let a = NaN, u, f, g = null, r;
    const m = N(null), v = po(e), {
      innerValue: c,
      hasMask: y,
      moveCursorForPaste: _,
      updateMaskValue: h,
      onMaskedKeydown: T,
      onMaskedClick: w
    } = wr(e, t, K, m), p = kr(
      e,
      /* type guard */
      !0
    ), $ = d(() => qt(c.value)), C = Ko(x), H = Nn(), A = d(
      () => e.type === "textarea" || e.autogrow === !0
    ), Q = d(
      () => A.value === !0 || ["text", "search", "url", "tel", "password"].includes(e.type)
    ), q = d(() => {
      const k = {
        ...H.splitAttrs.listeners.value,
        onInput: x,
        onPaste: j,
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        onChange: U,
        onBlur: te,
        onFocus: Me
      };
      return k.onCompositionstart = k.onCompositionupdate = k.onCompositionend = C, y.value === !0 && (k.onKeydown = T, k.onClick = w), e.autogrow === !0 && (k.onAnimationend = D), k;
    }), E = d(() => {
      const k = {
        tabindex: 0,
        "data-autofocus": e.autofocus === !0 || void 0,
        rows: e.type === "textarea" ? 6 : void 0,
        "aria-label": e.label,
        name: v.value,
        ...H.splitAttrs.attributes.value,
        id: H.targetUid.value,
        maxlength: e.maxlength,
        disabled: e.disable === !0,
        readonly: e.readonly === !0
      };
      return A.value === !1 && (k.type = e.type), e.autogrow === !0 && (k.rows = 1), k;
    });
    Z(() => e.type, () => {
      m.value && (m.value.value = e.modelValue);
    }), Z(() => e.modelValue, (k) => {
      if (y.value === !0) {
        if (f === !0 && (f = !1, String(k) === a))
          return;
        h(k);
      } else
        c.value !== k && (c.value = k, e.type === "number" && i.hasOwnProperty("value") === !0 && (u === !0 ? u = !1 : delete i.value));
      e.autogrow === !0 && se(B);
    }), Z(() => e.autogrow, (k) => {
      k === !0 ? se(B) : m.value !== null && n.rows > 0 && (m.value.style.height = "auto");
    }), Z(() => e.dense, () => {
      e.autogrow === !0 && se(B);
    });
    function L() {
      Vt(() => {
        const k = document.activeElement;
        m.value !== null && m.value !== k && (k === null || k.id !== H.targetUid.value) && m.value.focus({ preventScroll: !0 });
      });
    }
    function S() {
      m.value !== null && m.value.select();
    }
    function j(k) {
      if (y.value === !0 && e.reverseFillMask !== !0) {
        const O = k.target;
        _(O, O.selectionStart, O.selectionEnd);
      }
      t("paste", k);
    }
    function x(k) {
      if (!k || !k.target)
        return;
      if (e.type === "file") {
        t("update:modelValue", k.target.files);
        return;
      }
      const O = k.target.value;
      if (k.target.qComposing === !0) {
        i.value = O;
        return;
      }
      if (y.value === !0)
        h(O, !1, k.inputType);
      else if (K(O), Q.value === !0 && k.target === document.activeElement) {
        const { selectionStart: X, selectionEnd: P } = k.target;
        X !== void 0 && P !== void 0 && se(() => {
          k.target === document.activeElement && O.indexOf(k.target.value) === 0 && k.target.setSelectionRange(X, P);
        });
      }
      e.autogrow === !0 && B();
    }
    function D(k) {
      t("animationend", k), B();
    }
    function K(k, O) {
      r = () => {
        g = null, e.type !== "number" && i.hasOwnProperty("value") === !0 && delete i.value, e.modelValue !== k && a !== k && (a = k, O === !0 && (f = !0), t("update:modelValue", k), se(() => {
          a === k && (a = NaN);
        })), r = void 0;
      }, e.type === "number" && (u = !0, i.value = k), e.debounce !== void 0 ? (g !== null && clearTimeout(g), i.value = k, g = setTimeout(r, e.debounce)) : r();
    }
    function B() {
      requestAnimationFrame(() => {
        const k = m.value;
        if (k !== null) {
          const O = k.parentNode.style, { scrollTop: X } = k, { overflowY: P, maxHeight: F } = o.platform.is.firefox === !0 ? {} : window.getComputedStyle(k), W = P !== void 0 && P !== "scroll";
          W === !0 && (k.style.overflowY = "hidden"), O.marginBottom = k.scrollHeight - 1 + "px", k.style.height = "1px", k.style.height = k.scrollHeight + "px", W === !0 && (k.style.overflowY = parseInt(F, 10) < k.scrollHeight ? "auto" : "hidden"), O.marginBottom = "", k.scrollTop = X;
        }
      });
    }
    function U(k) {
      C(k), g !== null && (clearTimeout(g), g = null), r !== void 0 && r(), t("change", k.target.value);
    }
    function te(k) {
      k !== void 0 && Me(k), g !== null && (clearTimeout(g), g = null), r !== void 0 && r(), u = !1, f = !1, delete i.value, e.type !== "file" && setTimeout(() => {
        m.value !== null && (m.value.value = c.value !== void 0 ? c.value : "");
      });
    }
    function V() {
      return i.hasOwnProperty("value") === !0 ? i.value : c.value !== void 0 ? c.value : "";
    }
    me(() => {
      te();
    }), mt(() => {
      e.autogrow === !0 && B();
    }), Object.assign(H, {
      innerValue: c,
      fieldClass: d(
        () => `q-${A.value === !0 ? "textarea" : "input"}` + (e.autogrow === !0 ? " q-textarea--autogrow" : "")
      ),
      hasShadow: d(
        () => e.type !== "file" && typeof e.shadowText == "string" && e.shadowText.length !== 0
      ),
      inputRef: m,
      emitValue: K,
      hasValue: $,
      floatingLabel: d(
        () => $.value === !0 && (e.type !== "number" || isNaN(c.value) === !1) || qt(e.displayValue)
      ),
      getControl: () => b(A.value === !0 ? "textarea" : "input", {
        ref: m,
        class: [
          "q-field__native q-placeholder",
          e.inputClass
        ],
        style: e.inputStyle,
        ...E.value,
        ...q.value,
        ...e.type !== "file" ? { value: V() } : p.value
      }),
      getShadowControl: () => b("div", {
        class: "q-field__native q-field__shadow absolute-bottom no-pointer-events" + (A.value === !0 ? "" : " text-no-wrap")
      }, [
        b("span", { class: "invisible" }, V()),
        b("span", e.shadowText)
      ])
    });
    const M = Kn(H);
    return Object.assign(l, {
      focus: L,
      select: S,
      getNativeElement: () => m.value
      // deprecated
    }), bt(l, "nativeEl", () => m.value), M;
  }
}), xr = b("svg", {
  key: "svg",
  class: "q-radio__bg absolute non-selectable",
  viewBox: "0 0 24 24"
}, [
  b("path", {
    d: "M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12"
  }),
  b("path", {
    class: "q-radio__check",
    d: "M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6"
  })
]), _r = ee({
  name: "QRadio",
  props: {
    ..._e,
    ...gt,
    ...nn,
    modelValue: { required: !0 },
    val: { required: !0 },
    label: String,
    leftLabel: Boolean,
    checkedIcon: String,
    uncheckedIcon: String,
    color: String,
    keepColor: Boolean,
    dense: Boolean,
    disable: Boolean,
    tabindex: [String, Number]
  },
  emits: ["update:modelValue"],
  setup(e, { slots: t, emit: n }) {
    const { proxy: l } = J(), o = Ce(e, l.$q), i = ht(e, wo), a = N(null), { refocusTargetEl: u, refocusTarget: f } = bo(e, a), g = d(() => qe(e.modelValue) === qe(e.val)), r = d(
      () => "q-radio cursor-pointer no-outline row inline no-wrap items-center" + (e.disable === !0 ? " disabled" : "") + (o.value === !0 ? " q-radio--dark" : "") + (e.dense === !0 ? " q-radio--dense" : "") + (e.leftLabel === !0 ? " reverse" : "")
    ), m = d(() => {
      const p = e.color !== void 0 && (e.keepColor === !0 || g.value === !0) ? ` text-${e.color}` : "";
      return `q-radio__inner relative-position q-radio__inner--${g.value === !0 ? "truthy" : "falsy"}${p}`;
    }), v = d(
      () => (g.value === !0 ? e.checkedIcon : e.uncheckedIcon) || null
    ), c = d(() => e.disable === !0 ? -1 : e.tabindex || 0), y = d(() => {
      const p = { type: "radio" };
      return e.name !== void 0 && Object.assign(p, {
        // see https://vuejs.org/guide/extras/render-function.html#creating-vnodes (.prop)
        ".checked": g.value === !0,
        "^checked": g.value === !0 ? "checked" : void 0,
        name: e.name,
        value: e.val
      }), p;
    }), _ = yo(y);
    function h(p) {
      p !== void 0 && (oe(p), f(p)), e.disable !== !0 && g.value !== !0 && n("update:modelValue", e.val, p);
    }
    function T(p) {
      (p.keyCode === 13 || p.keyCode === 32) && oe(p);
    }
    function w(p) {
      (p.keyCode === 13 || p.keyCode === 32) && h(p);
    }
    return Object.assign(l, { set: h }), () => {
      const p = v.value !== null ? [
        b("div", {
          key: "icon",
          class: "q-radio__icon-container absolute-full flex flex-center no-wrap"
        }, [
          b(ke, {
            class: "q-radio__icon",
            name: v.value
          })
        ])
      ] : [xr];
      e.disable !== !0 && _(
        p,
        "unshift",
        " q-radio__native q-ma-none q-pa-none"
      );
      const $ = [
        b("div", {
          class: m.value,
          style: i.value,
          "aria-hidden": "true"
        }, p)
      ];
      u.value !== null && $.push(u.value);
      const C = e.label !== void 0 ? Le(t.default, [e.label]) : ve(t.default);
      return C !== void 0 && $.push(
        b("div", {
          class: "q-radio__label q-anchor--skip"
        }, C)
      ), b("div", {
        ref: a,
        class: r.value,
        tabindex: c.value,
        role: "radio",
        "aria-label": e.label,
        "aria-checked": g.value === !0 ? "true" : "false",
        "aria-disabled": e.disable === !0 ? "true" : void 0,
        onClick: h,
        onKeydown: T,
        onKeyup: w
      }, $);
    };
  }
}), Cr = ee({
  name: "QToggle",
  props: {
    ...ko,
    icon: String,
    iconColor: String
  },
  emits: So,
  setup(e) {
    function t(n, l) {
      const o = d(
        () => (n.value === !0 ? e.checkedIcon : l.value === !0 ? e.indeterminateIcon : e.uncheckedIcon) || e.icon
      ), i = d(() => n.value === !0 ? e.iconColor : null);
      return () => [
        b("div", { class: "q-toggle__track" }),
        b(
          "div",
          {
            class: "q-toggle__thumb absolute flex flex-center no-wrap"
          },
          o.value !== void 0 ? [
            b(ke, {
              name: o.value,
              color: i.value
            })
          ] : void 0
        )
      ];
    }
    return xo("toggle", t);
  }
}), Go = {
  radio: _r,
  checkbox: _o,
  toggle: Cr
}, qr = Object.keys(Go), Er = ee({
  name: "QOptionGroup",
  props: {
    ..._e,
    modelValue: {
      required: !0
    },
    options: {
      type: Array,
      validator: (e) => e.every((t) => "value" in t && "label" in t)
    },
    name: String,
    type: {
      default: "radio",
      validator: (e) => qr.includes(e)
    },
    color: String,
    keepColor: Boolean,
    dense: Boolean,
    size: String,
    leftLabel: Boolean,
    inline: Boolean,
    disable: Boolean
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t, slots: n }) {
    const { proxy: { $q: l } } = J(), o = Array.isArray(e.modelValue);
    e.type === "radio" ? o === !0 && console.error("q-option-group: model should not be array") : o === !1 && console.error("q-option-group: model should be array in your case");
    const i = Ce(e, l), a = d(() => Go[e.type]), u = d(
      () => "q-option-group q-gutter-x-sm" + (e.inline === !0 ? " q-option-group--inline" : "")
    ), f = d(() => {
      const r = { role: "group" };
      return e.type === "radio" && (r.role = "radiogroup", e.disable === !0 && (r["aria-disabled"] = "true")), r;
    });
    function g(r) {
      t("update:modelValue", r);
    }
    return () => b("div", {
      class: u.value,
      ...f.value
    }, e.options.map((r, m) => {
      const v = n["label-" + m] !== void 0 ? () => n["label-" + m](r) : n.label !== void 0 ? () => n.label(r) : void 0;
      return b("div", [
        b(a.value, {
          modelValue: e.modelValue,
          val: r.value,
          name: r.name === void 0 ? e.name : r.name,
          disable: e.disable || r.disable,
          label: v === void 0 ? r.label : null,
          leftLabel: r.leftLabel === void 0 ? e.leftLabel : r.leftLabel,
          color: r.color === void 0 ? e.color : r.color,
          checkedIcon: r.checkedIcon,
          uncheckedIcon: r.uncheckedIcon,
          dark: r.dark || i.value,
          size: r.size === void 0 ? e.size : r.size,
          dense: e.dense,
          keepColor: r.keepColor === void 0 ? e.keepColor : r.keepColor,
          "onUpdate:modelValue": g
        }, v)
      ]);
    }));
  }
}), Vr = ee({
  name: "DialogPlugin",
  props: {
    ..._e,
    title: String,
    message: String,
    prompt: Object,
    options: Object,
    progress: [Boolean, Object],
    html: Boolean,
    ok: {
      type: [String, Object, Boolean],
      default: !0
    },
    cancel: [String, Object, Boolean],
    focus: {
      type: String,
      default: "ok",
      validator: (e) => ["ok", "cancel", "none"].includes(e)
    },
    stackButtons: Boolean,
    color: String,
    cardClass: [String, Array, Object],
    cardStyle: [String, Array, Object]
  },
  emits: ["ok", "hide"],
  setup(e, { emit: t }) {
    const { proxy: n } = J(), { $q: l } = n, o = Ce(e, l), i = N(null), a = N(
      e.prompt !== void 0 ? e.prompt.model : e.options !== void 0 ? e.options.model : void 0
    ), u = d(
      () => "q-dialog-plugin" + (o.value === !0 ? " q-dialog-plugin--dark q-dark" : "") + (e.progress !== !1 ? " q-dialog-plugin--progress" : "")
    ), f = d(
      () => e.color || (o.value === !0 ? "amber" : "primary")
    ), g = d(() => e.progress === !1 ? null : St(e.progress) === !0 ? {
      component: e.progress.spinner || Wt,
      props: { color: e.progress.color || f.value }
    } : {
      component: Wt,
      props: { color: f.value }
    }), r = d(
      () => e.prompt !== void 0 || e.options !== void 0
    ), m = d(() => {
      if (r.value !== !0)
        return {};
      const { model: x, isValid: D, items: K, ...B } = e.prompt !== void 0 ? e.prompt : e.options;
      return B;
    }), v = d(() => St(e.ok) === !0 || e.ok === !0 ? l.lang.label.ok : e.ok), c = d(() => St(e.cancel) === !0 || e.cancel === !0 ? l.lang.label.cancel : e.cancel), y = d(() => e.prompt !== void 0 ? e.prompt.isValid !== void 0 && e.prompt.isValid(a.value) !== !0 : e.options !== void 0 ? e.options.isValid !== void 0 && e.options.isValid(a.value) !== !0 : !1), _ = d(() => ({
      color: f.value,
      label: v.value,
      ripple: !1,
      disable: y.value,
      ...St(e.ok) === !0 ? e.ok : { flat: !0 },
      "data-autofocus": e.focus === "ok" && r.value !== !0 || void 0,
      onClick: p
    })), h = d(() => ({
      color: f.value,
      label: c.value,
      ripple: !1,
      ...St(e.cancel) === !0 ? e.cancel : { flat: !0 },
      "data-autofocus": e.focus === "cancel" && r.value !== !0 || void 0,
      onClick: $
    }));
    Z(() => e.prompt && e.prompt.model, H), Z(() => e.options && e.options.model, H);
    function T() {
      i.value.show();
    }
    function w() {
      i.value.hide();
    }
    function p() {
      t("ok", qe(a.value)), w();
    }
    function $() {
      w();
    }
    function C() {
      t("hide");
    }
    function H(x) {
      a.value = x;
    }
    function A(x) {
      y.value !== !0 && e.prompt.type !== "textarea" && Re(x, 13) === !0 && p();
    }
    function Q(x, D) {
      return e.html === !0 ? b(rt, {
        class: x,
        innerHTML: D
      }) : b(rt, { class: x }, () => D);
    }
    function q() {
      return [
        b(Sr, {
          color: f.value,
          dense: !0,
          autofocus: !0,
          dark: o.value,
          ...m.value,
          modelValue: a.value,
          "onUpdate:modelValue": H,
          onKeyup: A
        })
      ];
    }
    function E() {
      return [
        b(Er, {
          color: f.value,
          options: e.options.items,
          dark: o.value,
          ...m.value,
          modelValue: a.value,
          "onUpdate:modelValue": H
        })
      ];
    }
    function L() {
      const x = [];
      return e.cancel && x.push(
        b(Rn, h.value)
      ), e.ok && x.push(
        b(Rn, _.value)
      ), b(br, {
        class: e.stackButtons === !0 ? "items-end" : "",
        vertical: e.stackButtons,
        align: "right"
      }, () => x);
    }
    function S() {
      const x = [];
      return e.title && x.push(
        Q("q-dialog__title", e.title)
      ), e.progress !== !1 && x.push(
        b(
          rt,
          { class: "q-dialog__progress" },
          () => b(g.value.component, g.value.props)
        )
      ), e.message && x.push(
        Q("q-dialog__message", e.message)
      ), e.prompt !== void 0 ? x.push(
        b(
          rt,
          { class: "scroll q-dialog-plugin__form" },
          q
        )
      ) : e.options !== void 0 && x.push(
        b(ct, { dark: o.value }),
        b(
          rt,
          { class: "scroll q-dialog-plugin__form" },
          E
        ),
        b(ct, { dark: o.value })
      ), (e.ok || e.cancel) && x.push(L()), x;
    }
    function j() {
      return [
        b(Yo, {
          class: [
            u.value,
            e.cardClass
          ],
          style: e.cardStyle,
          dark: o.value
        }, S)
      ];
    }
    return Object.assign(n, { show: T, hide: w }), () => b(tl, {
      ref: i,
      onHide: C
    }, j);
  }
}), on = (e, t) => {
  const n = oo(e);
  for (const l in e)
    bt(
      t,
      l,
      () => n[l],
      (o) => {
        n[l] = o;
      }
    );
  return t;
}, Sn = ["sm", "md", "lg", "xl"], { passive: Zl } = ye;
on({
  width: 0,
  height: 0,
  name: "xs",
  sizes: {
    sm: 600,
    md: 1024,
    lg: 1440,
    xl: 1920
  },
  lt: {
    sm: !0,
    md: !0,
    lg: !0,
    xl: !0
  },
  gt: {
    xs: !1,
    sm: !1,
    md: !1,
    lg: !1
  },
  xs: !0,
  sm: !1,
  md: !1,
  lg: !1,
  xl: !1
}, {
  setSizes: qn,
  setDebounce: qn,
  install({ $q: e, onSSRHydrated: t }) {
    if (e.screen = this, this.__installed === !0) {
      e.config.screen !== void 0 && (e.config.screen.bodyClasses === !1 ? document.body.classList.remove(`screen--${this.name}`) : this.__update(!0));
      return;
    }
    const { visualViewport: n } = window, l = n || window, o = document.scrollingElement || document.documentElement, i = n === void 0 || ge.is.mobile === !0 ? () => [
      Math.max(window.innerWidth, o.clientWidth),
      Math.max(window.innerHeight, o.clientHeight)
    ] : () => [
      n.width * n.scale + window.innerWidth - o.clientWidth,
      n.height * n.scale + window.innerHeight - o.clientHeight
    ], a = e.config.screen !== void 0 && e.config.screen.bodyClasses === !0;
    this.__update = (m) => {
      const [v, c] = i();
      if (c !== this.height && (this.height = c), v !== this.width)
        this.width = v;
      else if (m !== !0)
        return;
      let y = this.sizes;
      this.gt.xs = v >= y.sm, this.gt.sm = v >= y.md, this.gt.md = v >= y.lg, this.gt.lg = v >= y.xl, this.lt.sm = v < y.sm, this.lt.md = v < y.md, this.lt.lg = v < y.lg, this.lt.xl = v < y.xl, this.xs = this.lt.sm, this.sm = this.gt.xs === !0 && this.lt.md === !0, this.md = this.gt.sm === !0 && this.lt.lg === !0, this.lg = this.gt.md === !0 && this.lt.xl === !0, this.xl = this.gt.lg, y = this.xs === !0 && "xs" || this.sm === !0 && "sm" || this.md === !0 && "md" || this.lg === !0 && "lg" || "xl", y !== this.name && (a === !0 && (document.body.classList.remove(`screen--${this.name}`), document.body.classList.add(`screen--${y}`)), this.name = y);
    };
    let u, f = {}, g = 16;
    this.setSizes = (m) => {
      Sn.forEach((v) => {
        m[v] !== void 0 && (f[v] = m[v]);
      });
    }, this.setDebounce = (m) => {
      g = m;
    };
    const r = () => {
      const m = getComputedStyle(document.body);
      m.getPropertyValue("--q-size-sm") && Sn.forEach((v) => {
        this.sizes[v] = parseInt(m.getPropertyValue(`--q-size-${v}`), 10);
      }), this.setSizes = (v) => {
        Sn.forEach((c) => {
          v[c] && (this.sizes[c] = v[c]);
        }), this.__update(!0);
      }, this.setDebounce = (v) => {
        u !== void 0 && l.removeEventListener("resize", u, Zl), u = v > 0 ? Dn(this.__update, v) : this.__update, l.addEventListener("resize", u, Zl);
      }, this.setDebounce(g), Object.keys(f).length !== 0 ? (this.setSizes(f), f = void 0) : this.__update(), a === !0 && this.name === "xs" && document.body.classList.add("screen--xs");
    };
    dt.value === !0 ? t.push(r) : r();
  }
});
const be = on({
  isActive: !1,
  mode: !1
}, {
  __media: void 0,
  set(e) {
    be.mode = e, e === "auto" ? (be.__media === void 0 && (be.__media = window.matchMedia("(prefers-color-scheme: dark)"), be.__updateMedia = () => {
      be.set("auto");
    }, be.__media.addListener(be.__updateMedia)), e = be.__media.matches) : be.__media !== void 0 && (be.__media.removeListener(be.__updateMedia), be.__media = void 0), be.isActive = e === !0, document.body.classList.remove(`body--${e === !0 ? "light" : "dark"}`), document.body.classList.add(`body--${e === !0 ? "dark" : "light"}`);
  },
  toggle() {
    be.set(be.isActive === !1);
  },
  install({ $q: e, onSSRHydrated: t, ssrContext: n }) {
    const { dark: l } = e.config;
    if (e.dark = this, this.__installed === !0 && l === void 0)
      return;
    this.isActive = l === !0;
    const o = l !== void 0 ? l : !1;
    if (dt.value === !0) {
      const i = (u) => {
        this.__fromSSR = u;
      }, a = this.set;
      this.set = i, i(o), t.push(() => {
        this.set = a, this.set(this.__fromSSR);
      });
    } else
      this.set(o);
  }
}), Gl = {
  isoName: "en-US",
  nativeName: "English (US)",
  label: {
    clear: "Clear",
    ok: "OK",
    cancel: "Cancel",
    close: "Close",
    set: "Set",
    select: "Select",
    reset: "Reset",
    remove: "Remove",
    update: "Update",
    create: "Create",
    search: "Search",
    filter: "Filter",
    refresh: "Refresh",
    expand: (e) => e ? `Expand "${e}"` : "Expand",
    collapse: (e) => e ? `Collapse "${e}"` : "Collapse"
  },
  date: {
    days: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    daysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    firstDayOfWeek: 0,
    // 0-6, 0 - Sunday, 1 Monday, ...
    format24h: !1,
    pluralDay: "days"
  },
  table: {
    noData: "No data available",
    noResults: "No matching records found",
    loading: "Loading...",
    selectedRecords: (e) => e === 1 ? "1 record selected." : (e === 0 ? "No" : e) + " records selected.",
    recordsPerPage: "Records per page:",
    allRows: "All",
    pagination: (e, t, n) => e + "-" + t + " of " + n,
    columns: "Columns"
  },
  editor: {
    url: "URL",
    bold: "Bold",
    italic: "Italic",
    strikethrough: "Strikethrough",
    underline: "Underline",
    unorderedList: "Unordered List",
    orderedList: "Ordered List",
    subscript: "Subscript",
    superscript: "Superscript",
    hyperlink: "Hyperlink",
    toggleFullscreen: "Toggle Fullscreen",
    quote: "Quote",
    left: "Left align",
    center: "Center align",
    right: "Right align",
    justify: "Justify align",
    print: "Print",
    outdent: "Decrease indentation",
    indent: "Increase indentation",
    removeFormat: "Remove formatting",
    formatting: "Formatting",
    fontSize: "Font Size",
    align: "Align",
    hr: "Insert Horizontal Rule",
    undo: "Undo",
    redo: "Redo",
    heading1: "Heading 1",
    heading2: "Heading 2",
    heading3: "Heading 3",
    heading4: "Heading 4",
    heading5: "Heading 5",
    heading6: "Heading 6",
    paragraph: "Paragraph",
    code: "Code",
    size1: "Very small",
    size2: "A bit small",
    size3: "Normal",
    size4: "Medium-large",
    size5: "Big",
    size6: "Very big",
    size7: "Maximum",
    defaultFont: "Default Font",
    viewSource: "View Source"
  },
  tree: {
    noNodes: "No nodes available",
    noResults: "No matching nodes found"
  }
};
function Jl() {
  const e = Array.isArray(navigator.languages) === !0 && navigator.languages.length !== 0 ? navigator.languages[0] : navigator.language;
  if (typeof e == "string")
    return e.split(/[-_]/).map((t, n) => n === 0 ? t.toLowerCase() : n > 1 || t.length < 4 ? t.toUpperCase() : t[0].toUpperCase() + t.slice(1).toLowerCase()).join("-");
}
const $e = on({
  __langPack: {}
}, {
  getLocale: Jl,
  set(e = Gl, t) {
    const n = {
      ...e,
      rtl: e.rtl === !0,
      getLocale: Jl
    };
    {
      if (n.set = $e.set, $e.__langConfig === void 0 || $e.__langConfig.noHtmlAttrs !== !0) {
        const l = document.documentElement;
        l.setAttribute("dir", n.rtl === !0 ? "rtl" : "ltr"), l.setAttribute("lang", n.isoName);
      }
      Object.assign($e.__langPack, n), $e.props = n, $e.isoName = n.isoName, $e.nativeName = n.nativeName;
    }
  },
  install({ $q: e, lang: t, ssrContext: n }) {
    e.lang = $e.__langPack, $e.__langConfig = e.config.lang, this.__installed === !0 ? t !== void 0 && this.set(t) : this.set(t || Gl);
  }
}), Br = {
  name: "material-icons",
  type: {
    positive: "check_circle",
    negative: "warning",
    info: "info",
    warning: "priority_high"
  },
  arrow: {
    up: "arrow_upward",
    right: "arrow_forward",
    down: "arrow_downward",
    left: "arrow_back",
    dropdown: "arrow_drop_down"
  },
  chevron: {
    left: "chevron_left",
    right: "chevron_right"
  },
  colorPicker: {
    spectrum: "gradient",
    tune: "tune",
    palette: "style"
  },
  pullToRefresh: {
    icon: "refresh"
  },
  carousel: {
    left: "chevron_left",
    right: "chevron_right",
    up: "keyboard_arrow_up",
    down: "keyboard_arrow_down",
    navigationIcon: "lens"
  },
  chip: {
    remove: "cancel",
    selected: "check"
  },
  datetime: {
    arrowLeft: "chevron_left",
    arrowRight: "chevron_right",
    now: "access_time",
    today: "today"
  },
  editor: {
    bold: "format_bold",
    italic: "format_italic",
    strikethrough: "strikethrough_s",
    underline: "format_underlined",
    unorderedList: "format_list_bulleted",
    orderedList: "format_list_numbered",
    subscript: "vertical_align_bottom",
    superscript: "vertical_align_top",
    hyperlink: "link",
    toggleFullscreen: "fullscreen",
    quote: "format_quote",
    left: "format_align_left",
    center: "format_align_center",
    right: "format_align_right",
    justify: "format_align_justify",
    print: "print",
    outdent: "format_indent_decrease",
    indent: "format_indent_increase",
    removeFormat: "format_clear",
    formatting: "text_format",
    fontSize: "format_size",
    align: "format_align_left",
    hr: "remove",
    undo: "undo",
    redo: "redo",
    heading: "format_size",
    code: "code",
    size: "format_size",
    font: "font_download",
    viewSource: "code"
  },
  expansionItem: {
    icon: "keyboard_arrow_down",
    denseIcon: "arrow_drop_down"
  },
  fab: {
    icon: "add",
    activeIcon: "close"
  },
  field: {
    clear: "cancel",
    error: "error"
  },
  pagination: {
    first: "first_page",
    prev: "keyboard_arrow_left",
    next: "keyboard_arrow_right",
    last: "last_page"
  },
  rating: {
    icon: "grade"
  },
  stepper: {
    done: "check",
    active: "edit",
    error: "warning"
  },
  tabs: {
    left: "chevron_left",
    right: "chevron_right",
    up: "keyboard_arrow_up",
    down: "keyboard_arrow_down"
  },
  table: {
    arrowUp: "arrow_upward",
    warning: "warning",
    firstPage: "first_page",
    prevPage: "chevron_left",
    nextPage: "chevron_right",
    lastPage: "last_page"
  },
  tree: {
    icon: "play_arrow"
  },
  uploader: {
    done: "done",
    clear: "clear",
    add: "add_box",
    upload: "cloud_upload",
    removeQueue: "clear_all",
    removeUploaded: "done_all"
  }
}, eo = on({
  iconMapFn: null,
  __icons: {}
}, {
  set(e, t) {
    const n = { ...e, rtl: e.rtl === !0 };
    n.set = eo.set, Object.assign(eo.__icons, n);
  },
  install({ $q: e, iconSet: t, ssrContext: n }) {
    e.config.iconMapFn !== void 0 && (this.iconMapFn = e.config.iconMapFn), e.iconSet = this.__icons, bt(e, "iconMapFn", () => this.iconMapFn, (l) => {
      this.iconMapFn = l;
    }), this.__installed === !0 ? t !== void 0 && this.set(t) : this.set(t || Br);
  }
});
function Mr(e, t) {
  const n = xi(e);
  n.config.globalProperties = t.config.globalProperties;
  const { reload: l, ...o } = t._context;
  return Object.assign(n._context, o), n;
}
function Jo(e, t) {
  for (const n in t)
    n !== "spinner" && Object(t[n]) === t[n] ? (e[n] = Object(e[n]) !== e[n] ? {} : { ...e[n] }, Jo(e[n], t[n])) : e[n] = t[n];
}
function Tr(e, t, n) {
  return (l) => {
    let o, i;
    const a = t === !0 && l.component !== void 0;
    if (a === !0) {
      const { component: w, componentProps: p } = l;
      o = typeof w == "string" ? n.component(w) : w, i = p || {};
    } else {
      const { class: w, style: p, ...$ } = l;
      o = e, i = $, w !== void 0 && ($.cardClass = w), p !== void 0 && ($.cardStyle = p);
    }
    let u, f = !1;
    const g = N(null), r = $o(!1, "dialog"), m = (w) => {
      if (g.value !== null && g.value[w] !== void 0) {
        g.value[w]();
        return;
      }
      const p = u.$.subTree;
      if (p && p.component) {
        if (p.component.proxy && p.component.proxy[w]) {
          p.component.proxy[w]();
          return;
        }
        if (p.component.subTree && p.component.subTree.component && p.component.subTree.component.proxy && p.component.subTree.component.proxy[w]) {
          p.component.subTree.component.proxy[w]();
          return;
        }
      }
      console.error("[Quasar] Incorrectly defined Dialog component");
    }, v = [], c = [], y = {
      onOk(w) {
        return v.push(w), y;
      },
      onCancel(w) {
        return c.push(w), y;
      },
      onDismiss(w) {
        return v.push(w), c.push(w), y;
      },
      hide() {
        return m("hide"), y;
      },
      update(w) {
        if (u !== null) {
          if (a === !0)
            Object.assign(i, w);
          else {
            const { class: p, style: $, ...C } = w;
            p !== void 0 && (C.cardClass = p), $ !== void 0 && (C.cardStyle = $), Jo(i, C);
          }
          u.$forceUpdate();
        }
        return y;
      }
    }, _ = (w) => {
      f = !0, v.forEach((p) => {
        p(w);
      });
    }, h = () => {
      T.unmount(r), Oo(r), T = null, u = null, f !== !0 && c.forEach((w) => {
        w();
      });
    };
    let T = Mr({
      name: "QGlobalDialog",
      setup: () => () => b(o, {
        ...i,
        ref: g,
        onOk: _,
        onHide: h,
        onVnodeMounted(...w) {
          typeof i.onVnodeMounted == "function" && i.onVnodeMounted(...w), se(() => m("show"));
        }
      })
    }, n);
    return u = T.mount(r), y;
  };
}
const Lr = {
  install({ $q: e, parentApp: t }) {
    e.dialog = Tr(Vr, !0, t), this.__installed !== !0 && (this.create = e.dialog);
  }
}, jr = (e) => Lr.create({
  component: hr,
  componentProps: e
}), $r = Symbol(), Or = ee({
  name: "QList",
  props: {
    ..._e,
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
    const n = J(), l = Ce(e, n.proxy.$q), o = d(
      () => "q-list" + (e.bordered === !0 ? " q-list--bordered" : "") + (e.dense === !0 ? " q-list--dense" : "") + (e.separator === !0 ? " q-list--separator" : "") + (l.value === !0 ? " q-list--dark" : "") + (e.padding === !0 ? " q-list--padding" : "")
    );
    return () => b(e.tag, { class: o.value }, ve(t.default));
  }
});
function to(e) {
  if (e === !1)
    return 0;
  if (e === !0 || e === void 0)
    return 1;
  const t = parseInt(e, 10);
  return isNaN(t) ? 0 : t;
}
const Rr = uo(
  {
    name: "close-popup",
    beforeMount(e, { value: t }) {
      const n = {
        depth: to(t),
        handler(l) {
          n.depth !== 0 && setTimeout(() => {
            const o = ma(e);
            o !== void 0 && ga(o, l, n.depth);
          });
        },
        handlerKey(l) {
          Re(l, 13) === !0 && n.handler(l);
        }
      };
      e.__qclosepopup = n, e.addEventListener("click", n.handler), e.addEventListener("keyup", n.handlerKey);
    },
    updated(e, { value: t, oldValue: n }) {
      t !== n && (e.__qclosepopup.depth = to(t));
    },
    beforeUnmount(e) {
      const t = e.__qclosepopup;
      e.removeEventListener("click", t.handler), e.removeEventListener("keyup", t.handlerKey), delete e.__qclosepopup;
    }
  }
), Ar = /* @__PURE__ */ vt({
  __name: "AppListItem",
  props: {
    componentProps: {},
    visible: { type: Boolean },
    icon: {},
    label: {},
    color: {},
    clickFn: { type: Function },
    items: {}
  },
  setup(e) {
    const t = e, n = d(() => `text-${t.color}`), l = () => {
      t.clickFn && t.clickFn();
    }, o = d(() => (t.items || []).filter(
      (i) => typeof i.visible == "boolean" ? i.visible : !0
    ));
    return (i, a) => An((le(), pe(Kt, Pn(i.componentProps, {
      clickable: "",
      onClick: l
    }), {
      default: ae(() => [
        i.icon ? (le(), pe(We, {
          key: 0,
          side: ""
        }, {
          default: ae(() => [
            ie(ke, {
              size: "16px",
              name: i.icon,
              color: i.color
            }, null, 8, ["name", "color"])
          ]),
          _: 1
        })) : Te("", !0),
        i.label ? (le(), pe(We, {
          key: 1,
          class: Dt(n.value)
        }, {
          default: ae(() => [
            jt(Cn(i.label), 1)
          ]),
          _: 1
        }, 8, ["class"])) : Te("", !0),
        o.value.length ? (le(), pe(We, {
          key: 2,
          side: ""
        }, {
          default: ae(() => [
            ie(ke, {
              size: "16px",
              name: "mdi-chevron-right"
            })
          ]),
          _: 1
        })) : Te("", !0),
        o.value.length ? (le(), pe(jo, {
          key: 3,
          square: "",
          anchor: "top end",
          self: "top start"
        }, {
          default: ae(() => [
            ie(Fr, { items: o.value }, null, 8, ["items"])
          ]),
          _: 1
        })) : Te("", !0)
      ]),
      _: 1
    }, 16)), [
      [Rr, !o.value.length]
    ]);
  }
}), Fr = /* @__PURE__ */ vt({
  __name: "AppList",
  props: {
    items: {}
  },
  setup(e) {
    const t = e, n = d(() => t.items.filter(
      (l) => typeof l.visible == "boolean" ? l.visible : !0
    ));
    return (l, o) => (le(), pe(Or, {
      separator: "",
      dense: "",
      style: { "min-width": "150px" }
    }, {
      default: ae(() => [
        (le(!0), Oe(Ht, null, _n(n.value, (i) => (le(), pe(Ar, ao(ro(i)), null, 16))), 256))
      ]),
      _: 1
    }));
  }
});
export {
  Ir as AppForm,
  Fr as AppList,
  Ar as AppListItem,
  hr as AppModal,
  Dr as AppSelect,
  $r as appModalInjectionKey,
  jr as useAppModal,
  Ci as useForm
};
