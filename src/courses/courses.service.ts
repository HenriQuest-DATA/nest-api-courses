import { HttpException, Injectable } from '@nestjs/common';
import { COURSES } from './courses.mock';

@Injectable()
export class CoursesService {
  courses = COURSES;

  getCourses(): Promise<any> {
    return new Promise((resolve) => {
      resolve(this.courses);
    });
  }

  getCourse(params: any): Promise<any> {
    const id = Number(params.id);
    return new Promise((resolve) => {
      const course = this.courses.find((course) => course.id === id);
      if (!course) {
        throw new HttpException('O curso não existe', 404);
      }
      resolve(course);
    });
  }

  postCourse(body: any): Promise<any> {
    try {
      return new Promise((resolve) => {
          const newCourse = {
            id: body.id === (this.courses.length + 1) ? body.id : this.courses.length + 1,
            title: body.title,
            description: body.description,
          };
          this.courses.push(newCourse);
          resolve(this.courses);
      })
    } catch (e) {
      throw new HttpException(e.message, e.number);
    }
  }

  deleteCourse(query: any): Promise<any> {
    const id = Number(query.id);
    return new Promise((resolve) => {
      const index = this.courses.findIndex((course) => course.id === id);
      if (index === -1) {
        throw new HttpException('O curso não existe', 404);
      }
      this.courses.splice(index, 1);
      resolve(this.courses);
    })
  }
}
