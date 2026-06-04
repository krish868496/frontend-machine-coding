
const Grid = () => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <h1>css grid</h1>

      <div className="dashboard">
        <div className="navbar">navbar</div>
        <div className="sidebar">sidebar</div>
        <div className="content">
          <div className="cards">content</div>
        </div>
        <div className="footer">footer</div>
      </div>
    </div>
  );
}

export default Grid