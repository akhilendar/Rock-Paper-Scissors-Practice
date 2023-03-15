import {GameButton, ButtonImage} from './styledComponents'

const PlayerChoice = props => {
  const {buttonDetails, altText} = props
  const {imageUrl} = buttonDetails

  return (
    <GameButton type="button">
      <ButtonImage alt={altText} src={imageUrl} />
    </GameButton>
  )
}

export default PlayerChoice
