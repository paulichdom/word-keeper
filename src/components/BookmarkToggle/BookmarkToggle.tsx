import { useState } from 'react';
import styled from 'styled-components';
import { Bookmark } from 'react-feather';

const BookmarkToggle = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const toggleBookmark = () => setIsBookmarked(!isBookmarked);

  return (
    <FavoriteButton
      onClick={toggleBookmark}
      aria-label={isBookmarked ? 'Remove from bookmarks' : 'Add to bookmarks'}
    >
      <Bookmark
        color={isBookmarked ? 'rgb(25, 118, 210)  ' : 'grey'}
        fill={isBookmarked ? 'rgb(25, 118, 210)  ' : 'none'}
      />
      <Tooltip>
        {isBookmarked ? 'Remove from List' : 'Add to List'}
      </Tooltip>
    </FavoriteButton>
  );
};

export default BookmarkToggle;

const FavoriteButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0;
`;

const Tooltip = styled.div`
  visibility: hidden;
  width: auto;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  text-align: center;
  border-radius: 6px;
  padding: 6px 8px;
  position: absolute;
  z-index: 1;
  top: 50%;
  right: calc(100% + 5px);
  transform: translateY(-50%);
  font-size: 0.75em;
  white-space: nowrap;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 100%;
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent transparent rgba(0, 0, 0, 0.8);
  }

  ${FavoriteButton}:hover & {
    visibility: visible;
  }
`;
