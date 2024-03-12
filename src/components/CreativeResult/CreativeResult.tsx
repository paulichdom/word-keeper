import styled, { css } from 'styled-components';
import { Speaker, Volume2 } from 'react-feather';

const ResultContainer = styled.div`
  background-color: #f9f3e9; /* A warm, inviting background */
  padding: 20px;
  margin: 20px auto;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Soft, subtle shadow */
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 95%; /* Slightly wider for mobile, ensuring padding */
`;

const sharedTextStyle = css`
  color: #3a2a1a;
  font-family: 'Cinzel', serif;
  text-align: center;
`;

const WordTitle = styled.h2`
  ${sharedTextStyle}
  font-size: 1.8em;
  margin: 0 0 10px 0;
`;

const PartOfSpeech = styled.span`
  background-color: #e7dcd4; /* Soft contrast for distinction */
  color: #5c5346;
  font-family: 'Lato', sans-serif; /* Sans-serif for a modern touch */
  font-size: 0.9em;
  padding: 5px 10px;
  border-radius: 15px;
  margin-left: 10px;
`;

const Highlight = styled.span`
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  color: #8c7b6b; /* Darker shade for emphasis */
`;

const Definition = styled.p`
  ${sharedTextStyle}
  font-family: 'Lato', sans-serif; /* Ensures readability for longer text */
  font-size: 1em;
  margin: 10px 0;
`;

const ActionButton = styled.button`
  background-color: transparent;
  border: 2px solid #8c7b6b; /* Outline style for subtlety */
  border-radius: 50%;
  padding: 5px; /* Compact size for the icon */
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #8c7b6b; /* Fill on hover for feedback */
    color: #fff;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

const PhoneticIcon = styled.span`
  cursor: pointer;
  margin-left: 5px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2); /* Slight enlargement as feedback */
  }
`;

const CreativeResult = () => {
  const wordResult = {
    word: 'Hello',
    audio: 'audio',
    partOfSpeech: 'Helouah',
    definition:
      "A greeting used when meeting someone or acknowledging someone's arrival or presence.",
  };
  return (
    <ResultContainer>
      <WordTitle>
        {wordResult.word}
        <PartOfSpeech>{wordResult.partOfSpeech}</PartOfSpeech>
        {wordResult.audio && (
          <PhoneticIcon title="Play pronunciation" onClick={() => {}}>
            {/* 📢 */}
            <Volume2 />
          </PhoneticIcon>
        )}
      </WordTitle>
      <Definition><Highlight>Definition:</Highlight> {wordResult.definition}</Definition>
      <ActionButton onClick={() => {/* Logic to add to dictionary */}} aria-label="Add to my dictionary">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </ActionButton>
    </ResultContainer>
  );
};

export default CreativeResult;
