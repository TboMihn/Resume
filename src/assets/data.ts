export interface Job {
  company: string;
  location: string;
  role: string;
  start: string;
  end: string;
  bullets: string[];
}

export interface School {
  institution: string;
  location: string;
  degree: string;
  field: string;
  graduated: string;
  bullets: string[];
}

export interface Award {
  title: string;
  detail: string;
}

export const contact = {
  name: "Thomas L. Finn",
  address: "Angwin, CA 94508",
  phone: "(623) 210-8126",
  email: "tlfinn1618@gmail.com",
  tagline:
    "Versatile professional blending full-stack development with decades of operational leadership, customer service, and cross-industry adaptability.",
};

export const experience: Job[] = [
  {
    company: "Castle Rock Pet Doc",
    location: "Morristown, AZ",
    role: "Receptionist",
    start: "August 2024",
    end: "August 2025",
    bullets: [
      "Processed patient scheduling and billing inquiries with accuracy and professionalism.",
      "Entered and maintained medical records, ensuring compliance and confidentiality.",
      "Provided excellent customer service to clients both in person and over the phone.",
      "Processed payments for services rendered.",
    ],
  },
  {
    company: "Amazon, Inc.",
    location: "Arlington, WA",
    role: "Fulfillment Associate",
    start: "January 2024",
    end: "April 2024",
    bullets: [
      "Stowed inventory for purchase on Amazon.com.",
      "Performed problem solving of inventory that could not properly be stowed.",
      "Dispatched to independent job duties of searching for lost or misplaced inventory (IOL) and properly problem-solving the items.",
      "Assisted in the establishment of a drop-zone policy to aid in the location of items not stowed.",
    ],
  },
  {
    company: "The Village Veterinarian",
    location: "Chelan, WA",
    role: "Practice Manager",
    start: "September 2023",
    end: "November 2023",
    bullets: [
      "Ordered and maintained hospital inventory.",
      "Rendered daily reports.",
      "Accomplished patient scheduling and customer service in a time-sensitive manner.",
      "Assisted the Doctor with medical treatments.",
      "Successfully performed price changes on all items and procedures.",
      "Processed payment for services and communicated with vendors to negotiate pricing.",
    ],
  },
  {
    company: "GILI Sports",
    location: "Phoenix, AZ",
    role: "Warehouse Manager",
    start: "February 2023",
    end: "September 2023",
    bullets: [
      "Proficiently generated daily shipping labels using Shipstation and Shopify.",
      "Conducted weekly informational meetings via Google Meet with operations and customer service teams.",
      "Carried out customer assistance via email and chat using Gorgias, a ticket-based help desk for e-commerce.",
      "Kept track of inventory and pricing in Shopify.",
      "Successfully scheduled delivery and receiving of inventory; executed inventory counts on delivery.",
    ],
  },
  {
    company: "Amazon, Inc.",
    location: "Goodyear, AZ",
    role: "RSR Process Guide",
    start: "April 2021",
    end: "February 2023",
    bullets: [
      "Achieved the role of Process Guide; selected and developed a team of efficient PIT drivers and problem-solvers.",
      "Ensured that customer satisfaction was paramount.",
      "Achieved the status of Expert Problem Solver for Single Asin Pallets.",
      "Certified in Crown RC Forklift, Order Picker, Turret Truck, Clamp Truck, and Electric Pallet Jack.",
      "Built a team fully certified and trained in every aspect of the role.",
    ],
  },
  {
    company: "Petsvet, LLC",
    location: "Surprise, AZ",
    role: "Office Manager",
    start: "April 2012",
    end: "March 2021",
    bullets: [
      "Successfully performed sensitive data entry of paper records into electronic medical records.",
      "Expanded company data collection through document and form creation, and website design.",
      "Performed weekly, monthly, and yearly inventory orders and counts of pet foods, medications, and supplies.",
      "Fulfilled all vendor communication including price negotiations.",
      "Energetically carried out customer assistance in person, by phone, and by email.",
    ],
  },
  {
    company: "Lockerroom Bar",
    location: "Madison, WI",
    role: "Bartender",
    start: "April 2006",
    end: "March 2009",
    bullets: [
      "Served drinks and cooked food items for bar customers.",
      "Ran nightly shift reports and made nightly cash deposits.",
      "Processed both cash and credit card payments.",
    ],
  },
  {
    company: "Nau-ti-gal Restaurant",
    location: "Madison, WI",
    role: "Bartender / Bar Manager",
    start: "January 2006",
    end: "August 2009",
    bullets: [
      "Served as Bar Manager (2007–2009) and Shift Supervisor (2006–2009).",
      "Greeted and seated customers; answered phones and resolved guest questions.",
      "Ran nightly shift reports, made deposits, and reconciled all cash sales.",
      "Closed out server tickets and processed cash and credit card payments.",
      "Conducted weekly and monthly inventory counts and placed orders.",
    ],
  },
  {
    company: "Walmart Supercenter",
    location: "Madison, WI & Fort Collins, CO",
    role: "Associate",
    start: "September 2002",
    end: "December 2006",
    bullets: [
      "Performed background checks for firearm sales; verified and logged firearms per State and Federal regulations.",
      "Conducted inventory counts, price changes, and merchandise stocking.",
      "Assisted customers at a full-service sporting goods counter and surrounding departments.",
    ],
  },
  {
    company: "Nau-ti-gal Restaurant",
    location: "Madison, WI",
    role: "Bartender",
    start: "September 1999",
    end: "August 2002",
    bullets: [
      "Served drinks and food at the bar; greeted and seated customers.",
      "Ran nightly reports, made deposits, and took payments.",
      "Assisted with banquet service, setup, and teardown.",
      "Conducted weekly and monthly inventory counts and orders.",
    ],
  },
  {
    company: "Stock Lumber, Inc.",
    location: "Windsor, WI",
    role: "Delivery Driver",
    start: "July 1998",
    end: "August 1999",
    bullets: [
      "Obtained a Commercial Driver's License Class B.",
      "Delivered lumber, doors, windows, and cabinets to job sites.",
    ],
  },
  {
    company: "Mountain Jack's Restaurant",
    location: "Madison, WI",
    role: "Bartender",
    start: "January 1998",
    end: "June 1998",
    bullets: [
      "Served drinks, appetizers, and dinners at the bar.",
      "Processed cash and credit card payments and provided excellent customer service.",
    ],
  },
  {
    company: "Pearl's Nightclub",
    location: "Madison, WI",
    role: "Bartender / Assistant Manager",
    start: "September 1995",
    end: "January 1998",
    bullets: [
      "Served drinks, appetizers, and dinners at the bar; supervised bar and banquet bars.",
      "Served drinks for banquet events with 300+ customers.",
      "Made nightly cash deposits, ran reports, and assisted with inventory and ordering.",
    ],
  },
  {
    company: "Olive Garden",
    location: "Madison, WI",
    role: "Bartender",
    start: "September 1993",
    end: "September 1995",
    bullets: [
      "Served drinks, appetizers, and dinners at the bar.",
      "Processed cash and credit payments.",
      "Conducted weekly inventory counts and placed bar inventory orders.",
    ],
  },
];

