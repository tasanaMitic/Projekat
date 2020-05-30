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
    [Migration("20200526165501_AviokompanijaTables")]
    partial class AviokompanijaTables
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

                    b.Property<string>("AviokompanijaNaziv")
                        .HasColumnType("nvarchar(450)");

                    b.Property<DateTime>("DatumDolaska")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("DatumPolaska")
                        .HasColumnType("datetime2");

                    b.Property<string>("MestoDolaska")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MestoPolaska")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("RazdaljinaPutovanja")
                        .HasColumnType("int");

                    b.Property<int>("TrajanjePutovanja")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("AviokompanijaNaziv");

                    b.ToTable("Letovi");
                });

            modelBuilder.Entity("WebApp.Models.Aerodrom", b =>
                {
                    b.Property<string>("Grad")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("AviokompanijaNaziv")
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Grad");

                    b.HasIndex("AviokompanijaNaziv");

                    b.ToTable("Aerodromi");
                });

            modelBuilder.Entity("ServerApp.Models.Let", b =>
                {
                    b.HasOne("ServerApp.Models.Aviokompanija", null)
                        .WithMany("Letovi")
                        .HasForeignKey("AviokompanijaNaziv");
                });

            modelBuilder.Entity("WebApp.Models.Aerodrom", b =>
                {
                    b.HasOne("ServerApp.Models.Aviokompanija", null)
                        .WithMany("Aerodromi")
                        .HasForeignKey("AviokompanijaNaziv");
                });
#pragma warning restore 612, 618
        }
    }
}
