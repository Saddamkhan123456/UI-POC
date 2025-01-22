import React, { useState } from "react";
import ReactECharts from "echarts-for-react"; // Import ECharts for React
import BarData from "../json/barData.json";
import { Card, Form } from "react-bootstrap";

export const BarChart = () => {
	const data = BarData;
	const [showBackground, setShowBackground] = useState<boolean>(false);
	const [alignWithXAxis, setAlignWithXAxis] = useState<boolean>(false);
	const [differentBarColor, setDifferentBarColor] = useState<boolean>(true);

	// Group cars by model year
	const carCountByYear = data.reduce((acc: { [key: number]: number }, curr) => {
		const year = curr.car_model_year;
		acc[year] = acc[year] ? acc[year] + 1 : 1;
		return acc;
	}, {});

	const years = Object.keys(carCountByYear)
		.map((year) => Number(year))
		.sort((a, b) => a - b);
	const carCounts = years.map((year) => carCountByYear[year]);

	// Define chart options
	const option = {
		title: {
			text: "Car Distribution by Model Year",
			left: "center",
		},
		tooltip: {
			trigger: "axis",
			// Custom tooltip formatter
			formatter: (params: any) => {
				// Retrieve the year and count of cars from the parameters
				const year = years[params[0].dataIndex];
				const carCount = carCounts[params[0].dataIndex];

				// Format tooltip text
				return `<div><strong>Year: ${year}</strong></div>
						<div>Number of Cars: <span style="color: #FF5733;">${carCount}</span></div>`;
			},
		},
		xAxis: {
			type: "category",
			data: years,
			name: "Model Year",
			nameLocation: "middle",
			nameGap: 30,
			axisTick: {
				alignWithLabel: alignWithXAxis,
			},
		},
		yAxis: {
			type: "value",
			name: "Number of Cars",
		},
		series: [
			{
				data: carCounts,
				type: "bar",
				barWidth: 20,
				showBackground: showBackground,
				itemStyle: {
					color: (params: { dataIndex: number }) => {
						if (params.dataIndex % 2 === 0 && differentBarColor) {
							//every even bar
							return "#FF5733";
						}
						return "#13B898";
					},
				},
			},
		],
	};

	// Toggle background on button click
	const toggleBackground = () => {
		setShowBackground((prev: any) => !prev);
	};

	const toggleXAxisAlignment = () => {
		setAlignWithXAxis((prev: any) => !prev);
	};

	const toggleDifferentBarColor = () => {
		setDifferentBarColor((prev: any) => !prev);
	};

	return (
		<div>
			<Card className="my-5 d-flex align-items-start" body>
				<Form.Check
					checked={showBackground}
					label="Show Background"
					className="d-inline-block"
					id="backgroundCheckbox"
					onClick={toggleBackground}
				/>
				<Form.Check
					checked={alignWithXAxis}
					label="Align with X Axis"
					className="d-inline-block mx-4"
					id="xAxisCheckbox"
					onClick={toggleXAxisAlignment}
				/>
				<Form.Check
					checked={differentBarColor}
					label="Different Bar Color"
					className="d-inline-block"
					id="barColorCheckbox"
					onClick={toggleDifferentBarColor}
				/>
			</Card>
			<div style={{ width: "600px" }}>
				<ReactECharts option={option} />
			</div>
		</div>
	);
};

export default BarChart;
