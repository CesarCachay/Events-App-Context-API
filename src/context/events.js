import React, { Component } from "react";
import axios from "axios";

const EventsContext = React.createContext();
export const EventsConsumer = EventsContext.Consumer;

class EventsProvider extends Component {
  token = "63LKGCSKJEHWCOPS3XXG";
  sorting = "date";

  state = {
    events: []
  };

  getEvents = async search => {
    let url = `https://www.eventbriteapi.com/v3/events/search/?q=${
      search.name
    }&categories=${search.eventCategory}&sort_by=${this.sorting}&token=${
      this.token
    }&locale=es_ES`;

    const eventConsult = await axios.get(url);

    this.setState({
      events: eventConsult.data.events
    });
  };

  render() {
    return (
      <EventsContext.Provider
        value={{
          events: this.state.events,
          getEvents: this.getEvents
        }}
      >
        {this.props.children}
      </EventsContext.Provider>
    );
  }
}

export default EventsProvider;
