import React from "react";
import "./Buttons.css"

export const Buttons = () => {
  return (
    <div className="buttons">
      <div className="popUopButtons">
        <button className="forWeek">На неделю</button>
        <button className="forMonth">На месяц</button>
      </div>
      <button className="canc">Отменить</button>
    </div>
  );
};
