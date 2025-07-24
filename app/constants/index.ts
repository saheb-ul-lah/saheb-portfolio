export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "UI/UX",
		icon: "/backend.webp",
	},
	{
		title: "Full Stack Web Development",
		icon: "/web.webp",
	},
	{
		title: "AI Integration",
		icon: "/mobile.webp",
	},
	{
		title: "Wordpress",
		icon: "/creator.webp",
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: "/tech/html.webp",
	},
	{
		name: "CSS 3",
		icon: "/tech/css.webp",
	},
	{
		name: "JavaScript",
		icon: "/tech/javascript.webp",
	},
	{
		name: "TypeScript",
		icon: "/tech/typescript.webp",
	},
	{
		name: "React JS",
		icon: "/tech/reactjs.webp",
	},
	{
		name: "Next.JS",
		icon: "/tech/nextjs.svg",
	},
	{
		name: "Redux Toolkit",
		icon: "/tech/redux.webp",
	},
	{
		name: "Tailwind CSS",
		icon: "/tech/tailwind.webp",
	},
	{
		name: "Three JS",
		icon: "/tech/threejs.webp",
	},
	{
		name: "git",
		icon: "/tech/git.webp",
	},
	{
		name: "figma",
		icon: "/tech/figma.webp",
	},
	{
		name: "wordpress",
		icon: "/tech/wordpress.webp",
	},
	{
		name: "bootstrap",
		icon: "/tech/bootstrap.webp",
	},
];

const experiences = [
	{
		title: "Software Developer Intern",
		company_name: "Digital Solutions Cell, Dibrugarh University",
		icon: "/company/avm.webp", // Placeholder - you'll need to add an icon
		iconBg: "#E6DEDD",
		date: "June 2024 - Present",
		points: [
			"Developed and deployed 10+ journal management and 2 alumni tracking systems, supporting over 2000 active users.",
			"Built and managed 'dssdu.in', a centralized client & intern management system with complex approval workflows and admin controls.",
			"Implemented PHP applications featuring admin dashboards, publication workflows, Mendeley (BibTeX) integration, and more.",
			"Contributed to a project funded by the Govt. of Assam to strengthen the university's research ecosystem.",
		],
	},
	{
		title: "Co-Founder & Developer",
		company_name: "DevPlexity",
		icon: "/company/avm.webp", // Placeholder - you'll need to add an icon
		iconBg: "#383E56",
		date: "August 2024 - Present",
		points: [
			"Co-founded a web solutions agency specializing in MERN and PHP-based scalable websites.",
			"Deliver SEO-optimized, high-performance web solutions to clients.",
			"Successfully developed and launched over 5 resort websites in the Dibrugarh & Tinsukia area.",
		],
	},
	{
		title: "Software Developer Intern",
		company_name: "DUSBA, Saltbrook Academy",
		icon: "/company/avm.webp", // Placeholder - you'll need to add an icon
		iconBg: "#383E56",
		date: "January 2025 - Present",
		points: [
			"Developing a large-scale HR & startup management system featuring 20+ modules alongside a team of 8.",
			"Building a PHP-based backend with considerations for future cloud integration.",
			"Optimizing the system for Payroll Management, Talent Acquisition, and Employee Relations.",
		],
	},
	{
		title: "Web Developer Trainee",
		company_name: "National Institute of Electronics & IT, Jorhat",
		icon: "/company/avm.webp", // Placeholder - you'll need to add an icon
		iconBg: "#E6DEDD",
		date: "January 2024 - February 2024",
		points: [
			"Completed a focused training program on modern web development practices.",
			"Gained hands-on experience in building and deploying web applications.",
			"Strengthened foundational knowledge of front-end and back-end technologies.",
		],
	},
];

