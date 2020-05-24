using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ServerApp.Models
{
	public class ApplicationUser : IdentityUser
	{
		[Column(TypeName = "nvarchar(20)")]
		public string Name { get; set; }
		[Column(TypeName = "nvarchar(20)")]
		public string LastName { get; set; }
	}
}
