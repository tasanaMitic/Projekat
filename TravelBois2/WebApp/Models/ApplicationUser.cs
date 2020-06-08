using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp.Models
{
	public class ApplicationUser : IdentityUser
	{
		[Column(TypeName ="nvarchar(30)")]
		public string Name { get; set; }
		[Column(TypeName = "nvarchar(30)")]
		public string Lastname { get; set; }
		[Column(TypeName = "nvarchar(30)")]
		public string Grad { get; set; }
		[Column(TypeName = "nvarchar(20)")]
		public string BrojPasosa { get; set; }
		[Column(TypeName = "nvarchar(15)")]
		public string BrojTelefona { get; set; }

	}
}
