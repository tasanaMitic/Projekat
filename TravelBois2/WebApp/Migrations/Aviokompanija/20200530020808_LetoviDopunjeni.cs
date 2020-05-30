using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApp.Migrations.Aviokompanija
{
    public partial class LetoviDopunjeni : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Letovi_Aviokompanije_AviokompanijaNaziv",
                table: "Letovi");

            migrationBuilder.RenameColumn(
                name: "AviokompanijaNaziv",
                table: "Letovi",
                newName: "aviokompanijaNaziv");

            migrationBuilder.RenameIndex(
                name: "IX_Letovi_AviokompanijaNaziv",
                table: "Letovi",
                newName: "IX_Letovi_aviokompanijaNaziv");

            migrationBuilder.AlterColumn<string>(
                name: "MestoPolaska",
                table: "Letovi",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "MestoDolaska",
                table: "Letovi",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "DatumPolaska",
                table: "Letovi",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "datetime2");

            migrationBuilder.AlterColumn<string>(
                name: "DatumDolaska",
                table: "Letovi",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "datetime2");

            migrationBuilder.AddColumn<int>(
                name: "CenaKarte",
                table: "Letovi",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "KlasaLeta",
                table: "Letovi",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "TipLeta",
                table: "Letovi",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "VremePoletanja",
                table: "Letovi",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "VremeSletanja",
                table: "Letovi",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AlterColumn<string>(
                name: "Adresa",
                table: "Aviokompanije",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Drzava",
                table: "Aerodromi",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "LetId",
                table: "Aerodromi",
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

            migrationBuilder.AddForeignKey(
                name: "FK_Letovi_Aviokompanije_aviokompanijaNaziv",
                table: "Letovi",
                column: "aviokompanijaNaziv",
                principalTable: "Aviokompanije",
                principalColumn: "Naziv",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Aerodromi_Letovi_LetId",
                table: "Aerodromi");

            migrationBuilder.DropForeignKey(
                name: "FK_Letovi_Aviokompanije_aviokompanijaNaziv",
                table: "Letovi");

            migrationBuilder.DropIndex(
                name: "IX_Aerodromi_LetId",
                table: "Aerodromi");

            migrationBuilder.DropColumn(
                name: "CenaKarte",
                table: "Letovi");

            migrationBuilder.DropColumn(
                name: "KlasaLeta",
                table: "Letovi");

            migrationBuilder.DropColumn(
                name: "TipLeta",
                table: "Letovi");

            migrationBuilder.DropColumn(
                name: "VremePoletanja",
                table: "Letovi");

            migrationBuilder.DropColumn(
                name: "VremeSletanja",
                table: "Letovi");

            migrationBuilder.DropColumn(
                name: "LetId",
                table: "Aerodromi");

            migrationBuilder.RenameColumn(
                name: "aviokompanijaNaziv",
                table: "Letovi",
                newName: "AviokompanijaNaziv");

            migrationBuilder.RenameIndex(
                name: "IX_Letovi_aviokompanijaNaziv",
                table: "Letovi",
                newName: "IX_Letovi_AviokompanijaNaziv");

            migrationBuilder.AlterColumn<string>(
                name: "MestoPolaska",
                table: "Letovi",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string));

            migrationBuilder.AlterColumn<string>(
                name: "MestoDolaska",
                table: "Letovi",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string));

            migrationBuilder.AlterColumn<DateTime>(
                name: "DatumPolaska",
                table: "Letovi",
                type: "datetime2",
                nullable: false,
                oldClrType: typeof(string));

            migrationBuilder.AlterColumn<DateTime>(
                name: "DatumDolaska",
                table: "Letovi",
                type: "datetime2",
                nullable: false,
                oldClrType: typeof(string));

            migrationBuilder.AlterColumn<string>(
                name: "Adresa",
                table: "Aviokompanije",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string));

            migrationBuilder.AlterColumn<string>(
                name: "Drzava",
                table: "Aerodromi",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string));

            migrationBuilder.AddForeignKey(
                name: "FK_Letovi_Aviokompanije_AviokompanijaNaziv",
                table: "Letovi",
                column: "AviokompanijaNaziv",
                principalTable: "Aviokompanije",
                principalColumn: "Naziv",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
