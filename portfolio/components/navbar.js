import Logo from "./logo";
import NextLink from "next/link";
import {
  Container,
  Box,
  Link,
  Stack,
  Flex,
  IconButton,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const LinkItem = ({ href, path, children }) => {
  const active = path === href;
  return (
    <NextLink href={href}>
      <Link p={6}>{children}</Link>
    </NextLink>
  );
};

const Navbar = (props) => {
  const { path } = props;

  return (
    <Box
      as="nav"
      width="100%"
      bg={useColorModeValue("#865439", "#FCDEC0")}

    >
      <Container
        display="flex"
        maxW="container.md"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5} mx="auto" w="80%">
          <Logo />
          <Stack
            direction={["row"]}
            align="center"
            spacing="5%"
            height="10"
          >
            <LinkItem href="/about" path={path}>
              <Text>Portfolio</Text>
            </LinkItem>
            <LinkItem href="/about" path={path}>
              GitHub
            </LinkItem>
            <LinkItem href="/about" path={path}>
              Contact
            </LinkItem>
          </Stack>
        </Flex>
        <Flex align="center" mr={5} mx="auto" w="20%">
          <IconButton
            mx="auto"
            aria-label="theme-switch"
            icon={useColorModeValue(<SunIcon />, <MoonIcon />)}
          />
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
