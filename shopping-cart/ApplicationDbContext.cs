using Microsoft.EntityFrameworkCore;
using shopping_cart.Models;

namespace shopping_cart
{
    public class ApplicationDbContext : DbContext
    {

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        public DbSet<Product> Products { get; set; }
        public DbSet<Sale> Sales { get; set; }
    }
}
