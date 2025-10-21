import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const { name, email, message } = await request.json();

		// Validation
		if (!name || !email || !message) {
			return json(
				{ error: 'All fields are required' },
				{ status: 400 }
			);
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return json(
				{ error: 'Please provide a valid email address' },
				{ status: 400 }
			);
		}

		// Sanitize
		const cleanName = name.trim().substring(0, 100);
		const cleanEmail = email.trim().toLowerCase();
		const cleanMessage = message.trim().substring(0, 5000);

		// For development, we'll just simulate form submission
		// In production, this would send an actual email

		// Simulate some processing time
		await new Promise(resolve => setTimeout(resolve, 500));

		return json({
			success: true,
			message: 'Thank you! Your message has been received.'
		});

	} catch (error) {
		return json(
			{ error: 'Failed to send message. Please try again later.' },
			{ status: 500 }
		);
	}
};