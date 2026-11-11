import styles from "../styles/card.module.scss";
import type { JobExperience } from "../data/myExperience";
import { useState } from "react";
import { Collapsible } from "./collapsible";

interface ExperienceCardProps {
	job: JobExperience;
}

export function ExperienceCard({ job }: ExperienceCardProps) {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<div className={styles.timeline}>
			<div className={styles.timelineItem}>
				<div className={styles.timelineDot}></div>
				<div className={styles.timelineCard}>
					<h3 className={styles.timelineCardRole}>
						<span> {job.id}. Role: </span> {job.role}
					</h3>
					<div className={styles.timelineCardCompany}>
						<span>Company: </span> {job.company}
					</div>
					<div className={styles.timelineCardLocation}>
						<span>Location: </span> {job.coLocation}
					</div>

					<button
						className={styles.toggleBtn}
						onClick={() => setIsExpanded((prev) => !prev)}
						aria-expanded={isExpanded}
					>
						{isExpanded ? "Minimize" : "Expand"}
					</button>

					<Collapsible isOpen={isExpanded}>
						<div className={styles.timelineExpandable}>
							<div className={styles.timelineCardDate}>
								<span>Starting Date: </span> {job.startDate}
							</div>
							<div className={styles.timelineCardDate}>
								<span>Ending Date: </span> {job.endDate}
							</div>

							<div className={styles.timelineCardDescription}>
								<span className="timelineCardDescriptionTitle">
									Description
								</span>
								<ul>
									{job.skills.map((skill) => (
										<li key={skill}>{skill}</li>
									))}
								</ul>
							</div>
						</div>
					</Collapsible>

					{/* {isExpanded && (
						<div className={styles.timelineExpandable}>
							<div className={styles.timelineCardDate}>
								<span>Starting Date: </span> {job.startDate}
							</div>
							<div className={styles.timelineCardDate}>
								<span>Ending Date: </span> {job.endDate}
							</div>

							<div className={styles.timelineCardDescription}>
								<span className="timelineCardDescriptionTitle">
									Description
								</span>
								<ul>
									{job.skills.map((skill) => (
										<li key={skill}>{skill}</li>
									))}
								</ul>
							</div>
						</div>
					)} */}
				</div>
			</div>

			<div className={styles.timelineLine}></div>
		</div>
	);
}
