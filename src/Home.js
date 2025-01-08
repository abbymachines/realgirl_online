import FrontCover from "./FrontCover";
import logo from './images/long_egg_2.png';

export default function Home() {
  return (
    <header className="App-header">
      <p className="Title">
        realgirl.online
      </p>

      <img src={logo} className="App-logo" alt="logo" />

      <div>
        <FrontCover />
      </div>


    </header>
  )
}