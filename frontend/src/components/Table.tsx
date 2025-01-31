export const Table = ({
  thead,
  tbody,
}: {
  thead: [string];
  tbody: [[string]];
}) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            {thead.map((th, index) => (
              <th key={index}>{th}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tbody.map((tr, index) => (
            <tr key={index}>
              {tr.map((td, index) => (
                <td key={index}>{td}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
