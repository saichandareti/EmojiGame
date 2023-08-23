import './index.css'

const NavBar = props => {
  const {score, top} = props
  return (
    <div className="nav-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <h1 className="logo-heading">Emoji Game</h1>
      </div>
      <div className="logo-container">
        <p className="top-score-2">Score: {score}</p>
        <p className="top-score">Top Score: {top}</p>
      </div>
    </div>
  )
}

export default NavBar
