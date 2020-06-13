using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApp.Migrations.Aviokompanija
{
    public partial class Presedanja2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Aerodromi_Letovi_LetId",
                table: "Aerodromi");

            migrationBuilder.DropIndex(
                name: "IX_Aerodromi_LetId",
                table: "Aerodromi");

            migrationBuilder.DropColumn(
                name: "LetId",
                table: "Aerodromi");

            migrationBuilder.AddColumn<int>(
                name: "LetId",
                table: "Presedanja",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Presedanja_LetId",
                table: "Presedanja",
                column: "LetId");

            migrationBuilder.AddForeignKey(
                name: "FK_Presedanja_Letovi_LetId",
                table: "Presedanja",
                column: "LetId",
                principalTable: "Letovi",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Presedanja_Letovi_LetId",
                table: "Presedanja");

            migrationBuilder.DropIndex(
                name: "IX_Presedanja_LetId",
                table: "Presedanja");

            migrationBuilder.DropColumn(
                name: "LetId",
                table: "Presedanja");

            migrationBuilder.AddColumn<int>(
                name: "LetId",
                table: "Aerodromi",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Aerodromi_LetId",
                table: "Aerodromi",
                column: "LetId");

            migrationBuilder.AddForeignKey(
                name: "FK_Aerodromi_Letovi_LetId",
                table: "Aerodromi",
                column: "LetId",
                principalTable: "Letovi",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
