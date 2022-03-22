import React, { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../Styles/AccountHistory.css";

function AccountHistory() {
  let navigate = useNavigate;
  const { history } = useSelector((state) => state.accountHistory);

  if (history === null) {
    navigate("/");
  }

  const addCredits = (total, num) => {
    if (num.type === "C") {
      return total + num.amount;
    }
    return total;
  };
  const addDebits = (total, num) => {
    if (num.type === "D") {
      return total + num.amount;
    }
    return total;
  };

  let string, parsed, totalDebits, totalCredits;
  if (history && string !== null) {
    let string = history.split("\n");
    parsed = {
      header: JSON.parse(string[0]),
      transactions: JSON.parse(string[1]),
    };
    totalCredits = parsed.transactions.transactions.reduce(addCredits, 0);
    totalDebits = parsed.transactions.transactions.reduce(addDebits, 0);
    console.log(totalCredits);
    console.log(totalDebits);
    console.log(parsed);

    return (
      <div className="holder">
        <div className="hHeader">
          <div className="toptable">
            <span className="topdetails">NAME :</span>
            <span className="topdetails">
              {parsed.header.accounts[0].accountName}
            </span>
          </div>
          <div className="toptable">
            <span className="topdetails">BANK :</span>
            <span className="topdetails">Zenith</span>
          </div>
          <div className="toptable">
            <span className="topdetails">ACCOUNT NUMBER :</span>
            <span className="topdetails">
              {parsed.header.accounts[0].accountNumber}
            </span>
          </div>
          <div className="toptable">
            <span className="topdetails">BALANCE :</span>
            <span className="topdetails">
              {parsed.header.accounts[0].availableBalance}
            </span>
          </div>
          <div className="toptable">
            <span className="topdetails">PERIOD :</span>
            <span className="topdetails">{`${parsed.transactions.transactions[0].date.slice(
              0,
              11
            )} - ${parsed.transactions.transactions[
              parsed.transactions.transactions.length - 1
            ].date.slice(0, 11)}`}</span>
          </div>
          <div className="toptable">
            <span className="topdetails">TOTAL CREDITS :</span>
            <span className="topdetails">{totalCredits}</span>
          </div>
          <div className="toptable">
            <span className="topdetails">TOTAL DEBITS :</span>
            <span className="topdetails">{totalDebits}</span>
          </div>
          <div className="toptable">
            <span className="topdetails">DATE GENERATED :</span>
            <span className="topdetails">
              {new Date().toLocaleDateString("en-US")}
            </span>
          </div>
        </div>
        <div className="statement">LAST SIX STATEMENT</div>
        <div>
          <table>
            <tbody>
              <tr>
                <th>#</th>
                <th>DATE</th>
                <th>NARRATION</th>
                <th>TYPE</th>
                <th>AMOUNT</th>
                <th>BALANCE</th>
              </tr>
              {parsed.transactions.transactions.slice(0, 7).map((obj, id) => (
                <tr key={id}>
                  <td>{id + 1}</td>
                  <td>{obj.date.slice(0, 11)}</td>
                  <td>{obj.narration}</td>
                  <td>{obj.type}</td>
                  <td>{obj.amount}</td>
                  <td>{obj.closingBalance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  } else {
    navigate("/");
    return <div style={{ marginLeft: 50 }}>You are not signed in</div>;
  }
}

export default AccountHistory;
