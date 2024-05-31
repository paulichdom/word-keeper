import styled from 'styled-components';
import BookmarkToggle from '../BookmarkToggle';
import { Volume2 } from 'react-feather';

type WordCardProps = {
  word: string;
  definition: string;
  partOfSpeech: string;
};

// TODO: extract Word as a componet, and Card as a component
const WordCard = ({ word, definition, partOfSpeech }: WordCardProps) => (
  <Card>
    <Header>
      <IconWrapper>
        <VolumeIcon />
      </IconWrapper>
      <Word>{word}</Word>
    </Header>
    <PartOfSpeech>{partOfSpeech}</PartOfSpeech>
    <Definition>{definition}</Definition>
    <Footer>
      <BookmarkToggle
        handleAddToList={() => {
          return Promise.resolve({ success: true, message: 'Juhuuu' });
        }}
      />
    </Footer>
  </Card>
);

export default WordCard;

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 6px;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  align-items: center;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  cursor: pointer;
  background-color: rgb(21, 128, 250);
  border-radius: 50%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(21, 88, 214);
  }
`;

const VolumeIcon = styled(Volume2)`
  color: white;
  width: 22px;
  height: 22px;
`;

const Word = styled.h2`
  color: black;
  text-align: center;
  padding-bottom: 2px;
`;

const PartOfSpeech = styled.span`
  color: #666;
  font-size: 0.8em;
  text-align: center;
`;

const Definition = styled.p`
  color: black;
  text-align: left;
  font-size: 0.95em;
`;

const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
`;
