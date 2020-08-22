import React from "react";
import ReactDom from "react-dom";
import Spinner from "./Spinner";
import SeasonDisplay from "./SeasonDisplay";
import useLocation from "./useLocation";

const App = () => {
  let [lat, errorMessage] = useLocation();

  let content;
  if (errorMessage) {
    content = <div>Error: {errorMessage}</div>;
  } else if (lat) {
    content = <SeasonDisplay lat={lat} />;
  } else {
    content = <Spinner message="Please accept location request" />;
  }

  return <div className="border red">{content}</div>;
};

// class App extends React.Component {
//   state = { latitude: null, errorMessage: "" };

//   componentDidMount() {}

//   render() {
//     // It's usually frowned upon to have conditionals in your render
//     // method.
//     // Could not be bothered to take it out so I am letting
//     // Emmanuel know

//     if (this.state.errorMessage && !this.state.latitude) {
//       return (
//         <div className="ui warning centred message">
//           <i className="close icon"></i>
//           {this.state.errorMessage}
//         </div>
//       );
//     }

//     if (!this.state.errorMessage && this.state.latitude) {
//       return <SeasonDisplay lat={this.state.latitude} />;
//     }

//     return <Spinner />;
//   }
// }

ReactDom.render(<App />, document.querySelector("div#root"));
