import css from './App.module.css';
import user from './Profile/user';
import data from './Statistics/data';
import friends from './Friends/friends';
import transactions from './TransactionHistory/transactions';
import Profile from './Profile/Profile';
import StatisticsSection from './Statistics/StatisticsSection';
import StatisticsList from './Statistics/StatisticsList';
import StatisticsTitle from './Statistics/StatisticsTitle';
import FriendList from './Friends/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div className={css.divApp}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <StatisticsSection>
        <StatisticsTitle title="Upload stats" />
        <StatisticsList stats={data} />
      </StatisticsSection>

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};
