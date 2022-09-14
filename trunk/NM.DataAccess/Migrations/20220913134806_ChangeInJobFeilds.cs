using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace NM.DataAccess.Migrations
{
    public partial class ChangeInJobFeilds : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Job_Requirments");

            migrationBuilder.CreateTable(
                name: "JobRequirments",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    JobId = table.Column<int>(type: "int", nullable: false),
                    RequirmentId = table.Column<int>(type: "int", nullable: false),
                    BsonId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    CreatedBy = table.Column<int>(type: "int", nullable: false),
                    UpdatedBy = table.Column<int>(type: "int", nullable: false),
                    CreatedOn = table.Column<DateTime>(type: "datetime2", nullable: true),
                    UpdatedOn = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_JobRequirments", x => x.Id);
                    table.ForeignKey(
                        name: "FK_JobRequirments_Jobs_JobId",
                        column: x => x.JobId,
                        principalTable: "Jobs",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_JobRequirments_Requirments_RequirmentId",
                        column: x => x.RequirmentId,
                        principalTable: "Requirments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_JobRequirments_JobId",
                table: "JobRequirments",
                column: "JobId");

            migrationBuilder.CreateIndex(
                name: "IX_JobRequirments_RequirmentId",
                table: "JobRequirments",
                column: "RequirmentId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "JobRequirments");

            migrationBuilder.CreateTable(
                name: "Job_Requirments",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BsonId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreatedBy = table.Column<int>(type: "int", nullable: false),
                    CreatedOn = table.Column<DateTime>(type: "datetime2", nullable: true),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    Job_Id = table.Column<int>(type: "int", nullable: false),
                    Requirment_Id = table.Column<int>(type: "int", nullable: false),
                    UpdatedBy = table.Column<int>(type: "int", nullable: false),
                    UpdatedOn = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Job_Requirments", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Job_Requirments_Jobs_Job_Id",
                        column: x => x.Job_Id,
                        principalTable: "Jobs",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Job_Requirments_Requirments_Requirment_Id",
                        column: x => x.Requirment_Id,
                        principalTable: "Requirments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Job_Requirments_Job_Id",
                table: "Job_Requirments",
                column: "Job_Id");

            migrationBuilder.CreateIndex(
                name: "IX_Job_Requirments_Requirment_Id",
                table: "Job_Requirments",
                column: "Requirment_Id");
        }
    }
}
