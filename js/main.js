alert('Online so\'rovnomaga hush kelibsiz')

var firstName = prompt('Ismingizni kiriting', 'Avazbek');
var secandName = prompt('Familiangizni kiriting', 'Salimov');
var address = prompt ('Yashash manzilingizni kiriting','Samarqand');
var age = prompt( 'Yoshingizni kiriting', '23');
var interes = prompt('Qiziqgan sohangiz');
var professin = prompt('Kasbingizni kiriting','Dasturchi');
var workaddres = prompt('ish joyingiz', 'Silicon vodiysi');
var hobby = prompt('Qayssi sport turiga qiziqasiz?');
var like = prompt('Yoqtirgan filimingiz')
var trevel = prompt('Sayohat qilishni yoqtirasizmi?')
var stadyName = prompt("O'quv muassasangiz ", );
var gmail = prompt('Electron pochtangizni  kiriting', 'name949@gmail.com');
var password = prompt('Parolingizni kiriting', '83928_uz');

document.write('ism: ' + firstName + '<p>');
document.write('familiya: ' + secandName + '<p>');
document.write('yosh: ' + age + '<p>');
document.write('qiziqqan soha: ' + interes + '<p>');
document.write('kasb: ' + professin + '<p>');
document.write('ish joy: ' + workaddres + '<p>');
document.write('yoqtirgan sport turi: ' + hobby + '<p>');
document.write('sevimli filmi: ' + like + '<p>');
document.write('sayohat qilishni yoqtirasizmi?: ' + trevel + '<p>');
document.write('o\'quv muassasasi: ' + stadyName + '<p>');
document.write('electron pochta: ' +gmail + '<p>');
document.write('parol: ' + password + '<p>');
alert('erinmasdan so\'rovnomani to\'ldirganingiz uchun rahmat!')

console.log(
	'ism: ' +
		firstName +
		'\nfamiliya: ' +
		secandName +
		'\nyashash manzil: ' +
		address +
		'\nyosh: ' +
		age +
		'\nqiziqqan soha: ' +
		interes +
		'\nkasb: ' +
		professin +
		'\nish joy: ' +
		workaddres +
		'\nyoqtirgan sport turi: ' +
		hobby +
		'\nsevimli filmi: ' +
		like +
		'\nsayohat qilishni yoqtirasizmi?: ' +
		trevel +
		'\n0\'quv muassasasi: ' +
		stadyName +
		'\nelectron pochta: ' +
		gmail +
		'\nparol: ' +
		password ,
)
