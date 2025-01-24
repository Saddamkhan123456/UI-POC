import React, { useState } from "react";
import ReactECharts from "echarts-for-react"; // Import ECharts for React
import stockData from "../json/lineChart.json";

export const StackedLinesChart = () => {
	// Take the first 10 entries from stockData
	const topStockData = stockData.slice(0, 10);

	// Extract stock symbols and prices for the top 10 stocks
	const stockSymbols = topStockData.map((stock) => stock.stock_symbol);
	const stockPrices = topStockData.map((stock) => stock.stock_price);

	// Define a custom color palette
	const customColors = [
		"#FF6F61",
		"#6B5B95",
		"#88B04B",
		"#F7CAC9",
		"#92A8D1",
		"#955251",
		"#B565A7",
		"#009B77",
		"#DD4124",
		"#D65076",
	];

	// Generate series data for stacked line chart (top 10 entries)
	const series = topStockData.map((stock, index) => ({
		name: stock.stock_symbol,
		data: new Array(topStockData.length)
			.fill(0)
			.map((_, i) => (i <= index ? stockPrices[i] : 0)),
		type: "line",
		stack: "Total", // Important for stacking
		itemStyle: {
			// color: `hsl(${(index * 360) / topStockData.length}, 70%, 50%)`, // Dynamic color for each line
			itemStyle: {
				color: customColors[index], // Use custom color from the palette
			},
		},
	}));

	console.log("series", series);

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
			top: 40, // Distance from the top of the chart container
			left: "center", // Center the legend horizontally
			orient: "horizontal", // Horizontal orientation
			textStyle: {
				color: "#333", // Text color of the legend
				fontSize: 14, // Font size of the legend labels
			},
			itemWidth: 20, // Width of the legend items
			itemHeight: 10, // Height of the legend items
			icon: "circle", // Custom shape for legend items (circle, rectangle, etc.)
			formatter: (name: any) => `${name} Stock`, // Custom formatter for legend items
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
			name: "Stock Prices",
			nameLocation: "middle",
			nameGap: 40,
			nameTextStyle: {
				align: "center", // Can be "center", "right", or "left"
				verticalAlign: "top", // Can be "top", "middle", or "bottom"
				fontFamily: "Montserrat, serif",
				fontSize: 14,
				fontWeight: "bold",
			},
			axisLabel: {
				rotate: 45, // Rotate the x-axis labels by 45 degrees
				fontWeight: "bold",
			},
		},
		yAxis: {
			type: "value",
			name: "Ticker Symbol",
			nameLocation: "middle", // Can also be "middle" or "end"
			nameTextStyle: {
				align: "center", // Can be "center", "right", or "left"
				verticalAlign: "top", // Can be "top", "middle", or "bottom"
				fontFamily: "Montserrat, serif",
				fontSize: 14,
				fontWeight: "bold",
			},
			// Use padding to shift the title
			nameGap: 40, // You can adjust the gap between the axis and title
			padding: [10, 0, 0, 20], // Example padding
			axisLabel: {
				formatter: (value: number) => {
					// Here you can format the y-axis values
					if (value >= 1000) {
						return `${value / 1000}k`; // Convert large values to 'k'
					} else {
						return value;
					}
				},
			},
		},
		series: series,
	};

	return (
		<div style={{ width: "800px", height: "60vh" }} className="">
			<ReactECharts option={option} />
		</div>
	);
};
