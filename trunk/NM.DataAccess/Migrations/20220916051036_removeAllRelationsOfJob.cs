using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace NM.DataAccess.Migrations
{
    public partial class removeAllRelationsOfJob : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "JobBenefits");

            migrationBuilder.DropTable(
                name: "JobRequirments");

            migrationBuilder.DropTable(
                name: "JobResponsibilityTypes");

            migrationBuilder.AddColumn<string>(
                name: "JobBenefits",
                table: "Jobs",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "JobRequirments",
                table: "Jobs",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "JobResponsibilityTypes",
                table: "Jobs",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "JobTitle",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BsonId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    CreatedBy = table.Column<int>(type: "int", nullable: false),
                    UpdatedBy = table.Column<int>(type: "int", nullable: false),
                    CreatedOn = table.Column<DateTime>(type: "datetime2", nullable: true),
                    UpdatedOn = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_JobTitle", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "JobTitle");

            migrationBuilder.DropColumn(
                name: "JobBenefits",
                table: "Jobs");

            migrationBuilder.DropColumn(
                name: "JobRequirments",
                table: "Jobs");

            migrationBuilder.DropColumn(
                name: "JobResponsibilityTypes",
                table: "Jobs");

            migrationBuilder.CreateTable(
                name: "JobBenefits",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BenefitTypesId = table.Column<int>(type: "int", nullable: false),
                    BsonId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreatedBy = table.Column<int>(type: "int", nullable: false),
                    CreatedOn = table.Column<DateTime>(type: "datetime2", nullable: true),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    JobId = table.Column<int>(type: "int", nullable: false),
                    UpdatedBy = table.Column<int>(type: "int", nullable: false),
                    UpdatedOn = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_JobBenefits", x => x.Id);
                    table.ForeignKey(
                        name: "FK_JobBenefits_BenefitTypes_BenefitTypesId",
                        column: x => x.BenefitTypesId,
                        principalTable: "BenefitTypes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_JobBenefits_Jobs_JobId",
                        column: x => x.JobId,
                        principalTable: "Jobs",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "JobRequirments",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BsonId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreatedBy = table.Column<int>(type: "int", nullable: false),
                    CreatedOn = table.Column<DateTime>(type: "datetime2", nullable: true),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    JobId = table.Column<int>(type: "int", nullable: false),
                    RequirmentId = table.Column<int>(type: "int", nullable: false),
                    UpdatedBy = table.Column<int>(type: "int", nullable: false),
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

            migrationBuilder.CreateTable(
                name: "JobResponsibilityTypes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BsonId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreatedBy = table.Column<int>(type: "int", nullable: false),
                    CreatedOn = table.Column<DateTime>(type: "datetime2", nullable: true),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    JobId = table.Column<int>(type: "int", nullable: false),
                    ResponsibilityTypeId = table.Column<int>(type: "int", nullable: false),
                    UpdatedBy = table.Column<int>(type: "int", nullable: false),
                    UpdatedOn = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_JobResponsibilityTypes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_JobResponsibilityTypes_Jobs_JobId",
                        column: x => x.JobId,
                        principalTable: "Jobs",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_JobResponsibilityTypes_ResponsibilityType_ResponsibilityTypeId",
                        column: x => x.ResponsibilityTypeId,
                        principalTable: "ResponsibilityType",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_JobBenefits_BenefitTypesId",
                table: "JobBenefits",
                column: "BenefitTypesId");

            migrationBuilder.CreateIndex(
                name: "IX_JobBenefits_JobId",
                table: "JobBenefits",
                column: "JobId");

            migrationBuilder.CreateIndex(
                name: "IX_JobRequirments_JobId",
                table: "JobRequirments",
                column: "JobId");

            migrationBuilder.CreateIndex(
                name: "IX_JobRequirments_RequirmentId",
                table: "JobRequirments",
                column: "RequirmentId");

            migrationBuilder.CreateIndex(
                name: "IX_JobResponsibilityTypes_JobId",
                table: "JobResponsibilityTypes",
                column: "JobId");

            migrationBuilder.CreateIndex(
                name: "IX_JobResponsibilityTypes_ResponsibilityTypeId",
                table: "JobResponsibilityTypes",
                column: "ResponsibilityTypeId");
        }
    }
}
