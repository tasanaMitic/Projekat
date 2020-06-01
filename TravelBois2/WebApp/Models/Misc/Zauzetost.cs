using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp.Models.Misc
{
	public class Zauzetost
	{
		[Column(TypeName = "nvarchar(40)")]
		public string ID { get; set; }
		[Column(TypeName = "nvarchar(40)")]
		public string KolaID { get; set; }	// FOREIGN KEY
		[Column(TypeName ="date")]
		public DateTime Od { get; set; }
		[Column(TypeName = "date")]
		public DateTime Do { get; set; }
	}
}
