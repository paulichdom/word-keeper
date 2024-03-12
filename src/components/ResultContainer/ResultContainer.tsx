import styled from 'styled-components';

const ResultContainer = styled.div`
  background-color: #f4f1e9; /* Parchment-like background */
  padding: 20px;
  margin-top: 20px;
  border-radius: 10px;
  font-family: 'Cinzel', serif; /* Consistent with the Lexiconomicon theme */
  color: #3a2a1a;
`;

const WordTitle = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px; /* Space between text and icon */
`;

const Definition = styled.p`
  margin: 10px 0;
`;

const AddButton = styled.button`
  background-color: #8c7b6b;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    background-color: #a39079;
  }
`;

const PhoneticIcon = styled.span`
  cursor: pointer;
  font-size: 1em;
`;

const Result = () => {
  const wordResult = {
    word: 'Hello',
    audio: 'audio',
    partOfSpeech: 'Helouah',
    definition: 'A greeting used when meeting someone or acknowledging someone\'s arrival or presence.'
  }
  return (
    <ResultContainer>
      <WordTitle>
        {wordResult.word} {`(${wordResult.partOfSpeech})`}
        {wordResult.audio && (
          <PhoneticIcon onClick={() => {}}>
            📢
          </PhoneticIcon>
        )}
      </WordTitle>
      <AddButton>Add to my dictionary</AddButton>
      <Definition>Definition: {wordResult.definition}</Definition>
    </ResultContainer>
  );
};

export default SearchResult;
