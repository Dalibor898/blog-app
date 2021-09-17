import HttpService from "./HttpService";

class PostsService extends HttpService
{
  getAll = async () => {
    const { data } = await this.apiCall.get('/posts');

    return data;
  }
}

export default new PostsService();