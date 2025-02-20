function validateHours() {
    var totalHours = parseInt($('#hdnTotalWeeklyHours').val()) || 0;
    var enteredHours = 0;
    var allFilled = true;

    $(".subject-hours").each(function () {
        var value = parseInt($(this).val()) || 0;
        if ($(this).val().trim() === "" || value <= 0) {
            allFilled = false; // Check if any field is empty or zero
        }
        enteredHours += value;
    });

    $("#remainingHours").text(totalHours - enteredHours);

    // Enable button only if total hours match and all fields are filled
    $("#btnGenerate").prop("disabled", enteredHours !== totalHours || !allFilled);
}

$(".subject-hours").on("input", validateHours);