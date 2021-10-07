import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { MessagesService } from './messages.service';
import { GetUsername } from 'src/decorators/username.decorator';



@UseGuards(JwtAuthGuard)
@Controller('message')
export class MessagesController {
    constructor(
        private readonly messagesService: MessagesService
    ) {}



    @Get()
    getAllUnRead() {
        return "debil"
    }


    @Get(':id')
    getAllMessageChanel(@Param('id') id: number) {

    }

    
    @Post()
    createNewMessage(@Body() body, @GetUsername() user: string) {

    }




    @Put()
    editMessage(@Body() body) {

    }

    @Delete()
    deleteMessage(@Param('id') id: number) {
        
    }

    

}
