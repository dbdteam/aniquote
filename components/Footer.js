import {
    Container,
    Text,
  } from "@chakra-ui/react";
import styled from '@emotion/styled'

const Atag = styled.a`
  a {
    color: #22d7ec;
  }
`

function Footer() {
  return (
    <Atag>
    <Container mt={6} maxW="container.md" align="center">
      <Text fontSize="xl">Created using <a href="https://animechan.vercel.app/">AnimeChan</a>&apos;s API</Text>
      </Container>
    </Atag>
  )
}

export default Footer