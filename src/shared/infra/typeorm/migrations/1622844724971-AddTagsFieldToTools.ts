import { MigrationInterface, QueryRunner } from 'typeorm';

export default class AddTagsFieldToTools1622844724971
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE tools ADD COLUMN tags varchar[]');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE tools DROP COLUMN tags');
  }
}
