import {
  Container,
  Box,
  useColorModeValue,
  Flex,
  Link,
  Heading,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { GiRollingEnergy } from "react-icons/gi";
import ThemeToggleButton from "../ThemeToggleButton";

export default function Navbar() {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      style={{ backdropFilter: "blur(10px" }}
      zIndex={2}
    >
      <Container display="flex" p={2} maxW="container.md">
        <NextLink href="/">
          <Link display="flex" textAlign="center">
            <Flex gap={1} align="center">
              <GiRollingEnergy />
              <Heading
                as="h2"
                size="md"
                letterSpacing={"tighter"}
                mr={10}
                cursor="pointer"
              >
                AniQuote
              </Heading>
            </Flex>
          </Link>
        </NextLink>
        <Flex align="center" gap={5}>
          <NextLink href="/title">
            <Link fontWeight={800}>by title</Link>
          </NextLink>
          <NextLink href="/character">
            <Link fontWeight={800}>by character</Link>
          </NextLink>
        </Flex>
        <Box flex={1} textAlign="right">
          <ThemeToggleButton />
        </Box>
      </Container>
    </Box>
  );
}
