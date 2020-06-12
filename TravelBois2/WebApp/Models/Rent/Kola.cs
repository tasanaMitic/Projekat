using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using WebApp.Models.Enum;

namespace WebApp.Models
{
	public class Kola
	{
		[Key]
		[Column(TypeName = "nvarchar(40)")]
		public string Naziv { get; set; }
		[Column(TypeName = "tinyint")]
		public int BrojMesta { get; set; }
		[Column(TypeName = "smallint")]
		public int Godiste { get; set; }
		[Column(TypeName = "tinyint")]
		public Enums.TipKola TipVozila { get; set; }
	}
}
