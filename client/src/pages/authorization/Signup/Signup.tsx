import { Grid, Heading, Stack } from "@chakra-ui/layout";
import { Form, Formik } from "formik";
import { InputControl, SubmitButton } from "formik-chakra-ui";
import { useSignupUserMutation } from "../../../store/api/authApi";




const Signup = () => {
    const [signupUser, { data, isLoading }] = useSignupUserMutation();
    console.log(data);


    return (
        <Formik
            initialValues={{ name: "", email: "", password: "", }}
            onSubmit={(values) => {
                signupUser({ ...values }); 
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
                            Регистрация
                        </Heading>
                      
                        <InputControl
                            name="name"
                            label="Имя"
                            inputProps={{
                                placeholder: "Введите Имя...",
                            }}
                        />
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
                            label="Пароль"
                            inputProps={{
                                placeholder: "Введите Пароль...",
                                type: "password",
                            }}
                        />
                        <SubmitButton isLoading={isLoading}>Зарегистрироваться</SubmitButton>
                    </Stack>
                </Grid>
            </Form>
        </Formik>
    );
};

export default Signup;
