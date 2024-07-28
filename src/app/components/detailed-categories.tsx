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

                {/* <div className="tiktok-samples">

                    <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@fereshenteti/video/7195640772954197254" data-video-id="7195640772954197254">
                        <section> <a target="_blank" title="@fereshenteti" href="https://www.tiktok.com/@fereshenteti?refer=embed">@fereshenteti</a> 7 voices, 1 person 🎙️ <a title="voice" target="_blank" href="https://www.tiktok.com/tag/voice?refer=embed">#voice</a> <a title="acting" target="_blank" href="https://www.tiktok.com/tag/acting?refer=embed">#acting</a> <a title="actor" target="_blank" href="https://www.tiktok.com/tag/actor?refer=embed">#actor</a> <a title="voiceacting" target="_blank" href="https://www.tiktok.com/tag/voiceacting?refer=embed">#VoiceActing</a> <a title="voiceactor" target="_blank" href="https://www.tiktok.com/tag/voiceactor?refer=embed">#VoiceActor</a> <a title="voiceover" target="_blank" href="https://www.tiktok.com/tag/voiceover?refer=embed">#VoiceOver</a> <a title="japanese" target="_blank" href="https://www.tiktok.com/tag/japanese?refer=embed">#japanese</a> <a title="anime" target="_blank" href="https://www.tiktok.com/tag/anime?refer=embed">#anime</a> <a title="hisoka" target="_blank" href="https://www.tiktok.com/tag/hisoka?refer=embed">#hisoka</a> <a title="hxh" target="_blank" href="https://www.tiktok.com/tag/hxh?refer=embed">#hxh</a> <a title="hunterxhunter" target="_blank" href="https://www.tiktok.com/tag/hunterxhunter?refer=embed">#hunterxhunter</a> <a title="onepiece" target="_blank" href="https://www.tiktok.com/tag/onepiece?refer=embed">#onepiece</a> <a title="zoro" target="_blank" href="https://www.tiktok.com/tag/zoro?refer=embed">#zoro</a> <a title="anya" target="_blank" href="https://www.tiktok.com/tag/anya?refer=embed">#anya</a> <a title="spyfamily" target="_blank" href="https://www.tiktok.com/tag/spyfamily?refer=embed">#spyfamily</a> <a title="spyxfamily" target="_blank" href="https://www.tiktok.com/tag/spyxfamily?refer=embed">#spyxfamily</a> <a title="zenozoldyck" target="_blank" href="https://www.tiktok.com/tag/zenozoldyck?refer=embed">#zenozoldyck</a> <a title="zoldyck" target="_blank" href="https://www.tiktok.com/tag/zoldyck?refer=embed">#zoldyck</a> <a title="pain" target="_blank" href="https://www.tiktok.com/tag/pain?refer=embed">#pain</a> <a title="naruto" target="_blank" href="https://www.tiktok.com/tag/naruto?refer=embed">#naruto</a> <a title="almightypush" target="_blank" href="https://www.tiktok.com/tag/almightypush?refer=embed">#almightypush</a> <a title="boruto" target="_blank" href="https://www.tiktok.com/tag/boruto?refer=embed">#boruto</a> <a title="jigen" target="_blank" href="https://www.tiktok.com/tag/jigen?refer=embed">#jigen</a> <a title="isshiki" target="_blank" href="https://www.tiktok.com/tag/isshiki?refer=embed">#isshiki</a> <a title="kawaki" target="_blank" href="https://www.tiktok.com/tag/kawaki?refer=embed">#kawaki</a> <a target="_blank" title="♬ original sound - Feres Henteti" href="https://www.tiktok.com/music/original-sound-7195640769142344453?refer=embed">♬ original sound - Feres Henteti</a> </section>
                        
                    </blockquote>

                    <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@fereshenteti/video/7183101656488267014" data-video-id="7183101656488267014">
                        <section> <a target="_blank" title="@fereshenteti" href="https://www.tiktok.com/@fereshenteti?refer=embed">@fereshenteti</a> New <a title="voiceover" target="_blank" href="https://www.tiktok.com/tag/voiceover?refer=embed">#VoiceOver</a> for <a title="mercedes" target="_blank" href="https://www.tiktok.com/tag/mercedes?refer=embed">#Mercedes</a> <a title="benz" target="_blank" href="https://www.tiktok.com/tag/benz?refer=embed">#Benz</a> <a title="commercial" target="_blank" href="https://www.tiktok.com/tag/commercial?refer=embed">#Commercial</a> 🎙️ <a title="luxury" target="_blank" href="https://www.tiktok.com/tag/luxury?refer=embed">#Luxury</a> <a title="mercedesbenz" target="_blank" href="https://www.tiktok.com/tag/mercedesbenz?refer=embed">#MercedesBenz</a> <a title="amg" target="_blank" href="https://www.tiktok.com/tag/amg?refer=embed">#AMG</a> <a title="cars" target="_blank" href="https://www.tiktok.com/tag/cars?refer=embed">#Cars</a> <a title="brand" target="_blank" href="https://www.tiktok.com/tag/brand?refer=embed">#Brand</a> <a title="security" target="_blank" href="https://www.tiktok.com/tag/security?refer=embed">#Security</a>  @Mercedes-Benz @mercedesbenzusa <a target="_blank" title="♬ original sound - Feres Henteti" href="https://www.tiktok.com/music/original-sound-7183101665737132806?refer=embed">♬ original sound - Feres Henteti</a> </section>
                    </blockquote>

                    <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@fereshenteti/video/7199353941899939078" data-video-id="7199353941899939078">
                        <section> <a target="_blank" title="@fereshenteti" href="https://www.tiktok.com/@fereshenteti?refer=embed">@fereshenteti</a> Une <a title="fragrance" target="_blank" href="https://www.tiktok.com/tag/fragrance?refer=embed">#fragrance</a> magnifique pour donner du sens à vos <a title="valentines" target="_blank" href="https://www.tiktok.com/tag/valentines?refer=embed">#valentines</a> ✌️😁 Mon script, ma voix, vidéo par Chanel (NB : cette vidéo n’est pas sponsorisée par Chanel, je l’avais créée à volonté) <a title="chanel" target="_blank" href="https://www.tiktok.com/tag/chanel?refer=embed">#Chanel</a> <a title="saintvalentin" target="_blank" href="https://www.tiktok.com/tag/saintvalentin?refer=embed">#SaintValentin</a> <a title="valentines" target="_blank" href="https://www.tiktok.com/tag/valentines?refer=embed">#valentines</a> <a title="parfum" target="_blank" href="https://www.tiktok.com/tag/parfum?refer=embed">#Parfum</a> <a title="elegance" target="_blank" href="https://www.tiktok.com/tag/elegance?refer=embed">#elegance</a> <a title="fragrance" target="_blank" href="https://www.tiktok.com/tag/fragrance?refer=embed">#fragrance</a> <a title="couple" target="_blank" href="https://www.tiktok.com/tag/couple?refer=embed">#couple</a> <a title="couples" target="_blank" href="https://www.tiktok.com/tag/couples?refer=embed">#couples</a> <a title="lux" target="_blank" href="https://www.tiktok.com/tag/lux?refer=embed">#lux</a> <a title="luxury" target="_blank" href="https://www.tiktok.com/tag/luxury?refer=embed">#luxury</a> <a title="perfume" target="_blank" href="https://www.tiktok.com/tag/perfume?refer=embed">#perfume</a> <a title="paris" target="_blank" href="https://www.tiktok.com/tag/paris?refer=embed">#Paris</a> <a title="france" target="_blank" href="https://www.tiktok.com/tag/france?refer=embed">#France</a> <a title="dance" target="_blank" href="https://www.tiktok.com/tag/dance?refer=embed">#dance</a> <a title="lune" target="_blank" href="https://www.tiktok.com/tag/lune?refer=embed">#lune</a> <a title="reves" target="_blank" href="https://www.tiktok.com/tag/reves?refer=embed">#reves</a> <a title="moon" target="_blank" href="https://www.tiktok.com/tag/moon?refer=embed">#moon</a> <a title="dream" target="_blank" href="https://www.tiktok.com/tag/dream?refer=embed">#dream</a> <a title="dreams" target="_blank" href="https://www.tiktok.com/tag/dreams?refer=embed">#dreams</a> <a title="imagination" target="_blank" href="https://www.tiktok.com/tag/imagination?refer=embed">#imagination</a> <a title="futur" target="_blank" href="https://www.tiktok.com/tag/futur?refer=embed">#futur</a> <a title="future" target="_blank" href="https://www.tiktok.com/tag/future?refer=embed">#future</a> @Chanel <a target="_blank" title="♬ original sound - Feres Henteti" href="https://www.tiktok.com/music/original-sound-7199354042592873222?refer=embed">♬ original sound - Feres Henteti</a> </section>
                    </blockquote>

                    
                </div> */}

                <div className="youtube-samples">

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/_RaOiJWVGDY?si=Bih9uIRhamS8DSwT" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/VRbcYSAIhqQ?si=uXWDJycbizB4AD4U" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/LqnknSnzb3g?si=fh9vFMduA6ZyEku5" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                </div>

            </div>


            {/* Instagram reel */}
            {/* <blockquote className="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/Cmz_Hh8BWuW/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style={{ background:"#FFF", border: 0, borderRadius: "3px", boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)", margin: "1px", maxWidth: "540px", minWidth: "326px", padding: 0, width: "99.375%" }}>

                <div style={{padding: "16px"}}>

                    <a href="https://www.instagram.com/reel/Cmz_Hh8BWuW/?utm_source=ig_embed&amp;utm_campaign=loading" style={{ background: "#FFFFFF", lineHeight: 0, padding: "0 0", textAlign: "center", textDecoration: "none", width: "100%"}} target="_blank">
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            
                            <div style={{ backgroundColor: "#F4F4F4", borderRadius: "50%", flexGrow: 0, height: "40px", marginRight: "14px", width: "40px" }}></div>
                            
                            <div style={{ display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "center" }}>
                                <div style={{ backgroundColor: "#F4F4F4", borderRadius: "4px", flexGrow: 0, height: "14px", marginBottom: "6px", width: "100px" }}></div>
                                <div style={{ backgroundColor: "#F4F4F4", borderRadius: "4px", flexGrow: 0, height: "14px", width: "60px" }}></div>
                            </div>
                        </div>
                        
                        <div style={{ padding: "19% 0" }}></div>
                        
                        <div style={{ display: "block", height: "50px", margin: "0 auto 12px", width:"50px" }}>
                            <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg>
                        </div>
                        
                        <div style={{ paddingTop: "8px" }}>
                            <div style={{ color: "#3897f0", fontFamily: "Arial,sans-serif", fontSize: "14px", fontStyle: "normal", fontWeight: 550, lineHeight: "18px" }}>
                                View this post on Instagram
                            </div>
                        </div>
                        
                        <div style={{ padding: "12.5% 0" }}></div>
                        
                        <div style={{ display: "flex", flexDirection: "row", marginBottom: "14px", alignItems: "center" }}>
                            <div>
                                <div style={{ backgroundColor: "#F4F4F4", borderRadius: "50%", height: "12.5px", width: "12.5px", transform: "translateX(0px) translateY(7px)" }}></div>
                                
                                <div style={{ backgroundColor: "#F4F4F4", height: "12.5px", transform: "rotate(-45deg) translateX(3px) translateY(1px)", width: "12.5px", flexGrow: 0, marginRight: "14px", marginLeft: "2px" }}></div>
                                
                                <div style={{backgroundColor: "#F4F4F4", borderRadius: "50%", height: "12.5px", width: "12.5px", transform: "translateX(9px) translateY(-18px)" }}></div>
                                
                            </div>
                            
                            <div style={{ marginLeft: "8px" }}>
                                <div style={{ backgroundColor: "#F4F4F4", borderRadius: "50%", flexGrow: 0, height: "20px", width: "20px" }}></div>
                                
                                <div style={{ width: 0, height: 0, borderTop: "2px solid transparent", borderLeft: "6px solid #f4f4f4", borderBottom: "2px solid transparent", transform: "translateX(16px) translateY(-4px) rotate(30deg)" }}></div>
                            </div>
                            
                            <div style={{ marginLeft: "auto" }}>
                                <div style={{ width: "0px", borderTop: "8px solid #F4F4F4", borderRight: "8px solid transparent", transform: "translateY(16px)" }}></div>
                                
                                <div style={{ backgroundColor: "#F4F4F4", flexGrow: 0, height: "12px", width: "16px", transform: "translateY(-4px)" }}></div>
                                
                                <div style={{ width: 0, height: 0, borderTop: "8px solid #F4F4F4", borderLeft: "8px solid transparent", transform: "translateY(-4px) translateX(8px)" }}></div>
                            </div>
                            
                        </div>
                        
                        <div style={{ display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "center", marginBottom: "24px" }}>
                            <div style={{ backgroundColor: "#F4F4F4", borderRadius: "4px", flexGrow: 0, height: "14px", marginBottom: "6px", width: "224px" }}></div>
                            
                            <div style={{ backgroundColor: "#F4F4F4", borderRadius: "4px", flexGrow: 0, height: "14px", width: "144px" }}></div>
                            
                        </div>
                    
                    </a>
                    
                    <p style={{ color: "#c9c8cd", fontFamily: "Arial,sans-serif", fontSize: "14px", lineHeight: "17px", marginBottom: 0, marginTop: "8px", overflow: "hidden", padding: "8px 0 7px", textAlign: "center", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        <a href="https://www.instagram.com/reel/Cmz_Hh8BWuW/?utm_source=ig_embed&amp,utm_campaign=loading" style={{ color: "#c9c8cd", fontFamily: "Arial,sans-serif", fontSize: "14px", fontStyle: "normal", fontWeight: "normal", lineHeight: "17px", textDecoration: "none" }} target="_blank">
                            A post shared by Feres Henteti (@fereshenteti)
                        </a>
                    </p>
                
                </div>
                
            </blockquote> */}

        </section>
    )
}

export default DetailedCategories;