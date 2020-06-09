using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApp.Migrations.Renta
{
    public partial class Renta1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Kolas",
                columns: table => new
                {
                    ID = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    Naziv = table.Column<string>(type: "nvarchar(40)", nullable: true),
                    BrojMesta = table.Column<byte>(type: "tinyint", nullable: false),
                    Godiste = table.Column<short>(type: "smallint", nullable: false),
                    TipVozila = table.Column<byte>(type: "tinyint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Kolas", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Ocene",
                columns: table => new
                {
                    ID = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    UserID = table.Column<string>(type: "nvarchar(40)", nullable: true),
                    Val = table.Column<byte>(type: "tinyint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ocene", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Rente",
                columns: table => new
                {
                    ID = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    AdminID = table.Column<string>(type: "nvarchar(40)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Rente", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Zauzetosts",
                columns: table => new
                {
                    ID = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    KolaID = table.Column<string>(type: "nvarchar(40)", nullable: true),
                    Od = table.Column<DateTime>(type: "date", nullable: false),
                    Do = table.Column<DateTime>(type: "date", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Zauzetosts", x => x.ID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Kolas");

            migrationBuilder.DropTable(
                name: "Ocene");

            migrationBuilder.DropTable(
                name: "Rente");

            migrationBuilder.DropTable(
                name: "Zauzetosts");
        }
    }
}
