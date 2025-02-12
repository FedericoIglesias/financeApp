import { model } from "../../wailsjs/go/models";

export const Table = ({
  listTransactions,
}: {
  listTransactions: model.Transaction[];
}) => {
  if (listTransactions.length == 0) {
    return <h1>There are no transactions</h1>;
  }

  return (
    <>
      <table>
        <thead>
          {listTransactions?.map((tr, index) => (
            <tr key={index}>
              {Object.entries(tr).map(([key]) =>
                key === "type" || key === "id" ? null : <td key={key}>{key}</td>
              )}
            </tr>
          ))}
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
