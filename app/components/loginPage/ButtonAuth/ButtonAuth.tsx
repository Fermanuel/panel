"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export const ButtonAuth = () => {
  const { data: session, status } = useSession();

  console.log({session, status});
  

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (session) {
    return (
      <>
        {/* Signed in as {session.user?.email} <br /> */}
        <button
          onClick={() => signOut()}
          className="text-sm "
        >
          Cerrar Sesion
        </button>
      </>
    );
  }
  return (
    <>
      <button
        onClick={() => signIn()}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Iniciar Sesion
      </button>
    </>
  );
}
