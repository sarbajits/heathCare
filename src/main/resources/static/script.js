$(document).ready(function () {

    function getPatientFormData() {
        return {
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



    $("#patientForm").submit(function (e) {
        e.preventDefault();

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

        let formData = getPatientFormData();
        console.log(formData);


        $.ajax({
            url: "/patient",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(formData),
            success: function (response) {
                alert("Form submitted successfully!");
            }
        });

    });

});
