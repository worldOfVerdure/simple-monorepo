import type { FormValidationMessages } from '../../helpers/types';


export type ContactFormMessages = {
	validationMessages: FormValidationMessages;
	submitLabel: string;
	pendingSubmitLabel: string;
	pendingMessage: string;
	successMessage: string;
	errorMessage: string;
	rateLimitMessage: string;
};

export const contactFormMessages: ContactFormMessages = {
	validationMessages: {
		name: {
			valueMissing: 'Please enter your name',
			patternMismatch: "Use letters, spaces, ', or - only",
			containsHtml: 'HTML tags are not allowed',
			containsScriptTag: 'Script tags are not allowed'
		},
		email: {
			valueMissing: 'Please enter your email',
			typeMismatch: 'Please enter a valid email address',
			containsHtml: 'HTML tags are not allowed',
			containsScriptTag: 'Script tags are not allowed'
		},
		message: {
			valueMissing: 'Please enter a message',
			tooShort: 'Please write at least 10 characters',
			containsHtml: 'HTML tags are not allowed',
			containsScriptTag: 'Script tags are not allowed'
		}
	},
	submitLabel: 'Send message',
	pendingSubmitLabel: 'Sending...',
	pendingMessage: 'Submitting...',
	successMessage: 'Message submitted.',
	errorMessage: 'Something went wrong. Please try again.',
	rateLimitMessage: 'Please wait 1 hour to send another message.'
};
