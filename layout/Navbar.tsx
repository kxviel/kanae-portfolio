import {
  Tooltip,
  Flex,
  HStack,
  IconButton,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import Image from "next/image";
import { navList } from "../utils/Contants";
import { darkBg, lightBg } from "../styles/Theme";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue(lightBg, darkBg);

  return (
    <Flex
      h={{
        sm: "21vh",
        md: "10vh",
        xl: "10vh",
      }}
      direction={{ sm: "column", md: "row", xl: "row" }}
      align="center"
      justify="space-between"
      bg={bg}
      // boxShadow={"sm"}
      p={2}
    >
      <Flex h="11vh" w="11vw" position={"relative"}>
        <Image
          priority
          src={"/K.svg"}
          alt="logo"
          height={56}
          width={56}
          objectFit="contain"
        />
      </Flex>

      <HStack spacing={3}>
        {navList.map((x, i) => (
          <Tooltip key={i} label={x.title}>
            <IconButton
              as="a"
              href={x.link}
              target="_blank"
              aria-label={x.title}
              icon={x.icon}
              _hover={{
                color: colorMode === "light" ? "teal.400" : "teal.200",
              }}
            />
          </Tooltip>
        ))}
        <IconButton
          aria-label="Theme Toggle"
          icon={colorMode === "light" ? <BsMoonFill /> : <BsSunFill />}
          _hover={{
            color: colorMode === "light" ? "blue.700" : "orange.300",
          }}
          variant={"outline"}
          _focus={{}}
          onClick={toggleColorMode}
        />
      </HStack>
    </Flex>
  );
};

export default Navbar;
