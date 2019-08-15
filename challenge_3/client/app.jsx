class Checkout extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            view: "personal",
            
            name:'',
            email: '',
            password: '',

            line1:'',
            line2: '',
            city: '',
            state: '',
            zipcode1: '',
            phone:'',

            number:'',
            date: '',
            cvv: '',
            zipcode2: ''

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit1 = this.handleSubmit1.bind(this)
        this.handleSubmit2 = this.handleSubmit2.bind(this)
        this.handleSubmit3 = this.handleSubmit3.bind(this)
        this.handleCheckout = this.handleCheckout.bind(this)
    }
    handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]: value
        })
    }
    handleSubmit1(event) {
        event.preventDefault()
        $.ajax({
            type:'POST',
            url: '/checkout/personal',
            data: {name: this.state.name, email:this.state.email, password: this.state.password },
            success: () => {
                console.log('Personal info added!')
            } 
        })
        this.setState({view:'address'})
    }
    handleSubmit2(event){
        event.preventDefault()
        $.ajax({
            type: 'POST',
            url: '/checkout/address',
            data: {line1:this.state.line1, line2:this.state.line2, city:this.state.city, state:this.state.state, zipcode1:this.state.zipcode1, phone:this.state.phone},
            success: () => console.log("Address info added!")
        })
        this.setState({view:'credit card'})
    }
    handleSubmit3(event){
        event.preventDefault()
        $.ajax({
            type: 'POST',
            url: '/checkout/creditcard',
            data: {number:this.state.number, date:this.state.date, cvv: this.state.cvv, zipcode2:this.state.zipcode2},
            success: () => console.log('Credit card info added')
        })
        this.setState({view:'checkout'})
    }

    handleCheckout(event) {
        event.preventDefault()
        console.log(this.state)
    }

    render() {
        if(this.state.view === 'personal'){
            return (
                <form onSubmit={this.handleSubmit1}>
                    <label>Name:
                        <input name="name" onChange={this.handleChange} value={this.state.name}></input>
                    </label>

                    <label>Email:
                        <input name="email" onChange={this.handleChange} value={this.state.email}></input>
                    </label>

                    <label>Password:
                        <input name="password" onChange={this.handleChange} value={this.state.password}></input>
                    </label>
                    <input type="submit" value="Next"/>
                </form>
            )
        } else if (this.state.view === 'address') {
            return (
                <form onSubmit={this.handleSubmit2}>
                    <label>Line1:
                        <input name="line1" onChange={this.handleChange} value={this.state.line1}></input>
                    </label>

                    <label>Line2:
                        <input name="line2" onChange={this.handleChange} value={this.state.line2}></input>
                    </label>

                    <label>City:
                        <input name="city" onChange={this.handleChange} value={this.state.city}></input>
                    </label>

                    <label>State:
                        <input name="state" onChange={this.handleChange} value={this.state.state}></input>
                    </label>

                    <label>Zip Code:
                        <input name="zipcode1" onChange={this.handleChange} value={this.state.zipcode1}></input>
                    </label>

                    <label>Phone Number:
                        <input name="phone" onChange={this.handleChange} value={this.state.phone}></input>
                    </label>
                    <input type="submit" value="Next"/>
                </form>
                )
            } else if(this.state.view === 'credit card'){
                return(
                    <form onSubmit={this.handleSubmit3}>
                        <label>Credit Card Number:
                            <input name="number" onChange={this.handleChange} value={this.state.number}></input>
                        </label>

                        <label>Expiration Date:
                            <input name="date" onChange={this.handleChange} value={this.state.date}></input>
                        </label>

                        <label>CVV:
                            <input name="cvv" onChange={this.handleChange} value={this.state.cvv}></input>
                        </label>

                        <label>Zip Code:
                            <input name="zipcode2" onChange={this.handleChange} value={this.state.zipcode2}></input>
                        </label>
                        <input type="submit" value="Next"/>
                    </form>
                    )
                } else {
                    return (
                        <form onSubmit={this.handleCheckout}>
                            <input type="submit" value="Checkout" ></input>
                        </form>
                    )
                }
            }
}

ReactDOM.render(<Checkout />, document.getElementById("app"))