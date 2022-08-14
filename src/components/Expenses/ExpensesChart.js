import React from 'react'
import Chart from '../Chart/Chart'

const ExpensesChart = (props) => {
    const chartDataPoints = [
        {label: "जनवरी", value: 0},
        {label: "फ़रवरी", value: 0},
        {label: "मार्च", value: 0},
        {label: "अप्रेल", value: 0},
        {label: "मई", value: 0},
        {label: "जून", value: 0},
        {label: "जुलाई", value: 0},
        {label: "अगस्त", value: 0},
        {label: "सितम्बर", value: 0},
        {label: "अक्टूबर", value: 0},
        {label: "नवम्बर", value: 0},
        {label: "दिसम्बर", value: 0}
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