import React, { useState } from 'react';

const TableWithConditionalCell = () => {
  const [cell1Content, setCell1Content] = useState('');
  const [cell2Content, setCell2Content] = useState('');
  const [cell3Content, setCell3Content] = useState('');
  const [cell4Content, setCell4Content] = useState('');

  const handleCell1Change = (e) => {
    setCell1Content(e.target.value);
    updateCell4Content(e.target.value, cell2Content, cell3Content);
  };

  const handleCell2Change = (e) => {
    setCell2Content(e.target.value);
    updateCell4Content(cell1Content, e.target.value, cell3Content);
  };

  const handleCell3Change = (e) => {
    setCell3Content(e.target.value);
    updateCell4Content(cell1Content, cell2Content, e.target.value);
  };

  const updateCell4Content = (content1, content2, content3) => {
    if (content1 === 'red' || content2 === 'red' || content3 === 'red') {
      setCell4Content('red');
    } else {
      setCell4Content('green');
    }
  };

  return (
    <div>
    <table>
      <thead>
        <tr>
          <th>Checkliste</th>
          <th>Abteilung</th>
          <th>bis zum</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
          Check ob Kunden erste Aufgabe bekommen. 
          </td>
          <td>
            Vertrieb
          </td>
          <td className="dick">
            10.06.23
          </td>
          {/* <td><input type="text" value={cell1Content} onChange={handleCell1Change} /></td> */}
{/*       <td className="dick" style={{ color: cell1Content }}>
            O
            <select autoFocus value={cell1Content} onChange={handleCell1Change}>
              <option value="grey">Kommend</option>
              <option value="green">Fertig</option>
              <option value="red">Spät</option>              
            </select>
          </td>  */}
          
        </tr>
        <tr>
            <td>
                Umsetzung Design Kundenwünsche
            </td>
            <td>
                Marketing
            </td>
            <td>12.06.23</td>
            <td><input type="text" value={cell2Content} onChange={handleCell2Change} /></td>
        </tr>
        <tr>
            <td>Aufbau Automat</td>
            <td>Lager</td>
            <td>15.06.23</td>
            <td><input type="text" value={cell3Content} onChange={handleCell3Change} /></td>
        </tr>
      </tbody>
    </table>
    <br/><br/><br/>

    <table>
        <thead>
            <tr>
                <th>AuftragsNr</th>
                <th>Standort</th>
                <th>Eventdatum</th>
                <th>Status</th>
            </tr>
            <tr>
                <td>2023-01</td>
                <td>Bocholt</td>
                <td>15.06.23</td>
                <td>
                <td style={{ backgroundColor: cell4Content }}>{cell4Content}</td>
                </td>
            </tr>
        </thead>
    </table>

    </div>
  );
};

export default TableWithConditionalCell;



