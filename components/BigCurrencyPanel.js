import {
  Box,
  Stack,
  Text,
  Divider,
  Container,
  Icon,
  Flex,
  Heading,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Head from "next/head";

const BigCurrencyPanel = () => {
  return (
    <Stack
      direction={["column", "row", "row", "row"]}
      width={["full", "full", "40rem", "full"]}
      justify={["center", "space-between", "space-between", "space-between"]}
      align={["center", "initial", "initial", "initial"]}
      borderRadius="2xl"
      bg="brand.dark"
      color="white"
      padding={8}
      spacing={8}
    >
      <Stack direction="column" justify="space-between">
        <Heading as="h3" size="xl">
          Heading
        </Heading>
        <Stack direction="column" spacing={4}>
          <Stack direction="row" placeItems="center">
            <Icon></Icon>
            <Text>some text</Text>
          </Stack>
          <Stack direction="row" placeItems="center">
            <Icon></Icon>
            <Text>some text</Text>
          </Stack>
        </Stack>
      </Stack>

      <Stack
        direction="row"
        h="full"
        placeContent="flex-end"
        placeItems="center"
      >
        <Stack direction="column" spacing={6}>
          <Box>
            <Icon></Icon>
            <Text>text</Text>
          </Box>
          <Box>
            {" "}
            <Text fontWeight="bold">number</Text>
            <Text>text</Text>
          </Box>
          <Box>
            {" "}
            <Box>
              <Text fontWeight="bold">number</Text>
              <Text>text</Text>
            </Box>
          </Box>
        </Stack>
        <Stack direction="column" spacing={6}>
          <Box>
            <Icon></Icon>
            <Text>text</Text>
          </Box>
          <Box>
            <Text fontWeight="bold">number</Text>
            <Text>text</Text>
          </Box>
          <Box>
            {" "}
            <Box>
              <Text fontWeight="bold">number</Text>
              <Text>text</Text>
            </Box>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default BigCurrencyPanel;
