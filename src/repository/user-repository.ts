export abstract class UserRepository {
  abstract create(name: string, bio: string): Promise<void>;
  abstract update(nameToUpdate: string, newName: string): Promise<void>;
  abstract remove(nameToRemove: string): Promise<void>;
}
