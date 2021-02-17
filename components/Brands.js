import { SimpleGrid, Image, Icon } from "@chakra-ui/react";
const Brands = () => {
  return (
    <SimpleGrid
      columns={[3, 3, 3, 6]}
      py={16}
      spacingY={10}
      w="full"
      placeItems="center"
      placeContent="space-between"
    >
      <Icon></Icon>
      <Icon></Icon>
      <Icon></Icon>
      <Icon></Icon>
      <Icon></Icon>
      <Icon></Icon>
    </SimpleGrid>
  );
};

export default Brands;
