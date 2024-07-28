import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';
import CircularProgress from '@mui/material/CircularProgress';
import { Player } from '@lottiefiles/react-lottie-player';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const SERVICE_ID = "service_qvbog4w";
const TEMPLATE_ID = "template_9e0b50x";
const PUBLIC_KEY = "rcn90UAeivk5_64XM";

const ContactMe = (props: {boxRef?: string}) => {

    const {boxRef} = props;
    const form = useRef<any>();

    const [name, setName] = useState<string|undefined>();
    const [email, setEmail] = useState<string|undefined>();
    const [subject, setSubject] = useState<string|undefined>();
    const [message, setMessage] = useState<string|undefined>();
    const [nameError, setNameError] = useState<string|undefined>();
    const [emailError, setEmailError] = useState<string|undefined>();
    const [subjectError, setSubjectError] = useState<string|undefined>();
    const [messageError, setMessageError] = useState<string|undefined>();

    const [isSending, setIsSending]= useState(false);
    const [sentSuccess, setSentSuccess] = useState(false);

    const isButtonDisabled = 
            name === undefined || name.trim() === ""
            || email === undefined || email.trim() === ""
            || subject === undefined || subject.trim() === ""
            || message === undefined || message.trim() === ""

    useEffect(() => {
        if(boxRef){
            const boxes: any[] = gsap.utils.toArray(`.${boxRef}`);
    
            boxes.forEach((box, i) => {
                const anim = gsap.fromTo(box, {autoAlpha: 0, y: 50}, {duration: 0.5, delay: i/10, autoAlpha: 1, y: 0});
                ScrollTrigger.create({
                  trigger: box,
                  animation: anim,
                  toggleActions: 'play none none none',
                  once: true,
                });
            });
        }
    }, []);

    const sendEmail = (e: any) => {
        e.preventDefault();
        
        if(!isSending && form?.current && !isButtonDisabled){
            setIsSending(true)
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
                publicKey: PUBLIC_KEY,
            })
            .then(
                () => {
                    setIsSending(false);
                    setSentSuccess(true);
                },
                (error) => {
                    console.error('sending FAILED!!', error.text);
                    setIsSending(false);
                },
            );
        }
        else if(name === undefined || name.trim() === ""){
            setNameError("Please tell me your name 🫣")
        }
        else if(email === undefined || email.trim() === ""){
            setEmailError("Please provide your email so I can contact you back")
        }
        else if(subject === undefined || subject.trim() === ""){
            setSubjectError("Please provide a subject so I can quickly see what are you contacting me about")
        }
        else if(message === undefined || message.trim() === ""){
            setMessageError("Don't hesitate, tell me!")
        }
    }

    return (
        sentSuccess ?
        <div className="contact-success">
            <CheckCircleOutlineIcon/>
            <p>
                Your request has been sent successfully! I will check it as soon as I can! Thank you for contacting me :)
            </p>

            {/*<Player
                src='https://lottie.host/6997700d-a130-4641-a2cd-cb5a9d949d9e/ZSXNEiUr0q.json'
                className="lottie-player"
                loop={false}
                autoplay
            />
            */}
        </div>
        :
        <Form ref={form}>

            <div className="name-email-wrapper">
                <Form.Group className={`mb-3 input-name ${boxRef} ${nameError !== undefined ? 'input-error' : ''}`} controlId="formName">
                    <Form.Label className='formLabel'>Your name</Form.Label>
                    <Form.Control type="text" placeholder="Mr. Elon Musk maybe?" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                    {nameError && <span className="input-error-message">{nameError}</span>}
                </Form.Group>

                <Form.Group className={`mb-3 input-email ${boxRef} ${emailError !== undefined ? 'input-error' : ''}`} controlId="formEmail">
                    <Form.Label className='formLabel'>Your email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    {emailError && <span className="input-error-message">{emailError}</span>}
                </Form.Group>
            </div>

            <Form.Group className={`mb-3 ${boxRef} ${subjectError !== undefined ? 'input-error' : ''}`} controlId="formSubject">
                <Form.Label className='formLabel'>Subject</Form.Label>
                <Form.Control type="text" placeholder="What are you contacting me about?" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)}/>
                {subjectError && <span className="input-error-message">{subjectError}</span>}
            </Form.Group>

            <Form.Group className={`mb-3 ${boxRef} ${messageError !== undefined ? 'input-error' : ''}`} controlId="formMessage">
                <Form.Label className='formLabel'>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Yes, I'm all ears 👀" name="message" value={message} onChange={(e) => setMessage(e.target.value)}/>
                {messageError && <span className="input-error-message">{messageError}</span>}
            </Form.Group>

            <div className={`form-buttons ${boxRef}`}>
                <Button className="submit-button" variant="primary" onClick={sendEmail} disabled={isButtonDisabled}>
                    {isSending ? <CircularProgress className="button-loading-circle"/> : "Send the raven"}
                </Button>
            </div>

        </Form>
    );
}

export default ContactMe;