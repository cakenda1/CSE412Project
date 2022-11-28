import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
import GasGraph from './components/DashboardGrid/GasGraph';
import GroceriesGraph from './components/DashboardGrid/GroceriesGraph';
import './App.scss';
import RentGraph from './components/DashboardGrid/RentGraph';
import SumGraph from './components/DashboardGrid/SumGraph';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      showHideGas: false,
      showHideGroceries: false,
      showHideRent: false,
      showHideTotal: true
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(name) {
    console.log(name);
    switch (name) {
      case "showHideGas":
        this.setState({ showHideGas: true, showHideGroceries: false, showHideRent: false, showHideTotal: false });
        break;
      case "showHideGroceries":
        this.setState({ showHideGas: false, showHideGroceries: true, showHideRent: false, showHideTotal: false });
        break;
      case "showHideRent":
        this.setState({ showHideGas: false, showHideGroceries: false, showHideRent: true, showHideTotal: false });
        break;
      case "showHideTotal":
        this.setState({ showHideGas: false, showHideGroceries: false, showHideRent: false, showHideTotal: true });
        break;
      default:
        this.setState({ showHideGas: false, showHideGroceries: false, showHideRent: false, showHideTotal: true });
    }
  }
	render() {	
    const {showHideGas, showHideGroceries, showHideRent, showHideTotal} = this.state;
		return (
      <div className='container'>
        <div style={{height:'20px'}}></div>
        <div className='row'>
          <div className='col-2'></div>
          <div className='col-8'>
            <h1 className='borders'>Average Costs of Living Expenses in US States</h1>
          </div>
          <div className='col-2'></div>
        </div>
        <div style={{height:'80px'}}></div>
        <div className='row'>
          <div className='col-2'></div>
          <div className='col-2'>
            <button className='button' onClick={() => this.hideComponent("showHideGas")}>
              Gas
            </button>
          </div>
          <div className='col-2'>
            <button className='button' onClick={() => this.hideComponent("showHideGroceries")}>
              Groceries
            </button>
          </div>
          <div className='col-2'>
            <button className='button' onClick={() => this.hideComponent("showHideRent")}>
              Rent
            </button>
          </div>
          <div className='col-2'>
            <button className='button' onClick={() => this.hideComponent("showHideTotal")}>
              Total
            </button>
          </div>
          <div className='col-2'></div>
          
        </div>
        <div style={{height:'80px'}}></div>
        
      {showHideGas && <div className='row'>
        <div className='col-1'></div>
        <div className='col-10'>

        <GasGraph></GasGraph>
        </div>
        <div className='col-1'></div>

			</div>}
      {showHideGroceries && <div className='row'>
        <div className='col-1'></div>
        <div className='col-10'>
        <GroceriesGraph></GroceriesGraph>
        </div>
        <div className='col-1'></div>
      </div>}
      {showHideRent && <div className='row'>
        <div className='col-1'></div>
        <div className='col-10'>
        <RentGraph></RentGraph>
        </div>
        <div className='col-1'></div>
      </div>}
      {showHideTotal && <div className='row'>
        <div className='col-1'></div>
        <div className='col-10'>
        <SumGraph></SumGraph>
        </div>
        <div className='col-1'></div>
      </div>}
		</div>

		
		);
	}
}
 
export default App;                  