import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export const Footer = () => {
  return (

<footer className="text-black bg-slate-50 dark:bg-black dark:text-white py-12">
  <div className="container mx-auto px-4 flex flex-wrap justify-between">
    <div className="w-full text-center md:w-1/4 md:flex md:flex-col mb-6 md:mb-0">
      <h4 className="text-lg font-bold mb-4">Informazioni</h4>
      <ul className="list-none">
        <li>
        <Link to={'/'} >Home</Link>
        </li>
        <li><Link to={'/shop'} >Shop</Link></li>
        <li><Link to={'/chisiamo'} >Chi Siamo</Link></li>
        <li><Link to={'/contatti'} >Contatti</Link></li>
      </ul>
    </div>
    <div className="w-full text-center md:w-1/4 md:flex md:flex-col mb-6 md:mb-0">
      <h4 className="text-lg font-bold mb-4">Contatti</h4>
      <p>Email: Bag@gmail.com</p>
      <p>Telefono: +39 3475112131</p>
      <p>Indirizzo: Via Garibaldi, 12345 Città</p>
    </div>
    <div className="w-full  text-center md:w-1/4 md:flex md:flex-col mb-6 md:mb-0">
      <h4 className="text-lg font-bold mb-4">Social</h4>
      <div className="flex justify-center">
        <a href="#" className="mr-4">
          <FaInstagram className="h-6 w-6 text-black  dark:text-white"  />
        </a>
        <a href="#" className="mr-4">
          <FaFacebook className="h-6 w-6 text-black  dark:text-white" />
        </a>
        <a href="#" className="mr-4">
          <FaTiktok className="h-6 w-6 text-black  dark:text-white" />
        </a>
      </div>
    </div>
  </div>
  <div className="text-center">
    <p>Termini e condizioni / Privacy Policy</p>
  </div>
</footer>

  )
}

export default Footer