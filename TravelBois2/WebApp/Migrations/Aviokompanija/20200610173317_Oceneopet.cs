using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApp.Migrations.Aviokompanija
{
    public partial class Oceneopet : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "avikompanija",
                table: "OceneAviokompanije",
                newName: "kompanija");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "kompanija",
                table: "OceneAviokompanije",
                newName: "avikompanija");
        }
    }
}
