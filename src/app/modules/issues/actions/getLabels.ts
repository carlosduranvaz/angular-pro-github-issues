import {GithubLabel} from '../interfaces/github-label.interface';
import {sleep} from '@helpers/sleep';

export const getLabels = async (): Promise<GithubLabel[]> => {
  await sleep(1500);

  try {
  const resp = await fetch(`https://api.github.com/repos/angular/angular/labels`);

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
