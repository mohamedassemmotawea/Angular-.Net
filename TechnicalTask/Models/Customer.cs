namespace TechnicalTask.Models
{
    public class Customer
    {
        public Guid Id { get; set; }
        public string? name { get; set; }
        public string? homeLocation { get; set; }
        public string? description { get; set; }
        public string? JobTitle { get; set; }
        public string? EntryEmployee { get; set; }
        public DateTime? InsertDate { get; set; }
        public string? AgentDescription { get; set; }
        public string? AgentSrc { get; set; }
        public string? SalesEmp { get; set; }
        public DateTime? UpdateDate { get; set; }
        public string? UpdateEmployee { get; set; }
    }
}
