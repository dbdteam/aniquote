import { Container, Link, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Container mt={6} maxW="container.md" textAlign="center">
      <Text fontSize="xl">
        Created using{" "}
        <Link color="#22d7ec" href="https://animechan.vercel.app/">
          AnimeChan
        </Link>
        &apos;s API
      </Text>
    </Container>
  );
}
