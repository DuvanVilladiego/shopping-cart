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
        [Column(TypeName = "float")]
        public float Price { get; set; }

        [Required]
        [Column(TypeName = "int")]
        public int Stock { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string Category { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string Image { get; set; }
    }
}