export const education: School[] = [
  {
    institution: "Bottega University",
    location: "Phoenix, AZ",
    degree: "Certificate",
    field: "Full-Stack Development",
    graduated: "November 2022",
    bullets: [
      "Grew front-end design skills utilizing HTML, JavaScript, ReactJS, and CSS.",
      "Expanded back-end coding by utilizing Python for API development.",
    ],
  },
  {
    institution: "Sanford-Brown College",
    location: "Phoenix, AZ",
    degree: "Associate of Science",
    field: "Cardiovascular Ultrasound",
    graduated: "July 2012",
    bullets: [
      "Carried out proper protocols and techniques for echocardiogram exams.",
      "Executed EKGs, conducted vital signs, and maintained client records.",
      "Assisted the Cardiologist with TEE procedures during stress tests and open heart surgeries.",
    ],
  },
  {
    institution: "Sanford-Brown College",
    location: "Phoenix, AZ",
    degree: "Technical Diploma",
    field: "Medical Assistant",
    graduated: "December 2010",
    bullets: [
      "Executed precise patient pre-exam vital signs.",
      "Accomplished accurate client information and electronic medical records.",
      "Achieved successful blood draws.",
    ],
  },
  {
    institution: "Madison Area Technical College",
    location: "Madison, WI",
    degree: "Associate of Arts",
    field: "Visual Communications",
    graduated: "May 2002",
    bullets: [
      "Generated corporate branding materials including logos, pamphlets, postcards, flyers, and posters.",
      "Produced photography layouts and quality video.",
      "Constructed informational websites using HTML and images.",
    ],
  },
];

export const skills: string[] = [
  "HTML", "JavaScript", "ReactJS", "Python", "Django", "MySQL", "SQLite",
  "CSS / SCSS", "Visual Studio Code", "Adobe Creative Suite", "Google Suite",
  "Microsoft Office", "Shopify", "Shipstation", "Gorgias",
  "Customer Service", "Data Entry", "Electronic Medical Records",
  "Leadership & Management", "Team Building & Delegation",
  "Complex Problem Solving", "Purchasing & Procurement",
  "Written & Verbal Communications", "Visual Communications",
  "Organization & Efficiency", "Windows", "macOS / Apple",
];

export const skillCategories = [
  {
    label: "Development",
    items: ["HTML", "JavaScript", "ReactJS", "Python", "Django", "MySQL", "SQLite", "CSS / SCSS", "Visual Studio Code"],
  },
  {
    label: "Tools & Platforms",
    items: ["Adobe Creative Suite", "Google Suite", "Microsoft Office", "Shopify", "Shipstation", "Gorgias"],
  },
  {
    label: "Professional",
    items: [
      "Customer Service", "Data Entry", "Electronic Medical Records",
      "Leadership & Management", "Team Building & Delegation",
      "Complex Problem Solving", "Purchasing & Procurement",
      "Written & Verbal Communications", "Visual Communications",
      "Organization & Efficiency",
    ],
  },
  {
    label: "Systems",
    items: ["Windows", "macOS / Apple"],
  },
];

export const awards: Award[] = [
  {
    title: "Valedictorian",
    detail: "Sanford-Brown College — Medical Assistant Program · 4.0 GPA",
  },
];
