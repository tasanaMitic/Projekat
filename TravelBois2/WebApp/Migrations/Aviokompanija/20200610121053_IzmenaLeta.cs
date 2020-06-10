using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApp.Migrations.Aviokompanija
{
    public partial class IzmenaLeta : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Letovi_Aviokompanije_aviokompanijaNaziv",
                table: "Letovi");

            migrationBuilder.DropIndex(
                name: "IX_Letovi_aviokompanijaNaziv",
                table: "Letovi");

            migrationBuilder.DropColumn(
                name: "aviokompanijaNaziv",
                table: "Letovi");

            migrationBuilder.AddColumn<string>(
                name: "Aviokompanija",
                table: "Letovi",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Aviokompanija",
                table: "Letovi");

            migrationBuilder.AddColumn<string>(
                name: "aviokompanijaNaziv",
                table: "Letovi",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Letovi_aviokompanijaNaziv",
                table: "Letovi",
                column: "aviokompanijaNaziv");

            migrationBuilder.AddForeignKey(
                name: "FK_Letovi_Aviokompanije_aviokompanijaNaziv",
                table: "Letovi",
                column: "aviokompanijaNaziv",
                principalTable: "Aviokompanije",
                principalColumn: "Naziv",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
