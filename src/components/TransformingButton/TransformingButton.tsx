import { useState } from 'react';
import { PlusCircle, CheckCircle } from 'react-feather';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

const Button = styled(animated.button)`
  background-color: transparent; // Keeping the background transparent
  border: none;
  border-radius: 50%;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 35px; // Customize button size as needed
  height: 35px; // Customize button size as needed
`;

const IconWrapper = styled(animated.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

const TransformingButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  // Animation for the PlusCircle to CheckCircle transformation
  const { transform, opacity } = useSpring({
    opacity: isToggled ? 1 : 0,
    transform: `rotate(${isToggled ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <Button onClick={() => setIsToggled(!isToggled)} aria-label="Toggle">
      <IconWrapper
        style={{
          opacity: opacity.interpolate(o => 1 - o),
          transform,
        }}
      >
        <PlusCircle color="#8c7b6b" size={48} />
      </IconWrapper>
      <IconWrapper
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotate(180deg)`),
        }}
      >
        <CheckCircle color="#4CAF50" size={48} />
      </IconWrapper>
    </Button>
  );
};

export default TransformingButton;
