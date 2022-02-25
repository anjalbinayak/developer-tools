import { Input, Textarea, Button, Stack } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function UrlEncodeDecode() {
  const [toEncodeURL, setToEncodeURL] = useState("");
  const [encodedURL, setEncodedURL] = useState("");

  return (
    <>
      <Head>
        <title>URL Encoder - Dev Tools</title>
      </Head>
      <br />
      <Stack direction={"column"} spacing="2">
        <Input
          variant="filled"
          type="text"
          value={toEncodeURL}
          onChange={(e) => setToEncodeURL(e.target.value)}
          placeholder="Enter Url to Encode"
        />

        <Textarea
          className="w-10"
          height="200px"
          variant="outline"
          placeholder="Encoded URL"
          value={encodedURL}
          size="lg"
          borderColor="teal"
          resize={"none"}
          color="gray.800"
        ></Textarea>

        <Button
          colorScheme="teal"
          variant="outline"
          onClick={() => {
            setEncodedURL(encodeURI(toEncodeURL));
          }}
        >
          Encode
        </Button>
        <small className="text-gray-400">
          Decode URL{" "}
          <Link href="/tools/url-decode">
            <a className="text-blue-500">here </a>
          </Link>
        </small>
      </Stack>
    </>
  );
}
