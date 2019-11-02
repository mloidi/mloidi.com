import React from 'react';

const style = (position, level) => {
  const no =
    'border-r-2 border-l-2 border rounded border-gray w-5 my-2 mx-1';
  const yes =
    'border-r-2 border-l-2 border rounded border-black w-5 my-2 mx-1 bg-black';
  if (position <= level) {
    return yes;
  } else {
    return no;
  }
};

const ProgressBar = ({ level }) => (
  <div className="flex flex-row">
    <div className={style(1, level)}></div>
    <div className={style(2, level)}></div>
    <div className={style(3, level)}></div>
    <div className={style(4, level)}></div>
    <div className={style(5, level)}></div>
    <div className={style(6, level)}></div>
    <div className={style(7, level)}></div>
    <div className={style(8, level)}></div>
    <div className={style(9, level)}></div>
    <div className={style(10, level)}></div>
  </div>
);

export default ProgressBar;
