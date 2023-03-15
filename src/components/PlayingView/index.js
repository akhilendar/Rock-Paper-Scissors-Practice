import {Component} from 'react'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {RiCloseLine} from 'react-icons/ri'
import PlayerChoice from '../PlayerChoice'

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
  PlayerLabel,
  ResultText,
  PlayAgainButton,
} from './styledComponents'

const gameStatusList = {
  initial: 'STATED',
  won: 'YOU WON',
  draw: 'IT IS DRAW',
  lost: 'YOU LOSE',
}

class PlayingView extends Component {
  state = {
    score: 0,
    playersChoice: '',
    opponentsChoice: '',
    gameStatus: gameStatusList.initial,
  }

  componentDidMount() {
    this.generateOpponentsChoice()
  }

  generateOpponentsChoice = () => {
    const {choicesList} = this.props
    const opponentsChoice =
      choicesList[Math.floor(Math.random() * choicesList.length)].id
    this.setState({opponentsChoice})
    console.log(opponentsChoice)
  }

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

  onClickPlayAgain = () => {
    this.setState(
      {
        gameStatus: gameStatusList.initial,
      },
      this.generateOpponentsChoice(),
    )
  }

  selectPlayersChoice = id => {
    const {opponentsChoice, score} = this.state

    switch (id) {
      case 'ROCK':
        if (opponentsChoice === 'PAPER') {
          this.setState({
            score: score - 1,
            gameStatus: gameStatusList.lost,
            playersChoice: id,
          })
        } else if (opponentsChoice === 'SCISSORS') {
          this.setState({
            score: score + 1,
            gameStatus: gameStatusList.won,
            playersChoice: id,
          })
        } else {
          this.setState({gameStatus: gameStatusList.draw, playersChoice: id})
        }
        break
      case 'PAPER':
        if (opponentsChoice === 'SCISSORS') {
          this.setState({
            score: score - 1,
            gameStatus: gameStatusList.lost,
            playersChoice: id,
          })
        } else if (opponentsChoice === 'ROCK') {
          this.setState({
            score: score + 1,
            gameStatus: gameStatusList.won,
            playersChoice: id,
          })
        } else {
          this.setState({gameStatus: gameStatusList.draw, playersChoice: id})
        }
        break
      case 'SCISSORS':
        if (opponentsChoice === 'ROCK') {
          this.setState({
            score: score - 1,
            gameStatus: gameStatusList.lost,
            playersChoice: id,
          })
        } else if (opponentsChoice === 'PAPER') {
          this.setState({
            score: score + 1,
            gameStatus: gameStatusList.won,
            playersChoice: id,
          })
        } else {
          this.setState({gameStatus: gameStatusList.draw, playersChoice: id})
        }
        break
      default:
        console.log('default case')
    }
  }

  GameResultView = choicesList => {
    const {playersChoice, opponentsChoice, gameStatus} = this.state
    const opponent = choicesList.find(item => item.id === opponentsChoice)
    const player = choicesList.find(item => item.id === playersChoice)

    return (
      <>
        <GameButtonContainer>
          <li>
            <PlayerLabel>YOU</PlayerLabel>
            <PlayerChoice buttonDetails={player} altText="your choice" />
          </li>
          <li>
            <PlayerLabel>OPPONENT</PlayerLabel>
            <PlayerChoice buttonDetails={opponent} altText="opponent choice" />
          </li>

          <ResultText>{gameStatus}</ResultText>
          <PlayAgainButton type="button" onClick={this.onClickPlayAgain}>
            PLAY AGAIN
          </PlayAgainButton>
        </GameButtonContainer>
      </>
    )
  }

  switchViews = choicesList => {
    const {gameStatus} = this.state

    if (gameStatus === gameStatusList.initial) {
      return this.gameContainer(choicesList)
    }
    return this.GameResultView(choicesList)
  }

  render() {
    const {choicesList} = this.props

    return (
      <MainContainer>
        {this.topContainer(choicesList)}
        {this.switchViews(choicesList)}
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
