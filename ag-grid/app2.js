
class Comp {
  init(params) {
    console.log(params);
    this.eGui = document.createElement("div");
    this.eGui.innerHTML = `<span>${params.value.street}</span>,
                               <span>${params.value.suite}</span>,
                               <span>${params.value.city}</span>,
                               <span>${params.value.zipcode}</span>,
                               <span>${params.value.geo.lat}</span>,
                               <span>${params.value.geo.lng}</span>`;
  }
  getGui() {
    return this.eGui;
  }
}

function deselect() {
  gridOptions.api.deselectAll()
}

// Grid Options are properties passed to the grid
const gridOptions = {

  // each entry here represents one column
  columnDefs: [
    { field: "id" },
    { field: "name" },
    { field: "username" },
    { field: "email" },
    {
      field: 'address',
      cellRenderer: Comp,
      resizable: true
    },
  ],

  // default col def properties get applied to all columns
  defaultColDef: { sortable: true, filter: true },

  rowSelection: 'multiple', // allow rows to be selected
  animateRows: true, // have rows animate to new positions when sorted

  // example event handler
  onCellClicked: params => {
    console.log('cell was clicked', params)
  }
};

// get div to host the grid
const eGridDiv = document.getElementById("myGrid");
// new grid instance, passing in the hosting DIV and Grid Options
new agGrid.Grid(eGridDiv, gridOptions);

// Fetch data from server
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    // load fetched data into grid
    gridOptions.api.setRowData(data);
  });
