import { matchers } from 'jest-json-schema';

import schema from '../schema/team.json';
import teamData from '../../src/data/team.json';

expect.extend(matchers);

it('validates the team.json', () => {
  expect(teamData).toMatchSchema(schema);
});
