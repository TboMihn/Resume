import { useState } from "react";
import styles from "../styles/experience.module.scss";
import { experienceData } from "../data/myExperience";
import { ExperienceCard } from "../components/card";
import { Collapsible } from "../components/collapsible";

const VISIBLE_COUNT = 6;

export default function ExperienceSection() {
	const [showAll, setShowAll] = useState(false);

	const firstJobs = experienceData.slice(0, VISIBLE_COUNT);
	const extraJobs = experienceData.slice(VISIBLE_COUNT);
	// return <TimelineCard />;
	return (
		// <section className={styles.experienceTimeLine}>
		// 	{experienceData.map((item) => (
		// 		<ExperienceCard key={item.id} job={item} />
		// 	))}
		// </section>
		<section className={styles.experience}>
			<div className={styles.sectionTitle}>Experience</div>

			<div className={styles.experienceTimeLine}>
				{firstJobs.map((item) => (
					<ExperienceCard key={item.id} job={item} />
				))}

				{extraJobs.length > 0 && (
					<>
						<Collapsible isOpen={showAll}>
							{extraJobs.map((item) => (
								<ExperienceCard key={item.id} job={item} />
							))}
						</Collapsible>

						<button
							className={styles.showMoreBtn}
							onClick={() => setShowAll((prev) => !prev)}
							aria-expanded={showAll}
						>
							{showAll ? "Show less" : `Show ${extraJobs.length} more `}
						</button>
					</>
				)}
			</div>
		</section>
	);
}
