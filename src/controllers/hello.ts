interface HelloResponse {
  message: string;
};

export class HelloController {
  public async getMessage(): Promise<HelloResponse> {
    return {
      message: 'Hello',
    };
  };
};
