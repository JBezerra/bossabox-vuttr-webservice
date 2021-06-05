import FakeToolsRepository from '@modules/tools/repositories/fakes/FakeToolsRepository';

let fakeToolsRepository: FakeToolsRepository;

describe('ListTools', () => {
  beforeEach(() => {
    fakeToolsRepository = new FakeToolsRepository();
  });

  it('should be able to list the tools', async () => {
    const tool = await fakeToolsRepository.create({
      title: 'some-title',
      description: 'some-description',
      link: 'some-link',
      tags: ['some-tag-01'],
    });

    const tools = await fakeToolsRepository.listAll();

    expect(tools).toEqual([tool]);
  });
});
