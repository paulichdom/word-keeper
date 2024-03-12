import React from 'react';
import styled from 'styled-components';

const DetailsContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px;
  font-family: 'Lato', sans-serif;
`;

const Title = styled.h1`
  font-family: 'Cinzel', serif;
  color: #3a2a1a;
  margin-bottom: 10px;
`;

const Phonetic = styled.p`
  color: #5c5346;
  margin-bottom: 20px;
`;

const AudioButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #8c7b6b;

  &:hover {
    color: #3a2a1a;
  }
`;

const SectionTitle = styled.h2`
  font-family: 'Cinzel', serif;
  color: #8c7b6b;
  margin-top: 20px;
`;

const Content = styled.p`
  color: #3a2a1a;
  margin-bottom: 10px;
`;

const List = styled.ul`
  list-style: inside;
`;

const ListItem = styled.li`
  color: #3a2a1a;
`;

const WordDetails = () => {
  // Dummy data for demonstration
  const wordData = {
    word: "Lexicon",
    phonetic: "/lɛkˈsɪkɒn/",
    audio: "https://example.com/lexicon-audio.mp3",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          {definition: "The vocabulary of a person, language, or branch of knowledge."},
        ],
        examples: ["The size of the scientific lexicon is increasing every year."],
        synonyms: ["vocabulary", "terminology", "language", "lingo"],
        antonyms: [],
      },
    ],
  };

  return (
    <DetailsContainer>
      <Title>{wordData.word}</Title>
      <Phonetic>{wordData.phonetic}</Phonetic>
      <AudioButton onClick={() => new Audio(wordData.audio).play()}>
        📢 Listen
      </AudioButton>
      {wordData.meanings.map((meaning, index) => (
        <div key={index}>
          <SectionTitle>{meaning.partOfSpeech}</SectionTitle>
          <SectionTitle>Definition</SectionTitle>
          <List>
            {meaning.definitions.map((def, idx) => (
              <ListItem key={idx}>{def.definition}</ListItem>
            ))}
          </List>
          {meaning.examples && (
            <>
              <SectionTitle>Example</SectionTitle>
              <Content>{meaning.examples.join('; ')}</Content>
            </>
          )}
          {meaning.synonyms.length > 0 && (
            <>
              <SectionTitle>Synonyms</SectionTitle>
              <Content>{meaning.synonyms.join(', ')}</Content>
            </>
          )}
        </div>
      ))}
    </DetailsContainer>
  );
};

export default WordDetails;
