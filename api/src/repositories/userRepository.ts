import { PrismaClient } from "@prisma/client";

export default class UserRepository {
  private readonly prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getUserId(auth0Id: string): Promise<number | null> {
    const user = await this.prisma.userid.findUnique({
      where: {
        auth0id: auth0Id
      }
    });
    if (!user) {
      return null;
    }
    return user.id;
  }

  async getUserInfo(userId: number) {
    return this.prisma.userinfo.findUnique({
      where: {
        id: userId
      }
    });
  }
}