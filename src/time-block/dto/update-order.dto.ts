import { IsArray, IsString } from 'class-validator';

export class UpdateOrederDto {
	@IsArray()
	@IsString({ each: true })
	ids: string[];
}
