const Button = ({
  variant = "default",
  href,
  children,
  className = "",
  onClick,
  target,
  rel,
  ...props
}) => {
  const getButtonStyles = () => {
    const baseStyles = {
      padding: "10px 20px",
      borderRadius: "8px",
      textDecoration: "none",
      fontWeight: "bold",
      border: "none",
      display: "inline-flex",
      alignItems: "center",
      cursor: "pointer",
      transition: "all 0.3s ease",
      fontSize: "1rem"
    };

    const variantStyles = {
      linkedin: {
        backgroundColor: "#0077B5",
        color: "#ffffff",
        ":hover": {
          backgroundColor: "#005582"
        }
      },
      github: {
        backgroundColor: "#333",
        color: "#ffffff",
        ":hover": {
          backgroundColor: "#555"
        }
      },
      resume: {
        backgroundColor: "#062a4f",
        color: "#ffffff",
        ":hover": {
          backgroundColor: "#044078"
        }
      },
      "project-github": {
        backgroundColor: "rgba(51, 51, 51, 0.8)",
        color: "#fff",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        padding: "8px 16px",
        fontSize: "0.9rem",
        fontWeight: "500",
        gap: "6px",
        ":hover": {
          backgroundColor: "#333",
          transform: "translateY(-2px)",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)"
        }
      },
      "project-live": {
        backgroundColor: "rgba(252, 130, 0, 0.1)",
        color: "#fc8200",
        border: "1px solid rgba(252, 130, 0, 0.3)",
        padding: "8px 16px",
        fontSize: "0.9rem",
        fontWeight: "500",
        gap: "6px",
        ":hover": {
          backgroundColor: "rgba(252, 130, 0, 0.2)",
          transform: "translateY(-2px)",
          boxShadow: "0 4px 12px rgba(252, 130, 0, 0.2)"
        }
      }
    };

    return {
      ...baseStyles,
      ...variantStyles[variant]
    };
  };

  const styles = getButtonStyles();
  const combinedClassName = `button-${variant} ${className}`.trim();

  const handleMouseEnter = (e) => {
    if (styles[":hover"]) {
      Object.assign(e.target.style, styles[":hover"]);
    }
  };

  const handleMouseLeave = (e) => {
    const baseStyles = getButtonStyles();
    Object.assign(e.target.style, {
      backgroundColor: baseStyles.backgroundColor,
      transform: baseStyles.transform || "none",
      boxShadow: baseStyles.boxShadow || "none"
    });
  };

  const commonProps = {
    style: styles,
    className: combinedClassName,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    ...props
  };

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        {...commonProps}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      {...commonProps}
    >
      {children}
    </button>
  );
};

export default Button;