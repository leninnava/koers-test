import { Box, Stack, Flex, Text, Icon, Divider } from "@chakra-ui/react";

const CurrencyItem = () => {
  return (
    <Box
      bg="brand.dark"
      borderRadius="2xl"
      padding={3}
      color="gray.100"
      w="full"
    >
      <Stack direction="column">
        <Box>
          <Flex
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack direction="column">
              <Text fontSize="md" fontWeight="bold">
                Element
              </Text>
              <Text fontSize="xs">another element</Text>
            </Stack>
            <Stack direction="row" align="center">
              <Text fontSize="md" fontWeight="bold">
                Element
              </Text>
              <Icon></Icon>
            </Stack>
          </Flex>
        </Box>

        <Divider />
        <Stack direction="row" justify="center" align="center">
          <Text fontSize="xs">Some Text</Text>
          <Icon></Icon>
        </Stack>
      </Stack>
    </Box>
  );
};

export default CurrencyItem;
