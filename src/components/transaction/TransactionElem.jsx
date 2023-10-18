export const TransactionElem = ({ type, amound, currency }) => (
  <tbody>
    <tr>
      <td>{type}</td>
      <td>{amound}</td>
      <td>{currency}</td>
    </tr>
  </tbody>
);
