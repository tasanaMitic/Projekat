using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApp.Migrations.Aviokompanija
{
    public partial class IzmenaAerodroma : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Aerodromi",
                table: "Aerodromi");

            migrationBuilder.AlterColumn<string>(
                name: "Grad",
                table: "Aerodromi",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");

            migrationBuilder.AddColumn<int>(
                name: "Id",
                table: "Aerodromi",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Aerodromi",
                table: "Aerodromi",
                column: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Aerodromi",
                table: "Aerodromi");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "Aerodromi");

            migrationBuilder.AlterColumn<string>(
                name: "Grad",
                table: "Aerodromi",
                type: "nvarchar(450)",
                nullable: false,
                oldClrType: typeof(string));

            migrationBuilder.AddPrimaryKey(
                name: "PK_Aerodromi",
                table: "Aerodromi",
                column: "Grad");
        }
    }
}
