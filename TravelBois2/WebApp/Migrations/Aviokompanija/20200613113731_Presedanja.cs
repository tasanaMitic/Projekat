using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApp.Migrations.Aviokompanija
{
    public partial class Presedanja : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Presedanja",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Grad = table.Column<string>(nullable: false),
                    Drzava = table.Column<string>(nullable: false),
                    IdLeta = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Presedanja", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Presedanja");
        }
    }
}
