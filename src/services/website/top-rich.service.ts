import { UserModel } from '@models/user.model';
import { TopRichReponseInterface } from '@interfaces/reponse/top.reponse.interface';
import { linkAvatar } from '@utils/link';

export default class TopRichService {
  public async all(limit: number): Promise<TopRichReponseInterface[]> {
    const users: UserModel[] = await UserModel.findAll({
      limit: limit,
      attributes: ['id', 'username', 'fullname', 'nickname', 'avatar'],
    });
    const topAll: TopRichReponseInterface[] = [];
    users.forEach(function (user) {
      topAll.push({
        id: user.id,
        avatar: linkAvatar(user.avatar),
        fullname: user.fullname,
        nickname: user.nickname,
        username: user.username,
      });
    });
    return topAll;
  }
}
