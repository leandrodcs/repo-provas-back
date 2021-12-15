import dotenv from 'dotenv';

// eslint-disable-next-line no-multi-assign
let path = process.env.NODE_ENV = '.env.test';
if (process.env.NODE_ENV === 'production') path = '.env';
if (process.env.NODE_ENV === 'dev') path = '.env.dev';

dotenv.config({ path });
