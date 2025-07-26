import { createLocalStorageManager, extendTheme, theme, ThemeConfig } from "@chakra-ui/react";

import Accordion from "./accordion";
import Button from "./button";
import Heading from "./heading";
import Input from "./input";
import Menu from "./menu";
import Modal from "./modal";
import Popover from "./popover";
import Spinner from "./spinner";
import Tabs from "./tabs";
import Tooltip from "./tooltip";

import shadows from "./shadows";

const config: ThemeConfig = {
  initialColorMode: 'dark', // Changed to dark mode as default for NFT theme
  useSystemColorMode: false,
}

export const ThemeStorageManager = createLocalStorageManager("andromeda-marketplace-theme");

export default extendTheme({
  config,
  styles: {
    global: (props: any) => ({
      "*": {
        scrollbarWidth: "6px",
        scrollbarColor: "#9E77ED transparent", // Updated to primary.500
      },
      "*::-webkit-scrollbar": {
        width: "6px",
      },
      "*::-webkit-scrollbar-track": {
        bg: "transparent",
      },
      "*::-webkit-scrollbar-thumb": {
        bg: "#9E77ED", // Updated to primary.500
        borderRadius: "1.5rem",
      },
      body: {
        bg: "linear-gradient(180deg, #14001f 0%, #2d004f 100%)",
        color: "white",
        minHeight: "100vh",
        backgroundAttachment: "fixed",
        "&::before": {
          content: '""',
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 
            "radial-gradient(circle at 10% 20%, rgba(123, 31, 162, 0.15) 0%, transparent 20%)," +
            "radial-gradient(circle at 90% 80%, rgba(0, 150, 136, 0.15) 0%, transparent 20%)",
          pointerEvents: "none",
          zIndex: -1,
        },
      },
    }),
  },
  shadows,
  fonts: {
    heading:
      "Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
    body: "Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
    mono: "Menlo, monospace",
  },
  components: {
    Accordion,
    Button: {
      ...Button,
      baseStyle: {
        ...Button.baseStyle,
        fontWeight: "bold",
        borderRadius: "md",
        _hover: {
          transform: "translateY(-1px)",
          boxShadow: "0 4px 15px -5px var(--chakra-colors-primary-400)",
        },
        _active: {
          transform: "translateY(0)",
        },
      },
    },
    Heading: {
      ...Heading,
      baseStyle: {
        ...Heading.baseStyle,
        textShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
      },
    },
    Input,
    Modal: {
      ...Modal,
      baseStyle: {
        ...Modal.baseStyle,
        dialog: {
          bg: "rgba(26, 0, 51, 0.95)",
          backdropFilter: "blur(10px)",
          border: "1px solid",
          borderColor: "primary.700",
        },
      },
    },
    Popover,
    Spinner,
    Tabs,
    Tooltip,
  },
  colors: {
    // Preserving all existing color scales but adjusting some values for dark mode
    primary: {
      25: "#FCFAFF",
      50: "#F9F5FF",
      100: "#F4EBFF",
      200: "#E9D7FE",
      300: "#D6BBFB",
      400: "#B692F6",
      500: "#9E77ED",
      600: "#7F56D9",
      700: "#6941C6",
      800: "#53389E",
      900: "#42307D",
    },
    gray: {
      25: "#FCFCFD",
      50: "#F9FAFB",
      100: "#F2F4F7",
      200: "#EAECF0",
      300: "#D0D5DD",
      400: "#98A2B3",
      500: "#667085",
      600: "#475467",
      700: "#344054",
      800: "#1D2939",
      900: "#101828",
    },
    error: {
      25: "#FFFBFA",
      50: "#FEF3F2",
      100: "#FEE4E2",
      200: "#FECDCA",
      300: "#FDA29B",
      400: "#F97066",
      500: "#F04438",
      600: "#D92D20",
      700: "#B42318",
      800: "#912018",
      900: "#7A271A",
    },
    warning: {
      25: "#FFFCF5",
      50: "#FFFAEB",
      100: "#FEF0C7",
      200: "#FEDF89",
      300: "#FEC84B",
      400: "#FDB022",
      500: "#F79009",
      600: "#DC6803",
      700: "#B54708",
      800: "#93370D",
      900: "#7A2E0E",
    },
    success: {
      25: "#F6FEF9",
      50: "#ECFDF3",
      100: "#D1FADF",
      200: "#A6F4C5",
      300: "#6CE9A6",
      400: "#32D583",
      500: "#12B76A",
      600: "#039855",
      700: "#027A48",
      800: "#05603A",
      900: "#054F31",
    },
    classifier: {
      25: "#F6FEFC",
      50: "#F0FDF9",
      100: "#CCFBEF",
      200: "#99F6E0",
      300: "#5FE9D0",
      400: "#2ED3B7",
      500: "#15B79E",
      600: "#0E9384",
      700: "#107569",
      800: "#125D56",
      900: "#134E48",
    },
    ado: {
      25: "#F5FBFF",
      50: "#F0F9FF",
      100: "#E0F2FE",
      200: "#B9E6FE",
      300: "#7CD4FD",
      400: "#36BFFA",
      500: "#0BA5EC",
      600: "#0086C9",
      700: "#026AA2",
      800: "#065986",
      900: "#0B4A6F",
    },
    baseADO: {
      25: "#F5FBFF",
      50: "#F0F9FF",
      100: "#E0F2FE",
      200: "#B9E6FE",
      300: "#7CD4FD",
      400: "#36BFFA",
      500: "#0BA5EC",
      600: "#0086C9",
      700: "#026AA2",
      800: "#065986",
      900: "#0B4A6F",
    },
    primitive: {
      25: "#E4ECFC",
      100: "#D3D9FA",
      50: "#C4C2F7",
      200: "#C1B2F4",
      300: "#C2A2F1",
      400: "#C892ED",
      500: "#D283E8",
      600: "#CC71CD",
      700: "#B160A0",
      800: "#944F77",
      900: "#783E53",
    },
    module: {
      25: "#F5F8FF",
      50: "#EFF4FF",
      100: "#D1E0FF",
      200: "#B2CCFF",
      300: "#84ADFF",
      400: "#528BFF",
      500: "#2970FF",
      600: "#155EEF",
      700: "#004EEB",
      800: "#0040C1",
      900: "#00359E",
    },
    system: theme.colors.gray,
    // Adding new NFT-inspired colors
    nft: {
      darkBg: "#14001f",
      purpleBg: "#2d004f",
      accent: "#9E77ED",
      highlight: "#B692F6",
    }
  },
  textStyles: {
    h1: {
      fontWeight: 700,
      color: "white", // Updated for dark mode
      fontSize: "xl",
      mb: 2,
      letterSpacing: 0.5,
    },
    bold: {
      color: "gray.200", // Updated for dark mode
      fontWeight: 700,
    },
    light: {
      color: "gray.400", // Updated for dark mode
      fontSize: "sm",
    },
  },
  layerStyles: {
    card: {
      bg: "rgba(26, 0, 51, 0.7)",
      border: "1px solid",
      borderColor: "primary.700",
      borderRadius: "lg",
      p: 4,
      backdropFilter: "blur(10px)",
      _hover: {
        borderColor: "primary.500",
        transform: "translateY(-2px)",
        boxShadow: "0 4px 20px -5px var(--chakra-colors-primary-500)",
      },
    },
    glass: {
      bg: "rgba(26, 0, 51, 0.5)",
      backdropFilter: "blur(10px)",
      border: "1px solid",
      borderColor: "primary.800",
    },
  },
});