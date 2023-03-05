import { IsNotEmpty, Length } from 'class-validator';

export class CreateUserBody {
  @IsNotEmpty({
    message: 'name cannot be empty',
  })
  @Length(3, 50)
  name: string;

  bio: string;
}

export class UpdateUser {
  nameToUpdate: string;

  @IsNotEmpty({
    message: 'name cannot be empty',
  })
  @Length(3, 50)
  newName: string;
}

export class DeleteUserBody {
  nameToRemove: string;
}
