import React from 'react';

const Stock = ({item}) => {
    return (
        <div style={{border:'1px solid black'}}>
            <p>{item.StartDate}</p>
            <p>{item.StartTime}</p>
            <p>{item.Open}</p>
            <p>{item.High}</p>
        </div>
    )

};

export default Stock;
