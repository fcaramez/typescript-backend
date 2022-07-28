declare namespace Express {
  export interface Request {
    user?: object;
    session?: any;
    file?: File | any;
  }
}
