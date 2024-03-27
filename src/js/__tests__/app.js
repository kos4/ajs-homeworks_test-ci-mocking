import fetchData from '../http';
import getLevel from '../app';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('get info lvl for user by id success', () => {
  fetchData.mockReturnValue({ status: 'ok', level: 1 });

  const level = getLevel(1);
  expect(level).toBe('Ваш текущий уровень: 1');
});

beforeEach(() => {
  jest.resetAllMocks();
});

test('get info lvl for user by id fail', () => {
  fetchData.mockReturnValue({ status: 'error' });

  const level = getLevel(1);
  expect(level).toBe('Информация об уровне временно недоступна');
});
