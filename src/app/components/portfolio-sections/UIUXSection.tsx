import { MyCustomButton } from "../common-ui/custom-button"

const UIUXSection = () => {
    return (
        <div id="uiux" className="section detailed-category uiux-section">
            <div className="left-side">
                <div className="section-info">
                    <h1>UI / UX Design</h1>
                    <p>I've been part of many design projects that really surprised the clients or the product owners. I always work with passion, and add my touch to the project like creating logo animations, easter eggs, etc..</p>
                    <div className="section-info-buttons">
                        <a href="https://dribbble.com/fereshenteti/collections" target="_blank">
                            <MyCustomButton btnIcon="assets/icons/dribble-logo.svg" btnText="Explore more on my Dribbble" className="button-dribble" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="right-side">
                <div className="showcase-uiux culture-tech">
                    <img src="assets/uiux_design/culture tech.png" className="culture-tech-img" />
                    <img src="assets/uiux_design/culture tech 2.png" className="culture-tech-img-2" />
                    <img src="assets/uiux_design/culture tech 3.png" className="culture-tech-img-3" />
                </div>
                <div className="showcase-uiux guido">
                    <img src="assets/uiux_design/guido 2.png" className="guido-img" />
                    <img src="assets/uiux_design/guido 1.png" className="guido-img-2" />
                    <img src="assets/uiux_design/guido 3.png" className="guido-img-3" />
                </div>
            </div>

        </div>
    )
}

export default UIUXSection;