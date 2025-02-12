import { model } from "../../wailsjs/go/models";

export const Table = ({
  listTransactions,
}: {
  listTransactions: model.Transaction[];
}) => {
  if (listTransactions.length == 0) {
    return <h1>There are no transactions</h1>;
  }
  const head = Object.keys(listTransactions[0]);
  return (
    <>
      <table>
        <thead>
          <tr>
            {head.map((h, index) =>
              h === "type" || h === "id" ? null : <td>{h}</td>
            )}
          </tr>
        </thead>
        <tbody>
          {listTransactions?.map((tr, index) => (
            <tr key={index}>
              {Object.entries(tr).map(([key, value]) =>
                key === "type" || key === "id" ? null : (
                  <td key={key}>{value}</td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
