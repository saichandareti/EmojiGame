import './index.css'

const WinOrLoseCard = props => {
  const {result, score, playAgain} = props

  const replay = () => {
    playAgain()
  }

  const displayCard =
    result === 'won' ? (
      <div className="results-con">
        <div className="left-container">
          <h1 className="res-heading">You Won</h1>
          <p className="best-score">Best Score</p>
          <p className="score">12/12</p>
          <button className="button" type="button" onClick={replay}>
            Play Again
          </button>
        </div>
        <div className="right-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
            className="won-image"
            alt="win or lose"
          />
        </div>
      </div>
    ) : (
      <div className="results-con">
        <div className="left-container">
          <h1 className="res-heading-2">You Lose</h1>
          <p className="best-score">Score</p>
          <h1 className="score">{score}/12</h1>
          <button className="button" type="button" onClick={playAgain}>
            Play Again
          </button>
        </div>
        <div className="right-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
            className="won-image"
            alt="win or lose"
          />
        </div>
      </div>
    )

  return displayCard
}
export default WinOrLoseCard
