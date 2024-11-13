import Navbar from "@/components/navbar";
import Image from 'next/image';

export default function RO(){
    return (
        <div>
            <Navbar />
            <h1 className= "bg-green-100 border-yellow font-extrabold text-3xl text-center text-cyan-700 p-2"> Welcome to RO Plant</h1>
            <p className="font-serif font-bold text-slate-500 text-center p-2">
                We have a capacity to produce upto 500,000 Imp Gallon high quality RO Water<br />
                Our aim is to maximize recycling waste water and reducing reject water to make our environment green.
            </p>
        </div>
    )
}
