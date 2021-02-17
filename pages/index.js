import Head from "next/head";
import styles from "../styles/Home.module.css";

import Navbar from "../components/Navbar";
import CurrencyItemContainer from "../components/CurrencyItemContainer";
import CurrencyItem from "../components/CurrencyItem";
import Features from "../components/Features";
import { Heading, Container, Link, Stack, Box, chakra } from "@chakra-ui/react";
import BigCurrencyPanel from "../components/BigCurrencyPanel";
import Testimonials from "../components/Testimonials";
import Brands from "../components/Brands";
export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Navbar />
      <Box as="main">
        <Container
          as="section"
          maxWidth={["90%", "80%", "80%", "65%"]}
          centerContent
        >
          <Heading textStyle="heading-dark">
            Heading, this will hold the copy text and{" "}
            <Link as="span" color="green.500">
              Some link
            </Link>{" "}
          </Heading>
          <Features />
          <Stack w="full" marginY={10}>
            <CurrencyItemContainer title="Currency panel heading">
              <CurrencyItem />
              <CurrencyItem />
              <CurrencyItem />
              <CurrencyItem />
            </CurrencyItemContainer>
            <CurrencyItemContainer title="Currency panel heading number two">
              <CurrencyItem />
              <CurrencyItem />
              <CurrencyItem />
              <CurrencyItem />
            </CurrencyItemContainer>
          </Stack>
          <BigCurrencyPanel />
          <Heading as="h2" textStyle="heading-dark">
            Heading, this will hold the copy text and{" "}
            <Link as="span" color="green.500">
              Some link
            </Link>{" "}
          </Heading>
          <Brands />
        </Container>
        <Box as="section" bg="brand.dark" w="100vw" py={10}>
          <Container
            as="section"
            maxWidth={["90%", "80%", "80%", "65%"]}
            centerContent
          >
            <Heading as="h2" textStyle="heading-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              <chakra.span color="gray.600">
                Eius in numquam voluptatibus hic laudantium voluptas
              </chakra.span>{" "}
              <chakra.span color="green.600">
                voluptates incidunt at! A molestias
              </chakra.span>
            </Heading>
          </Container>
          <Testimonials />
        </Box>
      </Box>
    </>
  );
}
