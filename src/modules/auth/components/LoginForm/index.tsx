import {
  Box,
  Input,
  FormLabel,
  FormControl,
  FormErrorMessage,
  useDisclosure,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import loginValidation from "./loginValidation";
import Image from "next/image";
import logo from "@images/logo.svg";
import Button from "@modules/shared/components/Button";

type TProps = {
  onSubmit?: (credentials: TCredentials) => void;
};

export default function LoginForm({ onSubmit }: TProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const session = useSession();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: loginValidation, mode: "onChange" });

  const forwardSubmit = async (data: any) => {
    onOpen();
    if (onSubmit) {
      await onSubmit(data);
    }
    onClose();
  };

  return (
    <Box
      maxW="480px"
      w="full"
      mx="auto"
      mb={32}
      p={8}
      shadow="xl"
      rounded="xl"
      bg="white"
    >
      <Box mx="auto" w="fit-content" mb={8}>
        <Image src={logo} alt="logo" draggable={false} />
      </Box>
      <form onSubmit={handleSubmit(forwardSubmit)}>
        <FormControl isInvalid={Boolean(errors.email)} mb={8}>
          <FormLabel color="blue.500" fontWeight="bold">
            Usuário
          </FormLabel>
          <Input
            w="100%"
            defaultValue=""
            readOnly={!!!onSubmit}
            placeholder="seu-email@mail.com"
            {...register("email", { required: true })}
          />
          {/* <FormErrorMessage>{errors.email?.message}</FormErrorMessage> */}
        </FormControl>

        <FormControl isInvalid={Boolean(errors.password)}>
          <FormLabel color="blue.500" fontWeight="bold">
            Senha
          </FormLabel>
          <Input
            w="100%"
            defaultValue=""
            type="password"
            placeholder="************"
            readOnly={!!!onSubmit}
            {...register("password", { required: true })}
          />
          {/* <FormErrorMessage>{errors.password?.message}</FormErrorMessage> */}
        </FormControl>

        <Button
          mt={50}
          type="submit"
          isLoading={session.status === "loading" || isOpen}
          withIcon
        >
          Entrar
        </Button>
      </form>
    </Box>
  );
}
