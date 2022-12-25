import classes from "./button.module.css";

export const styles = {
  base: classes.button,
  fullWidth: classes["button--fullwidth"],
  color: {
    primary: {
      plain: classes["button--primary-plain"],
      outlined: classes["button--primary-outlined"],
      solid: classes["button--primary-solid"],
    },
    secondary: {
      plain: classes["button--secondary-plain"],
      outlined: classes["button--secondary-outlined"],
      solid: classes["button--secondary-solid"],
    },
  },
  disabled: classes["button--disabled"],
  size: {
    small: classes["button--small"],
    medium: classes["button--medium"],
    large: classes["button--large"],
  },
  icon: {
    base: classes.buttonIcon,
    start: classes["buttonIcon--start"],
    end: classes["buttonIcon--end"],
  },
};
