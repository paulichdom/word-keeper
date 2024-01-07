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
 *
 * Could use more different apis to get better results
 */
export default function App() {
  const [inputValue, setInputValue] = useState<string>('');

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`
    );

    const word = response.json();

    console.log({ word });
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
    </Container>
  );
}

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
