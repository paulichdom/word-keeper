import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 0px 0px;
  width: 100%;
  gap: 16px;
`;

const Title = styled.h1`
  color: black;
  font-family: 'Cinzel', serif;
  text-align: center;
  font-size: 1.75rem;
  margin-bottom: 20px;  // Ensures spacing is consistent

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const SearchInput = styled.input`
  width: calc(100% - 12px);  // Adjust width to consider padding from Form
  padding: 10px;
  border: 2px solid #ccc;  // Lighter border for subtlety
  border-radius: 15px;
  font-family: 'Cinzel', serif;
  background-color: white;  // Slightly off-white background for contrast
  color: black;
  font-size: 1rem;
  outline: none;  // Removes the default focus outline
  transition: border-color 0.3s;  // Smooth transition for border color

  &:focus {
    border-color: black;  // Changes border color on focus for better visibility
  }
`;

const Form = styled.form`
  width: 100%;
  padding: 0 12px;
`;

type SearchBarProps = {
  handleChange: (value: string) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const SearchBar = ({ handleChange, handleSubmit }: SearchBarProps) => (
  <SearchContainer>
    <Title>Word Keeper</Title>
    <Form onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        aria-label="Search word"
        required
        placeholder="Search for words..."
        onChange={(event) => handleChange(event.target.value)}
      />
    </Form>
  </SearchContainer>
);

export default SearchBar;
