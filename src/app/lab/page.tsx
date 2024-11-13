import Navbar from "@/components/navbar"

export default async function Lab(){
    await new Promise(
        (resolve)=>{
            setTimeout(resolve,1000);
        }
    );
        return (
        <div>
            <Navbar />
            <h1 className= "font-extrabold text-center text-4xl p-2 text-orange-500">
                Welcome to Quality Assuarance Laboratory
            </h1>
            <p className="font-serif font-bold text-2xl text-slate-500 text-center p-2">
                Here all types of tests are being performed from raw material testings to finished fabrics <br /> using latest equipments.
            </p>
        </div>
     )
}           
