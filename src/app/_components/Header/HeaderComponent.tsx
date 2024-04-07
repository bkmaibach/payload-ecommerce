"use client"

import { Box, Button, Container, Flex, useTheme } from "@chakra-ui/react"
import React from "react"
import { Header } from "../../../payload/payload-types"
import Image from "next/image"
import { Link } from "@chakra-ui/next-js"

interface IHeaderComponentProps {
  header: Header
}

export const HeaderComponent = ({ header }: IHeaderComponentProps) => {
  const theme = useTheme()

  return (
    <Box w="full" as="nav" bg={theme.colors.greys.white} boxShadow="sm">
      <Container
        maxW="container.xl"
        as={Flex}
        align="center"
        justify="space-between"
        py={4}
        gap={6}
      >
        <Flex align="center" gap={4}>
          <Image src={"/logo.svg"} alt={"site logo"} width={60} height={40} layout="intrinsic" />
          {header.navItems.map(ni => (
            <Link
              key={ni.link.url}
              href={ni.link.url || "#"}
              size="md" 
              variant="subtle" 
              color="theme.blue" 
              _hover={{ textDecoration: "none", color: "theme.blueAlt" }} 
            >
              {ni.link.label}
            </Link>
          ))}
        </Flex>
        <Button
          colorScheme="blue" 
          variant="solid" 
          size="md" 
        >
          Get in Touch
        </Button>
      </Container>
    </Box>
  )
}
