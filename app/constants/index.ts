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


const projects :{
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: string;
	source_code_link?: string;
	deploy_link: string;
	platform: "Netlify" | "Vercel" | "Figma" | "Wordpress" | "Web"
}[] = [
	{
		name: "Alumni Management System",
		description:
			"A Designed and developed a visually appealing and user-friendly portfolio website using WordPress.",
		tags: [
			{
				name: "wordpress",
				color: "blue-text-gradient",
			},
			{
				name: "google-translate",
				color: "green-text-gradient",
			},
		],
		image: "/projectimg/avm.webp",
		platform: "Wordpress",
		deploy_link: "https://avmauto.in/",
	},
	{
		name: "Sparkbright Engineering Portfolio",
		description:
			" Designed and developed a visually appealing and user-friendly portfolio website using Next.JS.",
		tags: [
			{
				name: "next",
				color: "red-text-gradient",
			},
			{
				name: "Next UI",
				color: "orange-text-gradient",
			},
			{
				name: "tailwind",
				color: "blue-text-gradient",
			},
		],
		image: "/projectimg/sparkbright.png",
		source_code_link: "https://github.com/omunite215/React-Admin-DashBoard",
		platform: "Web",
		deploy_link: "https://sparkbright.in/",
	},
	{
		name: "HooBank",
		description:
			"A responsive Bank HomePage showcasing different features such as various payment gateways integration, easy money transfer, advanced security, etc. It has a beautiful interface made using Tailwind CSS and React",
		tags: [
			{
				name: "next",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "blue-text-gradient",
			},
		],
		image: "/projectimg/hoobank.webp",
		source_code_link: "https://github.com/omunite215/hoobank",
		platform: "Vercel",
		deploy_link: "https://hoobankbyom.netlify.app/",
	},
	{
		name: "MERN Dashboard",
		description:
			" Designed and developed a visually appealing and user-friendly Data Analytics Dashboard using MERN",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "materialui",
				color: "orange-text-gradient",
			},
			{
				name: "MongoDB",
				color: "green-text-gradient",
			},
			{
				name: "Express",
				color: "pink-text-gradient",
			},
		],
		image: "/projectimg/mern.png",
		source_code_link: "https://github.com/omunite215/Project_MERN-Dashboard",
		platform: "Web",
		deploy_link: "https://admin-frontend-r705.onrender.com/",
	},
	{
		name: "Metaverse Web 3.0",
		description:
			"A Modern UI/UX Landing Page using Framer Motion and TailwindCSS with a feel and looks of Web 3.0",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind",
				color: "green-text-gradient",
			},
			{
				name: "framer-motion",
				color: "orange-text-gradient",
			},
		],
		image: "/projectimg/metaverse.png",
		source_code_link: "https://github.com/omunite215/Project_Metaverse",
		platform: "Vercel",
		deploy_link: "https://project-metaverse-beta.vercel.app/",
	},
	{
		name: "Issue Tracker",
		description:
			"A Next.JS Full Stack Issue Tracker made using Next.Js, ShadCN UI, Prisma, mySQL with latest features like Next.JS Server Components, and Serverless features.",
		tags: [
			{
				name: "next",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind",
				color: "green-text-gradient",
			},
			{
				name: "shadCN",
				color: "orange-text-gradient",
			},
			{
				name: "mySQL",
				color: "green-text-gradient",
			},
		],
		image: "/projectimg/issuetracker.png",
		source_code_link: "https://github.com/omunite215/Project_Issue-Tracker",
		platform: "Vercel",
		deploy_link: "https://project-issue-tracker.vercel.app/",
	},
];

export { services, technologies, experiences, testimonials, projects };
