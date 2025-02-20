using DynamicTimeTableGenerator.BLL;
using DynamicTimeTableGenerator.Models;
using Microsoft.AspNetCore.Mvc;

namespace DynamicTimeTableGenerator.Controllers
{
    public class TimeTableController : Controller
    {
        public IActionResult Index()
        {
            return View(new ModelTimeTable());
        }
        /// <summary>
        /// If anybody direct refresh the page then redirect to entry page
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult SubjectHoursEntry()
        {
            return View("~/Views/TimeTable/Index.cshtml",new ModelTimeTable());
        }
        /// <summary>
        /// If anybody direct refresh the page then redirect to entry page
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult GenerateTimeTable()
        {
            return View("~/Views/TimeTable/Index.cshtml", new ModelTimeTable());
        }
        [HttpPost]
        public ActionResult SubjectHoursEntry(ModelTimeTable model)
        {
            if (!ModelState.IsValid)
            {
                // Log validation errors
                foreach (var error in ModelState.Values.SelectMany(v => v.Errors))
                {
                    Console.WriteLine(error.ErrorMessage);
                }

                return View("Index", model); // Return the same view with errors
            }

            return View("SubjectHoursEntry", model);
        }

        [HttpPost]
        public ActionResult GenerateTimeTable(ModelTimeTable model)
        {
            if (model.SubjectHoursList.Sum(x => x.Hours) != model.TotalWeeklyHours)
            {
                ModelState.AddModelError("", "Total subject hours must match total weekly hours.");
                return View("SubjectHoursForm", model);
            }
            TimeTableBLL timeTableBll = new TimeTableBLL();
            ModelTimeTableList timetable = timeTableBll.GenerateTimetable(model);
            return View("TimeTableResult", timetable);
        }
    }
}
