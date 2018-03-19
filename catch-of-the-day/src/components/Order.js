import React from "react";
import { formatPrice } from "../helpers";
import { TransitionGroup, CSSTransition } from "react-transition-group";

/* eslint-disable react/prop-types */

class Order extends React.Component {
	// A "render" function: for when there is not enough stuff to justify creating another
	// component but enough clutter not to embed in the render method.
	renderOrder = key => {
		const fish = this.props.fishes[key];
		const count = this.props.order[key];
		const isAvailable = fish && fish.status === "available";

		const transitionOptions = {
			classNames: "order",
			key,
			timeout: { enter: 500, exit: 500 }
		};

		// Situation where order is retrieved from local storage before the fish are loaded from Firebase.
		if (!fish) return null;

		if (!isAvailable) {
			return (
				<CSSTransition {...transitionOptions}>
					<li key={key}>Sorry! {fish ? fish.name : "fish"} is no longer available.</li>
				</CSSTransition>
			);
		}

		// Transitions, in this case, happen on mounting and unmounting.
		// <CSSTransition classNames="order" key="{key}" timeout={{ enter: 250, exit: 250 }}>
		return (
			<CSSTransition {...transitionOptions}>
				<li key={key}>
					<span>
						<TransitionGroup component="span" className="count">
							<CSSTransition classNames="count" key={count} timeout={{ enter: 500, exit: 500 }}>
								<span>{count}</span>
							</CSSTransition>
						</TransitionGroup>
						&nbsp;lbs {fish.name}
						&nbsp;{formatPrice(count * fish.price)}
						<button onClick={() => this.props.deleteFromOrder(key)}>&times;</button>
					</span>
				</li>
			</CSSTransition>
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
				<TransitionGroup component="ul" className="order">
					{orderIds.map(this.renderOrder)}
				</TransitionGroup>
				<div className="total">
					<strong>{formatPrice(total)}</strong>
				</div>
			</div>
		);
	}
}

export default Order;
