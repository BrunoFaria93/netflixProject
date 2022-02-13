import api from "../services/api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { createContext, useCallback, useContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(() => {
    const token = localStorage.getItem("@netflix:accessToken");
    const user = localStorage.getItem("@netflix:user");

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {};
  });

  const history = useHistory();

  const login = useCallback(async ({ email, password }) => {
    try {
      const response = await api.post("/login", { email, password });

      const { accessToken, user } = response.data;

      localStorage.setItem("@netflix:accessToken", accessToken);
      localStorage.setItem("@netflix:user", JSON.stringify(user));

      setUserData({ accessToken, user });
      toast.success("Login efetuado com sucesso!");
      history.push("/dashboard");
    } catch (err) {
      toast.error("Email ou senha errada!");
    }
  }, []);

  const logout = () => {
    localStorage.clear();

    setUserData({});
    toast.success("Volte sempre!");
    history.push("/");
  };

  const updateUser = (data) => {
    if (userData) {
      const { token } = userData;
      const { id } = userData.user;

      api
        .patch(`/users/${id}/`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUserData({ ...userData, user: response.data });
          localStorage.setItem("@habits:user", JSON.stringify(response.data));
          toast.success("Nome de usuário ou email alterado com sucesso");
        })
        .catch((error) => toast.error("Nome de usuário já está em uso"));
    }
  };

  return (
    <UserContext.Provider
      value={{
        userData,
        login,
        logout,
        updateUser,
        token: userData.accessToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
