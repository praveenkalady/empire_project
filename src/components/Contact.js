import React from 'react';
import { Columns,Column,Title } from 'bloomer';
import { FiPhoneCall } from 'react-icons/fi';
import { GrMail } from 'react-icons/gr';
import { ImLocation2 } from 'react-icons/im';
import Form from './Form';

function Contact() {
    return (
        <>
            <Columns className="mb-0" isCentered >
                <Column className="has-text-centered contact__touch "  isSize={{mobile:12}} >
                    <Title className="contact__head1">GET IN TOUCH</Title>
                    <p className="is-size-5 ">Connect with our team and ship your dream project !</p>
                    <div className="contact__container">
                    <div className="is-flex mt-5 pl-5">
                        <FiPhoneCall style={{color:'#3d5af1'}} size={30} />
                        <div className="pl-5">
                            <p>+91 97455 37682</p>
                            <p>+91 96331 98682</p>
                        </div>
                    </div>
                    <div className="is-flex mt-5 pl-5">
                    <GrMail style={{color:'#3d5af1'}} size={30} />
                    <div className="pl-5">
                        <p>empire.design360@gmail.com</p>
                    </div>
                </div>
                <div className="is-flex mt-5 pl-5">
                    <ImLocation2 style={{color:'#3d5af1'}} size={30} />
                    <div className="pl-5">
                        <p>Eddapal, Malappuram, Kerala</p>
                    </div>
                </div>
                </div>
                </Column>
                <Column className="contact__form p-4" isSize={{mobile:12}} >
                    <Title className="has-text-centered contact__header2">SEND US A MESSAGE</Title>
                    <p className="is-size-5 mb-2 has-text-centered">We're happy to here from you </p>
                    <Form/>
                </Column>
            </Columns>
        </>
    )
}

export default Contact;
