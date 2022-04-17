using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using shopping_cart.Models;

namespace shopping_cart.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoriesController : Controller
    {
        private readonly ApplicationDbContext applicationDbContext;
        public CategoriesController(ApplicationDbContext applicationDbContext)
        {
            this.applicationDbContext = applicationDbContext;
        }

        //Get All Category
        [HttpGet]
        public async Task<IActionResult> GetAllCategories()
        {
            var products = await applicationDbContext.Products.ToListAsync();
            Stack<String> category = new Stack<String>();
            products.ForEach(x => {if(!category.Contains(x.Category)){category.Push(x.Category);}});
            return Ok(category);
        }

    }
}
