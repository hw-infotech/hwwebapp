using Microsoft.EntityFrameworkCore.Migrations;

namespace NM.DataAccess.Migrations
{
    public partial class ChageGuidId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "GuId",
                table: "Technology",
                newName: "BsonId");

            migrationBuilder.RenameColumn(
                name: "GuId",
                table: "Services",
                newName: "BsonId");

            migrationBuilder.RenameColumn(
                name: "GuId",
                table: "Project",
                newName: "BsonId");

            migrationBuilder.RenameColumn(
                name: "GuId",
                table: "NewsLetter",
                newName: "BsonId");

            migrationBuilder.RenameColumn(
                name: "GuId",
                table: "Department",
                newName: "BsonId");

            migrationBuilder.RenameColumn(
                name: "GuId",
                table: "CurrentOpening",
                newName: "BsonId");

            migrationBuilder.RenameColumn(
                name: "GuId",
                table: "Contact",
                newName: "BsonId");

            migrationBuilder.RenameColumn(
                name: "GuId",
                table: "Client",
                newName: "BsonId");

            migrationBuilder.RenameColumn(
                name: "GuId",
                table: "BlogCategories",
                newName: "BsonId");

            migrationBuilder.RenameColumn(
                name: "GuId",
                table: "Blog",
                newName: "BsonId");

            migrationBuilder.RenameColumn(
                name: "GuId",
                table: "AppUser",
                newName: "BsonId");

            migrationBuilder.RenameColumn(
                name: "GuId",
                table: "ApplyJob",
                newName: "BsonId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "BsonId",
                table: "Technology",
                newName: "GuId");

            migrationBuilder.RenameColumn(
                name: "BsonId",
                table: "Services",
                newName: "GuId");

            migrationBuilder.RenameColumn(
                name: "BsonId",
                table: "Project",
                newName: "GuId");

            migrationBuilder.RenameColumn(
                name: "BsonId",
                table: "NewsLetter",
                newName: "GuId");

            migrationBuilder.RenameColumn(
                name: "BsonId",
                table: "Department",
                newName: "GuId");

            migrationBuilder.RenameColumn(
                name: "BsonId",
                table: "CurrentOpening",
                newName: "GuId");

            migrationBuilder.RenameColumn(
                name: "BsonId",
                table: "Contact",
                newName: "GuId");

            migrationBuilder.RenameColumn(
                name: "BsonId",
                table: "Client",
                newName: "GuId");

            migrationBuilder.RenameColumn(
                name: "BsonId",
                table: "BlogCategories",
                newName: "GuId");

            migrationBuilder.RenameColumn(
                name: "BsonId",
                table: "Blog",
                newName: "GuId");

            migrationBuilder.RenameColumn(
                name: "BsonId",
                table: "AppUser",
                newName: "GuId");

            migrationBuilder.RenameColumn(
                name: "BsonId",
                table: "ApplyJob",
                newName: "GuId");
        }
    }
}
