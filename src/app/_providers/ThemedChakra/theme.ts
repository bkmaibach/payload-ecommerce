import { extendTheme } from "@chakra-ui/react"
import { fonts } from "./foundations/fonts"
import { Button } from "./components/button"
import { colors } from "./foundations/colors"
import { Link } from "./components/link"
import { Input } from "./components/input"

const styles = {
  global: {
    body: {
      color: "text.primary", // Set your desired default body font color
    },
  },
}
// const components = { Button, FormLabel, Input, Link, Text, Table }
const components = { Button, Link, Input }
// const overrides = { styles, colors, fonts, fontSizes, sizes, radii, space, shadows, components }
const overrides = { styles, fonts, colors, components }

export const theme = extendTheme(overrides)
