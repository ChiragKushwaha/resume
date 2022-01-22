// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import result from '../../public/schema.json';

export type TResumeJSON = typeof result;

export default function getResumeJson() {
  return JSON.stringify(result);
}
