import React, { useState, useEffect } from 'react';
import './tip.css';

function App() {
  const [total_tip, settotal_tip] = useState(0);
  const [total, settotal] = useState(0);
  const [Amt_per_person, setAmt_per_person] = useState(0);
  const [clear, setClear] = useState(false);

  useEffect(() => {
    document.querySelector('#billamt').value = "";
    document.querySelector('#peopleamt').value = "";
    document.querySelector('#serviceQual').value = "";
  }, [])

  useEffect(() => {
    if (clear) {
      document.querySelector('#billamt').value = "";
      document.querySelector('#peopleamt').value = "";
      document.querySelector('#serviceQual').value = "";
    }
  })
  const Clear = (e) => {
   
    
    document.querySelector('#form').reset();
    setClear(true);
    settotal_tip(0);
    settotal(0);
    setAmt_per_person(0);
  }
  const Calculate_Tip = (e) => {
    
    if (clear) setClear(false);
    let entry_amount = document.querySelector('#billamt').value;
    let number_people = document.querySelector('#peopleamt').value;
    let serviceQual = document.querySelector('#serviceQual').value;
    if ((entry_amount === '') || (number_people === '') || (serviceQual === ''))
      return;
    var total_tip = (entry_amount * serviceQual);


    
    let total = parseInt(entry_amount) + parseInt(total_tip);
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

    let Amt_per_person = parseInt(total) / parseInt(number_people);
    Amt_per_person = Math.round(Amt_per_person * 100) / 100;
    Amt_per_person = Amt_per_person.toFixed(2);

    settotal_tip(total_tip);
    settotal(total);
    setAmt_per_person(Amt_per_person);


  }

  return (
    <div className="random">
    
      <div className="container" id="calculator">

      <h1>TIP CALCULATOR</h1>

        <form id="form">

          <div id="total" className="txt">
            <label>BILL</label>

            <input type="number" className="form-control" placeholder="Total bill" id="billamt" required />
            </div>
          <div id="total" className="txt">
            <label >GUESTS</label>
            <input type="number" className="form-control" placeholder="Number of people" id="peopleamt" required />
            </div>
          <div className="txt">
            <label >QUALITY</label>
            <select
              required
              id="serviceQual">
              <option defaultValue="0">--Choose an option--</option>
              <option value="0.3">30&#37; &#45;Out standing  </option>
              <option value="0.2">20&#37; &#45; Good  </option>
              <option value="0.15">15&#37; &#45;OK  </option>
              <option value="0.1"> 10 &#37; &#45;Bad  </option>
              <option value="0.05"> 5&#37; &#45;Terrible </option>
            </select>
          </div>
        </form>
        <button id="submit" onClick={Calculate_Tip}>Submit</button>
        <button id="clear" onClick={Clear}>Clear</button>
      </div>
      
      <div className="result-container" >
      <h1>BILL TO BE PAID</h1>
        <form>
          <div className="txt">
            <label>TOTAL TIP</label>
            <input type="number" id="restip" className="form-control" value={total_tip} placeholder=" " readOnly />
          </div>
          <div className="txt">
            <label>TOTAL AMOUNT</label>
            <input type="number" id="restot" className="form-control" value={total} placeholder=" " readOnly />
          </div>
          <div className="txt">
            <label>PER PERSON</label>
            <input type="text" id="resper" className="form-control" value={Amt_per_person} placeholder=" " readOnly />
          </div>
        </form>
      </div>
    </div>

  );
}
export default App;