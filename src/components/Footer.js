import React from 'react';
import { Container,Button } from 'bloomer';
import { GrInstagram } from 'react-icons/gr';
import { FaFacebookSquare } from 'react-icons/fa';

function MainFooter() {
    const handleInsta = ()=>{
        window.open('https://instagram.com/empire_design_company?igshid=16zt8vgiagmb3', '_blank');
    }
    const handleFace = () => {
        window.open('https://facebook.com/pages/category/Product-Service/Empire-Design-company-108131541031497/', '_blank');
    }
    return (
        <div className="footer__main " >
            <Container>
            <div className="footer__container">
                <div className="is-flex">
                   <Button className="mr-4"><GrInstagram style={{color:'#7d3f98'}} onClick={()=> handleInsta()} size={30} /></Button>
                   <Button><FaFacebookSquare style={{color:'#3d5af1'}} onClick={()=> handleFace()} size={30} /></Button>
                </div>
                <p className="has-text-white">Copyright &copy; 2020</p>
            </div>
            </Container>
        </div>
    )
}

export default MainFooter;
