import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
class App extends React.Component {
  state = {
    images: [],
  };

  async onSearchSubmit(term) {
    const res = await unsplash.get("/search/photos", { params: {query: term} });
    this.setState({ images: res.data.results });
    console.log(this.state)
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={(term) => this.onSearchSubmit(term)} />
        <ImageList images={ this.state.images }/>
      </div>
    );
  }
}

export default App;
