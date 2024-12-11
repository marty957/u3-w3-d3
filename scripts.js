/* ts a differenza di js è fortemente tipicizzato, serve per rendere il codice piu pulito e aiuta gli sviluppatori a fare meno errori.
E' un linguaggio sviluppato da Microsoft, che analizza il codice molto piu a fondo di js. usato per le applicazioni di medie/grandi dimensioni. H aperò anora bisogno di un convertitore automatico.
il compilatore automatico è il tsc. per avere il compilatore in modalità watch bisogna scrivere nel terminal:
tsc <nome file> -w
cosi il file js sarà aggiornato in automatico ad ogni salvataggio.

il type inference in poche parole è che una volta assegnato il tyoe ad un variabile/array/aggetto/funzione non puo essere modificato. se è un stringa deve rimanere una stringa.


il tipo "any" assegnato a qualcosa andrebbe evitato perche di fatto snatura ts. con questo tipo posso associare qualsiasi tipo di dato senza avere errore.
il type union mi permette di stabilire all'inizio che il type può essere o uno o l'altro per es:
type myVar= string|number
let data:myVar=100
let date:myVar="100"

*/
