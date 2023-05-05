import { useApp } from "@realm/react";
import { Credentials } from "realm";
import { useEffect } from "react";

export default Login = () => {
  const app = useApp();
  const credentials = Credentials.anonymous();

  useEffect(() => {
    const loginUser = async () => {
      try {
        const user = await app.logIn(credentials);
        console.log("Successfully logged in!", user.id);
        return user;
      } catch (err) {
        console.error("Failed to connect", err.message);
      }
    };
    loginUser();
  }, []);
};
