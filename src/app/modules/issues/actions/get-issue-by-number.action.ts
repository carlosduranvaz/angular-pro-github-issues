import {GithubIssue} from '../interfaces';
import {sleep} from '@helpers/sleep';
import {environment} from '@env/environment.development';

const BASE_URL: string = environment.baseUrl;
const GITHUB_TOKEN: string = environment.gitHubToken;

export const getIssueByNumber = async ( issueNumber: string): Promise<GithubIssue> => {
  await sleep(1500);

  try {
    const resp = await fetch(
      `${ BASE_URL }/issues/${ issueNumber }`,
      {
        headers: {
          Authorization: `Bearer ${ GITHUB_TOKEN }`
        }
      }
    );

    if (!resp.ok) {
      throw `Can't load issues`;
    }

    const issue: GithubIssue = await resp.json() as GithubIssue;
    console.log({issue});

    return issue;
  } catch (error) {
    throw `Can't load issues`
  }
}
