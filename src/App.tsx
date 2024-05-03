import styled from 'styled-components';
import { useState } from 'react';
import { DictionaryEntry } from './types';
import SearchBar from './components/SearchBar';
//import WordCard from './components/WordCard/WordCard';
//import { useQuery } from 'convex/react';
//import { api } from '../convex/_generated/api';

import './App.css';
import SearchResult from './components/SearchResult';
import BottomNavigation from './components/BottomNavigation';

interface WordResult {
  word: string;
  phonetic: string;
  audio: string;
  sourceUrl: string;
  definition: string;
  partOfSpeech: string;
}

/**
 * TODO:
 * 1) Use convex for storing word data
 * 2) API: https://dictionaryapi.dev/
 * 3) API 2: https://www.twinword.com/api/word-dictionary.php
 * 4) Combine api's for better results
 * 5) Implement search
 * 6) Speeech to text
 * 7) Play spoken word
 * 8) If there is no result implement add word manually
 * 9) Search with google option
 *
 * Could use more different apis to get better results
 */
export default function App() {
  //const dictionary = useQuery(api.dictionary.get);
  //console.log({ dictionary });
  const [inputValue, setInputValue] = useState<string>('');
  const [wordResult, setWordResult] = useState<WordResult>({
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

      if (!response.ok) {
        throw new Error('Failed to fetch word data.');
      }

      const dictionaryEntry: DictionaryEntry = await response.json();

      const [dictionaryEntryItem] = dictionaryEntry;
      const { word, sourceUrls, meanings, phonetics } = dictionaryEntryItem;
      const [meaning] = meanings;
      const { definitions, partOfSpeech } = meaning;
      const [definiton] = definitions;
      const [sourceUrl] = sourceUrls;

      const filteredPhonetics = phonetics.filter(
        (entry: { audio: string }) => entry.audio !== ''
      );

      const [phonetic] = filteredPhonetics;

      const wordPayload = {
        word,
        phonetic: phonetic ? phonetic.text : '',
        audio: phonetic ? phonetic.audio : '',
        sourceUrl,
        definition: definiton.definition,
        partOfSpeech,
      };

      setWordResult(wordPayload);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Check if each essential field is truthy
   * (i.e., it exists and is not an empty string, null, or undefined)
   */
  const isWordResultValid = (wordResult: WordResult): boolean => {
    const essentialFields = ['word', 'definition', 'partOfSpeech'];

    return essentialFields.every((field) =>
      Boolean(wordResult[field as keyof WordResult])
    );
  };

  const hasWordData = isWordResultValid(wordResult);

  return (
    <Container>
      <SearchBar handleChange={setInputValue} handleSubmit={handleFormSubmit} />
      <WordContainer>
        {isLoading && <LoadingText>Searching for word...</LoadingText>}
        {!isLoading && hasWordData && (
          <SearchResult
            word={wordResult.word}
            definition={wordResult.definition}
            partOfSpeech={wordResult.partOfSpeech}
          />
        )}
      </WordContainer>
      <BottomNavigation />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 12px;
`;

const WordContainer = styled.div`
  width: 100%;
  padding: 12px;

`;

const LoadingText = styled.p`
  color: #3a2a1a;
  font-family: 'Cinzel', serif;
  text-align: center;
  margin-top: 20px;
`;
