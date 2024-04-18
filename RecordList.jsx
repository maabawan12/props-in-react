import React from 'react';

const RecordList = ({ records }) => {
  return (
    <div>
      <h2>Record List</h2>
      <ul>
        {records.map((record) => (
          <li key={record.id}>{record.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecordList;
