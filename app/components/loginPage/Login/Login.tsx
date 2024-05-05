import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Card, Divider, TextInput } from "@tremor/react";
import { useState } from "react";

export const Login = () => {
  const [errors, setErrors] = useState<string[]>([]);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors([]);

    const responseNextAuth = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (responseNextAuth?.error) {
      setErrors(responseNextAuth.error.split(","));
      return;
    }

    router.push("/dashboard/panel");
  };

  return (
    <div>
      <Card className="px-8 py-6 max-w-md">
        <div className="flex min-h-full flex-1 flex-col justify-center px-4 py-10 lg:px-6">

          <div className="sm:mx-auto sm:w-full sm:max-w-sm">

            <div className="logoImagen">
              <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmY1cjZ0cjAzY3Y4bzJmbnl2bXUwaTMybWRmNDE3eTg5ZDk1YWpqeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/LbUYCbgVZUkai24CaF/giphy.gif" alt="logo" className="w-20 h-50 mx-auto" />
            </div>

            <h3 className="text-center text-tremor-title font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Inicia Sesion
            </h3>

            <Divider/>

            <form onSubmit={handleSubmit} method="post" className="mt-6">
              <div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                  >
                    Correo electrónico
                  </label>
                  <TextInput
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    placeholder="doctor@itt.com"
                    className="mt-2"
                    
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
                  >
                    Contraseña
                  </label>

                  <TextInput
                    type="password"
                    id="password"
                    name="password"
                    autoComplete="password"
                    placeholder="Contraseña"
                    className="mt-2"
                    
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-4 w-full whitespace-nowrap rounded-tremor-default bg-tremor-brand py-2 text-center text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis"
              >
                Inicia Sesion
              </button>
            </form>
            
            <Divider/>

            <p className="mt-4 text-tremor-label text-tremor-content dark:text-dark-tremor-content">
              sistema administrativo{" "}
              <a href="#" className="underline underline-offset-4">
                derechos reservados
              </a>{" "}
              y{" "}
              <a href="#" className="underline underline-offset-4">
                politica de privacidad
              </a>
              .
            </p>
          </div>
        </div>
      </Card>

      {errors.length > 0 && (
        <div className="fixed inset-x-0 bottom-14 z-50 mx-auto max-w-md pt-3">
          <div
            className="p-4 text-sm text-red-700 bg-red-100 rounded-lg"
            role="alert"
          >
            <span className="font-bold">¡Error de credenciales!</span> Cambia
            algunas cosas e intenta enviar nuevamente.
            <ul className="mt-2">
              {errors.map((error) => (
                <li key={error} className="text-red-500">
                  {error}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
