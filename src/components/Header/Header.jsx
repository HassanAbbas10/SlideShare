import slide from '../../assets/header.png'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <>
   
      <header className="h-24 ">
        
      <nav className="pt-12 flex cursor-pointer items-center justify-center border border-black hover:shadow-xl
      hover:shadow-custom-teal hover:border-b-0 hover:rounded-b-full duration-700">
     <NavLink to='/'> <img src={slide} height={18} width={64}/> </NavLink>
      <p className="font-quicksand font-bold uppercase  text-custom-green text-3xl" >SlideShare</p>
      </nav>
      </header>
   
    </>
  )
}

export default Header