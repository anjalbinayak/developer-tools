import { Input, Textarea } from "@chakra-ui/react";
import { useState } from "react";

export default function Image() {
  const [textAreaValue, setTextAreaValue] = useState("");
  const printFile = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };
  return (
    <>
      <Input
        type="file"
        onChange={(e) => {
          printFile(e.target.files[0]).then((data) => setTextAreaValue(data));
        }}
      />
      <Textarea
        disabled={true}
        placeholder="Image encoded into base64"
        value={textAreaValue}
      ></Textarea>
    </>
  );
}
