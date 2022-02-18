import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue, Container, Box } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  height: 100%;
`;

const Logo = () => {
  // Allows the image to be exported as the white or black version depending on the value of the current theme
  const konLogo = `/../public/kon_logo_transparent${useColorModeValue(
    "_black",
    "_white"
  )}.png`;

  return (
    <Box>
      <Link href="/">
        <a>
          <LogoBox>
            <Image
              src={konLogo}
              alt="Konstantin Boguev logo"
              width="50"
              height="50"
            />
          </LogoBox>
        </a>
      </Link>
    </Box>
  );
};

export default Logo;
