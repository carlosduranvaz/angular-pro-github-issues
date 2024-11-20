import {GithubIssue, State} from '../interfaces';
import {sleep} from '@helpers/sleep';
import {environment} from '@env/environment.development';

const BASE_URL: string = environment.baseUrl;
const GITHUB_TOKEN: string = environment.gitHubToken;

export const getIssues = async (
  state: State = State.All,
  selectedLabels: string[]
  ): Promise<GithubIssue[]> => {
  await sleep(1500);

  const params = new URLSearchParams();
  params.append('state', state);

  if(selectedLabels.length > 0) {
    params.append('labels', selectedLabels.join(','));
  }

  try {
    const resp = await fetch(
      `${ BASE_URL }/issues?${params}`,
      {
        headers: {
          Authorization: `Bearer ${ GITHUB_TOKEN }`
        }
      }
    );

    if (!resp.ok) {
      throw `Can't load issues`;
    }

    const issues: GithubIssue[] = await resp.json() as GithubIssue[];
    console.log({issues});

    return issues;
  } catch (error) {
    throw `Can't load issues`
  }
}
