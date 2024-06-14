import "./App.css";
import Accordian from "./components/accordion";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import QRCodeGenerator from "./components/qr-code-generator";
import LightDarkMode from "./components/light-dark-mode";
import ScrollIndicator from "./components/scroll-indicator";
import TabTest from "./components/custom-tabs/tab-test";
import ModalTest from "./components/modal-popup/modal-test";
import GithubProfileFinder from "./components/github-profile-finder";
import SearchAutocomplete from "./components/search-autocomplete";
import TicTacToe from "./components/tic-tac-toe";
import FeatureFlagGlobalState from "./components/feature-flag/context";
import FeatureFlags from "./components/feature-flag";

function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      {/* <Accordian /> */}

      {/* Random color component */}
      {/* <RandomColor /> */}

      {/* Star rating component */}
      {/* <StarRating noOfStars={10} /> */}

      {/* image slider component */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        limit={"10"}
        page={"1"}
      /> */}

      {/* Load more component*/}
      {/* <LoadMoreData /> */}

      {/* Tree view component */}
      {/* <TreeView menus={menus} /> */}

      {/* QR code generator */}
      {/* <QRCodeGenerator /> */}

      {/* Light dark mode */}
      {/* <LightDarkMode /> */}

      {/* Scroll indicator component */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}

      {/* Custom tabs component */}
      {/* <TabTest /> */}

      {/* Custom modal component */}
      {/* <ModalTest /> */}

      {/* github profile finder */}
      {/* <GithubProfileFinder /> */}

      {/* Search autocomplete component*/}
      {/* <SearchAutocomplete /> */}

      {/* tic tac toe */}
      {/* <TicTacToe /> */}

      {/* feature flag implementation */}
      <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState>
    </div>
  );
}

export default App;
