
import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useSigninUserMutation } from "../../../store/api/authApi";
import { useAppDispatch } from "../../../store/hook";
import { setUser } from "../../../store/state/authSlice";


const Signin = () => {
    const dispatch = useAppDispatch();
    const [email, setEmail] = useState<string>(''); // Используйте хук useState для установки значения email
    const [password, setPassword] = useState<string>(''); // Используйте хук useState для установки значения password
    const toast = useToast();
    const navigate = useNavigate();
    const [signinUser, { data, isLoading, error, isError, isSuccess }] =
      useSigninUserMutation();
    console.log(data);
    if (isError) {
        toast({
            title: (error as any).data.message,
            status: 'error',
            duration: 5000,
        });
        if ((error as any).data.message === 'Пользователь не проверен') {
            navigate('/send-verify-mail', { state: { email } });
        }
    }
    if (isSuccess) {
        dispatch(setUser({ token: data.token, name: data.name }));
        navigate('/');
        localStorage.setItem('token', data.token);
    }
  
    console.log(error);
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        signinUser({ email, password });
    };
  
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };
  
    return (
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-10">
            <h2 className="text-xl font-bold text-center">Войти</h2>
            <div className="mb-4">
                <label htmlFor="email" className="block mb-2">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Введите Email..."
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block mb-2">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Введите Пароль..."
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    required
                />
            </div>
            <div className="flex items-center justify-between">
                <div>
                    <Link to="/forgot-password" className="text-blue-500">
                        Забыли пароль
                    </Link>
                </div>
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    disabled={isLoading}
                >
                    {isLoading ? 'Загрузка...' : 'Войти'}
                </button>
            </div>
        </form>
    );
};
  
export default Signin;
  
