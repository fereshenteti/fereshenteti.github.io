import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ContactMe = (props: {boxRef: string}) => {

    const {boxRef} = props;

    useEffect(() => {
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
    }, []);

    return (
        <Form>

            <Form.Group className={`mb-3 ${boxRef}`} controlId="formEmail">
                <Form.Label className='formLabel'>Your email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group className={`mb-3 ${boxRef}`} controlId="formSubject">
                <Form.Label className='formLabel'>Subject</Form.Label>
                <Form.Control type="text" placeholder="What are you contacting me about?" />
            </Form.Group>

            <Form.Group className={`mb-3 ${boxRef}`} controlId="formMessage">
                <Form.Label className='formLabel'>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Yes, I'm all ears 👀" />
            </Form.Group>

            <div className={`form-buttons ${boxRef}`}>
                <Button variant="primary">
                    Send the raven
                </Button>
            </div>

        </Form>
    );
}

export default ContactMe;