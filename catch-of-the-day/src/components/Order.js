import React from "react";
import { formatPrice } from "../helpers";

/* eslint-disable react/prop-types */

class Order extends React.Component {
	// A "render" function: for when there is not enough stuff to justify creating another
	// component but enough clutter not to embed in the render method.
	renderOrder = key => {
		const fish = this.props.fishes[key];
		const count = this.props.order[key];
		const isAvailable = fish && fish.status === "available";

		// Situation where order is retrieved from local storage before the fish are loaded from Firebase.
		if (!fish) return null;

		if (!isAvailable) {
			return (
				<li key={key}>
					Sorry! {fish ? fish.name : "fish"} is no longer available.
				</li>
			);
		}

		return (
			<li key={key}>
				{count} lbs {fish.name}
				{formatPrice(count * fish.price)}
			</li>
		);
	};

	render() {
		const orderIds = Object.keys(this.props.order);
		let total = orderIds.reduce((prevTotal, key) => {
			const fish = this.props.fishes[key];
			const count = this.props.order[key];
			const isAvailable = fish && fish.status === "available";
			if (isAvailable) {
				return prevTotal + count * fish.price;
			}
			return prevTotal;
		}, 0);

		return (
			<div className="order-wrap">
				<h2>Order</h2>
				<ul className="order">{orderIds.map(key => this.renderOrder(key))}</ul>
				<div className="total">
					<strong>{formatPrice(total)}</strong>
				</div>
			</div>
		);
	}
}

export default Order;
