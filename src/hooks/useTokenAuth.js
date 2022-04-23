import { useContext } from "react";
import TokenContext from "../context/UserContext";

const useTokenAuth = () => {
    const { token } = useContext(TokenContext);

    return [token];
}

export default useTokenAuth;