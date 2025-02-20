function validateHours() {
    var totalHours = parseInt($('#hdnTotalWeeklyHours').val()) || 0;
    var enteredHours = 0;
    var allFilled = true;

    $(".error-message").remove(); // Remove previous error messages

    $(".subject-row").each(function () {
        var subjectName = $(this).find(".subject-name").val().trim();
        var subjectHours = parseInt($(this).find(".subject-hours").val()) || 0;

        // Check if subject name is empty
        if (subjectName === "") {
            $(this).find(".subject-name").after("<span class='error-message' style='color: red; font-size: 12px;'>Enter subject name</span>");
            allFilled = false;
        }

        // Check if subject hours are empty or zero
        if (subjectHours <= 0) {
            $(this).find(".subject-hours").after("<span class='error-message' style='color: red; font-size: 12px;'>Enter valid hours</span>");
            allFilled = false;
        }

        enteredHours += subjectHours;
    });

    $("#remainingHours").text(totalHours - enteredHours);

    // Enable button only if total hours match and all fields are filled
    $("#btnGenerate").prop("disabled", enteredHours !== totalHours || !allFilled);
}

$(".subject-name, .subject-hours").on("input", validateHours);