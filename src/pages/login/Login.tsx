import { useDispatch } from "react-redux";
import { login } from "../../redux/features/userSlice";

function Login() {
  const dispatch = useDispatch();

  const handleLogin = () => {
    setTimeout(() => {
      dispatch(
        login({
          name: "LinhNe",
          loggedIn: true,
        })
      );
    }, 2000);
  };
  return (
    <div className="flex flex-col space-x-10">
      <h1>Login</h1>

      <button
        onClick={handleLogin}
        className="bg-red-500 border max-w-[300px] text-center"
      >
        Login
      </button>
    </div>
  );
}

export default Login;
