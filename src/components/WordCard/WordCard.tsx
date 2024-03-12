import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import WordDetails from '../WordDetails';
import CreativeResult from '../CreativeResult';

const CardContainer = styled(animated.div)`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 20px;
  padding: 20px;
  cursor: pointer;
  will-change: width, height;
  overflow: hidden;
`;

const Title = styled.h1`
  font-family: 'Cinzel', serif;
  color: #3a2a1a;
`;

// Your WordDetails styled components remain the same

const WordCard = () => {
  const [expanded, setExpanded] = useState(false);

  // Dummy data for the demonstration
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

  const animationProps = useSpring({
    to: {
      height: expanded ? 'auto' : '100px',
      opacity: expanded ? 1 : 0.6,
    },
    from: {
      height: '100px',
      opacity: 0.6,
    },
  });

  return (
    <CardContainer style={animationProps} onClick={() => setExpanded(!expanded)}>
      {expanded ? (
        <>
          <CreativeResult />
          <WordDetails />
        </>
      ) : (
        <CreativeResult />
      )}
    </CardContainer>
  );
};

export default WordCard;
