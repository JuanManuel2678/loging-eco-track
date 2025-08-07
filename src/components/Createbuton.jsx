import { Link } from "react-router"



export const Createbuton = () => {


    return (
        
        <button className="h-[58px] w-full border-4 border-green-700 text-2xl font-medium mt-[20px] text-center bg-amber-200 cursor-pointer hover:border-amber-200 hover:bg-green-700 hover:text-white">
            <Link to="/register">Create an Account</Link>
        </button>
        
    )
}