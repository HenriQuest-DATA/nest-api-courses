import { CoursesService } from './courses.service';
import { Body, Controller, Get, Param, Post, Delete, Query } from '@nestjs/common';
import { courseDTO } from './course.dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { ApiCreatedResponse } from '@nestjs/swagger/dist';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  @ApiOkResponse({ description: 'API GET All Courses OK' }) // swagger
  async getRun() {
    const courses = await this.coursesService.getCourses();
    return courses;
  }

  @Get(':id')
  @ApiOkResponse({ description: 'API GET 1 Course OK' }) // swagger
  async getRunWithId(@Param() params) {
    const course = await this.coursesService.getCourse(params);
    return course;
  }

  @Post()
  @ApiCreatedResponse({ description: 'API Course Added' }) // swagger
  async postCourse(@Body() body: courseDTO) {
    const courses = await this.coursesService.postCourse(body);
    return courses;
  }

  @Delete()
  @ApiOkResponse({ description: 'API Course Deleted' }) // swagger
  async deleteCourse(@Query() query) {
    const courses = await this.coursesService.deleteCourse(query);
    return courses;
  }
}


// npm i @nestjs/swagger swagger-ui-express