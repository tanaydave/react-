import { useForm } from "react-hook-form"

export const Form = ()=>{
    const {register,handleSubmit}=useForm();
    const onSubmit=(data)=>{
        console.log(data)
    }
    return(
        
           
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Full Name..." {...register("FullName")} />
            <input type="text" placeholder="Email..." {...register("Email")} />
            <input type="number" placeholder="Age..." {...register("Age")} />
            <input type="password" placeholder="Password..." {...register("Password")} />
            <input type="password" placeholder="Confirm Password..." {...register("ConfirmPassword")} />
            <input type="submit"/>

        </form>
    )

}