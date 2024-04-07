import { ComponentStyleConfig } from "@chakra-ui/react"

export const Button: ComponentStyleConfig = {
  // Base style for all buttons
  baseStyle: {
    fontWeight: "bold", // Keeps text bold for emphasis
    textTransform: "uppercase", // Text in uppercase for a uniform look
    borderRadius: "md", // Moderate border radius for a friendly look
    _focus: {
      boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.6)", // Focus state with a blue ring for accessibility
    },
    _hover: {
      textDecoration: "none", // Removes text decoration on hover for cleanliness
    },
  },
  // Sizes for the button
  sizes: {
    sm: {
      fontSize: "sm",
      padding: "4px 12px",
    },
    md: {
      fontSize: "md",
      padding: "6px 16px",
    },
    lg: {
      fontSize: "lg",
      padding: "8px 24px",
    },
  },
  // Variants for the button
  variants: {
    solid: {
      bg: "theme.blue", // Use the vibrant blue for solid buttons
      color: "greys.white",
      _hover: {
        bg: "theme.blueAlt", // Slightly different blue on hover
      },
    },
    outline: {
      border: "2px solid",
      borderColor: "theme.blue",
      color: "theme.blue",
      _hover: {
        bg: "theme.blueLight", // Light blue background on hover for outline buttons
      },
    },
    ghost: {
      color: "theme.blue",
      _hover: {
        bg: "theme.blueLight", // Light blue background on hover for ghost buttons
      },
    },
  },
  // Default props for the button
  defaultProps: {
    size: "md", // Default size for buttons
    variant: "solid", // Default variant for buttons
  },
}
