import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './Logo.png';

function App() {
  return (
    <div>
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
        <h1>INDR</h1>
      </a>


      <div class="col-md-3 text-end" style={{marginRight: 30}}>
        <button type="button" class="btn btn-outline-primary me-2">Get Started</button>
        <a class="btn btn-primary" href="mailto:zack@indr-ads.com">Contact</a>
      </div>
    </header>

    <div style={{textAlign: 'center', fontSize: '55px'}}>
      <div>Revolutionizing OOH through <br/> <span style={{color: '#0d6efd'}}>Data</span>, <span style={{color: '#0d6efd'}}>IOT</span>, and <span style={{color: '#0d6efd'}}>Analytics!</span></div>
      <div>
      <form>
  <div class="form-group" style={{width: '50%', marginLeft: 'auto', marginRight: 'auto', marginTop: '30px'}}>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
  </div>
  <button type="submit" class="btn btn-primary">Join Waitlist</button>
</form>
      </div>
    </div>
    </div>
  );
}

export default App;
