import {
  Box,
  Stack,
  Text,
  Divider,
  SimpleGrid,
  Container,
  Icon,
  Flex,
  Heading,
} from "@chakra-ui/react";

const CurrencyPanel = ({ title, children } = props) => {
  return (
    <Box marginBottom={20}>
      <Heading fontSize="xl" marginBottom={4}>
        {title}
      </Heading>
      <SimpleGrid
        spacing={5}
        columns={[1, "null", "null", 2]}
        width={["full"]}
        height="auto"
        alignItems="center"
        justifyContent="space-around"
      >
        {children}
      </SimpleGrid>
    </Box>
  );
};

export default CurrencyPanel;
