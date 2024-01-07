import React from 'react';
import { Search, AtSign, ChevronDown, Icon } from 'react-feather';
import styled from 'styled-components';

interface Icons {
  [key: string]: Icon;
}

const icons: Icons = {
  search: Search,
  'at-sign': AtSign,
  'chevron-down': ChevronDown,
};

type IconProps = {
  id: string;
  size?: number;
  strokeWidth?: number;
  [propName: string]: unknown;
};

export default function IconCluster({
  id,
  size,
  strokeWidth = 1,
  ...delegated
}: IconProps) {
  const Component = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
    <Wrapper
      style={
        {
          '--size': `${size}px`,
          '--stroke-width': `${strokeWidth}px`,
        } as React.CSSProperties
      }
      {...delegated}
    >
      <Component color="currentColor" size={size} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: var(--size);
  height: var(--size);

  & > svg {
    display: block;
    stroke-width: var(--stroke-width);
  }
`;