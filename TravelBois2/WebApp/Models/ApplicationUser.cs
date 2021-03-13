using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp.Models
{
	public class ApplicationUser : IdentityUser
	{
		[Column(TypeName ="nvarchar(30)")]
		[Required]
		public string Name { get; set; }
		[Column(TypeName = "nvarchar(30)")]
		[Required]
		public string Lastname { get; set; }
		[Column(TypeName = "nvarchar(30)")]
		[Required]
		public string Grad { get; set; }
		[Column(TypeName = "nvarchar(20)")]
		[Required]
		public string BrojPasosa { get; set; }
		[Column(TypeName = "nvarchar(15)")]
		[Required]
		public string BrojTelefona { get; set; }
		[Column(TypeName = "nvarchar(15)")]
		[Required]
		public string TipKorisnika { get; set; }
	}
}
