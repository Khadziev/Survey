import { Flex, Grid, Heading, Stack, Text } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { InputControl, SubmitButton } from "formik-chakra-ui";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useSigninUserMutation } from "../../../store/api/authApi";
import { useAppDispatch } from "../../../store/hook";
import { setUser } from "../../../store/state/authSlice";


const Signin = () => {
    const dispatch = useAppDispatch();
    const [email] = useState<string>();
    const toast = useToast();
    const navigate = useNavigate();
    const [signinUser, { data, isLoading, error, isError, isSuccess }] =
    useSigninUserMutation();
    console.log(data);
    if (isError) {
        toast({
            title: (error as any).data.message,
            status: "error",
            duration: 5000,
        });
        if ((error as any).data.message === "Пользователь не проверен") {
            navigate("/send-verify-mail", {
                state: { email },
            });
        }
    }
    if (isSuccess) {
        dispatch(setUser({ token: data.token, name: data.name }));
        navigate("/");
        localStorage.setItem("token", data.token);
    }

    console.log(error);

    return (
        <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => {

                signinUser({ ...values });
            }}
        >
            <Form>
                <Grid h="100vh" placeItems="center">
                    <Stack p="4" boxShadow="xl" borderRadius="md">
                        <Heading
                            color="teal"
                            textAlign="center"
                            fontSize="lg"
                            fontWeight="semibold"
                        >
                            Войти
                        </Heading>
                        <InputControl
                            name="email"
                            label="Email"
                            inputProps={{
                                type: "email",
                                placeholder: "Введите Email...",
                            }}
                        />
                        <InputControl
                            name="password"
                            label="Password"
                            inputProps={{
                                placeholder: "Введите Пароль...",
                                type: "password",
                            }}
                        />
                        <Flex justify="flex-end">
                            <Text as={Link} to="/forgot-password" color="teal">
                                Забыли пароль
                            </Text>
                        </Flex>
                        <SubmitButton isLoading={isLoading}>Войти</SubmitButton>
                    </Stack>
                </Grid>
            </Form>
        </Formik>
    );
};

export default Signin;
