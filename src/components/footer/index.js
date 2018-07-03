import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <div class="container">
          <a href="/" class="logo-font">
            conduit
          </a>
          <span class="attribution">
            An interactive learning project from{" "}
            <a href="https://thinkster.io">Thinkster</a>. Code &amp; design
            licensed under MIT.
          </span>
        </div>
      </div>
    );
  }
}

export default Footer;
