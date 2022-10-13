import { createMockPool } from 'slonik';

import * as functions from '.';
import * as queries from '../../../queries/logto-config';
import { QueryType } from '../../../test-utilities';
import { chooseAlterationsByVersion } from './version';

const mockQuery: jest.MockedFunction<QueryType> = jest.fn();

const pool = createMockPool({
  query: async (sql, values) => {
    return mockQuery(sql, values);
  },
});

describe('getUndeployedAlterations()', () => {
  const files = Object.freeze([
    { filename: '1.0.0-1663923770-a.js', path: '/alterations/1.0.0-1663923770-a.js' },
    { filename: '1.0.0-1663923771-b.js', path: '/alterations/1.0.0-1663923771-b.js' },
    { filename: '1.0.0-1663923772-c.js', path: '/alterations/1.0.0-1663923772-c.js' },
  ]);

  beforeEach(() => {
    // `getAlterationFiles()` will ensure the order
    jest.spyOn(functions, 'getAlterationFiles').mockResolvedValueOnce([...files]);
  });

  it('returns all files if database timestamp is 0', async () => {
    jest.spyOn(queries, 'getCurrentDatabaseAlterationTimestamp').mockResolvedValueOnce(0);

    await expect(functions.getUndeployedAlterations(pool)).resolves.toEqual(files);
  });

  it('returns files whose timestamp is greater then database timestamp', async () => {
    jest
      .spyOn(queries, 'getCurrentDatabaseAlterationTimestamp')
      .mockResolvedValueOnce(1_663_923_770);

    await expect(functions.getUndeployedAlterations(pool)).resolves.toEqual([files[1], files[2]]);
  });
});

describe('chooseAlterationsByVersion()', () => {
  const files = Object.freeze(
    [
      '1.0.0_beta.9-1663923770-a.js',
      '1.0.0_beta.9-1663923771-b.js',
      '1.0.0_beta.10-1663923772-c.js',
      '1.0.0_beta.11-1663923773-c.js',
      '1.0.0_beta.11-1663923774-c.js',
      '1.0.0-1663923775-c.js',
      '1.0.0-1663923776-c.js',
      '1.0.1-1663923777-c.js',
      '1.2.0-1663923778-c.js',
      'next-1663923778-c.js',
      'next-1663923779-c.js',
      'next-1663923780-c.js',
      'next1-1663923781-c.js',
    ].map((filename) => ({ filename, path: '/alterations/' + filename }))
  );

  it('chooses nothing when input version is invalid', async () => {
    await expect(chooseAlterationsByVersion(files, 'next1')).rejects.toThrow(
      'Invalid Version: next1'
    );
    await expect(chooseAlterationsByVersion([], 'ok')).rejects.toThrow('Invalid Version: ok');
  });

  it('chooses correct alteration files', async () => {
    await Promise.all([
      expect(chooseAlterationsByVersion([], 'v1.0.0')).resolves.toEqual([]),
      expect(chooseAlterationsByVersion(files, 'v1.0.0')).resolves.toEqual(files.slice(0, 7)),
      expect(chooseAlterationsByVersion(files, 'v1.0.0-beta.10')).resolves.toEqual(
        files.slice(0, 3)
      ),
      expect(chooseAlterationsByVersion(files, 'v1.1.0')).resolves.toEqual(files.slice(0, 8)),
      expect(chooseAlterationsByVersion(files, 'v1.2.0')).resolves.toEqual(files.slice(0, 9)),
      expect(chooseAlterationsByVersion(files, 'next')).resolves.toEqual(files.slice(0, 11)),
    ]);
  });
});