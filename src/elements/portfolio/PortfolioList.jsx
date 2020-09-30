import React, { Component } from "react";

const PortfolioListContent = [
	{
		image: "image-1",
		category: "HTML/CSS/JS/APIs.",
		title: "Vacation Planner App. Project 1",
		livelink: "https://cb-group-6-project-1.github.io/travel-board/",
		ghubrepo: "https://github.com/CB-Group-6-Project-1/travel-board",
	},
	{
		image: "image-2",
		category: "REACT/mySQL/Node.js/Express.js",
		title: "Wedding Planner App. Project 2",
		livelink: "https://wedding-planner-platform.herokuapp.com/",
		ghubrepo: "https://github.com/wedding-planner-app/wedding-planner",
	},
	{
		image: "image-3",
		category: "REACT/MongoDB/Node.js/Express.js/Auth0.",
		title: "TRAILme App. Project 3",
		livelink: "https://www.dictionary.com/browse/in--progress",
		ghubrepo: "https://github.com/TRAILme-APP/TRAILme",
	},
	{
		image: "image-4",
		category: "Home Work Assignment",
		title: "React Employee Directory",
		livelink: "https://employee-directory-stephen-g.herokuapp.com/",
		ghubrepo: "https://github.com/steveo9219/employee-directory-stephen-G",
	},
	{
		image: "image-3",
		category: "Development",
		title: "Getting tickets to the big show",
	},
	{
		image: "image-4",
		category: "Development",
		title: "Getting tickets to the big show",
	},
];

class PortfolioList extends Component {
	render() {
		const { column, styevariation } = this.props;
		const list = PortfolioListContent.slice(0, this.props.item);
		return (
			<React.Fragment>
				{list.map((value, index) => (
					<div className={`${column}`} key={index}>
						<div className={`portfolio ${styevariation}`}>
							<div className="thumbnail-inner">
								<div className={`thumbnail ${value.image}`}></div>
								<div className={`bg-blr-image ${value.image}`}></div>
							</div>
							<div className="content">
								<div className="inner">
									<p>{value.category}</p>
									<h4>
										<a href={value.livelink}>{value.title}</a>
									</h4>
									<div className="portfolio-button">
										<a className="rn-btn" href={value.livelink}>
											See the Live App
										</a>
									</div>
									<div className="portfolio-button">
										<a className="rn-btn" href={value.ghubrepo}>
											See the Github Repo
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</React.Fragment>
		);
	}
}
export default PortfolioList;
