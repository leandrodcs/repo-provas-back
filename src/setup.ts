import dotenv from 'dotenv';

// eslint-disable-next-line no-multi-assign
// eslint-disable-next-line no-nested-ternary
const path = process.env.NODE_ENV === 'test' ? '.env.test' : process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env';

dotenv.config({ path });
