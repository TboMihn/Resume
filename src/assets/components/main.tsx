import styles from "../styles/main.module.scss";
import type { ComponentType } from "react";

import About from "../components/about";
import ExperienceSection from "./experience";
import SkillsSection from "./skills";
import Techstack from "./techstack";

const TypedExperienceSection = ExperienceSection as unknown as ComponentType;

export default function Main() {
	return (
		<main className={styles.main}>
			<Techstack />
			<div className={styles.mainAboutEdu}>
				<section className={styles.mainLeftContainer}>
					<About />
				</section>
				<section className={styles.mainRightContainer}>
					<TypedExperienceSection />
				</section>
			</div>

			<section className={styles.mainSkills}>
				<SkillsSection />
			</section>
		</main>
	);
}
