import React from "react";
import SmartphoneItem from "./smartphoneItem";

export default function Smartphone() {
  return (
    <section id="smartphone" className="container-fluid pt-5 pb-5">
      <h1 className="text-white text-center">BEST SMARTPHONE</h1>
      <div className="row">
        <SmartphoneItem />
        <SmartphoneItem />
        <SmartphoneItem />
        <SmartphoneItem />
      </div>
    </section>
  );
}
