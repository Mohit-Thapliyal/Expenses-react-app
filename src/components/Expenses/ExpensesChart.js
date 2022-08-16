import React from 'react'
import Chart from '../Chart/Chart'

const ExpensesChart = (props) => {
    const chartDataPoints = [
        {label: "जन", value: 0},
        {label: "फ़र", value: 0},
        {label: "मार्च", value: 0},
        {label: "अप्रे", value: 0},
        {label: "मई", value: 0},
        {label: "जून", value: 0},
        {label: "जुल", value: 0},
        {label: "अग", value: 0},
        {label: "सित", value: 0},
        {label: "अक्", value: 0},
        {label: "नव", value: 0},
        {label: "दिस", value: 0}
    ]

    props.expenses.forEach(expense => {
      const expenseMonth = expense.date.getMonth();
      chartDataPoints[expenseMonth].value += expense.amount;
  })

  return (
    <Chart dataPoints={chartDataPoints}/>
  )
}

export default ExpensesChart