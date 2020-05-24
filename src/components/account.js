import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

var total = 100000;
var limit = 10000;

export default class Account extends Component {
	constructor(props) {
		super(props)
		this.state = {
			amount: '',

		}
		setTimeout(() => {
			alert('your session is ended');
			this.setState({
				redirect: true,
			})
		}, 60000)
	}
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	onSubmit = (e) => {

		e.preventDefault();

		const form = {
			amount: this.state.amount
		}
		this.setState({
			amount: ''
		})

		if (form.amount >= total) {
			alert('balance insufficient your balance is' + this.total)

		} else if (Math.floor(Math.random() * Math.floor(2)) === 2) {
			alert('network issue');
		}
		else {
			let transactionID = Math.floor(Math.random() * 6) + 1;
			const summary = {
				total: total,
				balance: total - form.amount,
				transactionAmount: form.amount - 0,
				transactionID: transactionID,
				daywise: new Date().toLocaleDateString()

			}
			total = total - form.amount;

			var limitAmount = localStorage.getItem('day_' + new Date().toLocaleDateString());


			if (limitAmount == null) {
				limitAmount = 0;
			}
			//console.log((parseInt(limitAmount) + parseInt(form.amount)));
			if ((parseInt(limitAmount) + parseInt(form.amount)) > limit) {
				alert('transaction limit is over try tommorrow');
			} else {
				localStorage.setItem('transactions_' + transactionID, JSON.stringify(summary));
				localStorage.setItem('CurrentTransactions', JSON.stringify(summary));
				localStorage.setItem('day_' + new Date().toLocaleDateString(), parseInt(form.amount) + parseInt(limitAmount));
			}
		}

	}
	render() {
		if (this.state.redirect) {
			return (
				<Redirect to={'/'} />
			)
		}

		return (
			<form>
				<table>
					<tbody>
						<tr>
							<td><input type="radio" value="Current" name="radio" /> Current</td>
							<td> <input type="radio" value="Savings" name="radio" /> Savings</td>
						</tr>&nbsp;
					</tbody>
				</table>

				<label>
					Enter Amount:
				<input
						name='amount'
						type='number'
						value={this.state.amount}
						onChange={e => this.handleChange(e)} />
				</label>

				<button onClick={(e) => this.onSubmit(e)}>withdraw</button>
				<button onClick={() => this.props.history.push('/')}>Cancel</button>

				<div style={{ marginTop: 10 }}>
					{localStorage.getItem('CurrentTransactions')}
				</div>
			</form>


		)

	}

}
