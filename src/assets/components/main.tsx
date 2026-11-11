import styles from "../styles/main.module.scss";

import About from "../components/about";
import Experience from "./experience";
import Techstack from "./techstack";

export default function Main() {
	return (
		<main className={styles.main}>
			<Techstack />
			<div className={styles.mainAboutEdu}>
				<section className={styles.mainLeftContainer}>
					<About />
				</section>
				<section className={styles.mainRightContainer}>
					<Experience />
				</section>
			</div>
			<div className={styles.mainSchools}>{/* <Schools /> */}</div>
		</main>
	);
}
