import React from 'react';
import styled from 'styled-components';
import IconCluster from '../IconCluster/IconCluster';
import { ColorPalette } from '../../styles/constants';

type TextInputProps = {
  label?: string;
  icon: string;
  width?: number;
  size: 'small' | 'large';
  [key: string]: unknown;
};

type InputStyles = {
  [index in TextInputProps['size']]: {
    fontSize: number;
    iconSize: number;
    borderThickness: number;
    height: number;
  };
};

const STYLES: InputStyles = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderThickness: 1,
    height: 24,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    borderThickness: 2,
    height: 36,
  },
};

export default function IconInput({
  icon,
  width = 250,
  size,
  ...delegated
}: TextInputProps) {
  const styles = STYLES[size];
  return (
    <Wrapper>
      <IconWrapper
        style={{ '--size': `${styles.iconSize}px` } as React.CSSProperties}
      >
        <IconCluster id={icon} size={styles.iconSize} />
      </IconWrapper>
      <TextInput
        {...delegated}
        style={
          {
            '--width': `${width}px`,
            '--height': `${styles.height / 16}rem`,
            '--borderThickness': `${styles.borderThickness}px`,
            '--fontSize': `${styles.fontSize /16}rem`,
          } as React.CSSProperties
        }
      />
    </Wrapper>
  );
}

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${ColorPalette.white};

  &:hover {
    color: gray;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

const TextInput = styled.input`
  width: var(--width);
  height: var(--height);
  font-size: var(--fontSize);
  border: none;
  background-color: inherit;
  border-bottom: var(--borderThickness) solid ${ColorPalette.white};
  padding-left: var(--height);
  color: inherit;
  outline-offset: 2px;
  font-weight: 700;

  &::placeholder {
    font-size: 400;
    color: ${ColorPalette.coolGray};
  }
`;