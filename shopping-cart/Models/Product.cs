using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace shopping_cart.Models
{
    public class Product
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string Name { get; set; }

        [Required]
        [Column(TypeName = "float(200)")]
        public float Price { get; set; }

        [Required]
        [Column(TypeName = "int(200)")]
        public int Stock { get; set; }


    }
}
