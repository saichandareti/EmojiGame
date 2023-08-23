/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'
import './index.css'
import EmojiCard from '../EmojiCard'
// eslint-disable-next-line import/no-named-as-default-member
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, prevEmoji: [23], status: ''}

  PlayAgain = () => {
    const {score, topScore} = this.state
    if (score > topScore) {
      this.setState({score: 0, topScore: score, status: '', prevEmoji: [23]})
    } else {
      this.setState({score: 0, status: '', prevEmoji: [23]})
    }
  }

  CheckEmoji = id => {
    const {topScore, score, prevEmoji} = this.state
    const isClicked = prevEmoji.map(each => {
      if (each === id) {
        return true
      }
      return false
    })
    console.log(prevEmoji)
    const isChecked = isClicked.filter(each => each === true)
    if (isChecked[0] !== true) {
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
    } else if (score === 12 && isChecked[0] === true) {
      this.setState({topScore: 12, status: 'won'})
    } else {
      if (score > topScore) {
        this.setState({topScore: score, status: 'lost'})
        return
      }
      this.setState({topScore, status: 'lost'})
    }
  }

  OnClickEmoji = id => {
    const {topScore, score, prevEmoji} = this.state
    this.setState(prevState => ({prevEmoji: [...prevState.prevEmoji, id]}))
    this.CheckEmoji(id)
  }

  render() {
    const {status, score, topScore} = this.state
    const {emojisList} = this.props
    //  const RandomEmojis = emojisList.sort(() => Math.random() - 0.5)

    let display
    if (status !== '') {
      display = (
        <WinOrLoseCard
          result={status}
          score={score}
          playAgain={this.PlayAgain}
        />
      )
    } else {
      display = (
        <>
          <NavBar score={score} top={topScore} />
          <ul className="list-container">
            {emojisList.map(each => (
              <EmojiCard
                item={each}
                key={each.id}
                clickFun={this.OnClickEmoji}
              />
            ))}
          </ul>
        </>
      )
    }

    return (
      <div className="main-container">
        <div className="bg-container">
          <div className="emojis-container">{display}</div>
        </div>
      </div>
    )
  }
}
export default EmojiGame
