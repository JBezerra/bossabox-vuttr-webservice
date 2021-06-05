import FakeToolsRepository from '@modules/tools/repositories/fakes/FakeToolsRepository';
import FindToolsByTagService from './FindToolsByTagService';

let fakeToolsRepository: FakeToolsRepository;
let findToolsByTag: FindToolsByTagService;

describe('FindToolsByTag', () => {
  beforeEach(() => {
    fakeToolsRepository = new FakeToolsRepository();
    findToolsByTag = new FindToolsByTagService(fakeToolsRepository);
  });

  it('should be able to find and list tool', async () => {
    await fakeToolsRepository.create({
      title: 'some-title-01',
      description: 'some-description-01',
      link: 'some-link-01',
      tags: ['some-tag-01-01'],
    });

    const toolTwo = await fakeToolsRepository.create({
      title: 'some-title-02',
      description: 'some-description-02',
      link: 'some-link-02',
      tags: ['some-tag-01-02'],
    });

    await fakeToolsRepository.create({
      title: 'some-title-03',
      description: 'some-description-03',
      link: 'some-link-03',
      tags: ['some-tag-01-03'],
    });
    const tag = 'some-tag-01-02';
    const tools = await findToolsByTag.execute({ tag });

    expect(tools).toEqual([toolTwo]);
  });

  it('should be able to list the empty tools array', async () => {
    await fakeToolsRepository.create({
      title: 'some-title-01',
      description: 'some-description-01',
      link: 'some-link-01',
      tags: ['some-tag-01-01'],
    });

    await fakeToolsRepository.create({
      title: 'some-title-02',
      description: 'some-description-02',
      link: 'some-link-02',
      tags: ['some-tag-01-02'],
    });

    await fakeToolsRepository.create({
      title: 'some-title-03',
      description: 'some-description-03',
      link: 'some-link-03',
      tags: ['some-tag-01-03'],
    });
    const tag = 'random-tag';
    const tools = await findToolsByTag.execute({ tag });
    expect(tools).toEqual([]);
  });
});
