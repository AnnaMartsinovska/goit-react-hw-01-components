import { TransactionElem } from './TransactionElem';

export const TransactionHistory = ({ items }) => {
  <table class="transaction-history">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    {items.map(({ id, type, amound, currency }) => (
      <TransactionElem
        key={id}
        type={type}
        amound={amound}
        currency={currency}
      />
    ))}
  </table>;
};
