import { Box, Link, Icon, Text, Stack } from "@chakra-ui/react";

const Navbar = () => {
  // Date
  const date = new Date();
  const fullDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  //

  return (
    <>
      <Stack
        as="nav"
        paddingX="10vw"
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        height="5rem"
        bg="black"
        color="white"
      >
        <Icon></Icon>
        <Stack direction="row" spacing={10} placeItems="center">
          <Stack direction="row" spacing={3}>
            <Link as="NextLink" textTransform="uppercase" fontWeight="bold">
              Link
            </Link>
            <Link as="NextLink" textTransform="uppercase" fontWeight="bold">
              Link
            </Link>
            <Link as="NextLink" textTransform="uppercase" fontWeight="bold">
              Link
            </Link>
            <Link as="NextLink" textTransform="uppercase" fontWeight="bold">
              Link
            </Link>
          </Stack>{" "}
          <Box
            borderRadius="1rem"
            bg="white"
            w={"6rem"}
            h={"3rem"}
            display="flex"
            placeItems="center"
            placeContent="center"
          >
            <Text d="inline-block" size="md" color="gray.500" height="auto">
              {fullDate}
            </Text>
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

export default Navbar;
