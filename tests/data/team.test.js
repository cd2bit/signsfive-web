import schema from '../schema/team.json';
import teamData from '../../src/data/team.json';

describe('team.json', () => {
  it('validates the schema', () => {
    jestExpect(teamData).toMatchSchema(schema);
  });
});
