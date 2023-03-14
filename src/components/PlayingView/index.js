import {Component} from 'react'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {RiCloseLine} from 'react-icons/ri'

import Button from '../Button'
import {
  MainContainer,
  TopContainer,
  TopHeading,
  ScoreContainer,
  NamesContainer,
  Paragraph,
  GameButtonContainer,
  RulesButton,
  ModalBg,
  ModalCloseButton,
  ModalImage,
} from './styledComponents'

class PlayingView extends Component {
  state = {score: 0}

  topContainer = choicesList => {
    const {score} = this.state
    return (
      <TopContainer>
        <NamesContainer>
          {choicesList.map(each => (
            <TopHeading color="#ffffff">{each.id}</TopHeading>
          ))}
        </NamesContainer>
        <ScoreContainer>
          <Paragraph>Score</Paragraph>
          <TopHeading color="#223a5f">{score}</TopHeading>
        </ScoreContainer>
      </TopContainer>
    )
  }

  gameContainer = choicesList => (
    <GameButtonContainer>
      {choicesList.map(item => (
        <Button
          buttonDetails={item}
          key={item.id}
          selectPlayersChoice={this.selectPlayersChoice}
        />
      ))}
    </GameButtonContainer>
  )

  render() {
    const {choicesList} = this.props

    return (
      <MainContainer>
        {this.topContainer(choicesList)}
        {this.gameContainer(choicesList)}
        <Popup
          trigger={<RulesButton type="button">Rules</RulesButton>}
          modal
          position="bottom right"
          closeOnDocumentClick
        >
          {close => (
            <ModalBg>
              <ModalCloseButton type="button" onClick={() => close()}>
                <RiCloseLine />
              </ModalCloseButton>
              <ModalImage
                alt="rules"
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              />
            </ModalBg>
          )}
        </Popup>
      </MainContainer>
    )
  }
}

export default PlayingView
