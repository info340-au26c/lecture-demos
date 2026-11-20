import './styles/App.css'
import ChatChannel from './components/ChatChannel';
import UserProfile from './components/UserProfile';
import HomePage from './components/HomePage';

function App() {
  const path = window.location.pathname;
  const channelMatch = path.match(/\/channel\/(.+)/)
  const userMatch = path.match(/\/user\/(.+)/)

  let pageToRender;

  if (channelMatch) {
    let name = channelMatch[1];
    pageToRender = <ChatChannel channelName={name} />
  } else if (userMatch) {
    let name = userMatch[1];
    pageToRender = <UserProfile userName={name} />
  } else {
    pageToRender = <HomePage />
  }

  return pageToRender;
}

export default App
