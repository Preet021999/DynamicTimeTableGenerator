using DynamicTimeTableGenerator.BLL;
using DynamicTimeTableGenerator.Models;
using Microsoft.AspNetCore.Mvc;
using System.Reflection;

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

                return View("Index", model); 
            }

            return View("SubjectHoursEntry", model);
        }
        /// <summary>
        /// This method is used to generate timetable
        /// </summary>
        /// <param name="timetable"></param>
        /// <returns></returns>
        public JsonResult GenerateTimeTables(ModelTimeTable timetable)
        {
            TimeTableBLL timeTableBll = new TimeTableBLL();
            ModelTimeTableList timeTableData = timeTableBll.GenerateTimetable(timetable);
            return Json(new { success = true, timeTableData });
        }
    }
}
