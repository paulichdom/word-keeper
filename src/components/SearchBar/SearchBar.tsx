import { useEffect, useRef } from 'react';
import styled from 'styled-components';

type SearchBarProps = {
  handleChange: (value: string) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

const SearchBar = ({ handleChange, handleSubmit }: SearchBarProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
      inputRef.current?.focus()
  }, []);

  return (
    <SearchContainer>
      <Form onSubmit={handleSubmit}>
        <SearchInput
          ref={inputRef}
          type="text"
          aria-label="Search word"
          required
          placeholder="Search for words..."
          onChange={(event) => handleChange(event.target.value)}
        />
      </Form>
    </SearchContainer>
  );
};

export default SearchBar;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 16px;
`;

const SearchInput = styled.input`
  width: calc(100% - 6px);
  padding: 10px 12px;
  border: 2px solid #ccc;
  border-radius: 15px;
  background-color: #f9f9f9;
  color: black;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: black;
  }
`;

const Form = styled.form`
  width: 100%;
`;
