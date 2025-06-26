// $(document).ready(function () {

//   const setDataForm = (id) => {
//     const url = "http://localhost:8080/patient/" + id

//     $.ajax({
//       url: url,
//       method: 'GET',
//       dataType: 'json',
//       success: function (data) {
//         // gridOptions.api.setRowData(data);
//         // console.log(data);
//         $("#firstName").val(data.firstName);
//         $("#middleName").val(data.middleName);
//         $("#lastName").val(data.lastName);
//         $("#aadharNumber").val(data.aadharNumber);
//         $("#phone").val(data.phone);
//         $("#email").val(data.email);
//         $("#gender").val(data.gender);

//         // console.log(data.dob);
//         let dob = data.dob.split("T")[0];
//         $("#dob").val(dob);

//         $("#house").val(data.house);
//         $("#village").val(data.village);
//         $("#subDivision").val(data.subDivision);
//         $("#policeStation").val(data.policeStation);
//         $("#district").val(data.district);
//         $("#state").val(data.state);
//         $("#coName").val(data.coName);
//         $("#emergencyPhone").val(data.emergencyPhone);

//       },
//       error: function (err) {
//         console.error('Error fetching patient:', err);
//       }
//     });

//     $("button[type='submit']").hide();
//     $("#edit").show();
//   }

//   const gridOptions = {
//     columnDefs: [
//       { headerName: "Select", checkboxSelection: true, headerCheckboxSelection: true },
//       { headerName: "ID", field: "patientId" },
//       { headerName: "First Name", field: "firstName" },
//       { headerName: "Middle Name", field: "middleName" },
//       { headerName: "Last Name", field: "lastName" },
//       { headerName: "Aadhar", field: "aadharNumber" },
//       { headerName: "Phone", field: "phone" },
//       { headerName: "Email", field: "email" },
//       { headerName: "Gender", field: "gender" },
//       { headerName: "DOB", field: "dob" },
//       { headerName: "House", field: "house" },
//       { headerName: "Village", field: "village" },
//       { headerName: "Sub-Division", field: "subDivision" },
//       { headerName: "Police Station", field: "policeStation" },
//       { headerName: "District", field: "district" },
//       { headerName: "State", field: "state" },
//       { headerName: "C/O Name", field: "coName" },
//       { headerName: "Emergency Phone", field: "emergencyPhone" }
//     ],

//     // rowData:[
//     //   {}
//     // ],

//     //column level
//     defaultColDef: {
//       sortable: true,
//       filter: true,
//       resizable: true,
//     },
//     //grid level
//     rowSelection: "single",
//     pagination: true,
//     paginationPageSize: 10,

//     onRowClicked: function (event) {
//       console.log(event.data.patientId);
//       setDataForm(event.data.patientId);
//     }

//   };

//   const gridDiv = document.querySelector('#patientData');
//   new agGrid.Grid(gridDiv, gridOptions);

//   $.ajax({
//     url: 'http://localhost:8080/patient',
//     method: 'GET',
//     dataType: 'json',
//     success: function (data) {
//       gridOptions.api.setRowData(data);
//     },
//     error: function (err) {
//       console.error('Error fetching patients:', err);
//     }
//   });
// });