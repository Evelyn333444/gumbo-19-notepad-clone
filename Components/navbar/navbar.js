const navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <h2>??App-Name??</h2>
        </div>
        <div className="navbar__menu">
          <ul>
            <li><a href="/">Notepad</a></li>
            <li><a href="/about">Flashcards</a></li>
            <li><a href="/contact">Learn</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default navbar