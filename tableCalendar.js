  // <div id="table">
    
  // </div>


function createCalendar(id, year, month) {
	let tab = document.createElement("table");
	let data = new Date(year, month, 0);
	let dayInMonth = data.getDate();
	let data2 = new Date(year, month - 1, 1);
	let dayInWeek = data2.getDay();

	if(dayInWeek == 0) dayInWeek = 7;

	tab.innerHTML = 
	`<thead>
      <tr>
        <th>пн</th>
        <th>вт</th>
        <th>ср</th>
        <th>чт</th>
        <th>пт</th>
        <th>сб</th>
        <th>вс</th>
      </tr>
    </thead>
    <tbody>
    </tbody>`;
    table.appendChild(tab);
	for(let i = 0; i < Math.ceil((dayInMonth + dayInWeek) / 7); i++) {
		let tr = document.createElement("tr");
		tr.innerHTML = "<td></td><td></td><td></td><td></td><td></td><td></td><td></td>";
		tab.querySelector("tbody").appendChild(tr);
	}


	for(let i = 1; i <= dayInMonth; i++) {
		let newElem = document.createTextNode(i);
		console.log(document.querySelector("table").getElementsByTagName("td")[i - 2 + dayInWeek].appendChild(newElem));
	}
}





createCalendar(table, 2011, 10);