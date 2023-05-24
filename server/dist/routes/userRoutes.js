"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userControllers_1 = require("../controllers/userControllers");
var userValidation_1 = require("../validation/userValidation/userValidation");
var router = (0, express_1.Router)();
router.post("/signup", userValidation_1.signupUserValidation, userControllers_1.signupUser);
router.post("/signin", userValidation_1.signinUserValidation, userControllers_1.signinUser);
router.post("/send-verification-mail", userValidation_1.sendVerificationMailValidation, userControllers_1.sendVerificationMail);
router.post("/verfiy-user-mail", userValidation_1.verifyUserMailValidation, userControllers_1.verifyUserMail);
router.post("/verify-forgot-mail", userValidation_1.verifyForgotMailValidation, userControllers_1.verifyForgotMail);
router.post("/forgot-password", userValidation_1.sendForgotPasswordMailValidation, userControllers_1.sendForgotPasswordMail);
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
exports.default = router;
