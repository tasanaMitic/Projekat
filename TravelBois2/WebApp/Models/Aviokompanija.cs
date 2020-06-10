using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using WebApp.Models;

namespace ServerApp.Models
{
    public class Aviokompanija
    {
        [Key]
        [Required]
        public string Naziv { get; set; }
        [Required]
        public string Adresa { get; set; }
        [Required]
        public string Grad { get; set; }
        public string Opis { get; set; }
        ////public ICollection<Ocena> Ocene { get; set; }
        //[Required]
        //public ICollection<Let> Letovi { get; set; }
        //[Required]
        //public ICollection<Aerodrom> Aerodromi { get; set; }
        
    }
}
