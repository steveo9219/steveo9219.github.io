import React, { Component } from "react";
import { Helmet } from "react-helmet";

class PageHelmet extends Component {
	render() {
		return (
			<React.Fragment>
				<Helmet>
					<title>Stephen Guzman</title>
					<meta name="description" content="Stephen Guzman's Portfolio" />
				</Helmet>
			</React.Fragment>
		);
	}
}

export default PageHelmet;
