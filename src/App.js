import './App.css';
import Dictionary from './Dictionary';
import logo from "./img/dictionary-logo.png";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a href="https://www.linkedin.com/in/liudmyla-kostiuk-5156ab42/" target="_blank" rel="noreferrer">
              Liudmyla Kostiuk
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
