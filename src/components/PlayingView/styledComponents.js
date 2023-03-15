import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #223a5f;
  padding: 10px;
  background-size: cover;
  height: 100vh;
`
export const TopContainer = styled.div`
  background-color: transparent;
  border: 3px solid #ffffff;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;

  margin: 80px;
`

export const NamesContainer = styled.div``

export const TopHeading = styled.h1`
  font-family: 'Bree Serif';
  color: ${props => props.color};
  font-size: 22px;
  font-weight: 400;
`
export const ScoreContainer = styled.div`
  background-color: #ffffff;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  width: 200px;
`
export const Paragraph = styled.p`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 600;
  color: #223a5f;
`

export const GameButtonContainer = styled.ul`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  padding: 0px;
`

export const RulesButtonContainer = styled.div`
  margin-left: 100px;
`

export const RulesButton = styled.button`
  background-color: #ffffff;
  border-radius: 6px;
  border-style: none;
  font-family: 'Bree Serif';
  font-size: 20px;
  font-weight: 500;
  color: #223a5f;
  padding: 10px 20px;
  align-self: flex-end;
  cursor: pointer;
`

export const ModalBg = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`

export const ModalCloseButton = styled.button`
  border-style: none;
  align-self: flex-end;
  font-size: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const ModalImage = styled.img`
  width: 100%;
`
export const PlayerLabel = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
`
export const ResultText = styled.p`
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
`

export const PlayAgainButton = styled.button`
  background-color: #ffffff;
  border-radius: 6px;
  border-style: none;
  font-family: 'Bree Serif';
  font-size: 20px;
  font-weight: 500;
  color: #223a5f;
  width: 150px;
  padding: 10px;
  align-self: center;
  cursor: pointer;
  margin-bottom: 30px;
`
