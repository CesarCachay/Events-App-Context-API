import React, { Component } from "react";
import axios from "axios";

const CategoriesContext = React.createContext();
export const CategoriesConsumer = CategoriesContext.Consumer;

class CategoriesProvider extends Component {
  token = "63LKGCSKJEHWCOPS3XXG";

  state = {
    eventCategories: []
  };

  componentDidMount() {
    this.getCategories();
  }

  getCategories = async () => {
    let url = `https://www.eventbriteapi.com/v3/categories/?token=${
      this.token
    }&locale=es_ES`;

    let options = await axios.get(url);

    this.setState({
      eventCategories: options.data.categories
    });
  };

  render() {
    return (
      <CategoriesContext.Provider
        value={{
          eventCategories: this.state.eventCategories
        }}
      >
        {this.props.children}
      </CategoriesContext.Provider>
    );
  }
}

export default CategoriesProvider;
