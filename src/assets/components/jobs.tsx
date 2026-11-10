import styles from "../styles/experience.module.scss";

export default function Jobs() {
	return (
		<div className={styles.experience}>
			<div className={styles.experienceTitle}>Experience</div>
			<div>This is my career path</div>
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
