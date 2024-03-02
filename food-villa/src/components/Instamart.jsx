import { useState } from "react";

/* eslint-disable react/prop-types */
const Section = ({ title, description, isVisible, setIsVisible }) => {
	return (
		<div className="border border-black p-2 m-2">
			<h3 className="font-bold text-xl">{title}</h3>
			{!isVisible && (
				<button
					onClick={() => setIsVisible(!isVisible)}
					className="bg-orange-400 px-4 py-1 my-2 rounded"
				>
					Show
				</button>
			)}
			{isVisible && <p>{description}</p>}
		</div>
	);
};

const Instamart = () => {
	const [sectionConfig, setSectionConfig] = useState({
		showAbout: true,
		showTeam: false,
		showCareers: false,
	});
	return (
		<div>
			<h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
			<Section
				title="About Instamart"
				description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Learjet sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Lauds PageMaker including versions of Lorem Ipsum."
				isVisible={sectionConfig.showAbout}
				setIsVisible={() =>
					setSectionConfig({
						showAbout: true,
						showTeam: false,
						showCareers: false,
					})
				}
			/>
			<Section
				title="Team Instamart"
				description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
				isVisible={sectionConfig.showTeam}
				setIsVisible={() =>
					setSectionConfig({
						showAbout: false,
						showTeam: true,
						showCareers: false,
					})
				}
			/>
			<Section
				title="Careers"
				description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
				isVisible={sectionConfig.showCareers}
				setIsVisible={() =>
					setSectionConfig({
						showAbout: false,
						showTeam: false,
						showCareers: true,
					})
				}
			/>
		</div>
	);
};

export default Instamart;
