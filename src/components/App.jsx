import { Profile } from './profile/Profile';
import user from '../assets/user.json';
import { Statistics } from './statistics/Statistics';
import data from '../assets/data.json';
import { FriendList } from './friends/FriendList';
import friends from '../assets/friends.json';
import { TransactionHistory } from './transaction/TransactionHistory';
import transaction from '../assets/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transaction} />
    </div>
  );
};
