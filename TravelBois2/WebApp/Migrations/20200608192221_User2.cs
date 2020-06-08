using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApp.Migrations
{
    public partial class User2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AvioAdmin_BrojPasosa",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "AvioAdmin_BrojTelefona",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "AvioAdmin_Grad",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "AvioAdmin_Lastname",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "AvioAdmin_Name",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "AvioAdmin_Password",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "AvioAdmin_TipKorisnika",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "RentAdmin_BrojPasosa",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "RentAdmin_BrojTelefona",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "RentAdmin_Grad",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "RentAdmin_Lastname",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "RentAdmin_Name",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "RentAdmin_Password",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "RentAdmin_TipKorisnika",
                table: "AspNetUsers");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "AvioAdmin_BrojPasosa",
                table: "AspNetUsers",
                type: "nvarchar(40)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "AvioAdmin_BrojTelefona",
                table: "AspNetUsers",
                type: "nvarchar(40)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "AvioAdmin_Grad",
                table: "AspNetUsers",
                type: "nvarchar(40)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "AvioAdmin_Lastname",
                table: "AspNetUsers",
                type: "nvarchar(40)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "AvioAdmin_Name",
                table: "AspNetUsers",
                type: "nvarchar(40)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "AvioAdmin_Password",
                table: "AspNetUsers",
                type: "nvarchar(40)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "AvioAdmin_TipKorisnika",
                table: "AspNetUsers",
                type: "nvarchar(15)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "RentAdmin_BrojPasosa",
                table: "AspNetUsers",
                type: "nvarchar(40)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "RentAdmin_BrojTelefona",
                table: "AspNetUsers",
                type: "nvarchar(40)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "RentAdmin_Grad",
                table: "AspNetUsers",
                type: "nvarchar(40)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "RentAdmin_Lastname",
                table: "AspNetUsers",
                type: "nvarchar(40)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "RentAdmin_Name",
                table: "AspNetUsers",
                type: "nvarchar(40)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "RentAdmin_Password",
                table: "AspNetUsers",
                type: "nvarchar(40)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "RentAdmin_TipKorisnika",
                table: "AspNetUsers",
                type: "nvarchar(15)",
                nullable: true);
        }
    }
}
