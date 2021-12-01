import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  render() {
    return (
      <div className="ui raised segment" style={{ marginTop: "30px" }}>
        <form
          className="ui form"
          onSubmit={(e) => {
            e.preventDefault();
            this.props.onSubmit(this.state.term);
          }}
        >
          <div className="field">
            <div className="ui blue ribbon label">Image Search</div>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
              style={{ marginTop: "10px" }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
