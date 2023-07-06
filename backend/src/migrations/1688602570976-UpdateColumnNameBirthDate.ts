import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateColumnNameBirthDate1688602570976 implements MigrationInterface {
    name = 'UpdateColumnNameBirthDate1688602570976'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`clients\` CHANGE \`bithDate\` \`birthDate\` varchar(120) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`clients\` CHANGE \`birthDate\` \`bithDate\` varchar(120) NOT NULL`);
    }

}
