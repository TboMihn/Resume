import { FaFileDownload } from "react-icons/fa";
import styles from "../styles/navbar.module.scss";

export default function Navbar() {
	return (
		<nav className={styles.nav}>
			<div className={styles.navName}>
				<a href="#home">Thomas Finn</a>
			</div>

			<ul>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#skills">Skills</a>
				</li>
				<li>
					<a href="#experience">Experience</a>
				</li>
				<li>
					<a href="#education">Education</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>
			<div className={styles.nav_download}>
				<button type="button" className={styles.nav_btn}>
					<div>Download Resume</div>
					<div>
						<FaFileDownload className={styles.nav_btn_icon} />
					</div>
				</button>
			</div>
		</nav>
	);
}
