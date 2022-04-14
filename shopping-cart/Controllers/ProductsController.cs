using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using shopping_cart.Models;

namespace shopping_cart.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        private readonly ApplicationDbContext applicationDbContext;
        public ProductsController(ApplicationDbContext applicationDbContext)
        {
            this.applicationDbContext = applicationDbContext;
        }

        //Get All Products
        [HttpGet]
        public async Task<IActionResult> GetAllProducts()
        { 
            var products = await applicationDbContext.Products.ToListAsync();
            return Ok(products);
        }

        //Get Single Product
        [HttpGet]
        [Route("{id:int}")]
        [ActionName("GetProduct")]
        public async Task<IActionResult> GetProduct ([FromRoute] int id)
        {
            var product = await applicationDbContext.Products.FirstOrDefaultAsync(x => x.Id == id);
            if(product != null)
            {
                return Ok(product);
            }
            return NotFound("Product not found");
        }

        //Add Product
        [HttpPost]
        public async Task<IActionResult> AddProduct([FromBody] Product product)
        {
            var existProduct = await applicationDbContext.Products.FirstOrDefaultAsync(x => x.Name == product.Name);
            if (existProduct != null) { return BadRequest("The Product " + product.Name + " already exist"); }
            product.Id = new int();
            await applicationDbContext.Products.AddAsync(product);
            await applicationDbContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetProduct), new { id = product.Id } , product);
        }

        //Update Product
        [HttpPut]
        [Route("{id:int}")]
        public async Task<IActionResult> UpdateProduct([FromRoute] int  id, [FromBody] Product product)
        {
            var existingProduct = await applicationDbContext.Products.FirstOrDefaultAsync(x => x.Id == id);
            if(existingProduct != null)
            {
                existingProduct.Name = product.Name;
                existingProduct.Price = product.Price;
                existingProduct.Stock = product.Stock;
                await applicationDbContext.SaveChangesAsync();
                return Ok(existingProduct); 
            }

            return NotFound("Product not found");
        }

        //Delete Product
        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> DeleteProduct([FromRoute] int id)
        {
            var existingProduct = await applicationDbContext.Products.FirstOrDefaultAsync(x => x.Id == id);
            if (existingProduct != null)
            {
                applicationDbContext.Remove(existingProduct);
                await applicationDbContext.SaveChangesAsync();
                return Ok(existingProduct);
            }

            return NotFound("Product not found");
        }
    }
}
