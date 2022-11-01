import './App.css';
import Weather from './Weather';


setTimeout(function refresh() {
  window.location.reload();
}, 30000);
function App() {
  return (
    <>
      <hr  id="first-line"/>
      <hr id='second-line'/>
      <header>
        <h1 undragable>5-Day Forecast.</h1>
      </header>
      <section>
        <Weather />
      </section>
    </>
  );
}

export default App;