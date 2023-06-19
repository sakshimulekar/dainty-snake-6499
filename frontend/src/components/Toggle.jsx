import { Button, Box } from "@chakra-ui/react";
import { useState } from "react";
import { navArr, navArr2 } from "../components/constant/constant";

function ToggleButton({ setToggleNav }) {
  const [currentPage, setCurrentPage] = useState("page1");

  const handlePageChange = (page, arr) => {
    setCurrentPage(page);
    setToggleNav && setToggleNav(arr);
  };

  return (
    <div style={{ display: "inline-block", }}>
      <Box
        display="flex"
        alignItems="center"
        borderWidth={1}
        borderRadius="full"
        overflow="hidden"
      >
        <Button
          colorScheme={currentPage === "page1" ? "blue" : "gray"}
          onClick={() => handlePageChange("page1", navArr)}
          flex="1"
          borderRadius="none"
        >
          RENT
        </Button>
        <Button
          colorScheme={currentPage === "page2" ? "blue" : "gray"}
          onClick={() => handlePageChange("page2", navArr2)}
          flex="1"
          borderRadius="none"
        >
          BUY
        </Button>
      </Box>

      {/* {currentPage === "page1" && (
        <Box mt={4} p={4} borderWidth={1} borderRadius="md">
          Content for Page 1
          <h1>This is Page 1</h1>
          <p>Page 1 content goes here...</p>
        </Box>
      )}

      {currentPage === "page2" && (
        <Box mt={4} p={4} borderWidth={1} borderRadius="md">
          Content for Page 2
          <h1>This is Page 2</h1>
          <p>Page 2 content goes here...</p>
        </Box>
      )} */}
    </div>
  );
}

export default ToggleButton;
