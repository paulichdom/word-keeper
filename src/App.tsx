import styled from 'styled-components';
import './App.css';
import { useState } from 'react';

/**
 * TODO:
 * 1) Use convex for storing word data
 * 2) API: https://dictionaryapi.dev/
 * 3) API 2: https://www.twinword.com/api/word-dictionary.php
 * 4) Combine api's for better results
 * 5) Implement search
 * 6) Speeech to text
 * 7) Play spoken word
 *
 * Could use more different apis to get better results
 */
export default function App() {
  const [inputValue, setInputValue] = useState<string>('');
  const [wordResult, setWordResult] = useState({
    word: '',
    phonetic: '',
    audio: '',
    sourceUrl: '',
    definition: '',
    partOfSpeech: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`
      );

      const result = await response.json();
      const term = result[0];

      const phonetic = term.phonetics.filter(
        (entry: { audio: string }) => entry.audio !== ''
      );

      const wordPayload = {
        word: term.word,
        phonetic: phonetic[0].text,
        audio: phonetic[0].audio,
        sourceUrl: term.sourceUrls[0],
        definition: term.meanings[0].definitions[0].definition,
        partOfSpeech: term.meanings[0].partOfSpeech,
      };

      setWordResult(wordPayload);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <h3>Word Keeper</h3>
      <Form onSubmit={handleFormSubmit}>
        <label htmlFor="word">Search word: </label>
        <StyledInput
          type="text"
          id="word"
          required
          onChange={(event) => setInputValue(event.target.value)}
        />
      </Form>
      <WordContainer>
        {isLoading && <p>Searching for word ...</p>}
        {!isLoading && wordResult.word && (
          <>
            <h2>
              {wordResult.word} {`(${wordResult.partOfSpeech})`}
            </h2>
            <p>Definition: {wordResult.definition}</p>
            <figure>
              <figcaption>Play pronunciation:</figcaption>
              <audio controls src={wordResult.audio}></audio>
            </figure>
          </>
        )}
      </WordContainer>
    </Container>
  );
}

const WordContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const StyledInput = styled.input`
  border: 1px solid black;
  border-radius: 32px;
  padding: 8px 32px;
  outline-offset: 2px;
`;
