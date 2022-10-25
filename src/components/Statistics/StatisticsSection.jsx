import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function StatisticsSection({ titel, children }) {
  return (
    <section className={css.statistics}>
      {titel}
      {children}
    </section>
  );
}

StatisticsSection.propTypes = {
  title: PropTypes.string,
};

export default StatisticsSection;
