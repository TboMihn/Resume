import styles from "../styles/techstack.module.scss";

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

export default function Techstack() {
	return (
		<div className={styles.techStack}>
			<DiHtml5 className={styles.techStackIcon} /> {/*HTML5 Icon*/}
			<DiJavascript1 className={styles.techStackIcon} /> {/* JavaScript Icon */}
			<DiReact className={styles.techStackIcon} /> {/* React Icon */}
			<DiCss3 className={styles.techStackIcon} /> {/* css3 Icon */}
			<DiSass className={styles.techStackIcon} /> {/* Sass Icon */}
			<DiPython className={styles.techStackIcon} /> {/* Python Icon */}
			<DiDjango className={styles.techStackIcon} /> {/* Django Icon */}
			<DiMysql className={styles.techStackIcon} /> {/* MySQL Icon */}
			<DiGithubBadge className={styles.techStackIcon} /> {/* GitHub Icon */}
			<DiPhotoshop className={styles.techStackIcon} /> {/* Photoshop Icon */}
			<DiIllustrator className={styles.techStackIcon} />{" "}
			{/* Illustrator Icon */}
		</div>
	);
}
