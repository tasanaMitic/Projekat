using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp.Models
{
	public class RentACar
	{
		[Column(TypeName = "nvarchar(40)")]
		public string ID { get; set; }
		[Column(TypeName = "nvarchar(40)")]
		public string AdminID { get; set; }
	}
}
