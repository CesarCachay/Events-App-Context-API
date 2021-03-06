import React, { Component } from "react";
import { CategoriesConsumer } from "../context/categories";
import { EventsConsumer } from "../context/events";

class Form extends Component {
  state = {
    name: "",
    eventCategory: ""
  };

  getInformation = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <EventsConsumer>
        {value => {
          return (
            <form
              onSubmit={e => {
                e.preventDefault();
                value.getEvents(this.state);
              }}
            >
              <fieldset className="uk-fieldset uk-margin">
                <legend className="uk-legend uk-text-center">
                  Search the event you want by name or category
                </legend>
              </fieldset>

              <div className="uk-column-1-3@m uk-margin">
                <div className="uk-margin" uk-margin="true">
                  <input
                    name="name"
                    className="uk-input"
                    type="text"
                    placeholder="Name of the Event or City"
                    onChange={this.getInformation}
                  />
                </div>

                <div className="uk-margin" uk-margin="true">
                  <select
                    className="uk-select"
                    name="eventCategory"
                    onChange={this.getInformation}
                  >
                    <option> -- Select Category -- </option>
                    <CategoriesConsumer>
                      {value => {
                        return value.eventCategories.map(item => (
                          <option
                            key={item.id}
                            value={item.id}
                            data-uk-form-select
                          >
                            {item.name_localized}
                          </option>
                        ));
                      }}
                    </CategoriesConsumer>
                  </select>
                </div>

                <div className="uk-margin" uk-margin="true">
                  <input
                    type="submit"
                    className="uk-button uk-button-danger"
                    value="Search Events "
                  />
                </div>
              </div>
            </form>
          );
        }}
      </EventsConsumer>
    );
  }
}

export default Form;
