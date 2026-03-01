import { IndicatorWrapper, Mouse, Wheel, Arrow } from "./style";

const ScrollIndicator = () => {
  return (
    <IndicatorWrapper>
      <Mouse>
        <Wheel />
      </Mouse>

      <Arrow>↓</Arrow>
    </IndicatorWrapper>
  );
};

export default ScrollIndicator;