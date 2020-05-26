using Microsoft.CodeAnalysis.Options;
using Microsoft.EntityFrameworkCore;
using ServerApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp.Data
{
    public class AviokompanijaContext : DbContext
    {
        public AviokompanijaContext(DbContextOptions<AviokompanijaContext> options) : base(options) { }
        public DbSet<Aviokompanija> Aviokompanije { get; set; }
    }
}
