import styles from "./footer.module.scss";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className={styles.footer}>
                 <Link to="https://github.com/raph4sure">
                        <img
                            src="/footer_img/github3.svg"
                            alt="Github Logo"
                            className="w-[clamp(0.9rem,1.7vw,1.5rem)] object-contain"
                        />
                    </Link>
                    <Link to="https://www.linkedin.com/in/alabi-raphael/">
                        <img
                            src="/footer_img/linkedin.png"
                            alt="LinkedIn Logo"
                            className="w-[clamp(1rem,2vw,2rem)] object-contain"
                        />
                    </Link>
                    <Link to='https://x.com/raph4sure007?s=09'>
                        <img
                            src="/footer_img/twitter.png"
                            alt="Twitter Logo"
                            className="w-[clamp(1.2rem,2vw,2rem)] object-contain"
                        />
                    </Link>
        </div>
    );
}
