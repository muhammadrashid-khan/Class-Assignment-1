import Navbar from "@/components/navbar"

export default async function Dyeing(){
    await new Promise(
        (resolve)=>{
            setTimeout(resolve,2000);
        }
    );
    return (
        <div>
            <Navbar />
            <h1 className= "font-extrabold text-center text-4xl p-2 text-orange-500">
                Welcome to Dyeing Production Department</h1>
            <p className="font-serif font-bold text-2xl text-slate-500 text-center m-2 p-2">Here Reactive Dyeing is performed in modern low liquor ratio Dyeing Machines.</p>
            
        </div>
    )
}           
