using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp.Models
{
    public class Aerodrom
    {
        [Key]
        [Required]
        public string Grad { get; set; }
        [Required]
        public string Drzava { get; set; }
    }
}
