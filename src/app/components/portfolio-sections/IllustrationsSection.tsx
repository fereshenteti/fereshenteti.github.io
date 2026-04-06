import { MyCustomButton } from "../common-ui/custom-button"

const IllustrationsSection = () => {
    return (
        <div id="illustration" className="section detailed-category illustrations-section">
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
                    <img src="assets/my_illustrations/goku.PNG" className="goku-img" />
                </div>
                <p>As I love visual arts, I found myself scribbling and drawing on my iPad. Thus, I discovered that I had a talent I can use to create more awesome illustrations!</p>
                <div className="section-info-buttons">
                    <a href="https://dribbble.com/fereshenteti/collections" target="_blank">
                        <MyCustomButton btnIcon="assets/icons/dribble-logo.svg" btnText="Explore more on my Dribbble" className="button-dribble" />
                    </a>
                    <a href="https://www.pinterest.com/hentetiferes/_created" target="_blank">
                        <MyCustomButton btnIcon="assets/icons/pinterest-logo.svg" btnText="Explore more on my Pinterest" className="button-pinterest" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default IllustrationsSection;