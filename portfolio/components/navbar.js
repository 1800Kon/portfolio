import Logo from "./logo";
import NextLink from "next/link";
import {
  Container,
  Box,
  Link,
  HStack,
  Flex,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const LinkItem = ({ href, path, children }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray", "white");
  return (
    <NextLink href={href}>
      <Link p={4}>{children}</Link>
    </NextLink>
  );
};

const Navbar = (props) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      width="100%"
      bg={useColorModeValue("#865439", "#FCDEC0")}
      zIndex="1"
      {...props}
    >
      <Container
        display="flex"
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Logo />
          <HStack spacing="5">
            <LinkItem href="/about" path={path}>
              Portfolio
            </LinkItem>
            <LinkItem href="/about" path={path}>
              GitHub
            </LinkItem>
            <LinkItem href="/about" path={path}>
              Contact me!
            </LinkItem>
          </HStack>
          <IconButton
              ml={200}
              aria-label="theme-switch"
              icon={useColorModeValue(<SunIcon />, <MoonIcon />)}
            />
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
