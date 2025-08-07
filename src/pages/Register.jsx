import { Header } from "../components/Header";
import { Registerformulario } from "../components/Registerformulario";
import { Link } from "react-router";

export const Register = () => {
  return (
    <main className="h-screen w-screen flex flex-col  justify-center items-center  ">
      <div className="w-[474px] h-[800px] border rounded-3xl px-14 py-10 ">
        <Header />
        <div className="w-full h-[70%]">
          <Registerformulario />
        </div>

    <button className="h-[58px] w-full border-4 border-green-700 text-xl font-medium mt-[20px] text-center bg-amber-200 cursor-pointer hover:border-amber-200 hover:bg-green-700 hover:text-white">
            <Link to="/">Already a member back to Login</Link>
        </button>


      </div>
    </main>
  );
};
