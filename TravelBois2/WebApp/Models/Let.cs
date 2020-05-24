using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ServerApp.Models
{
    public class Let
    {
        [Key]
        public int Id { get; set; }
        public DateTime DatumPolaska { get; set; }
        public DateTime DatumDolaska { get; set; }
        public string MestoPolaska { get; set; }
        public string MestoDolaska { get; set; }
        public int RazdaljinaPutovanja { get; set; }
        public int TrajanjePutovanja { get; set; }
    }
}
