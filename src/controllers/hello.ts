import { Get, Route } from 'tsoa';

interface HelloResponse {
  message: string;
};

@Route('hello')
export class HelloController {
  @Get('/')
  public async getMessage(): Promise<HelloResponse> {
    return {
      message: 'Hello World',
    };
  };
};
