using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApp.Migrations.Aviokompanija
{
    public partial class AviokompanijaTables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Aviokompanije",
                columns: table => new
                {
                    Naziv = table.Column<string>(nullable: false),
                    Adresa = table.Column<string>(nullable: true),
                    Opis = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Aviokompanije", x => x.Naziv);
                });

            migrationBuilder.CreateTable(
                name: "Aerodromi",
                columns: table => new
                {
                    Grad = table.Column<string>(nullable: false),
                    AviokompanijaNaziv = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Aerodromi", x => x.Grad);
                    table.ForeignKey(
                        name: "FK_Aerodromi_Aviokompanije_AviokompanijaNaziv",
                        column: x => x.AviokompanijaNaziv,
                        principalTable: "Aviokompanije",
                        principalColumn: "Naziv",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Letovi",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DatumPolaska = table.Column<DateTime>(nullable: false),
                    DatumDolaska = table.Column<DateTime>(nullable: false),
                    MestoPolaska = table.Column<string>(nullable: true),
                    MestoDolaska = table.Column<string>(nullable: true),
                    RazdaljinaPutovanja = table.Column<int>(nullable: false),
                    TrajanjePutovanja = table.Column<int>(nullable: false),
                    AviokompanijaNaziv = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Letovi", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Letovi_Aviokompanije_AviokompanijaNaziv",
                        column: x => x.AviokompanijaNaziv,
                        principalTable: "Aviokompanije",
                        principalColumn: "Naziv",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Aerodromi_AviokompanijaNaziv",
                table: "Aerodromi",
                column: "AviokompanijaNaziv");

            migrationBuilder.CreateIndex(
                name: "IX_Letovi_AviokompanijaNaziv",
                table: "Letovi",
                column: "AviokompanijaNaziv");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Aerodromi");

            migrationBuilder.DropTable(
                name: "Letovi");

            migrationBuilder.DropTable(
                name: "Aviokompanije");
        }
    }
}
