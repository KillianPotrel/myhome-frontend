import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { usePostUserRegister } from "../api/User"
import Input from "../components/Input";
import { Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] =  useState({
    email: "",
    password: "",
    firstname: "",
    birthday: null,
    lastname: null,
    avatar: null
  });

  const userRegister = usePostUserRegister();

  useEffect(() => {
    if (userRegister.isSuccess) {
      navigate("/login");
    }
  })

  const onChange = (e : any) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e : any) => {
    userRegister.mutate(credentials)
  };

  return (
    <div className="bg-no-repeat bg-cover bg-left-top bg-famille min-h-screen">
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="images/logo.png"
            alt="MyHome"
          />
        </div>

        <div className="mt-8 mx-4 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white rounded-md py-8 px-4 shadow sm:rounded-lg sm:px-10 opacity-95">
            <h2 className="text-center text-3xl font-bold tracking-tight text-amber-400">
              Inscription à MyHome
            </h2>
            <div className="space-y-6">
              <div>
                <Input
                  id="firstname"
                  label="Prénom"
                  type="text"
                  value={credentials.firstname}
                  onChange={onChange}
                />
              </div>
              <div>
                <Input
                  id="email"
                  label="Email"
                  name="email"
                  type="email"
                  value={credentials.email}
                  onChange={onChange}
                />
              </div>
              <div>
                <Input
                  id="password"
                  label="Mot de passe"
                  name="password"
                  type="password"
                  required
                  value={credentials.password}
                  onChange={onChange}
                />
              </div>
              <div>
                <button
                  type='button'
                  onClick={onSubmit}
                  className="flex w-full justify-center rounded-md border border-transparent bg-amber-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                >
                  Inscription
                </button>
              </div>
            </div>
            <div className="text-sm mt-4">
              <Link to={"/login"}
                className="font-medium text-amber-400 hover:text-amber-500 cursor-pointer">
                Déjà un compte ? Connectez-vous
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
