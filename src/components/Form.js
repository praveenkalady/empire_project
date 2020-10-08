import React,{ useState } from 'react';
import { Field,Label,Control,Input,Container,TextArea,Modal,ModalBackground,ModalContent,ModalClose,ModalCard,ModalCardBody } from 'bloomer';
import { motion } from 'framer-motion';


function Form() {
    const [status,setStatus] = useState(false);
    const submitForm = (ev) => {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            form.reset();
            setStatus(true);
          } else {
            setStatus(false);
          }
        };
        xhr.send(data);
    }
    const [showModel,setShowModel] = useState(false);
    return (
        <Container>
        <div className="modal__container" >
        <Modal  isActive={showModel}>
            <ModalBackground />
            <ModalContent>
                <ModalCard className="modal__card">
                    <ModalCardBody>
                        <div className="modal__content">
                        <h1 className="is-size-2">Thank You for your message !</h1>
                        <p className="subtitle has-text-centered">We'll Connect you soon</p>
                        <motion.button whileHover={{ boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',scale:1.2}} onClick={()=>setShowModel(false)} className="btn is-info button">Close</motion.button>
                        </div>
                    </ModalCardBody>
                </ModalCard>
            </ModalContent>
            <ModalClose />
        </Modal>
        </div>
        <form
        onSubmit={submitForm}
        action="https://formspree.io/f/moqpjlng"
        method="POST"
        >
        <div className="form__container">
        <div className="is-flex">
            <Field>
                <Label>Name</Label>
                <Control className="mr-2" >
                    <Input name="name" type="text" placeholder='Enter Your Name' />
                </Control>
            </Field>
            <Field>
                <Label>Email</Label>
                <Control>
                    <Input type="email" name="email" placeholder='Enter Your Email Address' />
                </Control>
            </Field>
            </div>
            <div className="form__message ">
            <Field>
            <Label>Message</Label>
                <Control>
                    <TextArea  name="message" placeholder="Message" />
                </Control>
            </Field>
            </div>
            <Control>
                 <motion.button whileHover={{ boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',scale:1.2}} onClick={() =>setShowModel(true)} type="submit" className="mt-4 btn button is-info" isColor='info'>Submit</motion.button>
            </Control>
            </div>
        </form>   
        </Container> 
    )
}

export default Form;
