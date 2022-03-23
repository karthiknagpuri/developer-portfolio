import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
const GithubProfileCard = dynamic(() =>
	import("../components/GithubProfileCard")
);
import { openSource } from "../portfolio";
import SEO from "../components/SEO";

export default function Home({ githubProfileData }) {
	return (
		<div>
			<SEO
				data={{
					title: "Karthik Nagapuri",
					description:
						"A passionate Full Stack Web Developer and Mobile App Developer.",
					image: "https://serving.photos.photobox.com/76253069ab814ea179161c6b8ca9069acdfb39e88ec4a8af862a063f117b686ca49dea8d.jpg",
					url: "https://www.linkedin.com/in/karthiknagpuri/",
					keywords: [
						"Karthik NAGAPURI",
						"Karthik Nagapuri",
						"@Karthik Nagapuri",
						"Karthik Nagapuri Googleboy",
						"Portfolio",
						"Karthik Nagapuri Portfolio ",
						"Hanzla Tauqeer Portfolio",
						"web developer",
						"full stack",
						"full stack web developer",
						"mobile app developer",
						"android developer",
						"django",
						"flask",
						"django rest framework",
						"nodejs ",
						"expressjs",
						"reactjs ",
						"contextapi",
						"redux",
						"flutter",
					],
				}}
			/>
			<Navigation />
			<Greetings />
			<Skills />
			<Proficiency />
			<Education />
			<Experience />
			<Feedbacks />
			<Projects />
			<GithubProfileCard prof={githubProfileData} />
		</div>
	);
}

Home.prototype = {
	githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
	const githubProfileData = await fetch(
		`https://api.github.com/users/${openSource.githubUserName}`
	).then((res) => res.json());

	return {
		props: { githubProfileData },
	};
}
