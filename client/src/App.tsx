import "./App.css";
import AllBlogPostsContainer from "./components/AllBlogPostsContainer";
import '@elastic/eui/dist/eui_theme_light.css';
import { EuiProvider } from '@elastic/eui';

function App() {
  return (
    <EuiProvider colorMode="light">
      <div className="App">
        <AllBlogPostsContainer/>
      </div>
    </EuiProvider>
  );
}

export default App;