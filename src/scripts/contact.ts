import { Functionality } from './type';

class ContactForm implements Functionality {
	private contactForm = document.querySelector('#contact-form');

	private nameInput = this.contactForm.querySelector('input[name="name"]') as HTMLInputElement;
	private emailInput = this.contactForm.querySelector('input[name="email"]') as HTMLInputElement;
	private phoneInput = this.contactForm.querySelector('input[name="phone"]') as HTMLInputElement;
	private messageInput = this.contactForm.querySelector('textarea[name="message"]') as HTMLTextAreaElement;

	init(): void {
		this.contactForm.addEventListener('submit', this.handleSubmit);
	}

	private handleSubmit = async (e: Event): Promise<void> => {
		e.preventDefault();

		const name = this.nameInput.value;
		const email = this.emailInput.value;
		const phone = this.phoneInput.value;
		const message = this.messageInput.value;

		console.log(name, email, phone, message);

		try {
			await this.sendMessage(name, email, phone, message);
			console.log('Dane wysłane pomyślnie.');
		} catch (error) {
			console.error('Wystąpił błąd podczas wysyłania danych:', error);
		}
	};

	private async sendMessage(name: string, email: string, phone: string, message: string): Promise<void> {
		try {
			const response = await fetch('http://localhost/message.php', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ name, email, phone, message }),
			});

			if (!response.ok) {
				throw new Error('Wysyłanie danych nie powiodło się.');
			}
		} catch (error) {
			throw new Error('Wystąpił błąd podczas wysyłania danych:' + error);
		}
	}
}

export { ContactForm };
