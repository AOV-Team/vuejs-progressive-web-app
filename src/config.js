import path from 'path';
import env from '../build/env.json';

// Get the current environment variable or default to 'development'
const nodeEnv = process.env.NODE_ENV || 'development';
export { nodeEnv };

// Defaults to 'development'
export default function() {
    return env[nodeEnv];
}
