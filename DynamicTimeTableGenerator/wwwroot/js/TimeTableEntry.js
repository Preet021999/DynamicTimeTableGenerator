function validateForm() {
    var workingDays = parseInt($("#WorkingDays").val()) || 0;
    var subjectsPerDay = parseInt($("#SubjectsPerDay").val()) || 0;
    var totalSubjects = parseInt($("#TotalSubjects").val()) || 0;
    var totalHours = workingDays * subjectsPerDay;

    var isValid = true; // Assume form is valid

    // Clear previous error messages
    $(".error-message").remove();

    // Validate Working Days
    if (workingDays <= 0 || workingDays > 7) {
        $("#WorkingDays").after("<span class='error-message' style='color: red; font-size: 12px;'>Enter a value between 1 and 7</span>");
        isValid = false;
    }

    // Validate Subjects Per Day
    if (subjectsPerDay <= 0 || subjectsPerDay >= 9) {
        $("#SubjectsPerDay").after("<span class='error-message' style='color: red; font-size: 12px;'>Enter a value between 1 and 8</span>");
        isValid = false;
    }

    // Validate Total Subjects
    if (totalSubjects <= 0) {
        $("#TotalSubjects").after("<span class='error-message' style='color: red; font-size: 12px;'>Enter a valid positive number</span>");
        isValid = false;
    }

    // Enable or disable button based on validation
    $("#btnSaveTimeTableDetails").prop("disabled", !isValid);

    // Set total hours if valid
    if (isValid) {
        $("#totalHours").val(totalHours);
    } else {
        $("#totalHours").val(""); // Clear total hours if form is invalid
    }
}
$("#WorkingDays, #SubjectsPerDay, #TotalSubjects").on("input", validateForm);
$("#WorkingDays").keypress(function (e) {
    var charCode = e.which ? e.which : e.keyCode;

    // Allow only numbers (48-57), backspace (8), and tab (9)
    if (charCode < 48 || charCode > 57) {
        e.preventDefault();
    }
});
