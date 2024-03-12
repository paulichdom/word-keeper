import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import CreativeResult from '../CreativeResult/CreativeResult';
import WordDetails from '../WordDetails/WordDetails';

const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  padding: 20px;
  position: relative;
  max-width: 600px; // Adjust based on your design needs
`;

const Title = styled.h1`
  font-family: 'Cinzel', serif;
  color: #3a2a1a;
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-top: 20px; // Adjust spacing as needed
`;

const ToggleButton = styled.button`
  background: transparent;
  border: none;
  color: #8c7b6b;
  cursor: pointer;
  font-family: 'Cinzel', serif;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }
`;

const Chevron = styled(animated.div)`
  font-size: 24px; // Adjust size as needed
  cursor: pointer;
  transition: transform 0.3s ease;
`;

// The WordDetails and other styled components remain the same

const WordCardChevron = () => {
  const [expanded, setExpanded] = useState(false);

  const contentProps = useSpring({
    opacity: expanded ? 1 : 0,
    height: expanded ? 'auto' : 0,
    transform: expanded ? 'translateY(0)' : 'translateY(-20%)',
  });

  const chevronStyle = useSpring({
    transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
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
      <CreativeResult/>
      <animated.div style={contentProps}>
        {expanded && (
          <WordDetails />
        )}
      </animated.div>
      <BottomSection>
        <ToggleButton onClick={() => setExpanded(!expanded)}>Show More</ToggleButton>
        <Chevron style={chevronStyle} onClick={() => setExpanded(!expanded)}>
          &#9660; {/* Downward chevron; rotates on click */}
        </Chevron>
      </BottomSection>
    </CardContainer>
  );
};

export default WordCardChevron;
