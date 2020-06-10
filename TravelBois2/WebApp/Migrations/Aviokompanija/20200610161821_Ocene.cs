using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApp.Migrations.Aviokompanija
{
    public partial class Ocene : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Ocena",
                columns: table => new
                {
                    ID = table.Column<string>(type: "nvarchar(40)", nullable: false),
                    UserID = table.Column<string>(type: "nvarchar(40)", nullable: true),
                    Value = table.Column<byte>(type: "tinyint", nullable: false),
                    AviokompanijaNaziv = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ocena", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Ocena_Aviokompanije_AviokompanijaNaziv",
                        column: x => x.AviokompanijaNaziv,
                        principalTable: "Aviokompanije",
                        principalColumn: "Naziv",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Ocena_AviokompanijaNaziv",
                table: "Ocena",
                column: "AviokompanijaNaziv");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Ocena");
        }
    }
}
