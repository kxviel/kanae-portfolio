import {
  Avatar,
  Box,
  Button,
  chakra,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  useColorModeValue,
  useDisclosure,
  VisuallyHidden,
  VStack,
} from "@chakra-ui/react";
import {
  AiFillBell,
  AiFillHome,
  AiOutlineInbox,
  AiOutlineMenu,
} from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";

const MobileNav = () => {
  const mobileNav = useDisclosure();
  const bg = useColorModeValue("white", "gray.800");
  return (
    <Box display={{ base: "inline-flex", md: "none" }}>
      <IconButton
        display={{ base: "flex", md: "none" }}
        aria-label="Open menu"
        fontSize="20px"
        color={useColorModeValue("gray.800", "inherit")}
        variant="ghost"
        icon={<AiOutlineMenu />}
        onClick={mobileNav.onOpen}
      />
      <VStack
        pos="absolute"
        top={0}
        left={0}
        right={0}
        display={mobileNav.isOpen ? "flex" : "none"}
        flexDirection="column"
        p={2}
        pb={4}
        m={2}
        bg={bg}
        spacing={3}
        rounded="sm"
        shadow="sm"
      >
        <CloseButton
          aria-label="Close menu"
          justifySelf="self-start"
          onClick={mobileNav.onClose}
        />
        <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
          Dashboard
        </Button>
        <Button
          w="full"
          variant="solid"
          colorScheme="brand"
          leftIcon={<AiOutlineInbox />}
        >
          Inbox
        </Button>
        <Button w="full" variant="ghost" leftIcon={<BsFillCameraVideoFill />}>
          Videos
        </Button>
      </VStack>
    </Box>
  );
};

export default MobileNav;
