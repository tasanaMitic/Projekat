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
        public string Grad { get; set; }
        public string Drzava { get; set; }
    }
}
