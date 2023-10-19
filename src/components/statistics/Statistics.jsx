import { StatisticElem } from './StaticticElem';
import { StyledSection, StyledList, StyledTitle } from './Statistic.styled';

export const Statistics = ({ title, stats }) => (
  <StyledSection>
    <StyledTitle>{title ? 'Upload stats' : ''}</StyledTitle>

    <StyledList>
      {stats.map(({ id, label, percentage }) => (
        <StatisticElem key={id} label={label} percentage={percentage} />
      ))}
    </StyledList>
  </StyledSection>
);
