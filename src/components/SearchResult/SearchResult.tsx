import styled from 'styled-components';
//import BookmarkToggle from '../BookmarkToggle';
import { Volume2 } from 'react-feather';
import TransformingButton from '../TransformingButton';

type WordCardProps = {
  word: string;
  definition: string;
  partOfSpeech: string;
};

const SearchResult = ({ word, definition, partOfSpeech }: WordCardProps) => (
  <Wrapper>
    <Header>
      <IconWrapper>
        <VolumeIcon />
      </IconWrapper>
      <Word>{word}</Word>
    </Header>
    <PartOfSpeech>{partOfSpeech}</PartOfSpeech>
    <Definition>{definition}</Definition>
    <Footer>
      {/* <BookmarkToggle /> */}
      <TransformingButton />
    </Footer>
  </Wrapper>
);

export default SearchResult;

const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 0px 16px;
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
