using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApp.Migrations.Aviokompanija
{
    public partial class OceneTabela2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OceneAviokompanije_Aviokompanije_aviokompanijaNaziv",
                table: "OceneAviokompanije");

            migrationBuilder.RenameColumn(
                name: "aviokompanijaNaziv",
                table: "OceneAviokompanije",
                newName: "AviokompanijaNaziv");

            migrationBuilder.RenameIndex(
                name: "IX_OceneAviokompanije_aviokompanijaNaziv",
                table: "OceneAviokompanije",
                newName: "IX_OceneAviokompanije_AviokompanijaNaziv");

            migrationBuilder.AddColumn<string>(
                name: "Aviokompanija",
                table: "OceneAviokompanije",
                type: "nvarchar(40)",
                nullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_OceneAviokompanije_Aviokompanije_AviokompanijaNaziv",
                table: "OceneAviokompanije",
                column: "AviokompanijaNaziv",
                principalTable: "Aviokompanije",
                principalColumn: "Naziv",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OceneAviokompanije_Aviokompanije_AviokompanijaNaziv",
                table: "OceneAviokompanije");

            migrationBuilder.DropColumn(
                name: "Aviokompanija",
                table: "OceneAviokompanije");

            migrationBuilder.RenameColumn(
                name: "AviokompanijaNaziv",
                table: "OceneAviokompanije",
                newName: "aviokompanijaNaziv");

            migrationBuilder.RenameIndex(
                name: "IX_OceneAviokompanije_AviokompanijaNaziv",
                table: "OceneAviokompanije",
                newName: "IX_OceneAviokompanije_aviokompanijaNaziv");

            migrationBuilder.AddForeignKey(
                name: "FK_OceneAviokompanije_Aviokompanije_aviokompanijaNaziv",
                table: "OceneAviokompanije",
                column: "aviokompanijaNaziv",
                principalTable: "Aviokompanije",
                principalColumn: "Naziv",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
