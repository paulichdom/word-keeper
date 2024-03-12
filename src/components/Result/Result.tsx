import React from 'react';
import styled from 'styled-components';

const ResultContainer = styled.div`
  background-color: #fbf0e4; /* Lighter parchment background for readability */
  padding: 20px;
  margin: 20px auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 90%; /* Ensures good readability on mobile */
`;

const WordTitle = styled.h2`
  color: #3a2a1a;
  font-family: 'Cinzel', serif;
  font-size: 1.5em; /* Larger for emphasis */
  text-align: center;
  margin-bottom: 10px;
`;

const PartOfSpeech = styled.span`
  background-color: #dcd0c0; /* Subtle tag-like background */
  color: #3a2a1a;
  font-family: 'Cinzel', serif;
  font-size: 0.9em;
  padding: 5px 10px;
  border-radius: 15px;
  margin-left: 10px;
`;

const Definition = styled.p`
  color: #3a2a1a;
  font-family: 'Lato', sans-serif; /* More readable for longer text */
  font-size: 1em;
  text-align: center;
  margin: 10px 0;
`;

const AddButton = styled.button`
  background-color: #8c7b6b;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  font-family: 'Cinzel', serif;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #a39079;
  }
`;

const PhoneticIcon = styled.span`
  cursor: pointer;
  margin-left: 5px;
  color: #6d5a48; /* Subtle for non-intrusive interaction */
  transition: color 0.3s ease;

  &:hover {
    color: #3a2a1a; /* Darker when hovered for better feedback */
  }
`;

const Result = () => {
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
        <PartOfSpeech>{`(${wordResult.partOfSpeech})`}</PartOfSpeech>
        {wordResult.audio && (
          <PhoneticIcon title="Play pronunciation" onClick={() => {}}>
            📢
          </PhoneticIcon>
        )}
      </WordTitle>
      <Definition>{`Definition: ${wordResult.definition}`}</Definition>
      <AddButton
        onClick={() => {
          /* Logic to add to dictionary */
        }}
      >
        Add to my dictionary
      </AddButton>
    </ResultContainer>
  );
};

export default Result;
