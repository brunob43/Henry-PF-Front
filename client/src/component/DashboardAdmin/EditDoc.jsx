import { useState, useEffect } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  Select,
  useColorMode,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { updateDoc } from "../../../src/redux/actions";
import { useDispatch } from "react-redux";

export default function EditDoc({ rowDoc, isOpenEditDoc }) {
  const { colorMode } = useColorMode();
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [input, setInput] = useState({
    doc_name: "",
    doc_topic: "",
    doc_image: "",
    doc_content: "",
  });
  const { doc_id } = rowDoc;
  useEffect(() => {
    setInput({
      doc_name: rowDoc.doc_name,
      doc_topic: rowDoc.doc_topic,
      doc_image: rowDoc.doc_image,
      doc_content: rowDoc.doc_content,
    });
    if (isOpenEditDoc) {
      onOpen();
    }

    //    }
  }, [rowDoc]);
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(updateDoc(doc_id, input));
    onClose();
  };
  return (
    <div>
      <>
        {/* <Button zIndex="10" position="fixed" right="15px" bottom="50px" colorScheme="teal" onClick={onOpen}>
         userEdit
        </Button> */}
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          //   finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Detalle de Documento</DrawerHeader>

            <DrawerBody>
              <form onSubmit={onSubmit}>
                <label>Nombre:</label>
                <Input
                  border="2px"
                  borderColor={colorMode === "dark" ? "yellow" : "black"}
                  _hover={
                    colorMode === "dark"
                      ? { color: "black", bg: "yellow" }
                      : { bg: "black", color: "yellow" }
                  }
                  color={colorMode === "dark" ? "white" : "black"}
                  bg={colorMode === "dark" ? "black" : "yellow"}
                  autoComplete="off"
                  type="text"
                  value={input.doc_name}
                  name="doc_name"
                  required
                  onChange={(e) => handleChange(e)}
                />
                <label>Tema:</label>
                <Input
                  borderColor={colorMode === "dark" ? "yellow" : "black"}
                  _hover={
                    colorMode === "dark"
                      ? { color: "black", bg: "yellow" }
                      : { bg: "black", color: "yellow" }
                  }
                  bg={colorMode === "dark" ? "black" : "yellow"}
                  color={colorMode === "dark" ? "white" : "black"}
                  autoComplete="off"
                  type="text"
                  value={input.doc_topic}
                  name="doc_topic"
                  required
                  onChange={(e) => handleChange(e)}
                />
                <label>Imagen:</label>
                <Input
                  borderColor={colorMode === "dark" ? "yellow" : "black"}
                  _hover={
                    colorMode === "dark"
                      ? { color: "black", bg: "yellow" }
                      : { bg: "black", color: "yellow" }
                  }
                  bg={colorMode === "dark" ? "black" : "yellow"}
                  color={colorMode === "dark" ? "white" : "black"}
                  autoComplete="off"
                  type="text"
                  value={input.doc_image}
                  name="doc_image"
                  required
                  onChange={(e) => handleChange(e)}
                />
                <label>Contenidos:</label>
                <Input
                  borderColor={colorMode === "dark" ? "yellow" : "black"}
                  _hover={
                    colorMode === "dark"
                      ? { color: "black", bg: "yellow" }
                      : { bg: "black", color: "yellow" }
                  }
                  bg={colorMode === "dark" ? "black" : "yellow"}
                  color={colorMode === "dark" ? "white" : "black"}
                  autoComplete="off"
                  type="text"
                  value={input.doc_content}
                  name="doc_content"
                  required
                  onChange={(e) => handleChange(e)}
                />
                <Button
                  borderColor={colorMode === "dark" ? "yellow" : "black"}
                  _hover={
                    colorMode === "dark"
                      ? { color: "black", bg: "yellow" }
                      : { bg: "black", color: "yellow" }
                  }
                  bg={colorMode === "dark" ? "black" : "yellow"}
                  color={colorMode === "dark" ? "white" : "black"}
                  type="submit"
                >
                  Save
                </Button>
              </form>
            </DrawerBody>

            <DrawerFooter>
              <Button
                borderColor={colorMode === "dark" ? "yellow" : "black"}
                _hover={
                  colorMode === "dark"
                    ? { color: "black", bg: "yellow" }
                    : { bg: "black", color: "yellow" }
                }
                bg={colorMode === "dark" ? "black" : "yellow"}
                color={colorMode === "dark" ? "white" : "black"}
                mr={3}
                onClick={onClose}
              >
                Cancel
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    </div>
  );
}