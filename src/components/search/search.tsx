import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f4f1e9; /* Parchment-like background */
`;

const Title = styled.h1`
  color: #3a2a1a;
  font-family: 'Cinzel', serif; /* A font that could fit a fantasy theme */
  text-align: center;
  margin-bottom: 20px;
`;

const Byline = styled.p`
  color: #3a2a1a; /* Earthy, book-like color to fit the theme */
  font-family: 'Cinzel', serif; /* A font that complements the magical theme */
  text-align: center;
  font-size: 1.2em; /* Slightly larger to emphasize the byline */
  margin-top: 10px;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  width: 90%;
  max-width: 300px; /* Ensures the input field looks good on mobile */
  padding: 10px;
  border: 2px solid #8c7b6b; /* Aged effect */
  border-radius: 20px;
  font-family: 'Cinzel', serif; /* A font that could fit a fantasy theme */
  background-color: rgba(255, 255, 255, 0.8);
  color: #3a2a1a;
  margin-bottom: 10px;

  ::placeholder {
    color: #6d5a48;
  }
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  background-color: #8c7b6b;
  color: white;
  border: none;
  border-radius: 20px;
  font-family: 'Cinzel', serif;
  cursor: pointer;

  &:hover {
    background-color: #a39079;
  }
`;

// Assuming you're using something like FontAwesome for icons
const Icon = styled.i`
  margin-right: 5px;
`;

type SearchBarProps = {
  handleChange: (event: string) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
};

const SearchBar = ({ handleChange, handleSubmit }: SearchBarProps) => {
  return (
    <SearchContainer>
      <Title>Lexiconomicon</Title>
      <Byline>Conjure Definitions with a Click—Or a Cluck.</Byline>
      <form onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          aria-label="Search word"
          required
          placeholder="Search the Great Library..."
          onChange={(event) => handleChange(event.target.value)}
        />
      </form>
      <SearchButton onClick={() => {}}>
        <Icon className="fas fa-search" /> Search
      </SearchButton>
    </SearchContainer>
  );
};

export default SearchBar;
