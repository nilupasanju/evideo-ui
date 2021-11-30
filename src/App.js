
import './App.css';
import React, {Component} from 'react';

class App extends Component {
  render() {
    return (
    <>
      <header>
        <nav>
          <div class="rowh">
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
                      <input type="text" name="firstname" placeholder="" size="20" required/><br/>
                      <label for="name"><span class="form-data" >Last Name:</span> </label><br/>
                      <input type="text" name="lastname" placeholder="" size="20" required/><br/>
                      <label for="mobile"><span class="form-data">Mobile Number:</span> </label><br/>
                      <input type="Number" name="contactno" placeholder="" size="20" required/><br/>
                      <label for="Email"><span class="form-data">Email:</span> </label><br/>
                      <input type="Email" name="email" placeholder="" size="20" required/><br/>
                      <label for="Username"><span class="form-data">Username:</span> </label><br/>
                      <input type="text" name="username" placeholder="" size="20" required/><br/>
                      <label for="password"><span class="form-data">Password:</span> </label><br/>
                      <input type="password" name="password" placeholder="" size="20" required/><br/>
                      
                      <input type="submit" id="registration" value="Submit"/><input type="reset"/>
                    </pre>
                  </form>
                </td> 
              </tr>  
          </table>
        </div>
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
