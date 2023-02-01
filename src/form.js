import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup";


const schema =yup.object().shape({
    FullName: yup.string("ENTER A VALID FULL NAME").required("YOUR FULL NAME IS REQUIRED"),
    Email: yup.string().email().required(),
    Age: yup.number().positive().min(18).required(),
    Password: yup.string().min(4).max(20).required(),
    ConfirmPassword: yup.string().oneOf([yup.ref("Password"),null],"Passwords don't match").required(),

});
export const Form = ()=>{
    const {register,handleSubmit,formState:{errors}}=useForm({
        resolver:yupResolver(schema),
    });

    const onSubmit=(data)=>{
        console.log(data)
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Full Name..." {...register("FullName")} />
            <p>{errors.FullName?.message}</p>
            <input type="text" placeholder="Email..." {...register("Email")} />
            <p>{errors.Email?.message}</p>
            <input type="number" placeholder="Age..." {...register("Age")} />
            <p>{errors.Age?.message}</p>
            <input type="password" placeholder="Password..." {...register("Password")} />
            <p>{errors.Password?.message}</p>
            <input type="password" placeholder="Confirm Password..." {...register("ConfirmPassword")} />
            <p>{errors.ConfirmPassword?.message}</p>
            <input type="submit"/>
            
        </form>
    )
}