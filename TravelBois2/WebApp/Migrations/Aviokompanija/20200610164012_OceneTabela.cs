using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApp.Migrations.Aviokompanija
{
    public partial class OceneTabela : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Ocena_Aviokompanije_AviokompanijaNaziv",
                table: "Ocena");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Ocena",
                table: "Ocena");

            migrationBuilder.RenameTable(
                name: "Ocena",
                newName: "OceneAviokompanije");

            migrationBuilder.RenameColumn(
                name: "AviokompanijaNaziv",
                table: "OceneAviokompanije",
                newName: "aviokompanijaNaziv");

            migrationBuilder.RenameIndex(
                name: "IX_Ocena_AviokompanijaNaziv",
                table: "OceneAviokompanije",
                newName: "IX_OceneAviokompanije_aviokompanijaNaziv");

            migrationBuilder.AddPrimaryKey(
                name: "PK_OceneAviokompanije",
                table: "OceneAviokompanije",
                column: "ID");

            migrationBuilder.AddForeignKey(
                name: "FK_OceneAviokompanije_Aviokompanije_aviokompanijaNaziv",
                table: "OceneAviokompanije",
                column: "aviokompanijaNaziv",
                principalTable: "Aviokompanije",
                principalColumn: "Naziv",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OceneAviokompanije_Aviokompanije_aviokompanijaNaziv",
                table: "OceneAviokompanije");

            migrationBuilder.DropPrimaryKey(
                name: "PK_OceneAviokompanije",
                table: "OceneAviokompanije");

            migrationBuilder.RenameTable(
                name: "OceneAviokompanije",
                newName: "Ocena");

            migrationBuilder.RenameColumn(
                name: "aviokompanijaNaziv",
                table: "Ocena",
                newName: "AviokompanijaNaziv");

            migrationBuilder.RenameIndex(
                name: "IX_OceneAviokompanije_aviokompanijaNaziv",
                table: "Ocena",
                newName: "IX_Ocena_AviokompanijaNaziv");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Ocena",
                table: "Ocena",
                column: "ID");

            migrationBuilder.AddForeignKey(
                name: "FK_Ocena_Aviokompanije_AviokompanijaNaziv",
                table: "Ocena",
                column: "AviokompanijaNaziv",
                principalTable: "Aviokompanije",
                principalColumn: "Naziv",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
