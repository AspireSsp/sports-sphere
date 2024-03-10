import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Select
} from "@chakra-ui/react";
import { FormControl, FormLabel, Input, Box, HStack } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import axios from "axios";
import LocationAutocomplete from "./LocationAutocomplete";
import { get } from "../apis/api";

const EditModel = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState({});
  const [sports, setSports] = useState([]);
  const [sport, setSport] = useState("");
  const [level, setLevel] = useState("");

  useEffect(() => {
    fetchSportsDropdown();
  }, []);

  const fetchSportsDropdown = async () => {
    try {
      const response = await get("sport/dropdown");
      console.log(response);
      setSports(response.data.sports);
    } catch (error) {
      console.error("Error fetching sports dropdown:", error);
    }
  };

  const handleSports = () => {
    let arr = [...sports];
    arr.push({ sport, level });
    setSports(arr);
    setSport("");
    setLevel("");
  };
  const handleDelete = () => {
    console.log("deleted");
  };
  console.log(location);

  const handleUpdate = async () => {
    console.log("callling");
    const body = {
      name,
      email,
      mobile,
      description,
      location: {
        name: location.value,
        lat: location.coordinates.lat,
        lon: location.coordinates.lon,
      },
      sports,
    };
    console.log(body);

    // onClose();
  };
  const handleLevelChange = (e) => {
    setLevel(e.target.value);
};

  return (
    <>
      <Button onClick={onOpen}>Edit Profile</Button>

      <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit User Information</ModalHeader>
          <ModalCloseButton />
          <ModalBody spacing={3}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                placeholder="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>email</FormLabel>
              <Input
                placeholder="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Mobile</FormLabel>
              <Input
                placeholder="Mobile"
                onChange={(e) => {
                  setMobile(e.target.value);
                }}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Description</FormLabel>
              <Input
                placeholder="Description"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Address</FormLabel>
              <LocationAutocomplete
                location={location}
                setLocation={setLocation}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Sports</FormLabel>
              <HStack w={"100%"}>
                <Box>
                  <FormControl id="sport" isRequired>
                    <FormLabel>sport</FormLabel>
                    <Select
                      value={sport}
                      onChange={(e) => setSport(e.target.value)}
                    >
                      <option value="">Select Sport</option>
                      {sports.map((sport) => (
                        <option key={sport._id} value={sport.name}>
                          {sport.name}
                        </option>
                      ))}
                    </Select>{" "}
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="level">
                    <FormLabel>level</FormLabel>
                    <Select value={level} onChange={handleLevelChange}>
                        <option value="">Select Level</option>
                        <option value="Block level">Block level</option>
                        <option value="District level">District level</option>
                        <option value="State level">State level</option>
                        <option value="National level">National level</option>
                        <option value="International level">International level</option>
                    </Select>
                  </FormControl>
                </Box>
                <Box>
                  <Button
                    mt="30"
                    type="submit"
                    colorScheme="black"
                    variant="outline"
                    onClick={handleSports}
                  >
                    Add
                  </Button>
                </Box>
              </HStack>
              <TableContainer>
                <Table variant="simple">
                  <TableCaption>
                    Imperial to metric conversion factors
                  </TableCaption>
                  <Thead>
                    <Tr>
                      <Th>Sport</Th>
                      <Th>level</Th>
                      <Th>Action</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {sports?.map((item, index) => (
                      <Tr key={index}>
                        <Td>{item.sport}</Td>
                        <Td>{item.level}</Td>
                        <Td>
                          {" "}
                          <Button
                            onClick={() => {
                              handleDelete(item);
                            }}
                            colorScheme="red"
                          >
                            delete
                          </Button>{" "}
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              onClick={handleUpdate}
              colorScheme="black"
              variant="outline"
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditModel;
