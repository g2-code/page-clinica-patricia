/* @ds-bundle: {"format":3,"namespace":"G2CodeDesignSystem_8e4259","components":[{"name":"Accordion","sourcePath":"components/core/Accordion.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"}],"sourceHashes":{"components/core/Accordion.jsx":"44eeebef055f","components/core/Badge.jsx":"6ea7874b7fa2","components/core/Button.jsx":"3b44431d2b27","components/core/Card.jsx":"9ca5c196064b","components/core/Input.jsx":"3f5f323da418"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.G2CodeDesignSystem_8e4259 = window.G2CodeDesignSystem_8e4259 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Accordion.jsx
try { (() => {
/**
 * G2Code Accordion — FAQ-style disclosure list.
 * items: [{ q, a }]. Single-open behaviour. Plus icon rotates to a cross when open.
 */
function Accordion({
  items = [],
  defaultOpen = -1,
  style = {}
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--divider)',
      ...style
    }
  }, items.map((item, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: '1px solid var(--divider)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => setOpen(isOpen ? -1 : i),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '18px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        padding: 'clamp(20px,4vw,26px) 4px',
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        color: isOpen ? '#fff' : 'var(--text-strong)',
        fontSize: 'clamp(16px,4vw,20px)',
        lineHeight: 1.3,
        transition: 'color var(--dur-base)'
      }
    }, item.q, /*#__PURE__*/React.createElement("span", {
      style: {
        flexShrink: 0,
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        display: 'grid',
        placeItems: 'center',
        border: isOpen ? '1px solid transparent' : '1px solid var(--border-strong)',
        background: isOpen ? 'var(--grad-brand)' : 'transparent',
        color: isOpen ? '#fff' : 'var(--text-muted)',
        transition: 'all var(--dur-base) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      width: "16",
      height: "16",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "round",
      style: {
        transform: isOpen ? 'rotate(45deg)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 5v14"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5 12h14"
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'hidden',
        maxHeight: isOpen ? '320px' : '0',
        transition: 'max-height var(--dur-slow) var(--ease-inout)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 4px clamp(22px,4vw,28px)',
        color: 'var(--text-muted)',
        fontSize: 'clamp(14px,3.7vw,16px)',
        lineHeight: 1.65,
        maxWidth: '64ch'
      }
    }, item.a)));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * G2Code Badge / Eyebrow — small mono-caps label.
 * tone: accent (violet), neutral, success. Optional leading tick line (eyebrow style).
 */
