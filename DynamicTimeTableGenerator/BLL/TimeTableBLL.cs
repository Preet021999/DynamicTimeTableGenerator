using DynamicTimeTableGenerator.Models;

namespace DynamicTimeTableGenerator.BLL
{
    public class TimeTableBLL
    {
        public ModelTimeTableList GenerateTimetable(ModelTimeTable model)
        {
            var subjects = new List<string>();

            foreach (var sub in model.SubjectHoursList)
            {
                subjects.AddRange(Enumerable.Repeat(sub.SubjectName, sub.Hours));
            }

            Random rand = new Random();
            subjects = subjects.OrderBy(x => rand.Next()).ToList();

            List<ModelSubjects> timetableRows = new List<ModelSubjects>();
            int index = 0;

            for (int i = 0; i < model.SubjectsPerDay; i++)
            {
                ModelSubjects row = new ModelSubjects();
                for (int j = 0; j < model.WorkingDays; j++)
                {
                    row.Subjects.Add(subjects[index]);
                    index++;
                }
                timetableRows.Add(row);
            }

            return new ModelTimeTableList
            {
                WorkingDays = model.WorkingDays,
                SubjectsPerDay = model.SubjectsPerDay,
                TimetableRows = timetableRows
            };
        }
    }
}
