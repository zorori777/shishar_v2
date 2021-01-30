import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Header from "@/components/shared/Header";
export default function Home() {
  return (
    <Box height={"100%"} background={"black"}>
      <Head>
        <title>Shishar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Header />
      </Box>
    </Box>
  );
}
