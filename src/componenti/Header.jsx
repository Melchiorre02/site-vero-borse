import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, Button, NavbarMenuItem} from "@nextui-org/react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MoonIcon } from "./icons/MoonIcon";
import { SunIcon } from "./icons/SunIcon";
import { useTheme } from "../providers/ThemeProvider";
import Carrello from "./icons/Carrello";
import User from "./icons/User";
import { useShop } from "../providers/ShopProvider";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {darkMode,setDarkMode}= useTheme();
    const {borse} = useShop();
  return (
    <Navbar shouldHideOnScroll classNames={{  wrapper: 'max-w-6xl '}} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
        <div>
          <Link to ={"/"}><img className=" w-24" src="/logo.png"></img></Link>
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
        <NavLink to={"/"} className={({isActive}) => isActive ? ' underline font-bold' : ''}>Home</NavLink>
        </NavbarItem>
        <NavbarItem >
        <NavLink to ={"shop"} className={({isActive}) => isActive ? 'underline font-bold' : ''}>Shop</NavLink>
        </NavbarItem>
        <NavbarItem>
        <NavLink to ={"chisiamo"} className={({isActive}) => isActive ? 'underline font-bold' : ''}>Chi Siamo</NavLink>
        </NavbarItem>
        <NavbarItem>
        <NavLink to ={"contatti"} className={({isActive}) => isActive ? ' underline font-bold' : ''}>Contatti</NavLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem >
        <NavLink to ={"login"} className={({isActive}) => isActive ? ' font-bold' : ''}> <User /></NavLink>
        </NavbarItem>
      <NavbarItem>
        <Button isIconOnly size="sm" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <MoonIcon/> : <SunIcon />}
        </Button>
      </NavbarItem>
        <NavbarItem className=" w-10 h-10 relative ">
          <Link to={'carrello'} >
            <Carrello  />
            <div className="flex items-center justify-center w-7 h-7 bg-black rounded-full dark:bg-white relative -translate-x-1/2  -translate-y-1/2 top-[-36px] left-[40px] ">
            <span className="absolute top-[14px] left-[14px] transform -translate-x-1/2  -translate-y-1/2 text-[17px] dark:text-black text-white">{borse.length}</span>
            </div>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem >
          <Link  to={'/'}>Home</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link to={'shop'}>Shop</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link to={'chisiamo'}>Chi Siamo</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link to={'contatti'}>Contatti</Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}

export default Header