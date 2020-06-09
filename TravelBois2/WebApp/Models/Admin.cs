using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp.Models
{
	public class Admin : IdentityUser
	{
		[Column(TypeName = "nvarchar(40)")]
		public string Password { get; set; }
		[Column(TypeName = "nvarchar(15)")]
		public string TipKorisnika { get; set; }
	}
}
