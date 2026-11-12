import styles from "../styles/skills.module.scss";
import { skillsData } from "../data/mySkills";

export default function SkillsSection() {
	return (
		<section className={styles.skills}>
			<div className={styles.sectionTitle}>Skills</div>

			<div className={styles.grid}>
				{skillsData.map((category) => (
					<div key={category.title} className={styles.card}>
						<h3 className={styles.cardTitle}>{category.title}</h3>
						<ul className={styles.cardList}>
							{category.skills.map((skill) => (
								<li key={skill}>{skill}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
}
