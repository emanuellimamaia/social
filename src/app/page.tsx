import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaWhatsapp,FaLinkedin} from "react-icons/fa";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <div className="">
      <Image 
      className='border-4 border-emerald-400 w-72 h-72 rounded-full overflow-hidden'
      src="/Images/foto_perfil.jpg"
      alt='foto-perfil'
      width={200}
      height={200} />
     </div>
     <div className='p-4 text-emerald-400'>
      <Link href="https://www.instagram.com/_emanuelmaia_/">@_emanuelmaia_</Link>
     </div>
     <div className='flex flex-col text-gray-50' >
          <Link href="https://www.linkedin.com/in/emanuel-lima-maia-a222a7247/" className=" flex justify-center text-gray-400 border  hover:text-emerald-400  border-emerald-400 p-2 mt-2 h-12 w-80" >Linkedin</Link>
          <Link href="https://portifolio.emanuelmaia.site/" className=" flex justify-center text-gray-400 border  hover:text-emerald-400 border-emerald-400 p-2 mt-2 h-12 w-80 ">Portifolio</Link>
          <Link href="https://github.com/emanuellimamaia" className=" flex justify-center text-gray-400 border  hover:text-emerald-400 border-emerald-400 p-2 mt-2 h-12 w-80">Github</Link>
         
     </div>

     <div className="flex flex-row items-center justify-center w-6 h-60  ">
     
     <Link href="https://github.com/emanuellimamaia"   className='p-4 text-gray-400  hover:text-emerald-400'>
      <FaGithub></FaGithub>
     </Link >
     <Link href="https://wa.me/92991004322"  className='p-4 text-gray-400  hover:text-emerald-400' >
     <FaWhatsapp/>
     </Link>
     <Link href="https://www.linkedin.com/in/emanuel-lima-maia-a222a7247/"  className='p-4 text-gray-400  hover:text-emerald-400' >
      <FaLinkedin/>
     </Link>
     
     </div>
    </main>
  )
}
