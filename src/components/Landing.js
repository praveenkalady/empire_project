import React,{ useState,useRef }from 'react';
import { motion } from 'framer-motion';

function Landing(props) {
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
    return (
        <div className="landing " >
            <div className="overlay">
            <div className="landing__container ">
                <div className="landing__content">
                    <motion.h1 initial={{opacity:0,x:'-100vw'}} animate={{opacity:1,x:0}} transition={{stiffness:120,duration:2,dumping:20}} className="mb-4 is-size-1 has-text-weight-bold has-text-white">We Don't build, we create !</motion.h1>
                   <motion.button   onClick={()=> setScroll(true)}  className="btn button is-info" whileHover={{ boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',scale:1.2}} >Contact us</motion.button>
                </div> 
            </div>
            </div>
            <div ref={end}></div>
        </div>
    )
}

export default Landing;
