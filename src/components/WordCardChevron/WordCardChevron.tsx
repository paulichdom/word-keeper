import styled from 'styled-components';

const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Word = styled.h2`
  color: black;
  font-family: 'Cinzel', serif;
  margin-bottom: 10px;
  text-align: center;
`;

const Definition = styled.p`
  color: black;
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  font-size: 0.95em;
`;

const WordCard = ({
  word = 'hello',
  definition = 'fgdfgfg fdgfdgfdg dfgdafgfd dfgfdagafdg',
}) => (
  <Card>
    <Word>{word}</Word>
    <Definition>{definition}</Definition>
  </Card>
);

export default WordCard;
