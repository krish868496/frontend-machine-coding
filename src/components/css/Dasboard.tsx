import React from 'react'

const Dasboard = () => {
  return (
    <div className="app">
  <aside className="sidebar">Sidebar</aside>

  <div className="main">
    <header className="header">
      <h2>Dashboard</h2>
      <button className="open-modal">Open Modal</button>
    </header>

    <div className="cards">
      <div className="card">
        <button className="dropdown-btn">Open Dropdown</button>
        <div className="dropdown">Dropdown Menu</div>
      </div>

      <div className="card">Card 2 lorem</div>
      <div className="card">Card 3</div>
    </div>
  </div>

  
  <div className="modal hidden">
    <div className="modal-content">
      <p>Modal Content</p>
      <button className="close-modal">Close</button>
    </div>
  </div>

  <div className="tooltip">Tooltip Info</div>

  <button className="fab">+</button>
</div>
  )
}

export default Dasboard