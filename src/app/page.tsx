import Navbar from "@/components/navbar"
import Image from "next/image"

export default function Home(){
  return(
    <div>
      <Navbar />
      <h1 className="font-sans text-3xl font-extrabold text-center text-slate-700 p-2">
        Hi, I'm </h1>
        <h1 className="font-serif font-extrabold text-4xl text-center text-orange-600">Muhammad Rashid Khan </h1>
        <h1 className="font-serif text-3xl text-center font-extrabold text-slate-700 p-2">
          Welcome to My Home Page</h1>
     
      </div>
  )
}