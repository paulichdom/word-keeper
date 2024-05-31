import styled from 'styled-components';
import { Search, Settings, Bookmark } from 'react-feather';
import { forwardRef } from 'react';

export type NavItemId = 'search' | 'bookmarks' | 'settings';

type NavItemProps = {
  activeItem: NavItemId;
  setActiveItem: (item: NavItemId) => void;
};

const BottomNavigation = forwardRef<HTMLElement, NavItemProps>(
  ({ setActiveItem, activeItem }, bottomNavRef) => {
    const NavItem = ({
      id,
      Icon,
      label,
    }: {
      id: NavItemId;
      Icon: React.ElementType;
      label: string;
    }) => (
      <NavItemContainer
        $active={activeItem === id}
        onClick={() => setActiveItem(id)}
      >
        <Icon />
        <Label>{label}</Label>
      </NavItemContainer>
    );

    return (
      <NavBar ref={bottomNavRef}>
        <NavItem id="search" Icon={Search} label="Search" />
        <NavItem id="bookmarks" Icon={Bookmark} label="Bookmarks" />
        <NavItem id="settings" Icon={Settings} label="Settings" />
      </NavBar>
    );
  }
);

export default BottomNavigation;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  padding: 16px 24px 12px;
  z-index: 1000;
  width: 100%;
`;

type NavItemContainerProps = {
  $active: boolean;
};

const NavItemContainer = styled.div<NavItemContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  color: ${({ $active }) =>
    $active ? 'rgb(25, 118, 210)' : 'rgba(0, 0, 0, 0.6)'};
`;

const Label = styled.span`
  font-size: 12px;
  color: inherit;
  margin-top: 4px;
`;
