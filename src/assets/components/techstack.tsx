import type { IconType } from "react-icons";
import {
	DiHtml5,
	DiJavascript1,
	DiReact,
	DiCss3,
	DiSass,
	DiPython,
	DiDjango,
	DiMysql,
	DiGithubBadge,
	DiPhotoshop,
	DiIllustrator,
} from "react-icons/di";
import type { CSSProperties } from "react";
import styles from "../styles/techstack.module.scss";

interface Tech {
	name: string;
	Icon: IconType;
}

const technologies: Tech[] = [
	{ name: "HTML5", Icon: DiHtml5 },
	{ name: "JavaScript", Icon: DiJavascript1 },
	{ name: "React", Icon: DiReact },
	{ name: "CSS3", Icon: DiCss3 },
	{ name: "Sass", Icon: DiSass },
	{ name: "Python", Icon: DiPython },
	{ name: "Django", Icon: DiDjango },
	{ name: "MySQL", Icon: DiMysql },
	{ name: "GitHub", Icon: DiGithubBadge },
	{ name: "Photoshop", Icon: DiPhotoshop },
	{ name: "Illustrator", Icon: DiIllustrator },
];

// Seconds each icon takes to pass by. Lower = faster.
const SECONDS_PER_ITEM = 3;

export default function Techstack() {
	const marqueeStyle = {
		"--duration": `${technologies.length * SECONDS_PER_ITEM}s`,
	} as CSSProperties;

	return (
		<div className={styles.techStack} style={marqueeStyle}>
			<div className={styles.track}>
				{/* Two identical groups. The second is hidden from screen readers. */}
				{[0, 1].map((copy) => (
					<ul key={copy} className={styles.group} aria-hidden={copy === 1}>
						{technologies.map(({ name, Icon }) => (
							<li key={name} className={styles.item}>
								<Icon className={styles.techStackIcon} aria-hidden="true" />
								<span className={styles.techStackLabel}>{name}</span>
							</li>
						))}
					</ul>
				))}
			</div>
		</div>
	);
}
