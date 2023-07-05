import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateEntitieOperatorAddUniqueInName1688558502166 implements MigrationInterface {
    name = 'UpdateEntitieOperatorAddUniqueInName1688558502166'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`operators\` ADD UNIQUE INDEX \`IDX_91c57c457bf3d85869ba86c20d\` (\`name\`)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`operators\` DROP INDEX \`IDX_91c57c457bf3d85869ba86c20d\``);
    }

}
