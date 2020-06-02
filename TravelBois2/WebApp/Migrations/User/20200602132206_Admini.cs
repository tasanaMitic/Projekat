using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApp.Migrations.User
{
    public partial class Admini : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Admins",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserName = table.Column<string>(type: "nvarchar(40)", nullable: true),
                    Password = table.Column<string>(type: "nvarchar(40)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Admins", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "AppUsers",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    UserName = table.Column<string>(nullable: true),
                    NormalizedUserName = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    NormalizedEmail = table.Column<string>(nullable: true),
                    EmailConfirmed = table.Column<bool>(nullable: false),
                    PasswordHash = table.Column<string>(nullable: true),
                    SecurityStamp = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(nullable: false),
                    TwoFactorEnabled = table.Column<bool>(nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(nullable: true),
                    LockoutEnabled = table.Column<bool>(nullable: false),
                    AccessFailedCount = table.Column<int>(nullable: false),
                    Name = table.Column<string>(type: "nvarchar(30)", nullable: true),
                    Lastname = table.Column<string>(type: "nvarchar(30)", nullable: true),
                    Grad = table.Column<string>(type: "nvarchar(30)", nullable: true),
                    BrojPasosa = table.Column<string>(type: "nvarchar(20)", nullable: true),
                    BrojTelefona = table.Column<string>(type: "nvarchar(15)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppUsers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AvioAdmins",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Username = table.Column<string>(type: "nvarchar(40)", nullable: true),
                    Ime = table.Column<string>(type: "nvarchar(40)", nullable: true),
                    Prezime = table.Column<string>(type: "nvarchar(40)", nullable: true),
                    Grad = table.Column<string>(type: "nvarchar(40)", nullable: true),
                    AvioKompanijaID = table.Column<string>(type: "nvarchar(40)", nullable: true),
                    BrojTelefona = table.Column<string>(type: "nvarchar(40)", nullable: true),
                    BrojPasosa = table.Column<string>(type: "nvarchar(40)", nullable: true),
                    Password = table.Column<string>(type: "nvarchar(40)", nullable: true),
                    PromenioPassword = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AvioAdmins", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "RentAdmins",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Username = table.Column<string>(type: "nvarchar(40)", nullable: true),
                    Ime = table.Column<string>(type: "nvarchar(40)", nullable: true),
                    Prezime = table.Column<string>(type: "nvarchar(40)", nullable: true),
                    Grad = table.Column<string>(type: "nvarchar(40)", nullable: true),
                    NazivRente = table.Column<string>(type: "nvarchar(40)", nullable: true),
                    BrojTelefona = table.Column<string>(type: "nvarchar(40)", nullable: true),
                    BrojPasosa = table.Column<string>(type: "nvarchar(40)", nullable: true),
                    Password = table.Column<string>(type: "nvarchar(40)", nullable: true),
                    PromenioPassword = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RentAdmins", x => x.ID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Admins");

            migrationBuilder.DropTable(
                name: "AppUsers");

            migrationBuilder.DropTable(
                name: "AvioAdmins");

            migrationBuilder.DropTable(
                name: "RentAdmins");
        }
    }
}
