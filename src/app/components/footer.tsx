import ContactMe from "./contact-me";
import Social from "./social";

const Footer = () => {

    return (
        <div className="footer">

            <div className="left-side">
                <div className="footer-content">
                    <h1>Fares Hentati</h1>
                    <p>feres.henteti@gmail.com</p>
                    <div>
                        <h4>Connect with me!</h4>
                        <Social/>
                    </div>
                </div>
            </div>

            <div className="right-side">
                <h3>At your service!</h3>
                <ContactMe/>
            </div>

        </div>
    )
}

export default Footer;