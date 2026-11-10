import styles from "../styles/header.module.scss";
import Navbar from "../components/navbar";
import { FaEnvelope, FaFileDownload } from "react-icons/fa";

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.headerContent}>
				{/* <img className={styles.headerImage} src={Sunset} alt="Sunset" /> */}

				<Navbar />

				<div className={styles.headerMain}>
					<div className={styles.headerMainLeft}>
						<div className={styles.headerMainLeftTitle}>Thomas L. Finn</div>
						<div className={styles.headerMainLeftSubTitle}>
							Technology, Operations & Client Services Professional
						</div>
						<div className={styles.headerMainLeftDescription}>
							A versatile professional who connects technology, people, and
							business operations.
						</div>
						<button type="button" className={styles.headerMainLeftBtn}>
							<div className={styles.headerMainLeftBtnText}>
								Get in Touch
								<span>
									<FaEnvelope className={styles.headerMainLeftBtnIcon} />
								</span>
							</div>
						</button>
					</div>
					<div className={styles.headerMainRight}></div>
				</div>
			</div>
		</header>
	);
}
