import crypto from 'crypto';

// Gera um UUID v4
const uuid = crypto.randomUUID();
console.log(`UUID v4: ${uuid}`);

// Gera um UUID v7
// const uuid7 = crypto.randomUUID(7);
// console.log(`UUID v7: ${uuid7}`);