import { Input, Textarea, Button, Stack } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function UrlEncodeDecode() {
  const [toDecodeURL, setToDecodeURL] = useState("");
  const [decodedURL, setDecodedURL] = useState("");

  return (
    <>
      <Head>
        <title>URL Decoder - Dev Tools</title>
      </Head>
      <br />
      <Stack direction={"column"} spacing="2">
        <Input
          variant="filled"
          type="text"
          value={toDecodeURL}
          onChange={(e) => setToDecodeURL(e.target.value)}
          placeholder="Enter Url to Decode"
        />

        <Textarea
          className="w-10"
          height="200px"
          variant="outline"
          placeholder="Decoded URL"
          value={decodedURL}
          size="lg"
          borderColor="teal"
          resize={"none"}
          color="gray.800"
        ></Textarea>

        <Button
          colorScheme="teal"
          variant="outline"
          onClick={() => {
            setDecodedURL(decodeURI(toDecodeURL));
          }}
        >
          Decode
        </Button>
        <small className="text-gray-400">
          Encode URL{" "}
          <Link href="/tools/url-encode">
            <a className="text-blue-500">here </a>
          </Link>
        </small>
      </Stack>
    </>
  );
}
