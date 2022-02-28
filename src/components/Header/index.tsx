import Link from "next/link";
import { Box, Flex } from "@chakra-ui/layout";
import Container from "@components/layouts/Container";
import Button from "@components/Button";
import MobileMenu from "./MobileMenu";

import { navigation } from "./constants";
import Brand from "@components/Brand";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";

export default function Header() {
  const router = useRouter();

  const { status } = useSession();

  return (
    <Flex
      as="header"
      w="full"
      zIndex="10"
      bg="white"
      shadow="0px 4px 49px rgba(0, 0, 0, 0.1)"
      align="center"
      px="15px"
    >
      <Container
        as="nav"
        d="flex"
        flexDirection={["column", "column", "row"]}
        alignItems="center"
        p={0}
      >
        <Flex w={["full", "full", "auto"]} align="center" justify="center">
          <Brand />
          <MobileMenu />
        </Flex>

        <Flex
          ml={4}
          d={["none", "none", "flex"]}
          w="full"
          align="center"
          justify="space-between"
        >
          <Flex align="center" style={{ gap: "16px" }}>
            {navigation.map((nav, key) => (
              <Link key={key} href={nav.link} passHref>
                <Box
                  as="a"
                  fontWeight="bold"
                  fontSize={["18px", "18px", "18px", "22px"]}
                  transition=".3s"
                  textDecoration={
                    router.pathname === nav.link ? "underline" : "none"
                  }
                  color={router.pathname === nav.link ? "#630060" : "dark"}
                  _hover={{
                    textDecoration: "underline",
                    color: "#630060",
                  }}
                >
                  {nav.label}
                </Box>
              </Link>
            ))}
          </Flex>

          <Flex>
            <Button h="59px" href="#">
              Call To Action
            </Button>
            {status === "authenticated" && (
              <Button
                ml={2}
                colorScheme="red"
                onClick={() => signOut()}
                h="59px"
                href="#"
              >
                Sign Out
              </Button>
            )}
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
}

// {
//   user: {
//     id: number;
//     name: string;
//     email: string;
//   };
//   token: string;
//   expires: string;
// }
