import React,{ useState,useRef } from 'react';
import { Navbar,NavbarBrand,NavbarBurger,NavbarItem,NavbarMenu,NavbarEnd,Container } from 'bloomer';
import logo from '../assets/page-logo.png';
import { GrInstagram } from 'react-icons/gr';
import { FaFacebookSquare } from 'react-icons/fa';

function Header() {
    const [isActive,setIsActive] = useState(false);
    const clickNav = () => {
        setIsActive(!isActive);
    }
    const [scroll,setScroll] = useState(false);
    const end = useRef();
    const scrollElement = () => {
        end.current.scrollIntoView(
            { behavior:'smooth' }
        )
    }
    if(scroll){
        scrollElement();
        setTimeout(()=> {
            setScroll(false);
        },2000);
    }
    const handleInsta = ()=>{
        window.open('https://instagram.com/empire_design_company?igshid=16zt8vgiagmb3', '_blank');
    }
    const handleFace = () => {
        window.open('https://facebook.com/pages/category/Product-Service/Empire-Design-company-108131541031497/', '_blank');
    }
    return (
        <Navbar  className="navbar is-info py-2">
            <Container>
                <NavbarBrand>
                    <NavbarItem>
                        <img  src={logo} alt="page logo"/>{' '}
                        <h3 className="is-size-5 ">Empire Design Company</h3> 
                    </NavbarItem>
                    <NavbarBurger isActive={isActive} onClick={clickNav} />
                </NavbarBrand>
                <NavbarMenu className="is-dark" isActive={isActive} onClick={clickNav}>
                    <NavbarEnd>
                        <NavbarItem onClick={handleInsta} isHoverable href='#'><GrInstagram size={28}/></NavbarItem>
                        <NavbarItem  onClick={handleFace} isHoverable href='#'><FaFacebookSquare size={28} /></NavbarItem>
                    </NavbarEnd>
                </NavbarMenu>
            </Container>
        </Navbar>
    )
}

export default Header;
