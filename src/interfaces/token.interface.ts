import { JwtPayload } from 'jsonwebtoken';

export interface TokenInterface extends JwtPayload {
  id: string;
  createdAt: Date;
}
