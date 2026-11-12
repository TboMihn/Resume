import { useState } from "react";
import styles from "../styles/card.module.scss";
import type { EducationEntry } from "../data/myEducation";
import { Collapsible } from "./collapsible";

interface EducationCardProps {
	entry: EducationEntry;
}

// Turns "2002-05" into "May 2002"
function formatDate(value: string) {
	const [year, month] = value.split("-").map(Number);
	return new Date(year, month - 1).toLocaleDateString("en-US", {
		month: "short",
		year: "numeric",
	});
}

export function EducationCard({ entry }: EducationCardProps) {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<div className={styles.timeline}>
			<div className={styles.timelineItem}>
				<div className={styles.timelineDot}></div>
				<div className={styles.timelineCard}>
					<h3 className={styles.timelineCardRole}>
						<span>Degree: </span> {entry.degree}
					</h3>
					<div className={styles.timelineCardCompany}>
						<span>Program: </span> {entry.program}
					</div>
					<button
						className={styles.toggleBtn}
						onClick={() => setIsExpanded((prev) => !prev)}
						aria-expanded={isExpanded}
					>
						{isExpanded ? "Minimize ▲" : "Expand ▼"}
					</button>

					<Collapsible isOpen={isExpanded}>
						<div className={styles.timelineCardCompany}>
							<span>School: </span> {entry.school}
						</div>
						<div className={styles.timelineCardLocation}>
							<span>Location: </span> {entry.location}
						</div>
						<div className={styles.timelineCardDate}>
							<span>Starting Date: </span> {formatDate(entry.startDate)}
						</div>
						<div className={styles.timelineCardDate}>
							<span>Ending Date: </span> {formatDate(entry.endDate)}
						</div>
						<div className={styles.timelineCardDescription}>
							<span className={styles.timelineCardDescriptionTitle}>
								Description
							</span>
							<ul>
								{entry.bullets.map((bullet) => (
									<li key={bullet}>{bullet}</li>
								))}
							</ul>
						</div>
					</Collapsible>
				</div>
			</div>

			<div className={styles.timelineLine}></div>
		</div>
	);
}
