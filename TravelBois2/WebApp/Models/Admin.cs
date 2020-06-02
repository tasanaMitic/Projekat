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
		[Key]
		[Required]
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public int ID { get; set; }
		[Column(TypeName = "nvarchar(40)")]
		public string Email { get; set; }
		[Column(TypeName = "nvarchar(40)")]
		public string UserName { get; set; }
		[Column(TypeName = "nvarchar(40)")]
		public string Password { get; set; }
	}
}
