const { Pool } = require('pg')
const pool = new Pool({
  user: '{exwvgkrqrdlmnh}',
  host: '{ec2-3-229-252-6.compute-1.amazonaws.com}',
  database: '{d9su1i7eqdn45p}',
  password: '{32eb5a4dbe6ba243fca174f6eab34d9a7a5dcd681c8bf9700af5cfbdffa68318}',
  port: {5432},
})
pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res) 
  pool.end() 
})