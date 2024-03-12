import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import WordDetails from '../WordDetails';
import CreativeResult from '../CreativeResult';

const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  padding: 20px;
  max-width: 600px; // Adjust based on your design needs
`;

const Title = styled.h1`
  font-family: 'Cinzel', serif;
  color: #3a2a1a;
`;

const ToggleButton = styled.button`
  background: transparent;
  border: none;
  color: #8c7b6b;
  cursor: pointer;
  padding: 10px;
  font-family: 'Cinzel', serif;

  &:hover {
    text-decoration: underline;
  }
`;

// The WordDetails and other styled components remain the same

const WordCardCta = () => {
  const [expanded, setExpanded] = useState(false);

  const contentProps = useSpring({
    opacity: expanded ? 1 : 0,
    height: expanded ? 'auto' : 0,
    transform: expanded ? 'translateY(0)' : 'translateY(-20%)',
  });

  // Dummy data
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
    <CardContainer>
      <CreativeResult />
      <ToggleButton onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Show Less' : 'Show More'}
      </ToggleButton>
      <animated.div style={contentProps}>
        {expanded && (
          <>
            <WordDetails />
          </>
        )}
      </animated.div>
    </CardContainer>
  );
};

export default WordCardCta;
