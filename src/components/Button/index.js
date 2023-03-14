import {GameButton, ButtonImage} from './styledComponents'

const Button = props => {
  const {buttonDetails, selectPlayersChoice} = props
  const {id, imageUrl} = buttonDetails

  const onCLickButton = () => {
    selectPlayersChoice(id)
  }

  const altText = `${id.toLowerCase()}Button`
  return (
    <li>
      <GameButton type="button" data-testid={altText}>
        <ButtonImage alt={id} src={imageUrl} onClick={onCLickButton} />
      </GameButton>
    </li>
  )
}

export default Button
