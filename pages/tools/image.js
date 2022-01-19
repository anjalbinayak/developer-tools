import { Button, Input, Textarea, useClipboard } from "@chakra-ui/react";
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
      <div className="flex flex-col my-8">
        <Input
          className=""
          type="file"
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
        <Textarea
          className=""
          variant="outline"
          color="gray.400"
          placeholder="Image encoded into base64 String"
          value={textAreaValue}
          size="lg"
          borderColor="teal"
          disabled={true}
        ></Textarea>
        <Button
          disabled={textAreaValue.length === 0}
          className=""
          onClick={() => {
            toast.success("Copied to clipboard 📋");
            onCopy();
          }}
        >
          {hasCopied ? "Copied ✔" : " 📋 Copy"}
        </Button>
      </div>
    </>
  );
}
