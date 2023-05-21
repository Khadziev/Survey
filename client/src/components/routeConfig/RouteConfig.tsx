import { RouteProps } from "react-router-dom"
import { AboutPageAsync as AboutPage } from "../../pages/aboutPage/AboutPage.async"
import { MainPageAsync as MainPage } from "../../pages/mainPage/MainPage.async"
import NotFaundPage from "../../pages/notFaundPage/NotFaundPage"
import Signup from "../../pages/authorization/Signup/Signup"
import Signin from "../../pages/authorization/Signin/Signin"
import ChangePassword from "../../pages/authorization/ChangePassword/ChangePassword"
import ForgotPassword from "../../pages/authorization/ForgotPassword/ForgotPassword"
import EmailVerify from "../../pages/authorization/EmailVerify/EmailVerify"
import SendEmail from "../../pages/authorization/SendEmail/SendEmail"



export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  NOT_FOUND = "not_found",


  SIGNUP = "signup",
  SIGNIN = "signin",
  FORGOTPASSWORDVERIFY="forgot-password-verify",
  FORGOTEMAILVERIFY="forgot-email-verify",
  FORGOTPASSWORD='forgot-password',
  SENDVERIFYMAIL='send-verify-mail',

}

export const RoutePatch: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.NOT_FOUND]: '*',

    // auth
    [AppRoutes.SIGNUP]: "/signup",
    [AppRoutes.SIGNIN]: "/signin",
    [AppRoutes.FORGOTPASSWORDVERIFY]: "/forgot-password-verify/:token",
    [AppRoutes.FORGOTEMAILVERIFY]: "/email-verify/:token",
    [AppRoutes.FORGOTPASSWORD]: "/forgot-password",
    [AppRoutes.SENDVERIFYMAIL]: '/send-verify-mail'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePatch.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePatch.about,
        element: <AboutPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePatch.not_found,
        element: <NotFaundPage />,
    },
    [AppRoutes.SIGNUP]: {
        path: RoutePatch.signup,
        element: <Signup/>
    },
    [AppRoutes.SIGNIN]: {
        path: RoutePatch.signin,
        element: <Signin/>
    },
    [AppRoutes.FORGOTPASSWORDVERIFY]: {
        path: RoutePatch["forgot-password-verify"],
        element: <ChangePassword/>
    },
    [AppRoutes.FORGOTEMAILVERIFY]: {
        path: RoutePatch["forgot-email-verify"],
        element: <EmailVerify/>
    },
    [AppRoutes.FORGOTPASSWORD]: {
        path: RoutePatch["forgot-password"],
        element: <ForgotPassword/>
    },
    [AppRoutes.SENDVERIFYMAIL]: {
        path: RoutePatch["send-verify-mail"],
        element: <SendEmail/>
    },
}
