import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import {Bar } from 'react-chartjs-2';
import useStyles from './styles';
import useTransactions from   '../../../../uuuuuuu'
//import { BarChart } from '@material-ui/icons';
const DetailsCard = ({ title, subheader }) => {
  const { total, chartData } = useTransactions(title);
  const classes = useStyles();

/*
  if (title ==='Income')
  {
    return (
      <Card >
        <CardHeader title={title} subheader={subheader} />
        <CardContent>
          <Typography variant="h5">${total}</Typography>
          <Bar data={chartData} />
        </CardContent>
      </Card>
    );

  }

  else if (title === 'Expenses')
  {

    return (
      <Card >
        <CardHeader title={title} subheader={subheader} />
        <CardContent>
          <Typography variant="h5">${total}</Typography>
          <Bar data={chartData} />
        </CardContent>
      </Card>
    );
  }

  else
  {

    return (
    <Card >
    <CardHeader title={title} subheader={subheader} />
    <CardContent>
      <Typography variant="h5">${total}</Typography>
      <Bar data={chartData} />
    </CardContent>
  </Card>
    ); 

  }

*/


  return (
    //<Card className={title === 'Income' ? classes.income :classes.expense}>
    <Card className={title === 'Income' ? classes.income : title === 'Expense' ? classes.expense : classes.loan }> 
      <CardHeader title={title} subheader={subheader} />
      <CardContent>
        <Typography variant="h5">${total}</Typography>
        <Bar data={chartData} />
      </CardContent>
    </Card>
  );

};

export default DetailsCard;
