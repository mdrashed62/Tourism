
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin, githubLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
 

  const handleSocialLogin = async (socialProvider) => {
    try {
      const result = await socialProvider();
      console.log("Login successful:", result.user);
      navigate(location?.state ? location.state : "/");
    } catch (error) {
      console.error("Social login error:", error);
    }
  };

  return (
    <div className="flex justify-evenly mb-4">
      <div>
        <button
          onClick={() => handleSocialLogin(googleLogin)}
          className="btn btn-sm bg-pink-500"
        >
          Google
        </button>
      </div>
      <div>
        <button
          onClick={() => handleSocialLogin(githubLogin)}
          className="btn btn-sm bg-pink-500"
        >
          GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;