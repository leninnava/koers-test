import { SimpleGrid, Flex, Text, Icon, Stack } from "@chakra-ui/react";

//

const Feature = () => {
  return (
    <Stack
      direction={["column", null, null, "row"]}
      placeItems="center"
      spacing={4}
    >
      <Icon></Icon>
      <Text
        color="gray.600"
        textTransform="uppercase"
        fontWeight="bold"
        maxWidth="40ch"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, magni iste
        mollitia
      </Text>
    </Stack>
  );
};

const Features = () => {
  return (
    <SimpleGrid
      columns={[1, null, null, 3]}
      w="full"
      spacing={4}
      marginBottom={10}
    >
      <Feature />
      <Feature />
      <Feature />
    </SimpleGrid>
  );
};

export default Features;
