import Navbar from "@/components/navbar"

export default function Knitting(){
    return (
        <div>
            <Navbar />
            <h1 className= "bg-lime-200 border-yellow font-extrabold text-3xl text-center text-cyan-700 p-2">
                Welcome to Dyeing Knitting Department
            </h1>
            <p  className="font-serif font-bold text-2xl text-slate-500 text-center p-2">
                Knitting is a method for production of textile fabrics by interlacing yarn loops with loops of the same or other yarns.
            </p>
        </div>
    )
}