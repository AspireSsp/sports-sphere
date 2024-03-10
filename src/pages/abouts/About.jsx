import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
  IoTabletPortraitSharp,
  IoServerOutline,
} from "react-icons/io5";
import { ReactElement, useEffect } from "react";

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function About() {
  useEffect(() => {
    document.title = "About Me";
    return () => {
      document.title = "Code Buddy";
    };
  }, []);
  return (
    <Container maxW={"5xl"} py={12}>
      <Stack w={"100%"} className="App-header">
        <h1>About Us</h1>
      </Stack>
      <SimpleGrid mt={16} columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Heading textAlign={"start"}>Hello</Heading>
          <Heading textAlign={"start"}>
            I am <span style={{ color: "#3182ce" }}>SANJAY PRAJAPAT</span>
          </Heading>
          <Text textAlign={"start"} color={"gray.500"} fontSize={"lg"}>
            Experienced Full Stack Developer specializing in building robust and
            scalable web and mobile applications. With a passion for
            problem-solving and a strong background in JavaScript, MERN stack
            (MongoDB, Express.js, React.js, Node.js), Next.js, React Native,
            Flutter, AWS, and Firebase, I strive to create innovative solutions
            that meet the needs of clients and users.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              icon={
                <Icon as={IoAnalyticsSharp} color={"yellow.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"Website Development"}
            />
            <Feature
              icon={
                <Icon
                  as={IoTabletPortraitSharp}
                  color={"green.500"}
                  w={5}
                  h={5}
                />
              }
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"Mobile Application Development"}
            />
            <Feature
              icon={
                <Icon as={IoServerOutline} color={"purple.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"Full stack Development"}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
      <SimpleGrid mt={16} columns={{ base: 1, md: 2 }} spacing={10}>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
            objectFit={"cover"}
          />
        </Flex>
        <Stack spacing={4}>
          <Heading textAlign={"start"}>Hello</Heading>
          <Heading textAlign={"start"}>
            I am <span style={{ color: "#3182ce" }}>GAUTAM JADAV</span>
          </Heading>
          <Text textAlign={"start"} color={"gray.500"} fontSize={"lg"}>
            Experienced Full Stack Developer specializing in building robust and
            scalable web and mobile applications. With a passion for
            problem-solving and a strong background in JavaScript, MERN stack
            (MongoDB, Express.js, React.js, Node.js), Next.js, React Native,
            Flutter, AWS, and Firebase, I strive to create innovative solutions
            that meet the needs of clients and users.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              icon={
                <Icon as={IoAnalyticsSharp} color={"yellow.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"Website Development"}
            />
            <Feature
              icon={
                <Icon
                  as={IoTabletPortraitSharp}
                  color={"green.500"}
                  w={5}
                  h={5}
                />
              }
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"Mobile Application Development"}
            />
            <Feature
              icon={
                <Icon as={IoServerOutline} color={"purple.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"Full stack Development"}
            />
          </Stack>
        </Stack>
      </SimpleGrid>
      <SimpleGrid mt={16} columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Heading textAlign={"start"}>Hello</Heading>
          <Heading textAlign={"start"}>
            I am <span style={{ color: "#3182ce" }}>RAHUL RAJPUT</span>
          </Heading>
          <Text textAlign={"start"} color={"gray.500"} fontSize={"lg"}>
            Experienced Full Stack Developer specializing in building robust and
            scalable web and mobile applications. With a passion for
            problem-solving and a strong background in JavaScript, MERN stack
            (MongoDB, Express.js, React.js, Node.js), Next.js, React Native,
            Flutter, AWS, and Firebase, I strive to create innovative solutions
            that meet the needs of clients and users.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              icon={
                <Icon as={IoAnalyticsSharp} color={"yellow.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"Website Development"}
            />
            <Feature
              icon={
                <Icon
                  as={IoTabletPortraitSharp}
                  color={"green.500"}
                  w={5}
                  h={5}
                />
              }
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"Mobile Application Development"}
            />
            <Feature
              icon={
                <Icon as={IoServerOutline} color={"purple.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"Full stack Development"}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
