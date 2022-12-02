import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric,MinLength,MaxLength } from "class-validator";

export class UserDto {
    @ApiProperty()
    @IsAlphanumeric()
    @MinLength(4)
    @MaxLength(30)
    name:string;
}
