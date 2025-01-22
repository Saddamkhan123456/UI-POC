import React, { useState } from "react";
import ReactECharts from "echarts-for-react"; // Import ECharts for React
import stockData from "../json/lineChart.json";
import { Card, Form } from "react-bootstrap";

export const LineChart = () => {
	const [smoothLine, setSmoothLine] = useState<boolean>(false);

	const stockSymbols = stockData.map((stock) => stock.stock_symbol);
	const stockPrices = stockData.map((stock) => stock.stock_price);
	const stockVolumes = stockData.map((stock) => stock.stock_volume);

	const toggleSmoothLine = () => {
		setSmoothLine(!smoothLine);
	};

	const option = {
		title: {
			text: "Simple Bar Chart",
			left: "center",
		},
		tooltip: {
			trigger: "axis",
		},
		legend: {
			data: ["Price", "Volume"],
		},
		xAxis: {
			type: "category",
			data: stockSymbols,
		},
		yAxis: {
			type: "value",
		},
		series: [
			{
				data: stockPrices,
				type: "line",
				itemStyle: {
					color: "#13B898",
				},
				smooth: smoothLine, // added for smooth line
			},
		],
	};

	return (
		<div>
			<Card className="my-5 d-flex align-items-start" body>
				<Form.Check
					checked={smoothLine}
					label="Smooth Line"
					className="d-inline-block"
					id="smoothLine"
					onClick={toggleSmoothLine}
				/>
			</Card>
			<div style={{ width: "600px" }}>
				<ReactECharts option={option} />
			</div>
		</div>
	);
};

export const StackedLinesChart = () => {
	// Take the first 10 entries from stockData
	const topStockData = stockData.slice(0, 10);

	// Extract stock symbols and prices for the top 10 stocks
	const stockSymbols = topStockData.map((stock) => stock.stock_symbol);
	const stockPrices = topStockData.map((stock) => stock.stock_price);

	// Generate series data for stacked line chart (top 10 entries)
	const series = topStockData.map((stock, index) => ({
		name: stock.stock_symbol,
		data: new Array(topStockData.length)
			.fill(0)
			.map((_, i) => (i <= index ? stockPrices[i] : 0)),
		type: "line",
		stack: "Total", // Important for stacking
		itemStyle: {
			color: `hsl(${(index * 360) / topStockData.length}, 70%, 50%)`, // Dynamic color for each line
		},
	}));

	const option = {
		title: {
			text: "Stacked Line Chart",
			left: "center",
		},
		tooltip: {
			trigger: "axis",
		},
		legend: {
			data: stockSymbols,
			top: 35, // Distance from the bottom of the chart container
			orient: "horizontal", // Horizontal orientation of the legend
			left: "center", // Center the legend horizontally
		},
		grid: {
			left: "3%",
			right: "4%",
			bottom: "0%",
			top: "35%",
			containLabel: true,
		},
		xAxis: {
			type: "category",
			data: stockSymbols, // Use stock symbols as x-axis labels
		},
		yAxis: {
			type: "value",
		},
		series: series,
	};

	return (
		<div style={{ width: "600px" }}>
			<ReactECharts option={option} />
		</div>
	);
};
