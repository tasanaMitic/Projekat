using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApp.Migrations.Aviokompanija
{
    public partial class Avio1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Aviokompanije",
                columns: table => new
                {
                    Naziv = table.Column<string>(nullable: false),
                    Adresa = table.Column<string>(nullable: false),
                    Grad = table.Column<string>(nullable: false),
                    Opis = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Aviokompanije", x => x.Naziv);
                });

            migrationBuilder.CreateTable(
                name: "Letovi",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DatumPolaska = table.Column<string>(nullable: false),
                    DatumDolaska = table.Column<string>(nullable: false),
                    VremePoletanja = table.Column<string>(nullable: false),
                    VremeSletanja = table.Column<string>(nullable: false),
                    MestoPolaska = table.Column<string>(nullable: false),
                    MestoDolaska = table.Column<string>(nullable: false),
                    RazdaljinaPutovanja = table.Column<int>(nullable: false),
                    TrajanjePutovanja = table.Column<int>(nullable: false),
                    KlasaLeta = table.Column<int>(nullable: false),
                    TipLeta = table.Column<int>(nullable: false),
                    CenaKarte = table.Column<int>(nullable: false),
                    aviokompanijaNaziv = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Letovi", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Letovi_Aviokompanije_aviokompanijaNaziv",
                        column: x => x.aviokompanijaNaziv,
                        principalTable: "Aviokompanije",
                        principalColumn: "Naziv",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Aerodromi",
                columns: table => new
                {
                    Grad = table.Column<string>(nullable: false),
                    Drzava = table.Column<string>(nullable: false),
                    AviokompanijaNaziv = table.Column<string>(nullable: true),
                    LetId = table.Column<int>(nullable: true)
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
                    table.ForeignKey(
                        name: "FK_Aerodromi_Letovi_LetId",
                        column: x => x.LetId,
                        principalTable: "Letovi",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Aerodromi_AviokompanijaNaziv",
                table: "Aerodromi",
                column: "AviokompanijaNaziv");

            migrationBuilder.CreateIndex(
                name: "IX_Aerodromi_LetId",
                table: "Aerodromi",
                column: "LetId");

            migrationBuilder.CreateIndex(
                name: "IX_Letovi_aviokompanijaNaziv",
                table: "Letovi",
                column: "aviokompanijaNaziv");
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
