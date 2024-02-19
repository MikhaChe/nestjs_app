import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({example: 'user@gmail.com', description: 'Email adress'})
  readonly email: string;
  @ApiProperty({example: '12345', description: 'New password'})
  readonly password:  string;
}