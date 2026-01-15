import React, { createContext, useState } from 'react';


export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [user, setUser]= useState({
    name: "Hunter Norton",
    email: "hunter.dev@skillswap.com",
    image: "",
    onelineBio:"I'm a creative PHP webdeveloper.",
    bio: "I am an allround web developer. I am a senior programmer with good knowledge of front-end techniques. Vitae sapien pellentesque habitant morbi tristique senectus et. Aenean sed adipiscing diam donec adipiscing tristique risus."
  })

  const authData ={
    user,
    setUser,
  };

    return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;