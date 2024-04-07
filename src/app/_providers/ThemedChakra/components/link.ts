import { ComponentStyleConfig } from "@chakra-ui/theme"

export const Link: ComponentStyleConfig = {
  // Base style for all links
  baseStyle: {
    fontWeight: "medium", // Standard weight for readability
    _hover: {
      textDecoration: "underline", // Underline on hover for clear interactivity
    },
    _focus: {
      boxShadow: "outline", // Ensure accessibility with a focus outline
    },
  },
  // Sizes for the link
  sizes: {
    sm: {
      fontSize: "sm", // Small size for subtler links
      padding: "2px", // Minimal padding for tight spaces
    },
    md: {
      fontSize: "md", // Medium size for general use
      padding: "4px", // Moderate padding for balance
    },
    lg: {
      fontSize: "lg", // Large size for prominence
      padding: "6px", // Increased padding for larger clickable area
    },
  },
  // Variants for the link
  variants: {
    // Standard link style for general use
    standard: {
      color: "theme.blue", // Vibrant blue for visibility
      _hover: {
        color: "theme.blueAlt", // Slightly different blue on hover for visual feedback
      },
    },
    // Subtle link style for less emphasis
    subtle: {
      color: "greys.grey05", // Softer color for background integration
      _hover: {
        color: "greys.grey06", // Darker grey on hover for distinction
      },
    },
    // Emphasized link for calls to action or important links
    emphasized: {
      color: "theme.orange", // Stand-out color for emphasis
      fontWeight: "bold", // Bold weight for extra prominence
      _hover: {
        color: "theme.yellow", // Bright color on hover for attraction
      },
    },
  },
  // Default props for the link
  defaultProps: {
    size: "md", // Default size for links
    variant: "standard", // Default variant for links
  },
}
