function validateHours() {
    var totalHours = parseInt($('#hdnTotalWeeklyHours').val()) || 0;
    var enteredHours = 0;
    var allFilled = true;
    var subjectNames = new Set();

    $(".error-message").remove();

    $(".subject-row").each(function () {
        var subjectName = $(this).find(".subject-name").val().trim();
        var subjectHours = parseInt($(this).find(".subject-hours").val()) || 0;

        if (subjectName === "") {
            $(this).find(".subject-name").after("<span class='error-message' style='color: red; font-size: 12px;'>Enter subject name</span>");
            allFilled = false;
        } else if (subjectNames.has(subjectName)) {
            $(this).find(".subject-name").after("<span class='error-message' style='color: red; font-size: 12px;'>Subject name must be unique</span>");
            allFilled = false;
        } else {
            subjectNames.add(subjectName);
        }

        if (subjectHours <= 0) {
            $(this).find(".subject-hours").after("<span class='error-message' style='color: red; font-size: 12px;'>Enter valid hours</span>");
            allFilled = false;
        }
        enteredHours += subjectHours;
    });

    $("#remainingHours").text(totalHours - enteredHours);
    $("#btnGenerate").prop("disabled", enteredHours !== totalHours || !allFilled);
}

$(".subject-name, .subject-hours").on("input", validateHours);

$("#btnGenerate").click(function (event) {
    event.preventDefault();
    $.ajax({
        url: "/TimeTable/GenerateTimeTables",
        type: "POST",
        data: $("#subjectHoursForm").serialize(),
        success: function (response) {
            if (response.success) {
                generateTimeTable(response.timeTableData);
            } else {
                alert(response.message);
            }
        },
        error: function () {
            alert("An error occurred while generating the timetable.");
        }
    });
});

function generateTimeTable(data) {
    $('#hdnLabel').show();
    let tableHtml = `
            <table class="table table-bordered">
                <thead class="TimeTableHeader">
                    <tr>`;
    for (let i = 1; i <= data.workingDays; i++) {
        tableHtml += `<th>Day ${i}</th>`;
    }
    tableHtml += `</tr></thead><tbody>`;
    data.timetableRows.forEach(row => {
        tableHtml += "<tr>";
        row.subjects.forEach(subject => {
            tableHtml += `<td>${subject}</td>`;
        });
        tableHtml += "</tr>";
    });
    tableHtml += `</tbody></table>`;
    $("#tblGenerateTable").html(tableHtml);
}

$("#btnReset").click(function (e) {
    e.preventDefault();
    $(".subject-name").val("");
    $(".subject-hours").val("");
    $(".error-message").remove();
    $("#remainingHours").text($("#hdnTotalWeeklyHours").val());
    $("#btnGenerate").prop("disabled", true);
    $("#tblGenerateTable").html("");
    $('#hdnLabel').hide();
});

$("#btnBackToTimeTableEntry").click(function () {
    window.location.href = "Index";
});