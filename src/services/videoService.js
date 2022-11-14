import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://pjezbcwjdfzwpvejicfu.supabase.co";
const PUBLIC_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqZXpiY3dqZGZ6d3B2ZWppY2Z1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzOTg0MzEsImV4cCI6MTk4Mzk3NDQzMX0.7ejCFpdEa8Ck_FUNvVAz2H5VuNDhQfJMUCt_XdndVQE";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
  return {
    getAllVideos() {
      return supabase.from("video").select("*");
    },
  };
}
