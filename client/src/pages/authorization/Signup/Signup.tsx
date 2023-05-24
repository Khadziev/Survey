import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useSignupUserMutation } from '../../../store/api/authApi';

interface FormValues {
  name: string;
  email: string;
  password: string;
  photo?: string;
}

const Signup: React.FC = () => {
    const [signupUser, { data, isLoading }] = useSignupUserMutation();
    console.log(data);

    const handleSubmit = (values: FormValues) => {
        signupUser({ ...values });
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <Formik
                initialValues={{ name: '', email: '', password: ''}}
                onSubmit={handleSubmit}
            >
                <Form className="w-full max-w-md bg-white shadow-md rounded-md px-8 pt-6 pb-8">
                    <h2 className="text-2xl font-semibold mb-6 text-center">Регистрация</h2>
                    <div className="mb-4">
                        <label htmlFor="photo" className="block mb-2">
                            Фото URL 
                        </label>
                        <Field
                            type="text"
                            id="photo"
                            name="photo"
                            placeholder="Введите URL картинки..."
                            className="w-full border border-gray-300 rounded-md px-3 py-2"
                        />
                        <ErrorMessage name="photo" component="div" className="text-red-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-2">
                            Имя
                        </label>
                        <Field
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Введите Имя..."
                            className="w-full border border-gray-300 rounded-md px-3 py-2"
                        />
                        <ErrorMessage name="name" component="div" className="text-red-500" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2">
                            Email
                        </label>
                        <Field
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Введите Email..."
                            className="w-full border border-gray-300 rounded-md px-3 py-2"
                        />
                        <ErrorMessage name="email" component="div" className="text-red-500" />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2">
                            Пароль
                        </label>
                        <Field
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Введите Пароль..."
                            className="w-full border border-gray-300 rounded-md px-3 py-2"
                        />
                        <ErrorMessage name="password" component="div" className="text-red-500" />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-teal-500 text-white font-semibold py-2 rounded-md"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Загрузка...' : 'Зарегистрироваться'}
                    </button>
                </Form>
            </Formik>
        </div>
    );
};

export default Signup;



