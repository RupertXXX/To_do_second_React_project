import React, { useState } from 'react';
import c from './paginator.module.css';

const Paginator = (props) => {

    let pageCount = Math.ceil(props.count / props.pageSize);
    let counter = [];
    for(let i = 0; i < pageCount; i++)
    {
        counter[i] = i + 1;
    }

    let portionCount = Math.ceil(pageCount / props.portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber - 1) * props.portionSize + 1;
    let rightPortionNumber = portionNumber * props.portionSize;

    return <div className={c.main}>
        <div>
            {portionNumber > 1 &&
                <button className={c.btn} onClick={() => {setPortionNumber(portion => portion - 1)}}>{'\u003c'}</button> 
            }
        </div>
        {counter
            .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
            .map(obj => 
                <div key={obj} className={props.currentPage === obj - 1 ? c.selected : c.noselected} 
                onClick={() => {props.setCurrentPage(obj - 1)} } >
                    {obj}
                </div>
            )
        }
        <div>
            {portionNumber < portionCount &&
                <button className={c.btn} onClick={() => {setPortionNumber(portion => portion + 1)}}>{'\u003e'}</button> 
            }
        </div>
    </div>
}

export default Paginator;