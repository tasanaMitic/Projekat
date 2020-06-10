using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApp.Migrations.Aviokompanija
{
    public partial class OceneTabela4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "ID",
                table: "OceneAviokompanije",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(40)");

            migrationBuilder.AddColumn<string>(
                name: "avikompanija",
                table: "OceneAviokompanije",
                type: "nvarchar(40)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "avikompanija",
                table: "OceneAviokompanije");

            migrationBuilder.AlterColumn<string>(
                name: "ID",
                table: "OceneAviokompanije",
                type: "nvarchar(40)",
                nullable: false,
                oldClrType: typeof(string));
        }
    }
}
