import { Router, Request, Response } from "express";
import User, { IUser } from "../model/User";
import {
  sendVerificationMail,
  signinUser,
  signupUser,
  verifyUserMail,
  sendForgotPasswordMail,
  verifyForgotMail,
} from "../controllers/userControllers";
import {
  signupUserValidation,
  signinUserValidation,
  verifyUserMailValidation,
  sendVerificationMailValidation,
  verifyForgotMailValidation,
  sendForgotPasswordMailValidation,
} from "../validation/userValidation/userValidation";

const router = Router();

router.post("/signup", signupUserValidation, signupUser);
router.post("/signin", signinUserValidation, signinUser);

router.post(
    "/send-verification-mail",
    sendVerificationMailValidation,
    sendVerificationMail
);

router.post("/verfiy-user-mail", verifyUserMailValidation, verifyUserMail);

router.post(
    "/verify-forgot-mail",
    verifyForgotMailValidation,
    verifyForgotMail
);
router.post(
    "/forgot-password",
    sendForgotPasswordMailValidation,
    sendForgotPasswordMail
);

// Роут для загрузки фото пользователя
// router.post("/users/:userId/photo", async (req: Request, res: Response) => {
//   const userId = req.params.userId;
//   const photo = req.body.photo; // Предполагается, что фото передается в теле запроса

//   try {
//     // Найдите пользователя по идентификатору
//     const user: IUser | null = await User.findById(userId);

//     if (!user) {
//       return res.status(404).json({ error: "Пользователь не найден" });
//     }

//     // Обновите поле фото пользователя
//     user.photo = photo;

//     // Сохраните изменения
//     await user.save();

//     return res.json({ message: "Фото успешно добавлено" });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: "Внутренняя ошибка сервера" });
//   }
// });

export default router;