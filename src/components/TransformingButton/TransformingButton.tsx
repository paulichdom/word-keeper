import { useState } from 'react';
import { PlusCircle, CheckCircle } from 'react-feather';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MutationResponse } from '../../../convex/dictionary';

interface TransformingButtonProps {
  handleAddToList: () => Promise<MutationResponse>;
}

const TransformingButton = ({ handleAddToList }: TransformingButtonProps) => {
  const [isToggled, setIsToggled] = useState(false);

  // TODO: handle remove bookmark action
  // TODO: handle unique constraint
  const toggleBookmark = async () => {
    try {
      // Attempt to execute the handleClick, which performs the mutation
      const result = await handleAddToList();
      // Update the state based on the mutation's success
      if (result.success) {
        setIsToggled(!isToggled);
      } else {
        // Handle the case where mutation is not successful
        console.error('Failed to update bookmark status.');
      }
    } catch (error) {
      // Handle any errors that occur during the mutation
      console.error('Error updating bookmark:', error);
    }
  };

  const { transform, opacity } = useSpring({
    opacity: isToggled ? 1 : 0,
    transform: `rotate(${isToggled ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <Button
      onClick={() => toggleBookmark()}
      disabled={isToggled}
      aria-label="Toggle"
    >
      <IconWrapper
        style={{
          opacity: opacity.interpolate((o) => 1 - o),
          transform,
        }}
      >
        <PlusCircle color="rgb(144, 154, 173)" size={28} />
      </IconWrapper>
      <IconWrapper
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotate(180deg)`),
        }}
      >
        <CheckCircle color="#4CAF50" size={28} />
      </IconWrapper>
    </Button>
  );
};

export default TransformingButton;

const Button = styled(animated.button)`
  background-color: transparent;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 35px;
  height: 35px;
`;

const IconWrapper = styled(animated.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
`;
