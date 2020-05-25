using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApp.Migrations
{
    public partial class Test : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "AspNetUsers",
                type: "nvarchar(30)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(20)",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "BrojPasosa",
                table: "AspNetUsers",
                type: "nvarchar(20)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "BrojTelefona",
                table: "AspNetUsers",
                type: "nvarchar(15)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Grad",
                table: "AspNetUsers",
                type: "nvarchar(30)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Lastname",
                table: "AspNetUsers",
                type: "nvarchar(30)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BrojPasosa",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "BrojTelefona",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Grad",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Lastname",
                table: "AspNetUsers");

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "AspNetUsers",
                type: "nvarchar(20)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(30)",
                oldNullable: true);
        }
    }
}
