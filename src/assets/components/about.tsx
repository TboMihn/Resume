import styles from "../styles/about.module.scss";
import EducationSection from "./education";

export default function About() {
	return (
		<div>
			<div className={styles.about}>
				<div className={styles.sectionTitle}>About me</div>
				<div className={styles.sectionNormalText}>
					<p>
						I bring together a diverse background in technology, office
						administration, customer service, management, and business
						operations. Throughout my career, I have worked in environments
						where organization, problem-solving, communication, and attention to
						detail are essential to keeping people and businesses moving
						forward.
					</p>
					<p>
						My experience ranges from developing websites and working with
						modern front-end technologies to managing office operations,
						coordinating purchasing and inventory, supporting customers,
						communicating with vendors, and helping teams work more efficiently.
					</p>
					<p>
						I have a practical understanding of how businesses operate, how
						technology can improve everyday processes, and how important it is
						to provide dependable, thoughtful service. Whether I am building a
						web interface, organizing administrative workflows, resolving a
						customer issue, coordinating inventory, or supporting a team, I
						approach the work with initiative, accountability, and a willingness
						to learn.
					</p>
					<p>
						I enjoy bringing structure to complex situations, finding practical
						solutions, and making technology and business processes easier for
						the people who depend on them. My goal is simple: to make a
						meaningful contribution by combining technical ability, operational
						experience, and a genuine commitment to helping people succeed.
					</p>
				</div>
			</div>
			<EducationSection />
		</div>
	);
}
