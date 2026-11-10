import styles from "../styles/header.module.scss";
import { FaEnvelope, FaFileDownload } from "react-icons/fa";
import Jobs from "./jobs";

import { DiHtml5 } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiSass } from "react-icons/di";
import { DiPython } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { DiGithubBadge } from "react-icons/di";
import { DiDjango } from "react-icons/di";
import { DiPhotoshop } from "react-icons/di";
import { DiIllustrator } from "react-icons/di";

// import Me from "../images/Professional_Mountain_Portrait_transparent.png";

export default function Header() {
	return (
		<div>
			<header className={styles.header}>
				<div className={styles.headerContent}>
					{/* <img className={styles.headerImage} src={Sunset} alt="Sunset" /> */}
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
					<div className={styles.headerMain}>
						<div className={styles.headerMainLeft}>
							<div className={styles.headerMainLeftTitle}>Thomas L. Finn</div>
							<div className={styles.headerMainLeftSubTitle}>
								Technology, Operations & Client Services Professional
							</div>
							<div className={styles.headerMainLeftDescription}>
								A versatile professional who connects technology, people, and
								business operations.
							</div>
							<button type="button" className={styles.headerMainLeftBtn}>
								<div className={styles.headerMainLeftBtnText}>
									Get in Touch
									<span>
										<FaEnvelope className={styles.headerMainLeftBtnIcon} />
									</span>
								</div>
							</button>
						</div>
						<div className={styles.headerMainRight}></div>
					</div>
				</div>
			</header>

			<main className={styles.main}>
				<div className={styles.techStack}>
					<DiHtml5 className={styles.techStackIcon} /> {/*HTML5 Icon*/}
					<DiJavascript1 className={styles.techStackIcon} />{" "}
					{/* JavaScript Icon */}
					<DiReact className={styles.techStackIcon} /> {/* React Icon */}
					<DiCss3 className={styles.techStackIcon} /> {/* css3 Icon */}
					<DiSass className={styles.techStackIcon} /> {/* Sass Icon */}
					<DiPython className={styles.techStackIcon} /> {/* Python Icon */}
					<DiDjango className={styles.techStackIcon} /> {/* Django Icon */}
					<DiMysql className={styles.techStackIcon} /> {/* MySQL Icon */}
					<DiGithubBadge className={styles.techStackIcon} /> {/* GitHub Icon */}
					<DiPhotoshop className={styles.techStackIcon} />
					{/* Photoshop Icon */}
					<DiIllustrator className={styles.techStackIcon} />
					{/* Illustrator Icon */}
				</div>
				<div className={styles.aboutContainer}>
					<div className={styles.about}>
						<div className={styles.aboutTitle}>About Me</div>
					</div>
					<div className={styles.experience}>
						<Jobs />
					</div>
				</div>
			</main>

			<footer className={styles.footer}>This is the footer</footer>
		</div>
	);
}
