import FakeToolsRepository from '@modules/tools/repositories/fakes/FakeToolsRepository';
import CreateToolService from './CreateToolService';

let fakeToolsRepository: FakeToolsRepository;
let createTool: CreateToolService;

describe('CreateTool', () => {
  beforeEach(() => {
    fakeToolsRepository = new FakeToolsRepository();
    createTool = new CreateToolService(fakeToolsRepository);
  });

  it('should be able to create tool', async () => {
    const tool = await createTool.execute({
      title: 'some-title',
      description: 'some-description',
      link: 'some-link',
      tags: ['some-tag-01'],
    });

    const tools = await fakeToolsRepository.listAll();

    expect(tools).toEqual([tool]);
  });
});
