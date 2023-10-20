import { StyledItem } from './Statistic.styled';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const StatisticElem = ({ label, percentage }) => {
  const randomColor = getRandomColor();

  return (
    <StyledItem $bg={randomColor}>
      <span class="label">{label}</span>
      <span class="percentage">{percentage}%</span>
    </StyledItem>
  );
};
