import React, { useState } from 'react';

const RecordForm = ({ addRecord }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecord({ title });
    setTitle('');
  };

  return (
    <div>
      <h2>Add Record</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default RecordForm;
