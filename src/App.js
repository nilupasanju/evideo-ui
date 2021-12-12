
import './App.css';
import React, {Component} from 'react';

import axios from 'axios'

const api = axios.create({
  baseURL: '/'
})


class App extends Component {

  state = {
    customers: []
  };

  constructor(){
    super();
    this.createCustomer = this.createCustomer.bind(this);
    this.deleteCustomer = this.deleteCustomer.bind(this);

    api.get('/api/customers').then(res => {
      console.log(res.data)
      this.setState({ customers: res.data })
    })
  }

  createCustomer = async() => {
    let res = await api.post('/api/customers', {name: "test2", email:"test2@test.com"})
    console.log(res)
  }

  deleteCustomer = async(id) => {
    let data = await api.delete('api/customers/${id}')
  }

  render() {
    return (
    <>
      <header>
        <nav>
          <div class="rowh">
             <img src="epicvedio.jpeg" alt="epic logo" class="logo"/>
            <ul class="main-nav">
                <li><a href="#">Information </a></li>
                <li><a href="#">Blog  </a></li>
                <li><a href="#">Movies  </a></li>
                <li><a href="#">Home  </a></li>
            </ul>
          </div>
        </nav>
      </header>
      <div class="container">
        <h1> Registration</h1>
        <div>
          <table class="Tform">
              <tr>
                <th>Create your Own Account</th>
              </tr> 
              <tr>
                <td class="tdform">
                  <form >
                    <input type="hidden" name="action" value="registration"/>
                    <input name="Submit" type="hidden" value="registration"/>
                    <pre>
                      <label for="name"><span class="form-data" >First Name:</span> </label><br/>
                      <input type="text" name="name" placeholder="" size="20" required/><br/>
                     <label for="mobile"><span class="form-data">Mobile Number:</span> </label><br/>
                      <input type="Number" name="phone" placeholder="" size="20" required/><br/>
                      <label for="Email"><span class="form-data">Email:</span> </label><br/>
                      <input type="Email" name="email" placeholder="" size="20" required/><br/>
                      <label for="Username"><span class="form-data">Username:</span> </label><br/>
                      <input type="text" name="username" placeholder="" size="20" required/><br/>
                      <label for="password"><span class="form-data">Password:</span> </label><br/>
                      <input type="password" name="password" placeholder="" size="20" required/><br/>
                      <button onClick={this.createCustomer}>Create Customer</button>
  
                    </pre>
                  </form>
                </td> 
              </tr>  
          </table>
        </div>
      </div>
      <div>
     
      <p id="demo"></p>
        {this.state.customers.map(customer => <h2 key={customer.id}> {customer.name}
        <button onClick={() =>this.deleteCustomer(customer.id)}>x</button></h2>)}
      </div>
      
     
      <footer class="footera">
        <nav class="footer-nav">    
          <a href="https://www.facebook.com/ATMCSOCIAL/" class="fa fa-facebook"></a>
          <a href="https://twitter.com/atmc_australia?lang=en" class="fa fa-twitter"></a>
          
          <p>
              Copyright &copy; 2021 by EpicVedio. All rights reserved.
          </p>
      
        </nav>
      </footer>
    </> 
    )
  }
}

export default App;
