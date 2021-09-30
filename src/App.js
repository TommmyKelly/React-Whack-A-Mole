import "./App.css";
import Board from "./components/Board";
import Layout from "./components/Layout";
import Login from "./components/Login";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return (
      <div>
        <Layout />
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <Layout>
          <p>Error: {error}</p>
        </Layout>
      </div>
    );
  }

  return (
    <div className='App'>
      <Layout>{user ? <Board /> : <Login />}</Layout>
    </div>
  );
}

export default App;
