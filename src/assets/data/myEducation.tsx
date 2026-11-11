export interface Carddata {
	school: string;
	location: string;
	degree: string;
	program: string;
	startDate: string;
	endDate: string;
	bullets: string;
}

export const education = [
	{
		school: "DeForest Area High School",
		location: "DeForest, WI",
		degree: "Diploma",
		program: "General Studies",
		startDate: "1987-08",
		endDate: "1991-05",
		bullets: ["General Studies Diploma"],
	},
	{
		school: "Madison Area Technical College",
		location: "Madison, WI",
		degree: "Associate of Arts",
		program: "Visual Communications",
		startDate: "1999-08",
		endDate: "2002-05",
		bullets: [
			"Generated corporate branding materials.",
			"Fashioned logos, pamphlets, postcards, flyers and posters.",
			"Produced photography layouts and quality video.",
			"Constructed informational websites using HTML and images.",
		],
	},
	{
		school: "Sanford-Brown College-Phoenix",
		location: "Phoenix, AZ",
		degree: "Technical Certificate",
		program: "Medical Assistant",
		startDate: "2010-04",
		endDate: "2010-12",
		bullets: [
			"Executed precise patient pre-exam vital signs.",
			"Accomplished accurate client information and electronic medical records.",
			"Achieved successful blood draws.",
		],
	},
	{
		school: "Sanford-Brown College-Phoenix",
		location: "Phoenix, AZ",
		degree: "Associate of Science",
		program: "Cardiovascular Sonography",
		startDate: "2011-04",
		endDate: "2012-07",
		bullets: [
			"Carried out proper protocols and techniques for echocardiogram exams.",
			"Executed electrocardiographs(EKG), conducted vital signs and maintained client information and records.",
			"Assisted the Cardiologist with Transesophageal Echocardiograms(TEE) during stress tests and open heart surgical procedures.",
		],
	},
	{
		school: "Bottega University",
		location: "Phoenix, AZ",
		degree: "Technical Certificate",
		program: "Full Stack Web Development",
		startDate: "2022-04",
		endDate: "2022-11",
		bullets: [
			"Grew my front-end design skills utilizing HTML, Javascript, ReactJS and Cascading Style Sheets.",
			"Expanded my back-end coding by utilizing Python for API Development.",
		],
	},
];
