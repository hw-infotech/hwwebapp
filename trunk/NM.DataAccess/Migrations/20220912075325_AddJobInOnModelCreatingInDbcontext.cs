using Microsoft.EntityFrameworkCore.Migrations;

namespace NM.DataAccess.Migrations
{
    public partial class AddJobInOnModelCreatingInDbcontext : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Job_Requirments_Jobs_JobId",
                table: "Job_Requirments");

            migrationBuilder.DropForeignKey(
                name: "FK_Job_Requirments_Requirments_RequirmentId",
                table: "Job_Requirments");

            migrationBuilder.DropIndex(
                name: "IX_Job_Requirments_JobId",
                table: "Job_Requirments");

            migrationBuilder.DropIndex(
                name: "IX_Job_Requirments_RequirmentId",
                table: "Job_Requirments");

            migrationBuilder.DropColumn(
                name: "JobId",
                table: "Job_Requirments");

            migrationBuilder.DropColumn(
                name: "RequirmentId",
                table: "Job_Requirments");

            migrationBuilder.AlterColumn<string>(
                name: "JobRequirment",
                table: "Requirments",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Title",
                table: "Jobs",
                type: "nvarchar(500)",
                maxLength: 500,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Level",
                table: "Jobs",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "JobType",
                table: "Jobs",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<bool>(
                name: "IsDeleted",
                table: "Jobs",
                type: "bit",
                nullable: false,
                defaultValue: false,
                oldClrType: typeof(bool),
                oldType: "bit");

            migrationBuilder.AlterColumn<string>(
                name: "Industries",
                table: "Jobs",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Functions",
                table: "Jobs",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Description",
                table: "Jobs",
                type: "nvarchar(1000)",
                maxLength: 1000,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Job_Requirments_Job_Id",
                table: "Job_Requirments",
                column: "Job_Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Job_Requirments_Jobs_Job_Id",
                table: "Job_Requirments",
                column: "Job_Id",
                principalTable: "Jobs",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Job_Requirments_Requirments_Job_Id",
                table: "Job_Requirments",
                column: "Job_Id",
                principalTable: "Requirments",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Job_Requirments_Jobs_Job_Id",
                table: "Job_Requirments");

            migrationBuilder.DropForeignKey(
                name: "FK_Job_Requirments_Requirments_Job_Id",
                table: "Job_Requirments");

            migrationBuilder.DropIndex(
                name: "IX_Job_Requirments_Job_Id",
                table: "Job_Requirments");

            migrationBuilder.AlterColumn<string>(
                name: "JobRequirment",
                table: "Requirments",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(100)",
                oldMaxLength: 100,
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Title",
                table: "Jobs",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(500)",
                oldMaxLength: 500,
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Level",
                table: "Jobs",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(100)",
                oldMaxLength: 100,
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "JobType",
                table: "Jobs",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(100)",
                oldMaxLength: 100,
                oldNullable: true);

            migrationBuilder.AlterColumn<bool>(
                name: "IsDeleted",
                table: "Jobs",
                type: "bit",
                nullable: false,
                oldClrType: typeof(bool),
                oldType: "bit",
                oldDefaultValue: false);

            migrationBuilder.AlterColumn<string>(
                name: "Industries",
                table: "Jobs",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(100)",
                oldMaxLength: 100,
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Functions",
                table: "Jobs",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(100)",
                oldMaxLength: 100,
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Description",
                table: "Jobs",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(1000)",
                oldMaxLength: 1000,
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "JobId",
                table: "Job_Requirments",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "RequirmentId",
                table: "Job_Requirments",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Job_Requirments_JobId",
                table: "Job_Requirments",
                column: "JobId");

            migrationBuilder.CreateIndex(
                name: "IX_Job_Requirments_RequirmentId",
                table: "Job_Requirments",
                column: "RequirmentId");

            migrationBuilder.AddForeignKey(
                name: "FK_Job_Requirments_Jobs_JobId",
                table: "Job_Requirments",
                column: "JobId",
                principalTable: "Jobs",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Job_Requirments_Requirments_RequirmentId",
                table: "Job_Requirments",
                column: "RequirmentId",
                principalTable: "Requirments",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
