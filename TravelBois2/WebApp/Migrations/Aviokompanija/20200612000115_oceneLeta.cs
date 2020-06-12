using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApp.Migrations.Aviokompanija
{
    public partial class oceneLeta : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "OceneLeta",
                columns: table => new
                {
                    ID = table.Column<string>(nullable: false),
                    UserID = table.Column<string>(nullable: false),
                    Value = table.Column<int>(nullable: false),
                    IdLeta = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OceneLeta", x => x.ID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "OceneLeta");
        }
    }
}
