import React from 'react';
import { useLoginMutation } from '../features/auth/authApi';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom'


const LoginPage = () => {
    const [login, { data, isLoading, error }]:any = useLoginMutation()
    const navigate = useNavigate()
    interface loginData {
        email: string,
        password: string
    }

    const loginHandler = (data: loginData) => {
        login(data)
    };

    React.useEffect(() => {
        if (data?.data?._id) {
          navigate('/')
        }
        if (error?.data) {
        //   toast.error(error.data?.message || error?.error || 'Something Went Wrong')
        }
      }, [data, error, navigate])

    return (
        <>
            <div id="login-wrapper">
                <Formik
                    initialValues={{ email: '', password: '' }}
                    // validate={}
                    onSubmit={(values) => {
                        loginHandler(values)
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        /* and other goodies */
                    }) => (
                        <form
                            onSubmit={handleSubmit}
                        >
                            <header><h3>Login</h3></header>
                            <div className="form-row">
                                <label htmlFor='email'>Benutzername</label>
                                <input type="text"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Ihr Benutzername"
                                    value={values.email}
                                    name="email" />
                            </div>
                            <div className="form-row">
                                <label htmlFor='password'>Passwort</label>
                                <input type="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    placeholder="Ihr Passwort" required
                                    name="password" />
                            </div>
                            <div className="form-row">
                                <button className="btn-full btn-large"
                                    type="submit"
                                // disabled={!isValid()}
                                >Anmelden</button>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </>
    );
};

export default LoginPage;