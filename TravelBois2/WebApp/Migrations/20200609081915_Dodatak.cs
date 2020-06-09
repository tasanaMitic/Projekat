using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApp.Migrations
{
    public partial class Dodatak : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Prijatelj_AspNetUsers_ApplicationUserId",
                table: "Prijatelj");

            migrationBuilder.DropIndex(
                name: "IX_Prijatelj_ApplicationUserId",
                table: "Prijatelj");

            migrationBuilder.DropColumn(
                name: "ApplicationUserId",
                table: "Prijatelj");

            migrationBuilder.AddColumn<string>(
                name: "korisnikId",
                table: "Prijatelj",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateIndex(
                name: "IX_Prijatelj_korisnikId",
                table: "Prijatelj",
                column: "korisnikId");

            migrationBuilder.AddForeignKey(
                name: "FK_Prijatelj_AspNetUsers_korisnikId",
                table: "Prijatelj",
                column: "korisnikId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Prijatelj_AspNetUsers_korisnikId",
                table: "Prijatelj");

            migrationBuilder.DropIndex(
                name: "IX_Prijatelj_korisnikId",
                table: "Prijatelj");

            migrationBuilder.DropColumn(
                name: "korisnikId",
                table: "Prijatelj");

            migrationBuilder.AddColumn<string>(
                name: "ApplicationUserId",
                table: "Prijatelj",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Prijatelj_ApplicationUserId",
                table: "Prijatelj",
                column: "ApplicationUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Prijatelj_AspNetUsers_ApplicationUserId",
                table: "Prijatelj",
                column: "ApplicationUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
