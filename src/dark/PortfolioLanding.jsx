import React from "react";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Helmet from "../component/common/Helmet";
import TextLoop from "react-text-loop";
import HeaderThree from "../component/header/HeaderThree";
import FooterTwo from "../component/footer/FooterTwo";
import TabTwo from "../elements/tab/TabTwo";
import ContactThree from "../elements/contact/ContactThree";
import PortfolioList from "../elements/portfolio/PortfolioList";
import ServiceList from "../elements/service/ServiceList";
import BlogContent from "../elements/blog/BlogContent";
import "./index.css";

const SlideList = [
	{
		textPosition: "text-left",
		category: "Howdy Future Employer!",
		description: "",
		buttonText: "",
		buttonLink: "",
	},
];
const PortfolioLanding = () => {
	let title = "About Me",
		description =
			"I am currently enrolled at The University of Texas at Austin Coding Bootcamp in the Full-Stack Web Developer Program.  I have always wanted to pursue a career in the tech industry and this is my first step to achieving that goal! I have always been fascinated by people that can code a website and create something from scratch.";
	const PostList = BlogContent.slice(0, 3);
	return (
		<div className="active-dark">
			<Helmet pageTitle="Portfolio Landing" />

			<HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />
			{/* Start Slider Area   */}
			<div id="home" className="fix">
				<div className="slider-wrapper">
					{/* Start Single Slide */}
					{SlideList.map((value, index) => (
						<div
							className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--25"
							key={index}
						>
							<div className="container">
								<div className="row">
									<div className="col-lg-12">
										<div className={`inner ${value.textPosition}`}>
											{value.category ? <span>{value.category}</span> : ""}
											<h1 className="title">
												Hi, I’m Stephen Guzman
												<br />
												<TextLoop>
													<span>
														the Full Stack<br></br>
														Web Developer
													</span>
													<span>
														the React <br></br>Developer
													</span>
													<span>
														the Back-End
														<br></br>Developer
													</span>
													<span>
														the Front-End
														<br></br>Developer
													</span>
													<span>
														the Cool <br></br>Guy
													</span>
												</TextLoop>{" "}
											</h1>
											<h2>raised in Austin, Texas.</h2>
											{value.description ? (
												<p className="description">{value.description}</p>
											) : (
												""
											)}
											{value.buttonText ? (
												<div className="slide-btn">
													<a
														className="rn-button-style--2 btn-primary-color"
														href={`${value.buttonLink}`}
													>
														{value.buttonText}
													</a>
												</div>
											) : (
												""
											)}
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
					{/* End Single Slide */}
				</div>
			</div>
			{/* End Slider Area   */}

			{/* Start About Area */}
			<div id="about" className="fix">
				<div className="about-area ptb--120  bg_color--1">
					<div className="about-wrapper">
						<div className="container">
							<div className="row row--35 align-items-center">
								<div className="col-lg-5">
									<div className="thumbnail">
										<img
											className="w-100"
											// change image for ABOUT ME here
											src="/assets/images/about/profile_picture.jpg"
											alt="About Images"
										/>
									</div>
								</div>
								<div className="col-lg-7">
									<div className="about-inner inner">
										<div className="section-title">
											<h2 className="title">{title}</h2>
											<p className="description">{description}</p>
										</div>
										<div className="row mt--30">
											<TabTwo tabStyle="tab-style--1" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* End About Area */}
			<div id="service" className="fix">
				<div className="service-area creative-service-wrapper ptb--120 bg_color--5">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="section-title text-center service-style--3 mb--30 mb_sm--0">
									<h2 className="title">My Resume</h2>
									<p>
										This is my current resume. I touched many aspects of Full
										Stack Web Development! I am always ready to learn more and
										add to my resume!
									</p>
									<div id="myresume" className="containerresume">
										<iframe
											className="responsive-iframe"
											src="https://docs.google.com/document/d/e/2PACX-1vQRYEo2IvoT3S9nUHSn43Tt-LCZ_2EigHyvkyxEdUh1EfbKcqb09CyAAGIaKI76eHqFS0gGfFxlBY8v/pub?embedded=true"
										></iframe>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Start Portfolio Area */}
			<div id="myprojects" className="fix">
				<div className="portfolio-area ptb--120 bg_color--1">
					<div className="portfolio-sacousel-inner">
						<div className="container">
							<div className="row">
								<div className="col-lg-12">
									<div className="section-title text-center service-style--3 mb--30 mb_sm--0">
										<h2 className="title">My Projects</h2>
										<p>
											In my Coding Bootcamp, I created{" "}
											<b>two major group projects</b> in the course. A Github
											link to the code is provided and a Heroku link to the live
											version of the site. A detailed README is provided with
											every project. Please explore my work and contact me with
											any questions!
										</p>
									</div>
								</div>
							</div>
							<div className="row">
								<PortfolioList
									styevariation="text-center mt--40"
									column="col-lg-4 col-md-6 col-sm-6 col-12"
									// change number of projects that appear
									item="4"
								/>
							</div>
							{/* view more button here */}
							{/*<div className="row">
								<div className="col-lg-12">
									<div className="view-more-btn mt--60 mt_sm--30 text-center">
										<a className="rn-button-style--2 btn-solid" href="/blog">
											<span>View More</span>
										</a>
									</div>
								</div>
							</div> */}
						</div>
					</div>
				</div>
			</div>
			{/* End Portfolio Area */}

			{/* Start COntact Area */}
			<div id="contact" className="fix">
				<div className="rn-contact-area ptb--120 bg_color--1">
					<ContactThree
						contactImages="/assets/images/about/about-9.jpg"
						contactTitle="Hire Me."
					/>
				</div>
			</div>
			{/* End COntact Area */}

			<FooterTwo />
			{/* Start Back To Top */}
			<div className="backto-top">
				<ScrollToTop showUnder={160}>
					<FiChevronUp />
				</ScrollToTop>
			</div>
			{/* End Back To Top */}
		</div>
	);
};

export default PortfolioLanding;
