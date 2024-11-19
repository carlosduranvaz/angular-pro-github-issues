import {GithubLabel} from '../interfaces';
import {sleep} from '@helpers/sleep';
import {environment} from '@env/environment.development';

const BASE_URL: string = environment.baseUrl;
const GITHUB_TOKEN: string = environment.gitHubToken;

export const getLabels = async (): Promise<GithubLabel[]> => {
  await sleep(1500);

  try {
  const resp = await fetch(
    `${ BASE_URL }/labels`,
    {
      headers: {
        Authorization: `Bearer ${ GITHUB_TOKEN }`
      }
    }
  );

  if (!resp.ok) {
    throw `Can't load labels`;
  }

  const labels: GithubLabel[] = await resp.json() as GithubLabel[];
  console.log({labels});

  return labels;
  } catch (error) {
    throw `Can't load labels`
  }
}
