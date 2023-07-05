import { MigrationInterface, QueryRunner } from "typeorm";

export class CretaInitialMigrations1688558112381 implements MigrationInterface {
    name = 'CretaInitialMigrations1688558112381'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`operators\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(120) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`clients\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(120) NOT NULL, \`email\` varchar(120) NOT NULL, \`bithDate\` varchar(120) NOT NULL, \`value\` varchar(120) NOT NULL, \`operatorId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`clients\` ADD CONSTRAINT \`FK_15d68d97498e77fd81eb92be644\` FOREIGN KEY (\`operatorId\`) REFERENCES \`operators\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`clients\` DROP FOREIGN KEY \`FK_15d68d97498e77fd81eb92be644\``);
        await queryRunner.query(`DROP TABLE \`clients\``);
        await queryRunner.query(`DROP TABLE \`operators\``);
    }

}
