import "./App.css";
import Board from "./components/Board";
import Layout from "./components/Layout";

function App() {
  return (
    <div className='App'>
      <Layout>
        <Board />
      </Layout>
    </div>
  );
}

export default App;
