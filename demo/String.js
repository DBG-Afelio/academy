ch1 = 'abcdefghij';

ch1.includes('cde');//true

ch1.includes('cde', 4);//false

ch1.includes('cde', 2);//true

ch1.startsWith('abc');//true

ch1.startsWith('cde');//false

ch1.startsWith('cde', 2);//true

ch1.endsWith('hij');//true

ch1.indexOf('cde');// 2
ch1.indexOf('aaa');// -1
ch1.indexOf('cde',4);// -1
ch1.indexOf('cde',2);// 2

ch1.slice(ch1.indexOf('cde')); //"cdefghij"
ch1.slice(ch1.indexOf('cde'), ch1.indexOf('hij')); //"cdefg"

ch1.toLowerCase();
ch1.toUpperCase();
(ch1+' ').trim();

ch2 = '2/12/2002';
ch2.split('/');
ch2.split('');

ch2.replace('/','-');