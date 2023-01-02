import {useQuery} from '@tanstack/react-query';


export const Home=()=>{
    
        const {data,isLoading,refetch}=useQuery(["factos"], ()=>{
            return (
            fetch("https://catfact.ninja/fact")
            .then((res)=>res.json())
            .then((data)=>(data))
            )
        });
        if(isLoading){
            return(
                <h1>LOADING...</h1>
            )
        }
        return(
           
        <h1>this is home page 
            <p>
               
                {data?.fact}
            </p>
            <button onClick={refetch}>update fact</button>
        </h1>
    )
    
}