'use client';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Form from 'react-bootstrap/Form';
import { MyCustomButton } from '@/app/components/common-ui/custom-button';
import emailjs from '@emailjs/browser';
import CircularProgress from '@mui/material/CircularProgress';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const SERVICE_ID = "service_qvbog4w";
const TEMPLATE_ID = "template_9e0b50x";
const PUBLIC_KEY = "fr5nOeOrK9Tj5Tc-A";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, delay, ease: EASE },
});

const ContactMe = () => {
    const form = useRef<any>('');

    const [name, setName] = useState<string|undefined>();
    const [email, setEmail] = useState<string|undefined>();
    const [subject, setSubject] = useState<string|undefined>();
    const [message, setMessage] = useState<string|undefined>();
    const [nameError, setNameError] = useState<string|undefined>();
    const [emailError, setEmailError] = useState<string|undefined>();
    const [subjectError, setSubjectError] = useState<string|undefined>();
    const [messageError, setMessageError] = useState<string|undefined>();

    const [isSending, setIsSending] = useState(false);
    const [sentSuccess, setSentSuccess] = useState(false);

    const isButtonDisabled =
            name === undefined || name.trim() === ""
            || email === undefined || email.trim() === ""
            || subject === undefined || subject.trim() === ""
            || message === undefined || message.trim() === ""

    const sendEmail = (e: any) => {
        e.preventDefault();

        if (!isSending && form?.current && !isButtonDisabled) {
            setIsSending(true);
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, { publicKey: PUBLIC_KEY })
                .then(
                    () => { setIsSending(false); setSentSuccess(true); },
                    (error) => { console.error('sending FAILED!!', error.text); setIsSending(false); },
                );
        } else if (name === undefined || name.trim() === "") {
            setNameError("Please tell me your name 🫣");
        } else if (email === undefined || email.trim() === "") {
            setEmailError("Please provide your email so I can contact you back");
        } else if (subject === undefined || subject.trim() === "") {
            setSubjectError("Please provide a subject so I can quickly see what are you contacting me about");
        } else if (message === undefined || message.trim() === "") {
            setMessageError("Don't hesitate, tell me!");
        }
    };

    return (
        sentSuccess ?
        <div className="contact-success">
            <CheckCircleOutlineIcon/>
            <p>
                Your request has been sent successfully! I will check it as soon as I can! Thank you for contacting me :)
            </p>
        </div>
        :
        <Form ref={form}>
            <motion.div {...fadeUp(0)}>
                <div className="name-email-wrapper">
                    <Form.Group className={`mb-3 input-name${nameError !== undefined ? ' input-error' : ''}`} controlId="formName">
                        <Form.Label className='formLabel'>Your name</Form.Label>
                        <Form.Control type="text" placeholder="Sir, Madam?" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                        {nameError && <span className="input-error-message">{nameError}</span>}
                    </Form.Group>

                    <Form.Group className={`mb-3 input-email${emailError !== undefined ? ' input-error' : ''}`} controlId="formEmail">
                        <Form.Label className='formLabel'>Your email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        {emailError && <span className="input-error-message">{emailError}</span>}
                    </Form.Group>
                </div>
            </motion.div>

            <motion.div {...fadeUp(0.1)}>
                <Form.Group className={`mb-3${subjectError !== undefined ? ' input-error' : ''}`} controlId="formSubject">
                    <Form.Label className='formLabel'>Subject</Form.Label>
                    <Form.Control type="text" placeholder="What are you contacting me about?" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)}/>
                    {subjectError && <span className="input-error-message">{subjectError}</span>}
                </Form.Group>
            </motion.div>

            <motion.div {...fadeUp(0.2)}>
                <Form.Group className={`mb-3${messageError !== undefined ? ' input-error' : ''}`} controlId="formMessage">
                    <Form.Label className='formLabel'>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Yes, I'm all ears 👀" name="message" value={message} onChange={(e) => setMessage(e.target.value)}/>
                    {messageError && <span className="input-error-message">{messageError}</span>}
                </Form.Group>
            </motion.div>

            <motion.div {...fadeUp(0.3)} className="form-buttons">
                <MyCustomButton
                    btnIcon="assets/icons/send.svg"
                    btnText={isSending ? '' : 'Send the raven'}
                    className={`submit-button${isButtonDisabled ? ' is-disabled' : ''}`}
                    onClick={() => sendEmail({ preventDefault: () => {} })}
                />
                {isSending && <CircularProgress className="button-loading-circle submit-spinner"/>}
            </motion.div>
        </Form>
    );
};

export default ContactMe;
