import { Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class UsersEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', nullable: false})
    name: string;

    @Column({ type: 'varchar', nullable: false})
    email: string;

    @Column({ type: 'varchar', nullable: false})
    password: string;

}
