import type { ReactNode } from "react";
import styles from "../styles/collapsible.module.scss";

interface CollapsibleProps {
	isOpen: boolean;
	children: ReactNode;
}

export function Collapsible({ isOpen, children }: CollapsibleProps) {
	return (
		<div className={`${styles.collapsible} ${isOpen ? styles.open : ""}`}>
			<div className={styles.inner}>{children}</div>
		</div>
	);
}
