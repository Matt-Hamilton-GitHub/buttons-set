import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <section class="buttons">
        <div class="container">
          <div>
            <h1 class="heading">Button Hover Effects</h1>
          </div>
          <a class="btnfos btnfos-1">
            <svg>
              <rect x="0" y="0" fill="none" width="100%" height="100%" />
            </svg>
            Hover
          </a>
          <a class="btnfos btnfos-2">Hover</a>

          <a class="btnfos btnfos-3">Hover</a>

          <a class="btnfos btnfos-4">
            <span>Hover</span>
          </a>

          <a class="btnfos btnfos-5">Hover</a>
        </div>
      </section>

      <div class="center">
        <div class="btn-1">
          <p>Button 1: </p>
          <a href="">
            <span>Hover over me</span>
          </a>
        </div>
        <div class="btn-2">
          <p>Button 2: </p>
          <a href="">
            <span>Hover over me</span>
          </a>
        </div>
      </div>

      <footer>
        <a href="https://codepen.io/grohit/" target="_blank">
          Check out My other pens
        </a>
      </footer>
    </div>
  );
}
