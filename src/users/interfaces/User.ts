import {ApiProperty} from '@nestjs/swagger'

export class User {

    @ApiProperty()
    userId?:number;
    
    @ApiProperty()
    name:string;
}