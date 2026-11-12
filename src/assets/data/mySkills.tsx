export interface SkillCategory {
	title: string;
	skills: string[];
}

export const skillsData: SkillCategory[] = [
	{
		title: "Web Development & Technology",
		skills: [
			"Front-end development using HTML5, CSS3, JavaScript, and React.",
			"Responsive web design using CSS Flexbox, Grid, and media queries.",
			"Git and GitHub version control.",
			"Python and Django backend development fundamentals.",
			"PostgreSQL and relational database concepts.",
			"Experience working with Vite and Visual Studio Code.",
			"Website design, document creation, and digital content development.",
			"Visual design experience with Adobe Photoshop and Illustrator.",
			"Foundational knowledge of Figma.",
		],
	},
	{
		title: "Office Administration & Business Support",
		skills: [
			"Office management and daily administrative coordination.",
			"Scheduling, calendar management, and appointment coordination.",
			"Document creation, data entry, and electronic record management.",
			"Microsoft Office and Google Workspace.",
			"Vendor communications and purchasing coordination.",
			"Accounts payable support, invoice processing, and payment handling.",
			"Travel arrangements and administrative support.",
			"Confidential records management and professional correspondence.",
			"Process organization and workflow improvement.",
		],
	},
	{
		title: "Customer Experience & Client Services",
		skills: [
			"More than 15 years of customer-facing experience.",
			"Written customer support through email, chat, and ticketing systems.",
			"Professional telephone and in-person customer service.",
			"Customer inquiries, billing questions, and payment processing.",
			"Order updates, issue resolution, and customer follow-through.",
			"Patient and client scheduling and communications.",
			"Relationship building with customers, vendors, and business partners.",
		],
	},
	{
		title: "Operations, Inventory & Team Support",
		skills: [
			"Purchasing, procurement, and vendor negotiations.",
			"Inventory management, receiving, and stock control.",
			"Inventory research and problem-solving.",
			"Warehouse operations and shipping coordination.",
			"Team coordination, training, and process support.",
			"Operational transitions and facility relocation support.",
			"Excel formulas, sorting, filtering, and inventory tracking.",
			"Powered industrial truck experience, including forklifts, order pickers, turret trucks, and clamp trucks.",
		],
	},
];
