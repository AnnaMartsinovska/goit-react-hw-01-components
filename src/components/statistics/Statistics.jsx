import { StatisticElem } from './StaticticElem';
import { StyledSection, StyledList, StyledTitle } from './Statistic.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => (
  <StyledSection>
    {title ? <StyledTitle>Upload stats</StyledTitle> : null}

    <StyledList>
      {stats.map(({ id, label, percentage }) => (
        <StatisticElem key={id} label={label} percentage={percentage} />
      ))}
    </StyledList>
  </StyledSection>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
