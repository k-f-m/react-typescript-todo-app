namespace TodoApp.Server.Data.Models
{
    public class TodoItem
    {
        public int Id { get; set; }
        public string Description { get; set; } = string.Empty;
        public DateTime? Deadline { get; set; }
        public bool IsDone { get; set; } = false;
    }
}
