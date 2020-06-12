using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApp.Migrations.Aviokompanija
{
    public partial class pozivnice : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Pozivnice",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Ime = table.Column<string>(nullable: false),
                    Prezime = table.Column<string>(nullable: false),
                    BrojPasosa = table.Column<string>(nullable: false),
                    Rezervisano = table.Column<bool>(nullable: false),
                    IdLeta = table.Column<int>(nullable: false),
                    IdSedista = table.Column<string>(nullable: false),
                    CenaSedista = table.Column<int>(nullable: false),
                    PozvaoUsername = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pozivnice", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Pozivnice");
        }
    }
}
