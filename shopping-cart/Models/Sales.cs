using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace shopping_cart.Models
{
    public class Sales
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string Customername { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string Products { get; set; }

        [Required]
        [Column(TypeName = "float")]
        public int Total { get; set; }


    }
}
