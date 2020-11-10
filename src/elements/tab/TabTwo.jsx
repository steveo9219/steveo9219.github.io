import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

class TabsTwo extends Component {
	render() {
		let tab1 = "My Skills",
			tab2 = "Education",
			tab3 = "Experience";
		const { tabStyle } = this.props;
		return (
			<div>
				{/* Start Tabs Area */}
				<div className="tabs-area">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<Tabs>
									<TabList className={`${tabStyle}`}>
										<Tab>{tab1}</Tab>
										<Tab>{tab2}</Tab>
										<Tab>{tab3}</Tab>
									</TabList>

									<TabPanel>
										<div className="single-tab-content">
											<ul>
												<li>
													<a href="/service">
														Front-End Web Development{" "}
														<span>
															{" "}
															<b>- React, HTML, CSS, Bootstrap, Materialze </b>
														</span>
													</a>
													"Let's make it functional then make it look pretty!"
												</li>
												<li>
													<a href="/service">
														Back-End Web Development
														<span>
															<b> - NodeJS, ExpressJS, mySQL, MongoDB</b>
														</span>
													</a>
													"Ok, where does the Data go exactly and how do we get
													it on the page?"
												</li>
											</ul>
										</div>
									</TabPanel>

									<TabPanel>
										<div className="single-tab-content">
											<ul>
												<li>
													<a href="/service">
														University of Texas at Austin Coding Bootcamp
														<span>- Full Stack Web Development</span>
													</a>{" "}
													04-2020 to 11-2020
												</li>
											</ul>
										</div>
									</TabPanel>

									<TabPanel>
										<div className="single-tab-content">
											<ul>
												<li>
													<a href="/service">
														Surgical/Endoscopy Technician- 
														I have 8 years of experience assisting various Doctors during emergency and elective Endoscopy procedures. In a procedure room it is crucial that I have exceptional communication with a variety of people with different backgrounds. We must work as a team to ensure the patient is taken care of regardless of our personal technical backgrounds. Over the years I have learned to adapt to ever changing situations and respond with creativity and critical thinking to solve many problems that can arise during a procedure.
														<span> - HCA/ St. Davids Healthcare</span>
													</a>{" "}
													2012 - Current
												</li>
												<li>
													<a href="/service">
														"Insert{" "}
														<span>
															<b>your</b>
														</span>{" "}
														company name here!"
													</a>{" "}
													2020-3020
												</li>
											</ul>
										</div>
									</TabPanel>
								</Tabs>
							</div>
						</div>
					</div>
				</div>

				{/* End Tabs Area */}
			</div>
		);
	}
}

export default TabsTwo;
