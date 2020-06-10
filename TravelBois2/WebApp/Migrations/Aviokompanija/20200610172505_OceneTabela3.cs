using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApp.Migrations.Aviokompanija
{
    public partial class OceneTabela3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Aviokompanija",
                table: "OceneAviokompanije");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Aviokompanija",
                table: "OceneAviokompanije",
                type: "nvarchar(40)",
                nullable: true);
        }
    }
}
