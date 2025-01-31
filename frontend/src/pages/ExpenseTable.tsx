import { Table } from "../components/Table"
import entry from "../data/entry.json"
export const ExpenseTable = () => {

const thead = ["Valor", "Concepto", "Fecha", "Tipo"]

  return(
    <main>
    <h1>Tabla Gastos</h1>
    <Table thead={thead} tbody={entry}/>
    </main>
  )
}