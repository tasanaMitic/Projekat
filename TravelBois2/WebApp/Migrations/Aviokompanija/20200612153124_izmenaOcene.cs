using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApp.Migrations.Aviokompanija
{
    public partial class izmenaOcene : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "AviokompanijaNaziv",
                table: "Letovi",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "AviokompanijaNaziv",
                table: "Aerodromi",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Letovi_AviokompanijaNaziv",
                table: "Letovi",
                column: "AviokompanijaNaziv");

            migrationBuilder.CreateIndex(
                name: "IX_Aerodromi_AviokompanijaNaziv",
                table: "Aerodromi",
                column: "AviokompanijaNaziv");

            migrationBuilder.AddForeignKey(
                name: "FK_Aerodromi_Aviokompanije_AviokompanijaNaziv",
                table: "Aerodromi",
                column: "AviokompanijaNaziv",
                principalTable: "Aviokompanije",
                principalColumn: "Naziv",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Letovi_Aviokompanije_AviokompanijaNaziv",
                table: "Letovi",
                column: "AviokompanijaNaziv",
                principalTable: "Aviokompanije",
                principalColumn: "Naziv",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Aerodromi_Aviokompanije_AviokompanijaNaziv",
                table: "Aerodromi");

            migrationBuilder.DropForeignKey(
                name: "FK_Letovi_Aviokompanije_AviokompanijaNaziv",
                table: "Letovi");

            migrationBuilder.DropIndex(
                name: "IX_Letovi_AviokompanijaNaziv",
                table: "Letovi");

            migrationBuilder.DropIndex(
                name: "IX_Aerodromi_AviokompanijaNaziv",
                table: "Aerodromi");

            migrationBuilder.DropColumn(
                name: "AviokompanijaNaziv",
                table: "Letovi");

            migrationBuilder.DropColumn(
                name: "AviokompanijaNaziv",
                table: "Aerodromi");
        }
    }
}
