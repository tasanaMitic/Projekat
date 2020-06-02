using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp.Models
{
	public class RentAdminModel
	{
		public string Email { get; set; }
		public string Username { get; set; }
		public string Ime { get; set; }
		public string Prezime { get; set; }
		public string Grad { get; set; }
		public string NazivRente { get; set; }
		public string BrojTelefona { get; set; }
		public string BrojPasosa { get; set; }
		public string Password { get; set; }
		public bool PromenioPassword { get; set; }
	}
}
