import { ApiProperty } from "@nestjs/swagger/dist";

export class courseDTO {
  @ApiProperty({ type: Number, description: 'ID'})
  readonly id: number;
  @ApiProperty({ type: String, description: 'Title of the course'})
  readonly title: string;
  @ApiProperty({ type: String, description: 'Description of the course'})
  readonly description: string;
}
