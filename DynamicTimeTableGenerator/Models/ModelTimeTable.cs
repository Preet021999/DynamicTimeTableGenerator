using System.ComponentModel.DataAnnotations;

namespace DynamicTimeTableGenerator.Models
{
    public class ModelTimeTable
    {
        [Required, Range(1, 7, ErrorMessage = "Working days must be between 1 and 7.")]
        public int WorkingDays { get; set; }

        [Required, Range(1, 8, ErrorMessage = "Subjects per day must be between 1 and 8.")]
        public int SubjectsPerDay { get; set; }

        [Required, Range(1, int.MaxValue, ErrorMessage = "Total subjects must be a positive number.")]
        public int TotalSubjects { get; set; }

        public int TotalWeeklyHours => WorkingDays * SubjectsPerDay;

        public List<ModelSubjectHours> SubjectHoursList { get; set; } = new List<ModelSubjectHours>();
    }
    public class ModelSubjectHours
    {
        public string SubjectName { get; set; }
        public int Hours { get; set; }
    }
    public class ModelTimeTableList
    {
        public int WorkingDays { get; set; }       // Number of working days
        public int SubjectsPerDay { get; set; }    // Subjects per day
        public List<ModelSubjects> TimetableRows { get; set; } = new List<ModelSubjects>();
    }
    public class ModelSubjects
    {
        public List<string> Subjects { get; set; } = new List<string>();
    }
}
