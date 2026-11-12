import type { ReactNode } from "react";

interface EmailLinkProps {
	user: string;
	domain: string;
	tld: string;
	subject?: string;
	className?: string;
	ariaLabel?: string;
	children: ReactNode;
}

export function EmailLink({
	user,
	domain,
	tld,
	subject,
	className,
	ariaLabel = "Send me an email",
	children,
}: EmailLinkProps) {
	const handleClick = () => {
		// The address only exists here, at click time
		const address = `${user}@${domain}.${tld}`;
		const query = subject ? `?subject=${encodeURIComponent(subject)}` : "";
		window.location.href = `mailto:${address}${query}`;
	};

	return (
		<button
			type="button"
			className={className}
			onClick={handleClick}
			aria-label={ariaLabel}
		>
			{children}
		</button>
	);
}
