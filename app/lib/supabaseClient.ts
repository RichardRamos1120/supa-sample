import { createClient } from '@supabase/supabase-js'

const supabaXT_PUBLseUrl = "https://cvfcuyxuswjwesoqknqn.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2ZmN1eXh1c3dqd2Vzb3FrbnFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgzNTIxNDcsImV4cCI6MjAzMzkyODE0N30.QaT1xa_yXY71OetpCkAPDa6VjcmHIf9K0hgklQMC0p8"
const supabase = createClient(supabaXT_PUBLseUrl, supabaseKey)

export default supabase