import type { IconType } from "react-icons";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import styles from "../styles/footer.module.scss";
import { EmailLink } from "./emailLink";
import { contact } from "../data/contact";

interface FooterLink {
	label: string;
	href: string;
	Icon: IconType;
	external?: boolean;
}

// Replace the hrefs with your own
const links: FooterLink[] = [
	{
		label: "GitHub",
		href: "https://github.com/TboMihn",
		Icon: FaGithub,
		external: true,
	},
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/thomaslfinn/",
		Icon: FaLinkedin,
		external: true,
	},
];

const NAME = "Thomas Finn";

export default function Footer() {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<footer className={styles.footer}>
			<ul className={styles.links}>
				{links.map(({ label, href, Icon }) => (
					<li key={label}>
						<a
							className={styles.link}
							href={href}
							aria-label={label}
							target="_blank"
							rel="noopener noreferrer"
						>
							<Icon className={styles.icon} aria-hidden="true" />
						</a>
					</li>
				))}

				<li>
					<EmailLink {...contact} className={styles.link} ariaLabel="Email me">
						<FaEnvelope className={styles.icon} aria-hidden="true" />
					</EmailLink>
				</li>
			</ul>

			<p className={styles.copy}>
				&copy; {new Date().getFullYear()} {NAME}. All rights reserved.
			</p>

			<button className={styles.topBtn} onClick={scrollToTop}>
				Back to top ▲
			</button>
		</footer>
	);
}
