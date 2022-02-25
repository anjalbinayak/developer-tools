import { Box } from "@chakra-ui/react";
import Link from "next/link";

export default function Index() {
  return (
    <>
      <h1 className="text-lg text-center">Developer Tools</h1>
      <Box className="m-2 w-auto">
        <Link href="/tools/image">
          <button className="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-green-500 rounded-lg focus:shadow-outline hover:bg-green-800">
            <span className="mr-2">Image to Base64 Converter</span>
            <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
              9
            </span>
          </button>
        </Link>
      </Box>
    </>
  );
}
