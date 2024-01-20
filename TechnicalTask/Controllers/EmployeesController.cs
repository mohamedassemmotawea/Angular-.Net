using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TechnicalTask.Data;
using TechnicalTask.Models;

namespace TechnicalTask.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeesController : Controller
    {
        private readonly TaskDbContext _taskDb;
        public EmployeesController(TaskDbContext taskDbContext)
        {
            _taskDb = taskDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllCustomerData()
        {
            var customersData = await _taskDb.Customers.ToListAsync();
            return Ok(customersData);
        }

        [HttpPost]
        public async Task<IActionResult> AddCustomer([FromBody] Customer CustomersRequest)
        {
            CustomersRequest.Id = Guid.NewGuid();
            await _taskDb.Customers.AddAsync(CustomersRequest);
            await _taskDb.SaveChangesAsync();

            return Ok(CustomersRequest);

        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCustomerData(Guid id)
        {
            var customerToDelete = await _taskDb.Customers.FindAsync(id);

            if (customerToDelete == null)
            {
                return NotFound();
            }

            _taskDb.Customers.Remove(customerToDelete);
            await _taskDb.SaveChangesAsync();

            return NoContent();
        }

        [HttpPut]
        public async Task<IActionResult> UpdateCustomerData([FromBody] Customer updatedCustomer)
        {
            try
            {
                var existingCustomer = await _taskDb.Customers.FindAsync(updatedCustomer.Id);

                if (existingCustomer == null)
                {
                    return NotFound();
                }

                existingCustomer.name = updatedCustomer.name;
                existingCustomer.homeLocation = updatedCustomer.homeLocation;
                existingCustomer.description = updatedCustomer.description;

                _taskDb.Update(existingCustomer);
                await _taskDb.SaveChangesAsync();
                    
                return Ok(existingCustomer);
            }
            catch (Exception ex)
            {
                // Log the exception or handle it accordingly
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }


    }
}
