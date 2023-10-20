import { StyledElem } from './Transaction.styled';

export const TransactionElem = ({ type, amount, currency }) => (
  <StyledElem>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </StyledElem>
);
