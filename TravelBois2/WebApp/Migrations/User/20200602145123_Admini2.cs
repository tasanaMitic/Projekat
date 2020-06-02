using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApp.Migrations.User
{
    public partial class Admini2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "RentAdmins",
                type: "nvarchar(40)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "AvioAdmins",
                type: "nvarchar(40)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Admins",
                type: "nvarchar(40)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Email",
                table: "RentAdmins");

            migrationBuilder.DropColumn(
                name: "Email",
                table: "AvioAdmins");

            migrationBuilder.DropColumn(
                name: "Email",
                table: "Admins");
        }
    }
}
