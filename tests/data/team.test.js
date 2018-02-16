import schema from '../schema/team.json';
import teamData from '../../src/data/team.json';

it('validates the team.json', () => {
  jestExpect(teamData).toMatchSchema(schema);
});
