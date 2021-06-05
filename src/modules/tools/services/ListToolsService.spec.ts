import FakeToolsRepository from '@modules/tools/repositories/fakes/FakeToolsRepository';
import ListToolsService from './ListToolsService';

let fakeToolsRepository: FakeToolsRepository;
let listToolsService: ListToolsService;

describe('ListTools', () => {
  beforeEach(() => {
    fakeToolsRepository = new FakeToolsRepository();
    listToolsService = new ListToolsService(fakeToolsRepository);
  });

  it('should be able to list the tools', async () => {
    const tool = await fakeToolsRepository.create({
      title: 'some-title',
      description: 'some-description',
      link: 'some-link',
      tags: ['some-tag-01'],
    });

    const tools = await listToolsService.execute();

    expect(tools).toEqual([tool]);
  });

  it('should be able to list the empty tools array', async () => {
    const tools = await listToolsService.execute();
    expect(tools).toEqual([]);
  });
});
