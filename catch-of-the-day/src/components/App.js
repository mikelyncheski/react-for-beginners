import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";

class App extends React.Component {
	state = {
		fishes: {},
		order: {}
	}

	addFish = fish => {
		// Take a copy of the existing state using object spread
		const fishes = { ...this.state.fishes };
		// Add our new fish
		fishes[`fish${Date.now()}`] = fish;
		// Update the state
		this.setState({ fishes });
	}

	loadSampleFishes = () => {
		this.setState({ fishes: sampleFishes });
	}

	addToOrder = (fishKey) => {
		// Take a copy of state
		const order = { ...this.state.order };
		// Either add to the order or update the number in our order.
		order[fishKey] = order[fishKey] + 1 || 1;
		// Update the state
		this.setState({ order });
	}

	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market" />
					<ul className="fishes">
						{Object.keys(this.state.fishes).map(key => <Fish key={key} index={key} fish={this.state.fishes[key]} addToOrder={this.addToOrder} />)}
					</ul>
				</div>
				<Order></Order>
				<Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}></Inventory>
			</div>
		);
	}
}

export default App;