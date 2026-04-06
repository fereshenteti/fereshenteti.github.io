import { Player } from '@lottiefiles/react-lottie-player';

const HeroSection = () => {
    return (
        <div className='intro'>

            <section className="container">
                <div className="section-content">
                    <h1>Hi! I'm</h1>
                    <h1 className='my-name'>Fares Hentati</h1>
                    <p>Welcome to my portfolio!</p>
                    <div className='learn-more'>
                    <div>Scroll to learn more about me</div>
                    <Player
                        src='https://assets9.lottiefiles.com/packages/lf20_p4eki2q3.json'
                        className="lottie-player"
                        loop
                        autoplay
                    />
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="section-content">
                    <h1>I'm a Senior</h1>
                    <h1 className='highlighted'>UI / UX / Graphic</h1>
                    <h1>Designer</h1>
                    <p>8+ years of expertise crafting beautiful user experiences</p>
                </div>
            </section>

            <section className="container">
                <div className="section-content">
                    <h1>& I'm also a</h1>
                    <h1 className='highlighted'>Web Development</h1>
                    <h1>Engineer</h1>
                    <p>6+ years turning designs into elegant code!</p>
                </div>
            </section>

            <section className="container">
                <div className="section-content">
                    <h1>Aaaand I'm a</h1>
                    <h1 className='highlighted'>Voice Over</h1>
                    <h1>artist too!</h1>
                    <p>I might be one person, but I have many voices :D</p>
                </div>
            </section>

            <section className="container">
                <div className="section-content">
                    <h1>In the next sections<br /> you will discover</h1>
                    <h1 className='highlighted'>my creations!</h1>
                    <p>Enjoying it? keep scrolling</p>
                </div>
            </section>

        </div>
    )
}

export default HeroSection;