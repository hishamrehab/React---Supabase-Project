import { createClient } from "@supabase/supabase-js";
// To be more secure  .env file. 
const supabaseURl = "https://enwyooyewnubtjdsfdcd.supabase.co";
const supabaseAnonkey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVud3lvb3lld251YnRqZHNmZGNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM0NTI3NzYsImV4cCI6MjAyOTAyODc3Nn0.jetcBf2At3mW4RIGZC-h7GqWWC2lUOiLHDxB06ikzvg";


export const supabase = createClient(supabaseURl, supabaseAnonkey);
