import { StyledItem } from './Statistic.styled';

export const StatisticElem = ({ label, percentage }) => (
  <StyledItem>
    <span class="label">{label}</span>
    <span class="percentage">{percentage}%</span>
  </StyledItem>
);
