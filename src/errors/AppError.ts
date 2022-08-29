export class AppError extends Error {
  statusCode;
  message;

  constructor(message: string, statusCode: number = 400) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}
