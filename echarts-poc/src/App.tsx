import React from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { BarChart } from "./Charts/Bar";
import { Card, CardBody, Container } from "react-bootstrap";
import { LineChart, StackedLinesChart } from "./Charts/Line";
import WaterfallChart from "./Charts/Waterfall";
import StackedBarChart from "./Charts/StackedBar";
import VerticalTabs from "./Components/VerticaTab";

function App() {
	return (
		<div className="main">
			{/* <h1 className="py-5">Bar Chart</h1>
				<Card className="">
					<Card.Body>
						<BarChart />
					</Card.Body>
				</Card>
				<h1 className="py-5">Line Chart</h1>
				<Card className="">
					<Card.Body>
						<LineChart />
					</Card.Body>
					<Card.Body className="pt-5 border-top">
						<StackedLinesChart />
					</Card.Body>
				</Card>
				<h1 className="py-5">Waterfall Chart</h1>
				<Card className="w-auto" style={{ minWidth: "650px" }}>
					<Card.Body>
						<WaterfallChart />
					</Card.Body>
				</Card>
				<h1 className="py-5">StackedBar Chart</h1>
				<Card className="w-auto">
					<CardBody>
						<StackedBarChart />
					</CardBody>
				</Card> */}
			<VerticalTabs />
		</div>
	);
}

export default App;
