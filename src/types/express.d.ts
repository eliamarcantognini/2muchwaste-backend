declare global {
  namespace Express {
    export interface Request {
      session: any;
      userID: string;
    }
  }
}
