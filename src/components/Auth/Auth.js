import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const getUser = async () => {
  const data = await fetch(
    `${process.env.REACT_APP_BACKEND_HOST}/api/auth/current`,
    {
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  try {
    return await data.json();
  } catch (e) {
    console.log(e.message);
    return data;
  }
};

export const getPatient = async () => {
  let patientData;
  const user = await getUser();
  if (user?.id) {
    patientData = await fetch(
      `${process.env.REACT_APP_BACKEND_HOST}/api/patient/${user.id}?user_id=true`,
      {
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    return await patientData.json();
  }
};

export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState(null);
  const [role, setRole] = useState(null);

  useEffect(() => {
    getUser().then((user) => {
      if (user?.id) {
        setEmail(user.email);
        setRole(user.role);
      }
    });
  }, []);

  const login = (email, role) => {
    setEmail(email);
    setRole(role);
  };
  const logout = () => {
    setEmail(null);
    setRole(null);
  };
  return (
    <AuthContext.Provider value={{ email, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
