﻿using Microsoft.CodeAnalysis.Options;
using Microsoft.EntityFrameworkCore;
using ServerApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApp.Models;
using WebApp.Models.Misc;

namespace WebApp.Data
{
    public class AviokompanijaContext : DbContext
    {
        public AviokompanijaContext(DbContextOptions<AviokompanijaContext> options) : base(options) { }
        
        public DbSet<Aviokompanija> Aviokompanije { get; set; }
        public DbSet<Let> Letovi { get; set; }
        public DbSet<Aerodrom> Aerodromi { get; set; }
        public DbSet<OcenaAviokompanije> OceneAviokompanije { get; set; }
        public DbSet<OcenaLeta> OceneLeta { get; set; }
        public DbSet<Sediste> SedistaLeta { get; set; }
        public DbSet<Pozivnica> Pozivnice { get; set; }
        public DbSet<Presedanje> Presedanja { get; set; }
        public DbSet<BrzaRezervacija> BrzeRezervacije { get; set; }
    }
}
