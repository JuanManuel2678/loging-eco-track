import { Createbuton } from "../components/Createbuton"
import { Header } from "../components/Header"
import { Lenguabuton } from "../components/Lenguabuton"
import { Loginformulario } from "../components/Loginformulario"
import { Modonoche } from "../components/Modonoche"

 
 
 
 
 export const Login = () => {

    return (
        <main className="h-screen w-screen flex flex-col  justify-center items-center  ">
            <div className="w-[474px] h-[800px] border rounded-3xl px-14 py-10 ">
                <Header/>
            <div className="w-full h-[70%]">
                <Loginformulario/>
                <Createbuton/>
                <Lenguabuton/>
            </div>
                <Modonoche/>
            </div>

        </main>
    )

}