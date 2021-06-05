import FakeToolsRepository from '@modules/tools/repositories/fakes/FakeToolsRepository';
import DeleteToolByIdService from './DeleteToolByIdService';

let fakeToolsRepository: FakeToolsRepository;
let deleteToolById: DeleteToolByIdService;

describe('DeleteTools', () => {
  beforeEach(() => {
    fakeToolsRepository = new FakeToolsRepository();
    deleteToolById = new DeleteToolByIdService(fakeToolsRepository);
  });

  it('should be able to find a tool by tag', async () => {
    const toolOne = await fakeToolsRepository.create({
      title: 'some-title-01',
      description: 'some-description-01',
      link: 'some-link-01',
      tags: ['some-tag-01-01'],
    });

    const toolTwo = await fakeToolsRepository.create({
      title: 'some-title-03',
      description: 'some-description-03',
      link: 'some-link-03',
      tags: ['some-tag-01-03'],
    });

    await deleteToolById.execute({ id: toolOne.id });
    const tools = await fakeToolsRepository.listAll();

    expect(tools).toEqual([toolTwo]);
  });
});
