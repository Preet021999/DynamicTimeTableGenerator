function validateForm() {
    var workingDays = parseInt($("#WorkingDays").val()) || 0;
    var subjectsPerDay = parseInt($("#SubjectsPerDay").val()) || 0;
    var totalSubjects = parseInt($("#TotalSubjects").val()) || 0;
    var totalHours = workingDays * subjectsPerDay;

    var isValid = true;

    $(".error-message").remove();

    if (workingDays <= 0 || workingDays > 7) {
        $("#WorkingDays").after("<span class='error-message' style='color: red; font-size: 12px;'>Enter a value between 1 and 7</span>");
        isValid = false;
    }

    if (subjectsPerDay <= 0 || subjectsPerDay > 8) {
        $("#SubjectsPerDay").after("<span class='error-message' style='color: red; font-size: 12px;'>Enter a value between 1 and 8</span>");
        isValid = false;
    }

    if (totalSubjects <= 0) {
        $("#TotalSubjects").after("<span class='error-message' style='color: red; font-size: 12px;'>Enter a valid positive number</span>");
        isValid = false;
    } else if (totalSubjects > totalHours && totalHours > 0) {
        $("#TotalSubjects").after("<span class='error-message' style='color: red; font-size: 12px;'>Total subjects cannot exceed " + totalHours + "</span>");
        isValid = false;
    }

    $("#btnSaveTimeTableDetails").prop("disabled", !isValid);

    if (isValid) {
        $("#totalHours").val(totalHours);
    } else {
        $("#totalHours").val("");
    }
}

function resetForm() {
    $("#WorkingDays, #SubjectsPerDay, #TotalSubjects").val("");
    $("#totalHours").val("");
    $(".error-message").remove();
    $("#btnSaveTimeTableDetails").prop("disabled", true);
    $('#WorkingDays').focus();
}

$("#WorkingDays, #SubjectsPerDay, #TotalSubjects").on("input", validateForm);

$("#resetButton").on("click", resetForm);

$("#WorkingDays, #SubjectsPerDay, #TotalSubjects").keypress(function (e) {
    var charCode = e.which ? e.which : e.keyCode;
    if (charCode < 48 || charCode > 57) { 
        e.preventDefault();
    }
});
