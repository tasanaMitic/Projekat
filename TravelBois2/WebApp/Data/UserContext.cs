using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApp.Models;

namespace WebApp.Data
{
	public class UserContext : DbContext
	{
		public UserContext(DbContextOptions<UserContext> options) : base(options)
		{ }
		public DbSet<User> Users { get; set; }
		public DbSet<RentAdmin> RentAdmins { get; set; }
		public DbSet<AvioAdmin> AvioAdmins { get; set; }
		public DbSet<Admin> Admins { get; set; }
	}
}
