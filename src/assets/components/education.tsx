import styles from "../styles/education.module.scss";
import { education } from "../data/myEducation";
import { EducationCard } from "../components/educationCard";

export default function EducationSection() {
	const educationEntries = Array.isArray(education) ? education : [education];

	return (
		<section className={styles.education}>
			<div className={styles.sectionTitle}>Education</div>

			<div className={styles.educationTimeLine}>
				{educationEntries.map((entry) => (
					<EducationCard
						key={`${entry.school}-${entry.program}`}
						entry={entry}
					/>
				))}
			</div>
		</section>
	);
}
