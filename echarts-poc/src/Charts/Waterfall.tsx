import React, { useState, useMemo } from "react";
import ReactECharts from "echarts-for-react"; // Import ECharts for React
import { Card, Form } from "react-bootstrap";
import WaterfallData from "../json/waterfallChart.json";

// // Mock Data
// const data = [
//   {
//     transaction_id: 1,
//     revenue: 318511.69,
//     cost: 33334.85,
//     profit: 285176.84,
//     date: "6/13/2021",
//     product_category: "electronics",
//     customer_age: 29,
//   },
//   {
//     transaction_id: 2,
//     revenue: 881182.24,
//     cost: 159089.25,
//     profit: 722092.99,
//     date: "4/27/2021",
//     product_category: "food",
//     customer_age: 43,
//   },
//   {
//     transaction_id: 3,
//     revenue: 959021.82,
//     cost: 264554.26,
//     profit: 694467.56,
//     date: "9/13/2021",
//     product_category: "electronics",
//     customer_age: 27,
//   },
// ];

const WaterfallChart: React.FC = () => {
	const data = WaterfallData;
	const [showSplitLine, setSplitLine] = useState<boolean>(false);

	// Prepare data for the waterfall chart
	const waterfallData = useMemo(() => {
		return [
			{ name: "Start", value: 0 },
			{ name: "Transaction 1 Revenue", value: data[0].revenue },
			{ name: "Transaction 1 Cost", value: -data[0].cost },
			{ name: "Transaction 1 Profit", value: data[0].profit },
			{ name: "Transaction 2 Revenue", value: data[1].revenue },
			{ name: "Transaction 2 Cost", value: -data[1].cost },
			{ name: "Transaction 2 Profit", value: data[1].profit },
			{ name: "Transaction 3 Revenue", value: data[2].revenue },
			{ name: "Transaction 3 Cost", value: -data[2].cost },
			{ name: "Transaction 3 Profit", value: data[2].profit },
		];
	}, []);

	// Define chart options
	const option = {
		title: {
			text: "Waterfall Chart: Revenue, Cost, and Profit",
			left: "center",
		},
		tooltip: {
			trigger: "item",
			axisPointer: {
				type: "shadow",
			},
			formatter: (params: any) => {
				return `${params.name}: ${params.value}`;
			},
		},
		grid: {
			left: "3%",
			right: "4%",
			bottom: "3%",
			containLabel: true,
		},
		xAxis: {
			type: "category",
			data: waterfallData.map((item) => item.name),
			name: "Transaction Stage",
			nameLocation: "middle",
			nameGap: 30,
			splitLine: { show: showSplitLine },
			axisLine: {
				show: false, // Hide the X-axis line
			},
		},
		yAxis: {
			type: "value",
			name: "Amount",
		},
		series: [
			{
				data: waterfallData.map((item) => item.value),
				type: "bar",
				barWidth: 40,
				itemStyle: {
					itemStyle: {
						borderColor: "transparent",
					},
					color: (params: { dataIndex: number }) => {
						if (params.dataIndex) {
							return "#13B898";
						}
					},
				},
			},
		],
	};

	const toggleSplitLine = () => {
		setSplitLine((prev: any) => !prev);
	};

	return (
		<div className="w-100">
			<Card className="my-5 d-flex align-items-start" body>
				<Form.Check
					checked={showSplitLine}
					label="Show Splitline"
					className="d-inline-block"
					id="showSplitLine"
					onClick={toggleSplitLine}
				/>
			</Card>
			<div style={{ width: "600px" }}>
				<ReactECharts option={option} />
			</div>
		</div>
	);
};

export default WaterfallChart;
