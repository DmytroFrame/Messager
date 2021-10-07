import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class AuthDto {
    @ApiProperty({example: 'DmytroFrame', description: "Username"})
    @IsString()
    username: string

    @ApiProperty({example: '123567', description: "User password back in hash"})
    @IsString()
    password: string
}