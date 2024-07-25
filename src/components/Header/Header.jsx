import slide from '../../assets/header.png'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <>
   
      <header className="h-24 ">
      <nav className="pt-12 flex items-center justify-center">
     <NavLink to='/'> <img src={slide} height={18} width={64}/> </NavLink>
      <p className="font-quicksand font-bold uppercase  text-custom-green text-3xl" >SlideShare</p>
      </nav>
      </header>
   
    </>
  )
}

export default Header