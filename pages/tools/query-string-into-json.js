import { Input, Textarea, Button, Stack } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function QueryStringIntoJson() {
  const [queryString, setQueryString] = useState("");
  const [outputJson, setOutputJson] = useState("");

  const convertQueryIntoJson = () => {
    const params = Object.fromEntries(new URLSearchParams(queryString));

    return JSON.parse(JSON.stringify(params));
  };

  return (
    <>
      <Head>
        <title>Query String Into Json - Dev Tools</title>
      </Head>
      <br />
      <Stack direction={"column"} spacing="2">
        <Input
          variant="filled"
          type="text"
          value={queryString}
          onChange={(e) => setQueryString(e.target.value)}
          placeholder="Enter Query String"
        />

        <Textarea
          className="w-10"
          height="200px"
          variant="outline"
          placeholder="Output JSON"
          value={outputJson}
          size="lg"
          borderColor="teal"
          resize={"none"}
          color="gray.800"
        ></Textarea>

        <Button
          colorScheme="teal"
          variant="outline"
          onClick={() => {
            setOutputJson(JSON.stringify(convertQueryIntoJson()));
          }}
        >
          Convert URL Into JSON
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
