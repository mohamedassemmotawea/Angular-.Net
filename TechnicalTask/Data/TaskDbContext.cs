using Microsoft.EntityFrameworkCore;
using TechnicalTask.Models;

namespace TechnicalTask.Data
{
    public class TaskDbContext : DbContext
    {
        public TaskDbContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Customer> Customers { get; set; }
    }
}

