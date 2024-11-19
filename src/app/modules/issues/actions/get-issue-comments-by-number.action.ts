import {GithubIssueComment} from '../interfaces';
import {sleep} from '@helpers/sleep';
import {environment} from '@env/environment.development';

const BASE_URL: string = environment.baseUrl;
const GITHUB_TOKEN: string = environment.gitHubToken;

export const getIssueCommentsByNumber = async ( issueNumber: string): Promise<GithubIssueComment[]> => {
  await sleep(1500);

  try {
    const resp = await fetch(
      `${ BASE_URL }/issues/${ issueNumber }/comments`,
      {
        headers: {
          Authorization: `Bearer ${ GITHUB_TOKEN }`
        }
      }
    );

    if (!resp.ok) {
      throw `Can't load issue comments`;
    }

    const issueComments: GithubIssueComment[] = await resp.json() as GithubIssueComment[];
    console.log({issueComments});

    return issueComments;
  } catch (error) {
    throw `Can't load issue comments`
  }
}
