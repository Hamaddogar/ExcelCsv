import React from 'react';
import Papa from 'papaparse';

function  ExcelFilEtEST() {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        console.log(results.data);
      },
    });
  };

  return (
    <div>
      <h2> Hamad  working to use  import Excel file</h2>
      <input type="file" onChange={handleFileUpload} />
    </div>
  );
}

export default ExcelFilEtEST;
