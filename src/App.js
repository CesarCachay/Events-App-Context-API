import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import CategoriesProvider from "./context/categories";
import EventsProvider from "./context/events";
import ListEvents from "./components/ListEvents";

function App() {
  return (
    <EventsProvider>
      <CategoriesProvider>
        <Header />
        <div className="uk-container">
          <Form />
          <ListEvents />
        </div>
      </CategoriesProvider>
    </EventsProvider>
  );
}

export default App;