function Badge({
  children,
  tone = 'accent',
  eyebrow = false,
  style = {},
  ...rest
}) {
  const tones = {
    accent: {
      color: 'var(--violet-200)',
      bg: 'var(--accent-soft)',
      border: 'var(--border-accent)'
    },
    neutral: {
      color: 'var(--text-muted)',
      bg: 'rgba(255,255,255,0.03)',
      border: 'var(--border)'
    },
    success: {
      color: 'var(--success)',
      bg: 'var(--success-dim)',
      border: 'rgba(47,213,138,0.3)'
    }
  };
  const t = tones[tone];
  if (eyebrow) {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '9px',
        fontFamily: 'var(--font-mono)',
        fontSize: '12px',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("span", {
      style: {
        width: '22px',
        height: '1px',
        background: 'var(--accent)',
        boxShadow: '0 0 8px var(--accent)'
      }
    }), children);
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: t.color,
      background: t.bg,
      border: `1px solid ${t.border}`,
      borderRadius: 'var(--radius-pill)',
      padding: '5px 11px',
      lineHeight: 1,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * G2Code Button — pill-shaped, brand-gradient primary with violet glow.
 * Variants: primary (gradient), secondary (outline), ghost (text).
 * Sizes: sm, md, lg.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconRight = null,
  iconLeft = null,
  disabled = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '9px 16px',
      fontSize: '13.5px',
      gap: '7px'
    },
    md: {
      padding: '14px 24px',
      fontSize: '15px',
      gap: '9px'
    },
    lg: {
      padding: '17px 30px',
      fontSize: '16px',
      gap: '10px'
    }
  };
  const variants = {
    primary: {
      color: '#fff',
      background: 'var(--grad-brand)',
      border: '1px solid transparent',
      boxShadow: 'var(--glow-violet)'
    },
    secondary: {
      color: 'var(--text-strong)',
      background: 'rgba(255,255,255,0.02)',
      border: '1px solid var(--border-strong)',
      boxShadow: 'none'
    },
    ghost: {
      color: 'var(--text-body)',
      background: 'transparent',
      border: '1px solid transparent',
      boxShadow: 'none'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    lineHeight: 1,
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'transform var(--dur-base) var(--ease-spring), filter var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
    whiteSpace: 'nowrap',
    ...sizes[size],
    ...variants[variant],
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: base,
    onMouseEnter: e => {
      if (disabled) return;
      if (variant === 'primary') {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.filter = 'brightness(1.08)';
      } else {
        e.currentTarget.style.borderColor = 'var(--border-accent)';
        e.currentTarget.style.background = 'var(--surface-hover)';
      }
    },
    onMouseLeave: e => {
      if (disabled) return;
      e.currentTarget.style.transform = 'none';
      e.currentTarget.style.filter = 'none';
      e.currentTarget.style.borderColor = variants[variant].border.includes('transparent') ? 'transparent' : 'var(--border-strong)';
      e.currentTarget.style.background = variants[variant].background;
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      marginRight: sizes[size].gap
    }
  }, iconLeft), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      marginLeft: sizes[size].gap
    }
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * G2Code Card — dark surface panel with subtle border and optional violet hover glow.
 * variant: default, raised, glow (always-on glow). hover enables lift + accent border.
 */
function Card({
  children,
  variant = 'default',
  hover = false,
  padding = 'lg',
  style = {},
  ...rest
}) {
  const pads = {
    sm: '18px',
    md: '24px',
    lg: 'clamp(24px, 4vw, 34px)'
  };
  const variants = {
    default: {
      background: 'linear-gradient(180deg, var(--surface-card), rgba(18,16,28,0.4))',
      boxShadow: 'var(--shadow-md)'
    },
    raised: {
      background: 'var(--surface-raised)',
      boxShadow: 'var(--shadow-lg)'
    },
    glow: {
      background: 'var(--surface-card)',
      boxShadow: 'var(--glow-violet)'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-xl)',
      padding: pads[padding],
      transition: 'transform var(--dur-base) var(--ease-out), border-color var(--dur-base)',
      ...variants[variant],
      ...style
    },
    onMouseEnter: e => {
      if (hover) {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.borderColor = 'var(--border-accent)';
      }
    },
    onMouseLeave: e => {
      if (hover) {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.borderColor = 'var(--border)';
      }
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * G2Code Input — dark field with violet focus ring. Supports label + optional icon.
 */
function Input({
  label,
  icon = null,
  type = 'text',
  style = {},
  id,
  ...rest
}) {
  const inputId = id || (label ? `in-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '13px',
      fontWeight: 500,
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      background: 'var(--surface-inset)',
      border: `1px solid ${focused ? 'var(--border-accent)' : 'var(--border)'}`,
      borderRadius: 'var(--radius-md)',
      padding: '0 14px',
      boxShadow: focused ? 'var(--focus-ring)' : 'none',
      transition: 'border-color var(--dur-base), box-shadow var(--dur-base)'
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--text-faint)',
      flexShrink: 0
    }
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      flex: 1,
      background: 'transparent',
      border: 'none',
      outline: 'none',
      color: 'var(--text-strong)',
      fontFamily: 'var(--font-sans)',
      fontSize: '15px',
      padding: '13px 0'
    }
  }, rest))));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

})();
