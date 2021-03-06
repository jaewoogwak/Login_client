import React from "react";

class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            name: '',
            password: ''
        }
    }

    onNameChange = (event) => {
        this.setState({ name: event.target.value })
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value });
    }

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value });
    }

    onSubmitSignIn = () => {
        fetch('http://localhost:3000/register', {
            method : 'post',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({
                email : this.state.email,
                name : this.state.name,
                password : this.state.password
            })
        })
        .then(response => response.json())
        .then(user => {
            if(user) {
                // this.props.loadUser(user)
                console.log(user);
                this.props.onRouteChange('home');
            }
        })
    }




    render() {
        const { onRouteChange } = this.props;
        return (
            <div>
                <article className="br3 ba dark-gray b--black-20 mv6 w-500 w-100-m w-25-l mw6 center shadow">
                    <main className="pa4 black-80">
                        <div className="measure">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                <legend className="center pb3 f1 fw6 ph0 mh0">Register</legend>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor="name">name</label>
                                    <input
                                        onChange={this.onNameChange}
                                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-90"
                                        type="name"
                                        name="name"
                                        id="nam" />
                                </div>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                    <input
                                        onChange={this.onEmailChange}
                                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="email"
                                        name="email-address"
                                        id="email-address" />
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                    <input
                                        onChange={this.onPasswordChange}
                                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="password"
                                        name="password"
                                        id="password" />
                                </div>
                            </fieldset>
                            <div className="mv3 ml5 mr5">
                                <input
                                    onClick={this.onSubmitSignIn}
                                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib center"
                                    type="submit"
                                    value="Register"
                                />
                            </div>

                        </div>
                    </main>
                </article>
            </div>


        );
    }
}

export default Register;