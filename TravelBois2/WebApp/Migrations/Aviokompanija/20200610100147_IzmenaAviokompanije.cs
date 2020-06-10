using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApp.Migrations.Aviokompanija
{
    public partial class IzmenaAviokompanije : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Aerodromi_Aviokompanije_AviokompanijaNaziv",
                table: "Aerodromi");

            migrationBuilder.DropIndex(
                name: "IX_Aerodromi_AviokompanijaNaziv",
                table: "Aerodromi");

            migrationBuilder.DropColumn(
                name: "AviokompanijaNaziv",
                table: "Aerodromi");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "AviokompanijaNaziv",
                table: "Aerodromi",
                type: "nvarchar(450)",
                nullable: true);

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
        }
    }
}
