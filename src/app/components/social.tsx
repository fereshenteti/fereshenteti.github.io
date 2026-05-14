'use client';
import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';

const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07 } },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const Social = () => {
    return (
        <div className="social-contact">
            <motion.div
                className='social-container'
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.a variants={itemVariants} className="socialBox" href='https://www.linkedin.com/in/fareshentati/' target="blank">
                    <Image src="/assets/icons/linkedin-logo.svg" alt="LinkedIn" width={30} height={30} className='social-icon'/>
                </motion.a>

                <motion.a variants={itemVariants} className="socialBox" href='https://www.instagram.com/fereshenteti' target="blank">
                    <Image src="/assets/icons/instagram-logo.svg" alt="Instagram" width={30} height={30} className='social-icon'/>
                </motion.a>

                <motion.a variants={itemVariants} className="socialBox" href='https://www.threads.com/@fereshenteti' target="blank">
                    <Image src="/assets/icons/threads.svg" alt="Threads" width={30} height={30} className='social-icon threads-icon'/>
                </motion.a>

                <motion.a variants={itemVariants} className="socialBox" href='https://dribbble.com/fereshenteti/collections' target="blank">
                    <Image src="/assets/icons/dribble-logo.svg" alt="Dribbble" width={30} height={30} className='social-icon'/>
                </motion.a>

                <motion.a variants={itemVariants} className="socialBox" href='https://www.pinterest.com/hentetiferes/_created' target="blank">
                    <Image src="/assets/icons/pinterest-logo.svg" alt="Pinterest" width={30} height={30} className='social-icon'/>
                </motion.a>

                <motion.a variants={itemVariants} className="socialBox" href='https://www.tiktok.com/@fereshenteti' target="blank">
                    <Image src="/assets/icons/tiktok-logo.svg" alt="TikTok" width={30} height={30} className='social-icon'/>
                </motion.a>

                <motion.a variants={itemVariants} className="socialBox" href='https://www.youtube.com/@FeresVocalArts' target="blank">
                    <Image src="/assets/icons/youtube-logo.svg" alt="YouTube" width={30} height={30} className='social-icon'/>
                </motion.a>
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
                or email me at <strong className="my-email">feres.henteti@gmail.com</strong>
            </motion.p>
        </div>
    );
}

export default Social;
