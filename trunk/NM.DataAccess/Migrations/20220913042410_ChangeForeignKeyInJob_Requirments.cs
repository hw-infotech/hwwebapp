using Microsoft.EntityFrameworkCore.Migrations;

namespace NM.DataAccess.Migrations
{
    public partial class ChangeForeignKeyInJob_Requirments : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Job_Requirments_Requirments_Job_Id",
                table: "Job_Requirments");

            migrationBuilder.AlterColumn<string>(
                name: "Benefits",
                table: "Jobs",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Job_Requirments_Requirment_Id",
                table: "Job_Requirments",
                column: "Requirment_Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Job_Requirments_Requirments_Requirment_Id",
                table: "Job_Requirments",
                column: "Requirment_Id",
                principalTable: "Requirments",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Job_Requirments_Requirments_Requirment_Id",
                table: "Job_Requirments");

            migrationBuilder.DropIndex(
                name: "IX_Job_Requirments_Requirment_Id",
                table: "Job_Requirments");

            migrationBuilder.AlterColumn<string>(
                name: "Benefits",
                table: "Jobs",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(100)",
                oldMaxLength: 100,
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Job_Requirments_Requirments_Job_Id",
                table: "Job_Requirments",
                column: "Job_Id",
                principalTable: "Requirments",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
