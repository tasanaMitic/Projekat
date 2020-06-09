using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp.Models
{
	public class RentAdmin : ApplicationUser
	{
		[Column(TypeName = "nvarchar(40)")]
		public string NazivRente { get; set; }
		[Column(TypeName = "bit")]
		public bool PromenioPassword { get; set; }
	}
}
