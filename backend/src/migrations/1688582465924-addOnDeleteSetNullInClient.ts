import { MigrationInterface, QueryRunner } from "typeorm";

export class AddOnDeleteSetNullInClient1688582465924 implements MigrationInterface {
    name = 'AddOnDeleteSetNullInClient1688582465924'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`clients\` DROP FOREIGN KEY \`FK_15d68d97498e77fd81eb92be644\``);
        await queryRunner.query(`ALTER TABLE \`clients\` ADD CONSTRAINT \`FK_15d68d97498e77fd81eb92be644\` FOREIGN KEY (\`operatorId\`) REFERENCES \`operators\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`clients\` DROP FOREIGN KEY \`FK_15d68d97498e77fd81eb92be644\``);
        await queryRunner.query(`ALTER TABLE \`clients\` ADD CONSTRAINT \`FK_15d68d97498e77fd81eb92be644\` FOREIGN KEY (\`operatorId\`) REFERENCES \`operators\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
