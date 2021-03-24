import React, { useContext, useState } from 'react'
import Cards from './Cards.js';
import {GlobalContext} from './GlobalContext.js';
import Grid from '@material-ui/core/Grid';
import {Bar, Line} from 'react-chartjs-2';

export function Graph() {
    const {dailydata} = useContext(GlobalContext)

    const daily = {
        labels: dailydata.map((date)=>(date.date)),
        datasets: [
          {
            label: 'Infected',
            borderColor:'yellow',
            data: dailydata.map((confirmed)=>(confirmed.confirmed))
          },{
            label: 'Recovered',
            borderColor:'green',
            data: dailydata.map((recovered)=>(recovered.recovered))
          },{
            label: 'Died',
            borderColor:'red',
            data: dailydata.map((death)=>(death.deaths))
          }
        ]
      };


    return (
        <div>
            <h2>Daily Cases</h2>
            <Line data={daily} />
        </div>
    )
}
