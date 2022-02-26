import { Button, Input, Textarea, useClipboard } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { useState, useRef } from "react";
import { toast } from "react-toastify";

export default function Image() {
  const toastId = useRef(null);

  const [textAreaValue, setTextAreaValue] = useState("");
  const { hasCopied, onCopy } = useClipboard(textAreaValue);
  const printFile = (file) => {
    toastId.current = toast("Converting into string...");
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };
  return (
    <>
      <Head>
        <title>Image To Text Converter - Dev Tools</title>
      </Head>

      <div className="flex flex-row mt-4">
        <Input
          width="20rem"
          type="file"
          className="flex-none"
          onChange={(e) => {
            printFile(e.target.files[0]).then((data) => {
              setTextAreaValue(data);
              toast.update(toastId.current, {
                render: () => "Converted ",
                type: toast.TYPE.SUCCESS,
                autoClose: 5000,
              });
            });
          }}
        />

        <Button
          disabled={textAreaValue.length === 0}
          className=" flex-none"
          onClick={() => {
            toast.success("Copied to clipboard 📋");
            onCopy();
          }}
        >
          {hasCopied ? "Copied ✔" : " 📋 Copy"}
        </Button>
      </div>
      <Textarea
        className="w-10 mt-4"
        height="200px"
        variant="outline"
        color="gray.400"
        placeholder="Image encoded into base64 String"
        value={textAreaValue}
        size="lg"
        borderColor="teal"
        disabled={true}
        resize={"none"}
      ></Textarea>

      <small className="text-gray-400">
        Goto{" "}
        <Link href="/tools/">
          <a className="text-blue-500">Tools Page </a>
        </Link>
      </small>
    </>
  );
}
