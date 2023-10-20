import { TransactionElem } from './TransactionElem';
import { StyledTable, StyledThead, StyledBody } from './Transaction.styled';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <StyledTable>
      <StyledThead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </StyledThead>
      <StyledBody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionElem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </StyledBody>
    </StyledTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
