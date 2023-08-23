import './index.css'

const EmojiCard = props => {
  const {item, clickFun} = props
  const {id, emojiName, emojiUrl} = item

  const onEmojiClick = () => {
    clickFun(id)
  }

  return (
    <li className="list-item">
      <button className="emoji-button" type="button">
        <img
          src={emojiUrl}
          className="emoji"
          alt={emojiName}
          onClick={onEmojiClick}
        />
      </button>
    </li>
  )
}
export default EmojiCard
