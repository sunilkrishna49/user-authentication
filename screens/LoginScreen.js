import { useContext, useState } from "react";
import { Alert } from "react-native";
import AuthContent from "../components/Auth/AuthContent";
import { signInUser } from "../fireBase/authService";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { AuthContext } from "../store/authContext";

function LoginScreen() {
  const authCtx = useContext(AuthContext);
  const [isLogging, setIsLogging] = useState(false);
  const signInHandler = async ({ email, password }) => {
    setIsLogging(true);
    try {
      const token = await signInUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert("Authentication Failed! Please check your credentials");
    }
    setIsLogging(false);
  };

  if (isLogging) {
    return <LoadingOverlay message="Logging In.." />;
  }

  return <AuthContent isLogin onAuthenticate={signInHandler} />;
}

export default LoginScreen;
