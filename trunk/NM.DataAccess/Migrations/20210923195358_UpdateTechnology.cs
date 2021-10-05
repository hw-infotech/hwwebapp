using Microsoft.EntityFrameworkCore.Migrations;

namespace NM.DataAccess.Migrations
{
    public partial class UpdateTechnology : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Technology",
                table: "Project");

            migrationBuilder.RenameColumn(
                name: "Title",
                table: "Contact",
                newName: "Name");

            migrationBuilder.AddColumn<int>(
                name: "TechnologyId",
                table: "Project",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Contact",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TechnologyId",
                table: "Project");

            migrationBuilder.DropColumn(
                name: "Email",
                table: "Contact");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Contact",
                newName: "Title");

            migrationBuilder.AddColumn<string>(
                name: "Technology",
                table: "Project",
                type: "nvarchar(500)",
                maxLength: 500,
                nullable: true);
        }
    }
}
