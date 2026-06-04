import React from "react";
import { createPortal } from "react-dom";
import Portal from "./Portal";
import Dasboard from "./Dasboard";

const Position = () => {
  return (
    <div className="position-container">
      <div className="sticky-box">sticky position</div>
      <div className="relative-box">relative</div>
      <div className="absolute-box">absolute</div>
      <div className="fixed-box">fixed</div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
        exercitationem, eos facilis aliquam amet voluptates sapiente eius soluta
        ea beatae deserunt officiis porro, voluptatem nisi optio accusantium
        neque, consequuntur ipsa!
      </p>
      <button className="position-btn-fixed">Chat</button>

      {/* <Dasboard /> */}

      <div className="layout">
        <aside className="sidebar-1">Sidebar</aside>
        <main className="content-1">
          Very long content text here that should wrap...
        </main>
      </div>
    </div>
  );
};

export default Position;
