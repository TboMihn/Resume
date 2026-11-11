import styles from "../styles/experience.module.scss";

export default function Experience() {
	return (
		<div className={styles.experience}>
			<div className={styles.sectionTitle}>Experience</div>
			<div>
				Listed are all of my past jobs for the last 10 years. For a full list,
				click the expand list button to show the next 10 years.
			</div>
			<div className="timeline">
				<div className="timeline-item">
					<div className="timeline-dot"></div>
					<div className="timeline-card">
						<h3 className="timeline-card-role">Role: Some role</h3>
						<div className="timeline-card-company">Company: Some Company</div>
						<div className="timeline-card-date">Date: Some Date</div>
						<div className="timeline-card-description">Description</div>
					</div>
				</div>
				<div className="timeline-item">
					<div className="timeline-dot"></div>
					<div className="timeline-card">
						<h3 className="timeline-card-role">Role: Some role</h3>
						<div className="timeline-card-company">Company: Some Company</div>
						<div className="timeline-card-date">Date: Some Date</div>
						<div className="timeline-card-description">Description</div>
					</div>
				</div>
				<div className="timeline-item">
					<div className="timeline-dot"></div>
					<div className="timeline-card">
						<h3 className="timeline-card-role">Role: Some role</h3>
						<div className="timeline-card-company">Company: Some Company</div>
						<div className="timeline-card-date">Date: Some Date</div>
						<div className="timeline-card-description">Description</div>
					</div>
				</div>
				<div className="timeline-item">
					<div className="timeline-dot"></div>
					<div className="timeline-card">
						<h3 className="timeline-card-role">Role: Some role</h3>
						<div className="timeline-card-company">Company: Some Company</div>
						<div className="timeline-card-date">Date: Some Date</div>
						<div className="timeline-card-description">Description</div>
					</div>
				</div>
				<div className="timeline-item">
					<div className="timeline-dot"></div>
					<div className="timeline-card">
						<h3 className="timeline-card-role">Role: Some role</h3>
						<div className="timeline-card-company">Company: Some Company</div>
						<div className="timeline-card-date">Date: Some Date</div>
						<div className="timeline-card-description">Description</div>
					</div>
				</div>

				<div className="timeline-line"></div>
			</div>
		</div>
	);
}
