import styled, { keyframes } from "styled-components";

const wheelMove = keyframes`
  0% { transform: translateY(0); opacity:1; }
  100% { transform: translateY(12px); opacity:0; }
`;

const arrowMove = keyframes`
  0% { transform: translateY(0); opacity:.6; }
  50% { transform: translateY(8px); opacity:1; }
  100% { transform: translateY(0); opacity:.6; }
`;

export const IndicatorWrapper = styled.div`
  margin-top: 40px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  color:white;
`;

export const Mouse = styled.div`
  width:28px;
  height:48px;
  border:2px solid white;
  border-radius:20px;
  display:flex;
  justify-content:center;
  padding-top:6px;
`;

export const Wheel = styled.div`
  width:4px;
  height:8px;
  background:white;
  border-radius:2px;
  animation:${wheelMove} 1.5s infinite;
`;

export const Arrow = styled.div`
  margin-top:8px;
  font-size:20px;
  animation:${arrowMove} 1.5s infinite;
`;