const testimonials = [
	{
		id: 1,
		testimonial:
			"Saheb was entrusted with creating an Alumni Management Portal for our Centre for Journalism & Mass Communications. The platform is modern, clean, and features an intuitive admin panel, which received a lot of praise from colleagues, alumni, and students alike. We are extremely pleased with his work, as he demonstrated professionalism, experience, and a strong understanding of client needs.",
		name: "Abhilash Boruah, Asst. Professor, CSJMC.",
		image: "/socialmedia/behance.svg",
		link: "https://www.behance.net/omthecreator",
	},
	{
		id: 2,
		testimonial:
			"Saheb developed a comprehensive Journal Management System with a fully functional admin panel and streamlined workflows. The process involved multiple iterations and three meetings with our faculty panel. Saheb and his team member Kalyan consistently implemented the features we requested, ensuring everything was completed to perfection. The system is now operational, efficiently handling submissions and simplifying the entire workflow.",
		name: "H. K. Sharma, Assam Pharmacy Council",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/om-patel-401068143/",
	},
	{
		id: 3,
		testimonial:
			"Saheb created a complete Interns and HR Management System, enabling seamless access to all the websites they built (around 15 websites, including Journal Management and Alumni Management systems). The system, developed using both MERN and PHP stacks, was delivered ahead of schedule and included excellent maintenance support for all projects. Along with his teammate Kalyan, Saheb also developed the Digital Solutions Cell website, which perfectly manages interns and client workflows. The design and functionality are precisely what we needed.",
		name: "Dr. Rizwan Rehman, Asst. Professor",
		image: "/socialmedia/dribble.svg",
		link: "https://dribbble.com/om2121",
	},
	{
		id: 4,
		testimonial:
			"We approached Saheb and his team to create a comprehensive solution that includes modules such as Payroll Management, Recruitment, Employee Welfare, Diversity and Inclusion, and Offboarding, among others. They have already delivered several completed modules and are currently working on the remaining 14 modules. Their progress is impressive, and the team has been highly efficient in ensuring the quality and functionality of the deliverables. We look forward to the completion of the entire package.",
		name: "Aswini Dowerah, Director, Salt Brook Academy",
		image: "/socialmedia/portfolio.svg",
		link: "https://omthecreator.netlify.app/",
	}
];


