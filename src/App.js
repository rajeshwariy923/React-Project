import "./App.css";
import FormComponent from "./FormComponents";
import ColorPicker from "./ColorPicker";
import { Menu } from "./Menu";
import { Video } from "./Video";
import VideoPlayer from "./VideoPlayer";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <FormComponent />
      <ColorPicker />
      <Menu />
      <Video />
      <VideoPlayer />
      {/* <Contact /> */}
    </div>
  );
}

export default App;
