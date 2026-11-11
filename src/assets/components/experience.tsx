import styles from "../styles/experience.module.scss";
import { experienceData } from "../data/myExperience";
import { ExperienceCard } from "../components/card";

export default function ExperienceSection() {
	// return <TimelineCard />;
	return (
		<section className={styles.experienceTimeLine}>
			{experienceData.map((item) => (
				<ExperienceCard key={item.id} job={item} />
			))}
		</section>
		// <section className={styles.experienceTimeline}>
		// 	{experienceData.map((item) => (
		// 		<ExperienceCard key={item.id} job={item} />
		// 	))}
		// 	</section>;
	);
}
