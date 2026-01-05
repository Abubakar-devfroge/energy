import { redirect } from '@sveltejs/kit';
import { supabase } from '$lib/supabase/client';

export async function GET({ cookies }) {
	// Clear the session cookie (if you set one)
	cookies.delete('sb-access-token', { path: '/' });

	// Optionally revoke the Supabase session
	// (if using Supabase server-side logout flow)
	await supabase.auth.signOut();

	throw redirect(302, '/login');
}
