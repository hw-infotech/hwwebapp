using Microsoft.EntityFrameworkCore.Migrations;

namespace NM.DataAccess.Migrations
{
    public partial class _Contact : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Description",
                table: "Contact",
                newName: "ProjectDescription");

            migrationBuilder.AddColumn<string>(
                name: "CompanyName",
                table: "Contact",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Services",
                table: "Contact",
                type: "nvarchar(2000)",
                maxLength: 2000,
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CompanyName",
                table: "Contact");

            migrationBuilder.DropColumn(
                name: "Services",
                table: "Contact");

            migrationBuilder.RenameColumn(
                name: "ProjectDescription",
                table: "Contact",
                newName: "Description");
        }
    }
}
