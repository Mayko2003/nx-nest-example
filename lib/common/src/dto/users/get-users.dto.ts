import { IsNumber, IsPositive } from 'class-validator';

export class GetUsersDto {
  @IsNumber()
  @IsPositive()
  page!: number;

  @IsNumber()
  @IsPositive()
  limit!: number;
}
