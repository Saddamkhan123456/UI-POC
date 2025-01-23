import React, { useState } from "react";
import { Tab, Nav, Row, Col, Container } from "react-bootstrap";

// Example dynamic components for tab content
const Tab1Content = () => <div>Content for Tab 1</div>;
const Tab2Content = () => <div>Content for Tab 2</div>;
const Tab3Content = () => <div>Content for Tab 3</div>;
const Tab4Content = () => <div>Content for Tab 4</div>;

// Array of tab items with corresponding component names
const tabData = [
	{ eventKey: "tab1", label: "Tab 1", component: <Tab1Content /> },
	{ eventKey: "tab2", label: "Tab 2", component: <Tab2Content /> },
	{ eventKey: "tab3", label: "Tab 3", component: <Tab3Content /> },
	{ eventKey: "tab4", label: "Tab 4", component: <Tab4Content /> },
];

const VerticalTabs = () => {
	const [key, setKey] = useState<string>("tab1"); // Default active tab

	return (
		<Tab.Container defaultActiveKey={key}>
			<Row className="w-100 h-100">
				{/* Vertical Nav for Tab Items */}
				<Col sm={3} className="d-flex flex-column h-100 overflow-hidden">
					<Nav
						variant="pills"
						className="chart-nav flex-column h-100 overflow-auto"
						activeKey={key}
						onSelect={(k) => setKey(k || "")}>
						{tabData.map((tab) => (
							<Nav.Item key={tab.eventKey}>
								<Nav.Link eventKey={tab.eventKey}>{tab.label}</Nav.Link>
							</Nav.Item>
						))}
					</Nav>
				</Col>

				{/* Tab Content */}
				<Col sm={9} className="h-100 overflow-hidden">
					<Tab.Content className="h-100 overflow-auto">
						{tabData.map((tab) => (
							<Tab.Pane key={tab.eventKey} eventKey={tab.eventKey}>
								{tab.component}
							</Tab.Pane>
						))}
					</Tab.Content>
				</Col>
			</Row>
		</Tab.Container>
	);
};

export default VerticalTabs;
