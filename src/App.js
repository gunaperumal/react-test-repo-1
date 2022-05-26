import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="wrapper">
        <img src="https://storefries.com/images/analytics/logo.svg" class="img"></img>
        <div class="form">
          <h2>Login</h2>
          <label>Username</label><br></br>
          <input placeholder='username'></input><br></br><br></br>
          <label>Password</label><br></br>
          <input placeholder='password'></input><br></br><br></br>
          <button class="button">Login</button>
        </div>
      </div>
    </div>

  );
}
export default App;
