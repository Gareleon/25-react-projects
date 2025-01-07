import logo from "./logo.svg";
import "./App.css";
import Accordian from "./components/accordian";
import ColorGenerator from "./components/color-generator";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMore from "./components/load-more";
import TreeMenu from "./components/tree-view-menu";
import menus from "./components/tree-view-menu/data";
import QRCodeGenerator from "./components/qr-code";
import LightDarkMode from "./components/light-dark-mode";
import ScrollingProgressBar from "./components/scrolling-progress";
import TabTest from "./components/custom-tabs/tab-test";
import ModalTest from "./components/custom-modal/modal-test";
import GitHubFinder from "./components/github-finder";
import { SearchAutocomplete } from "./components/search-autocomplete";
import TicTacToe from "./components/tic-tac-toe";
import FeatureFlagGlobalState from "./components/feature-flag/context";
import FeatureFlags from "./components/feature-flag";
import UseFetchHookTest from "./components/use-fetch/test";
import UseOnClickOutsideTest from "./components/use-outside-click/test";
import UseWindowResizeTest from "./components/use-window-resize/test";
import ScrollToTopAndBottom from "./components/scroll-bottom-top";
import ScrollToSection from "./components/scroll-bottom-top/scroll-to-section";

function App() {
  return (
    <div className="App">
      {/*Accordian Component*/}
      <Accordian />

      {/*Color Generator Component*/}
      <ColorGenerator />

      {/*Star Rating Component*/}
      {<StarRating numOfStars={5} />}

      {/*ImageSlider Component*/}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />

      {/*LoadMore Component*/}
      <LoadMore />

      {/*TreeMenu / menu UI / recursive navigation menu Component*/}
      <TreeMenu menus={menus} />

      {/*QRCode Generator Component*/}
      <QRCodeGenerator />

      {/*Light-Dark-Mode Component*/}
      <LightDarkMode />

      {/*Scrolling progress Component*/}
      <ScrollingProgressBar url={"https://dummyjson.com/products?limit=100"} />

      {/*Custom Tabs Component*/}
      <ModalTest />

      {/*GitHub Finder Component*/}
      <GitHubFinder />

      {/*Search-Autocomplete Component*/}
      <SearchAutocomplete />

      {/*TicTacToe Component*/}
      <TicTacToe />

      {/*Feature Flag Implementation*/}
      <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState>

      {/*UseFetch Custom Hook*/}
      <UseFetchHookTest />

      {/*UseOutisdeClick Custom Hook*/}
      <UseOnClickOutsideTest />

      {/*UseWindowResize Custom Hook*/}
      <UseWindowResizeTest />

      {/*ScrollTopBottom Custom Hook*/}
      <ScrollToTopAndBottom />
      <ScrollToSection />
    </div>
  );
}

export default App;
