import { Grid, Heading, Text } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Spinner } from "@chakra-ui/spinner";
import { useEffect } from "react";
import { useVerifyUserMutation } from "../../../store/api/authApi";
const EmailVerify = () => {
    const { token } = useParams();
    const toast = useToast();
    console.log(token);

    const [verifyUser, { data, isError, isLoading, error, isSuccess }] =
    useVerifyUserMutation();
    if (isError) {
        toast({
            title: (error as any).data.message,
            status: "error",
            duration: 5000,
        });
    }
    console.log(data);

    useEffect(() => {
        if (token) {
            verifyUser({ token });
        }
    }, [verifyUser, token]);
    return (
        <>
            {isLoading ? (
                <Spinner />
            ) : (
                <>
                    {isError && (
                        <Grid placeItems="center" h="100vh">
                            <Text>
                                Ошибка проверки электронной почты! Попробуйте еще раз
                            </Text>{" "}
                        </Grid>
                    )}
                    {isSuccess && (
                        <Grid placeItems="center" h="100vh">
                            <Heading>Пользователь проверен</Heading>
                        </Grid>
                    )}
                </>
            )}
        </>
    );
};

export default EmailVerify;