const projects: {
	id: string;
	name: string;
	description: string;
	detailedDescription: string;
	tags: {
		name: string;
		color: string;
	}[];
    techIcons: string[];
	image: string;
    screenshots: string[];
	source_code_link?: string;
	deploy_link: string;
    team: { name: string; role: string }[];
	category: ('MERN' | 'PHP' | 'Next.js')[];
}[] = [
	{
		id: "journal-automation",
		name: "Journal Automation Platform",
		description:
			"10+ journal management platforms for Dibrugarh University, funded by the Govt. of Assam, processing over 500 research submissions.",
		detailedDescription:
			"Developed and deployed a suite of over 10 journal management platforms tailored for various departments at Dibrugarh University. This large-scale project, funded by the Government of Assam, is designed to streamline academic publishing. It handles the entire lifecycle of a research paper, from submission and peer review to final publication. Key features include automated citation formatting (Mendeley, BibTeX), DOI generation, and robust security measures that have enhanced data integrity by 30%. The system supports a complex workflow involving authors, reviewers, editors, and administrators, significantly improving the efficiency of the university's research ecosystem.",
		tags: [
			{ name: "php", color: "blue-text-gradient" },
			{ name: "mysql", color: "green-text-gradient" },
			{ name: "bootstrap", color: "pink-text-gradient" },
		],
        techIcons: ["/tech/php.svg", "/tech/mysql.svg", "/tech/bootstrap.webp"],
		image: "/projectimg/dujes.png", // Replace with your image
        screenshots: ["/projectimg/dujes.png", "/projectimg/aejdu.png", "/projectimg/ctprdu.png", "/projectimg/mathematical-forum.png"], // Replace
		deploy_link: "https://aejdu.in", // Add live link if available
		source_code_link: "https://github.com/saheb-ul-lah/PHARMA_2024", // Add repo link
        team: [{ name: "Kalyan Kumar Gupta", role: "Developer" }],
		category: ['PHP'],
	},
	{
		id: "alumni-management",
		name: "Alumni Management System",
		description:
			"Two large-scale alumni portals (PHP & MERN) serving 1000+ active users with role-based dashboards and interactive analytics.",
		detailedDescription:
			"Architected and deployed two separate alumni portals to serve the growing needs of university departments, one using a classic PHP/MySQL stack and the other using the modern MERN stack. These platforms support over 1000 active alumni, featuring secure, role-based dashboards for alumni, students, and administrators. An interactive analytics dashboard was a key feature, which successfully boosted user engagement by 40%. The system also includes a robust, automated, and manual verification process for new alumni registrations, ensuring data accuracy and a seamless user experience.",
		tags: [
			{ name: "react", color: "blue-text-gradient" },
			{ name: "nodejs", color: "green-text-gradient" },
			{ name: "mongodb", color: "pink-text-gradient" },
            { name: "php", color: "orange-text-gradient" },
		],
        techIcons: ["/tech/reactjs.webp", "/tech/nodejs.svg", "/tech/mongodb.svg", "/tech/php.svg"],
		image: "/projectimg/csjmc-alumni.png", // Replace with your image
        screenshots: ["/projectimg/csjmc-alumni.png", "/projectimg/pharma-society-du.png"], // Replace
		deploy_link: "https://pharmasocietydu.com", // Add live link
		category: ['MERN', 'PHP'],
        team: [],
	},
	{
		id: "excelitest",
		name: "Excelitest (Hackathon Winner)",
		description:
			"An award-winning platform converting Excel files into real-time MCQ quizzes with QR-code access, built with Next.js.",
		detailedDescription:
			"As part of the Anazori 2.0 Hackathon, our team built Excelitest, which secured 2nd Place. This innovative platform empowers educators and trainers by converting standard Excel files (XLSX) into interactive MCQ quizzes. It features real-time grading and provides instant feedback to users. Access to tests is streamlined via unique QR codes. Built with Next.js for a fast, server-rendered frontend and the XLSX library for backend processing, Excelitest successfully enhanced grading productivity by an estimated 20%.",
		tags: [
			{ name: "nextjs", color: "blue-text-gradient" },
			{ name: "react", color: "green-text-gradient" },
			{ name: "tailwind", color: "pink-text-gradient" },
		],
        techIcons: ["/tech/nextjs.svg", "/tech/reactjs.webp", "/tech/tailwind.webp"],
		image: "/projectimg/excelitest.png", // Replace with your image
        screenshots: ["/projectimg/excelitest.png"], // Replace
		deploy_link: "#", // Add live link
		source_code_link: "https://github.com/saheb-ul-lah", // Add repo link
        team: [{ name: "Team Code_9_to_5", role: "Hackathon Team" }],
		category: ['Next.js'],
	},
    {
		id: "hr-management",
		name: "HR & Startup Management System",
		description:
			"A large-scale HR system with 20+ modules for payroll, talent acquisition, and employee relations, built with PHP.",
		detailedDescription:
			"Currently developing a comprehensive, large-scale HR and startup management system in a team of 8 for DUSBA, Saltbrook Academy. The system is architected with over 20 distinct modules to handle all aspects of human resources and startup operations. It features a robust PHP-based backend with a clear roadmap for future cloud integration. Key modules include Payroll Management, Talent Acquisition, Employee Onboarding/Offboarding, and Employee Relations. The goal is to create a centralized, optimized platform that streamlines complex business processes.",
		tags: [
			{ name: "php", color: "blue-text-gradient" },
			{ name: "hrms", color: "green-text-gradient" },
			{ name: "backend", color: "pink-text-gradient" },
		],
        techIcons: ["/tech/php.png", "/tech/mysql.png"],
		image: "/projectimg/hr-system.webp", // Replace with your image
        screenshots: ["/projectimg/hr-system.webp"], // Replace
		deploy_link: "#", // Add live link
        team: [{ name: "Team of 8", role: "Development Team" }],
		category: ['PHP'],
	},
];

export { services, technologies, experiences, testimonials, projects };
