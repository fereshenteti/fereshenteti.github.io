import { MyCustomButton } from "./common-ui/custom-button";


const DetailedCategories = () => {

    return (
        <section className="detailed-categories">

            {/* Frontend */}
            <div className="detailed-category frontend">

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
                                <img src="assets/frontend_projects/sedeo 1.png" width={300} height={200} alt="Sedeo"/>
                            </div>
                            <div className="front-dev-image">
                                <img src="assets/frontend_projects/value 1.png" width={300} height={200} alt="Value Digital Services"/>
                            </div>
                            <div className="front-dev-image">
                                <img src="assets/frontend_projects/embs 1.png" width={300} height={200} alt="eMBS"/>
                            </div>
                            <div className="front-dev-image">
                                <img src="assets/frontend_projects/instaclear 1.png" width={300} height={200} alt="Instaclear"/>
                            </div>
                            <div className="front-dev-image">
                                <img src="assets/frontend_projects/kpeiz.png" width={300} height={200} alt="Kpeiz"/>
                            </div>
                            <div className="front-dev-image">
                                <img src="assets/frontend_projects/embs 2.png" width={300} height={200} alt="eMBS"/>
                            </div>
                            
                            {/* DUPLICATES JUST FOR ANIMATION */}
                            <div className="front-dev-image" aria-hidden={true}>
                                <img src="assets/frontend_projects/sedeo 1.png" width={300} height={200} alt="Sedeo"/>
                            </div>
                            <div className="front-dev-image" aria-hidden={true}>
                                <img src="assets/frontend_projects/value 1.png" width={300} height={200} alt="Value Digital Services"/>
                            </div>
                            <div className="front-dev-image" aria-hidden={true}>
                                <img src="assets/frontend_projects/embs 1.png" width={300} height={200} alt="eMBS"/>
                            </div>
                            <div className="front-dev-image" aria-hidden={true}>
                                <img src="assets/frontend_projects/instaclear 1.png" width={300} height={200} alt="Instaclear"/>
                            </div>
                            <div className="front-dev-image" aria-hidden={true}>
                                <img src="assets/frontend_projects/kpeiz.png" width={300} height={200} alt="Kpeiz"/>
                            </div>
                            <div className="front-dev-image" aria-hidden={true}>
                                <img src="assets/frontend_projects/embs 2.png" width={300} height={200} alt="eMBS"/>
                            </div>

                        </div>
                    </div>

                    {/* Second Scroller */}
                    <div className="front-dev-images-wrapper scroller_wrapper">
                        <div className="front-dev-images scroller_inner scroller_inner_2">

                            <div className="front-dev-image">
                                <img src="assets/frontend_projects/sedeo 2.png" width={300} height={200} alt="Sedeo"/>
                            </div>
                            <div className="front-dev-image">
                                <img src="assets/frontend_projects/sedeo 3.png" width={300} height={200} alt="Sedeo"/>
                            </div>
                            <div className="front-dev-image">
                                <img src="assets/frontend_projects/value 2.png" width={300} height={200} alt="Value Digital Services"/>
                            </div>
                            <div className="front-dev-image">
                                <img src="assets/frontend_projects/instaclear 2.png" width={300} height={200} alt="Instaclear"/>
                            </div>
                            <div className="front-dev-image">
                                <img src="assets/frontend_projects/instaclear 3.png" width={300} height={200} alt="Instaclear"/>
                            </div>
                            <div className="front-dev-image">
                                <img src="assets/frontend_projects/embs 3.png" width={300} height={200} alt="eMBS"/>
                            </div>
                            
                            {/* DUPLICATES JUST FOR ANIMATION */}
                            <div className="front-dev-image" aria-hidden={true}>
                                <img src="assets/frontend_projects/sedeo 2.png" width={300} height={200} alt="Sedeo"/>
                            </div>
                            <div className="front-dev-image" aria-hidden={true}>
                                <img src="assets/frontend_projects/sedeo 3.png" width={300} height={200} alt="Sedeo"/>
                            </div>
                            <div className="front-dev-image" aria-hidden={true}>
                                <img src="assets/frontend_projects/value 2.png" width={300} height={200} alt="Value Digital Services"/>
                            </div>
                            <div className="front-dev-image" aria-hidden={true}>
                                <img src="assets/frontend_projects/instaclear 2.png" width={300} height={200} alt="Instaclear"/>
                            </div>
                            <div className="front-dev-image" aria-hidden={true}>
                                <img src="assets/frontend_projects/instaclear 3.png" width={300} height={200} alt="Instaclear"/>
                            </div>
                            <div className="front-dev-image" aria-hidden={true}>
                                <img src="assets/frontend_projects/embs 3.png" width={300} height={200} alt="eMBS"/>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            {/* UI / UX */}
            <div className="detailed-category uiux">
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
            <div className="detailed-category illustrations">

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
                    <img src="assets/my_illustrations/goku.PNG" className="goku-img"/>
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
            <div className="detailed-category voice-over">
                
                <div className="left-side">
                    <div className="section-info">
                        <h1>Voice Over</h1>
                        <p>I am also passionate about documentaries and dubbing, thus I found my other hidden talent: the voice over! Furthermore, I discovered that I can even impersonate many characters and voice-styles with my original voice!</p>
                        <div className="section-info-buttons">
                            <a href="https://www.tiktok.com/@fereshenteti" target="_blank">
                                <MyCustomButton btnIcon="assets/icons/tiktok-logo.svg" btnText="Explore more on my TikTok channel" className="button-tiktok"/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="right-side">

                    <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@fereshenteti/video/7195640772954197254" data-video-id="7195640772954197254">
                        <section> <a target="_blank" title="@fereshenteti" href="https://www.tiktok.com/@fereshenteti?refer=embed">@fereshenteti</a> 7 voices, 1 person 🎙️ <a title="voice" target="_blank" href="https://www.tiktok.com/tag/voice?refer=embed">#voice</a> <a title="acting" target="_blank" href="https://www.tiktok.com/tag/acting?refer=embed">#acting</a> <a title="actor" target="_blank" href="https://www.tiktok.com/tag/actor?refer=embed">#actor</a> <a title="voiceacting" target="_blank" href="https://www.tiktok.com/tag/voiceacting?refer=embed">#VoiceActing</a> <a title="voiceactor" target="_blank" href="https://www.tiktok.com/tag/voiceactor?refer=embed">#VoiceActor</a> <a title="voiceover" target="_blank" href="https://www.tiktok.com/tag/voiceover?refer=embed">#VoiceOver</a> <a title="japanese" target="_blank" href="https://www.tiktok.com/tag/japanese?refer=embed">#japanese</a> <a title="anime" target="_blank" href="https://www.tiktok.com/tag/anime?refer=embed">#anime</a> <a title="hisoka" target="_blank" href="https://www.tiktok.com/tag/hisoka?refer=embed">#hisoka</a> <a title="hxh" target="_blank" href="https://www.tiktok.com/tag/hxh?refer=embed">#hxh</a> <a title="hunterxhunter" target="_blank" href="https://www.tiktok.com/tag/hunterxhunter?refer=embed">#hunterxhunter</a> <a title="onepiece" target="_blank" href="https://www.tiktok.com/tag/onepiece?refer=embed">#onepiece</a> <a title="zoro" target="_blank" href="https://www.tiktok.com/tag/zoro?refer=embed">#zoro</a> <a title="anya" target="_blank" href="https://www.tiktok.com/tag/anya?refer=embed">#anya</a> <a title="spyfamily" target="_blank" href="https://www.tiktok.com/tag/spyfamily?refer=embed">#spyfamily</a> <a title="spyxfamily" target="_blank" href="https://www.tiktok.com/tag/spyxfamily?refer=embed">#spyxfamily</a> <a title="zenozoldyck" target="_blank" href="https://www.tiktok.com/tag/zenozoldyck?refer=embed">#zenozoldyck</a> <a title="zoldyck" target="_blank" href="https://www.tiktok.com/tag/zoldyck?refer=embed">#zoldyck</a> <a title="pain" target="_blank" href="https://www.tiktok.com/tag/pain?refer=embed">#pain</a> <a title="naruto" target="_blank" href="https://www.tiktok.com/tag/naruto?refer=embed">#naruto</a> <a title="almightypush" target="_blank" href="https://www.tiktok.com/tag/almightypush?refer=embed">#almightypush</a> <a title="boruto" target="_blank" href="https://www.tiktok.com/tag/boruto?refer=embed">#boruto</a> <a title="jigen" target="_blank" href="https://www.tiktok.com/tag/jigen?refer=embed">#jigen</a> <a title="isshiki" target="_blank" href="https://www.tiktok.com/tag/isshiki?refer=embed">#isshiki</a> <a title="kawaki" target="_blank" href="https://www.tiktok.com/tag/kawaki?refer=embed">#kawaki</a> <a target="_blank" title="♬ original sound - Feres Henteti" href="https://www.tiktok.com/music/original-sound-7195640769142344453?refer=embed">♬ original sound - Feres Henteti</a> </section>
                        
                    </blockquote>

                    <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@fereshenteti/video/7183101656488267014" data-video-id="7183101656488267014">
                        <section> <a target="_blank" title="@fereshenteti" href="https://www.tiktok.com/@fereshenteti?refer=embed">@fereshenteti</a> New <a title="voiceover" target="_blank" href="https://www.tiktok.com/tag/voiceover?refer=embed">#VoiceOver</a> for <a title="mercedes" target="_blank" href="https://www.tiktok.com/tag/mercedes?refer=embed">#Mercedes</a> <a title="benz" target="_blank" href="https://www.tiktok.com/tag/benz?refer=embed">#Benz</a> <a title="commercial" target="_blank" href="https://www.tiktok.com/tag/commercial?refer=embed">#Commercial</a> 🎙️ <a title="luxury" target="_blank" href="https://www.tiktok.com/tag/luxury?refer=embed">#Luxury</a> <a title="mercedesbenz" target="_blank" href="https://www.tiktok.com/tag/mercedesbenz?refer=embed">#MercedesBenz</a> <a title="amg" target="_blank" href="https://www.tiktok.com/tag/amg?refer=embed">#AMG</a> <a title="cars" target="_blank" href="https://www.tiktok.com/tag/cars?refer=embed">#Cars</a> <a title="brand" target="_blank" href="https://www.tiktok.com/tag/brand?refer=embed">#Brand</a> <a title="security" target="_blank" href="https://www.tiktok.com/tag/security?refer=embed">#Security</a>  @Mercedes-Benz @mercedesbenzusa <a target="_blank" title="♬ original sound - Feres Henteti" href="https://www.tiktok.com/music/original-sound-7183101665737132806?refer=embed">♬ original sound - Feres Henteti</a> </section>
                    </blockquote>

                    <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@fereshenteti/video/7199353941899939078" data-video-id="7199353941899939078">
                        <section> <a target="_blank" title="@fereshenteti" href="https://www.tiktok.com/@fereshenteti?refer=embed">@fereshenteti</a> Une <a title="fragrance" target="_blank" href="https://www.tiktok.com/tag/fragrance?refer=embed">#fragrance</a> magnifique pour donner du sens à vos <a title="valentines" target="_blank" href="https://www.tiktok.com/tag/valentines?refer=embed">#valentines</a> ✌️😁 Mon script, ma voix, vidéo par Chanel (NB : cette vidéo n’est pas sponsorisée par Chanel, je l’avais créée à volonté) <a title="chanel" target="_blank" href="https://www.tiktok.com/tag/chanel?refer=embed">#Chanel</a> <a title="saintvalentin" target="_blank" href="https://www.tiktok.com/tag/saintvalentin?refer=embed">#SaintValentin</a> <a title="valentines" target="_blank" href="https://www.tiktok.com/tag/valentines?refer=embed">#valentines</a> <a title="parfum" target="_blank" href="https://www.tiktok.com/tag/parfum?refer=embed">#Parfum</a> <a title="elegance" target="_blank" href="https://www.tiktok.com/tag/elegance?refer=embed">#elegance</a> <a title="fragrance" target="_blank" href="https://www.tiktok.com/tag/fragrance?refer=embed">#fragrance</a> <a title="couple" target="_blank" href="https://www.tiktok.com/tag/couple?refer=embed">#couple</a> <a title="couples" target="_blank" href="https://www.tiktok.com/tag/couples?refer=embed">#couples</a> <a title="lux" target="_blank" href="https://www.tiktok.com/tag/lux?refer=embed">#lux</a> <a title="luxury" target="_blank" href="https://www.tiktok.com/tag/luxury?refer=embed">#luxury</a> <a title="perfume" target="_blank" href="https://www.tiktok.com/tag/perfume?refer=embed">#perfume</a> <a title="paris" target="_blank" href="https://www.tiktok.com/tag/paris?refer=embed">#Paris</a> <a title="france" target="_blank" href="https://www.tiktok.com/tag/france?refer=embed">#France</a> <a title="dance" target="_blank" href="https://www.tiktok.com/tag/dance?refer=embed">#dance</a> <a title="lune" target="_blank" href="https://www.tiktok.com/tag/lune?refer=embed">#lune</a> <a title="reves" target="_blank" href="https://www.tiktok.com/tag/reves?refer=embed">#reves</a> <a title="moon" target="_blank" href="https://www.tiktok.com/tag/moon?refer=embed">#moon</a> <a title="dream" target="_blank" href="https://www.tiktok.com/tag/dream?refer=embed">#dream</a> <a title="dreams" target="_blank" href="https://www.tiktok.com/tag/dreams?refer=embed">#dreams</a> <a title="imagination" target="_blank" href="https://www.tiktok.com/tag/imagination?refer=embed">#imagination</a> <a title="futur" target="_blank" href="https://www.tiktok.com/tag/futur?refer=embed">#futur</a> <a title="future" target="_blank" href="https://www.tiktok.com/tag/future?refer=embed">#future</a> @Chanel <a target="_blank" title="♬ original sound - Feres Henteti" href="https://www.tiktok.com/music/original-sound-7199354042592873222?refer=embed">♬ original sound - Feres Henteti</a> </section>
                        
                    </blockquote>

                    <script async src="https://www.tiktok.com/embed.js"></script>
                </div>
            </div>

            <blockquote className="tiktok-embed">
                <iframe width="560" height="315" src="https://www.tiktok.com/oembed?url=https://www.tiktok.com/@fereshenteti/video/7195640772954197254" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </blockquote>

        </section>
    )
}

export default DetailedCategories;