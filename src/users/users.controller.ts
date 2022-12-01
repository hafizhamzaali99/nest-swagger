import { Body, Controller, Get, NotFoundException, Param, Post, Query} from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { User } from './interfaces/User';
import { UsersService } from './users.service';
import { ApiCreatedResponse, ApiTags,ApiOkResponse,ApiQuery,ApiNotFoundResponse } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {

    constructor(private userService:UsersService){}

    @ApiOkResponse({type:User, isArray:true})
    @ApiQuery({name:"name",required:false})
    @ApiNotFoundResponse()
    @Get()
    getAllUsers(@Query('name') name:string): User[]{
        const user = this.userService.findAll(name)  // findAll return array and if no user so return empty array and empty array is also true so it will not go to exception error but empty object is false
        if(!user.length){
            throw new NotFoundException()
        }
        return user
    }
    
    @ApiOkResponse({type:User})
    @ApiNotFoundResponse() // use this for documented
    @Get(':id')
    getUserById(@Param('id') id:string ) :User{
        const user =  this.userService.findByID(parseInt(id))
        if(!user){
            throw new NotFoundException() //just give not found response but it is not documented
        }
        return user
    }

    @ApiCreatedResponse({type:User})
    @Post('create')
    createUser(@Body() body:UserDto) : User{
        const user =this.userService.createUser(body)
        return user
    }
}
