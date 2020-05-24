import React, { Component } from 'react';
//import { Route } from 'react-router-dom'

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};

		this.update = this.update.bind(this);

		this.displayLogin = this.displayLogin.bind(this);
    
    }

	update(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value
		});
    }
    

	displayLogin(e) {
		e.preventDefault();
		this.setState({
			email: '',
			password: ''
        });

        let hardcodedCred = {
            email: 'email@email.com',
            password: 'password123'
        }
    
        if ((this.state.email === hardcodedCred.email) && (this.state.password === hardcodedCred.password)) {
            const token = '123456abcdef';
            sessionStorage.setItem('auth-token', token);
            this.props.history.push('/account'); 
        } else {
            alert('wrong email or password combination');
        }
    
	}

	render() {
		return (
			<div className="login">
				<form onSubmit={this.displayLogin}>
					<h2>Bank Login</h2>
					<div className="username">
						<input
							type="text"
							placeholder="Account Number"
							value={this.state.email}
							onChange={this.update}
							name="email"
						/>
					</div>

					<div className="password">
						<input
							type="password"
							placeholder="Password"
							value={this.state.password}
							onChange={this.update}
							name="password"
						/>
					</div>

					<input type="submit" value="Login" />
				</form>
                
             </div>
		);
	}
}

export default Login;