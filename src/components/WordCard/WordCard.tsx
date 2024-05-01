import styled from 'styled-components';
import BookmarkToggle from '../BookmarkToggle';

type WordCardProps = {
  word: string;
  definition: string;
  partOfSpeech: string;
};

const WordCard = ({ word, definition, partOfSpeech }: WordCardProps) => (
  <Card>
    <Word>{word}</Word>
    <PartOfSpeech>{partOfSpeech}</PartOfSpeech>
    <Definition>{definition}</Definition>
    <Row>
      <BookmarkToggle />
    </Row>
  </Card>
);

export default WordCard;

const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 6px;
`;

const Word = styled.h2`
  color: black;
  font-family: 'Cinzel', serif;
  text-align: center;
`;

const PartOfSpeech = styled.span`
  color: #666;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.8em;
  text-align: center;
`;

const Definition = styled.p`
  color: black;
  font-family: 'Open Sans', sans-serif;
  text-align: left;
  font-size: 0.95em;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
`;
