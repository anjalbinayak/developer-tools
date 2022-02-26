import { Box, Stack } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";

export default function Index() {
  return (
    <>
      <Head>
        <title>All Tools - Dev Tools</title>
      </Head>
      <h1 className="text-lg text-center">List of Available Tools</h1>
      <Box className="m-2 w-auto">
        <Stack direction={["column", "column", "row"]} spacing="2">
          <Link href="/tools/image" passHref>
            <button className="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-green-500 rounded-lg focus:shadow-outline hover:bg-green-800">
              <span className="mr-2">Image to Base64 Converter</span>
            </button>
          </Link>

          <Link href="/tools/url-encode" passHref>
            <button className="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-blue-500 rounded-lg focus:shadow-outline hover:bg-blue-700">
              <span className="mr-2">URL Encoder</span>
            </button>
          </Link>

          <Link href="/tools/url-decode" passHref>
            <button className="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-gray-500 rounded-lg focus:shadow-outline hover:bg-gray-700">
              <span className="mr-2">URL Decoder</span>
            </button>
          </Link>

          <Link href="/tools/query-string-into-json" passHref>
            <button className="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-gray-500 rounded-lg focus:shadow-outline hover:bg-gray-700">
              <span className="mr-2">Query String Into Json</span>
            </button>
          </Link>
        </Stack>
      </Box>
    </>
  );
}
