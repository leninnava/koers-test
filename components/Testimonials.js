import { Flex, Text, Heading, Avatar, Stack } from "@chakra-ui/react";

const Testimonial = () => {
  return (
    <Stack
      w="sm"
      h="auto"
      p={6}
      spacing={6}
      direction={["column", null, null, "row"]}
      bg="brand.dark"
      color="white"
      borderRadius="2xl"
      border="solid white 1px"
    >
      <Avatar></Avatar>
      <Stack direction="column" spacing={0}>
        <Text as="h4" color="gray.100" fontSize="lg" fontWeight="bold">
          Your Name
        </Text>
        <Text color="gray.300" fontWeight="md" maxWidth="40ch">
          Your Name Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Corporis suscipit voluptates ratione dolorem odit minima unde
        </Text>
      </Stack>
    </Stack>
  );
};

const Testimonials = () => {
  return (
    <Stack
      w={["full", null, null, "130%"]}
      direction={["column", null, null, "row"]}
      spacing={10}
      transform={[null, null, null, "translateX(-3%)"]}
      placeItems={["center", "center", "center", null]}
    >
      <Testimonial />
      <Testimonial />
      <Testimonial />
      <Testimonial />
    </Stack>
  );
};

export default Testimonials;
