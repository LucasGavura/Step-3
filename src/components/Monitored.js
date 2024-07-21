import React, { useState } from 'react';
import './Monitored.css';

const Monitored = () => {
  const [rows, setRows] = useState([{ type: '', amount: '', weight: '', date: '' }]);

  const handleAddRow = () => {
    setRows([...rows, { type: '', amount: '', weight: '', date: '' }]);
  };

  const handleDeleteRow = (index) => {
    const newRows = rows.filter((_, rowIndex) => rowIndex !== index);
    setRows(newRows);
  };

  const handleChange = (index, event) => {
    const newRows = rows.map((row, rowIndex) => (
      rowIndex === index ? { ...row, [event.target.name]: event.target.value } : row
    ));
    setRows(newRows);
  };

  return (
    <section id="monitor" className="monitored">
      <h2>Workout Information</h2>
      <table className="workout-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Weight</th>
            <th>Date</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td><input type="text" name="type" value={row.type} onChange={(e) => handleChange(index, e)} /></td>
              <td><input type="number" name="amount" value={row.amount} onChange={(e) => handleChange(index, e)} /></td>
              <td><input type="number" name="weight" value={row.weight} onChange={(e) => handleChange(index, e)} /></td>
              <td><input type="date" name="date" value={row.date} onChange={(e) => handleChange(index, e)} /></td>
              <td><button onClick={() => handleDeleteRow(index)} className="delete-row-btn">Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAddRow} className="add-row-btn">Add Row</button>
    </section>
  );
};

export default Monitored;