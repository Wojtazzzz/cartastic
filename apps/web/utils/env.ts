import invariant from 'invariant';

invariant(process.env.NEXT_PUBLIC_APP_NAME, 'Missing APP_NAME environment variable');
invariant(process.env.NEXT_PUBLIC_APP_URL, 'Missing APP_URL environment variable');
invariant(process.env.NEXT_PUBLIC_API_URL, 'Missing API_URL environment variable');
invariant(process.env.NEXT_PUBLIC_DISCORD, 'Missing DISCORD environment variable');

export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME;
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL;
export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const DISCORD = process.env.NEXT_PUBLIC_DISCORD;
