import postgres from 'postgres'

const connectionString = process.env.DATABASE_URL=postgresql:postgres:QBLDYdCOyrKir0T6@db.ucuutlnweohffbngwtef.supabase.co:5432/postgres
const sql = postgres(connectionString)

export default sql