$(document).ready(function () {

    function getPatientFormData() {
        return {
            patientId: $("#patientId").val().trim(),
            firstName: $("#firstName").val().trim(),
            middleName: $("#middleName").val().trim(),
            lastName: $("#lastName").val().trim(),
            aadharNumber: $("#aadharNumber").val().trim(),
            //            otp: $("#otp").val().trim(),
            phone: $("#phone").val().trim(),
            email: $("#email").val().trim(),
            gender: $("#gender").val(),
            dob: $("#dob").val(),
            house: $("#house").val().trim(),
            village: $("#village").val().trim(),
            subDivision: $("#subDivision").val().trim(),
            policeStation: $("#policeStation").val().trim(),
            district: $("#district").val().trim(),
            state: $("#state").val().trim(),
            coName: $("#coName").val().trim(),
            emergencyPhone: $("#emergencyPhone").val().trim()
        };
    }

    //on input
    $("#aadharNumber").on("input", function () {
        let aadharNumber = $(this).val();
        let regex = /^\d{12}$/;

        if (regex.test(aadharNumber)) {
            $(this).css({
                background: "#caffe2",
                border: "1px solid #009c46"
            });
        } else {
            $(this).css({
                background: "#ffcaca",
                border: "1px solid #9c0000"
            });
        }
    });

    $("#phone").on("input", function () {
        let phone = $(this).val();
        let regex = /^[6-9]\d{9}$/;

        if (regex.test(phone)) {
            $(this).css({
                background: "#caffe2",
                border: "1px solid #009c46"
            });
        } else {
            $(this).css({
                background: "#ffcaca",
                border: "1px solid #9c0000"
            });
        }
    });

    $("#emergencyPhone").on("input", function () {
        let phone = $(this).val();
        let regex = /^[6-9]\d{9}$/;

        if (regex.test(phone)) {
            $(this).css({
                background: "#caffe2",
                border: "1px solid #009c46"
            });
        } else {
            $(this).css({
                background: "#ffcaca",
                border: "1px solid #9c0000"
            });
        }
    });


    function validate() {

        let {
            firstName, middleName, lastName,
            aadharNumber, otp, phone, email,
            gender, dob, house, village,
            subDivision, policeStation, district,
            state, coName, emergencyPhone
        } = getPatientFormData();

        if (!firstName.match(/^[A-Za-z\s]+$/)) {
            alert("Please enter a valid first name.");
            return;
        }
        if (!middleName.match(/^[A-Za-z\s]*$/)) {
            alert("Please enter a valid middle name.");
            return;
        }
        if (!lastName.match(/^[A-Za-z\s]+$/)) {
            alert("Please enter a valid last name.");
            return;
        }
        // if (!aadharNumber.match(/^\d{12}$/)) {
        //     alert("Aadhar number must be 12 digits.");
        //     return;
        // }
        // if (!otp.match(/^\d{6}$/)) {
        //     alert("OTP must be a 6-digit number.");
        //     return;
        // }
        // if (!phone.match(/^[6-9]\d{9}$/)) {
        //     alert("Please enter a valid Indian mobile number.");
        //     return;
        // }

        if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
            alert("Enter a valid email address.");
            return;
        }
        if (!gender) {
            alert("Please select a gender.");
            return;
        }
        if (!dob) {
            alert("Please select your date of birth.");
            return;
        }

        let birthDate = new Date(dob);
        let age = new Date().getFullYear() - birthDate.getFullYear();
        if (age < 0 || age > 120) {
            alert("Please enter a valid DOB.");
            return;
        }

        if (!house || !village || !subDivision || !policeStation || !district || !state) {
            alert("Please fill out all address fields.");
            return;
        }

        if (!coName.match(/^[A-Za-z\s.]+$/)) {
            alert("Please enter a valid C/O name.");
            return;
        }

        // if (!emergencyPhone.match(/^[6-9]\d{9}$/)) {
        //     alert("Enter a valid emergency contact number.");
        //     return;
        // }

        return true;
    }

    $("#submit").click(function (e) {
        e.preventDefault();
        if (!validate()) return;

        let formData = getPatientFormData();
        console.log(formData);

        $.ajax({
            url: "http://localhost:8080/patient",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(formData),
            success: function (response) {
                alert("Form submitted successfully!");
            }
        });
    });

    //fullscreen toggle
    // let isFullscreen = false;

    // $(".fullscreenToggle").click(function (e) {
    //     e.preventDefault();

    //     if (!isFullscreen) {
    //         $(this).parent().parent().css({
    //             width: '100%'
    //         });
    //         $(this).text("fullscreen_exit");
    //         $(this).parent().parent().siblings().hide();
    //     } else {
    //         $(this).parent().parent().css({
    //             width: '50%',
    //         });
    //         $(this).text("fullscreen");
    //         $(this).parent().parent().siblings().show();
    //     }

    //     isFullscreen = !isFullscreen;
    // });

    let isFullscreen = false;
    $(".fullscreenToggle").on('click', (function (e) {
        e.preventDefault();
        console.log("full screen called now");

        // let $this = $(this);
        // let targetId = $this.data("target");
        // let $activeBox = $(targetId);
        // let $otherBox = $activeBox.siblings();

        if (!isFullscreen) {
            $(this).parent().parent().css({
                flex: '2',
                width: '100%'
            });
            $(this).parent().parent().siblings().css({
                flex: '0',
                width: '0%',

            });
            $(this).text("fullscreen_exit");
        } else {
            $(this).parent().parent().css({
                flex: '1',
                width: '50%'
            });
            $(this).parent().parent().siblings().css({
                flex: '1',
                width: '50%'
            });
            $(this).text("fullscreen");
        }

        isFullscreen = !isFullscreen;
    }));





    const editDataForm = (id) => {
        let url = "http://localhost:8080/patient/" + id;

        $.ajax({
            url: url,
            method: 'GET',
            dataType: 'json',
            success: function (data) {
                // gridOptions.api.setRowData(data);
                // console.log(data);
                $("#patientId").val(data.patientId);
                $("#firstName").val(data.firstName);
                $("#middleName").val(data.middleName);
                $("#lastName").val(data.lastName);
                $("#aadharNumber").val(data.aadharNumber);
                $("#phone").val(data.phone);
                $("#email").val(data.email);
                $("#gender").val(data.gender);

                // console.log(data.dob);
                let dob = data.dob.split("T")[0];
                $("#dob").val(dob);

                $("#house").val(data.house);
                $("#village").val(data.village);
                $("#subDivision").val(data.subDivision);
                $("#policeStation").val(data.policeStation);
                $("#district").val(data.district);
                $("#state").val(data.state);
                $("#coName").val(data.coName);
                $("#emergencyPhone").val(data.emergencyPhone);

            },
            error: function (err) {
                console.error('Error fetching patient:', err);
            }
        });

        // $("button[type='submit']").hide();
        // $("#edit").show();

        // $("#edit").click(function (e) {
        //     e.preventDefault();
        //     if (!validate()) return;

        //     let formData = getPatientFormData();
        //     console.log(formData);

        //     $.ajax({
        //         url: "http://localhost:8080/patient/" + id,
        //         type: "PATCH",
        //         contentType: "application/json",
        //         data: JSON.stringify(formData),
        //         success: function (response) {
        //             alert("Form edited successfully!");
        //         },
        //         error: function (err) {
        //             console.error("PATCH Error:", err);
        //             alert("Something went wrong while updating.");
        //         }
        //     });
        // });

    }
    const resetDataForm = () => {
        $("#patientForm")[0].reset();
    }

    const gridOptions = {
        columnDefs: [
            { headerName: "Select", checkboxSelection: true },
            { headerName: "ID", field: "patientId" },
            { headerName: "First Name", field: "firstName" },
            { headerName: "Middle Name", field: "middleName" },
            { headerName: "Last Name", field: "lastName" },
            { headerName: "Aadhar", field: "aadharNumber" },
            { headerName: "Phone", field: "phone" },
            { headerName: "Email", field: "email" },
            { headerName: "Gender", field: "gender" },
            { headerName: "DOB", field: "dob" },
            { headerName: "House", field: "house" },
            { headerName: "Village", field: "village" },
            { headerName: "Sub-Division", field: "subDivision" },
            { headerName: "Police Station", field: "policeStation" },
            { headerName: "District", field: "district" },
            { headerName: "State", field: "state" },
            { headerName: "C/O Name", field: "coName" },
            { headerName: "Emergency Phone", field: "emergencyPhone" }
        ],

        // rowData:[
        //   {}
        // ],

        //column level
        defaultColDef: {
            sortable: true,
            filter: true,
            resizable: true,
            flex: 1,
            minWidth: 100
        },
        //grid level
        rowSelection: "single",
        pagination: true,
        paginationPageSize: 10,

        onRowClicked: function (event) {
            if (event.node.selected) {
                editDataForm(event.data.patientId);
            } else {
                resetDataForm();
            }
        },
        onRowSelected: function (event) {
            if (event.node.selected) {
                editDataForm(event.data.patientId);
            } else {
                resetDataForm();
            }
        },

    };

    const gridDiv = document.querySelector('#patientData');
    new agGrid.Grid(gridDiv, gridOptions);

    $.ajax({
        url: 'http://localhost:8080/patient',
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            gridOptions.api.setRowData(data);
        },
        error: function (err) {
            console.error('Error fetching patients:', err);
        }
    });


});
