import React from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BarChart } from "./Charts/Bar";
import { Card, CardBody, Container } from "react-bootstrap";
import { LineChart, StackedLinesChart } from "./Charts/Line";

function App() {
	return (
		<div className="App">
			<Container className="p-5 d-flex flex-column align-items-center">
				<h1 className="py-5">Bar Chart</h1>
				<Card className="">
					<Card.Body>
						<BarChart />
					</Card.Body>
				</Card>
			</Container>
		</div>
	);
}

export default App;
