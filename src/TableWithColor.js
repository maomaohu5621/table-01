 import React, { useState } from 'react';

const TableWithColor = () => {
  const [selectedColor1, setSelectedColor1] = useState('grey');
  const [selectedColor2, setSelectedColor2] = useState('grey');
  const [selectedColor3, setSelectedColor3] = useState('grey');
  const [selectedColor4, setSelectedColor4] = useState('grey');

  const handleColorChange1 = (e) => {
    setSelectedColor1(e.target.value);
    updateSelectedColor4(e.target.value, selectedColor2, selectedColor3);
  };
  const handleColorChange2 = (e) => {
    setSelectedColor2(e.target.value);
    updateSelectedColor4(selectedColor1, e.target.value, selectedColor3);
  };
  const handleColorChange3 = (e) => {
    setSelectedColor3(e.target.value);
    updateSelectedColor4(selectedColor1, selectedColor2, e.target.value);
  };
  const updateSelectedColor4 = (color1, color2, color3) => {
    if (color1 === 'red' || color2 === 'red' || color3 === 'red') {
      setSelectedColor4('red');
    } else {
      setSelectedColor4('green');
    }
  };
  return (
  <div>
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
            <td className='fett-text' style={{color: selectedColor4}}>O</td>            
          </tr>
        </thead>
      </table>

    <div className='panel'>
      <table>
        <thead>
          <tr>    
            <td className='fett-text text-left'>AuftragsNr: 2023-01</td>
          </tr>
          <tr>
            <th>Checkliste</th>
            <th>Abteilung</th>
            <th>bis zum	</th>
            <th>Schnitt</th>
            <th>Status</th>
          </tr>
         </thead>
         <tbody>
            <tr>
              <td>Check ob Kunden erste Aufgabe bekommen.	</td>
              <td>Vertrieb</td>
              <td>10.06.23</td>
              <td>Vor</td>
              <td className="fett-text" style={{ color: selectedColor1 }}>
                 O
                <select autoFocus value={selectedColor1} onChange={handleColorChange1}>
                <option value="green">Fertig</option>
                <option value="grey">Kommend</option>
                <option value="red">Spät</option>              
              </select>
            </td>          
          </tr>
          <tr>
            <td>Umsetzung Design Kundenwünsche	.	</td>
            <td>Marketing</td>
            <td>12.06.23</td>
            <td>Vor</td>
            <td className="fett-text" style={{ color: selectedColor2 }}>
               O
              <select autoFocus value={selectedColor2} onChange={handleColorChange2}>
                <option value="green">Fertig</option>
                <option value="grey">Kommend</option>
                <option value="red">Spät</option>              
              </select>
            </td>          
          </tr>
          <tr>
            <td>Aufbau Automat.	</td>
            <td>Lager</td>
            <td>15.06.23</td>
            <td>Während</td>
            <td className="fett-text" style={{ color: selectedColor3 }}>
              O
              <select autoFocus value={selectedColor3} onChange={handleColorChange3}>
                <option value="green">Fertig</option>
                <option value="grey">Kommend</option>
                <option value="red">Spät</option>              
              </select>
            </td>          
          </tr>
        </tbody>
        </table>
    </div>
  </div>
  );
};
const TableWithColor2 = () => {
  const [selectedColor1, setSelectedColor1] = useState('grey');
  const [selectedColor2, setSelectedColor2] = useState('grey');
  const [selectedColor3, setSelectedColor3] = useState('grey');
  const [selectedColor4, setSelectedColor4] = useState('grey');
  const [selectedColor5, setSelectedColor5] = useState('grey');
  const [selectedColor6, setSelectedColor6] = useState('grey');

  const handleColorChange1 = (e) => {
    setSelectedColor1(e.target.value);
    updateSelectedColor6(e.target.value, selectedColor2, selectedColor3, selectedColor4, selectedColor5);
  };
  const handleColorChange2 = (e) => {
    setSelectedColor2(e.target.value);
    updateSelectedColor6(selectedColor1, e.target.value, selectedColor3);
  };
  const handleColorChange3 = (e) => {
    setSelectedColor3(e.target.value);
    updateSelectedColor6(selectedColor1, selectedColor2, e.target.value, selectedColor4, selectedColor5);
  };
  const handleColorChange4 = (e) => {
    setSelectedColor4(e.target.value);
    updateSelectedColor6(selectedColor1, selectedColor2, selectedColor3, e.target.value, selectedColor5);
  };
  const handleColorChange5 = (e) => {
    setSelectedColor5(e.target.value);
    updateSelectedColor6(selectedColor1, selectedColor2, selectedColor3, e.target.value, selectedColor5);
  };
  const updateSelectedColor6 = (color1, color2, color3, color4, color5) => {
    if (color1 === 'red' || color2 === 'red' || color3 === 'red' || color4 === 'red' || color5 === 'red') {
      setSelectedColor6('red');
    } else {
      setSelectedColor6('green');
    }
  };
  return (
  <div>
      <table>
        <thead>
          <tr>
            <th>AuftragsNr</th>
            <th>Standort</th>
            <th>Eventdatum</th>
            <th>Status</th>
          </tr>
         <tr>
            <td>2023-02</td>
            <td>Hamburg</td>
            <td>25.06.23</td>
            <td className='fett-text' style={{color: selectedColor6}}>O</td>            
          </tr>
        </thead>
      </table>

    <div className='panel'>
      <table>
        <thead>
          <tr>    
            <td className='fett-text text-left'>AuftragsNr: 2023-02</td>
          </tr>
          <tr>
            <th>Checkliste</th>
            <th>Abteilung</th>
            <th>bis zum	</th>
            <th>Schnitt</th>
            <th>Status</th>
          </tr>
         </thead>
         <tbody>
            <tr>
              <td>Check ob Kunden erste Aufgabe bekommen.	</td>
              <td>Vertrieb</td>
              <td>20.06.23</td>
              <td>Vor</td>
              <td className="fett-text" style={{ color: selectedColor1 }}>
                 O
                <select autoFocus value={selectedColor1} onChange={handleColorChange1}>
                <option value="green">Fertig</option>
                <option value="grey">Kommend</option>
                <option value="red">Spät</option>              
              </select>
            </td>          
          </tr>
          <tr>
            <td>Umsetzung Design Kundenwünsche	.	</td>
            <td>Marketing</td>
            <td>22.06.23</td>
            <td>Vor</td>
            <td className="fett-text" style={{ color: selectedColor2 }}>
               O
              <select autoFocus value={selectedColor2} onChange={handleColorChange2}>
                <option value="green">Fertig</option>
                <option value="grey">Kommend</option>
                <option value="red">Spät</option>              
              </select>
            </td>          
          </tr>
          <tr>
            <td>Aufbau Automat.	</td>
            <td>Lager</td>
            <td>25.06.23</td>
            <td>Während</td>
            <td className="fett-text" style={{ color: selectedColor3 }}>
              O
              <select autoFocus value={selectedColor3} onChange={handleColorChange3}>
                <option value="green">Fertig</option>
                <option value="grey">Kommend</option>
                <option value="red">Spät</option>              
              </select>
            </td>          
          </tr>
          <tr>
            <td>Abbau Automat.	</td>
            <td>Lager</td>
            <td>25.06.23</td>
            <td>Während</td>
            <td className="fett-text" style={{ color: selectedColor4 }}>
              O
              <select autoFocus value={selectedColor4} onChange={handleColorChange4}>
                <option value="green">Fertig</option>
                <option value="grey">Kommend</option>
                <option value="red">Spät</option>              
              </select>
            </td>          
          </tr>
          <tr>
            <td>Feedback.	</td>
            <td>Vertrieb</td>
            <td>26.06.23</td>
            <td>Nach</td>
            <td className="fett-text" style={{ color: selectedColor5 }}>
              O
              <select autoFocus value={selectedColor5} onChange={handleColorChange5}>
                <option value="green">Fertig</option>
                <option value="grey">Kommend</option>
                <option value="red">Spät</option>              
              </select>
            </td>          
          </tr>
        </tbody>
        </table>
    </div>
  </div>
  );
};

const TableWithConditionalCell = () => {

  return (
    <div>
      <TableWithColor /><br/>
      <TableWithColor2 />
    </div>
  );
};

export default TableWithConditionalCell; 




