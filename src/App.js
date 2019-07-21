import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import CategoriesProvider from "./context/categories";
import EventsProvider from "./context/events";

function App() {
  return (
    <EventsProvider>
      <CategoriesProvider>
        <Header />
        <div className="uk-container">
          <Form />
        </div>
      </CategoriesProvider>
    </EventsProvider>
  );
}

export default App;
