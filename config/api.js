import { API_ROOT } from '@/config';

export async function fetchHomepage () {
  return await fetch(API_ROOT + '/homepage?populate=*').then(res => res.json())
}