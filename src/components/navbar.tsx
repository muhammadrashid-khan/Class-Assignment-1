import Link from 'next/link';
import Image from 'next/image';
export default function Navbar(){
    return (
        <nav>
            <div className="flex place-content-end mt-2 p-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-right">
            <Link href='/' className='bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:bg-orange-500 ... ml-2 p-1.5 rounded-lg bg-violet-400 font-bold'>Home</Link>
            <Link href='/dyeing' className='bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 ... ml-2 p-1.5 rounded-lg bg-violet-400  font-bold'>Dyeing</Link>
            <Link href='/knitting' className='bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 ... ml-2 p-1.5 rounded-lg bg-violet-400 font-bold'>Knitting</Link>
            <Link href='/ro' className='bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 ... ml-2 p-1.5 rounded-lg bg-violet-400 font-bold'>RO</Link>
            <Link href='/lab' className='bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 ... ml-2 p-1.5 rounded-lg bg-violet-400 font-bold'>Laboratory</Link>
            <br />
            </div>
        </nav>
    )
}