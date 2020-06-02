using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp.Models
{
	public class AvioAdmin : IdentityUser
	{
		[Key]
		[Required]
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public int ID { get; set; }
		[Column(TypeName = "nvarchar(40)")]
		public string Email { get; set; }
		[Column(TypeName = "nvarchar(40)")]
		public string UserName { get; set; }
		[Column(TypeName = "nvarchar(40)")]
		public string Name { get; set; }
		[Column(TypeName = "nvarchar(40)")]
		public string Lastname { get; set; }
		[Column(TypeName = "nvarchar(40)")]
		public string Grad { get; set; }
		[Column(TypeName = "nvarchar(40)")]
		public string AvioKompanijaID { get; set; }
		[Column(TypeName = "nvarchar(40)")]
		public string BrojTelefona { get; set; }
		[Column(TypeName = "nvarchar(40)")]
		public string BrojPasosa { get; set; }
		[Column(TypeName = "nvarchar(40)")]
		public string Password { get; set; }
		[Column(TypeName = "bit")]
		public bool PromenioPassword { get; set; }
	}
}
