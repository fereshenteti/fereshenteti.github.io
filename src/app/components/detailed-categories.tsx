import { MyCustomButton } from "./common-ui/custom-button";


const DetailedCategories = () => {

    return (
        <section className="detailed-categories">

            {/* Frontend */}
            <div id="frontend" className="detailed-category frontend">

                <div className="left-side">
                    <div className="section-info">
                        <h1>Front-end</h1>
                        <h1>web engineering</h1>
                        <p>Since 2018, I've been working as a frontend engineer, basically on Angular, React & NextJS (always latest versions) and their related technologies.</p>
                        <a href="https://www.linkedin.com/in/fareshentati/" target="_blank">
                            <MyCustomButton btnIcon="assets/icons/linkedin-logo.svg" btnText="Explore more on my Linkedin"/>
                        </a>
                    </div>
                </div>

                <div className="right-side">
                    <div className="front-dev-images-wrapper scroller_wrapper">
                        <div className="front-dev-images scroller_inner scroller_inner_1">
                            
                            <div className="front-dev-image">
                                <img src="assets/frontend_projects/sedeo 1.png" alt="Sedeo"/>
                            </div>
                            <div className="front-dev-image">
                                <img src="assets/frontend_projects/value 1.png" alt="Value Digital Services"/>
                            </div>
                            <div className="front-dev-image">
                                <img src="assets/frontend_projects/embs 1.png" alt="eMBS"/>
                            </div>
                            <div className="front-dev-image">
                                <img src="assets/frontend_projects/instaclear 1.png" alt="Instaclear"/>
                            </div>
                            <div className="front-dev-image">
                                <img src="assets/frontend_projects/kpeiz.png" alt="Kpeiz"/>
                            </div>
                            <div className="front-dev-image">
                                <img src="assets/frontend_projects/embs 2.png" alt="eMBS"/>
                            </div>
                            
                            {/* DUPLICATES JUST FOR ANIMATION */}
                            <div className="front-dev-image" aria-hidden={true}>
                                <img src="assets/frontend_projects/sedeo 1.png" alt="Sedeo"/>
                            </div>
                            <div className="front-dev-image" aria-hidden={true}>
                                <img src="assets/frontend_projects/value 1.png" alt="Value Digital Services"/>
                            </div>
                            <div className="front-dev-image" aria-hidden={true}>
                                <img src="assets/frontend_projects/embs 1.png" alt="eMBS"/>
                            </div>
                            <div className="front-dev-image" aria-hidden={true}>
                                <img src="assets/frontend_projects/instaclear 1.png" alt="Instaclear"/>
                            </div>
                            <div className="front-dev-image" aria-hidden={true}>
                                <img src="assets/frontend_projects/kpeiz.png" alt="Kpeiz"/>
                            </div>
                            <div className="front-dev-image" aria-hidden={true}>
                                <img src="assets/frontend_projects/embs 2.png" alt="eMBS"/>
                            </div>

                        </div>
                    </div>

                    {/* Second Scroller */}
                    <div className="front-dev-images-wrapper scroller_wrapper">
                        <div className="front-dev-images scroller_inner scroller_inner_2">

                            <div className="front-dev-image">
                                <img src="assets/frontend_projects/sedeo 2.png" alt="Sedeo"/>
                            </div>
                            <div className="front-dev-image">
                                <img src="assets/frontend_projects/sedeo 3.png" alt="Sedeo"/>
                            </div>
                            <div className="front-dev-image">
                                <img src="assets/frontend_projects/value 2.png" alt="Value Digital Services"/>
                            </div>
                            <div className="front-dev-image">
                                <img src="assets/frontend_projects/instaclear 2.png" alt="Instaclear"/>
                            </div>
                            <div className="front-dev-image">
                                <img src="assets/frontend_projects/instaclear 3.png" alt="Instaclear"/>
                            </div>
                            <div className="front-dev-image">
                                <img src="assets/frontend_projects/embs 3.png" alt="eMBS"/>
                            </div>
                            
                            {/* DUPLICATES JUST FOR ANIMATION */}
                            <div className="front-dev-image" aria-hidden={true}>
                                <img src="assets/frontend_projects/sedeo 2.png" alt="Sedeo"/>
                            </div>
                            <div className="front-dev-image" aria-hidden={true}>
                                <img src="assets/frontend_projects/sedeo 3.png" alt="Sedeo"/>
                            </div>
                            <div className="front-dev-image" aria-hidden={true}>
                                <img src="assets/frontend_projects/value 2.png" alt="Value Digital Services"/>
                            </div>
                            <div className="front-dev-image" aria-hidden={true}>
                                <img src="assets/frontend_projects/instaclear 2.png" alt="Instaclear"/>
                            </div>
                            <div className="front-dev-image" aria-hidden={true}>
                                <img src="assets/frontend_projects/instaclear 3.png" alt="Instaclear"/>
                            </div>
                            <div className="front-dev-image" aria-hidden={true}>
                                <img src="assets/frontend_projects/embs 3.png" alt="eMBS"/>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            {/* UI / UX */}
            <div id="uiux" className="detailed-category uiux">
                <div className="left-side">
                    <div className="section-info">
                        <h1>UI / UX Design</h1>
                        <p>I've been part of many design projects that really surprised the clients or the product owners. I always work with passion, and add my touch to the project like creating logo animations, easter eggs, etc..</p>
                        <div className="section-info-buttons">
                            <a href="https://dribbble.com/fereshenteti/collections" target="_blank">
                                <MyCustomButton btnIcon="assets/icons/dribble-logo.svg" btnText="Explore more on my Dribbble" className="button-dribble"/>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="right-side">
                    <div className="showcase-uiux culture-tech">
                        <img src="assets/uiux_design/culture tech.png" className="culture-tech-img"/>
                        <img src="assets/uiux_design/culture tech 2.png" className="culture-tech-img-2"/>
                        <img src="assets/uiux_design/culture tech 3.png" className="culture-tech-img-3"/>
                    </div>
                    <div className="showcase-uiux guido">
                        <img src="assets/uiux_design/guido 2.png" className="guido-img"/>
                        <img src="assets/uiux_design/guido 1.png" className="guido-img-2"/>
                        <img src="assets/uiux_design/guido 3.png" className="guido-img-3"/>
                    </div>
                </div>
            </div>

            {/* Illustrations */}
            <div id="illustration" className="detailed-category illustrations">

                <div id="background-wrap">
                    <div className="x1">
                        <div className="cloud"></div>
                    </div>

                    <div className="x2">
                        <div className="cloud"></div>
                    </div>

                    <div className="x3">
                        <div className="cloud"></div>
                    </div>

                    <div className="x4">
                        <div className="cloud"></div>
                    </div>

                    <div className="x5">
                        <div className="cloud"></div>
                    </div>
                </div>

                <div className="section-info">
                    <h1>Illustrations / Graphic Design</h1>
                    <div className="goku-container">
                        <img src="assets/my_illustrations/goku.PNG" className="goku-img"/>
                    </div>
                    <p>As I love visual arts, I found myself scribbling and drawing on my iPad. Thus, I discovered that I had a talent I can use to create more awesome illustrations!</p>
                    <div className="section-info-buttons">
                        <a href="https://dribbble.com/fereshenteti/collections" target="_blank">
                            <MyCustomButton btnIcon="assets/icons/dribble-logo.svg" btnText="Explore more on my Dribbble" className="button-dribble"/>
                        </a>
                        <a href="https://www.pinterest.com/hentetiferes/_created" target="_blank">
                            <MyCustomButton btnIcon="assets/icons/pinterest-logo.svg" btnText="Explore more on my Pinterest" className="button-pinterest"/>
                        </a>
                    </div>
                </div>
            </div>

            {/* Voice Over */}
            <div id="voiceover" className="detailed-category voice-over">
                
                <div className="section-info">
                    <h1>Voice Over</h1>
                    <p>I am also passionate about documentaries and dubbing, thus I found my other hidden talent: the voice over!<br/>
                    Besides, I discovered that I can even impersonate many characters and voice-styles with my original voice!</p>
                    <div className="section-info-buttons">

                        <a href="https://www.youtube.com/@FeresVocalArts" target="_blank">
                            <MyCustomButton btnIcon="assets/icons/youtube-logo.svg" btnText="Explore more on my Youtube channel" className="button-youtube"/>
                        </a>

                        <a href="https://www.tiktok.com/@fereshenteti" target="_blank">
                            <MyCustomButton btnIcon="assets/icons/tiktok-logo.svg" btnText="Explore more on my TikTok channel" className="button-tiktok"/>
                        </a>

                    </div>
                </div>

                <div className="youtube-samples">

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/_RaOiJWVGDY?si=Bih9uIRhamS8DSwT" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/VRbcYSAIhqQ?si=uXWDJycbizB4AD4U" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/LqnknSnzb3g?si=fh9vFMduA6ZyEku5" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                </div>

            </div>

        </section>
    )
}

export default DetailedCategories;