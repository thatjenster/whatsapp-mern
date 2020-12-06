import Styles from './styles/styles.css'
import SideBar from './components/SideBar'
import Chat from './components/Chat'

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <SideBar />
        <Chat />
      </div>
    </div>
  );
}

export default App
