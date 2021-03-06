import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

import { Currency } from '../../enums/currency.enum';
import { Level } from '../../enums/level.enum';

export class CreateTripDto {
  @IsNotEmpty()
  @IsString()
  public name: string;

  @IsString()
  public description: string;

  @IsString()
  public location: string;

  @IsNumber()
  public price: number;

  @IsString()
  public level: Level;

  @IsString()
  public currency: Currency;

  @IsString()
  public material: string;

  @IsString()
  public including: string;

  @IsString()
  public amenities: string;

  @IsNumber()
  public duration: number;

  @IsOptional()
  @IsString()
  public image: string;

  @IsNumber()
  public startTime: number;

  @IsBoolean()
  public dogFriendly: boolean;

  @IsOptional()
  @IsString()
  public comments: string;

  public availableDates: number[];

  public tags: string[];
}
