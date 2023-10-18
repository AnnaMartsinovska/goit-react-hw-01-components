import { StatisticElem } from './StaticticElem';

export const Statistics = ({ title, stats }) => (
  <section class="statistics">
    {title ? <h2 class="title">Upload stats</h2> : null}

    <ul class="stat-list">
      {stats.map(({ id, label, percentage }) => (
        <StatisticElem key={id} label={label} percentage={percentage} />
      ))}
    </ul>
  </section>
);
