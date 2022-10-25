import Statistics from './Statistics';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function StatisticsList({ stats }) {
  return (
    <ul className={css.stat_list}>
      {stats.map(item => (
        <li className={css.item} key={item.id}
         style={{backgroundColor: getRandomHexColor()}}>
          <Statistics label={item.label} percentage={item.percentage} />
        </li>
      ))}
    </ul>
  );
}

StatisticsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
export default StatisticsList;
