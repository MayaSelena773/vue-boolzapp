
// Milestone 4
// Ricerca utenti: scrivendo qualcosa nell’input a sinistra, 
// vengono visualizzati solo i contatti il cui nome contiene le lettere inserite 
// (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)


var app = new Vue (
	{
		el: '#root',
		data: {
			contactsFilterText:'',
			newWrittenMsg:'',
			currentActiveContact:0,
			contacts: [
				{
					name: 'Michele',
					avatar: '_1',
					visible: true,
					messages: [
						{
							date: '10/01/2020 15:30:55',
							text: 'Hai portato a spasso il cane?',
							status: 'sent'
						},
						{
							date: '10/01/2020 15:50:00',
							text: 'Ricordati di dargli da mangiare',
							status: 'sent'
						},
						{
							date: '10/01/2020 16:15:22',
							text: 'Tutto fatto!',
							status: 'received'
						}
					],
				},
				{
					name: 'Fabio',
					avatar: '_2',
					visible: true,
					messages: [
						{
							date: '20/03/2020 16:30:00',
							text: 'Ciao come stai?',
							status: 'sent'
						},
						{
							date: '20/03/2020 16:30:55',
							text: 'Bene grazie! Stasera ci vediamo?',
							status: 'received'
						},
						{
							date: '20/03/2020 16:35:00',
							text: 'Mi piacerebbe ma devo andare a fare la spesa.',
							status: 'sent'
						}
					],
				},
				{
					name: 'Samuele',
					avatar: '_3',
					visible: true,
					messages: [
						{
							date: '28/03/2020 10:10:40',
							text: 'La Marianna va in campagna',
							status: 'received'
						},
						{
							date: '28/03/2020 10:20:10',
							text: 'Sicuro di non aver sbagliato chat?',
							status: 'sent'
						},
						{
							date: '28/03/2020 16:15:22',
							text: 'Ah scusa!',
							status: 'received'
						}
					],
				},
				{
					name: 'Luisa',
					avatar: '_4',
					visible: true,
					messages: [
						{
							date: '10/01/2020 15:30:55',
							text: 'Lo sai che ha aperto una nuova pizzeria?',
							status: 'sent'
						},
						{
							date: '10/01/2020 15:50:00',
							text: 'Si, ma preferirei andare al cinema',
							status: 'received'
						}
					],
				},
			]
		},
		
		methods: {
			//Al click sul contatto si visualizzano i suoi dati e i messaggi
			setActiveContact(contactIndex) {
				this.currentActiveContact = contactIndex;
			},
			addNewMessage() {

				if(this.newWrittenMsg.length > 0) {


				  //push del nuovo messaggio 
				  //nell'array dei messaggi del contatto selezionato
				  //con data e ora attuali 
				  const newMessage = {
					  date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
					  text: this.newWrittenMsg,
					  status: 'sent'
				  };

				 this.contacts[this.currentActiveContact].messages.push(newMessage);

				  //dopo svuoto la input
				  this.newWrittenMsg = '';

				 //risposta del contatto dopo un secondo dal nuovo messaggio
				  setTimeout(() => {

					  const newReply = {
						  date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
						  text: 'ok',
						  status: 'received'
					  };

					  this.contacts[this.currentActiveContact].messages.push(newReply);

				  }, 1000);

				}
			},
			//a seconda delle lettere inserite nella search area
			//compaiono i contatti che sono composti da quelle lettere
			//altrimenti non compare nulla
			filterContacts() {
				const filterTextLower = this.contactsFilterText.toLowerCase();

				this.contacts.forEach((element) => {

					const contactNameLower = element.name.toLowerCase();

					if(contactNameLower.includes(filterTextLower)) {
						element.visible = true;

					}else {
						element.visible = false;
					}
				}
				)

			},
		}
	}
	);
