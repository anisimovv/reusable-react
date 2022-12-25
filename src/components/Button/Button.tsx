import clsx from "clsx";
import { styles } from "./styles";

type ColorTypes = "primary" | "secondary";
type SizeTypes = "small" | "medium" | "large";
type VariantTypes = "plain" | "outlined" | "solid";

interface ButtonProps {
  label: string;
  variant?: VariantTypes;
  color?: ColorTypes;
  size?: SizeTypes;
  classes?: string;
  style?: React.CSSProperties;
  href?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
}

export const Button = ({
  label,
  variant = "plain",
  color = "primary",
  size = "medium",
  disabled = false,
  fullWidth = false,
  classes,
  href,
  startIcon,
  endIcon,
  ...props
}: ButtonProps) => {
  /**
   * Render button as a if href prop provided
   */
  const Component = typeof href === "undefined" ? "button" : "a";

  return (
    <Component
      className={clsx(
        styles.base,
        styles.color[color][variant],
        styles.size[size],
        disabled && styles.disabled,
        fullWidth && styles.fullWidth,
        classes
      )}
      href={href ?? undefined}
      {...props}
    >
      {startIcon && (
        <span className={clsx(styles.icon.base, styles.icon.start)}>
          {startIcon}
        </span>
      )}
      {label}
      {endIcon && (
        <span className={clsx(styles.icon.base, styles.icon.end)}>
          {endIcon}
        </span>
      )}
    </Component>
  );
};
