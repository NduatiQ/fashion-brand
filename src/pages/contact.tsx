//import React from 'react';
import '../styles/homeLayout.css';
import {Button} from '@mantine/core'
import { contactIcons } from '../../public/myData';
import { Footer } from '../components/homeComponents/layout';
import { useForm, SubmitHandler, } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver }from '@hookform/resolvers/yup';
//import {useUserStore} from '../store/store';
import emailjs from '@emailjs/browser';
import { DesktopNav} from '../components/homeComponents/layout';
import { MobileNav } from '../components/homeComponents/layout';
import Welcome from '../components/homeComponents/welcome';
import { MyNavigator } from '../components/homeComponents/layout';

//Yup validation schema
const schema = yup.object().shape({
    name: yup.string().required('Full Name is required'),
    email: yup.string().email('Invalid email address').required('Email address is required'),
    topic: yup.string().required('Topic is required'),
    message: yup.string().required('Message is required')


});
//Defining the structure for the form data
interface ContactFormData {
    name: string;
    email: string;
    topic: string;
    message: string;
}
 function ContactForm(){
    const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>({
    resolver: yupResolver(schema),
  });
//const setFormData = useUserStore((state) => state.setFormData);

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    try{
        const response = await emailjs.send(
            'service_fv3ndr5', //emailjs service id
            'template_347vf6a',//emailjs Template id
            {
                name: data.name,
                email: data.email,
                topic: data.topic,
                message: data.message,

            },
'C4LGLAIJTTfNpExyL' //emailjs public key`


        );
    //setFormData(data); // Save data to the Zustand store
    console.log('Form submitted:', data);
    if (response.status === 200){
        alert("Email sent Successfully. Thank you for reaching out.");
    }
  }catch (error){
    console.error('Failed to send email:', error);
    alert('Failed to send email, please try again later');
  }
};
    return(
        <div className = 'formContainer'>
            <div style={{display: 'flex', flexDirection:'column', justifyContent: 'flex-start'}}>
        <h2 id = "contactMsg">Send Us a Message</h2>
        <p id = 'contactPara'> Your email address will not be published. Required fields are marked <span style=
        {{color:'red'}}>*</span></p>
        </div>
        <form className = "contactForm" onSubmit={handleSubmit(onSubmit)}>
            <div className = "nameEmail">
            <div id = "formFields">
            <label id = "formName">Your Name</label>
            <input type = "text" placeholder='Full Name' {...register('name')}/>
            {errors.name && <p id="logErrors">{errors.name.message}</p>}
            </div>
            <div id = "formFields">
            <label id = "formName">Your Email</label>
            <input type = "text" placeholder='Email Address' {...register('email')}/>
            
            {errors.email && <p id="logErrors">{errors.email.message}</p>}
            </div>
            </div>
            <div id= "formFields">
            <label id = "formName">Topic</label>
            <input id ="formTopic" type = "text" placeholder='Message subject' {...register('topic')}/>
            {errors.topic && <p id="logErrors">{errors.topic.message}</p>}
            </div>
            <div id = "formFields">
            <label id = "formName">Your Message</label>
            <textarea  id = "textArea" placeholder='Tell us something' {...register('message')}/>
            {errors.message && <p id="logErrors">{errors.message.message}</p>}
            </div>
            <Button type = "submit" id="submitBtn" style={{borderRadius: '40px', marginTop: '44px'}}>Send</Button>
        </form>
        </div>
    )
}

export default function Contact(){
return(
    <>
    <body>
    <MobileNav/>
    <DesktopNav/>
    <Welcome/>
        <div className = "myHero2">
            <div className = "hero2Content">
            <h4 id = "magName1">Tell Us Something</h4>
            <h1 id = "description3">Contact Ventus</h1>
            </div>
        </div>

        <div className = "formGrid">        <ContactForm/>
        <div className = "contactInfo">
            {contactIcons.map((contact) => (
                <div className = 'contactContent' key = {contact.name}>
                    <img src = {contact.icon} alt = {contact.name} id = 'contactIcon'/>
                    <div className = 'contactText'>
                        <p id='contactName'>{contact.name}</p>
                        <p id = 'contactDetails'>{contact.details}</p>
                    </div>
                </div>
            ))}
        </div>
        </div>
        <div className = "navigator2">
                <MyNavigator/>
               </div>
        <Footer/>
        </body>
    </>
)
}

