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
        public string Naziv { get; set; }
        public string Adresa { get; set; }
        public string Opis { get; set; }
        public ICollection<Ocena> Ocene { get; set; }
        public ICollection<Let> Letovi { get; set; }
        public ICollection<Aerodrom> Aerodromi { get; set; }
        
    }
}
