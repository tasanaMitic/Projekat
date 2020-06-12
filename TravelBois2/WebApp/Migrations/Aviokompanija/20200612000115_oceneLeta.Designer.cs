﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WebApp.Data;

namespace WebApp.Migrations.Aviokompanija
{
    [DbContext(typeof(AviokompanijaContext))]
    [Migration("20200612000115_oceneLeta")]
    partial class oceneLeta
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.4")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("ServerApp.Models.Aviokompanija", b =>
                {
                    b.Property<string>("Naziv")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Adresa")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Grad")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Opis")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Naziv");

                    b.ToTable("Aviokompanije");
                });

            modelBuilder.Entity("ServerApp.Models.Let", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Aviokompanija")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("CenaKarte")
                        .HasColumnType("int");

                    b.Property<string>("DatumDolaska")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DatumPolaska")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("KlasaLeta")
                        .HasColumnType("int");

                    b.Property<string>("MestoDolaska")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MestoPolaska")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("RazdaljinaPutovanja")
                        .HasColumnType("int");

                    b.Property<int>("TipLeta")
                        .HasColumnType("int");

                    b.Property<int>("TrajanjePutovanja")
                        .HasColumnType("int");

                    b.Property<string>("VremePoletanja")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("VremeSletanja")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Letovi");
                });

            modelBuilder.Entity("WebApp.Models.Aerodrom", b =>
                {
                    b.Property<string>("Grad")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Aviokompanija")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Drzava")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("LetId")
                        .HasColumnType("int");

                    b.HasKey("Grad");

                    b.HasIndex("LetId");

                    b.ToTable("Aerodromi");
                });

            modelBuilder.Entity("WebApp.Models.Misc.Ocena", b =>
                {
                    b.Property<string>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("AviokompanijaNaziv")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("UserID")
                        .HasColumnType("nvarchar(40)");

                    b.Property<byte>("Value")
                        .HasColumnType("tinyint");

                    b.Property<string>("kompanija")
                        .HasColumnType("nvarchar(40)");

                    b.HasKey("ID");

                    b.HasIndex("AviokompanijaNaziv");

                    b.ToTable("OceneAviokompanije");
                });

            modelBuilder.Entity("WebApp.Models.Misc.OcenaLeta", b =>
                {
                    b.Property<string>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("IdLeta")
                        .HasColumnType("int");

                    b.Property<string>("UserID")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Value")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.ToTable("OceneLeta");
                });

            modelBuilder.Entity("WebApp.Models.Sediste", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("BrojPasosa")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("CenaSedista")
                        .HasColumnType("int");

                    b.Property<int>("IdLeta")
                        .HasColumnType("int");

                    b.Property<string>("IdSedista")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Ime")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Prezime")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("Rezervisano")
                        .HasColumnType("bit");

                    b.HasKey("Id");

                    b.ToTable("SedistaLeta");
                });

            modelBuilder.Entity("WebApp.Models.Aerodrom", b =>
                {
                    b.HasOne("ServerApp.Models.Let", null)
                        .WithMany("Presedanja")
                        .HasForeignKey("LetId");
                });

            modelBuilder.Entity("WebApp.Models.Misc.Ocena", b =>
                {
                    b.HasOne("ServerApp.Models.Aviokompanija", null)
                        .WithMany("OceneAviokompanije")
                        .HasForeignKey("AviokompanijaNaziv");
                });
#pragma warning restore 612, 618
        }
    }
}
