import { authUserSession } from "@/libs/auth-libs"
import Image from "next/image"


const Page = async () => {
    const user = await authUserSession()
    

    return(
        <div className="flex flex-col justify-center items-center">
            <h5 className="text-2xl font-bold">Welcome, {user.name}</h5>
            <Image src={user?.image} alt="" width={350} height={350} />
        </div>
    )
}

export default Page