import React from "react";
import { withTitle } from "./withTitle";

function Header(props) {
  const { showContent } = props;

  return (
    <div>
      <section onClick={showContent}>Home</section>
      <section>Wear</section>
      <section>Shoes</section>
      <section>Make Up</section>
    </div>
  );
}

export default withTitle(Header);
