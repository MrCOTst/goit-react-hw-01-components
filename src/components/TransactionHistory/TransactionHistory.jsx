import css from './Transactions.module.css';
import TableTread from './TableTread';
import TableBody from './TableBody';

function TransactionHistory({ items }) {
  return (
    <table className={css.transaction_history}>
      <TableTread />
      <TableBody data={items} />
    </table>
  );
}

export default TransactionHistory;
