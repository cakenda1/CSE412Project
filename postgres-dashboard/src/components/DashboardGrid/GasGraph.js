import React, { Component } from 'react';
import CanvasJSReact from '../../canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
var dataPoints =[];
class GasGraph extends Component {
 
	render() {	
		const options = {
			animationEnabled: true,
			theme: "light2",
			title:{
				text: "Gas in US States"
			},
			axisX: {
				title: "State" ,
				reversed: true,
			},
			axisY: {
				title: "Price per Gallon ($)",
				includeZero: true,

			},
			data: [{
				type: "column",
				dataPoints: dataPoints
			}]
		}
    
		return (
		<div>
			<CanvasJSChart options = {options} 
				 onRef={ref => this.chart = ref}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
	
	componentDidMount(){
		var chart = this.chart;
    const URL = "http://localhost:5017"

		fetch(URL + "/gas")
		.then(function(response) {
			return response.json();
		})
		.then(function(data) {
			for (var i = 0; i < data.length; i++) {
				dataPoints.push({
					label: data[i].name,
					y: data[i].gascost
				});
			}
			chart.render();
		});
	}
}
 
export default GasGraph;  