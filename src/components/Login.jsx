import { assets } from "../assets/assets";

const Login = () => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <form className="relative bg-white p-10 rounded-xl text-slate-500">
        <h1 className="text-center text-2xl text-neutral-700">Login</h1>
        <p className="text-sm text-center">
          Welcome back! Please sign in to continue.
        </p>

        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
          <img
            src={assets.profile_icon}
            alt="Profile Icon"
            className="w-5 h-5"
          />
          <input
            type="text"
            placeholder="Username or Email"
            required
            className="outline-none text-sm flex-1"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
