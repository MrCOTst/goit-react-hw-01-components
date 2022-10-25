import './Transactions.module.css';
import Even from './Even';
import PropTypes from 'prop-types';

function TableBody({ data }) {
  return (
    <tbody>
      {data.map(item => (
        <tr key={item.id}>
          <Even
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        </tr>
      ))}
    </tbody>
  );
}

TableBody.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default TableBody;
