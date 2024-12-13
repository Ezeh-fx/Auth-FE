import { useState } from "react"
import { signUp } from "../../Utils/AuthAPI"

const SignUp = () => {

    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = ((res : any) => {
        res.preventDefault()
        // const { userName, email, password } = res;
        // console.log({ userName, email, password });
        signUp({ userName, email, password }).then(() => {
            console.log("Success");
        })
        // console.log("res",res);
        
    }) 
    
    return (
        <div>
            <div className="w-full h-[100vh] flex flex-col items-center justify-center">
                <form className="w-[350px] h-[370px] border border-black p-3 rounded-lg" onSubmit={handleSubmit}>
                    <p className="text-center font-bold text-[25px]">SignUp</p>
                    <div className="my-8 relative">
                        <label htmlFor="userName" className="text-[12px] bg-white absolute left-[20px] top-[-10px]">UserName</label>
                        <input type="text" className="w-full border border-black h-[40px] outline-none pl-1" placeholder="Enter userName" value={userName} onChange={(e) => { setUserName(e.target.value) }} />
                    </div>
                    <div className="my-8 relative">
                        <label htmlFor="userName" className="text-[12px] bg-white absolute left-[20px] top-[-10px]">Email</label>
                        <input type="text" className="w-full border border-black h-[40px] outline-none pl-1" placeholder="Enter Email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                    <div className="my-8 relative">
                        <label htmlFor="userName" className="text-[12px] bg-white absolute left-[20px] top-[-10px]">Password</label>
                        <input type="text" className="w-full border border-black h-[40px] outline-none pl-1" placeholder="Enter Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                    <div className="w-full flex justify-center">
                        <button className="py-3 px-10 bg-blue-400 rounded-md mb-[20px] " type="submit">SignUp</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp
