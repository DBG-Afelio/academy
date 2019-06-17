ch1 = 'azerty';
reg = /[a-z]/i;// Contient au moins un car non accentué

reg.test(ch1);

reg = /^[a-z]$/i;// un seul caractère de a à Z
reg.test(ch1);//false
reg.test('c');//true
reg.test('3');//false

reg = /^[ABCa-z]{0,3}$/; // de 0 à 3 soit ABC soit a-z
reg.test('c');//true
reg.test('');//true
reg.test('AbC');//true
reg.test('ABCa-z');//false

//typescript
reg = /[tT]ype/;// type ou Type quelque part dans la chaine


"02/12/2002".replace(/\//g,'-'); //"02-12-2002"