import {
  SystemStyleObject,
  SystemStyleFunction,
  getColor,
} from "@chakra-ui/theme-tools";

const baseStyle: SystemStyleObject = {
  fontWeight: 500,
  borderRadius: "lg",
  _disabled: {
    cursor: "not-allowed",
    boxShadow: "none",
  },
  transition: "all 0.2s ease",
  _hover: {
    transform: "translateY(-1px)",
    boxShadow: "0 4px 15px -5px var(--chakra-colors-primary-400)",
  },
  _active: {
    transform: "translateY(0)",
  },
};

const variantOutline: SystemStyleFunction = (props) => {
  const { colorScheme: c, theme } = props;

  return {
    borderColor: `${c}.500`,
    color: `${c}.200`,
    _hover: {
      bg: `${c}.800`,
      borderColor: `${c}.400`,
    },
    _active: {
      bg: `${c}.700`,
    },
    _focus: {
      boxShadow: `0 0 0 4px ${getColor(theme, `${c}.300`)}`,
    },
  };
};

const variantSolid: SystemStyleFunction = (props) => {
  const { colorScheme: c, theme } = props;

  return {
    bg: `${c}.500`,
    color: "white",
    _hover: {
      bg: `${c}.400`,
      _disabled: {
        bg: `${c}.200`,
      },
    },
    _active: {
      bg: `${c}.500`,
    },
    _focus: {
      boxShadow: `0 0 0 4px ${getColor(theme, `${c}.300`)}`,
    },
  };
};

const variantGhost: SystemStyleFunction = (props) => {
  const { colorScheme: c, theme } = props;

  return {
    color: `${c}.200`,
    _hover: {
      bg: `${c}.800`,
      _disabled: {
        bg: `${c}.25`,
      },
    },
    _active: {
      bg: `${c}.700`,
    },
    _focus: {
      boxShadow: `0 0 0 4px ${getColor(theme, `${c}.300`)}`,
    },
  };
};

const variants = {
  outline: variantOutline,
  solid: variantSolid,
  ghost: variantGhost,
};

const sizes: Record<string, SystemStyleObject> = {
  sm: {
    fontSize: "sm",
  },
  md: {
    fontSize: "sm",
  },
  lg: {
    h: "44px",
    fontSize: "sm",
    px: 2.5,
  },
  xl: {
    h: "48px",
    fontSize: "md",
    px: 3,
  },
  "2xl": {
    fontSize: "lg",
  },
};

const styles = {
  baseStyle,
  variants,
  sizes,
};

export default styles;