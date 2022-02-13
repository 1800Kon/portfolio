import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &hover img {
    transform: rotate(360deg);
  }
`;

const Logo = () => {
  // Allows the image to be exported as the white or black version depending on the value of the current theme
  const konLogo = `/../public/kon_logo_transparent${useColorModeValue(
    "_black",
    "_white"
  )}.png`;
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image
            src={konLogo}
            alt="Konstantin Boguev logo"
            width="20"
            height="20"
          />
          <Text color={useColorModeValue("black", "white")}>
            Konstantin Boguev
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
