import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class RegisterUser extends Model<RegisterUser> {
  @Column({
    type: DataType.STRING(20),
    allowNull: false,
  })
  IdNumber: string;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  Email: string;

  @Column({
    type: DataType.STRING(20),
    allowNull: false,
  })
  Phone: string;
}
