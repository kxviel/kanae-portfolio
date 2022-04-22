import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  IconButton,
  useColorModeValue,
  Center,
  useColorMode,
} from "@chakra-ui/react";
import { AiFillMail } from "react-icons/ai";
import {
  BsGithub,
  BsLinkedin,
  BsMoonFill,
  BsSun,
  BsSunFill,
} from "react-icons/bs";
import Image from "next/image";
import MobileNav from "./MobileNav";
import { links } from "../utils/Contants";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "gray.800");
  return (
    <Box shadow="sm" bg={bg} h="12vh" w="100vw" px={{ base: 1, sm: 3 }} py={1}>
      <Flex alignItems="center" justifyContent="space-between" mx="auto">
        <HStack spacing={2} display="flex" alignItems="center">
          <MobileNav />
          <Flex
            h="11vh"
            w={["fit-content", "15vw", "7vw"]}
            position={"relative"}
          >
            <Image
              priority
              src={colorMode === "light" ? "/Logo-Light.svg" : "/Logo-Dark.svg"}
              alt="logo"
              layout="fill"
              objectFit="cover"
            />
          </Flex>
          <Center height="35px">
            <Divider orientation="vertical" w={"1px"} bg={"gray.300"} />
          </Center>
          <Button
            as="a"
            target="_blank"
            href={links.github}
            variant="ghost"
            size="sm"
            _hover={{ color: "purple.600" }}
          >
            GitHub
          </Button>
          <Button
            as="a"
            target="_blank"
            href={links.resume}
            variant="ghost"
            size="sm"
            _hover={{ color: "red.700" }}
          >
            Resume
          </Button>
        </HStack>

        <HStack spacing={3} display="flex" alignItems="center">
          <HStack spacing={3} display={{ base: "none", md: "inline-flex" }}>
            <IconButton
              aria-label="GitHub"
              icon={<BsGithub />}
              _hover={{ color: "purple.600" }}
            />
            <IconButton
              aria-label="LinkedIn"
              icon={<BsLinkedin />}
              _hover={{ color: "blue.600" }}
            />
            <IconButton
              aria-label="GMail"
              icon={<AiFillMail />}
              _hover={{ color: "red.300" }}
            />
            <IconButton
              aria-label="Toggle"
              icon={colorMode === "light" ? <BsMoonFill /> : <BsSunFill />}
              _hover={{
                color: colorMode === "light" ? "blue.700" : "orange.300",
              }}
              variant={"outline"}
              _focus={{}}
              onClick={toggleColorMode}
            />
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
