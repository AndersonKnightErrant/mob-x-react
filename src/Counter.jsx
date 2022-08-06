import { observer } from 'mobx-react';
import React from 'react';
import counter from './store/counter';

const Counter = observer(() => {
  return (
    <div className='counter'>
      <div className='btns'>
        <button onClick={() => counter.increment()} className='btn'>+</button>
        <button onClick={() => counter.decrement()} className='btn'>-</button>
			</div>
			<div>{'Count =' + counter.count}</div>
    </div>
  );
});

export default Counter;
