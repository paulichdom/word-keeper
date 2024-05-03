import { useState } from 'react';
import styled from 'styled-components';
import { Search, Settings, Bookmark } from 'react-feather';  // Example icons

type NavItemProps = {
    active: boolean;
    onClick: () => void;
};

const BottomNavigation = () => {
    const [activeItem, setActiveItem] = useState<string>('home'); // State with type string

    return (
        <NavBar>
            <NavItem 
                active={activeItem === 'home'} 
                onClick={() => setActiveItem('home')}
            >
                <Search />
                <Label>Search</Label>
            </NavItem>
            <NavItem 
                active={activeItem === 'search'} 
                onClick={() => setActiveItem('search')}
            >
                <Bookmark />
                <Label>Bookmarks</Label>
            </NavItem>
            <NavItem 
                active={activeItem === 'settings'} 
                onClick={() => setActiveItem('settings')}
            >
                <Settings />
                <Label>Settings</Label>
            </NavItem>
        </NavBar>
    );
};

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
`;

const NavItem = styled.div<NavItemProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    color: ${({ active }) => active ? 'rgb(25, 118, 210)' : 'rgba(0, 0, 0, 0.6)'};
`;

const Label = styled.span`
    font-size: 12px;
    color: inherit;
    margin-top: 4px;
`;

/* const Icon = styled.div`
    // Additional styles for icons if needed
`; */
