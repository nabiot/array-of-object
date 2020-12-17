import React from 'react';
import './ObjectLists.css';

function ObjectLists (props) {
    return(
        <div className = "tableDiv">
            <table>
                  <tr className ="table">
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Adress</th>
                    <th>seniority</th>
                  </tr>
                  <tr className = "table"> 
                    <td>{props.firstName}</td>
                    <td>{props.lastName}</td>
                    <td>{props.adress}</td>
                    <td>{props.seniority}</td>
                  </tr>  
            </table>
        </div>
    );
}

export default ObjectLists;