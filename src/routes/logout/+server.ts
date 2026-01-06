import { redirect } from '@sveltejs/kit';
import { supabase } from '$lib/supabase/client';

export async function GET() {
	await supabase.auth.signOut();
	throw redirect(302, '/login');
}
