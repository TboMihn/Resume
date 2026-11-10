import styles from "../styles/main.module.scss";

import About from "../components/about";
import Jobs from "../components/jobs";
import Techstack from "./techstack";

export default function Main() {
	return (
		<div className={styles.main}>
			<Techstack />
			<div className={styles.aboutContainer}>
				<About />
				<Jobs />
			</div>
		</div>
	);
}
