import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { DictionaryEntry } from './types';
import SearchBar from './components/SearchBar';
import { Authenticated, Unauthenticated, useQuery } from 'convex/react';
import { api } from '../convex/_generated/api';
import './App.css';
import SearchResult from './components/SearchResult';
import BottomNavigation, { NavItemId } from './components/BottomNavigation';
import WordCard from './components/WordCard';
import { SignInButton, UserButton } from '@clerk/clerk-react';

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
 * 2) API: https://dictionaryapi.dev/
 * 3) API 2: https://www.twinword.com/api/word-dictionary.php
 * 4) Combine api's for better results
 * 5) Implement search
 * 6) Speeech to text
 * 7) Play spoken word
 * 8) If there is no result implement add word manually
 * 9) Search with google option
 * 10) add second definition
 *
 * Could use more different apis to get better results
 */
export default function App() {
  const dictionary = useQuery(api.dictionary.get);

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
  const [activeItem, setActiveItem] = useState<NavItemId>('search');

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

  // TODO: impl header -> body -> footer structure

  const [bottomNavHeight, setBottomNavHeight] = useState(0);
  const bottomNavRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (bottomNavRef.current) {
      console.log({ bottomNavRef });
      setBottomNavHeight(bottomNavRef.current.clientHeight);
    }
  }, []);

  return (
    <main>
      <Unauthenticated>
        <SignInButton mode="modal" />
      </Unauthenticated>
      <Authenticated>
        <Container style={{ paddingBottom: `${bottomNavHeight}px` }}>
          <Title>Word keeper</Title>
          {activeItem === 'search' && (
            <>
              <SearchBar
                handleChange={setInputValue}
                handleSubmit={handleFormSubmit}
              />
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
            </>
          )}
          {activeItem === 'bookmarks' && (
            <BookmarksContainer>
              {dictionary &&
                dictionary.map(({ _id, word, definition, part_of_speech }) => (
                  <WordCard
                    key={_id}
                    word={word}
                    partOfSpeech={part_of_speech}
                    definition={definition}
                  />
                ))}
            </BookmarksContainer>
          )}
          {activeItem === 'settings' && (
            <div>
              <UserButton />
            </div>
          )}
        </Container>
        <BottomNavigation
          ref={bottomNavRef}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
      </Authenticated>
    </main>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 450px;
  padding: 12px;
`;

const Title = styled.h1`
  color: black;
  text-align: center;
  font-size: 1.75rem;
  padding-top: 16px;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const WordContainer = styled.div`
  width: 100%;
  padding: 12px;
`;

const BookmarksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const LoadingText = styled.p`
  color: #3a2a1a;
  font-family: 'Cinzel', serif;
  text-align: center;
  margin-top: 20px;
`;
