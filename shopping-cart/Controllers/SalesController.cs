using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using shopping_cart.Models;
using shopping_cart.Controllers;

namespace shopping_cart.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SalesController : Controller
    {
        private readonly ApplicationDbContext applicationDbContext;
        public SalesController(ApplicationDbContext applicationDbContext)
        {
            this.applicationDbContext = applicationDbContext;
        }

        //Get All Sales
        [HttpGet]
        public async Task<IActionResult> GetAllSales()
        {
            var sales = await applicationDbContext.Sales.ToListAsync();
            return Ok(sales);
        }

        //Get Single Sale
        [HttpGet]
        [Route("{id:int}")]
        [ActionName("GetSales")]
        public async Task<IActionResult> GetSales([FromRoute] int id)
        {
            var sales = await applicationDbContext.Sales.FirstOrDefaultAsync(x => x.Id == id);
            if (sales != null)
            {
                return Ok(sales);
            }
            return NotFound("Sales not found");
        }

        //Add Sale
        [HttpPost]
        public async Task<IActionResult> AddSale([FromBody] Sale sale)
        {
            string[] products = sale.Products.Split(",");
            for (int i = 0; i < products.Length; i++)
            {
                var product = await applicationDbContext.Products.FirstOrDefaultAsync(x => x.Name == products[i]);
                if (product == null) { return BadRequest("Product not exist"); }
                if (product.Stock <= 0) { return BadRequest("Insufficient stock for make the sale"); }
            }
            for (int i = 0; i < products.Length; i++)
            {
                var productStock = await applicationDbContext.Products.FirstOrDefaultAsync(x => x.Name == products[i]);
                productStock.Stock -= 1;
                await applicationDbContext.SaveChangesAsync();
            }
            if(sale.Total <= 0){ return BadRequest("Missing the Total Field"); }
            sale.Id = new int();
            await applicationDbContext.Sales.AddAsync(sale);
            await applicationDbContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetSales), new { id = sale.Id }, sale);
        }
    }
}
