import React, { Component } from "react";

const PortfolioListContent = [
	{
		image: "image-1",
		category: "HTML/CSS/JS/APIs.",
		title: "Vacation Planner App",
	},
	{
		image: "image-2",
		category: "REACT/mySQL/Node.js/Express.js/Auth0.",
		title: "Wedding Planner App",
	},
	{
		image: "image-3",
		category: "REACT/MongoDB/Node.js/Express.js/Auth0.",
		title: "TRAILme App",
	},
	{
		image: "image-4",
		category: "Development",
		title: "Getting tickets to the big show",
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
										<a href="/portfolio-details">{value.title}</a>
									</h4>
									<div className="portfolio-button">
										<a className="rn-btn" href="/portfolio-details">
											See the Live App
										</a>
									</div>
									<div className="portfolio-button">
										<a className="rn-btn" href="/portfolio-details">
											See the Repo
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
