import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CreateItem from "../components/CreateItem";

function CreateNewItem() {
  return (
    <div className="p-0 px-8">
      <Header />
      <CreateItem />
      <Footer />
    </div>
  );
}

export default CreateNewItem;
