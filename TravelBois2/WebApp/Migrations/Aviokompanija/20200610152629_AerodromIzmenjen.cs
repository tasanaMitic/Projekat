using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApp.Migrations.Aviokompanija
{
    public partial class AerodromIzmenjen : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Aviokompanija",
                table: "Aerodromi",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Aviokompanija",
                table: "Aerodromi");
        }
    }
}
